[![Latest Release](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/badges/release.svg)](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/releases)
[![pipeline status](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/badges/master/pipeline.svg)](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/commits/master)

# Open educational resources for Python programming in non-computer-science degree programs (cleaned version for A/S/P analysis)

This repository contains a cleaned version of the material used for the A/S/P analysis in the paper *Knowledge Markers: An AI-Agnostic Concept for the Design of Programming Courses*.

For the evaluation we only assign the labels **A**, **S**, and **P**.
In the original teaching artefact, some units additionally carry an **A\*** marker (self-study). This is not relevant for the evaluation, therefore all `*` markers were removed in this cleaned version.

The original version is used as a teaching artefact. In that original version:
- some labels were missing
- only the finest-grained units were labelled, which is not useful when higher-level sections provide mental models

For the paper analysis, we changed the labelling procedure to also allow higher-level sections to be labelled.

As a consequence, we re-labelled the chapters, sections, and units.

## Contents

This repository contains:
- the source files for the PDF script **without** knowledge markers (used as input for the evaluation)
- a table that summarises how instructors and an LLM labelled the content according to the decision tree introduced in Section 3 of the paper

The chapter/section hierarchy in the table is derived from the table of contents.

## CI / reproducibility

The CI pipeline is adjusted to build only the reduced/print-friendly PDF script used for the analysis.

## Build the analysis PDF locally (recommended)

To reproduce the exact PDF script used in the analysis, run the build inside the same dev image as CI.

### Start the container

```bash
docker run --rm -it \
  -v "$PWD":/home/jovyan/work \
  -w /home/jovyan/work \
  gitlab.lrz.de:5005/fk03ingenieurinformatik/ingenieurinformatik-buch:latest \
  bash
```

### Build the reduced/print-friendly PDF (paper version)

Inside the container:

```bash
export MPLCONFIGDIR=/tmp/matplotlib
rm -rf _build _book_as_pdf_print_version

# Generate paper-specific config + TOC (matches CI).
python3 _scripts/generate_config_toc_print_version.py \
  --input _toc.yml --output _toc_print.yml \
  --config-input _config.yml --config-output _config_print.yml \
  --stop-after chapters/misc/Expertenwissen/16-Expertenwissen \
  --execute-notebooks-value auto \
  --latex-targetname book-print.tex

export LATEXMKOPTS='-interaction=nonstopmode'
jupyter-book build . \
  --config _config_print.yml --toc _toc_print.yml \
  --builder pdflatex \
  --path-output _book_as_pdf_print_version \
  --verbose
```

Artifact: `_book_as_pdf_print_version/_build/latex/book-print.pdf`

Note: The generated PDF (and therefore the derived TOC/page numbers) may vary slightly across build platforms.
In particular, on some non-Ubuntu host systems the Docker build can succeed but Matplotlib figures may not always be generated identically, which can shift page breaks.
When in doubt, use the CI artifact as the reference build.

## Generate a Markdown table from the generated TOC

After building the PDF, the LaTeX table of contents is available at:
`_book_as_pdf_print_version/_build/latex/book-print.toc`

We use the table of contents as the basis for assigning knowledge markers and analysing label distributions as part of the evaluation of the teaching concept.
The **page count** is included to optionally weight sections/units by their approximate “share” in the script during the evaluation.

The script converts the TOC into two tables that serve as inputs for assigning knowledge markers:
- an **Excel-friendly CSV** for a **human** rater
- a **Markdown table** for an **LLM** (prompt/input)

You can generate both files from the same `.toc`:

Assumptions / conventions used by the conversion script:

- **Included levels**: only `part`, `chapter`, `section`, `subsection` are listed. Everything below (e.g. `subsubsection`, `paragraph`, …) is ignored.
- **Number column**: extracted from `\numberline{...}`; unnumbered entries have an empty number.
- **Page count (“Seitenanzahl”)**: computed as the difference between the start page of the current listed entry and the start page of the **next listed entry** in the table (i.e. after filtering to the included levels).
- **Same-page entries**: if the next listed entry starts on the same page (difference `0`), the script outputs `0,5` (meaning: less than one page, but not empty).

```bash
python3 _scripts/toc_to_markdown_table.py \
  _book_as_pdf_print_version/_build/latex/book-print.toc \
  --also-csv _label_assignment/inputs/book-print-toc-table.csv \
  --also-md _label_assignment/inputs/book-print-toc-table.md \
  -o _label_assignment/inputs/book-print-toc-table.csv
```

## Merge human + LLM labels into one result table

After the human has filled `Label (human)` in the CSV and the LLM has filled `Label (LLM)` in the Markdown table, you can merge both into a single result table:

```bash
python3 _scripts/merge_label_tables.py \
  --human-csv _label_assignment/inputs/book-print-toc-table.csv \
  --llm-md _label_assignment/inputs/book-print-toc-table.md \
  -o _label_assignment/result.md
```

