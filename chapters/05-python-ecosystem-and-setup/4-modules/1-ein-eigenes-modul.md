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

Lassen Sie uns eine Datei ``squaresum.py`` im aktuellen Verzeichnis erstellen und folgenden Code einfügen:

```python
def square_sum(n):
    result = 0
    for i in range(n):
        result += (i+1)**2
    return result
```

Diese Funktion ``square_sum(n)`` gibt die Summe alle Quadratzahlen von 1 bis ``n`` zurück.
Lassen Sie uns den Kommandozeileninterpreter im gleichen Verzeichnis ausführen:

```sh
python
```

Wie können wir nun unsere Funktion, welche in der Datei ``squaresum.py`` steht, nutzen?
Wir importieren ``squaresum``, denn der Name unseres eben geschriebenen Moduls ist standardmäßig gleich seinem Dateinamen ohne der Endung ``.py``.

```python
>>> import squaresum
>>> squaresum.square_sum(100)
338350
```

Diese Befehle erzeugen folgende Ausgabe

```{figure} ../../../figs/05-python-ecosystem-and-setup/python-tutorial/environment/square-sum.png
---
width: 800px
name: fig-square-sum
---
```

Ein Modul ist demnach nichts weiter als eine Datei welche ``Python``-Definitionen und Ausdrücke enthält.
Den Namen des Moduls erhalten wir auch durch

```python
>>> squaresum.__name__
'squaresum'
```

Wir können sowohl den Namen, mit dem wir auf das Modul zugreifen, als auch dessen Funktionen umbenennen.

```python
>>> import squaresum as ss
>>> ss.square_sum(100)
338350
```

oder 

```python
>>> import squaresum as ss
>>> square_sum = ss.square_sum
>>> square_sum(100)
338350
```
