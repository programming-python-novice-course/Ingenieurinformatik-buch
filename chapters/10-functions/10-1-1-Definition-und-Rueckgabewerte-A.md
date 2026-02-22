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

(sec-functions-basics)=
# Definition und Rückgabewerte (A)

In ``Python`` definieren wir eine Funktion mit dem Signalwort ``def`` (für Definition).
Es folgt der Funktionsname und in runden Klammern, getrennt durch Komma, die Parameter der Funktion.
Nach dem ``:`` beginnt der Funktionskörper, welcher eingerückt sein muss!

```python
def name_der_funktion(parameter1, parameter2, ...):
    '''
    An dieser Stelle steht der sog. "docstring".
    Dieser wird ausgegeben wenn help() zur Funktion aufgerufen wird.
    Er dient der Dokumentation und soll klären WAS Ihre Funktion macht.
    '''
    # Code
    return output  # (optional)
```

``Python`` erlaubt uns vor den Code des Funktionskörpers eine Zeichenkette zu schreiben.
Diese dient lediglich der Dokumentation.
Rufen wir zum Beispiel ``help(name_der_funktion)`` auf, erscheint genau jener Text.
Nach diesem ``docstring`` folgt unser Befehlsbündel.

Eine Funktion kann kein oder mehrere ``return``-Ausdrücke beinhalten.
Allerdings liefert eine ``Python``-Funktion immer etwas zurück.
Sollte die Funktion keinen ``return``-Ausdruck beinhalten oder das Programm in einen Zweig laufen, welcher ohne ein ``return`` endet, so gibt die Funktion ``None`` zurück.

Der Name für ``name_der_funktion`` darf frei vergeben werden.
Jedoch achtet man in der Programmierung stets auf **sprechende** Funktions- und Parameternamen.
Vergleichen Sie:

```{code-cell} python3
def dddd(something, l):
    """
    computes the subtraction of something and l.
    """
    return something - l
dddd(5, 6)
```

und

```{code-cell} python3
def subtract(x, y):
    """
    returns x - y
    """
    return x - y
subtract(5, 6)
```

Die erste Benennung erschwert das Lesen und Verstehen der Funktion.
Für die zweite Version müssen wir lediglich auf den Namen ``subtract`` und den kurzen ``docstring`` blicken um zu verstehen was die Funktion tut.

Den ``docstring`` könnten wir uns auch schenken, doch bedenken Sie dass andere Entwicklerinnen, welche Ihren Code benutzten, oft nicht in den Code blicken sondern sich lediglich den ``docstring`` ausgeben lassen.

```{admonition} Docstrings und Kommentare
:class: attention
:name: attention-missleading-doc

Nichts ist irreführender als fehlerhafte, widersprüchliche oder schlicht falsche Kommentare!
```

## Rückgabewerte

In ``Python`` ist es sehr einfach mehrere Rückgabewerte zu definieren:

```{code-cell} python3
def modulo(n, k):
    """
    returns div, rest such that n = k * div + rest, 
    where n, k, div, rest are whole numbers.
    """
    div = n // k
    rest = n % k
    return div, rest

modulo(10, 7)
```

Doch genau genommen hat eine ``Python``-Funktion genau einen Rückgabewert.
Im obigen Beispiel handelt es sich um **ein** Tupel ``tuple``, wodurch der Eindruck entsteht, wir würden mehrere Werte zurückgeben.
Durch das packing und unpacking (siehe Abschnitt [Tupel](sec-tuple)) 'simuliert' ``Python`` mehrere Rückgabewerte.

```{code-cell} python3
div, rest = modulo(10, 7)
print(div)
print(rest)
```

Verwenden wir kein ``return`` so gibt die Funktion (sofern sie keinen Fehler oder eine Endlosschleife verursacht) ``None`` zurück.

```{code-cell} python3
def print42():
    print('42')
    
print(print42())
```

entspricht

```{code-cell} python3
def print42():
    print('42')
    return None
    
print(print42())
```



```{exercise} Praxisaufgabe (PA4.3): Mitternachtsformel als Funktion
:label: ex-paufgaben-a43-qsolve

Implementieren Sie eine Funktion `qsolve(a, b, c)`, die die Anzahl reeller Nullstellen und die Nullstellen zurückgibt.

- Rückgabe z.B. als Tupel `(n, x1, x2)`
- Spezialfälle:
  - keine reellen Nullstellen: `n = 0`
  - doppelte Nullstelle: `n = 1`, `x1 == x2`
  - zwei Nullstellen: `n = 2`
```

```{figure} ../../figs/10-functions/paufgaben/k1/k1_abb4.png
---
width: 400px
name: fig-paufgaben-a43-mitternachtsformel
---
Beispielausgabe (Aufgabensammlung PA1.2/PA4.3).
```


Starten Sie mit dieser Zelle:

```{code-cell} python3
:tags: [skip-execution]

from math import sqrt

def qsolve(a, b, c):
    # TODO: diskriminante berechnen und Fälle behandeln
    return n, x1, x2

a = float(input("a: "))
b = float(input("b: "))
c = float(input("c: "))

n, x1, x2 = qsolve(a, b, c)
print(n, x1, x2)
```
