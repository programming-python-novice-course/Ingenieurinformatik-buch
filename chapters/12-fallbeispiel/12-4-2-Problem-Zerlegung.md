# Problem-Zerlegung

Julia hat die Aufgabe bereits grob zerlegt (Parsing, Visualisierung, Statistik). Im Buy-Pfad war das einfach, weil `pandas` und `matplotlib` viele Details kapseln. Im Build-Pfad muss Julia diese Bausteine so weiter zerlegen, dass sie kleine, testbare Schritte erhält.

```{admonition} Kernidee
:class: remark
Julia zerlegt so lange weiter, bis jeder Schritt in 10–30 Zeilen verständlich implementierbar und testbar ist.
```

```{figure} ../../figs/12-fallbeispiel/dekomposition_teilprobleme-further.png
---
name: fig-dekomposition-teilprobleme-further
width: 95%
---
Wie kann jedes Einzelproblem gelöst werden?
```
