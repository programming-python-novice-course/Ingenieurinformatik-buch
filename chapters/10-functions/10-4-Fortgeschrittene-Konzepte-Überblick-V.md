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

# Fortgeschrittene Konzepte - Überblick (V)

Python bietet weitere Funktionskonzepte. Im Folgenden sehen Sie jeweils ein kurzes Beispiel, damit Sie das Konzept schon einmal gesehen haben.

Details dazu finden Sie im [Expertenwissen](sec-anonymous-function).

**Anonyme Funktionen (Lambdas)**

Im Unterschied zu den Funktionen, die Sie mit `def` und einem Namen definieren, hat eine *anonyme Funktion* keinen Namen und besteht nur aus einem Ausdruck.
Effekt: Statt eine Hilfsfunktion mit `def` separat zu definieren, schreibt man die Logik direkt inline – besonders praktisch bei Einzeilern wie ``key=lambda t: t[1]``. 

```{code-cell} python3
teile = [("Bolzen", 12), ("Schraube", 8), ("Mutter", 6)]

# Lambda als key-Argument: sortiert nach dem zweiten Element (Länge)
sortiert = sorted(teile, key=lambda t: t[1])
print(sortiert)

# Quadrate mit map und Lambda
quadrate = list(map(lambda x: x**2, [1, 2, 3, 4]))
print(quadrate)
```

Details dazu finden Sie im [Expertenwissen](sec-anonymous-function).

**Verschachtelte Funktionen**

Eine Funktion kann *innerhalb* einer anderen definiert werden.
Effekt: Die innere Funktion hat Zugriff auf die Variablen der äußeren Funktion und kann z.B. Hilfslogik kapseln.

```{code-cell} python3
def berechne_mit_skalierung(x, y, faktor=2):
    def skaliere(wert):
        return wert * faktor  # nutzt faktor aus der äußeren Funktion
    return skaliere(x) + skaliere(y)

berechne_mit_skalierung(3, 5)
berechne_mit_skalierung(3, 5, faktor=10)
```

Details dazu finden Sie im [Expertenwissen](chapters/misc/Expertenwissen/functions/01-nested-functions).

**First-Class-Eigenschaft**

Funktionen sind in Python *First-Class*: Sie können wie Daten in Variablen gespeichert, übergeben und zurückgegeben werden.
Effekt: Code wird flexibler – z.B. kann eine Funktion entscheiden, welche andere Funktion sie aufruft.

```{code-cell} python3
def verdoppeln(x):
    return 2 * x

def halbieren(x):
    return x // 2

# Funktion in Variable speichern
op = verdoppeln
print(op(5))

# Funktion als Argument übergeben
def wende_an(werte, funktion):
    return [funktion(v) for v in werte]

print(wende_an([1, 2, 3], verdoppeln))
print(wende_an([10, 20, 30], halbieren))
```

Details dazu finden Sie im [Expertenwissen](sec-first-class-functions).

