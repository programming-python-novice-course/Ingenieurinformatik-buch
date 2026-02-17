# Docker Build-Image (CI/Lokal)

Die CI (und empfohlene lokale Builds) verwenden ein Docker-Image aus der GitLab-Registry:

- `gitlab.lrz.de:5005/fk03ingenieurinformatik/ingenieurinformatik-buch:latest`

Quellen dafür liegen in:

- `docker/Dockerfile`
- `docker/doc-requirements.txt`

## Bauen & Pushen (Buildx, linux/amd64)

```bash
REGISTRY_IMAGE="gitlab.lrz.de:5005/fk03ingenieurinformatik/ingenieurinformatik-buch"
TAG="$(date +%F)" # YYYY-MM-DD

# falls nötig:
docker login gitlab.lrz.de:5005

# Wichtig: Build-Kontext ist der Ordner `docker/`, da dort `doc-requirements.txt` liegt.
docker buildx build --platform linux/amd64 \
  -f docker/Dockerfile \
  -t "${REGISTRY_IMAGE}:${TAG}" \
  -t "${REGISTRY_IMAGE}:latest" \
  --push \
  docker
```

## Hinweise

- Das Dockerfile basiert auf `jupyter/base-notebook:x86_64-ubuntu-22.04` und installiert LaTeX/ImageMagick + Python-Pakete.
- Wenn du lokal *ohne* Push testen willst, ersetze `--push` durch `--load` (dann aber nur für eine Plattform sinnvoll).

