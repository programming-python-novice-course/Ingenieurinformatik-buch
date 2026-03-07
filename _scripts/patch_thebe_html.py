#!/usr/bin/env python3
"""Patch Jupyter Book HTML Thebe config for GitLab Binder usage.

Usage:
  python3 _scripts/patch_thebe_html.py --path-output _website11
  python3 _scripts/patch_thebe_html.py --html-dir _website11/_build/html
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path

SCRIPT_RE = re.compile(
    r'(<script type="text/x-thebe-config">\s*\{\s*)(.*?)(\s*\}\s*</script>)',
    re.DOTALL,
)

BINDER_RE = re.compile(
    r'(?P<lead>\n(?P<indent>[ \t]*)binderOptions:\s*\{\n)(?P<body>.*?)(?P<trail>\n(?P=indent)\},)',
    re.DOTALL,
)

SCRIPT_SRC_RE = re.compile(r'<script src="(?P<src>[^"]+)"></script>')

DEDUP_SCRIPT_SRCS = {
    "_static/js/thebe-output-fix.js",
    "_static/js/hub-link-rewrite.js",
    "_static/js/user-settings.js",
    "../_static/js/thebe-output-fix.js",
    "../_static/js/hub-link-rewrite.js",
    "../_static/js/user-settings.js",
    "../../_static/js/thebe-output-fix.js",
    "../../_static/js/hub-link-rewrite.js",
    "../../_static/js/user-settings.js",
}


def _patch_binder_block(block: str, repo: str, ref: str, binder_url: str) -> str:
    match = BINDER_RE.search(block)
    if not match:
        return block

    indent = match.group("indent")
    entry_indent = indent + "    "
    body = match.group("body")

    kept_lines = []
    for line in body.splitlines():
        stripped = line.strip()
        if (
            stripped.startswith("repo:")
            or stripped.startswith("ref:")
            or stripped.startswith("repoProvider:")
            or stripped.startswith("binderUrl:")
        ):
            continue
        kept_lines.append(line)

    new_lines = [
        f'{entry_indent}repo: "{repo}",',
        f'{entry_indent}ref: "{ref}",',
        f'{entry_indent}repoProvider: "git",',
    ]
    if binder_url:
        new_lines.append(f'{entry_indent}binderUrl: "{binder_url}",')

    if kept_lines:
        merged_body = "\n".join(new_lines + kept_lines)
    else:
        merged_body = "\n".join(new_lines)

    return block[: match.start("body")] + merged_body + block[match.end("body") :]


def _dedupe_script_tags(text: str) -> tuple[str, int]:
    seen: set[str] = set()
    removed = 0

    def repl(match: re.Match[str]) -> str:
        nonlocal removed
        src = match.group("src")
        if src in DEDUP_SCRIPT_SRCS:
            if src in seen:
                removed += 1
                return ""
            seen.add(src)
        return match.group(0)

    return SCRIPT_SRC_RE.sub(repl, text), removed


def patch_html_text(text: str, repo: str, ref: str, binder_url: str) -> tuple[str, int, int]:
    changed_blocks = 0

    def repl(m: re.Match[str]) -> str:
        nonlocal changed_blocks
        head, body, tail = m.groups()
        patched = _patch_binder_block(body, repo, ref, binder_url)
        if patched != body:
            changed_blocks += 1
        return head + patched + tail

    patched = SCRIPT_RE.sub(repl, text)
    deduped, removed_scripts = _dedupe_script_tags(patched)
    return deduped, changed_blocks, removed_scripts


def resolve_html_dir(path_output: str | None, html_dir: str | None) -> Path:
    if html_dir:
        return Path(html_dir).resolve()
    if not path_output:
        raise SystemExit("Either --path-output or --html-dir must be provided.")
    return (Path(path_output).resolve() / "_build" / "html")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--path-output", default=None)
    parser.add_argument("--html-dir", default=None)
    parser.add_argument(
        "--repo",
        default="https://gitlab.lrz.de/fk03ingenieurinformatik/ingenieurinformatik-buch-deploy-lrz.git",
    )
    parser.add_argument("--ref", default="binder-minimal")
    parser.add_argument("--binder-url", default="https://mybinder.org")
    args = parser.parse_args()

    html_dir = resolve_html_dir(args.path_output, args.html_dir)
    if not html_dir.exists():
        raise SystemExit(f"HTML directory not found: {html_dir}")

    total_files = 0
    touched_files = 0
    touched_blocks = 0
    removed_script_tags = 0

    for path in html_dir.rglob("*.html"):
        total_files += 1
        original = path.read_text(encoding="utf-8")
        patched, changed_blocks, removed_tags = patch_html_text(
            original,
            repo=args.repo,
            ref=args.ref,
            binder_url=args.binder_url,
        )
        if changed_blocks > 0 or removed_tags > 0:
            path.write_text(patched, encoding="utf-8")
            print(f"patched {path}")
            touched_files += 1
            touched_blocks += changed_blocks
            removed_script_tags += removed_tags

    print(
        f"patched html_dir={html_dir} files={touched_files}/{total_files} "
        f"script_blocks={touched_blocks} removed_duplicate_scripts={removed_script_tags}"
    )


if __name__ == "__main__":
    main()
