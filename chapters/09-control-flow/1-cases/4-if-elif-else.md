# Match-case (A)

Wir wollen:


## Match-case als verschachteltes if-else


In der nächsten Variante wird genau ein Codeblock $B_i$ nur dann ausgeführt, sofern ein logischer Ausdruck $P_i$ ``True`` ergibt. Gibt es mehr als einen logischen Ausdruck $P_i$ welcher ``True`` ergibt, so wird der erste Codeblock (der mit dem kleinsten $i$) ausgeführt.
Trifft kein Fall zu, wird der Alternativblock $B_n$ ausgeführt.

```python
if P0:
    B0
elif P1:
    B1
elif P2
    B2
...
else:
    Bn
```

```{code-cell} python3
x = 2

if x <= 2:
    print(f'x <= 2')
    x += 1
elif x <= 5:
    print(f'x <= 5')
    x += 2
elif x <= 7:
    print(f'x <= 7')
    x += 10
else:
    print(f'x > 2 and x > 5 and x > 7')
    x = 2   
print(x)
```


## Elegante Lösung 

status = 200

match status:
    case 200:
        return "OK"
    case 404:
        return "Not Found"
    case 500 | 503: # OR-Operator für mehrere Fälle
        return "Server Error"
    case _: # Default-Fall (Wildcard)
        return "Unknown Status"



