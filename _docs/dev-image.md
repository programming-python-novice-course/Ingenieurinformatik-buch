# Dev image (CI/local builds)

CI (and recommended local builds) use the dev image (Docker image) from the GitHub Container Registry:

- `ghcr.io/programming-python-novice-course/ingenieurinformatik-buch:latest`

The sources live in `_dev-image/`:

- `_dev-image/Dockerfile`
- `_dev-image/doc-requirements.txt`

## Build & push (Buildx, linux/amd64)

```bash
REGISTRY_IMAGE="ghcr.io/programming-python-novice-course/ingenieurinformatik-buch"
TAG="$(date +%F)" # YYYY-MM-DD

# If needed:
echo "$GITHUB_TOKEN" | docker login ghcr.io -u "$GITHUB_ACTOR" --password-stdin

# Important: the build context is `_dev-image/` because `doc-requirements.txt` lives there.
docker buildx build --platform linux/amd64 \
  -f _dev-image/Dockerfile \
  -t "${REGISTRY_IMAGE}:${TAG}" \
  -t "${REGISTRY_IMAGE}:latest" \
  --push \
  _dev-image
```

## Notes

- The Dockerfile is based on `jupyter/base-notebook:x86_64-ubuntu-22.04` and installs LaTeX/ImageMagick + Python packages.
- If you want to test locally *without* pushing, replace `--push` with `--load` (but note this only makes sense for a single platform).

