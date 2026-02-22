# Lokal bauen (HTML/PDF)

Empfehlung: **Builds lokal im gleichen dev-image ausführen wie in der CI**, um OS-/LaTeX-/Abhängigkeits-Probleme zu vermeiden.

## Voraussetzungen

- Docker installiert
- dev-image verfügbar: `gitlab.lrz.de:5005/fk03ingenieurinformatik/ingenieurinformatik-buch:latest`

## Container starten

```bash
docker run --rm -it \
  -v "$PWD":/home/jovyan/work \
  -w /home/jovyan/work \
  gitlab.lrz.de:5005/fk03ingenieurinformatik/ingenieurinformatik-buch:latest \
  bash
```

Hinweis: Im CI läuft alles als User `jovyan`. Lokal ist das meist unkritisch; bei Permission-Problemen hilft es, als root zu starten oder den Mount anzupassen.

## HTML-Website bauen

Im Container:

```bash
rm -rf _build _website_html
jupyter-book build . --path-output _website_html --verbose
python3 scripts/patch_thebe_html.py --path-output _website_html
```

## PDF bauen

Im Container:

```bash
rm -rf _build _book_as_pdf

# Falls GIFs vorhanden sind: erstes Frame nach PNG konvertieren.
# `convert` ist Teil von ImageMagick (im dev-image bereits installiert).
find figs -name "*.gif" -print0 | while IFS= read -r -d "" gif; do
  png="${gif%.gif}.png"
  if [ ! -f "$png" ]; then
    convert "${gif}[0]" "$png" && echo "generated: $png"
  fi
done

export LATEXMKOPTS='-interaction=nonstopmode'
jupyter-book build . --builder pdflatex --path-output _book_as_pdf --verbose
```

Artefakt: `_book_as_pdf/_build/latex/book.pdf`

## Wenn Bilder „komisch“ aussehen

Es kann vorkommen, dass Bilder bei lokalen Builds anders gerendert werden als im CI-Container (z. B. wegen Font-/OS-Unterschieden).  
Im Zweifel: im CI bauen lassen und dort verifizieren.

