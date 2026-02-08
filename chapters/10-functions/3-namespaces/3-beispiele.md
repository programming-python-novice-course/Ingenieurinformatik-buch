# Beispiele (A)

Im folgenden Beispiel, hat die Variable ``y`` einen lokale Sichtbarkeit.
Der Interpreter sucht und findet sie im lokalen Scope innerhalb von ``printY()``.
Außerhalb der Funktion ist ``y`` jedoch nicht definiert (weder im globalen noch im built-in Namensraum).
Deshalb kommt es zu einem Fehler in der letzten Zeile.

```{code-cell} python3
---
tags: [raises-exception]
---
def printY():
    y = 2
    print(y)

printY()
y
```

Ein weiteres Beispiel:

```{code-cell} python3
x = 2
def printX():
    print(x)

printX()
```

Innerhalb der Funktion sucht der Interpreter das ``x`` erst im lokalen Namensraum und findet es nicht.
Den umschließenden Namensraum gibt es nicht.
Dann findet er schließlich ``x`` im globalen Namensraum.

Was passiert im folgenden Code?

```{code-cell} python3
z = 5
def printZ():
    z = 42
    print(z)

printZ()
z
```

Innerhalb der Funktion findet der Interpreter das ``z`` im lokalen Namensraum und es hat den Wert ``42``.
Nachdem die Funktion beendet wird, existiert dieser Namensraum nicht mehr und das ``z`` in der letzten Zeile stammt aus dem globalen Namensraum!

Es wird immer die **lokale** Variable, d.h. die Variable des **lokalen Namensraums** bevorzugt!
Die eine Variable liegt im globalen Namensraum ``global.z``, die andere im lokalen Namensraum der Funktion ``global.printZ.z``.

Sie können das Verhalten auch sehr gut mit der *built-in*-Funktion ``id()`` untersuchen:

```{code-cell} python3
z = 5
print(f'global z id: {id(z)}')
def printZ():
    z = 42
    print(f'lokal z id (after lokal z is defined): {id(z)}')
    print(z)

printZ()
z
```

```{admonition} Mehrere Namensräume?
:class: remark
:name: remark-duplicated-namespaces

Eine Variable kann innerhalb einer Funktion einem der vier Namensräume stammen.
Niemals jedoch an der einen Stelle aus dem einen und an der anderen Stelle aus dem anderen Namensraum!
```

Der ``Python``-Interpreter schützt uns vor möglichen und äußerst undurchsichtigen Verwendungen zweier Variablen mit dem scheinbar gleichen Namen.
Folgender Code führt zum Glück zu einem Fehler:

```{code-cell} python3
---
tags: [raises-exception]
---
z = 5
print(f'global z id: {id(z)}')
def printZ():
    print(f'lokal z id (before lokal z is defined): {id(z)}')
    z = 42
    print(f'lokal z id (after lokal z is defined): {id(z)}')
    print(z)

printZ()
z
```

Der Interpreter ließt ``z = 42`` innerhalb der Funktion und weiß deshalb, dass ``z`` im *lokalen Namensraum* liegen muss.
Dann wirft er den Fehler in der ersten Zeile der Funktion, da ``z`` angesprochen aber noch nicht definiert wurde.
Er lehnt es ab, stattdessen das *globale* ``z`` zu verwenden.

Blicken wir auf ein etwas komplizierteres Beispiel und überlegen uns was genau vor sich geht:

```{code-cell} python3
def printZ(z):
    if z == 42:
        print(f'global z id: {id(z)}')
        print(z)
    else:
        z = 42
        print(f'lokal z id: {id(z)}')
        print(z)

z = 5
print(f'global z id: {id(z)}')
printZ(z)
print()

z = 42
print(f'global z id: {id(z)}')
printZ(z)
```

Vor dem Funktionsaufruf gibt es den Namen ``z`` im *globalen Namensraum*.
Der Wert auf den dieser verweist ist gleich ``5``.
Dann rufen wir ``printZ(z)`` auf.
Damit wandert ``z`` in den *lokalen Namensraum* der Funktion ``printZ()``.
Dieses *lokale* ``z`` zeigt (noch) auf den gleichen Speicherbereich wie das *globale* ``z``.
Dann werden Adresse und Wert des *lokalen* ``z`` durch ``z = 42`` geändert.
Beim zweiten Funktionsaufruf wird diese Änderung nicht durchgeführt, da ``z == 42``.

Lassen Sie uns zum Abschluss noch ein Beispiel mit einem *umschließenden Namensraum* betrachten.
Dabei werden wir erneut eine Funktion als Rückgabewert verwenden.
Wir werden dies noch ausführlicher besprechen, nehmen Sie es also als kleinen Ausblick.

````{exercise} Umschließender Namensraum
:label: closure-exercise

Geben Sie an was folgender Code ausgibt.
In welchem Namensraum liegen ``x`` und ``printX``?

```python
def magic(x):
    def printX():
        print(x)
    return printX

func = magic(42)
func()
func()
func()
```
````

````{solution} closure-exercise
:label: closure--solution
:class: dropdown

Es wird dreimal ``42`` ausgeben.
``x`` und ``printX`` liegen im umschließenden Namensraum von ``magic(42)``.
````

Das Konzept der *umschließenden Namensräume* keine Eigenheit von ``Python`` sondern allgemein unter dem Begriff [Closure](https://de.wikipedia.org/wiki/Closure_(Funktion)) bekannt.
