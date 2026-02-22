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

# Veränderung (S)

Wie der Name bereits betont, sind *Variablen* **variabel** und können somit verändert werden.
Wir müssen jedoch zwischen zwei Veränderungen einer Variablen ``x`` unterscheiden:

1. der Veränderung ihrer Wertes ``x``
2. der Veränderung ihrer Speicheradresse ``id(x)`` (die auf den Wert zeigt)

```{admonition} Veränderlich und Un­ver­än­der­lich­keit
:name: def-mutable
:class: definition

Wir nennen eine Variable, *veränderlich* (engl. *mutable*) wenn wir deren Wert verändern können indem wir den Speicherbereich der Variable verändern können.
Ein Variable ist dagegen *unveränderlich* (engl. *immutable*) wenn wir deren Speicherbereich nicht verändern können.

Ist eine Variable *unveränderlich*, so wird deren Veränderung durch eine Kopie (einen neuen Speicherbereich) realisiert.
Das Ursprungsobjekt bleibt *unverändert*.
```


Eine *Variable* kann immer nur einen **Wert** bzw. auf einen bestimmten Speicherbereich *zeigen*.
Weisen wir einer *Variablen* erneut einen **Wert** zu, wird dieser **Wert** in den Speicher an eine freie **Adresse** geschrieben und die **Adresse** der Variablen auf jene neue **Adresse** gesetzt.

```{code-cell} ipython3
half = 1/2
print(f'value of half = {half}')
print(f'id of half = {id(half)}')

x = 25
print(f'value of x = {x}')
print(f'id of x = {id(x)}')

x = 24
print(f'value of x = {x}')
print(f'id of x = {id(x)}')
```

````{admonition} Adressänderung
:name: theorem-change-of-variable
:class: theorem

Veränderungen der einen *Variablen* haben keinen Effekt auf die **Adresse** bzw. *Identität* ``id`` anderer *Variablen*.
````


```{code-cell} ipython3
print(f'value of half = {half}')
print(f'id of half = {id(half)}')
```

Verändern wir *Variablen* nicht, so behalten sie ihre **Adresse** über das gesamte Notebook hinweg.

## Zuweisung einer neuen Adresse

Weisen wir einer Variablen ``x`` eine andere Variable ``y`` zu, so ändern wir die **Adresse** von ``x`` auf jene von ``y``. Das heißt, nach der *Zuweisung* zeigen beide Variablen auf den gleichen Speicherbereich und damit auf den gleichen **Wert**.

```{code-cell} ipython3
x = 2131313
y = 10
z = 2131313

print(f'value of x = {x}')
print(f'id of x = {id(x)}')

print(f'value of y = {y}')
print(f'id of y = {id(y)}')

print(f'value of z = {z}')
print(f'id of z = {id(z)}')
```


```{code-cell} python3
y = x

print(f'value of x = {x}')
print(f'id of x = {id(x)}')

print(f'value of y = {y}')
print(f'id of y = {id(y)}')

print(f'value of z = {z}')
print(f'id of z = {id(z)}')
```
