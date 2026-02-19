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

(sec-vars-equality-and-identity)=
# Variablen und der Arbeitsspeicher (S)

Eine *Variable* können wir als Paar von **Wert** und **Arbeitsspeicheradresse** verstehen.

- Der **Wert** der Variablen steht im [Arbeitsspeicher](def-main-memory).
- Die **Arbeitsspeicheradresse** zeigt auf die Stelle im Speicher, an der dieser Wert liegt.

Den Arbeitsspeicher können wir uns als lange Liste von Bits vorstellen:

```{figure} ../../../figs/03-language-properties/python-tutorial/variables/ram.png
---
width: 350px
name: fig-ram
---
Der Arbeitsspeicher ist eine sehr lange Liste bestehend aus [Bits](def-bit).
Die Adresse ist im Wesentlichen die Nummer / der Index eines bestimmten Speicherplatzes.
```

Eine *Variable* kann demnach als Tripel, bestehend aus

+ **Wert**
+ **Datentyp**
+ **Adresse**

verstanden werden.
Die **Speicheradresse** der Variable zeigt in den Arbeitsspeicher an eine bestimmte Stelle.
Dort steht jedoch nicht nur der **Wert**.
Dort steht auch der **Datentyp**, d. h. die *Information*, wie dieser **Wert** zu interpretieren ist.

```{figure} ../../../figs/07-python-data-types/python-tutorial/datatypes/data-type-key-pair.png
---
width: 500px
name: fig-data-type-key-pair-2
---
Variablen für dynamische Typisierung: Eine *Variable* dargestellt als Tripel aus (Adresse, Datentyp, Wert). 
Datentyp und Wert stehen im Speicher. Die Variable 'kennt' ihre Adresse.
In diesem Beispiel benötigt die Datentypinformation 3 Bit und der Wert 8 Bit.
```

```{admonition} Pythons Typisierung
:name: remark-python-type-mem
:class: remark
Eine ``Python`` *Variable* verweist durch eine Adresse eigentlich nicht nur auf einen Wert sondern auch auf einen Datentyp und auf den Referenzzähler, welcher angibt wie viele Variablen auf den Wert verweisen.
Dies werden wir aber vorerst ignorieren.
```

Variablen abstrahieren den Zusammenhang zwischen Wert und Adresse, sodass Sie uns die Arbeit mit dem Arbeitsspeicher erleichtern.
Wir müssen nicht wissen welche Speicheradressen belegt und welche noch frei sind.
In ``Python`` kommen wir mit der eigentlichen Speicheradresse normalerweise gar nicht in Kontakt.

Mit

```{code-cell} ipython3
x = 25
```

Wird der **Wert** ``25`` in den Arbeitsspeicher an eine freie **Speicheradresse** geschrieben.
Diese **Adresse** erhält die *Variable* ``x``. ``x`` *zeigt* auf den Speicherbereich in dem der **Wert** ``25`` steht!
Folgende Abbildung verdeutlicht die Situation:

```{figure} ../../../figs/03-language-properties/python-tutorial/variables/variable.png
---
width: 350px
name: fig-variable
---
Initialisierung und Zuweisung einer Variable ``x``  mit dem Wert ``25``. Der Wert steht im Arbeitsspeicher (rechts) an der Speicheradresse 6. Die Variable zeigt auf diese Adresse im Speicher.
```

Mit der *built-in*-Funktion ``id`` können Sie sich eine Identifikationsnummer einer Variablen ausgeben lassen. Für zwei *Variablen* ist diese genau dann gleich, wenn deren **Arbeitsspeicheradressen** gleich sind.

```{code-cell} ipython3
x = 25
z = 25
print(id(x))
print(id(z))
```

Sie sehen dass die ``id`` der Variablen ``x`` und ``z`` identisch sind.
Ebenso ist ihr Wert identisch.
Diese Situation sieht demnach wie folgt aus:

```{figure} ../../../figs/06-python-basics/python-tutorial/variables/variable-equal-id.png
---
width: 500px
name: fig-variable-equal-id
---
Initialisierung und Zuweisung einer Variablen ``x`` und ``z``  mit dem Wert ``25``. Die Adresse beider Variablen ist identisch.
```

```{admonition} Identität
:name: def-identity
:class: python
Zwei *Variablen* ``x`` und ``y`` sind *identisch* genau dann wenn sie den gleichen Speicherbereich adressieren.
```

```{admonition} Gleichheit
:name: def-equality
:class: python
Zwei *Variablen* ``x`` und ``y`` sind *gleich* genau dann wenn der Speicherbereich auf den sie verweisen den gleichen Wert beinhaltet.
```

``Python``-erkennt, dass es ausreicht, wenn beide *Variablen* auf den gleichen Speicherbereich zeigen.
Wir als Programmierer\*innen bekommen davon gar nichts mit. Verändern wir den Wert von ``z`` dann verändert sich auch die ``id``:

```{code-cell} python3
x = 25
z = 24
print(id(x))
print(id(z))
```

Die Situation könnte in etwa wie folgt aussehen:

```{figure} ../../../figs/06-python-basics/python-tutorial/variables/variable-unequal-id.png
---
width: 400px
name: fig-variable-unequal-id
---
Initialisierung und Zuweisung einer Variablen ``x`` und ``z``  mit dem Wert ``25`` und ``24``. Die Adresse beider Variablen ist nicht identisch.
```

````{admonition} Aus Identität folgt Gleichheit
:name: theorem-equality-and-identity
:class: theorem

Zwei Variablen ``x`` und ``y``, die auf die gleiche Speicheradresse zeigen haben auch den gleichen Wert.
Das heißt aus

```python
id(x) == id(y)
```

folgt

```python
x == y
```

Zwei Variablen können jedoch den gleichen Wert haben, allerdings auf verschiedene Speicherbereiche verweisen.
````


Ein Beispiel für zwei Variablen mit gleichem Wert und unterschiedlicher Identität ist leicht konstruiert:

```{code-cell} ipython3
x = 2131313
z = 2131313
print(id(x))
print(id(z))
```

Das Ergebnis wirkt zunächst überraschend:
Warum war die ``id`` beim Wert ``25`` identisch, aber beim Wert ``2131313`` nicht?

Hier kommen wir in Details von ``Python``, die fürs Erste nicht so wichtig sind.
Zur Optimierung der Laufzeit legt ``Python`` viele kleine ganze Zahlen beim Start der Ausführung in den Speicher, sodass Speicherplatz gespart wird.
Das geht jedoch nur für eine endliche Anzahl an Zahlen (deshalb für die ersten k kleinsten Zahlen). 
``2131313`` zählt nicht dazu und somit wird der Wert jedes Mal neu in den Speicher geschrieben.

Folgender Code berechnet die erste Zahl die nicht bereits bei der Ausführung im Speicher liegt:

```{code-cell} ipython3
x = 0
z = 0
while(id(x) == id(z)):
    x = x + 1
    z = z + 1
x
```

Wie sieht es mit negativen Zahlen aus?:

```{code-cell} ipython3
x = 0
z = 0
while(id(x) == id(z)):
    x = x - 1
    z = z - 1
x
```



Blicken wir auf folgenden Code und fragen uns was der Interpreter daraus macht.

```python
x = 3       # <x, int>
y = 5       # <y, int>
z = x + y   # int + int -> int

x = 1.3     # <x, float>
y = 3.5     # <y, float>
z = x + y   # float + float -> float
```

Für die erste Addition von ``x`` und ``y`` holt sich der Interpreter die Datentypinformation.
Er weiß demnach, dass ``x + y`` bedeutet, dass eine Addition von zwei ganzen Zahlen auszuführen ist.
Er wandelt den Code so um, dass die CPU angewiesen wird, zwei ganze Zahlen zu addieren.
Der Addierer der CPU wird aktiv und addiert die beiden Zahlen.
Für die zweiten Addition führt der Interpreter die gleiche Übersetzung durch, jedoch für zwei Fließkommazahlen.
Eine **andere** Einheit, die Fließkomma-Einheit, der CPU wird aktiviert!

