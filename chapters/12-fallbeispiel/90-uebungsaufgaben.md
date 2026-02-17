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


```{exercise} PA5.4 (Parsing): Zeit/Spannung aus Datei lesen
:label: ex-paufgaben-a54-akku-parsing

Aufgabe: eine Messdatei mit zwei Spalten (Zeit \(t\), Spannung \(u\)) einlesen

Ziel ist:

- Werte einlesen,
- und anschließend Kennwerte bestimmen (z.B. wann die Spannung unter 90% bzw. 80% der Anfangsspannung fällt).
```

```{figure} ../../figs/12-fallbeispiel/paufgaben/k5/k5_abb5.png
---
width: 350px
name: fig-paufgaben-a54-akku
---
Beispielplot der Messwerte (Aufgabensammlung PA5.4).
```

Wir verarbeiten hier **Textinhalt**. Dieser Textinhalt kann z.B. aus einer Datei stammen.
In unserem Fall hinterlegen wir den Text direkt im Programm in einer Textvariable.
Ihre Aufgabe bleibt aber gleich: **Iterieren Sie über Zeilen** (`lines`) und parsen Sie `t` und `u`.

```{code-cell} python3
tt = []
uu = []

messw_aus_txt = """\
0   4.20
5   4.18
10  4.16
15  4.14
20  4.11
25  4.08
30  4.04
35  4.00
40  3.96
45  3.92
50  3.88
55  3.84
60  3.80
65  3.76
70  3.72
75  3.68
80  3.64
85  3.60
90  3.56
95  3.52
100 3.48
"""

lines = messw_aus_txt.strip().splitlines()
```


```{admonition} Wichtig (Praxis)
:class: warning

Diese Übungsaufgabe ist rein didaktisch gedacht. In der Praxis werden Sie in Python in der Regel **keine eigenen Parser** schreiben.
Das Parsing von Dateien (z.B. `txt`, `csv`, `png`) sind weitgehend gelöste Probleme – verwenden Sie dafür bitte vorhandene, gut getestete Bibliotheken.

Sonst stehen Sie schnell – wie Julia – vor dem Problem, dass die Lösung nicht generisch ist, und Sie haben zusätzlich hohen Test- und Wartungsaufwand.
```


**Zeitreihe plotten und Schwellen markieren**


```{exercise} PA5.4 (Plot): 90% / 80% Schwellen
:label: ex-paufgaben-a54-akku-plot

Erweitern Sie das Einlesen aus `PA5.4` so, dass Sie:

- \(u_{90} = 0.9 \\cdot u_0\) und \(u_{80} = 0.8 \\cdot u_0\) bestimmen,
- den ersten Zeitpunkt finden, an dem \(u < u_{90}\) bzw. \(u < u_{80}\) gilt,
- und alles plotten (Messpunkte + horizontale Schwellenlinien).

```

```{code-cell} python3
:tags: [skip-execution]

import matplotlib.pyplot as plt

# tt, uu kommen aus dem Parsing-Schritt (PA5.4)

# TODO: u90/u80, t90/t80 bestimmen

plt.plot(tt, uu, "b+")
plt.plot([tt[0], tt[-1]], [u90, u90], "r-")
plt.plot([tt[0], tt[-1]], [u80, u80], "r-")
plt.grid(True)
plt.show()
```
