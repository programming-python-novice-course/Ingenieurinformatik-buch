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

# Rekursion

Rekursion bedeutet: Eine Funktion ruft sich selbst auf, bis ein Basisfall erreicht ist.
Sie haben das Konzept bereits im [Kapitel Kontrollstrukturen](sec-repetition-and-recursion) kennengelernt – hier vertiefen wir es mit konkreten Beispielen und Code.


```{admonition} Rekursion
:name: def-recursion
:class: definition
Als Rekursion wird ein Vorgang bezeichnet, welcher sich selbst als Teil enthält oder mithilfe von sich selbst definierbar ist.
```

```{admonition} Rekursive Funktionen
:class: definition
:name: def-recursive-function
Als *rekursive Funktion* wird eine Funktion bezeichnet, welche sich für bestimmte Argumente selbst aufruft.
```

**Beispiel: Fakultät**

Die Fakultät $n! = n \cdot (n-1) \cdot \ldots \cdot 1$ lässt sich rekursiv definieren:

$$\text{fac}(n) = \begin{cases} 1 & \text{ falls } n \leq 1\\ n \cdot \text{fac}(n-1) & \text{ sonst}\end{cases}$$

```{code-cell} python3
def fac(n):
    if n <= 1:    # Basisfall
        return 1
    else:         # Rekursiver Fall
        return n * fac(n - 1)

fac(4)
fac(5)
```

Damit eine rekursive Funktion terminiert, benötigt sie mindestens einen *Basisfall* – einen Pfad, der keinen weiteren Selbstaufruf enthält.
Im obigen Fall wird ``n`` bei jedem Aufruf um 1 verkleinert, bis ``n <= 1`` gilt.

**Beispiel: Fibonacci-Zahlen**

Die Fibonacci-Folge ist durch $F_0 = 0$, $F_1 = 1$ und $F_n = F_{n-1} + F_{n-2}$ definiert:

```{code-cell} python3
def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

fib(10)
```

```{admonition} Iteration und Rekursion
:class: theorem
:name: theorem-iteration-and-recursion

Jede Rekursion kann in eine Iteration und jede (unbestimmte) Iteration in eine Rekursion umgewandelt werden.
```

```{admonition} Vertiefung
:class: note

Rekursion führt oft zu elegantem, kurzem Code; für große $n$ sind iterative Varianten meist effizienter. Wie der Computer Rekursion mit Stack und Heap umsetzt, was Endrekursion bedeutet und warum Schleifen oft schneller sind wird im [Expertenwissen](sec-rekursion-vertieft) erklärt.
```