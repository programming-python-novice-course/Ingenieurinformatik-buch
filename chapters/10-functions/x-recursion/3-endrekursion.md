# Endrekursionen (in Python?) (S)

Der Laufzeitvergleich hängt jedoch auch mit der verwendeten Programmiersprache zusammen.
Funktionale Sprachen bieten, zum Beispiel, das Konzept der optimierten *Endrekursion* (engl. *Tail Recursion*).

```{admonition} Endrekursion
:name: def-tail-recursion
:class: definition
*Endrekursion*  ist eine bestimmte Form der Rekursion bei der der rekursive Aufruf einer Funktion auch ihre **letzte Anweisung** ist.
```

Ist eine Funktion endrekursiv, eliminieren die [Compiler](def-compiler) oder [Interpreter](def-interpreter) von funktionalen Sprachen die rekursiven Aufrufe der Funktion -- der *Stack* bleibt (bis auf einen Eintrag) leer.
Unsere ``fac``-Funktion ist keine *Endrekursion*, denn nach dem rekursiven Aufruf folgt eine Multiplikation.
Wir können daraus jedoch leicht eine *Endrekursion* machen:

```{code-cell} python3
def fac_tail(n, acc=1):
    if n <= 1:
        return acc
    else:
        return fac_tail(n-1, acc*n)

fac_tail(4)
```

Alle Arbeit ist getan und dann folgt der rekursive Aufruf.
Deshalb können wir eigentlich alle Namensräume, welche auf dem [Stack](def-stack) liegen vergessen.
Wir haben ``n`` bereits verarbeitet und brauchen es nicht mehr.
Deshalb belastet diese Rekursion den *Stack* nicht, sofern unser [Compiler](def-compiler) oder [Interpreter](def-interpreter) dies auch optimiert.

```{admonition} Endrekursion in Python
:name: remark-tail-recursion-python
:class: remark
Der ``Python``-Interpreter nutzt die *Endrekursion* nicht aus.
```

Der ``Python``-Interpreter optimiert dies nicht!
D.h. obwohl wir ``n`` vergessen könnten, wird es auf den *Stack* gelegt.
Warum sich die Entwickler\*innen gegen *elimination von Endrekursionen* (engl. *Tail Recursion Elimination (TRE)*) entschieden haben, hat verschiedene Gründe:

- TRE zerstört den sog. Stack Trace (wichtig für Fehlermeldungen)
- TRE als Option würde Entwickler\*innen motivieren die Rekursion häufiger zu verwenden, doch würde der Code dann nicht überall gleich effizient laufen
- Entwickler\*innen von ``Python`` glauben nicht an die Rekursion als Basis jeder Programmierung
- In ``Python`` wäre die Realisierung durch dessen Dynamik äußerst kompliziert, hier ein einfaches Beispiel was bereits zu Problemen führt:

```{code-cell} python3
def f(x):
    if x > 0:
        return f(x-1)
    return 0

g = f
def f(x):
    return x
g(5)
```

Wir binden ``g`` an das erste ``f``.
Dann aber definieren wir ``f`` neu.
``g(5)`` ruft das alte ``f`` auf, nennen wir es ``f_old``.
Somit wird ``g(5)`` zu ``f_old(5)``.
Diese Funktion ruft nun das nicht rekursive neue ``f`` auf, d.h. ``f(5-1)`` wird zu ``f(4)`` wird zu ``4``.
Wie soll der Interpreter protokollieren welche Funktionen rekursiv sind und welche nicht oder nicht mehr?
Dadurch, dass wir Funktionsnamen in ``Python`` zur Laufzeit ändern können, wäre dies unglaublich aufwendig.

An diesem Beispiel wird deutlich, dass die Flexibilität und Dynamik einer Sprache ihren Preis hat.
Für Interpreter und Compiler wird es schwerer und schwerer Optimierungen durchzuführen!
