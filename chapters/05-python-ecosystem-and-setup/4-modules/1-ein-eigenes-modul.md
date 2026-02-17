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

# Ein eigenes Modul (V)

Wir gehen in kleinen Schritten vor:

1. Legen Sie im aktuellen Verzeichnis die Datei ``squaresum.py`` an und fügen Sie diesen Code ein:

```python
def square_sum(n):
    result = 0
    for i in range(n):
        result += (i+1)**2
    return result
```

Diese Funktion ``square_sum(n)`` gibt die Summe der Quadratzahlen von 1 bis ``n`` zurück.

2. Starten Sie den Kommandozeileninterpreter im gleichen Verzeichnis:

```sh
python
```

3. Importieren Sie das Modul und rufen Sie die Funktion auf:

```python
>>> import squaresum
>>> squaresum.square_sum(100)
338350
```

```{admonition} Merksatz
:class: remark
Der Name eines Moduls ist standardmäßig der Dateiname ohne Endung ``.py``.
```

Diese Befehle erzeugen folgende Ausgabe:

```{figure} ../../../figs/05-python-ecosystem-and-setup/python-tutorial/environment/square-sum.png
---
width: 800px
name: fig-square-sum
---
```

- Ein Modul ist demnach nichts weiter als eine Datei, die ``Python``-Definitionen und Ausdrücke enthält.
- Den Namen des Moduls erhalten wir auch durch:

```python
>>> squaresum.__name__
'squaresum'
```

Wir können sowohl den Namen, mit dem wir auf das Modul zugreifen, als auch dessen Funktionen umbenennen:

```python
>>> import squaresum as ss
>>> ss.square_sum(100)
338350
```

Oder wir legen uns direkt eine Referenz auf die Funktion:

```python
>>> import squaresum as ss
>>> square_sum = ss.square_sum
>>> square_sum(100)
338350
```
