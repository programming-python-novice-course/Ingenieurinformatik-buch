# Datenstrukturen

Programme arbeiten nicht nur mit Anweisungen, sondern ständig mit Daten.
- Eingaben müssen im Arbeitsspeicher abgelegt werden.
- Zwischenergebnisse müssen wiedergefunden werden können.
- Ausgaben müssen erzeugt und oft erneut verarbeitet werden.

> Wie organisiert man Daten so, dass ein Programm sinnvoll und effizient mit ihnen arbeiten kann?


```{figure} ../../figs/02-computer-sciences-basics/overview/datastructures-funny.png
---
width: 700px
name: fig-datastructures-funny
---
Unterschiedliche Situationen erfordern unterschiedliche Datenstrukturen.
```

Das Bild zeigt: Es gibt keine „beste“ Datenstruktur, sondern nur eine passende für eine gegebene Aufgabe.

- Eine Queue ist passend, wenn Elemente in der Reihenfolge verarbeitet werden sollen, in der sie eintreffen.
- Ein Set ist passend, wenn nur relevant ist, ob ein Element vorhanden ist oder nicht.
- Eine Map ist passend, wenn Daten über einen Schlüssel wiedergefunden werden sollen.
- Ein Stack ist passend, wenn das zuletzt eingefügte Element zuerst wieder entfernt werden soll.

Diese Prinzipien tauchen im Alltag oft in konkreten Situationen auf.
- Eine Queue wird z. B. bei Aufträgen, Simulationen oder Datenströmen verwendet.
- Ein Set beantwortet effizient die Frage „Ist dieses Element enthalten?“
- Eine Map folgt dem Prinzip „Schlüssel → Wert“, z. B. wie in Tabellen oder Telefonbüchern.
- Ein Stack ist auch im Computer selbst zentral, z. B. bei Funktionsaufrufen und Rücksprungadressen.


```{admonition} Definition: Abstrakter Datentyp (ADT)
:class: definition
:name: def-abstract-data-type

Queue, Set, Map und Stack sind abstrakte Datentypen (ADTs).
- Sie beschreiben, welche Operationen auf einer Struktur erlaubt sind (z. B. Einfügen, Entfernen, Suchen).
- Sie beschreiben, welche Regeln dabei gelten (z. B. Reihenfolge beim Entfernen).
- Sie sagen nicht, wie die Struktur intern im Speicher umgesetzt ist.

Neben Queue, Set, Map und Stack gibt es weitere ADTs, z. B. Trees (Bäume).
```


Damit ein Computer diese abstrakten Ordnungen umsetzen kann, müssen sie konkret im Arbeitsspeicher realisiert werden.
Hier kommt die Speicherrepräsentation ins Spiel.

Alle Daten liegen letztlich als Bits im Arbeitsspeicher.
Entscheidend ist, wie diese Bits angeordnet sind und wie auf sie zugegriffen wird.
Eine grundlegende Unterscheidung ist die zwischen statischen und dynamischen Sammlungen.

**Statische Sammlungen**

Statische Sammlungen besitzen eine feste Größe.
- Der benötigte Speicher wird einmal reserviert.
- Die Größe kann sich zur Laufzeit nicht verändern.
- Die Elemente liegen typischerweise zusammenhängend im Speicher.

In unserem Beispiel ist es die Zahlenfolge 9-7-8-4-5-5-5-0.
- Alle Zahlen liegen nebeneinander im Speicher.
- Beim Einfügen zwischen 4 und 5 muss Platz vorhanden sein, oder es muss umorganisiert werden.

- Variante 1: Platz nebenan ist frei.
```{figure} ../../figs/02-computer-sciences-basics/overview/einfuegen.png
---
width: 700px
name: fig-static-insert-free
---
Einfügen in eine statische Struktur: rechts daneben ist noch Speicher frei.
```

- Variante 2: Platz nebenan ist belegt.

```{figure} ../../figs/02-computer-sciences-basics/overview/einfuegen-2.png
---
width: 700px
name: fig-static-insert-occupied
---
Einfügen in eine statische Struktur: rechts daneben ist kein Speicher frei (Umkopieren/Neuanordnung nötig).
```


**Dynamische Sammlungen**

Eine dynamische Sammlung ist eine Sammlung, deren Größe sich während der Programmausführung ändern kann.
- Sie kann wachsen oder schrumpfen.
- Die Umsetzung im Speicher hängt von der konkreten Datenstruktur ab.
- Häufig werden Verweise/Zeiger verwendet, um Elemente logisch zu verbinden.

Ein einfaches Beispiel ist eine verkettete Liste.
- Jedes Element (Knoten) enthält Daten und einen Zeiger auf das nächste Element.
- Zusätzlich gibt es einen Startzeiger (Head) auf das erste Element.
- Der Zeiger von G1 enthält (vereinfacht) die Speicheradresse von G2.
- Das letzte Element zeigt auf „nichts“ (z. B. `null`/`None`).

```{figure} ../../figs/02-computer-sciences-basics/overview/linkedlist.png
---
width: 700px
name: fig-linked-list
---
Beispiel einer verketteten Liste: Knoten enthalten Daten und einen Zeiger auf den nächsten Knoten.
```


```{admonition} Hinweis
:class: note

- Datenstrukturen sind Werkzeuge zur Organisation von Information.
- Abstrakte Datentypen beschreiben das gewünschte Verhalten.
- Implementierungen beschreiben die konkrete Umsetzung im Speicher.
- Die Wahl der Datenstruktur bestimmt, ob ein Problem einfach oder unnötig kompliziert gelöst werden kann.
```

