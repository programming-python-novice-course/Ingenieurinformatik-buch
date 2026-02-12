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

# int und float in Kombination (V)

Da wir bei mathematischen Operationen wie ``+``, ``-``, ``*``, ``/``, ``//`` und ``**`` ganze Zahlen ``int`` und Fließkommazahlen ``float`` vermischen können, müssen wir darauf achten welcher Datentyp am Ende herauskommt.
Sobald eine Fließkommazahl ein Teil der Berechnung ist, ist das Ergebnis vom Typ ``float``.

```{code-cell} python3
x = 3 * 1.0     # int * float -> float   
print(type(x))
print(x)
```

```{code-cell} python3
large_number = 10.0**100     # float ** int -> float  
print(type(large_number))
print(large_number)
```

Auch für die ganzzahligen Division ``//`` erhalten wir als Datentyp eine Fließkommazahl sofern eine Fließkommazahl bei der Operation teilnimmt:

```{code-cell} python3
x = 3.0 // 2     # float // int -> float   
print(type(x))
print(x)
```

```{code-cell} python3
x = 3 // 2.0     # int // float -> float   
print(type(x))
print(x)
```

```{code-cell} python3
x = 3 // 2     # int // int -> int   
print(type(x))
print(x)
```

