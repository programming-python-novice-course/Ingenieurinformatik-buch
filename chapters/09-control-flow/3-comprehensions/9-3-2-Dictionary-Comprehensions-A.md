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

(sec-dict-comprehensions)=
# Dictionary-Comprehensions (A)

Sehr ähnlich lässt sich diese Schreibweise für [Wörterbücher](sec-dict) einsetzten.

```{code-cell} python3
x = {'a': 1, 'b': 2, 'c': 3}

{key:v**3 for (key, v) in x.items()}
```
