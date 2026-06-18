# Project repositories (overview)

This project uses multiple Git repositories with clearly separated responsibilities.

See also:

- System overview: [`architecture.md`](./architecture.md)
- Where launch/repo config lives: [`repository-configuration.md`](./repository-configuration.md)
- CI/CD overview: [`ci-cd.md`](./ci-cd.md)

## 1) Source (working) repository (this repo)

Purpose:

- Source files for website and script (MyST/Markdown, notebooks, figures, configuration).
- GitHub Actions builds the HTML website (GitHub Pages) and the PDF(s).

## 2) Deployment repository (executable artifacts)

- Repo: `programming-python-novice-course/ingenieurinformatik-buch-deploy-lrz`

Purpose:

- Stores **executed** Jupyter notebooks under `deployed_notebooks/`.
- Serves as notebook source for JupyterHub launch links (via `git-pull`) and as the base repo for Binder/Thebe.

Important branches:

- `master`: source for JupyterHub links (see `_static/js/hub-link-rewrite.js`)
- `binder-minimal`: minimal base for Thebe/Binder (see `_scripts/patch_thebe_html.py`)

## 3) Downloads repository (PDFs)

- Repo: `programming-python-novice-course/ingenieurinformatik-download` (branch `main`)

Purpose:

- Stable download location for PDFs.
- Populated by CI (see `.github/workflows/book.yml`: `deploy_pdf`, `deploy_print_pdf`).

