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

# Methoden und `self` (S)

Es wird Ihnen aufgefallen sein, dass Methoden häufig als ersten Parameter `self` definieren.
Jede Klassenmethode muss diesen Extraparameter `self` besitzen.
Der Wert dieses ersten Parameters wird automatisch mit dem Objekt **selbst** initialisiert.
Durch dieses `self` können wir auf alle Attribute und Methoden des Objekts zugreifen (auch die privaten).

Greifen wir auf Attribute oder Methoden des Objekts zu, so müssen wir den Weg über den `self`-Parameter gehen.

## Beispiel: `Student`

Wir definieren eine neue Klasse `Student` mit den *Attributen* `sid` (id der Studierenden), `name`, `type` und `age`.
Wir definieren Methoden `say_name` und `report`, welche Informationen über den Studierenden ausgeben.
Alle Attribute bis auf `type` werden bei der Objekterzeugung übergeben.

```{code-cell} python3
class Student():
    def __init__(self, sid, name, age):
        self.sid = sid
        self.name = name
        self.age = age
        self.type = 'learning'

    def say_name(self):
        print(f'My name is {self.name}.')

    def report(self, score):
        self.say_name()
        print(f'My id is: {self.sid}')
        print(f'My age is: {self.age}')
        print(f'My score is: {score}')
```

Sie sehen wie wir über `self.attributename` auf die *Attribute* des Objekts zugreifen können.
Für Methoden gilt diese Regel ebenso: `report` ruft die Methode `say_name` durch `self.say_name()` auf.

Beachten Sie, dass wir das `self` **nicht** als Argument übergeben müssen.
Der Interpreter wandelt `self.say_name()` zu `say_name(self)` um.

In `report` übergeben wir ein weiteres Argument `score`, welches wir wie gewohnt durch seinen Namen ansprechen können.

## Objektdefinition

Ein *Objekt* ist eine Instanz einer Klasse.
Die *Klasse* ist der *Datentyp* und das Objekt ist ein *Wert* vom Typ der Klasse angereichert mit den Methoden, die in der Klasse definiert wurden.
Wir können viele verschiedene und auch gleiche *Objekte* einer *Klasse* erzeugen.
Die Klasse können wir als den Bauplan der Objekte verstehen.

```{admonition} Objekte
:class: definition
:name: def-objects
Ein *Objekt* ist eine konkrete Instanz einer Klasse.
```

Rufen wir Methoden eines Objekts auf, müssen wir das erste spezielle `self`-Argument nicht angeben.
Eine Methode `methodname` des Objekts `objectname` rufen wir durch

```python
objectname.methodname(arguments)
```

auf.

Ein solcher Aufruf wird auch als Nachricht, die wir an einen Empfänger schicken, verstanden.
Dabei ist die Nachricht gleich `methodname(arguments)` und der Empfänger ist das Objekt `objectname`.
Diese Analogie wird deutlich wenn wir uns an den Roboter `robo` erinnern.
Diesen haben wir mit der Nachricht `move()` gesagt, er solle sich bewegen.

Auch im folgenden Beispiel können wir Methodenaufrufe als Anweisungen oder Nachrichten, die an das Objekt gesendet werden, verstehen:

```{code-cell} python3
student1 = Student("001", "Susan", 24)
student2 = Student("002", "Mike", 23)

student1.say_name()
student2.say_name()
print(student1.type)
print(student1.age)
print()
student2.report(331)
```

Im obigen Beispiel erzeugen wir zwei Instanzen `student1`, `student2` der Klasse `Student`.
Die Daten der Objekte unterscheiden sich, doch deren Methoden sind identisch.
Rufen wir `report` auf, so wird intern (innerhalb des Objekts) die Methode `say_name` aufgerufen.

