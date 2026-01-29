# Software vs. Programm

Ein *Programm* ist in einer Programmiersprache wie ``Python`` geschrieben und kann auf einer Maschine ausgeführt werden.

Eine *Software* besteht in der Regel aus einem oder mehreren Programmen sowie deren Konfigurationsdateien und der Dokumentation. Aus der Systemdokumentation können Entwickler den Aufbau der Software verstehen, insbesondere welche Strukturen vorhanden sind, damit verschiedene Programme ausführbar sind. Die Benutzerdokumentation dient dem Anwender, um zu verstehen, wie er von außen das Programm bedient {cite}`sommerville`.

Damit eine Software ihren Nutzerinnen und Nutzern verschiedene Programme bzw. Funktionen anbieten kann, muss sie sogenannte *Entrypoints* (Startpunkte) bereitstellen. Für jedes Programm gibt es mindestens einen Entrypoint (z. B. ein auszuführendes Skript, ein Kommando in der Konsole oder ein Menüpunkt in einer grafischen Oberfläche). Häufig wird das Verhalten eines Programms zusätzlich durch *Konfigurationsdateien* beeinflusst (z. B. „Welche Daten sollen geladen werden?“ oder „Welche Einstellungen gelten für dieses Projekt?“).

Bei Programmen mit *grafischer Benutzeroberfläche (GUI)* werden solche Konfigurationen oft im Hintergrund verwaltet: Der Nutzer speichert dann eine „Projektdatei“, in der die gewählten Einstellungen und Verweise auf Daten abgelegt sind.

```{figure} ../../figs/03-computer-sciences-basics/overview/softwarevsprogram.png
---
width: 700px
name: fig-software-vs-program
---
Anwendungs-Software besteht meist aus mehreren Programmen, die sowohl programmspezifischen Code enthalten als auch gemeinsamen Code nutzen. Häufig greifen Programme dabei auf extern entwickelte Bibliotheken oder Frameworks zurück.
```

**Geschäftslogik (Anwendungslogik)** bezeichnet den Teil eines Programms, der die fachlichen Regeln und Abläufe beschreibt: *Was* soll passieren – und *in welcher Reihenfolge*? 


Geschäftslogik setzt sich in der Regel aus mehreren Funktionalitäten zusammen, z. B. einem Algorithmus, der eigentlichen Datenverarbeitung und der Auswahl eines passenden Algorithmus auf Basis einer Eingabe.

Ein *Entrypoint* ist dabei **nicht** die Geschäftslogik selbst, sondern ein Startpunkt, der die Geschäftslogik aufruft (z. B. über eine GUI oder „headless“ ohne Oberfläche).


Beim *Skripten* schreiben wir oft vor allem den **Workflow** (A → B → C) und verwenden vorhandene Bibliotheken als Bausteine.

Beim *Programmieren* entwickeln wir zusätzlich (oder vor allem) die Bausteine selbst (A/B/C), sodass sie sauber strukturiert und wiederverwendbar sind.

Ein **repository** ist ein ablage für software in form von dateien und ordnern. der inhalt ist üblicherweise mit einem versionskontroll versehen, z.b. git.

Um repositories zu teilen werden sie in einem hub abgelegt. github als beispiel. wir an der hoschhule münchen nutzen gitlab lrz:
schauen sie mal rein.
