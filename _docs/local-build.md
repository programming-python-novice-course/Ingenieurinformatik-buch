# Local build (HTML/PDF)

Recommendation: run local builds in the **same dev image as CI** to avoid OS/LaTeX/dependency drift.

See also:

- Dev image details: [`dev-image.md`](./dev-image.md)
- CI overview: [`ci-cd.md`](./ci-cd.md)

## Prerequisites

- Docker installed
- Dev image available: `gitlab.lrz.de:5005/fk03ingenieurinformatik/ingenieurinformatik-buch:latest`

## Start the container

```bash
docker run --rm -it \
  -v "$PWD":/home/jovyan/work \
  -w /home/jovyan/work \
  gitlab.lrz.de:5005/fk03ingenieurinformatik/ingenieurinformatik-buch:latest \
  bash
```

Note: CI runs as user `jovyan`. Locally this is usually fine; if you hit permission issues, run as root or adjust the mount settings.

## Build the HTML website

Inside the container:

```bash
rm -rf _build _website_html
jupyter-book build . --path-output _website_html --verbose
python3 _scripts/patch_thebe_html.py --path-output _website_html
```

## Build the PDF

Inside the container:

```bash
rm -rf _build _book_as_pdf

# If GIFs exist: convert first frame to PNG for LaTeX builds.
# `convert` is part of ImageMagick (already installed in the dev image).
find figs -name "*.gif" -print0 | while IFS= read -r -d "" gif; do
  png="${gif%.gif}.png"
  if [ ! -f "$png" ]; then
    convert "${gif}[0]" "$png" && echo "generated: $png"
  fi
done

export LATEXMKOPTS='-interaction=nonstopmode'
jupyter-book build . --builder pdflatex --path-output _book_as_pdf --verbose
```

Artifact: `_book_as_pdf/_build/latex/book.pdf`

## If images look “different” locally

Some images may render differently locally than in the CI container (e.g. fonts/OS differences). When in doubt, verify using a CI build.

