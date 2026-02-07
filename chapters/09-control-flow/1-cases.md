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
# Fallunterscheidungen (A)

Für eine Fallunterscheidung können wir für jeden Fall $i$ einen bestimmten Codeblock $B_i$ definieren.
Dieser wird genau dann ausgeführt sofern ein logischer Ausdruck $P_i$ wahr, d.h. ``True`` ergibt und kein anderer logischer Ausdruck $P_j$ für $j < i$ bereits ``True`` ergeben hat.
In anderen Worten, der Fall $i$ trifft zu und kein Fall davor ist bereits eingetreten.

Damit führt eine Fallunterscheidung zur Ausführung von **höchstens** einer der Codeblöcke $B_0, \ldots, B_n$.
Trifft keiner der Fälle zu, d.h. kein $P_i$ ergibt ``True`` und es ist kein Alternativfall (``else``) definiert, so wird keiner der Codeblöcke ausgeführt.
Eine Fallunterscheidung beginnt immer mit dem ``if``-Signalwort!

## ``if``
Siehe Unterkapitel: [``if`` (A)](1-cases/1-if.md)

## ``if``-``else``
Siehe Unterkapitel: [``if``-``else`` (A)](1-cases/2-if-else.md)

## ``if``-``elif``
Siehe Unterkapitel: [``if``-``elif`` (A)](1-cases/3-if-elif.md)

## ``if``-``elif``-``else``
Siehe Unterkapitel: [``if``-``elif``-``else`` (A)](1-cases/4-if-elif-else.md)

## ``if``-``if``-``else``
Siehe Unterkapitel: [``if``-``if``-``else`` (S)](1-cases/5-if-if-else.md)

## Verschachtelung
Siehe Unterkapitel: [Verschachtelung (V)](1-cases/6-verschachtelung.md)

## Schnellschreibweise
Siehe Unterkapitel: [Schnellschreibweise (A)](1-cases/7-schnellschreibweise.md)

## Beispiel (quadratische Gleichungen)
Siehe Unterkapitel: [Beispiel (quadratische Gleichungen) (V)](1-cases/8-beispiel-quadratische-gleichungen.md)
