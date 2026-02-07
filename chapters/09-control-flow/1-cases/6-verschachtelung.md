# Verschachtelung (V)

Selbstverständlich kann ein Codeblock $B_i$ erneut eine oder mehrere Fallunterscheidungen enthalten.
Und selbstverständlich können wir Fallunterscheidungen in Funktionen einbauen.

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
            out = 0
    return out

print(nested_branching(3, 1))
print(nested_branching(3, 2))
print(nested_branching(1, 3))
print(nested_branching(1, 1))
```

Wir können häufig verschachtelte Fallunterscheidungen auflösen. Zum Beispiel können wir die Funktion auch wie folgt definieren:

```{code-cell} python3
def nested_branching(x, y):
    if x > 2 and y < 2:
        out = x + y
    elif x > 2:
        out = x - y
    elif x <= 2 and y > 2:
        out = x * y
    else:
        out = 0
    return out

print(nested_branching(3, 1))
print(nested_branching(3, 2))
print(nested_branching(1, 3))
print(nested_branching(1, 1))
```

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
