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

# Veränderung (S)

Wie der Name bereits betont, sind *Variablen* **variabel** und können somit verändert werden.
Wir müssen jedoch zwischen zwei Veränderungen einer Variablen ``x`` unterscheiden:

1. der Veränderung ihrer Wertes ``x``
2. der Veränderung ihrer Speicheradresse ``id(x)`` (die auf den Wert zeigt)

```{admonition} Veränderlich und Un­ver­än­der­lich­keit
:name: def-mutable
:class: definition

Wir nennen eine Variable, *veränderlich* (engl. *mutable*) wenn wir deren Wert verändern können indem wir den Speicherbereich der Variable verändern können.
Ein Variable ist dagegen *unveränderlich* (engl. *immutable*) wenn wir deren Speicherbereich nicht verändern können.

Ist eine Variable *unveränderlich*, so wird deren Veränderung durch eine Kopie (einen neuen Speicherbereich) realisiert.
Das Ursprungsobjekt bleibt *unverändert*.
```


Eine *Variable* kann immer nur einen **Wert** bzw. auf einen bestimmten Speicherbereich *zeigen*.
Weisen wir einer *Variablen* erneut einen **Wert** zu, wird dieser **Wert** in den Speicher an eine freie **Adresse** geschrieben und die **Adresse** der Variablen auf jene neue **Adresse** gesetzt.

```{code-cell} ipython3
half = 1/2
print(f'value of half = {half}')
print(f'id of half = {id(half)}')

x = 25
print(f'value of x = {x}')
print(f'id of x = {id(x)}')

x = 24
print(f'value of x = {x}')
print(f'id of x = {id(x)}')
```

````{admonition} Adressänderung
:name: theorem-change-of-variable
:class: theorem

Veränderungen der einen *Variablen* haben keinen Effekt auf die **Adresse** bzw. *Identität* ``id`` anderer *Variablen*.
````


```{code-cell} ipython3
print(f'value of half = {half}')
print(f'id of half = {id(half)}')
```

Verändern wir *Variablen* nicht, so behalten sie ihre **Adresse** über das gesamte Notebook hinweg.

## Zuweisung einer neuen Adresse

Weisen wir einer Variablen ``x`` eine andere Variable ``y`` zu, so ändern wir die **Adresse** von ``x`` auf jene von ``y``. Das heißt, nach der *Zuweisung* zeigen beide Variablen auf den gleichen Speicherbereich und damit auf den gleichen **Wert**.

```{code-cell} ipython3
x = 2131313
y = 10
z = 2131313

print(f'value of x = {x}')
print(f'id of x = {id(x)}')

print(f'value of y = {y}')
print(f'id of y = {id(y)}')

print(f'value of z = {z}')
print(f'id of z = {id(z)}')
```


```{code-cell} python3
y = x

print(f'value of x = {x}')
print(f'id of x = {id(x)}')

print(f'value of y = {y}')
print(f'id of y = {id(y)}')

print(f'value of z = {z}')
print(f'id of z = {id(z)}')
```

## Seiteneffekte

Wie bereits erwähnt: Verändern wir eine *Variable* so können wir dadurch nicht die **Adresse** / *Identität* ``id`` einer anderen Variablen ändern! Wie verhält es sich jedoch mit dem **Wert** einer *Variablen*?

Die Antwort ist etwas komplizierter und ist erst dann begreiflich wenn wir das Thema [Datentypen](sec-python-data-types) besprechen.
Dennoch versuchen wir unser Glück:
Eine Variable kann nicht nur einen einzelnen atomaren **Wert**, wie eine Zahl, enthalten, sondern auch einen **Wert** der sich aus anderen **Werten** [zusammensetzt](def-data-structures).
Zum Beispiel:

```{code-cell} ipython3
x = [1,2,3,4,5]
x
```

Der Variablen ``x`` weisen wir hierbei eine sog. [Liste](sec-list) ``list`` zu, also ein geordnetes, veränderliches Tupel an Zahlen.
In unserem Fall besteht die Liste, und somit ``x``, aus den Werten ``1, 2, 3, 4`` und ``5``.
Um auf einen bestimmten **Wert** der Liste zuzugreifen brauchen wir seinen Index. Zum Beispiel liefert uns der Index ``1`` den Wert ``2``:

```{code-cell} ipython3
x[1]
```

Wie sieht das nun im Speicher aus??? Welche Adresse hat ``x`` und wie sieht der Speicher an der Adresse von ``x`` aus? Der Aufruf

```{code-cell} ipython3
id(x)
```

Liefert uns eine ``id``, allerdings lieft uns der Aufruf

```{code-cell} ipython3
id(x[1])
```

ebenfalls eine (andere) ``id``.

```{code-cell} ipython3
id(x[2])
```

Eine Liste ``list`` mit $n$ Elementen besteht in ``Python`` aus $n$ Adressen. Jede dieser Adressen zeigt auf den Wert des Listenelements. Das heißt, eigentlich sieht unsere Liste ``x`` wie folgt aus:

```python
[id(x[0]), id(x[1]), id(x[2]), id(x[3]), id(x[4])]
```

Doch ``Python`` vereinfacht uns den Umgang mit Listen und verbirgt diese Tatsache geschickt.

Was aber passiert mit ``x`` wenn wir eines seiner Listenelemente verändern? Hier wird es spannend:

```{code-cell} ipython3
print(f'value of x = {x}')
print(f'id of x = {id(x)}')

print(f'value of x[1] = {x[1]}')
print(f'id of x[1] = {id(x[1])}')

print()

x[1] = -10
print(f'value of x = {x}')
print(f'id of x = {id(x)}')

print(f'value of x[1] = {x[1]}')
print(f'id of x[1] = {id(x[1])}')
```

Die Adresse von ``x`` ändert sich nicht!!! Es ändert sich nur die Adresse von ``x[1]``!!! Mit anderen Worten durch die *Zuweisung* von ``x[1] = -10`` wird keine neue Liste im Speicher angelegt, sondern nur ein neues Element!
Dieses Element wird an eine freie Speicherstelle platziert und die entsprechende Adresse kommt in die Liste.

Warum? 
Listen können groß werden und würden wir bei jeder Änderung eines Listenelements die gesamte Liste im Speicher kopieren, wäre das, im Bezug auf die Laufzeit, zu teuer und verschwenderisch.

Dieses Verhalten hat jedoch Konsequenzen! 
Folgender Code führt zur Veränderung des Wertes der Variablen ``y`` von ``y == [[1, 2, 3], [1, 2, 3], [1,2,3]]`` nach ``y == [[-10, 2, 3], [-10, 2, 3], [1,2,3]]`` obwohl wir nicht direkt mit ``y`` interagieren.

```{code-cell} ipython3
x = [1, 2, 3]
y = [x, x, [1,2,3]]
print(y)

x[0] = -10
print(y)
```

Solche Veränderungen eines Wertes einer Variablen durch die Veränderung eines Werts einer anderen Variablen, nennen wir *Seiteneffekt*.

````{admonition} Seiteneffekt
:name: remark-change-of-variable-value
:class: remark

Handelt es sich beim Wert der Variablen um **keinen** [atomaren Datentyp](sec-atom-data-type), so kann die Veränderung des Werts dazu führen, dass sich der Wert einer anderen Variable verändert.
````
