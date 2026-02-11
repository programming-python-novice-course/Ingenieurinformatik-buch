# Big picture

Sie haben in diesem Kapitel Datentypen kennengelernt und wie die Codierung von Zahlen und Text konkret umgesetzt wird.

Im Kapitel [Basiswissen](info-und-se) sind Sie bereits auf

- Zahlensysteme
- Datenstrukturen (Abstrakte Datenstrukturen und Speicherrepräsentationen)

gestoßen.

**Wie hängt das denn nun alles zusammen?**

Das wollen wir uns an einem Beispiel anschauen:

```{figure} ../../figs/07-python-data-types/overview.png
---
width: 100%
name: fig-python-data-types-overview
---
Überblick über die Datentypen in Python.
```

Die {numref}`Abbildung {number} <fig-python-data-types-overview>` zeigt, wie ein konkreter Wert (−13,25) von der mathematischen Bedeutung bis zur physikalischen Speicherung abgebildet wird.

```{list-table}
:header-rows: 1
:widths: 15 35 50

* - Ebene
  - Zentrale Frage
  - Beschreibung 
* - Mathematik
  - Was ist die Zahl?
  - Die „echte“ Zahl −13,25 – so wie wir sie aus der Mathematik kennen, ohne Begrenzung.
* - Datentyp
  - Wie soll das Programm sie verstehen?
  - Wir sagen dem Programm: „Das ist eine Gleitkommazahl (float).“
* - Repräsentationsmodell
  - Wie funktioniert eine Gleitkommazahl grundsätzlich?
  - Wir zerlegen die Zahl in Vorzeichen, Mantisse und Exponent (z. B. 1,10101 × 2³).
* - Codierung (Konzept)
  - Wie viele Bits bekommt welcher Teil?
  - Wir legen fest: 1 Bit für das Vorzeichen, 8 für den Exponent, 23 für die Mantisse.
* - Codierung (Wert)
  - Welche Bits repräsentieren genau diesen Wert?
  - Für −13,25 entsteht daraus z. B. die Bitfolge 11000001010101000000000000000000.
* - Speicherlayout
  - In welcher Reihenfolge liegen die Bytes im RAM?
  - Die 4 Bytes werden im Speicher z. B. als 00 00 54 C1 abgelegt (Little Endian).
```

Es ist wichtig, dass Sie die Konzepte und deren Umsetzungen voneinander unterscheiden können, denn Fehler können an jeder dieser Stellen passieren:

- mathematische Modellierung
- Wahl des Datentyps
- Standard (z. B. IEEE 754)
- konkrete Codierung
- Speicherlayout / Plattform


**Beispiel: Patriot-System 1991**

Im Patriot-System (1991) spielte ein Zeitinkrement von \(0{,}1\,\mathrm{s}\) eine zentrale Rolle.
In einem Computer muss dieser Wert jedoch als endliche Binärdarstellung gespeichert bzw. bei der Umrechnung verwendet werden.
\(0{,}1 = \frac{1}{10}\) besitzt in Basis 2 eine unendliche periodische Darstellung (weil im Nenner ein Faktor \(5\) vorkommt) und kann daher nur gerundet oder abgeschnitten werden.

Im Binärsystem sind nur Brüche der Form

$$
\frac{k}{2^n}
$$

in endlicher Stellenzahl exakt darstellbar.

Beispiele:

$$
0.5 = \frac{1}{2}, \qquad
0.25 = \frac{1}{4}, \qquad
0.125 = \frac{1}{8}
$$

Diese sind exakt darstellbar.

Aber:

$$
0.1 = \frac{1}{10}, \qquad
0.2 = \frac{1}{5}
$$

sind nicht exakt darstellbar, da ihre Nenner keine Zweierpotenzen sind.

- Solche Zahlen besitzen im Binärsystem eine unendliche periodische Darstellung und müssen daher gerundet oder (bei fester Wortbreite) abgeschnitten werden.
- Wird ein solcher Wert über lange Zeit sehr häufig weiterverwendet (z. B. bei wiederholter Zeit-Umrechnung oder als Zeitinkrement), kann sich der kleine Fehler aufsummieren. Dann entsteht mit der Zeit eine messbare Abweichung.


> Ursache: Der Fehler entsteht bei der Repräsentation/Codierung: Mit einer endlichen Anzahl an Bits kann 0,1 im Binärsystem nicht exakt dargestellt werden (es muss gerundet/abgeschnitten werden).

Reale Folge: 

- Zielposition wurde falsch berechnet. 
- 28 Soldaten starben.

```{admonition} Wichtig
:class: warning

Wenn Sie die Ebenen und die damit verbundenen Fehlerursachen nicht unterscheiden können,

- wiegen Sie sich in Sicherheit (Beispiel Patriot: „Die Software funktioniert logisch so wie ich das wollte“),
- suchen Sie am falschen Ort nach dem Fehler,
- interpretieren Sie Symptome statt Ursachen,
- oder finden den Fehler gar nicht (oder im besten Fall brauchen Sie dafür sehr lange).
```


```{admonition} Was Sie mitnehmen sollten ...
:class: tip

- Wissen, dass Zahlen im Computer endliche Repräsentationen sind.
- Wissen, dass es mehr als nur Datentyp und Bitfolge gibt.
- Konzeptionell verstehen, wie diese Ebenen zusammenhängen.

Denn nur dann können Sie technische Probleme systematisch analysieren – statt zufällig zu experimentieren bis es scheinbar (!!!) funktioniert.
```

```{figure} ../../figs/07-python-data-types/hydra-funny.png
---
width: 400px
name: fig-hydra-funny
---
```