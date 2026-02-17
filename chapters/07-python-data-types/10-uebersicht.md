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

# Übersicht: Built-in Datentypen (A)

Im folgenden definieren und initialisieren wir Variablen mit unterschiedlichen Datentypen: 

+ [Ganze Zahl](sec-int) ``int``, 
+ [Fließkommazahl](sec-float) ``float``, 
+ [Zeichenkette](sec-string) ``str``, 
+ [Wahrheitswert](sec-bool) ``bool``, 
+ eine [Liste](sec-list) ``list``, welche ganze Zahlen ``int`` enthält und
+ ein [Tupel](sec-tuple) ``tuple``, welche Zeichenketten ``str`` enthält.

```{code-cell} python3
number = 111
floating_number = 1.3
characters = 'Hello'
boolean = True
mylist = [1,2,3,4]
mytuple = ('A', 'B', 'C')
```

Beim Datentyp ``list`` und ``tuple`` fällt auf, dass diese Werte eines anderen Datentyps enthalten, hier ``int`` und ``str``.
Solche Datentypen nennen wir [zusammengesetzte Datentypen](sec-datastructures) wohingegen wir Datentypen, welche wir nicht zerlegen können als [atomare Datentypen](def-atomare-data-types) bezeichnen.

Die von ``Python`` vorab definierten Datentypen nennt man *built-in Datentypen*. Ziel der Veranstaltung ist es dass sie die built-in Datentypen kennen, die in der Praxis besonders häufig verwendet werden.

Den Datentyp einer Variable oder eines Wertes erfragen Sie mit der Python-Funktion ``type``.

```{code-cell} python3
x = 5
text = 'Hello'
print(type(x))
print(type(text))
print(type(3.1))
```


```{figure} ../../figs/07-python-data-types/python-tutorial/datatypes/datatypes-hierachy.png
---
width: 500px
name: fig-python-datatypes-hierarchy
---
Die Standard-Typ-Hierarchie von Python (Quelle: Wikimedia Commons, basierend auf „Python 3. The standard type hierarchy“, CC BY-SA 4.0, Urheber: Maxim Ne).
```


```{admonition} Eigenschaften
:class: note

Datentypen lassen sich nach drei Eigenschaften klassifizieren:

1. Zerteilbarkeit in atomare und zusammengesetzte Typen
2. Abstraktionsgrad in primitive und komplexe Typen
3. Herkunft in built-in und benutzerdefinierte Datentypen

Mehr Informationen dazu im [Expertenwissen](sec-data-props).
```