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

# Erste Schritte (V)

Programmieren beginnt oft mit dem Durchwühlen von Dokumentationen fremder Module und Pakete.
Bevor wir loslegen müssen wir erst in Erfahrung bringen **WAS** überhaupt möglich ist.

```{admonition} Leitfrage
:class: question

Welche vordefinierten Funktionen und Module gibt es – und welche davon könnten für meine Zwecke nützlich sein?
```

Bevor Sie etwas implementieren: 

- Sehen Sie sich zunächst an, was Python an internen Funktionalitäten bereitstellt in der [Python-Dokumentation] (https://docs.python.org/3.10/library/index.html) 

- Wenn Sie dort nicht fündig werden: recherchieren Sie in den externen Bibliotheken im [Python Package index](https://pypi.org/)

- ERST wenn Sie dort nicht fündig werden, programmieren Sie!

Selbst nach Jahren an Programmierkenntnissen hört dieser Lernprozess nie auf.
Ständig werden neue nützliche Module programmiert und auch Sie werden noch irgendwann Ihre eigenen Module implementieren und nutzten.
Einer der wichtigsten Fähigkeiten ist es, Dokumentationen zu finden und richtig zu lesen.

Mit zunehmender Erfahrung klappt auch dies immer besser.
Zum Beispiel würden erfahrene Programmiererinnen richtigerweise vermuten, dass das Modul ``random`` auch eine Funktion bieten wird, welche eine zufällige natürliche Zahl zurückliefert.
Durchforsten wir das Internet nach diesem Modul so stoßen wir möglicherweise auf [diese Seite](https://docs.python.org/3/library/random.html).
Dort finden wir eine Funktion ``random.randint``.

Wir finden diese auch in der Hilfe, die wir duch ``help`` ausgeben können.

```{code-cell} python3
:tags: [output_scroll]
import random
help(random)
```

```{exercise} Dokumentation
:label: documentation-exercise
Finden Sie die Dokumentation der Funktion ``random.shuffle`` und beschreiben Sie anhand der Dokumentation das **WAS** dieser Funktion.
```

```{solution} documentation-exercise
:label: documentation-solution
:class: dropdown

Diese Funktion mischt eine gegebene Sequenz.
Die übergebene Sequenz ``x`` wird dadurch verändert (durchgemischt).

```
