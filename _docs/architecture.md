# System architecture

![Architecture diagram](./figs/architecture.png)

## Overview

The platform consists of three Git repositories with clearly separated responsibilities:

- **Source repository (`Ingenieurinformatik-buch`)**: contains the sources (MyST/Markdown, configuration, scripts, assets) and builds the website and PDF artifacts via GitLab CI. It also generates **executed notebooks** from the sources.
- **Deployment repository (`ingenieurinformatik-buch-deploy-lrz`)**: contains the **executable artifacts** for Binder/Thebe and notebook workflows. This includes executed notebooks and the files required by the examples, such as data and assets (for example CSV and PNG files) and Python modules that are imported from within notebooks. The latter enables students to work with packages and modules in JupyterHub and Binder environments. It is populated automatically from the source repository and is **not** a working repo. See: https://gitlab.lrz.de/fk03ingenieurinformatik/ingenieurinformatik-buch-deploy-lrz
- **Downloads repository (`ingenieurinformatik-download`)**: stable storage for **PDF downloads** (e.g. `Skript-aktuell.pdf`). It is updated automatically from the source repo’s CI. See: https://gitlab.lrz.de/fk03ingenieurinformatik/ingenieurinformatik-download

For a maintained list of repositories/branches and their responsibilities, see [`project-repositories.md`](./project-repositories.md).

When the user selects “open notebook”, the website offers a choice of which JupyterHub to use:

- **mybinder.org** (more up-to-date packages; image built from the repo definition / cache)
- **HM Datahub (Munich University of Applied Sciences)** (stable images managed by HM)

## Usage paths and runtime decisions

The diagram separates two concepts:

1. **Artifact flow (CI/CD)**  
   Content is maintained in the source repo and CI produces:
   - Website (GitLab Pages)
   - PDFs (full & print) → deployed to the downloads repo
   - Executed notebooks → deployed to the deployment repo

2. **Runtime flow (user access)**  
   Depending on the user’s selection (Live Code or Notebook + provider), different runtimes are used:
   - On **mybinder.org**, the image is built from the definition in the deployment repo (or pulled from cache). Goal: reasonably up-to-date packages without manual version pinning.
   - On **HM Datahub**, predefined images managed by HM are used (a default image can be selected). Goal: a stable runtime environment.


| Variant | Provider | Runtime dependency definition | Image build process | Image ownership/access | Notebooks |
|---|---|---|---|---|---|
| **Live Code** | mybinder.org | Deployment repo (branch: `binder-minimal`) | Binder builds image from definition (or uses cache) | not built/managed by us; operated by mybinder.org | no notebooks required (runs independently of notebooks) |
| **JupyterHub via mybinder.org** | mybinder.org | Deployment repo (branch: `master`, folder/definition e.g. `docker`) | Binder builds image from definition (or uses cache) | not built/managed by us; operated by mybinder.org | notebooks from deployment repo (branch: `master`, folder: `deployed_notebooks`) |
| **HM Datahub (Munich University of Applied Sciences)** | HM | managed by HM (no direct access) | manual build of new images on request | provided by HM | notebooks from deployment repo (branch: `master`, folder: `deployed_notebooks`); folder `docker` in `master` is ignored |

## Branch strategy and operational reasons

To keep runtime dependencies consistent on Binder **for Live Code and Binder JupyterHub**, the runtime definitions in:

- `binder-minimal` (Live Code) and
- `master` (Binder JupyterHub)

should remain functionally equivalent.

At the same time, we intentionally use **two branches** in the `*-buch-deploy-lrz` repo (`binder-minimal`, `master`) so the Live Code environment contains **no notebooks**:

- **Security / misuse**: avoids attempts to run notebooks or use the “wrong” workflows in the Live Code environment.
- **Avoid confusion**: Live Code should not imply that notebooks are available there.
- **Performance & caching**: avoids cloning a large notebook tree; smaller images, better caching.

## PDF distribution (“current” script)

The **current PDF script** is stored in the downloads repository (e.g. as `Skript-aktuell.pdf`) and is linked from the website.
It is updated automatically by the source repository’s CI (versioned PDFs plus a “current” alias).
