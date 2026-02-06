(sec-computer-basics)=

# Computer (S)

Ein *Computer* ist die konkrete technische Realisierung eines **Informationsverarbeitungssystems** (Hardware + Software). Um Programme zu verstehen (und später selbst zu schreiben), hilft es, ein klares Modell davon zu haben, **wie** ein Computer Informationen einliest, speichert, verarbeitet und ausgibt.


Alle Computer basieren auf diesen vier grundlegenden Aufgaben:

1. Informationen **einlesen**
2. Informationen **speichern**
3. Informationen **verarbeiten**
4. Informationen **ausgeben**

Sie bilden das Fundament eines jeden Computers.
Die Verarbeitung von [Information](sec-information) wird symbolisch vollzogen, d.h. Computer manipulieren auf Grundlage von bestimmten Regeln die Symbole der Eingabe um die Symbole der Ausgabe zu bestimmen.

```{admonition} EVA-Prinzip
:class: remark
:name: remark-eva
Der Computer basiert auf dem sog. *EVA-Prinzip* (**Eingabe**, **Verarbeitung** und **Ausgabe**).
```

Ein Computer erweitert das EVA-Prinzip um den **Speicher** und damit um einen **Zustand**.
Wäre der Computer zustandslos würde er bei gleicher **Eingabe** $x$ auch stets die gleiche **Ausgabe** $y$ erzeugen.
Durch den Speicher kann sich, je nach Eingabe, der Zustand $z$ des Computers verändern und, je nach seinem Zustand, kann dieselbe Eingabe zu unterschiedlichen Ausgaben führen.

```{figure} ../../figs/02-computer-sciences-basics/digital-computer/basics/dfa.png
---
width: 600px
name: fig-dfa
---
Ein Modell eines Computers mit 4 Zuständen. 
Der Computer befindet sich in Zustand $z = z_1$ (rot).
Die Ausgabe $y$ hängt von der Eingabe $x$ als auch vom aktuellen Zustand $z$ (hier $ = z_1$) des Computers ab.
Während der Berechnung der Ausgabe verändert der Computer seinen Zustand auf $g(z, x)$.
$f$ und $g$ sind mathematische Funktionen.
```

Über *Eingabegeräte* (z.B. Tastatur, Maus, Sensoren) werden Informationen in eine Folge von zwei Zuständen (0 und 1) transformiert und im Speicher abgelegt.
Der Prozessor **ließt** diese digitalen Informationen aus dem Speicher, **manipuliert** sie durch das Abarbeiten eines [Algorithmus](def-algorithm) und **schreibt** die veränderte Information zurück in den Speicher.
Die verarbeitete Information wird schließlich durch *Ausgabegeräte* (z.B. Monitor, Lautsprecher) **ausgegeben**, die die Folge von 0 und 1 in Bilder, Ton und andere Formate umwandeln.



```{admonition} Informationskreislauf
::name: def-information-cycle
::class: definition
Der *Informationskreislauf* beschreibt den grundlegenden Ablauf der Informationsverarbeitung in einem Computer: **Eingabe** (Input) → **Verarbeitung** (Processing) → **Ausgabe** (Output). Häufig wird der Kreislauf um **Speichern** (Storage) ergänzt, weil Daten und Programme zwischengespeichert, wiederverwendet und weiterverarbeitet werden.
```

Im folgenden sehen wir uns wie ein Computer aufgebaut sein muss um die vier grundlegenden Aspekte der *Informationsverarbeitung* durchführen zu können.
