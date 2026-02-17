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

# Klassenattribute (S)

`self.attributename` sind *Attribute* des *Objekts*.
Diese können für jedes Objekt einen anderen Wert besitzen.

*Klassenattribute* sind hingegen *Attribute* einer Klasse und da es nur eine *Klasse* eines bestimmten *Typs* gibt, teilen sich alle *Objekte* einer *Klasse* deren *Klassenattribute*.

Wir definieren *Klassenattribute* indem wir das `self` weglassen und diese außerhalb jedweder Methode niederschreiben.
Um ein Klassenattribut zu verwenden, müssen wir den Klassennamen voranstellen, d.h. `ClassName.attributename`.

Im folgenden Fall führen wir ein *Klassenattribut* `n_instances` ein, welches die Anzahl der erzeugten Objekte der Klasse `Student` beinhaltet.

```{code-cell} python3
class Student():
    n_instances = 0

    def __init__(self, sid, name, age):
        self.sid = sid
        self.name = name
        self.age = age
        self.type = 'learning'
        Student.n_instances += 1

    def say_name(self):
        print(f'My name is {self.name}.')

    def report(self, score):
        self.say_name()
        print(f'My id is: {self.sid}')
        print(f'My age is: {self.age}')
        print(f'My score is: {score}')

    def num_instances(self):
        print(f'We have {Student.n_instances}-instance in total')
```

Lassen Sie uns den Code testen:

```{code-cell} python3
student1 = Student("001", "Susan", 23)
student1.num_instances()
student2 = Student("002", "Mike", 25)
student1.num_instances()
student2.num_instances()
```

Wir erzeugen zwei Objekte, doch lediglich `sid`, `name` und `age` gehören zu einem bestimmten Objekt.
`student1.name` hat den Wert `"Susan"` und `student2.name` hat den Wert `"Mike"`.
Doch `n_instances` wird **objektübergreifend** geteilt.

Bei der Erzeugung der Klasse wird `n_instances` auf den Wert `0` gesetzt.
Immer wenn wir ein `Student`-Objekt erzeugen, erhöht sich das *Klassenattribut* `n_instances` um eins.

```{admonition} Klassenattribute
:class: attention
:name: attention-class-attributes
*Klassenattribute* sollten sparsam eingesetzt werden und sollten niemals dazu verwendet werden um das Verhalten eines Objekts zu beeinflussen!
Das *Verhalten* muss sich stets aus der Kombination von Objektattributen und Methoden ergeben.
```

