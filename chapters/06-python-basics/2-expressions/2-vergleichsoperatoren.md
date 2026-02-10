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

(sec-python-operator-compare)=
# Vergleichsoperatoren (A)

Objekte können über Vergleichsoperatoren miteinander verglichen werden. 
Das Ergebnis ist ein boolscher Wert ``True`` oder ``False``.

| Operator  | Beschreibung                      |
| :-------: | :-------------------------------- |
| `x == y ` | ist `x` gleich `y`?               |
| `x != y`  | ist `x` ungleich `y`?             |
|  `x > y`  | ist `x` größer als `y`?           |
| `x >= y`  | ist `x` größer oder gleich `y`?   |
|  `x < y`  | ist `x` kleiner `y`?              |
| `x <= y`  | ist `x` kleiner gleich `y`?       |
| `x is y`  | ist `x` [identisch](def-identity) zu `y`? |

Erneut ist ``Python`` hier ein wenig speziell, da es die mathematische Schreibweise $0 < x < 5$ zulässt.
Dies erhöht die Lesbarkeit, da wir solche Verkettungen von Vergleichsoperatoren gewohnt sind.

```{code-cell} python3
5 < 7 < 10 # True
```

```{code-cell} python3
5 < 7 and 7 < 10 # True
```

```{code-cell} python3
5 < 7 < 5 # False
```

*Vergleichsoperatoren* können auch auf nicht-numerischen Werten (ganze Zahlen ``int``, Fließkommazahlen ``float``) definiert sein.
So können wir in ``Python`` auch Zeichenketten ``str`` mit den Vergleichsoperatoren lexikographisch vergleichen:

```{code-cell} python3
'Anna' < 'Emma' # True
```

Generell vergleichen wir Objekte einer Menge immer bezüglich einer (totalen) Ordnung.
Diese Ordnung muss irgendwo definiert worden sein, ob durch die Standardbibliothek von ``Python``, impliziet, oder durch uns Entwickler\*innen.
