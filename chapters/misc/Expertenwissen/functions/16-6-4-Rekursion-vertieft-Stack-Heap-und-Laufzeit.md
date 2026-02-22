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

(sec-rekursion-vertieft)=
# Rekursion vertieft – Stack, Heap und Laufzeit

Dieser Abschnitt vertieft die [rekursiven Funktionen](sec-recursion-basis) aus dem Hauptkapitel.
Wie realisiert der Computer Rekursion? Was passiert bei einem rekursiven Aufruf im Speicher?

```{code-cell} python3
def fac(n):
    if n <= 1:
        return 1
    else:
        return n * fac(n-1)
```

## Stack und Heap

Es ist äußerst wichtig zu begreifen, dass bei jedem rekursiven Aufruf ein neuer [lokaler Namensraum](sec-namespaces) eröffnet wird!
Das bedeutet, jeder Funktionsaufruf verwendet einen frischen Satz an Variablen.
Dieser Namensraum befindet sich auf dem sog. *Stack*, zu deutsch *Stapel*.

```{admonition} Stack (Arbeitsspeicher)
:name: def-stack
:class: definition

Der *Stack* ist ein spezieller Bereich des Arbeitsspeichers, auf welchem die Variablen des lokalen Namensraums liegen.
Bei jedem Funktionsaufruf wird ein Namensraum automatisch auf den Stack gelegt und bei jedem Rücksprung (``return``) wird der entsprechende Namensraum automatisch vom Stack gelöscht.
```

Immer wenn wir ``fac`` aufrufen, wird ein neuer lokaler Namensraum auf den Stack gelegt.
Dieser enthält die Variable ``n``.
Da die Funktionen rekursiv aufgerufen werden, füllt sich der Stack bis wir uns im Aufruf von ``fac(1)`` befinden.

```{figure} ../../../../figs/10-functions/python-tutorial/functions/stack_fill.png
---
width: 500px
name: fig-stack_fill
---
Befüllung des *Stacks* durch den Aufruf der *rekursiven Funktion* ``fac(4)``.
```

``fac(1)`` gelangt in den *Basisfall* und beendet die Rekursionskette.
Durch den Rücksprung wird der Namensraum gelöscht und der nächste Namensraum auf dem *Stack* definiert den Namensraum des aktuellen Funktionsaufrufs.

Sukzessive leert sich der Stack.

```{figure} ../../../../figs/10-functions/python-tutorial/functions/stack_clear.png
---
width: 500px
name: fig-stack_clear
---
Der *Stacks* leert sich beim Rücksprung.
```

Wann immer eine Funktion aufgerufen wird (egal ob rekursiv oder nicht) wird oben auf dem Stack ein Speicherblock für den lokalen Namensraum reserviert und wann immer die Funktion terminiert/zurückspringt der Speicherblock wird wieder freigegeben.
Der Zugriff auf den Stack ist schnell, da die Reservierung und das Freigeben wenig Verwaltungsinformation benötigt.

Die maximale Tiefe des *Stacks* ist an eine bestimmte Zahl gebunden.
Ist unsere Rekursion zu tief, läuft der Stacks voll:

```{code-cell} python3
:tags: [raises-exception]
_ = fac(1000)
```

Der andere Speicherbereich, welcher nicht zum *Stack* gehört, bezeichnen wir als *Heap*.

```{admonition} Heap (Arbeitsspeicher)
:name: def-heap
:class: definition
Der *Heap* ist ein Speicherbereich für die *dynamische Speicherverwaltung*.
Anders als beim *Stack* gibt es kein Muster mit dem der *Heap* gefüllt bzw. geleert werden muss.
```

## Laufzeit

Obwohl der *Stack* enorm effizient ist, sind iterative Lösungen fast immer schneller in ihrer Ausführung.
Vergleichen wir unsere rekursive Lösung mit der iterativen:

```{code-cell} python3
def fac_it(n):
    result = 1
    for i in range(1, n+1):
        result *= i
    return result
```

Die iterative Lösung verwendet lediglich drei Variablen nämlich ``n``, ``i`` und ``result``, wohingegen wir bei der rekursiven Lösung für ``fac(n)`` ca. ``n`` Variablen benötigen.

Zusätzlich sind [CPU's](def-cpu) in der [Neumann-Architektur](sec-von-neumann) auf Schleifen optimiert.
Rücksprünge kann die CPU nur vorhersagen, wenn es von ihnen nicht zu viele hintereinander gibt.

```{code-cell} python3
%timeit fac_it(1000)
```

```{code-cell} python3
%timeit fac(1000)
```

Die iterative Berechnung ist typischerweise um einen Faktor von etwa 7–8 schneller.

## Endrekursion (in Python?)

Der Laufzeitvergleich hängt auch mit der verwendeten Programmiersprache zusammen.
Funktionale Sprachen bieten das Konzept der optimierten *Endrekursion* (engl. *Tail Recursion*).

```{admonition} Endrekursion
:name: def-tail-recursion
:class: definition
*Endrekursion* ist eine bestimmte Form der Rekursion bei der der rekursive Aufruf einer Funktion auch ihre **letzte Anweisung** ist.
```

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

```{admonition} Endrekursion in Python
:name: remark-tail-recursion-python
:class: remark
Der ``Python``-Interpreter nutzt die *Endrekursion* nicht aus.
```

Der ``Python``-Interpreter optimiert dies nicht.
Die Entwicklerinnen von Python haben sich aus verschiedenen Gründen gegen Tail Recursion Elimination (TRE) entschieden:

+ TRE zerstört den sog. Stack Trace (wichtig für Fehlermeldungen)
+ TRE als Option würde Entwicklerinnen motivieren die Rekursion häufiger zu verwenden, doch würde der Code dann nicht überall gleich effizient laufen
+ In Python wäre die Realisierung durch dessen Dynamik äußerst kompliziert
