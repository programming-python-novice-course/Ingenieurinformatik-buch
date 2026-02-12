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

(sec-int)=
# Ganze Zahlen - int (A)

Der Datentyp, welcher ganze Zahlen repräsentiert ``int`` (engl. [Integer](https://docs.python.org/3/library/functions.html#int)) ist ein [atomarer Datentyp](def-atomare-data-types) und verhält sich so wie wir es erwarten.

Falls Sie jedoch bereits Programmierkenntnisse besitzen, so gibt es für Sie in ``Python`` eine Besonderheit:

```{admonition} Fehlender Überlauf
:name: remark-int-overflow
:class: remark

In ``Python`` gibt es **keinen** Überlauf für ganze Zahlen ``int``.
```

Ganze Zahlen ()``int`` benötigen) in ``Python`` eine variable Anzahl an Bits.

Solange Ihr Speicher nicht komplett belegt ist, können Sie in ``Python`` somit mit sehr großen ganzen Zahlen rechnen.

```{code-cell} python3
large_number = 10**100 
print(type(large_number))
print(large_number)
```
