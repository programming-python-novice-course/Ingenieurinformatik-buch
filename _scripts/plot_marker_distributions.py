#!/usr/bin/env python3
"""
Create marker distribution plots from the evaluation result table.

The script reads evalution_result.md, aggregates marker labels by course part,
and writes stacked horizontal bar charts to plots_paper/.
"""

from __future__ import annotations

import argparse
import csv
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Iterable, List, Sequence


MARKERS = ("A", "S", "P", "-")
MARKER_LABELS = {
    "A": "Application (A-marker)",
    "S": "Structure (S-marker)",
    "P": "Procedure (P-marker)",
    "-": "No marker",
}
MARKER_COLORS = {
    "A": "#4C78A8",
    "S": "#F58518",
    "P": "#54A24B",
    "-": "#B8B8B8",
}
DEFAULT_PARTS = ("II", "III", "IV", "V")
PART_LABELS = {
    "I": "Part I",
    "II": "Part II",
    "III": "Part III",
    "IV": "Part IV",
    "V": "Part V",
    "VI": "Part VI",
    "VII": "Part VII",
}


@dataclass(frozen=True)
class Row:
    name: str
    number: str
    pages: float
    label_human: str
    label_llm: str


def split_markdown_row(line: str) -> List[str]:
    line = line.strip()
    if not (line.startswith("|") and line.endswith("|")):
        return []
    return [cell.strip() for cell in line.strip("|").split("|")]


def normalize_header(header: str) -> str:
    return re.sub(r"\s+", " ", header.strip().lower())


def read_result_table(path: Path) -> List[Row]:
    lines = path.read_text(encoding="utf-8").splitlines()

    header: List[str] = []
    data_start = 0
    for idx, line in enumerate(lines):
        cells = split_markdown_row(line)
        if not cells:
            continue
        normalized = [normalize_header(cell) for cell in cells]
        if "name" in normalized and ("zahl" in normalized or "number" in normalized):
            header = cells
            data_start = idx + 1
            break
    if not header:
        raise ValueError(f"Could not find a markdown table header in {path}")

    if data_start < len(lines) and "---" in lines[data_start]:
        data_start += 1

    column_index = {normalize_header(name): idx for idx, name in enumerate(header)}

    def cell(cells: Sequence[str], *names: str) -> str:
        for name in names:
            idx = column_index.get(normalize_header(name))
            if idx is not None and idx < len(cells):
                return cells[idx].strip()
        return ""

    rows: List[Row] = []
    for line in lines[data_start:]:
        cells = split_markdown_row(line)
        if not cells:
            break
        if all(set(cell) <= {"-", ":", " "} for cell in cells):
            continue

        pages_text = cell(cells, "Seitenanzahl", "Page count", "Pages").replace(",", ".")
        pages = float(pages_text) if pages_text else 0.0
        rows.append(
            Row(
                name=cell(cells, "Name"),
                number=cell(cells, "Zahl", "Number"),
                pages=pages,
                label_human=cell(cells, "Label (human)", "Human label"),
                label_llm=cell(cells, "Label (LLM)", "LLM label"),
            )
        )
    return rows


def part_from_name(name: str) -> str:
    match = re.match(r"\s*([IVXLCDM]+)\b", name)
    if not match:
        raise ValueError(f"Could not determine course part from row name: {name!r}")
    return match.group(1)


def label_for_source(row: Row, source: str) -> str:
    if source == "human":
        return row.label_human.strip()
    if source == "llm":
        return row.label_llm.strip()
    raise ValueError(f"Unknown label source: {source}")


def aggregate(
    rows: Iterable[Row],
    *,
    label_source: str,
    parts: Sequence[str],
) -> Dict[str, Dict[str, Dict[str, float]]]:
    part_set = set(parts)
    totals: Dict[str, Dict[str, Dict[str, float]]] = {
        "pages": {part: {marker: 0.0 for marker in MARKERS} for part in parts},
        "sections": {part: {marker: 0.0 for marker in MARKERS} for part in parts},
    }

    for row in rows:
        part = part_from_name(row.name)
        marker = label_for_source(row, label_source)
        if part not in part_set or marker not in MARKERS:
            continue
        totals["pages"][part][marker] += row.pages
        totals["sections"][part][marker] += 1

    return totals


def write_summary_csv(
    totals_by_source: Dict[str, Dict[str, Dict[str, Dict[str, float]]]],
    *,
    parts: Sequence[str],
    output_path: Path,
) -> None:
    with output_path.open("w", encoding="utf-8", newline="") as file:
        writer = csv.writer(file)
        writer.writerow(["label_source", "metric", "part", "marker", "value"])
        for source, totals in totals_by_source.items():
            for metric, part_totals in totals.items():
                for part in parts:
                    for marker in MARKERS:
                        writer.writerow([source, metric, part, marker, part_totals[part][marker]])


def plot_source(
    totals: Dict[str, Dict[str, Dict[str, float]]],
    *,
    label_source: str,
    parts: Sequence[str],
    output_dir: Path,
    formats: Sequence[str],
    x_limits: Dict[str, float],
) -> None:
    try:
        import matplotlib.pyplot as plt
    except ModuleNotFoundError as exc:
        raise SystemExit(
            "This script needs matplotlib. Install it with `python3 -m pip install matplotlib` "
            "or run the script in the project's build/dev environment."
        ) from exc

    part_names = [PART_LABELS.get(part, part) for part in parts]
    y_positions = list(reversed(range(len(parts))))

    fig, axes = plt.subplots(nrows=2, ncols=1, figsize=(7.2, 5.4), sharey=True)
    fig.suptitle(f"Marker distributions ({label_source})", fontsize=12, fontweight="bold")

    for axis, metric, xlabel, panel in (
        (axes[0], "pages", "Pages", "a) Page counts"),
        (axes[1], "sections", "Number of sections", "b) Section counts"),
    ):
        left = [0.0] * len(parts)
        for marker in MARKERS:
            values = [totals[metric][part][marker] for part in parts]
            axis.barh(
                y_positions,
                values,
                left=left,
                height=0.55,
                label=MARKER_LABELS[marker],
                color=MARKER_COLORS[marker],
            )
            left = [current + value for current, value in zip(left, values)]

        axis.set_xlim(0, x_limits[metric])
        axis.set_yticks(y_positions)
        axis.set_yticklabels(part_names)
        axis.set_xlabel(xlabel)
        axis.set_title(panel, loc="left", fontsize=10, fontweight="bold")
        axis.grid(axis="x", alpha=0.25)
        axis.spines["top"].set_visible(False)
        axis.spines["right"].set_visible(False)

    axes[0].legend(loc="center left", bbox_to_anchor=(1.02, 0.5), frameon=False)
    fig.tight_layout()

    for output_format in formats:
        output_path = output_dir / f"marker_distributions_{label_source}.{output_format}"
        fig.savefig(output_path, dpi=300, bbox_inches="tight")
    plt.close(fig)


def shared_x_limits(
    totals_by_source: Dict[str, Dict[str, Dict[str, Dict[str, float]]]],
    *,
    parts: Sequence[str],
) -> Dict[str, float]:
    limits: Dict[str, float] = {}
    for metric in ("pages", "sections"):
        max_total = 0.0
        for totals in totals_by_source.values():
            for part in parts:
                max_total = max(max_total, sum(totals[metric][part][marker] for marker in MARKERS))
        limits[metric] = max_total * 1.12 if max_total else 1.0
    return limits


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Create marker distribution plots from evalution_result.md.")
    parser.add_argument(
        "--input",
        type=Path,
        default=Path("evalution_result.md"),
        help="Markdown result table to read.",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("plots_paper"),
        help="Directory for plot files.",
    )
    parser.add_argument(
        "--label-source",
        choices=("human", "llm", "both"),
        default="both",
        help="Which label column to plot.",
    )
    parser.add_argument(
        "--parts",
        nargs="+",
        default=list(DEFAULT_PARTS),
        help="Course parts to include, e.g. II III IV V.",
    )
    parser.add_argument(
        "--formats",
        nargs="+",
        default=["pdf", "png"],
        help="Output formats supported by Matplotlib.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    rows = read_result_table(args.input)
    output_dir = args.output_dir
    output_dir.mkdir(parents=True, exist_ok=True)

    sources = ("human", "llm") if args.label_source == "both" else (args.label_source,)
    totals_by_source: Dict[str, Dict[str, Dict[str, Dict[str, float]]]] = {}
    for source in sources:
        totals = aggregate(rows, label_source=source, parts=args.parts)
        totals_by_source[source] = totals

    x_limits = shared_x_limits(totals_by_source, parts=args.parts)
    for source, totals in totals_by_source.items():
        plot_source(
            totals,
            label_source=source,
            parts=args.parts,
            output_dir=output_dir,
            formats=args.formats,
            x_limits=x_limits,
        )

    write_summary_csv(totals_by_source, parts=args.parts, output_path=output_dir / "marker_distribution_summary.csv")
    print(f"Wrote marker distribution plots to {output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
