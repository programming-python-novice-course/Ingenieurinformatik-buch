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

(sec-inheritance)=
# Vererbung (S)

Vererbung ist eine Möglichkeit Funktionalität und Attribute einer Eltern-Klasse in eine Kind-Klasse zu übernehmen -- zu *vererben*.
Wir sagen, die Kind-Klasse *erbt* von der *Eltern-Klasse*.
Dabei geht es um Ähnlichkeiten.

Zum Beispiel könnte es Sinn machen eine Eltern-Klasse ``Person`` zu schreiben und unsere Kind-Klasse ``Student`` von dieser *erben* zu lassen.
Ein ``Student`` ist eine *spezielle* ``Person``.
Wir könnten eine weitere *spezielle* ``Person``, beispielsweise den ``Lecturer`` definieren.

Unsere Eltern-Klasse oder auch Basis-Klasse ``Person`` ist eine **Abstraktion** von ``Student`` und ``Lecturer``:

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
```

Die beiden Kind-Klassen *erben* von ``Person`` und sind weniger abstrakt bzw. konkretere Dinge oder Subjekte:

```{code-cell} python3
class Student(Person):
    def __init__(self, sid, name, age):
        super().__init__(name, age)
        self.sid = sid
        self.type = 'learning'

    def __str__(self):
        return f'{super().__str__()}, sid: {self.sid}'

    def report(self, score):
        super().report()
        print(f'My id is: {self.sid}')
        print(f'My score is: {score}')
        print(f'I am a student.')

class Lecturer(Person):
    def __init__(self, name, age, title):
        super().__init__(name, age)
        self.title = title

    def __str__(self):
        return f'{self.title} {self.name}'
```

``Student`` und ``Lecturer`` **erben** von ``Person``, d.h. beide erhalten die *Attribute* ``name`` und ``age`` sowie alle Methoden, die in ``Person`` definiert wurden.
Beide Kind-Klassen werden um die Attribute ``name`` und ``age`` **erweitert**.
Diese Attribute können in den Kind-Klassen durch

```python
self.name
self.age
```

angesprochen werden, was wir in ``__str__(self)`` von ``Lecturer`` demonstrieren.

```{admonition} Vererbte Objektattribute
:class: remark
:name: remark-inherited-attributes
Attribute eines Objekts egal ob *vererbt* oder nicht werden **immer** durch ``self.attributename`` und **niemals** über ``super().attributename`` angesprochen.
```

``Student`` **überschreibt** die Methode ``report`` der Klasse ``Person``, wohingegen ``Lecturer`` diese unberührt lässt.
Damit wird ``Lecturer`` um die Methode ``report`` der Klasse ``Person`` **erweitert**.

Um zwischen diesen beiden gleichnamigen Methoden ``report`` der Klasse ``Person`` und ``Student`` zu unterscheiden, verwenden wir einmal ``self`` und einmal ``super()``.
Mit ``super()`` greifen wir auf die Methoden der Eltern-Klasse zu.
Anstelle von ``super()`` können wir die Eltern-Klasse auch explizit angeben, müssen dann jedoch das ``self`` übergeben.
Aus

```python
...
super().__init__(name, age)
...
```

wird 

```python
...
Person.__init__(self, name, age)
...
```

Lassen Sie uns ein Objekt von jeder Klasse erzeugen und die Methoden testen:

```{code-cell} python3
person = Person('Bene', 25)
print(person)
person.report()
```

```{code-cell} python3
student = Student('3131', 'Anna', 22)
print(student)
student.report(413)
```

```{code-cell} python3
lecturer = Lecturer('Huber', 45, 'Prof.')
print(lecturer)
lecturer.report()
```

``Lecturer`` definiert keine Methode ``report``, doch da ``Person`` eine solche Methode enthält mit diesem Namen definiert, existiert diese auch in ``Lecturer``.
Der folgende Code hätte die gleiche Wirkung:

```{code-cell} python3
class Lecturer(Person):
    def __init__(self, name, age, title):
        super().__init__(name, age)
        self.title = title

    def __str__(self):
        return f'{super().__str__()}, title: {self.title}'

    def report(self, score):
        super().report()
```

Es wird demnach die ``report`` Methode von ``Person`` aufgerufen!
Alles in allem sparen wir Codezeilen bzw. doppelten Code.
Es ist, zum Beispiel, möglich den Code aus ``Person.__init__()`` zu kopieren und die gesamte Initialisierung zu überschreiben:

```python
class Lecturer(Person):
    def __init__(self, name, age, title):
        self.name = name
        self.age = age
        self.sid = sid
        self.title = title

    ...
```

Doch wenn wir die Initialisierung einer Person ``Person.__init__()`` ändern und sich diese Änderung auch auf alle Kinder auswirken soll, so müssten wir ``Lecturer.__init__()`` entsprechend anpassen.

```{admonition} Vererbung aber wann?
:class: attention
:name: attention-when-inheritance
Gehen Sie besser sparsam mit der Vererbung um. 
Ruft die ``__init__``-Methode nicht ihre Eltern-``__init__`` auf, so ist die Vererbung an dieser Stelle wahrscheinlich nicht die richtige Wahl der Modellierung.
```
