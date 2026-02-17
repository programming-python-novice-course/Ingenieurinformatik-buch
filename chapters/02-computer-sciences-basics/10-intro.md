(info-und-se)=
# Informatik und Software Engineering

::::{only} html
```{figure} ../../figs/01-course-overview/overview/infrastructer-metaphor.png
---
height: 320px
name: infrastructer-metaphor-info-und-se
---
```
::::

**Informatik** beschäftigt sich mit:

- Algorithmen
- Rechenmaschinen 
- und damit, wie Information dargestellt, gespeichert, verarbeitet und übertragen wird. 

In dieser Vorlesung schauen wir vor allem aus der Ingenieurperspektive darauf:

- Wir wollen verstehen, wie Informationsverarbeitungssysteme aufgebaut sind und welche Prinzipien dahinterstehen.

**Software Engineering** meint Aktivitäten, die dazu dienen ein Software als Produkt

- zu planen,
- zu entwickeln,
- zu testen,
- zu betreiben ,
- und weiterzuentwickeln

mit dem Ziel Informationsverarbeitungssysteme so zu bauen, dass sie die gewünschten Funktionalitäten zuverlässig bereitstellen. 


Neben den Funktionalität soll Software gewisse Eigenschaften erfüllen, zum Beispiel:

- Robustheit (funktioniert auch bei Fehlern und unerwarteten Situationen)
- Anpassbarkeit (Änderungen lassen sich in vertretbarer Zeit umsetzen)
- Wartbarkeit (auch andere Personen können die Software verstehen und weiterentwickeln)
- Sicherheit (gegen typische Angriffe und Fehlkonfigurationen geschützt)

```{figure} ../../figs/02-computer-sciences-basics/unterscheidung.png
---
width: 400px
name: fig-unterscheidung-informatik-se
---
Unterscheidung zwischen Informatik und Software Engineering.
```


```{admonition} Hinweis
Die hier genannten Eigenschaften sind Beispiele für nicht-funktionale Anforderungen an Software. Eine umfangreichere Übersicht finden Sie z. B. in der Norm [ISO/IEC 25010:2011](https://www.iso.org/standard/78176.html).
```
Software läuft immer auf *irgendeiner* Rechenplattform:

- auf einem Computer (Laptop/PC/Server)
- auf einem Mikrocontroller in einem eingebetteten System. 

Diese Plattformen unterscheiden sich u. a. in Rechenleistung, Speicher, Betriebssystem und Schnittstellen.

Wir konzentrieren uns in dieser Veranstaltung auf den Computer, weil er ein gut verständliches Grundmodell liefert, das sich später auf andere Systeme (z. B. Mikrocontroller) übertragen lässt. 


In diesem Kapitel klären wir deshalb den grundsätzlichen Aufbau eines Computers und den Informationskreislauf (Eingabe–Verarbeitung–Speicherung–Ausgabe) sowie Konsequenzen, die sich daraus auf die Programmierung ergeben. 

Die folgenden Lernziele geben Ihnen dafür den roten Faden.

```{admonition} Lernziele
:class: learngoals
Nach diesem Kapitel ...
- können Sie den Informationskreislauf eines Computers (Eingabe, Verarbeitung, Speicherung, Ausgabe) erklären.
- können Sie die Von-Neumann-Architektur grob skizzieren und die Rollen von CPU, Speicher, Bus und Registern beschreiben.
- können Sie zentrale Begriffe nutzen, um präzise über Programme und Systeme zu sprechen.
- können Sie erklären, welche Aufgaben ein Betriebssystem übernimmt und wann Programme ohne klassisches Betriebssystem direkt auf der Hardware laufen.
- können Sie erläutern, wie Information als Bits codiert wird und wie Zahlen und Zeichen als Bitfolgen dargestellt werden.
- können Sie erklären, welche Eigenschaften einen Algorithmus auszeichnen und wie man Algorithmen anhand von Zeit- und Speicherkomplexität miteinander vergleichen kann.
- können Sie grundlegende Bausteine eines Programms benennen: Kontrollfluss und Datenstrukturen.
- können Sie grundlegende Werkzeuge aus dem Software Engineering benennen (z. B. Git zur Versionskontrolle) und teilweise anwenden (z. B. Methoden zur Visualisierung von Software).
```
Dieses Kapitel wird zum Großteil nicht in der Prüfung abgefragt - ohne dieses Kapitel können Sie spätere prüfungsrelevante Inhalte jedoch nur schwer einordnen.



