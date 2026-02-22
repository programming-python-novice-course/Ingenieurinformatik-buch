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

# Zerteilbarkeit 

> Ein Datentyp kann entweder atomar oder zusammengesetzt sein.
1. *Atomare Datentypen* sind Datentypen die sich auf einen einzelnen Wert beziehen und
2. *Zusammengesetzt Datentypen* sind Datentyps setzen sich zusammen..

Der Wert eines *atomaren Datentyps* lässt sich nicht sinnvoll weiter in seine Einzelteile zersplittern.

*Zusammengesetzte Datentypen* sind zum Beispiel: Zeichenketten ``str``, Listen ``list``, Tupel ``tuple``, Mengen ``set`` und Wörterbücher ``dict``.


(sec-atom-data-type)=
## Atomare Datentypen 

Eine wesentlich Eigenschaft von *atomaren Datentypen* ist die Unveränderbarkeit ihres des Werts.
Der **Wert** einer Variable eines *atomaren Datentyps* liegt **unverändert** im Speicher.

```{admonition} Atomare Datentypen
::name: def-atomare-data-types
::class: python

*Datentypen* welche sich auf einen einzelnen Wert beziehen, d.h., ganze Zahlen ``int``, Wahrheitswerte ``bool`` und Gleitkommazahlen ``float`` sind *atomare Datentypen*.
```

Wird der **Wert** durch keiner Variablen adressiert, wird er (vom [Garbage Collector](def-garbage-collector)) zwar gelöscht.
In anderen Worten, wird der Speicher von Ihrem laufenden Programm nicht mehr benötigt, kümmert sich der Garbage Collector, den von Ihnen belegten Speicher wieder freizugeben.
Der Speicher der durch einen Wert eines *atomaren Datentyp* belegt ist kann also durchaus verändert werden, allerdings nur dann wenn er nicht mehr gebraucht wird.

```{admonition} Unveränderliche atomare Datentypen
::class: theorem
::name: theorem-immutable-atom-data-types
Atomare Datentypen sind *unveränderlich*.
```

Wir haben dieses Phänomen bereits im Abschnitt [Variablen](sec-variables) beobachtet.
Wir hatten festgehalten, dass Veränderungen der einen Variablen keinen Effekt auf die **Adresse** bzw. *Identität* ``id`` anderer Variablen haben.
Für *atomare Datentypen* gilt noch mehr: 

```{admonition} Unveränderliche atomare Datentypen
::class: remark
::name: remark-immutable-atom-data-types
Ändern wir den **Wert** einer Variable vom Typ ``int``, ``bool`` oder ``float``, so kann diese Änderung nicht den **Wert** einer anderen Variablen verändern.
```

Folgendes Beispiel illustriert diese Tatsache.

```{code-cell} python3
x = 12313
z = x
print(f'value of x = {x}')
print(f'id of x = {id(x)}')

print(f'value of z = {z}')
print(f'id of z = {id(z)}')
print('change value of x')
x = 11341
print(f'value of x = {x}')
print(f'id of x = {id(x)}')

print(f'value of z = {z}')
print(f'id of z = {id(z)}')
```

(sec-datastructures)=
## Zusammengesetzte Datentypen

*Zusammengesetzte Datentypen* oder auch *Datenstrukturen* bestehen hingegen aus mehreren Werten.
Sie strukturieren diese Werte.

```{admonition} Zusammengesetzt Datypen 
::name: def-data-structures
::class: python

Datentypen welche Sammlungen von Werten modellieren, bezeichnen wir als *zusammengesetzte Datentypen* oder *Datenstrukturen*.
```

Anders als bei *atomaren Datentypen* lässt sich der **Wert** einer Datenstruktur verändern.
D.h., der Inhalt der Datenstruktur kann in der Regel verändert werden.

Sie können sich eine Datenstruktur wie ein Behältnis aus der Realwelt vorstellen.
Einen Rucksack können wir mit Dingen befüllen, die wir möglicherweise nicht verändern können.
Der Rucksack selbst, lässt sich demnach sehr leicht verändern.
Wir müssen lediglich Elemente hinauswerfen oder einfügen.

Nehmen wir einmal an, eine Datenstruktur enthält ausschließlich ganze Zahlen ``int``.
Verändern wir nun eine dieser Zahlen, so wird der **Wert** im Speicher, der diese Zahl repräsentiert, nicht verändert -- es ist ja ein *atomarer Datentyp*!
**Aber** es wird ein neuer Wert in den Speicher geschrieben und die Datenstruktur wird so manipuliert, dass einer ihrer Einträge nun auf diesen neuen Wert zeigt.

Im Abschnitt [Listen und der Speicher](sec-list-and-memory) sehen wir uns an was genau im Speicher vor sich geht, wenn wir mit Listen arbeiten.
Dies kann auf andere *Datenstrukturen* übertragen werden.



Zusammengesetzte Datentypen definieren wir durch andere Datentypen, welche bereits definiert wurden.
Die Basis der zusammengesetzten Datentypen sind deshalb entweder *built-in Datentypen* der Sprache oder eigens definierte zusammengesetzte Datentypen.

Angenommen Sie wollen den Datentyp ``Person`` definieren welcher sich dadurch auszeichnet, dass er sich aus zwei Zeichenketten ``str`` nämlich dem Vor- und Nachnamen zusammensetzt.
Durch [Klassen](sec-class-and-object) können Sie einen solchen Datentyp definieren.
Wie wir dies machen, werden wir auf einen späteren Zeitpunkt verschieben.

Listen ``list``, Tupel ``tuple``, Mengen ``set`` und Wörterbücher ``dict`` sind *zusammengesetzter built-in Datentypen* und zugleich enthalten die Werte (Objekte) dieser Datentypen eine
variable Anzahl an Elementen unterschiedlicher Datentypen.
Eine gute Analogie zu diesen sog, [Sammlung / Kollektion (engl. Collections)](def-collection) sind physikalische Ordner, Schließfächer, Listen auf Papier geschrieben, Rücksäcke, Körbe, Tüten und andere physikalischen Objekte die wir im Alltag verwenden um andere physikalische Objekte zu ordnen, strukturieren oder schlicht zu halten.
Auch der Arbeitsspeicher ist in diesem Sinne eine sowohl physikalische wie auch virtuelle Kollektion an Bits.

```{admonition} Sammlung (Collection)
::name: def-collection
::class: definition

Als *Sammlung* bezeichnen wir alle Datentypen ([Tupel](sec-tuple), [Dictionary](def-python-dictionary), [Listen](sec-list), [Mengen](sec-set) usw.), die eine **variable Anzahl** an anderen Elementen (normalerweise mehrere) beinhalten.

```

Mit **variabler Anzahl** ist gemeint, dass es Sammlung gibt, welche 5 Elemente enthalten und Sammlung gibt die 1000 Elementen enthalten.
Es kann dennoch sein, dass eine Sammlung die 10 Elemente enthält nicht verändert werden kann, d.h. sie wird auf immer dieser 10 Elemente enthalten.

```{code-cell} python3
mylist = [1, 2, 'A', 3, 1.23, [1, 2, 3]]
mylist
```

```{code-cell} python3
mytuple = (mylist, 'D')
mytuple
```

```{code-cell} python3
mydict = {'firstname' : 'Paulina', 'lastname' : 'Schmidt', 'age' : 23 }
mydict
```

```{code-cell} python3
month = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}
month
```

Eine Zeichenkette ``str`` ist ebenfalls eine Kollektion, jedoch sind deren Elemente alle vom gleichen Typ -- dem Zeichen.


