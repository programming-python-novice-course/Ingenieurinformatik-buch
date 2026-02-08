# Standardargumente für Parameter (A)

Wir können Parametern auch einen sog. Standardargumente (Standardwerte) verpassen.
Das Standardargument wird genau dann verwendet, wenn der Wert des Parameters beim Aufruf der Funktion nicht definiert wurde.

Erinnern Sie sich noch an die Funktion ``range()``?
Diese konnten wir mit einem, zwei, oder drei Argumenten aufrufen.
Das gelang, weil auch ``range()`` Standardwerte für zwei der drei Parameter festlegt.

Lassen Sie uns eine Funktion ``lrange(start, stop, step)`` definieren, welche eine Liste bestehend aus dem entsprechenden Zahlenbereich ``range(start, stop, step)`` zurückliefert:

```{code-cell} python3
def lrange(start, stop, step):
    numbers = list(range(start, stop, step))
    return numbers

lrange(0, 10, 2)
```

Die Funktion ``lrange()`` verhält sich wie ``range()``, jedoch gibt Sie eine Liste zurück.
Ohne Standardargumente können wir die Funktion jedoch nicht mit nur einem Argument aufrufen.

```{code-cell} python3
---
tags: [raises-exception]
---
lrange(10)
```

Definieren wir Standardargumente, müssen wir uns überlegen welche Werte sinnvoll sind.
Was soll also passieren wenn wir beim Funktionsaufruf bestimmte Parameter weglassen?

Standardargumente setzten wir durch eine Zuweisung im Funktionskopf.
Dabei müssen alle Parameter mit Standardargumenten **hinten stehen!** 
Folgender Code wird ebenfalls zu einem Fehler führen:

```{code-cell} python3
---
tags: [raises-exception]
---
def lrange(start=0, stop, step=1):
    numbers = list(range(start, stop, step))
    return numbers

```

Wir müssen die Reihenfolge der Parameter verändern (und diese Änderung auch beim Aufruf der Funktion berücksichtigen):

```{code-cell} python3
def lrange(stop, start=0, step=1):
    numbers = list(range(start, stop, step))
    return numbers

print(lrange(10, 0, 2))
print(lrange(10))
```

Wir können auch **einzelne** Standardargumente beim Funktionsaufruf verändern. 
Zum Beispiel wollen wir vielleicht eine Liste mit ``lrange()`` erzeugen, für die ``stop=10``, ``start=0`` und ``step=2`` gilt. 
Da wir ``start`` weiterhin auf dem Standardwert ``0`` belassen, müssen wir es nicht angeben.

```{code-cell} python3
lrange(10, step=2)
```

Um den Code besser lesen zu können macht es hin und wieder Sinn, diese Schreibweise auch dann zu verwenden, wenn Sie eigentlich gar nicht notwendig wäre.

```{code-cell} python3
lrange(stop=10, start=0, step=2)
```

Verwenden wir diese Schreibweise, können wir auch die Reihenfolge der Parameter missachten:

```{code-cell} python3
lrange(start=0, stop=10, step=2)
```

Lassen Sie sich nicht verwirren wenn wir einem Parameter eine Variable zuweisen, die denselben Namen trägt:

```{code-cell} python3
start = 0
lrange(start=start, stop=10, step=2)
```

Diese beiden Variablen mit dem Namen ``start`` sind nicht dieselben Variablen.
Das linke ``start`` ist der Parameter welches die Funktion schlussendlich verwendet und das rechte ``start`` ist das Argument, welches wir zuvor definiert haben.
Wir setzten beim Aufruf die Adresse des linken ``start`` auf die Adresse des rechten ``start``.
