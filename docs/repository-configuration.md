# Software-Dokumentation: Repositories und Launch-Links

Diese Datei beschreibt, wo im Projekt welche Repository-Einstellungen vorgenommen werden.

## 1) Repository-Button auf der Website

Der Link hinter dem Repository-Button in der Website-Navigation wird in `_config.yml` gesetzt:

- Bereich: `repository`
- Relevanter Key: `url`
- Aktueller Ort: `_config.yml`

Beispiel:

```yaml
repository:
  url: https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch.git
```

Hinweis: Diese Einstellung betrifft die sichtbaren Repository-Links (z. B. "Quell-Repository").

## 2) Minimal-Repository fuer BinderHub (Thebe-Backend)

Das Repository, das in die finalen Thebe-Binder-Optionen geschrieben wird, wird im Build-Postprocessing gesetzt:

- Datei: `scripts/patch_thebe_html.py`
- Argumente:
  - `--repo`
  - `--ref`
  - `--binder-url`
- Aktuelle Defaults:
  - `repo`: `https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch.git`
  - `ref`: `test_gitlab_binder_depl`
  - `binder-url`: `https://mybinder.org`

Beispiel aus dem Skript:

```python
parser.add_argument("--repo", default="https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch.git")
parser.add_argument("--ref", default="test_gitlab_binder_depl")
parser.add_argument("--binder-url", default="https://mybinder.org")
```

Empfehlung: Fuer schnelles Starten sollte dieses Repo moeglichst klein gehalten werden (nur Binder-relevante Inhalte wie `binder/environment.yml` und noetige Laufzeitdateien).

## 3) Repository fuer JupyterHub-Start (Notebook-Quelle)

Das Repo fuer den JupyterHub `git-pull`-Link wird in folgendem JavaScript konfiguriert:

- Datei: `_static/js/hub-link-rewrite.js`
- Relevante Keys:
  - `hubRepoUrl`
  - `branch`

Beispiel:

```js
const TARGET = {
  hubRepoUrl: "https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch.git",
  branch: "test_gitlab2",
};
```

Wirkung:

- `repo`-Query-Parameter im JupyterHub-Link wird auf `hubRepoUrl` gesetzt.
- `branch`-Query-Parameter im JupyterHub-Link wird auf `branch` gesetzt.
- `urlpath` wird auf ein `.ipynb` unter `deployed_notebooks/...` umgeschrieben.

## Build-Ablauf (wichtig)

Die finale Thebe-Konfiguration in den HTML-Seiten entsteht in zwei Schritten:

1. `jupyter-book build ...`
2. `python3 scripts/patch_thebe_html.py --path-output <output_dir>`

In der CI ist Schritt 2 bereits im Job `build_website_html` hinterlegt (`.gitlab-ci.yml`).
