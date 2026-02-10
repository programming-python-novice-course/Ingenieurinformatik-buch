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

(sec-oop)=
# Datenstrukturen vs. Klassen (V)

Im *prozeduralen Programmierparadigma* schreiben wir Funktionen, die bestimmte Daten verarbeiten.
Jede Funktion steht für sich 'separat' neben den Daten und erhält (sofern sie keine globalen Variablen verwendet) alle Daten als Argumente.

Zum Beispiel können wir als Daten ein Rechteck als Wörterbuch definieren:

```{code-cell} python3
rect1 = dict(x=10, y=10, width=100, height=20)
rect2 = dict(x=-10, y=-10, width=100, height=30)
```

Eine Funktion um das Rechteck zu verschieben sieht wie folgt aus:

```{code-cell} python3
def translate(rect, delta):
  return dict(x=rect['x']+delta[0], y=rect['y']+delta[1], width=rect['width'], height=rect['height'])

print(translate(rect1, (10,-5)))
print(rect1)
```
Da wir in der *prozeduralen Programmierung* bevorzugt [reine Funktionen](sec-purity) verwenden, legt ``translate`` eine Kopie an und liefert diese verschobene Kopie zurück.

In der *objektorientierte Programmierung* bündeln wir **Daten** und deren **Operanden**.
Das heißt, Funktionen welche wir auf die Daten anwenden wollen und die Daten selbst werden zusammen in ein sog. *Objekt* gepackt.

- *Objekte* sind Daten angereichert mit Funktionen.
- Funktionen werden als *Methoden des Objekts* bezeichnet.
- Objekte sind zugleich Werte bzw. Instanzen von einem bestimmten *benutzerdefinierten zusammengesetzten Datentyp*, die wir als *Klasse* bezeichnen.

Lassen Sie uns zuerst einen *zusammengesetzten Datentyp* ``Rectangle`` erzeugen, welcher zugleich die *Methoden* ``translate`` enthält.

```{code-cell} python3
class Rectangle():
  def __init__(self, x, y, width, height):
    self.x = x
    self.y = y
    self.width = width
    self.height = height

  def __str__(self):
    return f'x={self.x}, y={self.y}, width={self.width}, height={self.height}'

  def translate(self, point):
    self.x += point[0]
    self.y += point[1]
```

In dieser Version verändert ``translate(point)`` das *Objekt* anstatt eine Kopie zurückzuliefern!

```{code-cell} python3
rect1 = Rectangle(x=10, y=10, width=100, height=20)
rect2 = Rectangle(-10, -10, 100, 30)

print(rect1.translate((10,-5)))
print(rect1)
```

Die Ausgabe der vorletzten Zeile zeigt, dass ``translate`` keinen Rückgabewert hat sondern das *Objekt* ``rect1`` verändert.

Die Ausgabe des Objekts ist jene die wir in der Methode ``__str__()`` definiert haben.

Die Klasse *erbt* die ``__str__()`` Methode von der Klasse ``object`` und diese wird von der Funktion ``print()`` genutzt.

Wir *überschreiben* die Standarddefinition von ``__str__()`` um eine schönere Ausgabe zu erzielen.

Die ``__init__()`` Methode initialisiert das Objekt mit seinen Daten.
Diese Methode wird aufgerufen sobald wir das Objekt durch ``Rectangle(x=10, y=10, width=100, height=20)`` erzeugt haben.

```{admonition} Objektorientierte Programmierung (OOP)
:class: definition
:name: def-oop
Die *objektorientierte Programmierung* ist ein Programmierparadigma, welches auf *Objekten* aufgebaut ist.
Diese *Objekte* beinhalten und kapseln *Daten* und deren dazugehörige *Methoden*.
```