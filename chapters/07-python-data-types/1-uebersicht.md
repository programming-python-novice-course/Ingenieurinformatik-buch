# Übersicht

Wie in Abschnitt [Repräsentation](sec-representation) beschrieben, befinden sich im Speicher des (digitalen) Computers ausschließlich [Bits](def-bit).
Sie können sich den Speicher als eine lange lange Liste von Bits vorstellen.
Diese Bits können nur einen von zwei Zuständen (0 und 1) annehmen.


```{figure} ../../figs/03-language-properties/python-tutorial/variables/ram.png
---
width: 400px
name: fig-ram-2
---
Der Arbeitsspeicher ist eine sehr lange Liste bestehend aus [Bits](def-bit).
Die Adresse ist im Wesentlichen die Nummer / der Index eines bestimmten Speicherplatzes.
```

Diese "Magie" geschieht durch die Wahl und Implementierung einer [Interpretation](sec-interpretation).
Unterschiedliche Interpretationen ermöglichen es, Bits und [Byte](def-byte) als Zahlen, Text, Bilder usw. zu verarbeiten.

Der *Datentyp* einer Variablen gibt an, wie die [Bits](def-bit) und [Bytes](def-byte) [interpretiert](sec-interpretation) werden.
Die Bits und Bytes des Speicherbereichs, auf welchen die Variable *zeigt*, machen den *Wert* der Variablen aus.
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
Solche Datentypen nennen wir [zusammengesetzt Datentypen](sec-datastructures)) wohingegen wir Datentypen, welche wir nicht zerlegen können als [atomare Datentypen](def-atomare-data-types) bezeichnen.

```{admonition} Hinweis
:class: note

Datentypen lassen sich nach drei Eigenschaften klassifizieren:

1. Zerteilbarkeit in atomare und zusammengesetzte Typen
2. Abstraktionsgrad in primitive und komplexe Typen
3. Herkunft in built-in und benutzerdefinierte Datentypen
```

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
width: 100%
name: fig-python-datatypes-hierarchy
---
Die Standard-Typ-Hierarchie von Python (Quelle: Wikimedia Commons, basierend auf „Python 3. The standard type hierarchy“, CC BY-SA 4.0, Urheber: Максим Пе).
```


