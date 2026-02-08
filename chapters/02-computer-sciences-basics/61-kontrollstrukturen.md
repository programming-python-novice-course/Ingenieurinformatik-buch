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

# Kontrollstrukturen (A)

```{figure} ../../figs/02-computer-sciences-basics/control-structures.png
---
width: 700px
name: fig-control-structures
---
Überblick über grundlegende Kontrollstrukturen
```

Kontrollstrukturen beantworten eine einfache Frage: In welcher Reihenfolge werden Anweisungen ausgeführt – und unter welchen Bedingungen?
Mit wenigen Bausteinen lassen sich bereits sehr viele Programme ausdrücken.

- Fallunterscheidungen: führe Code nur aus, wenn eine Bedingung erfüllt ist.
- Wiederholung: führe Code mehrfach aus (als Schleife oder als Rekursion).
- Funktionen: kapseln Teilaufgaben und machen Code wiederverwendbar.

Für konkrete Syntax und Varianten in ``Python`` verweisen wir auf den Teil PYTHON:
[Fallunterscheidungen](sec-cases), [Schleifen](sec-loops) und [Rekursion](sec-recursive-functions).

```{admonition} Kontrollstrukturen
:name: def-control-structure
:class: definition

Kontrollstrukturen sind Anweisungen, welche die Abarbeitungsreihenfolge von anderen Anweisungen, und damit den Programmablauf kontrollieren.
```

Schon wenige Konzepte reichen aus, um sehr viele Programme auszudrücken. Die formale Einordnung (Berechenbarkeit, Turing‑Vollständigkeit) ist spannend, aber nicht Kernstoff dieses Kapitels.

(sec-if-else)=
**Fallunterscheidungen (bedingte Ausführung)**

Eine Fallunterscheidung führt Code nur dann aus, wenn eine Bedingung erfüllt ist. Die Bedingung wird zur Laufzeit zu ``True`` oder ``False`` ausgewertet.

Mini‑Beispiel (Python):

```python
x = -3
if x < 0:
    print("negativ")
elif x == 0:
    print("null")
else:
    print("positiv")
```

(sec-repetition-and-recursion)=
**Wiederholung**

Wiederholung bedeutet: Wir schreiben einen Ablauf einmal und führen ihn mehrfach aus. So können Programme abhängig von der Eingabe unterschiedlich viele Schritte machen (z. B. „solange, bis …“).

Zwei zentrale Formen sind:

1. Iteration (Schleifen, z. B. ``for``/``while``)
2. Rekursion (eine Funktion ruft sich selbst auf)

Auf der konzeptionellen Ebene erscheinen Iteration und Rekursion grundverschieden -- es sind unterschiedliche Denkweisen.
Wir können rekursiv oder iterativ denken.

```{admonition} Iteration und Rekursion
:class: theorem
:name: theorem-iteration-and-recursion

Jede Rekursion kann in eine unbestimmte Iteration und jede (unbestimmte) Iteration in eine Rekursion umgewandelt werden.

```

Mit unbestimmt meinen wir, dass vor Beginn nicht klar ist, wie viele Wiederholungen nötig sind (typisch: ``while``‑Schleifen).

Mini‑Beispiel (Python, unbestimmte Wiederholung):

```python
n = 100
steps = 0
while n > 1:
    n //= 2
    steps += 1
print(steps)  # wie oft kann man halbieren, bis 1 erreicht ist?
```

(sec-iteration)=
**Iteration**

Iteration wiederholt einen Codeblock über eine Schleife. Typisch ist ``for`` (wiederhole über eine Folge von Werten) oder ``while`` (wiederhole, solange eine Bedingung gilt).

Mini‑Beispiel (Python, ``for``‑Schleife):

```python
n = 10
acc = 0
for i in range(2, n + 1, 2):
    acc += i
print(acc)  # 2+4+6+8+10
```

(sec-recursion)=
**Rekursion**

Rekursion beschreibt Wiederholung über Selbstaufruf: Eine Funktion reduziert das Problem, bis ein einfacher Basisfall erreicht ist. Rekursive Lösungen können sehr kompakt sein, sind aber nicht immer die effizienteste Wahl.

Nehmen wir die Berechnung der Fakultät, einmal iterativ

$$\text{fac}_\text{it}(n) = n \cdot (n-1) \cdot (n-2) \cdot \ldots \cdot 1 = \prod\limits_{i=1}^n i$$

und einmal rekursiv

$$\text{fac}_\text{rec}(n) = \begin{cases} 1 & \text{ falls } n = 0\\ n \cdot \text{fac}_\text{rec}(n-1) & \text{ sonst}\end{cases}$$

Die Rekursion beinhaltet einen Selbstbezug, wohingegen die iterative Lösung diesen ausbreitet bzw. auflöst.
Betrachten wir die rekursive Lösung benötigen wir für die Berechnung lediglich die Multiplikation und den Selbstbezug - keine Schleife, und abgesehen von ``n``, nicht einmal eine Variable.

```{admonition} Rekursion
:name: def-recursion
:class: definition
Als Rekursion wird ein Vorgang bezeichnet, welcher sich selbst als Teil enthält oder mithilfe von sich selbst definierbar ist.
```

Mini‑Beispiel (Python, rekursive Fakultät):

```python
def fac(n: int) -> int:
    if n == 0:
        return 1      # Basisfall
    return n * fac(n - 1)  # rekursiver Schritt

print(fac(5))  # 120
```

(sec-functions-control-structures)=
**Funktionen**

Funktionen kapseln Teilaufgaben: Sie geben einem Ablauf einen Namen, können Parameter annehmen und (typisch) ein Ergebnis zurückgeben. So wird Code wiederverwendbar und Programme werden übersichtlicher.

Mini‑Beispiel (Python):

```python
def is_even(n: int) -> bool:
    return n % 2 == 0

nums = [1, 2, 3, 4, 5, 6]
print([x for x in nums if is_even(x)])  # [2, 4, 6]
```
