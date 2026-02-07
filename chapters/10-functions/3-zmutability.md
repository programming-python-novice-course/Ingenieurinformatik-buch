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

(sec-purity)=
# Seiteneffekte (S)

Im vorherigen Kapitel haben wir gelernt, wie Namensräume funktionieren und wie ``Python`` entscheidet, welche Variable verwendet wird, wenn derselbe Name in verschiedenen Namensräumen existiert. 

Ein wichtiger Aspekt, der eng mit Namensräumen zusammenhängt, sind **Seiteneffekte**: Wenn eine Funktion ein Objekt aus einem anderen Namensraum (z.B. dem globalen Namensraum) erhält und dieses Objekt verändert, kann dies Auswirkungen auf andere Teile des Programms haben, die dasselbe Objekt verwenden. Das Verständnis von Namensräumen hilft uns zu verstehen, warum Seiteneffekte auftreten können - nämlich dann, wenn mehrere Namen aus verschiedenen Namensräumen auf dasselbe Objekt im Speicher verweisen.

Wie wir bereits in Kapitel chapters/04-language-properties/4-seiteneffekte.md gelernt haben, können Funktionen den Zustand auch außerhalb ihres Gültigkeitsbereichs verändern. 

```{code-cell} python3
y = []
def sideeffect(x):
    x += [1,2,3]
    return x

print(y)
print(sideeffect(y))
print(y)
```

Die Liste ``y`` (die außerhalb der Funktion ``sideeffect`` existiert) wird durch die Funktion ``sideeffect`` erweitert. Es gibt also einen Seiteneffekt.

Eine Voraussetzung dafür, dass das Objekt ``y`` veränderbar ist, ist, dass der Datentyp veränderbar ist. 

```{admonition} Wichtig
:class: important

Datentypen, deren Objekte verändert werden können, werden als **mutable** (veränderlich) bezeichnet. Datentypen, deren Objekte **nicht** verändert werden können, werden als **immutable** (unveränderlich) bezeichnet.
```

**Übersicht der Datentypen, die Sie bereits kennengelernt haben:**

```{list-table} Mutable und Immutable Datentypen
:header-rows: 1
:name: tab-mutable-immutable

* - Kategorie
  - Datentyp
  - Mutable/Immutable
* - Das Nichts
  - ``None``
  - Immutable
* - Zahlen
  - ``int``
  - Immutable
* - Zahlen
  - ``bool``
  - Immutable
* - Zahlen
  - ``float``
  - Immutable
* - Sequenzen (unveränderlich)
  - ``str``
  - Immutable
* - Sequenzen (unveränderlich)
  - ``tuple``
  - Immutable
* - Sequenzen (veränderlich)
  - ``list``
  - Mutable
* - Mengen
  - ``set``
  - Mutable
* - Abbildungen
  - ``dict``
  - Mutable
```

Einige weitere Datentypen wie Klassen lernen Sie später noch kennen. Wichtig an dieser Stelle ist zu verstehen, dass eine Funktion bestimmte Datentypen ändern kann und andere nicht.

Wenn Sie eine Funktion mit einem mutable Objekt aufrufen (z.B. einer Liste), kann die Funktion das Objekt direkt verändern. Bei immutable Objekten (z.B. einem String oder einer Zahl) ist das nicht möglich.

```{admonition} Wichtig
:class: warning

Sie müssen wissen, was mutable und immutable ist, sonst laufen Sie in die Gefahr, dass sich Dinge an Stellen ändern, wo Sie es nicht erwarten. Das sind vermeidbare Fehler, die durch das Verständnis dieser grundlegenden Konzepte verhindert werden können.
```
