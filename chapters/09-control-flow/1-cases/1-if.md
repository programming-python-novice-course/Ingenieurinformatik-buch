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

# Einfache Verzweifung (A)

``if`` 

Die einfachste Form der Fallunterscheidung prüft ob ein logischer Ausdruck $P_0$ eingetreten.
Nur wenn dies zutrifft, wird der Codeblock $B_0$ ausgeführt:

```python
if P0:
    B0
```

```{code-cell} python3
x = 2

if x <= 2:
    x += 1
    print(f'x: {x}')
```


``if``-``else`` 

In der nächsten Variante wird ein Codeblock $B_0$ nur dann ausgeführt, sofern ein logischer Ausdruck $P_0$ ``True`` ergibt.
Ist dies nicht der Fall, so wird ein Alternativblock (``else``) $B_1$ ausgeführt.

```python
if P0:
    B0
else:
    B1
```

```{code-cell} python3
x = 2

if x <= 2:
    x += 1
    print(f'x: {x}')
else:
    print(f'x > 2')
print(x)
```

``if``-``elif`` 

In der nächsten Variante wird höchstens ein Codeblock $B_i$ nur dann ausgeführt, sofern ein logischer Ausdruck $P_i$ ``True`` ergibt.
Gibt es mehr als einen logischen Ausdruck $P_i$ welcher ``True`` ergibt, so wird der erste Codeblock (der mit dem kleinsten $i$) ausgeführt.

```python
if P0:
    B0
elif P1:
    B1
elif P2
    B2
...
```

```{code-cell} python3
x = 2

if x <= 2:
    print(f'x <= 2')
    x += 1
elif x <= 5:
    print(f'x <= 5')
    x += 2
elif x <= 6:
    print(f'x <= 4')
    x += 6
print(x)
```

## Vorsicht


Aufeinanderfolgende ``if``-Statements sind nicht eine sondern mehrere Fallunterscheidungen, denn jedes ``if``-Statement leitet eine neue Fallunterscheidung ein!

```{code-cell} python3
x = 2

if x <= 2:
    print(f'x <= 2')
    x += 1
if x <= 5:
    print(f'x <= 5')
    x += 2
if x <= 7:
    print(f'x <= 7')
    x += 10
else:
    print(f'x > 2 and x > 5 and x > 7')
    x = 2   
print(x)
```

```{admonition} Aufeinander folgende Fallunterscheidungen
:class: remark
:name: remark-multi-cases
Es ist zu empfehlen aufeinanderfolgende ``if``-Statements durch eine Leerzeile zu trennen.
```

```{code-cell} python3
x = 2

if x <= 2:
    print(f'x <= 2')
    x += 1
    
if x <= 5:
    print(f'x <= 5')
    x += 2
    
if x <= 7:
    print(f'x <= 7')
    x += 10
else:
    print(f'x > 2 and x > 5 and x > 7')
    x = 2   
print(x)
```
