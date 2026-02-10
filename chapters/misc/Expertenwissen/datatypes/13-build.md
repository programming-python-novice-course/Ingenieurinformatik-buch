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

# Herkunft (S)

> Ein Datentyp kann entweder von der Programmiersprache bereitgestellt werden (built-in) oder vom Programmiert selbst definiert werden (Eigendefinition).
Diese Datentypen stehen Ihnen zur Verfügung sobald Sie ``Python`` auf Ihrem System oder Ihrer Umgebung installiert haben.

Anders als in vielen anderen Sprachen müssen Sie den (built-in) Datentyp einer Variablen in ``Python`` nicht explizit angeben.
``Python`` schließt von der Schreibweise des Wertes automatisch auf den richtigen Datentyp.

Eine Folge von Ziffern mit einem optional vorangestellten Minuszeichen werden als ganze Zahl ``int`` interpretiert.
Befindet sich in der Folge ein Punkt ``.`` so wird der Wert als Fließkommazahl interpretiert.
Sie können den Datentyp einer Variablen ``x`` oder eines Wertes mit ``type(x)`` abfragen:

```{code-cell} python3
type(-3123)
```

```{code-cell} python3
type(1.313)
```

```{code-cell} python3
name = 'Anna'
type(name)
```

```{code-cell} python3
mylist = [1, 2, 3, 4, 'A']
print(f'List Type: {type(mylist)}')
print(f'Element 0 Type: {type(mylist[0])}')
print(f'Element 4 Type: {type(mylist[4])}')
```


