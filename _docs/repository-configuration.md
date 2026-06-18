# Repository & launch configuration

This page documents **where** repository- and launch-related configuration lives in this project.

See also:

- Project repository roles: [`project-repositories.md`](./project-repositories.md)
- System overview: [`architecture.md`](./architecture.md)

## 1) Repository button in the website UI

The link behind the repository button in the website navigation is configured in `_config.yml`:

- Section: `repository`
- Relevant key: `url`
- Location: `_config.yml`

Example:

```yaml
repository:
  # GitHub project web URL (no `.git`) so issue/edit links work correctly.
  url: https://github.com/programming-python-novice-course/Ingenieurinformatik-buch
```

Note: this affects the visible repository links in the website UI.

## 2) Minimal repository for BinderHub (Thebe backend)

The repository that is written into the final Thebe/Binder configuration is set during build post-processing:

- File: `_scripts/patch_thebe_html.py`
- Arguments:
  - `--repo`
  - `--ref`
  - `--binder-url`
- Current defaults:
  - `repo`: `https://github.com/programming-python-novice-course/ingenieurinformatik-buch-deploy-lrz.git`
  - `ref`: `binder-minimal`
  - `binder-url`: `https://mybinder.org`

Example from the script:

```python
parser.add_argument("--repo", default="https://github.com/programming-python-novice-course/ingenieurinformatik-buch-deploy-lrz.git")
parser.add_argument("--ref", default="binder-minimal")
parser.add_argument("--binder-url", default="https://mybinder.org")
```

Recommendation: keep this repo as small as possible for fast startup (only Binder-relevant content and required runtime files).

## 3) Repository for JupyterHub launch (notebook source)

The repository for the JupyterHub `git-pull` link is configured in the following JavaScript:

- File: `_static/js/hub-link-rewrite.js`
- Relevant keys:
  - `hubRepoUrl`
  - `branch`

Example:

```js
const TARGET = {
  hubRepoUrl: "https://github.com/programming-python-novice-course/ingenieurinformatik-buch-deploy-lrz.git",
  branch: "master",
};
```

Effect:

- The JupyterHub link’s `repo` query parameter is set to `hubRepoUrl`.
- The JupyterHub link’s `branch` query parameter is set to `branch`.
- `urlpath` is rewritten to point to a `.ipynb` under `deployed_notebooks/...`.

## Build flow (important)

The final Thebe configuration in the HTML output is produced in two steps:

1. `jupyter-book build ...`
2. `python3 _scripts/patch_thebe_html.py --path-output <output_dir>`

In CI, step 2 is already included in the `build_website_html` job (`.github/workflows/book.yml`).
