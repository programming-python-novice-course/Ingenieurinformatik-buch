# Ingenieurinformatik 1 – Programmieren (Python)

Dieses Repository ist die Grundlage für die interaktive Lern-Website zum Programmierenlernen mit Python: [Zur Website](https://ingenieurinformatik-buch-fcbc5c.pages.gitlab.lrz.de/intro.html).
Kernidee ist, dass Studierende im Vorlesungsskript nicht nur lesen, sondern Beispiele direkt ausführen, verändern und die Wirkung unmittelbar beobachten können.
Ergänzend steht ein PDF-Skript zum Nacharbeiten und zur Prüfungsvorbereitung bereit (Download über die Website).

![Überblick](./README-pic.png)

## Vorteile für Studierende

Der Einstieg ist bewusst niedrigschwellig: Python-Code kann ohne Installation direkt im Browser im Skript ausgeführt werden. Dadurch wird Lernen zum aktiven Prozess: Beispiele nachvollziehen, Varianten ausprobieren und Ergebnisse überprüfen.

Über den JupyterHub der Hochschule München können Studierende zudem eigene Änderungen an den Code-Beispielen speichern und später weiterbearbeiten. Ergänzend gibt es die Inhalte als Buch im PDF-Format zum Nacharbeiten und Markieren (Download über die Website unter "Downloads").

Inhaltlich liegt der Schwerpunkt auf Programmierkompetenzen wie Syntax vs. Semantik, systematischer Methodik, Debugging, Tests sowie dem Lesen und Verstehen von Code.

## Programmieren lernen in Zeiten von LLMs

LLMs sind beim Programmieren hilfreich – aber robuste Software entsteht nicht „magisch“ aus Prompts: Anforderungen/Randbedingungen, Integration, Tests und Verantwortung bleiben menschliche Aufgaben.

Im Kurs nutzen wir KI daher als Lerncoach: Methodik und Verständnis aufbauen (z. B. die richtigen Rückfragen stellen, Lösungen prüfen), statt Verständnis durch fertigen Code zu ersetzen.

Das ist auch wissenschaftlich gut begründbar: Studien berichten, dass „KI als Lerncoach“ Lernzeit verkürzen kann bei vergleichbarem Lernerfolg (z. B. [Bassner et al., 2025](https://doi.org/10.1016/j.caeai.2025.100537)).

Mehr dazu im Kurskapitel: [Programmieren lernen in Zeiten von LLMs](https://ingenieurinformatik-buch-fcbc5c.pages.gitlab.lrz.de/chapters/01-course-overview/40-learningLLM.html).

## Für Beitragende

- Kollaborative Weiterentwicklung: Inhalte können gemeinsam gepflegt und ausgebaut werden (Issues/Merge Requests).
- Bearbeitung im Browser: viele Änderungen lassen sich direkt in GitLab im Webbrowser umsetzen (ohne lokale Installation).
- CI übernimmt den Rest: Builds und Deployments laufen automatisiert über GitLab CI; lokale Builds sind optional (für Maintainer).

## Links

- **Website (GitLab Pages)**: [Zur Website](https://ingenieurinformatik-buch-fcbc5c.pages.gitlab.lrz.de/intro.html)
- **Feedback / Verbesserungsvorschläge**: bitte als [Issue erstellen](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/issues)
- **Software-Doku für Maintainer (Build/CI/Repos)**: [`docs/README.md`](./docs/README.md)