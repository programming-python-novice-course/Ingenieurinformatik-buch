[![Latest Release](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/badges/release.svg)](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/releases)
[![pipeline status](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/badges/master/pipeline.svg)](https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/commits/master)

# Ingenieurinformatik 1 – Programmieren (Python)

Dieses Repository bildet die Grundlage der interaktiven Lern-Website zur Veranstaltung *Ingenieurinformatik 1 – Programmieren (Python)*:  
-> [Zur Website](https://ingenieurinformatik-buch-fcbc5c.pages.gitlab.lrz.de/intro.html)

Ziel ist es, Studierenden einen praxisnahen und einfachen Zugang zum Programmieren zu ermöglichen.  

Die Lern-Website ist interaktiv gestaltet, d.h. Studierende können die in der Vorlesung gezeigten Beispiele **direkt ausführen und experimentell erkunden**. 

![Überblick](./_docs/figs/README-pic.png)

## Vorteile für Studierende

Der Einstieg ist bewusst niedrigschwellig gestaltet: 

- Python-Code kann **ohne lokale Installation direkt im Browser** ausgeführt werden. 
- Das Ziel ist das aktive Lernen zu fördern: Studierende können Beispiele direkt selbst nachvollziehen, Varianten ausprobieren und Auswirkungen unmittelbar beobachten.

Über den JupyterHub der Hochschule München besteht zudem die Möglichkeit, eigene Anpassungen an den Code-Beispielen zu speichern und später weiterzubearbeiten. Damit wird ein kontinuierliches, semesterbegleitendes Arbeiten unterstützt.

Alle Inhalte sind zusätzlich als [PDF-Skript](https://gitlab.lrz.de/fk03ingenieurinformatik/ingenieurinformatik-download/-/blob/main/Downloads/Skript-aktuell.pdf) verfügbar, das sich zum Nacharbeiten, Markieren und Wiederholen eignet.

Inhaltlich liegt der Schwerpunkt auf grundlegenden Programmierkompetenzen, die **über Python hinaus** relevant sind und sich auf andere Programmiersprachen übertragen lassen. 
Dazu zählen unter anderem:

- das strukturierte Entwickeln von Algorithmen, 
- der bewusste Umgang mit Syntax und Semantik, 
- systematisches Vorgehen (Debugging, Testing),
- sowie das Lesen, Verstehen und Bewerten von bestehendem Code.

## Programmieren lernen in Zeiten von LLMs

Large Language Models verändern nicht nur das Vorgehen beim Programmieren, sondern auch das Erlernen von Programmiertechniken und -sprachen.

Im Kurs werden KI-Werkzeuge als **Lernunterstützung** eingesetzt, um z. B. Lösungsansätze zu reflektieren. Ziel ist es, methodische Kompetenz und Verständnis aufzubauen – nicht (!) automatisch Code zu erzeugen.


Dass KI beim Erlernen von Programmiertechniken hilfreich sein kann, ist inzwischen auch wissenschaftlich belegt: Bassner et al. (2025, [doi:10.1016/j.caeai.2025.100537](https://doi.org/10.1016/j.caeai.2025.100537)) zeigen anhand universitärer Lehrveranstaltungen, dass der Einsatz von KI als Lerncoach die benötigte Lernzeit reduzieren kann – bei vergleichbarem Lernerfolg.

Wir kennzeichnen Kursinhalte danach, ob sie konzeptionelles Wissen (derzeit nur schwer mit LLMs automatisierbar) oder die Anwendung der Programmiersprache (gut automatisierbar) betreffen. Diese Transparenz soll helfen, den Stellenwert der Inhalte einzuordnen und Akzeptanz dafür zu schaffen, warum es auch in Zeiten von LLMs sinnvoll bleibt, Programmieren zu lernen. Wenn klar ist, dass das Gelernte nachhaltig ist, steigt oft auch die Motivation beim Lernen.

Damit wollen wir das Wesentliche in den Fokus rücken: Systemverständnis und systematisches Vorgehen und weniger Sprachgrammatik. Weiterführende Informationen finden sich im Kurskapitel:  
[Programmieren lernen in Zeiten von LLMs](https://ingenieurinformatik-buch-fcbc5c.pages.gitlab.lrz.de/chapters/01-course-overview/40-learningLLM.html)


## Für Beitragende

Das Repository ist auf kollaborative Weiterentwicklung ausgelegt und senkt bewusst die technischen Einstiegshürden:

- **Bearbeitung im Browser**: Viele inhaltliche Änderungen (Text, Aufgaben, Beispiele) können direkt über die GitLab-Weboberfläche vorgenommen werden – ohne lokale Entwicklungsumgebung oder Softwareinstallation.
- **Automatisierte Builds und Deployments**: GitLab CI übernimmt den Aufbau und die Veröffentlichung der Website. Lokale Builds sind optional und primär für Maintainer relevant.

## Repository-Struktur (kurz)

- `chapters/`, `figs/`, `bibliography/`: Inhalte des Buchs und der Website.
- `_...`-Verzeichnisse (z. B. `_docs/`, `_scripts/`, `_static/`): technische Infrastruktur für Build, Ausführung und Dokumentation der Website.

## Lizenz

Sofern nicht anders angegeben, ist dieses Werk lizenziert unter der [Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/). Siehe auch [`LICENSE`](./LICENSE).


## Links

- **Website (GitLab Pages)**:  
  https://ingenieurinformatik-buch-fcbc5c.pages.gitlab.lrz.de/intro.html  
- **Feedback / Verbesserungsvorschläge**:  
  https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch/-/issues  
- **Software-Dokumentation für Maintainer (Build / CI / Repositories)**:  
  [`_docs/README.md`](./_docs/README.md)

## Deployment

- Deployment-Repository: Enthält die ausführbaren Artefakte -> link: https://gitlab.lrz.de/fk03ingenieurinformatik/ingenieurinformatik-buch-deploy-lrz
- Download-Repository : PDF-Downloads-> https://gitlab.lrz.de/fk03ingenieurinformatik/ingenieurinformatik-download