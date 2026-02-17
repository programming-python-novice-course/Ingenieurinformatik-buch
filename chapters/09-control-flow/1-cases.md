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

(sec-cases)=
# Fallunterscheidungen 

Wir wollen ein Programm schreiben, das uns sagt, welcher Ticketpreis für eine Bahnfahrt gilt.  
Dazu müssen wir abhängig von Eingabedaten (z. B. Alter und ggf. Status) unterschiedliche Fälle unterscheiden.

Beispiel: Tarifregeln

Zur Bestimmung des Ticketpreises berücksichtigt der Verkehrsanbieter

- das Alter der reisenden Person und
- optional einen besonderen Status (z. B. "schueler", "student").

Es gilt:

- Kinder unter 6 Jahren: kostenfrei
- Kinder/Jugendliche (6–17 Jahre, inkl.):
  - mit Status Schüler:in: stark ermäßigt
  - sonst: ermäßigt
- Erwachsene (18–64 Jahre, inkl.):
  - mit Status Student:in: ermäßigt
  - sonst: normal
- ab 65 Jahren: Seniorenticket

Die Entscheidungen erfolgen schrittweise:

- zuerst anhand des Alters,
- anschließend – in bestimmten Altersbereichen – anhand eines zusätzlichen Status.

```{figure} ../../figs/09-control-flow/decisiontree.png
---
width: 300px
name: decision-tree
---
Entscheidungsbaum für die Tarifregeln.
```

```{exercise} Struktogramm statt Entscheidungsbaum
:label: exercise-ticketpreis-struktogramm

Stellen Sie die obigen Tarifregeln nicht als Entscheidungsbaum, sondern als Struktogramm dar (siehe {ref}`sec-struktogramme`).
```