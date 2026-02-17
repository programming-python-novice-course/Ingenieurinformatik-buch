# Projekt-Repositories (Übersicht)

Im Projekt werden mehrere Git-Repositories mit klar getrennten Rollen verwendet.

## 1) Arbeits-Repository (dieses Repo)

Zweck:

- Quellen für Website und Skript (Markdown, Notebooks, Abbildungen, Konfiguration).
- CI baut daraus HTML (GitLab Pages) und PDFs.

## 2) Deployment-Repository (ausführbare Inhalte)

- Repo: `fk03ingenieurinformatik/ingenieurinformatik-buch-deploy-lrz`

Zweck:

- Enthält **ausgeführte** Jupyter-Notebooks unter `deployed_notebooks/`.
- Dient als Notebook-Quelle für JupyterHub-Launch-Links (git-pull) und als Basis für Binder/Thebe.

Wichtige Branches:

- `master`: Quelle für JupyterHub-Links (siehe `_static/js/hub-link-rewrite.js`)
- `binder-minimal`: schlanke Basis für Thebe/Binder (siehe `scripts/patch_thebe_html.py`)

## 3) Download-Repository (PDFs)

- Repo: `fk03ingenieurinformatik/ingenieurinformatik-download` (Branch `main`)

Zweck:

- Stabile Download-Quelle für PDFs.
- Wird aus der CI befüllt (siehe `.gitlab-ci.yml`: `deploy_pdf_in_gitlabLRZ`, `deploy_print_pdf_in_gitlabLRZ`).

