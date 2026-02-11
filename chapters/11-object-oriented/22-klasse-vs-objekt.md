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

(sec-class-and-object)=
# Klasse vs. Objekt (S)

Eine Klasse ist in Python – wie `float`, `int` – ein Datentyp.

```{figure} ../../figs/11-object-oriented/datatypes-hierachy-class.png
---
width: 500px
name: fig-datatypes-hierarchy-class
---
Übersicht: Klassen als Datentyp in Python.
```

## Klassendefinition

Eine *Klasse* ist die Blaupause ihrer *Objekte*.

```{admonition} Klassen
::class: definition
::name: def-class
Eine Klasse ist ein *zusammengesetzter Datentyp*, der *Methoden* definiert, die allesamt auf Werte des eigenen Typs angewendet werden können.
Eine *Klasse* definiert eine Blaupause für ein Bündel aus **Daten** und **Funktionen**, welche wir *Methoden* nennen.
```

Und ein *Objekt* ist eine konkrete *Instanz* einer *Klasse*, d.h. eine Variable eines *zusammengesetzten Datentyps* belegt mit bestimmten Werten und ausgestattet mit Methoden der Klasse.

```{admonition} Objekte in Python
::class: attention
::name: attention-objects-in-python
In `Python` ist alles (auch Werte von atomaren Datentypen) ein Objekt.
```

Es kann viele *Objekte* einer *Klasse* geben.
Jedes *Objekt* liegt als *Datenbündel* im Speicher.
Jedes Objekt einer bestimmten Klasse beinhaltet andere Werte, doch sind die Methoden aller Objekte einer Klasse [identisch](def-identity).

Eine *Klasse* ist eine Definition eines [zusammengesetzten Datentyps](sec-datastructures) angereichert mit *Methoden*, die auf dem Datentyp ausgeführt werden sollen.
Sie ist ein Codeblock der mit dem `class`-Ausdruck beginnt:

```python
class ClassName(Superclass):
    def __init__(self, arguments):
        # define or assign object attributes

    def other_method(self, arguments):
        # body of the method
```

Ähnlich wie eine Funktion, müssen wir eine Klasse zuerst definieren, bevor wir sie nutzen können.
Doch anders als Funktionen, schreibt man Klassennamen (hier `ClassName`) in [CamelCase/CamelCaps](https://en.wikipedia.org/wiki/Camel_case).

`Superclass` ist optional und ist die Klasse von der `ClassName` *erbt*.
Was das bedeutet, werden wir im Abschnitt [Vererbung](sec-inheritance) besprechen.

Methoden der Form `__method_name__()` sind spezielle `Python`-Methoden, die eine vordefinierte Bedeutung besitzen.
Die voran- und nachgestellten doppelten Unterstriche deuten an, dass diese Methoden für spezielle Zwecke reserviert sind.

`__init__()` wird ausgeführt, sobald ein Objekt der Klasse instanziiert / erzeugt wurde.
Genau genommen ist `__init__()` nicht der [Konstruktor](def-constructor), sondern wird direkt nach dem Konstruktor aufgerufen.

In `Python` definieren wir den Konstruktor nicht explizit.
`__init__()` füllt das Objekt mit seinen Daten, bevor das Objekt benutzt wird.

```{admonition} Konstruktor
::name: def-constructor
::class: definition
Als *Konstruktor* bezeichnen wir eine spezielle Methode einer Klasse, die beim Erzeugen des Objekts der Klasse aufgerufen wird.
Die Methode erzeugt das Objekt, d.h., diese Methode reserviert Speicher und legt es das Objekt in den Arbeitsspeicher, an die entsprechende Speicheradresse.
```

Die Methode `other_method` ist eine Funktion des Objekts der Klasse `ClassName`.

Im nächsten Abschnitt schauen wir uns an, warum Methoden in Python typischerweise den Parameter `self` haben – und wie Methodenaufrufe (auch innerhalb einer Klasse) funktionieren.

