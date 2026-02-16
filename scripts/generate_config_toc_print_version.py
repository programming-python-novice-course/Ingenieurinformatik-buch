#!/usr/bin/env python3
"""
Generate a reduced Jupyter Book TOC and config for a print PDF.

This script intentionally works *line-based* (not YAML-based) so it:
- preserves formatting/comments of the original files
- has no external dependencies (no PyYAML/ruamel.yaml needed)

Default behavior:
  _toc.yml    ->  _toc_print.yml
  stopping after the first occurrence of:
    - file: chapters/misc/Expertenwissen/0-intro

Additionally, it generates a print config:
  _config.yml -> _config_print.yml
  with `execute_notebooks: 'off'` (to avoid executing notebooks in print builds)
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
    pattern = re.compile(r"^\s*-\s*file:\s*" + re.escape(stop_after) + r"\s*$")

    stop_idx: int | None = None
    for i, line in enumerate(src):
        if pattern.match(line.rstrip("\n")):
            stop_idx = i
            break

    if stop_idx is None:
        raise RuntimeError(
            f"Stop marker not found in {input_path}: " f"'- file: {stop_after}'"
        )

    out_lines = src[: stop_idx + 1]
    # Ensure file ends with a newline.
    if out_lines and not out_lines[-1].endswith("\n"):
        out_lines[-1] = out_lines[-1] + "\n"

    output_path.write_text("".join(out_lines), encoding="utf-8")


def generate_config_print(
    *,
    input_path: Path,
    output_path: Path,
    execute_notebooks_value: str = "'off'",
    latex_targetname_value: str = "book-print.tex",
) -> None:
    """
    Create a copy of `_config.yml` for the print build.

    This is line-based and preserves the rest of the file verbatim.
    """
    src = input_path.read_text(encoding="utf-8").splitlines(keepends=True)

    # Match lines like:
    #   execute_notebooks: auto  # off
    # with arbitrary indentation.
    execute_pattern = re.compile(
        r"^(\s*execute_notebooks\s*:\s*)([^#\n]*?)(\s*(#.*)?)?$"
    )
    targetname_pattern = re.compile(
        r"^(\s*targetname\s*:\s*)([^#\n]*?)(\s*(#.*)?)?$"
    )

    found_execute_notebooks = False
    found_targetname = False
    out: list[str] = []
    for line in src:
        m_exec = execute_pattern.match(line.rstrip("\n"))
        if m_exec and not found_execute_notebooks:
            prefix = m_exec.group(1)
            suffix = m_exec.group(3) or ""
            out.append(f"{prefix}{execute_notebooks_value}{suffix}\n")
            found_execute_notebooks = True
            continue

        m_tn = targetname_pattern.match(line.rstrip("\n"))
        if m_tn and not found_targetname:
            prefix = m_tn.group(1)
            suffix = m_tn.group(3) or ""
            out.append(f"{prefix}{latex_targetname_value}{suffix}\n")
            found_targetname = True
            continue
        else:
            out.append(line)

    if not found_execute_notebooks:
        raise RuntimeError(f"Could not find an 'execute_notebooks:' line in {input_path}")
    if not found_targetname:
        raise RuntimeError(f"Could not find a 'targetname:' line in {input_path}")

    output_path.write_text("".join(out), encoding="utf-8")


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Generate _toc_print.yml by truncating _toc.yml after a given file entry, "
            "and generate _config_print.yml with execute_notebooks='off'."
        )
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
    parser.add_argument(
        "--config-input",
        default="_config.yml",
        help="Input config file (default: _config.yml)",
    )
    parser.add_argument(
        "--config-output",
        default="_config_print.yml",
        help="Output config file (default: _config_print.yml)",
    )
    parser.add_argument(
        "--execute-notebooks-value",
        default="'off'",
        help="Value to write for execute_notebooks (default: 'off')",
    )
    parser.add_argument(
        "--latex-targetname",
        default="book-print.tex",
        help="Value to write for latex.latex_documents.targetname (default: book-print.tex)",
    )

    args = parser.parse_args(argv)
    toc_input_path = Path(args.input)
    toc_output_path = Path(args.output)
    config_input_path = Path(args.config_input)
    config_output_path = Path(args.config_output)

    try:
        generate_toc_print(
            input_path=toc_input_path,
            output_path=toc_output_path,
            stop_after=args.stop_after,
        )
        generate_config_print(
            input_path=config_input_path,
            output_path=config_output_path,
            execute_notebooks_value=args.execute_notebooks_value,
            latex_targetname_value=args.latex_targetname,
        )
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        return 2

    print(f"Wrote {toc_output_path} (from {toc_input_path}, stop-after={args.stop_after})")
    print(
        f"Wrote {config_output_path} (from {config_input_path}, "
        f"execute_notebooks={args.execute_notebooks_value})"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))

