---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

(sec-visualization)=
# Kommunikation von Software 

> Wie kann ich anderen Personen verständlich machen, was mein Programm macht? Wie kann ich anderen Menschen beschreiben, was eine Software tut?

Diese Frage steht im Zentrum der Softwareentwicklung, denn Programmieren ist immer auch Kommunikation. Sie wollen einem anderen Menschen Ihre Idee, Ihr Konzept begreiflich machen.

Es gibt viele verschiedene Wege, Software und Algorithmen zu kommunizieren. Jede Methode hat ihre Stärken und ist für bestimmte Aspekte und Zielgruppen geeignet:

- Flussdiagramme: Visuelle Darstellung des Programmablaufs mit verschiedenen Symbolen. Gut für den Überblick über den gesamten Ablauf, weniger geeignet für komplexe verschachtelte Strukturen.
- Pseudocode: Eine einfache, weniger strikte Beschreibung eines Algorithmus in einer Sprache, die der natürlichen Sprache ähnelt (siehe [Definition](def-pseudocode)). Ideal, wenn Sie sprachenübergreifend kommunizieren möchten oder den Algorithmus konzeptionell beschreiben wollen.
- Struktogramme (Nassi-Shneiderman-Diagramme): Visuelle Darstellung strukturierter Algorithmen, bei der die Kontrollstruktur und der Ablauf auf einen Blick erkennbar sind. Besonders geeignet für strukturierte Algorithmen mit wenigen Schritten.
- Skizzen: Freihand-Zeichnungen, die schnell erstellt werden können. Perfekt für den ersten Entwurf, Brainstorming und die Kommunikation mit nicht-technischen Stakeholdern.
- Videos: Bewegte Darstellungen, z.B. durch Tanzen (hier ein [Sortieralgorithmus](https://youtu.be/lyZQPjUT5B4?si=CaIJa_HSt4pSRtwi)). Sehr anschaulich, aber aufwendig zu erstellen.
- Sequenzdiagramme: Zeigen die Interaktion zwischen verschiedenen Komponenten oder Objekten über die Zeit. Ideal für die Kommunikation von Systemarchitekturen und Kommunikationsabläufen.
- Komponentendarstellungen: Zeigen die Struktur und Beziehungen zwischen verschiedenen Komponenten einer Software. Gut für die Architekturkommunikation.
- Klassendiagramme: Zeigen die Struktur von Klassen und deren Beziehungen in objektorientierten Systemen. Wichtig für die Kommunikation von Softwarearchitekturen.
- Programmcode: Wenn Ihr Gegenüber die gleiche Programmiersprache beherrscht, kann der Code selbst die beste Kommunikationsform sein. Direkt ausführbar und unmissverständlich.

**Wahl des Kommunikationsmediums** 

Die Wahl des Kommunikationsmediums hängt von zwei zentralen Faktoren ab:

1. Was möchte ich kommunizieren? 
   - Die Gesamtarchitektur einer Software?
   - Den Ablauf eines Algorithmus?
   - Einen Teilablauf oder eine spezifische Funktion?
   - Die Datenstrukturen und deren Beziehungen?
   - Die Interaktion zwischen Komponenten?

2. Was kennt mein Publikum?
   - Beherrscht mein Gegenüber die gleiche Programmiersprache?
   - Kennt mein Gegenüber Struktogramme, Flussdiagramme oder UML?
   - Ist mein Gegenüber ein Programmieranfänger oder erfahrener Entwickler?
   - Arbeitet mein Gegenüber eher visuell oder textuell?

Je nach Zweck und Zielgruppe werden Sie ein bestimmtes Kommunikationsmedium auswählen: Wenn Ihr Gegenüber keine Struktogramme kennt, Sie aber beide in der gleichen Programmiersprache programmieren, dann können Sie den Algorithmus auch direkt in Programmcode ausdrücken.

**Fokus dieser Veranstaltung**

Im Rahmen dieser Vorlesung lernen wir Struktogramme und Pseudocode als Kommunikationswege kennen. Diese eignen sich für strukturierte Algorithmen, bei denen nur wenige Schritte nacheinander ausgeführt werden. Der Standard in der Praxis ist allerdings häufig der Einsatz von UML-Diagrammen.

```{admonition} UML – die wohl wichtigste Darstellungsform
:class: note

UML (Unified Modeling Language) ist eine standardisierte grafische Notation, mit der man Struktur und Verhalten von Softwaresystemen modellieren kann.
Die Idee ist, komplexe Software auf einer „gemeinsamen Bildsprache“ zu beschreiben, bevor oder während man sie implementiert.

Sie hat sich durchgesetzt, weil sie als Standard von vielen Tools unterstützt wird und weil Teams (Entwicklung, Test, Fachseite) damit leichter eine gemeinsame Grundlage für Kommunikation und Dokumentation finden.
```