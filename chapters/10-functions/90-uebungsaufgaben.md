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


```{exercise} Praxisaufgabe (PA4.1): Finden des größten gemeinsamen Teilers
:label: ex-paufgaben-a41-euklid

Implementieren Sie den größten gemeinsamen Teiler \(\\mathrm{ggT}(a,b)\) als Funktion mithilfe des euklidischen Algorithmus (Iterieren, bis der Rest 0 ist).

Zusatz: Testen Sie Ihre Funktion an vielen Zufallspaaren und geben Sie eine kleine Tabelle aus.
```


```{code-cell} python3
:tags: [skip-execution]

from random import randint

def ggt(a, b):
    # TODO: euklidischer Algorithmus
    return a

for i in range(10):
    a = randint(1, 100)
    b = randint(1, 100)
    print(f"{i+1:2d}: a={a:3d}, b={b:3d}, ggt={ggt(a,b):3d}")
```




```{exercise} Praxisaufgabe (PA5.6): Nullstelle finden - Bisektionsverfahren
:label: ex-paufgaben-a56-bisektion

Sie suchen numerisch eine Nullstelle einer Funktion \(f(x)\) im Intervall \([x_1, x_2]\) (Bisektionsverfahren).

- Voraussetzung: \(f(x_1)\\cdot f(x_2) < 0\)
- Wiederholen Sie, bis `abs(f(x0)) <= 1e-3`.
- Zusatz: Plotten Sie \(f\) und markieren Sie die gefundene Nullstelle.

Hinweis: Das Beispiel aus der Aufgabensammlung verwendet NumPy/Matplotlib; im Buch ist die Zelle standardmäßig nicht zur automatischen Ausführung markiert.
```

```{figure} ../../figs/paufgaben/k5/k5_abb8.png
---
width: 520px
name: fig-paufgaben-a56-bisektion
---
Beispielplot mit markierter Nullstelle (Aufgabensammlung PA5.6).
```


```{code-cell} python3
:tags: [skip-execution]

from numpy import sin, linspace
import matplotlib.pyplot as plt

```

