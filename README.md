[![Latest Release](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/badges/release.svg)](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/releases)
[![pipeline status](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/badges/master/pipeline.svg)](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/commits/master)

# Open educational resources for Python programming in non-computer-science degree programs (cleaned version for A/S/P analysis)

This repository contains a cleaned version of the material used for the A/S/P analysis in the paper *Knowledge Markers: An AI-Agnostic Concept for the Design of Programming Courses*.

For the evaluation we assign the labels **A**, **S**, and **P**, plus **`-`** for organisational units (“no marker” in the decision tree).
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

### Build the reduced/print-friendly PDF (cleaned 2.6.8 version for label analysis)

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


## Evaluation

We assign knowledge markers (**A/S/P** or **`-`**) to each unit listed in the generated TOC table. The procedure is the same for human and LLM evaluation: use the marker definition, apply the decision tree, and record exactly one marker per unit.

For the actual evaluation, we prepare two self-contained folders:

- `evaluation-human/` contains the files used by the human rater.
- `evaluation-LLM/` contains the files provided to the LLM.

This avoids ambiguity because the relevant files are copied from their generated/source locations into one folder per evaluation mode.

```bash
rm -rf evaluation-human evaluation-LLM
mkdir -p evaluation-human evaluation-LLM

# Human evaluation package
cp decision-tree/definition.txt evaluation-human/definition.txt
cp decision-tree/decision-tree-human.png evaluation-human/decision-tree-human.png
cp _book_as_pdf_print_version/_build/latex/book-print.pdf evaluation-human/book-print.pdf
cp _label_assignment/inputs/book-print-toc-table.csv evaluation-human/book-print-toc-table.csv

# LLM evaluation package
cp decision-tree/definition.txt evaluation-LLM/definition.txt
cp decision-tree/decision-tree-LLM.txt evaluation-LLM/decision-tree-LLM.txt
cp _book_as_pdf_print_version/_build/latex/book-print.pdf evaluation-LLM/book-print.pdf
cp _label_assignment/inputs/book-print-toc-table.md evaluation-LLM/book-print-toc-table.md
```

### Human evaluation

**Inputs**
- Marker definition: `evaluation-human/definition.txt`
- Decision tree (visual): `evaluation-human/decision-tree-human.png`
- Script to be labelled: `evaluation-human/book-print.pdf`
- Units to label (CSV for Excel): `evaluation-human/book-print-toc-table.csv`

**Procedure**
- Open `book-print-toc-table.csv` in Excel (or another spreadsheet editor).
- For each row/unit, locate the corresponding unit in `book-print.pdf`.
- Use the decision tree to decide whether the unit’s primary emphasis is **A**, **S**, or **P** (see `definition.txt` for the marker meanings).
- Write the chosen marker into column **`Label (human)`** (exactly one of: `A`, `S`, `P`, `-`).

### LLM evaluation

**Inputs**
- Marker definition: `evaluation-LLM/definition.txt`
- Decision tree (text/TikZ): `evaluation-LLM/decision-tree-LLM.txt`
- Script to be labelled: `evaluation-LLM/book-print.pdf`
- Units to label (Markdown): `evaluation-LLM/book-print-toc-table.md`

**Procedure / prompt requirements**

We give the LLM the following prompt (attach/provide the four input files listed above):

```text
You are evaluating a course script using the concept of “knowledge markers”.

Definitions:
- Read and use `definition.txt` to understand the markers.

Decision procedure:
- Apply the decision tree from `decision-tree-LLM.txt` to decide the primary learning emphasis of each unit.

Material to label:
- The script is `book-print.pdf`.
- The list of units to label is `book-print-toc-table.md`.

Task:
- For each row in `book-print-toc-table.md`, assign exactly one marker: `A`, `S`, `P`, or `-`.
- Return the SAME Markdown table, but fill the column `Label (LLM)` for every row.
- Do not change any other columns.

Constraints:
- Use only the provided files `evaluation-LLM`. Ignore any other information.
```

Please find `evaluation-LLM/transcript_of_chat.md` where the chat with the agent is stored.

**LLM execution environment**

For the LLM-based labelling run, we used:

- Model used for label assignment: `GPT-5.5`
- Agentic AI / prompt forwarding environment: `Cursor`
- Cursor version: `3.1.15`
- VSCode version: `1.105.1`
- Cursor commit: `3a67af7b780e0bfc8d32aefa96b8ff1cb8817f80`
- Cursor build date: `2026-04-15T01:46:06.515Z`
- Layout: `editor`
- Build type: `Stable`
- Release track: `Default`
- Electron: `39.8.1`
- Chromium: `142.0.7444.265`
- Node.js: `22.22.1`
- V8: `14.2.231.22-electron.0`
- OS: `Darwin arm64 25.3.0`

## Merge human + LLM labels into one result table

After the human has filled `Label (human)` in the CSV and the LLM has filled `Label (LLM)` in the Markdown table, you can merge both into a single result table:

```bash
python3 _scripts/merge_label_tables.py \
  --human-csv evaluation-human/book-print-toc-table.csv \
  --llm-md evaluation-LLM/book-print-toc-table.md \
  -o evalution_result.md
```

