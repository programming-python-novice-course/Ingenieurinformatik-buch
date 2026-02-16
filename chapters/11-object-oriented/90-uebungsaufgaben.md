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

# Übungsaufgaben

```{figure} ../../figs/11-object-oriented/uebung_k4_abb3.jpg
---
width: 700px
name: fig-paufgaben-widerstaende-uebung
```

```{exercise} Praxisaufgabe (PA1.5): Widerstände (Reihe/Parallel)
:label: ex-paufgaben-a15-widerstaende-formeln

Programmieren Sie ein Skript, das nach Eingabe von drei elektrischen Widerständen \(R_1\), \(R_2\) und \(R_3\)

- den Gesamtwiderstand \(R_{\text{Reihe}}\) der Reihenschaltung und
- den Gesamtwiderstand \(R_{\text{parallel}}\) der Parallelschaltung

berechnet und ausgibt.

Für die Parallelschaltung gilt:

$$
\frac{1}{R_{\text{parallel}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}
$$

Zusatzaufgaben:

- Falls einer der eingegebenen Widerstandswerte kleiner oder gleich 0 ist, soll eine passende Fehlermeldung ausgegeben werden.
- Begründen Sie: Kann bei der Berechnung der Parallelschaltung eine Division durch 0 auftreten – und wenn ja, wann?
```


```{exercise} Praxisaufgabe: Widerstände als Klassen modellieren
:label: ex-paufgaben-oop-widerstaende

Sie kennen aus den frühen Praxisaufgaben die Berechnung von Reihen- und Parallelschaltung (Formeln, Einlesen mit `input`).

Refactoring-Aufgabe: Modellieren Sie das als Klassen, so dass sich Schaltungen **komponieren** lassen.

Vorschlag für ein Minimal-Design:
- `Resistor(R)` speichert einen Widerstandswert.
- `Series(elements)` berechnet `R_total` als Summe.
- `Parallel(elements)` berechnet `R_total` über die Kehrwerte.

Zusatz: 
- Validieren Sie Eingaben (keine nicht-positiven Widerstände) und geben Sie bei Fehlern klare Meldungen aus.
- Ergänzen Sie Ihr Klassenmodell um eine Methode `__str__`, die die Schaltung lesbar beschreibt.
- Schreiben Sie kleine Tests (z.B. `assert`) für Serie/Parallel (bekannte Werte).
```


