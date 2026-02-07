# ``if``-``else`` (A)

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
