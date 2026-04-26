#!/usr/bin/env python3
"""
Convert a LaTeX .toc file (e.g. Sphinx/JupyterBook output) to a Markdown table or CSV.

Expected input format (examples):
  \\contentsline {section}{\\numberline {1.1}Title}{5}{section.1.1}%
  \\contentsline {subsubsection}{Unnumbered title}{11}{subsubsection*.5}%

Output columns (both formats):
  1) Name (hierarchical path: part / chapter / section / ...)
  2) Number (e.g. 1.1.2)
  3) Pages (estimated from start-page differences)
  4) Label assigned by human (empty)
  5) Label assigned by LLM (empty)
"""

from __future__ import annotations

import argparse
import csv
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, Optional


LEVEL_RANK = {
    "part": 0,
    "chapter": 1,
    "section": 2,
    "subsection": 3,
    "subsubsection": 4,
    "paragraph": 5,
}

INCLUDE_LEVELS = {"part", "chapter", "section", "subsection"}


@dataclass(frozen=True)
class TocEntry:
    level: str
    title: str
    number: str
    page: int


def _extract_braced_groups_after(prefix: str, line: str, n: int) -> Optional[list[str]]:
    """
    Extract n braced groups { ... } following a prefix.
    Handles nested braces in the groups.
    """
    idx = line.find(prefix)
    if idx < 0:
        return None
    i = idx + len(prefix)

    groups: list[str] = []
    while len(groups) < n:
        while i < len(line) and line[i].isspace():
            i += 1
        if i >= len(line) or line[i] != "{":
            return None
        i += 1  # skip '{'
        depth = 1
        start = i
        while i < len(line) and depth:
            c = line[i]
            if c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
            i += 1
        if depth != 0:
            return None
        groups.append(line[start : i - 1])
    return groups


_NUMBERLINE_RE = re.compile(r"\\numberline\s*\{([^}]*)\}")


def _strip_latex(s: str) -> str:
    """
    Very small LaTeX -> text normalizer for TOC titles.
    Keeps readable output; not a full LaTeX parser.
    """
    # Common Sphinx inserts
    s = s.replace(r"\sphinxhyphen {}", "-")
    s = s.replace(r"\sphinxhyphen", "-")
    s = s.replace(r"\hspace {1em}", " ")
    s = s.replace(r"\ignorespaces", "")
    s = s.replace(r"\relax", "")
    s = s.replace("~", " ")

    # Unwrap a few known formatting macros while keeping their content.
    # Example: \sphinxstylestrong {75 in BCD} -> 75 in BCD
    s = re.sub(r"\\(sphinxstylestrong|textbf|textit|emph)\s*\{([^}]*)\}", r"\2", s)

    # \sphinxstyleliteralintitle {\sphinxupquote {list}} -> list
    s = re.sub(r"\\sphinxstyleliteralintitle\s*\{([^}]*)\}", r"\1", s)
    s = re.sub(r"\\sphinxupquote\s*\{([^}]*)\}", r"\1", s)

    # Remove remaining commands like \selectlanguage, \foo, etc.
    s = re.sub(r"\\[a-zA-Z@]+(\s*\*)?", "", s)

    # Drop leftover braces
    s = s.replace("{", "").replace("}", "")

    # Collapse whitespace
    s = re.sub(r"\s+", " ", s).strip()
    return s


def parse_toc_entries(lines: Iterable[str]) -> list[TocEntry]:
    entries: list[TocEntry] = []
    for raw in lines:
        line = raw.strip()
        if not line.startswith(r"\contentsline"):
            continue

        groups = _extract_braced_groups_after(r"\contentsline", line, 4)
        if not groups:
            continue

        level = groups[0].strip()
        if level not in LEVEL_RANK:
            # Ignore other TOC entry types.
            continue
        if level not in INCLUDE_LEVELS:
            # Only list up to subsection level.
            continue

        title_raw = groups[1].strip()
        page_raw = groups[2].strip()

        m = _NUMBERLINE_RE.search(title_raw)
        if m:
            number = _strip_latex(m.group(1))
            title_raw = _NUMBERLINE_RE.sub("", title_raw, count=1)
        else:
            number = ""

        title = _strip_latex(title_raw)

        try:
            page = int(re.sub(r"[^\d]", "", page_raw))
        except ValueError:
            continue

        entries.append(TocEntry(level=level, title=title, number=number, page=page))
    return entries


def compute_page_counts(entries: list[TocEntry]) -> list[Optional[int]]:
    """
    Estimate pages spanned by each entry by looking for the next TOC entry
    (i.e. page difference to the next line in the .toc, independent of level).
    """
    counts: list[Optional[float]] = [None] * len(entries)
    for i, e in enumerate(entries):
        if i + 1 >= len(entries):
            counts[i] = None
        else:
            next_page = entries[i + 1].page
            diff = max(0, next_page - e.page)
            # If the next entry starts on the same page, still count "some content".
            counts[i] = 0.5 if diff == 0 else float(diff)
    return counts


def build_paths(entries: list[TocEntry]) -> list[str]:
    stack: dict[int, str] = {}
    paths: list[str] = []
    for e in entries:
        r = LEVEL_RANK[e.level]
        stack[r] = e.title
        # Drop deeper levels when we move up
        for k in list(stack.keys()):
            if k > r:
                del stack[k]
        path = " / ".join(stack[i] for i in sorted(stack.keys()))
        paths.append(path)
    return paths


def _md_escape(s: str) -> str:
    return s.replace("|", r"\|")


def to_markdown_table(entries: list[TocEntry]) -> str:
    paths = build_paths(entries)
    page_counts = compute_page_counts(entries)

    out: list[str] = []
    out.append("| Name | Zahl | Seitenanzahl | Label (human) | Label (LLM) |")
    out.append("|---|---:|---:|---|---|")
    for e, p, c in zip(entries, paths, page_counts):
        if c is None:
            count_str = ""
        elif c == 0.5:
            count_str = "0,5"
        else:
            # Render whole numbers without trailing .0
            count_str = str(int(c)) if float(c).is_integer() else str(c).replace(".", ",")
        out.append(
            f"| {_md_escape(p)} | {e.number} | {count_str} |  |  |"
        )
    return "\n".join(out) + "\n"


def _format_pages_for_excel(c: Optional[float]) -> str:
    """
    Excel-friendly formatting:
    - empty for unknown
    - 0.5 stays '0.5' (Excel expects dot as decimal separator in CSV)
    - whole numbers as 'N'
    """
    if c is None:
        return ""
    if c == 0.5:
        return "0.5"
    return str(int(c)) if float(c).is_integer() else str(c)


def to_csv(entries: list[TocEntry]) -> str:
    paths = build_paths(entries)
    page_counts = compute_page_counts(entries)

    from io import StringIO

    buf = StringIO()
    w = csv.writer(buf)
    w.writerow(["Name", "Zahl", "Seitenanzahl", "Label (human)", "Label (LLM)"])
    for e, p, c in zip(entries, paths, page_counts):
        w.writerow([p, e.number, _format_pages_for_excel(c), "", ""])
    return buf.getvalue()


def _detect_format_from_path(path: Optional[Path]) -> str:
    if path is None:
        return "md"
    suf = path.suffix.lower()
    if suf == ".csv":
        return "csv"
    if suf in {".xlsx"}:
        return "xlsx"
    if suf in {".md", ".markdown", ""}:
        return "md"
    # Default to markdown for unknown extensions.
    return "md"


def main() -> int:
    ap = argparse.ArgumentParser(description="Convert LaTeX .toc to a Markdown table or CSV.")
    ap.add_argument("toc", type=Path, help="Input .toc file (e.g. book-print.toc).")
    ap.add_argument(
        "-o",
        "--output",
        type=Path,
        default=None,
        help="Output file (.md or .csv). If omitted, prints Markdown to stdout.",
    )
    ap.add_argument(
        "--also-md",
        type=Path,
        default=None,
        help="Additionally write Markdown output to this path (useful to generate both CSV + MD).",
    )
    ap.add_argument(
        "--also-csv",
        type=Path,
        default=None,
        help="Additionally write CSV output to this path (useful to generate both MD + CSV).",
    )
    args = ap.parse_args()

    text = args.toc.read_text(encoding="utf-8", errors="replace").splitlines()
    entries = parse_toc_entries(text)

    written: list[Path] = []
    written_set: set[Path] = set()

    if args.also_md:
        args.also_md.parent.mkdir(parents=True, exist_ok=True)
        args.also_md.write_text(to_markdown_table(entries), encoding="utf-8")
        if args.also_md not in written_set:
            written.append(args.also_md)
            written_set.add(args.also_md)
    if args.also_csv:
        args.also_csv.parent.mkdir(parents=True, exist_ok=True)
        args.also_csv.write_text(to_csv(entries), encoding="utf-8")
        if args.also_csv not in written_set:
            written.append(args.also_csv)
            written_set.add(args.also_csv)

    fmt = _detect_format_from_path(args.output)
    out = to_csv(entries) if fmt == "csv" else to_markdown_table(entries)

    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(out, encoding="utf-8")
        if args.output not in written_set:
            written.append(args.output)
            written_set.add(args.output)
    else:
        print(out, end="")
        return 0

    if written:
        # Keep output short and CI-friendly.
        for p in written:
            print(f"Wrote: {p}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

