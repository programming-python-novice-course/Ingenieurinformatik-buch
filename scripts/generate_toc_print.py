#!/usr/bin/env python3
"""
Generate a reduced Jupyter Book TOC file for a print PDF.

This script intentionally works *line-based* (not YAML-based) so it:
- preserves formatting/comments of the original `_toc.yml`
- has no external dependencies (no PyYAML/ruamel.yaml needed)

Default behavior:
  _toc.yml  ->  _toc_print.yml
  stopping after the first occurrence of:
    - file: chapters/misc/Expertenwissen/0-intro
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


def generate_toc_print(*, input_path: Path, output_path: Path, stop_after: str) -> None:
    src = input_path.read_text(encoding="utf-8").splitlines(keepends=True)

    # Match YAML entries like:
    #   - file: chapters/misc/Expertenwissen/0-intro
    # with arbitrary indentation / extra spaces.
    pattern = re.compile(
        r"^\s*-\s*file:\s*" + re.escape(stop_after) + r"\s*$"
    )

    stop_idx: int | None = None
    for i, line in enumerate(src):
        if pattern.match(line.rstrip("\n")):
            stop_idx = i
            break

    if stop_idx is None:
        raise RuntimeError(
            f"Stop marker not found in {input_path}: "
            f"'- file: {stop_after}'"
        )

    out_lines = src[: stop_idx + 1]
    # Ensure file ends with a newline.
    if out_lines and not out_lines[-1].endswith("\n"):
        out_lines[-1] = out_lines[-1] + "\n"

    output_path.write_text("".join(out_lines), encoding="utf-8")


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(
        description="Generate _toc_print.yml by truncating _toc.yml after a given file entry."
    )
    parser.add_argument(
        "--input",
        default="_toc.yml",
        help="Input TOC file (default: _toc.yml)",
    )
    parser.add_argument(
        "--output",
        default="_toc_print.yml",
        help="Output TOC file (default: _toc_print.yml)",
    )
    parser.add_argument(
        "--stop-after",
        default="chapters/misc/Expertenwissen/0-intro",
        help="Stop after first '- file: <value>' match (default: chapters/misc/Expertenwissen/0-intro)",
    )

    args = parser.parse_args(argv)
    input_path = Path(args.input)
    output_path = Path(args.output)

    try:
        generate_toc_print(
            input_path=input_path,
            output_path=output_path,
            stop_after=args.stop_after,
        )
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        return 2

    print(f"Wrote {output_path} (from {input_path}, stop-after={args.stop_after})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))

