
(sec-struktogramme)=
# Nassi-Shneiderman-Diagramme (A)

Struktogramme, auch Nassi-Shneiderman-Diagramme genannt, sind eine visuelle Darstellungsform für strukturierte Algorithmen. Sie ermöglichen es, mit dem Auge schnell zu erkennen, wie die Kontrollstruktur und der Ablauf in einem Programm aussehen.

Die Grundidee ist, dass jede Kontrollstruktur durch ein Rechteck dargestellt wird, das wiederum andere Rechtecke enthalten kann. Die Verschachtelung macht die Struktur des Algorithmus visuell erkennbar.

Struktogramme verwenden folgende Grundstrukturen:

1. Sequenz: Anweisungen werden nacheinander in einem Rechteck untereinander geschrieben.
2. Fallunterscheidung: Ein Rechteck wird durch eine Bedingung geteilt; der obere Teil enthält die Bedingung, der untere Teil die Anweisungen für den Fall, dass die Bedingung erfüllt ist.
3. Schleife: Ein Rechteck mit einer Bedingung, die angibt, wann die Schleife wiederholt wird.

```{figure} ../../figs/02-computer-sciences-basics/struktogrammtypen.png
---
width: 400px
name: fig-struktogrammtypen
---
Die Grundstrukturen von Struktogrammen: Sequenz, Fallunterscheidung und Schleife.
```

```{admonition} Achtung
:name: warning-struktogramme
:class: warning

Struktogramme sind Entwurfswerkzeuge für strukturierte Algorithmen (wenige, nacheinander ablaufende Schritte). Sie werden manchmal in einem bestimmten "Programmierstil", der *prozeduralen Programmierung*, verwendet. Mehr zu Programmierstilen finden Sie im [Teil 3](paradigma-sec).

Struktogramme sind ungeeignet für:
- Komplexe, tief verschachtelte Algorithmen (werden schnell unübersichtlich).
- Darstellung von einem Zusammenspiel von Softwaremodulen
```

```{admonition} Achtung
:name: warning-struktogramme-pruefung
:class: warning

Struktogramme sind prüfungsrelevant.
```

