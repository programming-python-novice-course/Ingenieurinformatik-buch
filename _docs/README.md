# Software documentation (`_docs/`)

The pages in `_docs/` are **maintainer- and book-developer-facing documentation** (build, CI/CD, repositories, configuration).  
They are **not** part of the Jupyter Book website.

The contents are:

- **System architecture**: [`architecture.md`](./architecture.md)
- **Project repositories**: [`project-repositories.md`](./project-repositories.md)
- **Repository & launch configuration**: [`repository-configuration.md`](./repository-configuration.md)
- **CI/CD**: [`ci-cd.md`](./ci-cd.md)
- **Dev image**: [`dev-image.md`](./dev-image.md)
- **Local build**: [`local-build.md`](./local-build.md)

## Reading instructions for content developers 

If you want to contribute to the book/website contents, it is helpful if you can build the html and pdf file on your local system (instead of building it over the CI/CD-pipeline which is also possible). 

See the how-tos in [`local-build.md`](./local-build.md).


## Reading instructions for maintainers 

The repository contains raw markdown files from which executable code-cells (html) and Juypter-Notebooks are generated. The following pages contain information about the build process and the artifacts flow.

1. **Project repositories (source / deploy / downloads)**: [`project-repositories.md`](./project-repositories.md)
2. **System architecture (artifact flow vs runtime flow)**: [`architecture.md`](./architecture.md)
3. **Repository & launch configuration (where is what configured?)**: [`repository-configuration.md`](./repository-configuration.md)
4. **CI/CD (jobs, triggers, artifacts, deployments)**: [`ci-cd.md`](./ci-cd.md)
5. **Dev image (build dependencies; build & push)**: [`dev-image.md`](./dev-image.md)





