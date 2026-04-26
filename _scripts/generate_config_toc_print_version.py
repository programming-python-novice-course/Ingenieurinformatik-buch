#!/usr/bin/env python3
"""
Generate a reduced Jupyter Book TOC and config for a print PDF.

This script intentionally works *line-based* (not YAML-based) so it:
- preserves formatting/comments of the original files
- has no external dependencies (no PyYAML/ruamel.yaml needed)

Default behavior:
  _toc.yml    ->  _toc_print.yml
  stopping after the first occurrence of:
    - file: chapters/misc/Expertenwissen/16-Expertenwissen

Additionally, it generates a print config:
  _config.yml -> _config_print.yml
  with `execute_notebooks: auto` (same behavior as the main build)
  and appends a suffix (default: " (cleaned 2.6.8 version for label analysis)") to the LaTeX `\title{...}`.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


def _append_suffix_to_latex_title(src: str, *, suffix: str) -> tuple[str, bool]:
    """
    Append `suffix` to the first LaTeX \\title{...} argument (once).

    Works on the full text and supports nested braces inside the title, e.g.
    \\title{Foo \\textit{Bar}}.
    """
    needle = r"\title{"
    start = src.find(needle)
    if start == -1:
        return src, False

    arg_start = start + len(needle)
    depth = 1
    i = arg_start
    while i < len(src) and depth > 0:
        c = src[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
        i += 1

    if depth != 0:
        raise RuntimeError("Unbalanced braces while parsing \\title{...} in config")

    # `i` is positioned right after the matching closing brace.
    arg_end = i - 1
    arg = src[arg_start:arg_end]

    # Avoid double-appending if the suffix (or the legacy key marker) is already present.
    if "(Druckversion)" in arg or suffix in arg:
        return src, False

    # Insert suffix before any trailing whitespace/newlines inside the argument.
    m_trailing_ws = re.search(r"\s*\Z", arg)
    insert_at = m_trailing_ws.start() if m_trailing_ws else len(arg)
    new_arg = arg[:insert_at] + suffix + arg[insert_at:]

    return src[:arg_start] + new_arg + src[arg_end:], True


def generate_toc_print(*, input_path: Path, output_path: Path, stop_after: str) -> None:
    src = input_path.read_text(encoding="utf-8").splitlines(keepends=True)

    # Match YAML entries like:
    #   - file: chapters/misc/Expertenwissen/16-Expertenwissen
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
    execute_notebooks_value: str = "auto",
    latex_targetname_value: str = "book-print.tex",
    title_suffix: str = " (cleaned 2.6.8 version for label analysis)",
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

    text = "".join(out)
    text, _changed = _append_suffix_to_latex_title(text, suffix=title_suffix)
    output_path.write_text(text, encoding="utf-8")


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
        default="chapters/misc/Expertenwissen/16-Expertenwissen",
        help="Stop after first '- file: <value>' match (default: chapters/misc/Expertenwissen/16-Expertenwissen)",
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
        default="auto",
        help="Value to write for execute_notebooks (default: auto)",
    )
    parser.add_argument(
        "--latex-targetname",
        default="book-print.tex",
        help="Value to write for latex.latex_documents.targetname (default: book-print.tex)",
    )
    parser.add_argument(
        "--title-suffix",
        default=" (cleaned version for label analysis)",
        help="Suffix appended to the first LaTeX \\title{...} in the print config",
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
            title_suffix=args.title_suffix,
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

