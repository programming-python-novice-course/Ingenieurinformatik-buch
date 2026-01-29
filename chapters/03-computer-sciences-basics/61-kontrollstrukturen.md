
# Kontrollstrukturen

Durch [Wiederholung](sec-repetition-and-recursion) in Form von *Schleifen* und *(rekursiven) Funktionen* vermeiden wir es Anweisungen, die wir mehrfach ausführen wollen, auch mehrfach niederzuschreiben.
Erst durch diese fundamentale Eigenschaft, ist es überhaupt möglich, dass wir die Anzahl der ausgeführten Anweisungen von der Länge des Programmcodes entkoppeln.

[Fallunterscheidungen](sec-if-else) erlauben es uns wiederum bestimmte Anweisungen nur dann auszuführen, wenn eine bestimmte Bedingung zur Laufzeit des Programms erfüllt ist.

*Schleifen* und *Fallunterscheidungen* kombiniert mit *Variablen*, bilden bereits alles was wir benötigen.
Um unseren Programmcode zu strukturieren und bestimmte Programmteile an verschiedenen Stellen aufzurufen, gibt es zusätzlich das Konzept der Programmierfunktionen oder kurz *Funktionen*.

```{admonition} Kontrollstrukturen
:name: def-control-structure
:class: definition

*Kontrollstrukturen* sind Anweisungen, welche die Abarbeitungsreihenfolge von anderen Anweisungen, und damit den Programmablauf kontrollieren.
```

Zusammenfassend konzentrieren wir uns auf:

1. Fallunterscheidungen (bedingte Ausführung)
2. Schleifen (Wiederholung)
3. Funktionen (Wiederholung)

Hinweis: Schon wenige Kontrollstrukturen reichen aus, um sehr viele Programme auszudrücken. Die formale Einordnung (Berechenbarkeit, Turing-Vollständigkeit) ist spannend, aber **nicht Kernstoff** dieses Kapitels.
Theoretisch ist es bereits ausreichend wenn eine Programmiersprache 

1. Variablen unterstützt, auf die wir einen konstanten Wert addieren oder subtrahieren können und
2. eine Wiederholung unterstützt, dessen Abbruchbedingung vor dem Eintritt in die Wiederholung unbekannt ist (``while``-Schleife)

Die Fallunterscheidung, lässt sich (in hässlicher Form) durch eine Schleife ausdrücken.

Für die konkrete Syntax und Anwendung dieser Kontrollstrukturen in ``Python`` verweisen wir auf das Kapitel [Kontrollstrukturen](sec-control-statements) im Teil **PYTHON**.

(sec-if-else)=
## Fallunterscheidungen

Die erste Kontrollstruktur realisiert die bedingte Ausführung, das bedeutet, eine bestimmte Sequenz von Anweisungen ``A1, ... ,An`` wird nur dann ausgeführt, wenn eine Bedingung ``B`` zutrifft.

Die Bedingung ``B`` kann nur zu wahr ``True`` oder falsch ``False`` ausgewertet werden.
Gewöhnlich hängt der Wahrheitswert der Bedingung vom Programmablauf ab, d.h., er ist erst zur Laufzeit bekannt.

Es gibt von diesen Fallunterscheidungen verschiedene Varianten, wobei diese lediglich syntaktischer Zucker sind.
Für ``Python`` besprechen wir alle Möglichkeiten im Teil **PYTHON** in [Fallunterscheidungen](sec-cases).

(sec-repetition-and-recursion)=
## Wiederholung

Das fundamentale Prinzip der *Wiederholung* ist zentraler Bestandteil der Programmierung.
Blicken wir in den Werkzeugkasten der Algorithmen so finden wir die Wiederholung überall.
Sortieralgorithmen, die Berechnung eines Gleichungssystems, das Verarbeiten eines Bildes, die Schaltflächen einer App, überall finden wir Schleifen, die unsere Informationen *iterativ* verarbeiten.

Nach der Definition eines Algorithmus muss dieser aus endlich vielen Anweisungen bestehen.
Wenn wir jedoch eine variable Menge an Information verarbeiten wollen, muss ein Algorithmus – abhängig von der Eingabe – unterschiedlich viele Schritte ausführen.
Das erreichen wir durch **Wiederholung**: Wir formulieren einen Teilablauf einmal und lassen ihn (konzeptionell) mehrfach laufen.

In der Praxis ist die Kombination aus **Fallunterscheidung** (Bedingung) und **Wiederholung** der Kern vieler Programme. Die theoretischen Hintergründe dazu sind optional und werden hier nicht weiter vertieft.

Nun haben Sie vielleicht die Hoffnung, Sie müssten nur die [Wiederholung](sec-repetition-and-recursion) und die [Fallunterscheidungen](sec-if-else) beherrschen und können dann jedes Problem lösen.
Leider sind diese beiden Techniken derart grundlegend, dass sie eine notwendige nicht aber ausreichende Bedingung für die Entwicklung von Algorithmen darstellen.
Wir können das mit der Sprache vergleichen.
Nur weil wir Laute von uns geben können, heißt das nicht, dass wir uns in jeder Sprache verständigen können.
Ein weiteres Beispiel wären die Naturwissenschaften.
Nur weil wir die kleinsten Teilchen im Universum verstehen, bedeutet dass nicht, dass wir damit das entstehen von Leben oder andere komplexe Übergängen erklären können.

Wir kennen zwei Arten von Wiederholungen:

1. Die [Iteration](sec-iteration) und 
2. die [Rekursion](sec-recursion).

Auf der konzeptionellen Ebene erscheinen Iteration und Rekursion grundverschieden -- es sind unterschiedliche Denkweisen.
Wir können rekursiv oder iterativ denken.

```{admonition} Iteration und Rekursion
:class: theorem
:name: theorem-iteration-and-recursion

Jede Rekursion kann in eine unbestimmte Iteration und jede (unbestimmte) Iteration in eine Rekursion umgewandelt werden.

```

Mit *unbestimmt* meinen wir, dass bevor die Iteration beginnt nicht bekannt ist, wie viele Wiederholungen nötig sind.

Manche Probleme lassen sich leichter rekursiv und andere leichter iterativ lösen bzw. durchdenken.
In manchen Fällen ist es beispielsweise sinnvoll eine rekursive Lösung zu entwickeln und diese dann in eine iterative umzuwandeln.

Für die konkrete Implementierung von Iterationen und Rekursionen in ``Python`` verweisen wir auf das Kapitel [Schleifen](sec-loops) und [Rekursion](sec-recursive-functions) im Teil **PYTHON**.

(sec-iteration)=
## Iteration

Wenn Sie Erfahrung im entwickeln von iterativen Algorithmen gesammelt haben und iterative Algorithmen analysiert und verwendet haben, dann werden Sie beginnen in Iterationen zu denken.
Sie werden beginnen in Iterationen von Iterationen von Iterationen zu denken.

Das wohl einfachste Beispiel für eine Iteration ist die Addition einer Menge von Zahlen.
Lassen Sie uns alle geraden Zahlen von ``2`` bis ``n`` addieren.
Hierzu brauchen wir eine Variable ``acc``, welche wir mit dem Wert ``0`` initialisieren und dann iterativ 2 dann 4, und so weiter addieren.

Die konkrete Syntax für Iterationen in ``Python`` (``for``- und ``while``-Schleifen) wird im Kapitel [Schleifen](sec-loops) behandelt.

(sec-recursion)=
#### Rekursion

Rekursion ist dieses scheinbar unverständliche Konzept, welches Mathematiker\*innen lieben und vor dem Programmierer\*innen anfänglich davonlaufen.
Derweil würden wir behaupten, dass die *rekursive Denkweise* uns Menschen näher ist als das Denken in Iterationen.
Rekursive Lösungen sind oft eleganter, kürzer, verständlicher aber leider auch langsamer als iterative Lösungen.
Die Rekursion hängt dabei stark mit der Induktion zusammen, siehe Abschnitt [vollständige Induktion](sec-induction).

Nehmen wir die Berechnung der Fakultät, einmal *iterativ*

$$\text{fac}_\text{it}(n) = n \cdot (n-1) \cdot (n-2) \cdot \ldots \cdot 1 = \prod\limits_{i=1}^n i$$

und einmal *rekursiv*

$$\text{fac}_\text{rec}(n) = \begin{cases} 1 & \text{ falls } n = 0\\ n \cdot \text{fac}_\text{rec}(n-1) & \text{ sonst}\end{cases}$$

Die Rekursion beinhaltet einen Selbstbezug, wohingegen die iterative Lösung diesen ausbreitet bzw. auflöst.
Betrachten wir die rekursive Lösung benötigen wir für die Berechnung lediglich die Multiplikation und den Selbstbezug - keine Schleife, und abgesehen von ``n``, nicht einmal eine Variable.

```{admonition} Rekursion
:name: def-recursion
:class: definition
Als *Rekursion* wird ein Vorgang bezeichnet, welcher sich selbst als Teil enthält oder mithilfe von sich selbst definierbar ist.
```

Für die konkrete Implementierung rekursiver Funktionen in ``Python`` verweisen wir auf das Kapitel [Rekursion](sec-recursive-functions) im Teil **PYTHON**.
