# Software vs. Programm (S)

- Ein *Programm* ist in einer Programmiersprache (z. B. ``Python``) geschrieben und kann auf einer Maschine ausgeführt werden.
- *Programmiercode* auch genannt *Quellcode*, *Source Code* oder kurz *Code*, ist das Resultat der *Programmierung* und Teil eines *Programms*.
- Eine *Software* umfasst meist mehrere Programme sowie Konfiguration und Dokumentation {cite}`sommerville`.
- Systemdokumentation beschreibt den inneren Aufbau der Software (z. B. Struktur und Komponenten).
- Benutzerdokumentation erklärt, wie man die Software von außen bedient.
- Software stellt *Entrypoints* (Startpunkte) bereit, damit Nutzerinnen und Nutzer Funktionen aufrufen können (z. B. ein Skript, ein Konsolenkommando oder ein Menüpunkt).
- Das Verhalten eines Programms lässt sich häufig über *Konfigurationsdateien* steuern (z. B. „Welche Daten werden geladen?“).
- Wenn solche Konfigurations- oder Projektdateien nur mit einem bestimmten Programm sinnvoll genutzt werden können, spricht man oft von einem *proprietären* Format (also „tool-gebunden“ statt offen standardisiert).
- Bei Programmen mit *grafischer Benutzeroberfläche (GUI)* werden solche Konfigurationen oft im Hintergrund verwaltet, z. B. in einer „Projektdatei“ mit Einstellungen und Datenverweisen.


```{admonition} Definition: Proprietäres Format
:class: definition
:name: def-proprietary-format

Ein *proprietäres Format* ist ein Dateiformat, das nicht offen standardisiert ist und meist an ein bestimmtes Tool gebunden ist.

Beispiel: Wenn Sie ein Bauteil in CATIA als `.CATPart` speichern, können Sie die Geometrie in anderen CAD-Tools oft nicht direkt öffnen oder weiterbearbeiten. Häufig müssen Sie das Bauteil dafür erst in ein Austauschformat exportieren, z. B. als STEP-Datei (`.step`/`.stp`). STEP ist ein *offener Standard*.
```


- *Geschäftslogik (Anwendungslogik)* ist der Teil eines Programms, der fachliche Regeln und Abläufe beschreibt: *Was* soll passieren – und *in welcher Reihenfolge*?
- Ein *Entrypoint* ist **nicht** die Geschäftslogik selbst, sondern ein Startpunkt, der die Geschäftslogik aufruft (z. B. über GUI oder „headless“ ohne Oberfläche).


```{figure} ../../figs/02-computer-sciences-basics/overview/softwarevsprogram.png
---
width: 700px
name: fig-software-vs-program
---
Anwendungs-Software besteht meist aus mehreren Programmen, die sowohl programmspezifischen Code enthalten als auch gemeinsamen Code nutzen. Häufig greifen Programme dabei auf extern entwickelte Bibliotheken oder Frameworks zurück.
```


- Beim *Skripten* beschreiben wir oft vor allem den **Workflow** (A → B → C) und nutzen vorhandene Bibliotheken als Bausteine.
- Beim *Programmieren* entwickeln wir zusätzlich (oder vor allem) die Bausteine selbst (A/B/C), sodass sie sauber strukturiert und wiederverwendbar sind.

```{figure} ../../figs/02-computer-sciences-basics/programming-scripting.png
---
width: 700px
name: fig-programming-vs-scripting
---
Skripten beschreibt häufig den Workflow (A → B → C) mit vorhandenen Bausteinen, während Programmieren stärker auf die Entwicklung wiederverwendbarer Bausteine (A/B/C) abzielt.
```

