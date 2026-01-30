# Codierung

Ein Computer arbeitet mit elektrischen Signalen, also physikalischen Zuständen.
Diese Zustände werden durch Milliarden von Transistoren gespeichert und über Bussysteme übertragen.
Ein Transistor kann dabei vereinfacht betrachtet zwei Zustände annehmen: *an* oder *aus*.



```{figure} ../../figs/03-computer-sciences-basics/digital-computer/representation/lamps.png
---
width: 200px
name: fig-lamps
---
Eine Lampe, die entweder aus (links) oder an (rechts) geschaltet sein kann.
```

Diese beiden Zustände werden üblicherweise durch die Zahlen **0** und **1** repräsentiert.
Damit entsteht eine Folge von Bits.

Alle Informationen, die ein Computer verarbeitet, liegen letztlich als solche Bitfolgen vor.
Für sich genommen haben diese Bitfolgen jedoch **keine Bedeutung**.

Erst durch eine **Codierung** wird festgelegt, wie eine bestimmte Folge von 0 und 1 zu interpretieren ist.


**Bedeutung entsteht durch Codierung**

Die gleiche Bitfolge kann – je nach Kontext – völlig unterschiedliche Bedeutungen haben.

Beispiel:  
Die Bitfolge `01000001` kann bedeuten:
- die Zahl **65** (numerische Codierung)
- den Buchstaben **"A"** (ASCII-Codierung)
- einen Farbwert in einem Bild
- einen Teil eines Maschinenbefehls

Welche Bedeutung gilt, wird **nicht durch die Bitfolge selbst**,  
sondern durch die verwendete **Codierung** festgelegt.


- **Zahlen**
  Wie Bitfolgen als numerische Werte interpretiert werden wird über numerische Codierungen festgelegt.

- **Text**  
  Zeichen werden über Zeichencodierungen (z. B. ASCII, UTF-8) auf Bitfolgen abgebildet.

- **Bilder**  
  Bilder bestehen aus Pixeln, deren Farbwerte numerisch codiert sind – also wiederum Zahlen.

- **Töne**  
  Schall wird abgetastet und als Folge numerischer Werte gespeichert – auch Töne werden letztlich als Zahlen dargestellt.

- ...



