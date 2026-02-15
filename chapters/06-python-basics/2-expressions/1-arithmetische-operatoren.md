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

(sec-python-operator-arithmetic)=
# Arithmetische Operatoren (A)

Die Multiplikation ``*`` wie auch die Potenz ``**`` bezeichnen wir als *arithmetische Operatoren*, da sie numerische Werte (Zahlen) verarbeiten.
Es gibt jedoch noch eine ganze Reihe von weiteren *arithmetische Operatoren*:

| Operator |     Beschreibung     |  Beispiel  |                     Bedeutung                      |
| :------: | :------------------: | :--------: | :------------------------------------------------: |
|   `+`    |       Addition       | ``3 + 4``  |                      $3 + 4$                       |
|   `-`    |     Subtraktion      | ``3 - 4``  |                      $3 - 4$                       |
|   `*`    |    Multiplikation    | ``3 * 4``  |                    $3 \cdot 4$                     |
|   `/`    |       Division       | ``3 / 4``  |                      $3 / 4$                       |
|   `**`   |     Potenzierung     |  ``3**4``  |                       $3^4$                        |
|   `//`   | ganzzahlige Division | ``3 // 4`` |         $\left \lfloor{3/4}\right \rfloor$         |
|   `%`    |        Modulo        | ``10 % 4`` | $10 - (4 \cdot \left \lfloor{10/4}\right \rfloor)$ |

Jeder dieser Operatoren ``op`` erwartet zwei Zahlen, eine links und eine rechts von ``op``.

Die Bedeutung der Modulo-Operation ``%`` sieht kompliziert aus, doch bedeutet dies schlicht, dass ``10 % 4`` der *ganzzahlige Rest* der Restwertdivision (Euklidische Division) ist.

Die ganzzahlige Division rundet das Ergebnis der Division auf die nächst kleinere ganze Zahl (Integer).
Beachten Sie

```{code-cell} python3
-2 // 3
```

ergibt ``-1`` und

```{code-cell} python3
2 // 3
```

ergibt ``0``.

*Arithmetische Operationen* werden von der *arithmetischen Einheit* der [CPU](def-cpu) ausgewertet.
Mit ihnen können wir numerische Gleichungen lösen aber auch Indices manipulieren.

```{exercise} Praxisaufgabe (PA-Kurz): `%`, `//` und `**` ausprobieren
:label: ex-paufgaben-kurz-operatoren

1. Berechnen Sie für `a = 1999` und `b = 4` den **Rest** (`%`) und die **ganzzahlige Division** (`//`).
2. Prüfen Sie danach mit `==`, ob beide Ergebnisse gleich sind.
3. Untersuchen Sie, wie Python Potenzen auswertet: `2 ** 2 ** 3` (Bindung/Assoziativität).
```

```{code-cell} python3
a = 1999
b = 4
```

