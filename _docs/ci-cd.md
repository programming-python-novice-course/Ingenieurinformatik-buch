# CI/CD (GitLab)

CI is configured via `.gitlab-ci.yml` and uses the following build environment:

- `image: gitlab.lrz.de:5005/fk03ingenieurinformatik/ingenieurinformatik-buch:latest`
- The container-based CI build is supported starting from **repo version `v2`**.
- By default CI uses the **`latest`** tag.
- For versions **`v2.*`**, **`latest`** refers to the **v2 container image** (see Container Registry: `https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/container_registry/11892`).

See also:

- Dev image details: [`dev-image.md`](./dev-image.md)
- Project repository roles: [`project-repositories.md`](./project-repositories.md)

## Build jobs

- **`build_website_html`** (Stage `build`)
  - Builds the HTML website with Jupyter Book.
  - Post-processing: `_scripts/patch_thebe_html.py` (patch Thebe/Binder options into HTML, remove duplicate script tags).
  - Artifact: `"_website_html/_build"`

- **`build_book_pdf`** (Stage `build`)
  - Builds the full PDF (LaTeX/pdflatex).
  - On `master`: automatic, otherwise manual (allow_failure).
  - Artifacts: PDF + log under `"_book_as_pdf/_build/latex/"`

- **`build_book_pdf_print`** (Stage `build`)
  - Builds a reduced/print-friendly PDF version (separate `_config_print.yml` / `_toc_print.yml`).
  - On `master`: automatic, otherwise manual (allow_failure).

## Deploy jobs

- **`update_website`**
  - Publishes GitLab Pages from the HTML artifact.
  - Runs automatically on `master`.

- **`update_website_test`**
  - Pages deploy for non-`master` branches.
  - Manual, with `path_prefix: "test"`.

- **`deploy_notebooks_in_gitlabLRZ`**
  - Copies executed notebooks from `"_website_html/_build/jupyter_execute/chapters"` into the deploy repo
    `fk03ingenieurinformatik/ingenieurinformatik-buch-deploy-lrz` under `deployed_notebooks/`.

- **`deploy_pdf_in_gitlabLRZ`** and **`deploy_print_pdf_in_gitlabLRZ`**
  - Copy PDFs into the downloads repo `fk03ingenieurinformatik/ingenieurinformatik-download` (branch `main`).
  - Filenames include the version from `_config.yml` (`sphinx.config.release`); additionally a “current” alias is created (`Skript-aktuell.pdf` / `Skript-print-aktuell.pdf`).

## Triggers / rules (short)

- Pipelines run for push/MR/web triggers (see `workflow.rules` in `.gitlab-ci.yml`).
- PDF jobs are usually manual for branches ≠ `master`.

