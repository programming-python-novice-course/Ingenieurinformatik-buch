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

# Verschachtelte Verzweigung (A)

## if/elif/else: der erste zutreffende Fall gewinnt

Bei einer Kette aus `if` / `elif` / `else` wird genau ein Block ausgeführt: der erste Block, dessen Bedingung `True` ergibt.
Wenn keine Bedingung zutrifft, wird der `else`-Block ausgeführt.

```{code-cell} python3
# Demo: mehrere Bedingungen können True sein, aber ausgeführt wird nur der erste Treffer.
P0 = False
P1 = True
P2 = True

if P0:
    ausgewaehlt = "B0"
elif P1:
    ausgewaehlt = "B1"
elif P2:
    ausgewaehlt = "B2"
else:
    ausgewaehlt = "Bn"

ausgewaehlt
```

Ein typisches Beispiel ist eine Einteilung in Bereiche:

```{code-cell} python3
x = 2

if x <= 2:
    print("x <= 2")
    x += 1
elif x <= 5:
    print("x <= 5")
    x += 2
elif x <= 7:
    print("x <= 7")
    x += 10
else:
    print("x > 7")
    x = 2

print(x)
```

## match/case: Fallunterscheidung für konkrete Werte

`match`/`case` ist besonders übersichtlich, wenn Sie diskrete Werte unterscheiden wollen (z. B. Statuscodes):

```{code-cell} python3
status = 200

match status:
    case 200:
        text = "OK"
    case 404:
        text = "Not Found"
    case 500 | 503:  # mehrere Fälle (OR)
        text = "Server Error"
    case _:  # Default-Fall (Wildcard)
        text = "Unknown Status"

text
```
