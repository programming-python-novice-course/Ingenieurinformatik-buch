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

(sec-polymorphism)=
# Polymorphie (V)

```{admonition} Polymorphie
:class: definition
:name: def-polymorph
*Polymorphie* ist ein Konzept, welches ermöglicht, dass eine Operation abhängig von ihrer Verwendung Werte/Objekte unterschiedlichen Datentyps verarbeiten kann.
```

Wir haben schon einige Beispiele gesehen in der Polymorphie zum Einsatz kam.
Der ``+``-Operator angewendet auf ganzen Zahlen und Zeichenketten wäre ein solches Beispiel:

```{code-cell} python3
print(3 + 6)
print('3' + '6')
```

Die Schnittstelle ist dabei der ``+``-Operator und die unterschiedlichen Objekte sind einmal vom Typ ``int`` und einmal vom Typ ``str``.

Aber auch unser Beispiel mit den Klassen ``Person``, ``Student``, ``Lecturer`` bietet Polymorphie.
Die gemeinsame Schnittstelle ist die Basisklasse ``Person``.
Ein ``Student`` und ``Lecturer`` sind auch jeweils eine ``Person`` und bieten uns alle Attribute und Methoden die auch eine ``Person`` bietet.
Deren konkrete Implementierung kann sich jedoch unterscheiden.

Damit die folgenden Code-Zellen in diesem Unterkapitel eigenständig ausführbar sind, wiederholen wir hier die minimal nötigen Klassendefinitionen.

```{code-cell} python3
class Person():
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def __str__(self):
        return f'name: {self.name}, age: {self.age}'

    def say_name(self):
        print(f'My name is {self.name}.')

    def report(self):
        self.say_name()
        print(f'My age is: {self.age}')

class Student(Person):
    def __init__(self, sid, name, age):
        super().__init__(name, age)
        self.sid = sid
        self.type = 'learning'

    def __str__(self):
        return f'{super().__str__()}, sid: {self.sid}'

class Lecturer(Person):
    def __init__(self, name, age, title):
        super().__init__(name, age)
        self.title = title

    def __str__(self):
        return f'{self.title} {self.name}'
```

Wir könnten nun eine Funktion schreiben, die eine ``Person`` erwartet.
Da diese Funktion mit ``Person`` als Typ umgehen kann, kann sie auch mit den Typen ``Lecturer`` und ``Student`` umgehen.

```{code-cell} python3
def printName(person):
    print(person.name)

student = Student('3131', 'Anna', 22)
lecturer = Lecturer('Huber', 45, 'Prof.')

printName(student)
printName(lecturer)
```

An dieser Stelle wissen wir nicht genau welchen Typ die Variable ``person`` hat.
Wir wissen allerdings, dass was auch immer der Typ ist, dessen Basisklasse ``Person`` ist und deshalb ein Attribut ``name`` vorhanden sein muss.

Wundert es uns nicht, dass die Funktion ``print`` jeden Wert von jedwedem Datentyp ausgeben kann?
Wie funktioniert das?
Die Antwort lautet: Polymorphie!
``print(ob)`` geht davon aus, dass das Objekt ``ob`` eine Methode ``__str__()`` besitzt und diese eine Zeichenkette zurückliefert.
Das ist der Grund weshalb auch unsere Objekte in schöner Art und Weise ausgegeben werden!
Wir haben diese Methode ebenfalls definiert.

Funktionen und Methoden, welche andere Objekte verarbeiten erwarten von diesen ein bestimmte Menge an Methoden und Attribute.
Diese Menge bezeichnen wir als Schnittstelle (engl. Interface).

Selbst unsere ``for``-Schleife

```python
for i in sequenz:
    # do something
```

erwartet von der Variablen ``sequenz``, dass es sich um eine ``Sequenz`` handelt.
Das heißt um ein *Objekt* das wir iterieren können.
Es ist der Schleife egal ob es eine Liste, ein Bereich, ein Tupel oder sonst etwas iterierbares ist.
Es muss lediglich die Schnittstelle ``Iterable`` erfüllen.

Es sei angemerkt, dass *Polymorphie* ein Konzept ist, was über die objektorientierte Programmierung hinausreicht.
Auch in der prozeduralen wie auch funktionalen Programmierung nutzten wir die *Polymorphie*.
