(sec-for)=
# Die ``for``-Schleife (A)

Die ``for``-Schleife verwenden wir immer dann, wenn wir (zur Laufzeit) vor dem Eintritt in die Wiederholung wissen, wie viele Wiederholungen wir **maximal** benötigen.
Dabei wollen wir entweder

1. für eine bestimmte Anzahl $n \in \mathbb{N}$, oder
2. für jedes Element einer *Datenstruktur* (Liste, Tupel, usw.)

einen Befehlsblock ausführen.

Im zweiten Fall spricht man auch von der sog. *Foreach-Schleife*.
Durch den Zahlenbereich ``range()`` reduziert ``Python`` den ersten Fall auf den zweiten.

## Die klassische ``for``-Schleife (Fall 1)

```python
n = ...
for i in range(n):
    # Codeblock
```

Der Name der *Zählervariable* (hier ``i``) kann frei gewählt werden, allerdings verwendet man für Fall 1 gewöhnlich: ``i``, ``j`` oder ``k``.

```{code-cell} python3
for i in range(10):
    print(i**2)
```

Will man andeutet, dass die *Zählervariable* nicht benötigt wird, so verwendet man den Unterstrich ``_`` als ihren Namen.

```{code-cell} python3
for _ in range(10):
    print('42 ist die Antwort!')
```

## Die Foreach-Schleife (Fall 2)

```python
sequenz = ... # some Sequenz of Elements
for element in sequenz:
    # Codeblock
```

Der Name mit dem wir die Elemente der Sequenz ansprechen (hier ``element``) kann frei gewählt werden und sollte beschreiben über welche Elemente wir *iterieren*.

```{code-cell} python3
names = ['Sarah', 'Sebastian', 'Babar', 'Simon', 'Martin']

for name in names:
    print(name)
```

``range()`` ist, genau wie eine Liste und ein Tupel, auch eine *Sequenz*.
Eine ``for``-Schleife läuft über die Einträge einer *Sequenz* oder anderer *iterierbarer* Strukturen.

Es kann durchaus sein, dass wir die ``for``-Schleife auch dann verwenden, wenn nicht genau klar ist wie viele Wiederholungen wir benötigen.
Ist uns bekannt wie viele Wiederholungen wir **maximal** benötigen ist dies kein Problem.

Nehmen wir den Test ob eine Zahl $n$ eine Primzahl ist.
Ein einfacher Algorithmus für den Test, testet für jede Zahl $m \in \{2, 3, \ldots, n-1\}$ ob $m$ die Zahl $n$ teilt.
Wenn dies der Fall ist, ist $n$ keine Primzahl und wir können die Wiederholung stoppen.
Wir wissen demnach, dass wir maximal $n-m-3$ Wiederholungen benötigen.
Es könnten jedoch auch weniger sein:

```{code-cell} python3
def is_prime(n):
    prime = True
    for i in range(2, n):
        if n % i == 0:
            prime = False
            break
    return prime

print(is_prime(2))
#print(is_prime(13))
#print(is_prime(25))
#print(is_prime(83))
```

Um die ``for``-Schleife frühzeitig zu beenden verwenden wir ``break``.
Mit ``break`` springen wir aus der **innersten** Schleife heraus.
Wir könnten stattdessen auch ``return`` verwenden, um aus der gesamten Funktion herauszuspringen:

```{code-cell} python3
def is_prime(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print(is_prime(2))
#print(is_prime(13))
#print(is_prime(25))
#print(is_prime(83))
```

Eine weitere Steuermöglichkeit bietet ``continue``.
Mit ``continue`` springen wir nicht aus der Schleife heraus sondern springen zurück zum Schleifenkopf.
Der Code nach ``continue`` wird übersprungen:

```{code-cell} python3
def double_even_numbers(numbers):
    result = []
    for number in numbers:
        if number % 2 == 1:
            continue
            
        print(number)
        result.append(number*2)
    return result
numbers = list(range(10))
double_even_numbers(numbers)
```

Allerdings braucht man ``continue`` so gut wie nie und wenn es verwendet wird handelt es sich oftmals um schlecht leserlichen Code.

```{code-cell} python3
def double_even_numbers(numbers):
    result = []
    for number in numbers:
        if number % 2 == 0:    
            print(number)
            result.append(number*2)
    return result
numbers = list(range(10))
double_even_numbers(numbers)
```

```{admonition} Kontrollmechanismen der for-Schleife
:class: remark
:name: remark-control-structures-for
Gehen Sie sparsam mit ``break`` und ``continue`` um, oftmals brauchen Sie es nicht!
```

## Die ``while``-Schleife

Die ``while``-Schleife verwenden wir immer dann, wenn wir (zur Laufzeit) **nicht** wissen wie viele Wiederholungen wir maximal benötigen.
Die Wiederholung endet sobald eine bestimmte Bedingung, d.h. ein *logischer Ausdruck* ``P`` zu ``False`` ausgewertet wird.

```python
while P:
    # Codeblock1
else: # (optional)
    # Codeblock2
```

``Codeblock2`` wird einmal ausgeführt sobald ``P`` zu ``False`` ausgewertet wird und die ``while``-Schleife verlassen wird, d.h. als letzter Schritt.

```{admonition} Endlosschleifen
:class: attention
:name: attention-endless-loop
Wird ``P`` niemals ``False``, so endet die Wiederholung niemals und wir haben eine sog. *Endlosschleife*!
```

```{code-cell} python3
i = 0
while i < 10:
    i += 1
    print(i)
else:
    print('end of the while-loop')
```

```{admonition} Mächtigkeit der While-Schleife
:class: theorem
:name: theorem-while-vs-for
Jede ``for``-Schleife lässt sich in eine ``while``-Schleife transformieren!
```

```{code-cell} python3
names = ['Sarah', 'Sebastian', 'Babar', 'Simon', 'Martin']

for name in names:
    print(name)

print()

i = 0
while i < len(names):
    print(names[i])
    i += 1
```

``while``-Schleifen sind mächtiger aber auch gefährlicher bzw. oftmals schwerer zu lesen und zu verstehen als ``for``-Schleifen.

```{admonition} Verwendungskriterium
:class: remark
:name: remark-while-vs-for
Verwenden Sie die ``while``-Schleife nur wenn die ``for``-Schleife ungeeignet ist.
```

``break`` und ``continue`` funktionieren für die ``while``-Schleife genauso wie für die ``for``-Schleife.

```{admonition} Verwendungskriterium While-Schleife
:class: remark
:name: remark-while-usage
Gehen Sie sparsam mit ``break`` und ``continue`` um, oftmals brauchen Sie es nicht!
```

Folgender Code zeigt eine unnötige Verwendung von ``continue``.

```{code-cell} python3
# bad code!!!
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue
    print(i)
```

Stattdessen können wir die ``if``-Bedingung anpassen.

```{code-cell} python3
# better!
i = 0
while i < 10:
    i += 1
    if i % 2 == 1:
        print(i)
```

Oder aber Sie erhöhen die Zählervariable um zwei anstatt um eins.

```{code-cell} python3
# even better!
i = 1
while i < 10:      
    print(i)
    i += 2
```

Am einfachsten zu lesen bleibt jedoch die ``for``-Schleife.

```{code-cell} python3
# even better!
for i in range(1,10,2):
  print(i)
```

```{admonition} Verhindern von Endlosschleifen
:class: remark
:name: remark-avoid-endless-loop
Prüfen Sie immer ob Ihre Bedingung ``P`` durch den Schleifenrumpf garantiert irgendwann ``False`` ergibt!
```
