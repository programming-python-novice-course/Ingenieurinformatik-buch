[![Latest Release](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/badges/release.svg)](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/releases)
[![pipeline status](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/badges/master/pipeline.svg)](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/commits/master)

# Open educational resources for Python programming in non-computer-science degree programs

This repository contains Jupyter notebooks and Markdown sources for an introductory Python programming course. Jupyter Book builds these sources into an interactive course website and a book script in Portable Document Format (PDF). The repository also contains configuration and automation for building and deploying these artifacts.

The materials are designed for students outside of computer science, for example in mechanical engineering degree programs where programming is a supporting subject.

The project was originally developed for first-semester students at Munich University of Applied Sciences. It is used in Faculty 03 (Mechanical, Automotive and Aeronautical Engineering) for the course *Ingenieurinformatik 1 – Programmieren (Python)*.

Most course content is written in German because the course language is German. In particular, `chapters/`, `figs/`, and `bibliography/` contain the German-language teaching materials.

## Quick start

![Overview screenshot](./_docs/figs/README-pic.png)

- Website: [ingenieurinformatik-buch-fcbc5c.pages.gitlab.lrz.de](https://ingenieurinformatik-buch-fcbc5c.pages.gitlab.lrz.de/intro.html)
- Current PDF script: [`Skript-aktuell.pdf`](https://gitlab.lrz.de/fk03ingenieurinformatik/ingenieurinformatik-download/-/blob/main/Downloads/Skript-aktuell.pdf)

The website is built around Jupyter notebooks. Code cells can be executed in the browser by connecting to a Jupyter runtime. The project supports launches through services such as Binder and the [JupyterHub of Munich University of Applied Sciences](https://datahub.cs.hm.edu).

## Target audience

This project serves different needs.

- Educators who want to use the materials can use the published website and the PDF script.
- Educators who want to adapt content or publish their own version can use this repository and the connected deployment and download repositories as a starting point. For build and maintenance documentation, see [`_docs/README.md`](./_docs/README.md).
- Students typically use the published website and optionally the PDF script.



## Course concept and unique features

Large language models change how people write code and how they learn programming. This course uses them as learning support, but it does not outsource understanding to them. We distinguish conceptual knowledge from language-specific practice to keep the course goals transparent and durable.

More details are in the course chapter: [Learning programming in the age of large language models](https://ingenieurinformatik-buch-fcbc5c.pages.gitlab.lrz.de/chapters/01-course-overview/1-4-Programmieren-lernen-in-Zeiten-von-LLMs.html)

- The course concept distinguishes competencies that can be automated by large language models from those that cannot. This transparency helps students steer their learning and builds trust and motivation.
- The barrier to entry is intentionally low. Learners use interactive code cells and Jupyter notebooks in the cloud, so no local installation is required.
- The course focuses on core programming competencies that engineers need, including implementing and testing algorithms.

## License

The repository contents, the published website, and the PDF book script are licensed under the Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0). See [`LICENSE`](./LICENSE).
We want to make knowledge freely accessible. We chose this license to encourage reuse, adaptation, and sharing of improvements. The license also permits use in commercial settings under the specified conditions.

## Deployment overview

- The website is published via GitLab Pages from this repository.
- Executed notebooks are deployed to a separate repository for notebook launches.
- PDF files are deployed to a separate downloads repository.
- Details: [`_docs/project-repositories.md`](./_docs/project-repositories.md)


## Contributing and feedback

- Software documentation for maintainers and book developers: [`_docs/README.md`](./_docs/README.md)
- Contributing: [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- Feedback and issues: [GitLab issues](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/issues)


