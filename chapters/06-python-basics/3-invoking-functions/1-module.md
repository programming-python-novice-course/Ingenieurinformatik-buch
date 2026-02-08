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

# Module (A)

Es gibt nur wenige vordefinierte Funktionen, die keine Argumente besitzen.
Ein Beispiel hierfür ist die Funktion ``random()`` des *Moduls* ``random``.

```{admonition} Module
:name: def-module
:class: python

Ein ``Python``-Modul ist eine Ansammlung von Funktionalität.
Es ist eine Zusammenstellung von Funktionen, welche zusammengehören.
```

Im Modul ``random`` befinden sich, zum Beispiel, viele Funktionen die Operatoren aus der Wahrscheinlichkeitstheorie realisieren.

Um ein Modul nutzten zu können muss es, d.h. dessen Quellcode, auf Ihrem System installiert sein.
Manche Module, wie beispielsweise ``random``, gehören zur Standardbibliothek von ``Python`` und werden mit ``Python`` selbst installiert.
Ist das Modul installiert, müssen wir es in unseren Code *importieren*.
Wir machen es unserem Code bekannt, sodass wir es auch nutzten können.
Dies geschieht mit dem *Schlüsselwort* ``import``.

```{code-cell} python3
import random
random.random()
```

Mit 

```python
import random
```

machen wir das Modul ``random`` unter dem Namen ``random`` bekannt.
In der zweiten Zeile des Codes rufen wir die Funktion ``random`` des Moduls ``random`` auf.
Diese kann ohne Argumente aufgerufen werden.

Wir können dem Modul auch einen anderen Namen verpassen.
Mit

```python
import random as rnd
```

machen wir das Modul ``random`` unter dem Namen ``rnd`` bekannt.

```{code-cell} python3
import random as rnd
rnd.random()
```

Was macht diese Funktion?
Wenn Sie die obige Zelle mehrfach ausführen werden Sie feststellen, dass sie uns eine zufällige Fließkommazahl zwischen 0 und 1 zurückliefert.

Funktionen, Module und auch Funktionen von Modulen enthalten oft eine Dokumentation in Form von Kommentaren.
Wir können uns deshalb Informationen zu dem **WAS** (und manchmal auch zu dem **WIE**) einer Funktion holen.
Hierzu schreiben wir den Funktionsnamen ohne die runden Klammern und fügen ein ``?`` an.
Alternativ können Sie auch die Hilfefunktion ``help`` verwenden: ``help(random.random)``.

```{code-cell} python3
import random
help(random.random)
```

Die Ausgabe lautet:

```
Help on built-in function random:

random() method of random.Random instance
    random() -> x in the interval [0, 1).
```

``random() -> x`` bedeutet, dass ``random()`` den Wert ``x`` zurückgibt, wobei ``x`` im halb offenen Intervall $[0;1)$ liegt.
In anderen Worten: Die Funktion ``random()`` liefert einen Wert zwischen 0 und 1 zurück, wobei die 1 ausgeschlossen ist.

```{exercise} Hilfe
:label: help-exercise
Nutzten Sie die eingebaute Hilfe und betrachten Sie die Ausgabe von ``help(max)`` bzw. ``max?``.
Beschreiben Sie die möglichen Argumente der Funktion ``max`` und das **WAS** jener Funktion.
Sie müssen nicht jedes Wort verstehen aber ziehen Sie ihre Schlüsse.
```

```{solution} help-exercise
:label: help-solution
:class: dropdown

Neben der optionalen Argumente, erwartet ``max`` entweder ein iterierbares Argument oder aber mindestens zwei Argumente.
Im ersten Fall gibt ``max`` das größte Element des iterierbaren Arguments zurück.
D.h., ein iterierbares Argument ist wohl so etwas wie eine Sequenz, Liste, Menge an Elementen.

```
