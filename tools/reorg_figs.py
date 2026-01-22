#!/usr/bin/env python3
from __future__ import annotations

import argparse
import os
import re
import shutil
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


OLD_FIGS_DIRS = [
    "art-of-programming",
    "digital-computer",
    "dive-bell",
    # "favicon",  # explicitly excluded
    "history",
    "image-representation",
    "information",
    "languages",
    "memory",
    "name-register",
    "overview",
    "python-tutorial",
    "roboworld",
    "thinking",
]

EXCLUDED_FIGS_DIRS = {
    "00-general",
    "favicon",
}


@dataclass(frozen=True)
class ChapterRef:
    md_path: Path            # repo-relative md path
    chapter_key: str         # e.g. "03-computer-sciences-basics" or "misc" or "archive"


CHAPTER_KEY_RE = re.compile(r"^chapters/([^/]+)/")
NUMERIC_CHAPTER_RE = re.compile(r"^(\d{2})-")


def chapter_key_for_md(md_repo_rel: Path) -> str:
    m = CHAPTER_KEY_RE.match(md_repo_rel.as_posix())
    if not m:
        return "misc"
    return m.group(1)


def chapter_rank(chapter_key: str) -> tuple[int, str]:
    """
    Rank order:
      - numeric chapters first (by their number)
      - then misc
      - then archive
      - then anything else
    """
    m = NUMERIC_CHAPTER_RE.match(chapter_key)
    if m:
        return (int(m.group(1)), chapter_key)
    if chapter_key == "misc":
        return (10_000, chapter_key)
    if chapter_key == "archive":
        return (20_000, chapter_key)
    return (30_000, chapter_key)


def extract_fig_paths_from_line(line: str, old_dir: str) -> Iterable[str]:
    """
    Extract occurrences of 'figs/<old_dir>/...' from a single line.
    We return repo-relative paths beginning with 'figs/'.
    """
    needle = f"figs/{old_dir}/"
    if needle not in line:
        return []

    # Special-case MyST directive: ```{figure} ../../figs/...
    if "{figure}" in line:
        idx = line.find(needle)
        if idx != -1:
            return [line[idx:].strip()]
        return []

    # General case: stop at typical delimiters (whitespace, quote, parens)
    out: list[str] = []
    start = 0
    while True:
        idx = line.find(needle, start)
        if idx == -1:
            break
        j = idx
        while j < len(line) and line[j] not in " \t\r\n)\"'<>":
            j += 1
        out.append(line[idx:j])
        start = j
    return out


def collect_md_files(chapters_dir: Path) -> list[Path]:
    return sorted([p for p in chapters_dir.rglob("*.md") if p.is_file()])


def collect_all_old_fig_files(figs_dir: Path) -> list[Path]:
    files: list[Path] = []
    for old in OLD_FIGS_DIRS:
        root = figs_dir / old
        if not root.exists():
            continue
        for p in root.rglob("*"):
            if p.is_file():
                files.append(p)
    return sorted(files)


def choose_destination_chapter(chapter_keys: set[str]) -> str:
    # Prefer numeric chapters; misc/archive only if nothing else references it.
    return min(chapter_keys, key=chapter_rank)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", default=".", help="Repository root (default: .)")
    ap.add_argument("--apply", action="store_true", help="Actually move files + rewrite markdown")
    ap.add_argument("--limit", type=int, default=0, help="Limit operations (debugging)")
    args = ap.parse_args()

    repo = Path(args.repo).resolve()
    chapters_dir = repo / "chapters"
    figs_dir = repo / "figs"

    if not chapters_dir.exists() or not figs_dir.exists():
        raise SystemExit("Expected 'chapters/' and 'figs/' under repo root")

    # 1) Parse chapter markdown to find references to old figs dirs.
    md_files = collect_md_files(chapters_dir)
    refs_by_fig: dict[str, set[str]] = defaultdict(set)  # figs/<old>/<rest> -> {chapter_key}
    ref_sites: dict[str, list[ChapterRef]] = defaultdict(list)

    for md_abs in md_files:
        md_rel = md_abs.relative_to(repo)
        chapter_key = chapter_key_for_md(md_rel)
        text = md_abs.read_text(encoding="utf-8")
        for line in text.splitlines():
            for old in OLD_FIGS_DIRS:
                for fig_path in extract_fig_paths_from_line(line, old):
                    # normalize to repo-relative "figs/..."
                    if not fig_path.startswith("figs/"):
                        # strip relative prefix like ../../
                        k = fig_path.find("figs/")
                        if k == -1:
                            continue
                        fig_path = fig_path[k:]
                    refs_by_fig[fig_path].add(chapter_key)
                    ref_sites[fig_path].append(ChapterRef(md_path=md_rel, chapter_key=chapter_key))

    # 2) Build mapping for referenced paths.
    dest_for_fig: dict[str, str] = {}
    for fig_path, chapter_keys in refs_by_fig.items():
        # fig_path = figs/<old>/<rest>
        parts = fig_path.split("/", 2)
        if len(parts) < 3:
            continue
        _, top, rest = parts
        if top in EXCLUDED_FIGS_DIRS:
            continue
        if top not in OLD_FIGS_DIRS:
            continue
        dest_ch = choose_destination_chapter(set(chapter_keys))
        dest_for_fig[fig_path] = f"figs/{dest_ch}/{top}/{rest}"

    # 3) Map actual files on disk (including unused).
    all_old_files_abs = collect_all_old_fig_files(figs_dir)
    move_ops: list[tuple[Path, Path, str]] = []  # (src_abs, dest_abs, reason)

    for src_abs in all_old_files_abs:
        src_rel = src_abs.relative_to(repo).as_posix()  # figs/<old>/<rest>
        if not src_rel.startswith("figs/"):
            continue
        parts = src_rel.split("/", 2)
        if len(parts) < 3:
            continue
        _, top, rest = parts
        if top in EXCLUDED_FIGS_DIRS:
            continue
        if top not in OLD_FIGS_DIRS:
            continue

        if src_rel in dest_for_fig:
            dest_rel = dest_for_fig[src_rel]
            reason = "referenced"
        else:
            dest_rel = f"figs/archive/unused/{top}/{rest}"
            reason = "unused"

        dest_abs = repo / dest_rel
        move_ops.append((src_abs, dest_abs, reason))

    # Detect collisions
    dests = [d.as_posix() for _, d, _ in move_ops]
    dup_dests = {p for p in dests if dests.count(p) > 1}
    if dup_dests:
        print("ERROR: destination collisions detected:")
        for p in sorted(dup_dests):
            print("  ", p)
        return 2

    # Detect referenced paths that do not exist on disk
    missing = [p for p in dest_for_fig.keys() if not (repo / p).exists()]

    print("Summary")
    print("-------")
    print(f"Markdown files scanned: {len(md_files)}")
    print(f"Referenced figs found: {len(dest_for_fig)}")
    print(f"Old figs files found:  {len(all_old_files_abs)}")
    print(f"Move operations:       {len(move_ops)} (referenced={sum(1 for _,_,r in move_ops if r=='referenced')}, unused={sum(1 for _,_,r in move_ops if r=='unused')})")
    if missing:
        print(f"WARNING: referenced but missing on disk: {len(missing)}")
        for p in missing[:20]:
            print("  ", p)
        if len(missing) > 20:
            print("  ...")

    if args.limit:
        move_ops = move_ops[: args.limit]

    if not args.apply:
        print("\nDry run only. Use --apply to execute.")
        return 0

    # 4) Execute moves
    for src_abs, dest_abs, _ in move_ops:
        dest_abs.parent.mkdir(parents=True, exist_ok=True)
        if dest_abs.exists():
            raise SystemExit(f"Refusing to overwrite existing file: {dest_abs}")
        shutil.move(src_abs.as_posix(), dest_abs.as_posix())

    # 5) Rewrite markdown in chapters/ only
    for md_abs in md_files:
        content = md_abs.read_text(encoding="utf-8")
        new = content
        for src_rel, dest_rel in dest_for_fig.items():
            if src_rel in new:
                new = new.replace(src_rel, dest_rel)
        if new != content:
            md_abs.write_text(new, encoding="utf-8")

    print("\nApplied moves + rewrites.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

