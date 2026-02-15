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

# Überblick 

In den vorherigen Abschnitten haben wir gesehen, warum Wrapper-Funktionen oft ein guter erster Schritt sind – und warum sie in der Praxis schnell unhandlich werden, wenn man bestehende Bibliotheken **systematisch** erweitern möchte.

In diesem Unterkapitel bauen wir dafür das Fundament der Objektorientierung in Python auf: **Klassen** (als selbst definierte Datentypen) und **Objekte** (als konkrete Instanzen).

```{admonition} Lernziele
:::class: learngoals

- Sie können erklären, warum Klassen mehr sind als „nur“ Datenstrukturen.
- Sie können Klassen und Objekte unterscheiden und den Begriff *Instanz* korrekt verwenden.
- Sie verstehen den Zweck von `__init__` und warum Methoden den Parameter `self` benötigen.
- Sie können Objektattribute von Klassenattributen unterscheiden und einfache Beispiele implementieren.
```

```{exercise} Praxisaufgabe (Refactoring): Widerstände als Klassen modellieren
:label: ex-paufgaben-oop-widerstaende

Sie kennen aus den frühen Praxisaufgaben die Berechnung von Reihen- und Parallelschaltung (Formeln, Einlesen mit `input`).

Refactoring-Aufgabe: Modellieren Sie das als Klassen, so dass sich Schaltungen **komponieren** lassen.

Vorschlag für ein Minimal-Design:
- `Resistor(R)` speichert einen Widerstandswert.
- `Series(elements)` berechnet `R_total` als Summe.
- `Parallel(elements)` berechnet `R_total` über die Kehrwerte.

Zusatz: Validieren Sie Eingaben (keine nicht-positiven Widerstände) und geben Sie bei Fehlern klare Meldungen aus.
```
