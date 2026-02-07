# Rückgabewerte (A)

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
