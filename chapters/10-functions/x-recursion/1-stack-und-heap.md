# Stack und Heap (S)

Es ist äußerst wichtig zu begreifen, dass bei jedem rekursiven Aufruf ein neuer [lokaler Namensraum](sec-local-namespace) eröffnet wird!
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

```{figure} ../../../figs/10-functions/python-tutorial/functions/stack_fill.png
---
width: 500px
name: fig-stack_fill
---
Befüllung des *Stacks* durch den Aufruf der *rekursiven Funktion* ``fac(4)``.
```

``fac(1)`` gelangt in den *Basisfall* und beendet die Rekursionskette.
Es ließt sein ``n`` aus seinem Namensraum (in {numref}`Abbildung {number} <fig-stack_fill>` ist das der ``namespace4``), prüft ``n <= 1`` und liefert ``1`` zurück.
Durch diesen Rücksprung, wird der Namensraum gelöscht und der nächste Namensraum auf dem *Stack* definiert den Namensraum des aktuellen Funktionsaufrufs.
In diesem hat ``n`` den Wert ``2`` und wir befinden uns bereits an der Stelle ``return n * fac(1)`` und da ``fac(1)`` soeben den Wert ``1`` zurückgeliefert hat, wird dieser Ausdruck zu ``return n * 1`` und somit zu ``return 2 * 1``.

Sukzessive leert sich der Stack.

```{figure} ../../../figs/10-functions/python-tutorial/functions/stack_clear.png
---
width: 500px
name: fig-stack_clear
---
Der *Stacks* leert sich beim Rücksprung.
```

Wann immer eine Funktion aufgerufen wird (egal ob rekursiv oder nicht) wird oben auf dem Stack ein Speicherblock für den lokalen Namensraum reserviert und wann immer die Funktion terminiert/zurückspringt der Speicherblock wird wieder freigegeben.
Der Zugriff auf den Stack ist schnell, da die Reservierung und das Freigeben wenig Verwaltungsinformation benötigt.
Außerdem ist der Stack ein zusammenhängender Speicherbereich, d.h., aufeinanderfolgende Speicherzugriffe liegen nahe im Speicher beisammen.

```{admonition} Stack und Funktionsaufrufe
:class: remark
:name: remark-stack-speed
Damit wir als Programmierer\*innen Codeblöcke aus Gründen der Laufzeit Funktionen vermeiden, muss der *Stack* sehr effizient sein!
```

Die maximale Tiefe des *Stacks* ist an eine bestimmte Zahl gebunden.
Ist unsere Rekursion zu tief, läuft der Stacks voll:

```{code-cell} python3
---
tags: [raises-exception]
---
# Suppress output to avoid LaTeX overflow issues
_ = fac(1000)
```

Wir können die maximale erlaubte Rekursionstiefe auch anpassen:

```{code-cell} python3
---
tags: [raises-exception]
---
import sys
sys.setrecursionlimit(5000)

# Suppress output to avoid LaTeX overflow issues
_ = fac(1000)
```

Der andere Speicherbereich, welcher nicht zum *Stack* gehört, bezeichnen wir als *Heap*.

```{admonition} Heap (Arbeitsspeicher)
:name: def-heap
:class: definition
Der *Heap* ist ein Speicherbereich für die *dynamische Speicherverwaltung*.
Anders als beim *Stack* gibt es kein Muster mit dem der *Heap* gefüllt bzw. geleert werden muss.
```

Im *Heap* kann man kreuz und quer Speicher reservieren und freigeben.
Das macht die Verwaltung des *Heaps* komplexer.
Im Vergleich zum *Stack* ist es deutlich aufwendiger zu protokollieren, welche Speicherbereiche frei und welche belegt sind.
