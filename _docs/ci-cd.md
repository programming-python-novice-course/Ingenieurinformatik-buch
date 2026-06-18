# CI/CD (GitHub Actions)

CI is configured via `.github/workflows/` and uses the following build environment:

- `image: ghcr.io/programming-python-novice-course/ingenieurinformatik-buch:latest`
- The container-based CI build is supported starting from **repo version `v2`**.
- By default CI uses the **`latest`** tag.
- For versions **`v2.*`**, **`latest`** refers to the **v2 container image** (see Container Registry: `https://github.com/programming-python-novice-course/Ingenieurinformatik-buch/pkgs/container/ingenieurinformatik-buch`).

See also:

- Dev image details: [`dev-image.md`](./dev-image.md)
- Project repository roles: [`project-repositories.md`](./project-repositories.md)
- GitHub migration cutover: [`github-migration-cutover.md`](./github-migration-cutover.md)

## Build jobs

- **`build_website_html`**
  - Builds the HTML website with Jupyter Book.
  - Post-processing: `_scripts/patch_thebe_html.py` (patch Thebe/Binder options into HTML, remove duplicate script tags).
  - Artifact: `"_website_html/_build"`

- **`build_book_pdf`**
  - Builds the full PDF (LaTeX/pdflatex).
  - Runs automatically on `master`; pull requests build for validation.
  - Artifacts: PDF + log under `"_book_as_pdf/_build/latex/"`

- **`build_book_pdf_print`**
  - Builds a reduced/print-friendly PDF version (separate `_config_print.yml` / `_toc_print.yml`).
  - Runs automatically on `master`; pull requests build for validation.

## Deploy jobs

- **`deploy_pages`**
  - Publishes GitHub Pages from the HTML artifact.
  - Runs automatically on `master`.

- **`deploy_notebooks`**
  - Copies executed notebooks from `"_website_html/_build/jupyter_execute/chapters"` into the deploy repo
    `programming-python-novice-course/ingenieurinformatik-buch-deploy-lrz` under `deployed_notebooks/`.

- **`deploy_pdf`** and **`deploy_print_pdf`**
  - Copy PDFs into the downloads repo `programming-python-novice-course/ingenieurinformatik-download` (branch `main`).
  - Filenames include the version from `_config.yml` (`sphinx.config.release`); additionally a “current” alias is created (`Skript-aktuell.pdf` / `Skript-print-aktuell.pdf`).

## Triggers / rules (short)

- Workflows run for push, pull request, and manual `workflow_dispatch` triggers.
- Cross-repo deploy jobs run only for `master` pushes and require `DEPLOY_REPO_TOKEN` / `DOWNLOAD_REPO_TOKEN` GitHub secrets.

