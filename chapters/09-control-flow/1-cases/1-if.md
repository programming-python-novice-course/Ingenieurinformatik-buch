# ``if`` (A)

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
