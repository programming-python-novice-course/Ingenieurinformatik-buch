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

(sec-encapsulation)=
# Kapselung

*Kapselung* ist ein weiteres fundamentales, wenn nicht sogar DAS fundamentalste aller Konzept der OOP.
Dabei wird der gesamte, sich ändernden Zustand eines Programms in kleine Zuständigkeiten aka Objekte aufgeteilt.

Jedes Objekt kennt sein Innenleben und schützt dieses vor dem Zugriff von außen.
Nach außen bietet das Objekt eine öffentliche Schnittstelle.
Nur über diese ist es möglich das Innenleben des Objekts zu verändern.
Demnach verändert das Objekt sein Innenleben selbst indem es durch seine öffentlichen Methoden dazu aufgefordert wird.

Die Einschränkung des Zugriffs auf bestimmte *Methoden* und *Attribute* eines *Objekts* ist ein wesentlicher Aspekt und wird durch die *Klasse* eines *Objekts* definiert.
Die Idee dahinter ist es Komplexität vor dem Benutzer der Klasse zu verbergen und das 'Innenleben' eines Objekts vor ungewollter Veränderung zu schützten.
Der Benutzer muss lediglich wissen **WAS** eine Methode bewirkt, **WIE** dies erreicht wird bleibt verborgen und gehört zur Zuständigkeit des *Objekts*.

Angenommen wir konstruieren eine Klasse ``Circle`` mit den Attributen ``radius``, ``center`` und ``diameter``.
Wir fügen noch eine Methode ``dist`` und ``contains`` hinzu.
``dist`` berechnet die Distanz zwischen dem Kreis und einem Punkt.
Die Distanz ist negativ wenn sich der Punkt innerhalb des Kreises befindet.
``contains`` prüft ob sich ein Punkt innerhalb des Kreises befindet.

```{code-cell} python3
class Circle():
    def __init__(self, center, radius):
        self.center = center
        self.__radius = radius
        self.__diameter = 2*radius

    def __str__(self):
        return f'center: {self.center}, radius: {self.__radius}, diameter: {self.__diameter}'

    def contains(self, point):
        return self.dist(point) <= 0
        
    def dist(point):
        dx = self.center[0] - point[0]
        dy = self.center[1] - point[1]
        return (dx*dx + dy*dy)**0.5 - radius

    def set_radius(self, radius):
        self.__radius = radius
        self.__diameter = 2*radius

    def get_radius(self):
        return self.__radius

    def get_diameter(self):
        return self.__diameter
```

Zusätzlich bieten wir eine Methode ``set_radius`` an, welche den ``radius`` des Kreises ändert.
Da der Durchmesser ``diameter`` vom Radius abhängt müssen wir, wann immer wir den Radius anpassen, auch den Durchmesser anpassen.
Deshalb wollen wir dem Benutzer nicht erlauben, den Durchmesser selbst zu ändern.
Damit der Benutzer nicht mehr direkt auf die Attribute ``radius`` und ``diamant`` zugreifen kann, fügen wir vor deren Namen zwei Unterstriche ``__`` an.
Dadurch werden diese Attribute *privat*.

```{code-cell} python3
circle = Circle((0,0), 3)
print(circle)
```

Versuchen wir auf die geschützten Attribute zuzugreifen, erhalten wir einen Fehler:

```{code-cell} python3
:tags: [raises-exception]

circle.center = (6, 6)
print(circle)
print(circle.__radius)
```

Zwar können wir ``center`` verändern, da dies nicht geschützt ist, doch ``__radius`` lässt sich nicht von Außen verändern!
Wir bezeichnen dieses Attribut als *privates* Attribut der Klasse.

In der Klasse finden sich die Methoden ``get_radius`` und ``set_radius`` über die wir den Radius wiederum verändern und auf den Wert des Radius zugreifen können:

```{code-cell} python3
circle.set_radius(10)
print(circle)
print(circle.get_radius())
```

Doch dadurch dass wir eine Methode für die Veränderung verwenden, können wir sicherstellen, dass der Durchmesser ebenfalls korrekt abgeändert wird.

Durch die gleiche Schreibweise können wir auch *Methoden* in private Methoden umwandeln, sodass diese nur innerhalb der Klasse sichtbar und aufrufbar sind.
Dies kann sinnvoll für Hilfsmethoden sein, die als solches, getrennt vom Aufruf anderer Methoden, nicht aufgerufen werden sollten.

Das obige Beispiel ist etwas künstlich, denn eigentlich macht das Attribut ``diameter`` an dieser Stelle keinen rechten Sinn.
Eine bessere Variante bietet folgender Code:

```{code-cell} python3
class Circle():
    def __init__(self, center, radius):
        self.center = center
        self.__radius = radius

    def __str__(self):
        return f'center: {self.center}, radius: {self.get_radius()}, diameter: {self.get_diameter()}'

    def contains(self, point):
        return self.dist(point) <= 0
        
    def dist(point):
        dx = self.center[0] - point[0]
        dy = self.center[1] - point[1]
        return (dx*dx + dy*dy)**0.5 - radius

    def set_radius(self, radius):
        self.__radius = radius

    def get_radius(self):
        return self.__radius

    def get_diameter(self):
        return self.__radius*2
```
