# CI/CD (GitLab)

Die CI wird über `.gitlab-ci.yml` gesteuert und verwendet als Build-Umgebung:

- `image: gitlab.lrz.de:5005/fk03ingenieurinformatik/ingenieurinformatik-buch:latest`

## Build-Jobs

- **`build_website_html`** (Stage `build`)
  - Baut die HTML-Website mit Jupyter Book.
  - Post-Processing: `_scripts/patch_thebe_html.py` (Thebe/Binder-Optionen in HTML patchen, doppelte Script-Tags entfernen).
  - Artefakt: `"_website_html/_build"`

- **`build_book_pdf`** (Stage `build`)
  - Baut das vollständige PDF (LaTeX/pdflatex).
  - Auf `master`: automatisch, sonst manuell (allow_failure).
  - Artefakte: PDF + Log unter `"_book_as_pdf/_build/latex/"`

- **`build_book_pdf_print`** (Stage `build`)
  - Baut eine reduzierte/print-freundliche PDF-Version (separates `_config_print.yml` / `_toc_print.yml`).
  - Auf `master`: automatisch, sonst manuell (allow_failure).

## Deploy-Jobs

- **`update_website`**
  - Veröffentlicht GitLab Pages aus dem HTML-Artefakt.
  - Läuft auf `master` automatisch.

- **`update_website_test`**
  - Pages-Deploy für Nicht-`master` Branches.
  - Manuell, mit `path_prefix: "test"`.

- **`deploy_notebooks_in_gitlabLRZ`**
  - Kopiert ausgeführte Notebooks aus `"_website_html/_build/jupyter_execute/chapters"` in das Deploy-Repo
    `fk03ingenieurinformatik/ingenieurinformatik-buch-deploy-lrz` unter `deployed_notebooks/`.

- **`deploy_pdf_in_gitlabLRZ`** und **`deploy_print_pdf_in_gitlabLRZ`**
  - Kopieren die PDFs in das Download-Repo `fk03ingenieurinformatik/ingenieurinformatik-download` (Branch `main`).
  - Dateinamen beinhalten die Version aus `_config.yml` (`sphinx.config.release`), zusätzlich wird ein „aktuell“-Alias erzeugt.

## Trigger / Regeln (kurz)

- Pipelines werden für Push/MR/Web angestoßen (siehe `workflow.rules` in `.gitlab-ci.yml`).
- PDF-Jobs sind für Branches ≠ `master` in der Regel manuell.

