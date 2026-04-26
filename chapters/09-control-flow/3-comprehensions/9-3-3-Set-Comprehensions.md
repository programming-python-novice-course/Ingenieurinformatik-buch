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

(sec-set-comprehensions)=
# Set-Comprehensions

Und auch für [Mengen](sec-set) können wir Comprehensions verwenden.

```{code-cell} python3
numbers = {1,2,3,4}

{x*x for x in numbers}
```
