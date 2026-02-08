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

# Auswertungsreihenfolge (V)

Ein *Funktionsaufruf* ist ebenfalls ein *Ausdruck* und, wie beim Rechnen, werden Ausdrücke von innen nach außen *ausgewertet*.
Blicken Sie auf folgenden Ausdruck:

```{code-cell} python3
round(max(abs(-abs(-3)), 3, 5 + 3) - 0.6)
```

Dieser Ausdruck besteht aus mehreren Ausdrücken.
Die Auswertung des gesamten Ausdrucks erfolgt von links nach rechts, wobei die notwendigen Argumente, welche durch einen Ausdruck berechnet werden, ausgewertet werden.
Deshalb springen wir von außen nach innen und werten dann von innen nach außen aus.

```{figure} ../../../figs/06-python-basics/python-tutorial/variables/eval.png
---
width: 400px
name: fig-eval
---
Skizze der Auswertung / Evaluierung des obigen Ausdrucks.
```

Um ``round`` auszuwerten muss zu aller erst der Ausdruck ``max(abs(-abs(-3)), 3, 5 + 3) - 0.6`` ausgewertet werden.
Deshalb wird ``max(abs(-abs(-3)), 3, 5 + 3)`` ausgewertet.
Um jedoch ``max`` auszuwerten werden alle Argumente von links nach rechts berechnet.
Es beginnt mit dem ersten Argument: ``abs(-abs(-3))`` wird zu ``abs(-3)`` wird zu ``3`` und wir erhalten ``max(3, 3, 5 + 3)``.
Das zweite Argument ist bereits ausgewertet und aus ``5+3`` wird ``8``.
Schlussendlich wird ``max(3, 3, 8)`` zu ``8``.
Was bleibt ist ``round(8 - 0.6)`` was zu ``round(7.4)`` ausgewertet wird.
Dieser Ausdruck ergibt ``7``.

Wir können jeder [Variablen](sec-variables) auch einen Ausdruck zuweisen.
Dieser wird ausgewertet und das Ergebnis wird der Variablen zugewiesen.

```{code-cell} python3
x = round(max(abs(-abs(-3)), 3, 5 + 3) - 0.6)
x
```

Auch können wir Funktionsausdrücke mit anderen Ausdrucken wie etwa [arithmetische Operatoren](sec-python-operator-arithmetic) kombinieren.
Durch die folgende Abfolge von Ausdrücken berechnen wir den prozentualen Anteil der Einwohner in Deutschland, die in München wohnen und zwar auf zwei Nachkommastellen gerundet: 

```{code-cell} python3
population_munich = 1_553_373
population_germany = 83_121_363
persentage = round(10000 * 1_553_373 / 83_121_363) / 100
persentage
```
