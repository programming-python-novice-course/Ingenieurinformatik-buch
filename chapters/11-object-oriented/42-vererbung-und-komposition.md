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

(sec-composition)=
# Vererbung und Komposition (S)

Vererbung ist ein mächtiges Werkzeug, doch sollten Sie damit bedacht und sparsam umgehen.
Tiefe Vererbungshierarchien tendieren dazu unverständlich zu werden.
Die Mehrfachvererbung, welche wir in diesem Kurs nicht besprechen werden, ist in ``Python`` möglich, doch in den allermeisten Fällen nicht sinnvoll.

```{admonition} Vererbung aber wann?
:class: remark
:name: remark-when-inheritance
Ob eine Vererbung sinnvoll ist entscheidet sich durch die Datenstrukturen die Sie bauen wollen und nicht unbedingt durch die Realgegenstände, die diese Strukturen modellieren.
```

So könnte man schnell zu dem Schluss kommen, dass ein Quadrat ein spezielles Rechteck ist und dass es somit eine gute Idee ist Quadrat von Rechteck erben zu lassen.
Doch besitzt ein Quadrat lediglich eine Position und eine Breite wohingegen ein Rechteck noch eine zusätzliche Höhe besitzt.
Vererben wir Rechteck an Quadrat erhält es ein überflüssiges Attribut.
Das ist erst einmal nicht tragisch, wenn wir dem Rechteck jedoch eine Methode verpassen mit dem es seine Höhe verändern kann, geraten wir in Probleme.
Denn damit kann ein Rechteck etwas, was ein Quadrat nicht kann -- die Höhe nicht aber die Breite verändern.
Die Datenstruktur Rechteck ist nicht länger einer Abstraktion von Quadrat.

Oftmals ist es besser die *Komposition* der *Vererbung* vorzuziehen.
*Komposition* bedeutet, dass wir eine Klasse definieren, die als Attribute weitere komplexere Klassen beinhaltet.
So könnten wir uns als Klasse ein Auto vorstellen, welches aus den Attributen Rad, Motor, usw. besteht. 

```python
class Car():
    def __init__(self, wheel, engine):
        self.wheel = wheel
        self.engine = engine
        ...

    ...
```

Rad und Motor könnten Klassen sein, die mit Funktionalität ausgestattet sind.
Diese Funktionalität können wir dann in der Klasse ``Car`` nutzten.
So gelangt Funktionalität nicht über Vererbung sondern durch Komposition in die Klasse und somit in seine Objekte.
