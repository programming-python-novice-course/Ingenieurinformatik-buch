#!/usr/bin/env python3
"""
Merge a human-labelled CSV and an LLM-labelled Markdown table into one result table
(CSV or Markdown).

Intended workflow:
1) Generate base tables from the PDF TOC:
   - CSV for humans (edited in Excel): fill "Label (human)"
   - Markdown for LLM: fill "Label (LLM)" (or keep other columns unchanged)
2) Merge both into a single result table for evaluation.

Merge key:
  (Name, Zahl)  -- both must match.

Notes:
  - Pages are taken from the human CSV (authoritative for weighting).
  - If a row exists only in one input, it is still included.
"""

from __future__ import annotations

import argparse
import csv
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Tuple


KEY = Tuple[str, str]  # (Name, Zahl)


@dataclass
class Row:
    name: str
    zahl: str
    pages: str
    label_human: str
    label_llm: str

    def key(self) -> KEY:
        return (self.name.strip(), self.zahl.strip())


def _norm_header(h: str) -> str:
    return re.sub(r"\s+", " ", h.strip().lower())


def read_human_csv(path: Path) -> Dict[KEY, Row]:
    with path.open("r", encoding="utf-8", newline="") as f:
        r = csv.DictReader(f)
        if not r.fieldnames:
            raise ValueError(f"No header found in {path}")
        fields = {_norm_header(x): x for x in r.fieldnames}

        def get(d, want: str) -> str:
            # accept a couple of variants
            for k in (want, want.replace("(", "").replace(")", ""), want.replace("  ", " ")):
                nk = _norm_header(k)
                if nk in fields:
                    return (d.get(fields[nk]) or "").strip()
            return ""

        out: Dict[KEY, Row] = {}
        for d in r:
            name = get(d, "Name")
            zahl = get(d, "Zahl")
            pages = get(d, "Seitenanzahl")
            label_h = get(d, "Label (human)")
            label_l = get(d, "Label (LLM)")
            row = Row(name=name, zahl=zahl, pages=pages, label_human=label_h, label_llm=label_l)
            if row.key() == ("", ""):
                continue
            out[row.key()] = row
        return out


def _split_md_row(line: str) -> List[str]:
    # Strip leading/trailing pipes and split. Keep empty cells.
    line = line.strip()
    if not (line.startswith("|") and line.endswith("|")):
        return []
    parts = [p.strip() for p in line.strip("|").split("|")]
    return parts


def read_llm_markdown_table(path: Path) -> Dict[KEY, Row]:
    lines = path.read_text(encoding="utf-8", errors="replace").splitlines()

    # Find header line (must contain Name and Zahl).
    header_idx = None
    header: List[str] = []
    for i, line in enumerate(lines):
        cells = _split_md_row(line)
        if not cells:
            continue
        norm = [_norm_header(c) for c in cells]
        if "name" in norm and "zahl" in norm:
            header_idx = i
            header = cells
            break
    if header_idx is None:
        raise ValueError(f"Could not find a markdown table header in {path}")

    # Data starts after the separator row (---).
    data_start = header_idx + 1
    if data_start < len(lines) and "---" in lines[data_start]:
        data_start += 1

    idx = {_norm_header(h): j for j, h in enumerate(header)}

    def cell(cells: List[str], name: str) -> str:
        j = idx.get(_norm_header(name))
        if j is None or j >= len(cells):
            return ""
        return cells[j].strip()

    out: Dict[KEY, Row] = {}
    for line in lines[data_start:]:
        cells = _split_md_row(line)
        if not cells:
            continue
        # Skip alignment/separator rows mid-table if any
        if all(set(c) <= {"-", ":", " "} for c in cells):
            continue

        name = cell(cells, "Name")
        zahl = cell(cells, "Zahl")
        pages = cell(cells, "Seitenanzahl")
        label_h = cell(cells, "Label (human)")
        label_l = cell(cells, "Label (LLM)")
        row = Row(name=name, zahl=zahl, pages=pages, label_human=label_h, label_llm=label_l)
        if row.key() == ("", ""):
            continue
        out[row.key()] = row
    return out


def merge(human: Dict[KEY, Row], llm: Dict[KEY, Row]) -> List[Row]:
    keys = sorted(set(human.keys()) | set(llm.keys()))
    merged: List[Row] = []
    for k in keys:
        h = human.get(k)
        l = llm.get(k)
        name = (h.name if h else l.name) if (h or l) else ""
        zahl = (h.zahl if h else l.zahl) if (h or l) else ""
        # pages from human (authoritative); else from llm; else empty
        pages = (h.pages if h and h.pages != "" else (l.pages if l else ""))
        label_h = (h.label_human if h else "")
        label_l = (l.label_llm if l else "")
        merged.append(Row(name=name, zahl=zahl, pages=pages, label_human=label_h, label_llm=label_l))
    return merged


def write_csv(rows: Iterable[Row], path: Path) -> None:
    with path.open("w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["Name", "Zahl", "Seitenanzahl", "Label (human)", "Label (LLM)"])
        for r in rows:
            w.writerow([r.name, r.zahl, r.pages, r.label_human, r.label_llm])


def _md_escape(s: str) -> str:
    return s.replace("|", r"\|")


def write_markdown(rows: Iterable[Row], path: Path) -> None:
    lines: List[str] = []
    lines.append("| Name | Zahl | Seitenanzahl | Label (human) | Label (LLM) |")
    lines.append("|---|---:|---:|---|---|")
    for r in rows:
        lines.append(
            f"| {_md_escape(r.name)} | {r.zahl} | {r.pages} | {r.label_human} | {r.label_llm} |"
        )
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def _detect_format(path: Path) -> str:
    return "md" if path.suffix.lower() == ".md" else "csv"


def main() -> int:
    ap = argparse.ArgumentParser(
        description="Merge human CSV + LLM markdown table into one result table (CSV or Markdown)."
    )
    ap.add_argument("--human-csv", required=True, type=Path, help="CSV edited by a human (Excel).")
    ap.add_argument("--llm-md", required=True, type=Path, help="Markdown table labelled by an LLM.")
    ap.add_argument("-o", "--output", required=True, type=Path, help="Output merged file (.csv or .md).")
    args = ap.parse_args()

    human = read_human_csv(args.human_csv)
    llm = read_llm_markdown_table(args.llm_md)
    rows = merge(human, llm)
    fmt = _detect_format(args.output)
    if fmt == "md":
        write_markdown(rows, args.output)
    else:
        write_csv(rows, args.output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

