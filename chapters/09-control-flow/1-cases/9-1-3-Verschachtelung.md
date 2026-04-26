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

# Verschachtelung

Wir können häufig verschachtelte Fallunterscheidungen auflösen, um Code leserlicher zu machen.

**Beispiel**
Eine Funktion liefert einen Zahlenwert abhängig von den Werten von x und y. Je nachdem welche Werte x und y annehmen
- wird x und y addiert/subtrahiert
- wird x und y multipliziert
oder
- eine Meldung gegeben, dass das ergebnis nicht definiert ist

```{code-cell} python3
def nested_branching(x, y):
    if x > 2:
        if y < 2:
            out = x + y
        else:
            out = x - y
    else:
        if y > 2:
            out = x * y
        else:
            out = "nicht definiert"
    return out

print(nested_branching(3, 1))
print(nested_branching(3, 2))
print(nested_branching(1, 3))
print(nested_branching(1, 1))
```

**Problem**
Die Funktion sehr verschachtelt, was manche Programmierer als unleserlich empfinden.

**Was können wir tun?**
Wir formden den Code um, indem wir die verschachtelten Bedingungen zu zusammengesetzten Bedingungen (mit `and`) zusammenfassen und die Verschachtelung durch eine `if`/`elif`/`else`-Kette ersetzen:


```{code-cell} python3
def nested_branching(x, y):
    if x > 2 and y < 2:
        out = x + y
    elif x > 2:
        out = x - y
    elif x <= 2 and y > 2:
        out = x * y
    else:
        out = "nicht definiert"
    return out

print(nested_branching(3, 1))
print(nested_branching(3, 2))
print(nested_branching(1, 3))
print(nested_branching(1, 1))
```
Wir sehen, dass beide Codes zum gleichen Ergebnis führen.
Es ist eine Frage der **Lesbarkeit**, welche Variante besser ist. 
In der zweiten Version haben wir zwar eine niedrigere Verschachtellung, allerdings sehen wir nicht sofort, dass die ersten Fälle 

```python
if x > 2 and y < 2:
        out = x + y
elif x > 2:
    out = x - y
...
```

und die beiden letzten Teile

```python
...
elif x <= 2 and y > 2:
    out = x * y
else:
    out = 0
```

eine Entweder-Oder-Beziehung besitzen. 
Zudem haben wir zweimal den logischen Ausdruck ``x > 2``.

Einen Block der Art:

```python
if P0:
    if P1:
        if P2:
            if P3:
                ...
```

lässt sich immer in 

```python
if P0 and P1 and P2 and P3 ...:
```

umwandeln.
