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
# Komposition (V)

Vererbung ist ein mächtiges Werkzeug, doch sollten Sie damit bedacht und sparsam umgehen.
Tiefe Vererbungshierarchien tendieren dazu unverständlich zu werden.
Die Mehrfachvererbung, welche wir in diesem Kurs nicht besprechen werden, ist in ``Python`` möglich, doch in den allermeisten Fällen nicht sinnvoll.

```{admonition} Vererbung aber wann?
:class: remark
:name: remark-when-inheritance
Ob eine Vererbung sinnvoll ist entscheidet sich durch die Datenstrukturen die Sie bauen wollen und nicht unbedingt durch die Realgegenstände, die diese Strukturen modellieren.
```

Man könnte schnell schließen: Ein Quadrat ist ein spezielles Rechteck → also könnte Quadrat von Rechteck erben.

In der Datenstruktur-Praxis gibt es dabei aber ein Problem:

- Ein Quadrat hat (in diesem Modell) **Position** und **Breite**.
- Ein Rechteck hat zusätzlich eine **Höhe**.
- Wenn Quadrat von Rechteck erbt, bekommt es ein **überflüssiges Attribut** (Höhe).
- Das ist zunächst nicht schlimm.\n  Problematisch wird es, sobald Rechteck eine Methode bekommt, die die Höhe verändern kann.\n- Dann kann ein Rechteck etwas, was ein Quadrat nicht kann: **Höhe ändern, ohne Breite zu ändern**.\n\nDamit ist die Datenstruktur Rechteck nicht länger eine Abstraktion von Quadrat.

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
