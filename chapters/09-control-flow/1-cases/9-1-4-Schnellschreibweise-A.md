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

# Schnellschreibweise (A)

``Python`` erlaubt es uns einen Ausdruck der Form

```python
if P0:
    x = A0
else:
    x = A1
```

als 

```python
x = A0 if P0 else A1
````

zu schreiben.

```{code-cell} python3
y = 12
x = 0 if y % 2 == 0 else 1
x
```

Diese Schreibweise lässt sich gut mit sog. [Comprehension](sec-comprehension) verbinden:

```{code-cell} python3
numbers = list(range(10))
even = [True if x % 2 == 0 else False for x in numbers]
print(f'numbers: {numbers}')
print(f'even: {even}')
```
