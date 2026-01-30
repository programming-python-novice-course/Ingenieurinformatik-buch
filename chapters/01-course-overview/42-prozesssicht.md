# Softwareentwicklung


Wie auch Hardware hat auch Software einen *Produktlebenszyklus*. Es gibt irgendwann eine Produktidee, dann wird entwickelt, produziert und verkauft.

Um sicherzustellen, dass die Software am Ende das tut was sie soll wird üblicherweise nach einem bestimmten Schema vorgegangen. Je nach Firma und Projekt gibt es unterschiedliche Schemata wie man Software entwickeln kann, die sich darin unterscheiden, wann welche Aufgabe in einem bestimmten Umfang als erledigt betrachtet wird.

Im Rahmen eines Entwicklungsprozesses werden (fast immer) folgenden Phasen durchlaufen:


```{figure} ../../figs/02-course-concept/overview/development-phases.png
---
width: 600px
name: fig-development-phases
---
Entwicklungsphasen der Softwareentwicklung nach dem Wasserfallmodell. Bild in Anlehnung an Sommerville, 2011.
```

- Analyse und Definition der Anforderungen: Die Ziele des Systems bzw. der Software werden gemeinsam mit den Nutzenden definiert.
- System- und Softwareentwurf: Es wird eine Systemarchitektur erstellt und festgelegt, welche Funktionalitäten von welchen Hardware- und Softwarekomponenten übernommen werden.
- Implementierung und Modultests: Der Entwurf wird in Programme bzw. Programmeinheiten umgesetzt, und die einzelnen Module werden getestet, damit jede Einheit ihre Spezifikation erfüllt.
- Integration und Systemtest: Die Einzelprogramme werden integriert und als Gesamtsystem getestet, idealerweise auf der Zielinfrastruktur, bevor das System ausgeliefert wird.
- Betrieb und Wartung: Das System wird installiert und genutzt, und erkannte Fehler werden behoben sowie neue Anforderungen bei Bedarf umgesetzt.

Phasen-übergreifend wird außerdem
- die IT-Security berücksichtigt
- die Safety berüchsichtigt
- Konfigurationsmanagement betrieben 
- die Softwarequalität monitored


```{admonition} Hinweis
:name: remark-sample
:class: remark
Das Software Engineering Compentency Model (SWECOM) der IEEE Computer Society beschreibt welche Kompetenzen ein Softwareentwickler benötigt, um die Phasen-bezogenen und phasen-übergreifenden Aufgaben zu erledigen.
```

```{admonition} Fokus dieser Vorlesung
::class: note

Softwareentwicklung beinhaltet viele Aspekte. In dieser Vorlesung betrachten wir bewusst nur einen Ausschnitt.

**Vereinfachende Annahmen:**

- Das Problem („die Aufgabe“) ist bekannt, d. h. die Anforderungsdefinition ist erledigt.
- Das Programm muss von keinen anderen Menschen oder Systemen genutzt werden, d. h. Systemplanung und Integration entfallen.
- Das Programm muss nur auf dem Rechner laufen, auf dem es entwickelt wurde, d. h. Systemintegration, Betrieb und Wartung entfallen.
- Der Algorithmus wird nur über einen begrenzten Zeitraum genutzt, d. h. es gibt keine Software-Updates.

**Worauf wir uns konzentrieren:**

- Der Schwerpunkt liegt auf den Grundlagen des Programmierens und entspricht der Phase **„Implementierung und Modultests“**.
- Sie lernen, wie man einen Algorithmus entwickelt, in einem Programm umsetzt (implementiert) und testet.

**Abgrenzung:**

- Wir entwickeln Programme, bei denen alles nacheinander ausgeführt wird (Single-Thread-Anwendungen).
- Nebenläufige Ausführung (z. B. Multithreading oder parallele Programmierung) ist nicht Teil der Veranstaltung.
```





