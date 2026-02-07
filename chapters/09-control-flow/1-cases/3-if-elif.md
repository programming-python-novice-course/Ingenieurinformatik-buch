# ``if``-``elif`` (A)

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
