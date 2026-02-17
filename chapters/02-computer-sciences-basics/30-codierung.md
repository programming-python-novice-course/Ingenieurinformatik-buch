(sec-cod-zahlen)=
# Codierung und Zahlensysteme

Ein Computer arbeitet mit elektrischen Signalen, also physikalischen Zuständen.
Diese Zustände werden durch Milliarden von Transistoren gespeichert und über Bussysteme übertragen.
Ein Transistor kann (vereinfacht) zwei Zustände ausgeben: *an* oder *aus*.



```{figure} ../../figs/02-computer-sciences-basics/digital-computer/representation/lamps.png
---
width: 200px
name: fig-lamps
---
Eine Lampe, die entweder aus (links) oder an (rechts) geschaltet sein kann.
```

- Für einen Computer sind das zunächst nur unterscheidbare Zustände. 
- Damit man damit rechnen und sie speichern kann, werden sie als **0** und **1** notiert. 
- Aus vielen solchen Notationen entstehen Bitfolgen.


```{admonition} Definition: Bit
:class: def-sample

Ein **Bit** (binary digit) ist die kleinste Informationseinheit in einem Computer.
Es kann genau zwei Werte annehmen: **0** oder **1** (entspricht zwei unterscheidbaren Zuständen, z. B. aus/an).
```

- Alle Informationen, die ein Computer verarbeitet, liegen letztlich als Bitfolgen vor.
- Für sich genommen haben Bitfolgen keine Bedeutung. 
- Eine Codierung legt fest, wie eine Bitfolge zu interpretieren ist.

```{admonition} Merksatz
::class: tip

Merksatz: Ohne Codierung ist eine Bitfolge nur eine Folge von 0 und 1.
```

Die gleiche Bitfolge kann – je nach Kontext – völlig unterschiedliche Bedeutungen haben.

Beispiel: Die Bitfolge `01000001` kann bedeuten:

- die Zahl 65 (numerische Codierung)
- den Buchstaben "A" (ASCII-Codierung)
- einen Farbwert in einem Bild
- einen Teil eines Maschinenbefehls

Welche Bedeutung gilt, wird durch die verwendete Codierung festgelegt. Typische Codierungsarten sind:

- Zahlen: Bitfolgen werden durch numerische Codierungen als Zahlen interpretiert.
- Text: Zeichen werden über Zeichencodierungen (z. B. ASCII, UTF-8) auf Bitfolgen abgebildet.
- Bilder: Bilder bestehen aus Pixeln, deren Farbwerte numerisch codiert sind, also wiederum Zahlen.
- Töne: Schall wird abgetastet und als Folge numerischer Werte gespeichert, also ebenfalls als Zahlen dargestellt.



