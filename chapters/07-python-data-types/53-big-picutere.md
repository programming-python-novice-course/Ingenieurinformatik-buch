# Big picture


Sie haben in diesem Kapitel Datentypen kennengelernt und wie die Codierung von Zahlen und Text konkret umgesetzt wird.
Im Kapitel [Basiswissen](info-und-se) sind Sie bereits auf
- Zahlensysteme
- Datenstrukturen (Abstrakte Datenstrukturen und Speicherrepräsentationen)
gestoßen.


> Wie hängt das denn nun alles zusammen? 

Das wollen wir uns an einem Beispiel anschauen:


```{figure} ../../figs/07-python-data-types/overview.png
---
width: 100%
name: fig-python-data-types-overview
---
Überblick über die Datentypen in Python.
```


Die Abb ref fig-python-data-types-overview zeigt wie ein konkreter Wert (−13,25) von der mathematischen Bedeutung bis zur physikalischen Speicherung abgebildet wird. 

- Semantik (blau): Oben steht die Zahl als Objekt der Mathematik (−13,25 ∈ ℝ). Darunter kommt der Datentyp `float`: Er sagt, wie ein Programm diese Speicherstelle verstehen und mit ihr rechnen will (Wertebereich, Rundung, Sonderwerte).
- Repräsentationsmodell (weiß, mittig/übergreifend): Das verbindet Semantik und Vertrag. Dieselbe Zahl wird als normalisierte Binär-Notation gedacht (1,10101 × 2³) und als Interpretationsregel formuliert (wie Sign/Exponent/Mantisse zusammen eine Zahl bedeuten). Das ist die „Bedeutung der Bits“ in mathematischer Form.
- Spezifikation/Vertrag (orange): Die Codierung-Vorgabe legt fest, dass `float` hier als IEEE-754 Single Precision (32 Bit) umgesetzt wird, inklusive Aufteilung in Sign/Exponent/Mantisse.
- Implementierung (grün): Aus dem Vertrag entsteht für den konkreten Wert die konkrete Bitfolge (inkl. Hex). Danach wird gezeigt, wie diese Bits als Bytes im RAM liegen (Little Endian). Ganz unten ist die Hardware als letzte Träger-Schicht gemeint.


## Warum ist das wirklich kritisch?


Wer diese Zusammenhänge nicht versteht,
vertraut Simulationen blind,
unterschätzt numerische Risiken,
und verliert Kontrolle über technische Systeme.
Und:
Probleme können nur gelöst werden, wenn ihre Ursachen verstanden werden.
Wie die Grafik zeigt, gibt es mehrere Ebenen, auf denen Fehler entstehen können:
mathematische Modellierung
Wahl des Datentyps
Standard (z. B. IEEE 754)
konkrete Codierung
Speicherlayout / Plattform

> Ein Fehler kann auf jeder dieser Ebenen entstehen!


**Beispiel: Patriot-System 1991**

Der Zeitwert (z.B. 0.1s, 0.2s, 0.3s) konnte im Binärsystem nicht exakt dargestellt werden,
weil er als Bruch wie $\frac{1}{10}$ gespeichert wird – 
und $10$ ist keine Zweierpotenz!

Im Binärsystem sind nur Brüche der Form

$$
\frac{k}{2^n}
$$

exakt darstellbar.

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

Solche Zahlen besitzen im Binärsystem eine unendliche periodische Darstellung und müssen daher gerundet werden.
Wird ein solcher Wert sehr häufig weiterverwendet (z.B. als Zeitinkrement),
akkumuliert sich der Rundungsfehler.

Reale Folge: Zielposition wurde falsch berechnet. 28 Soldaten starben.
Das war kein Logikfehler ("Bug") in der Programmierung!!!
Es war ein Repräsentationsproblem!!!
Die gewählte Zahlendarstellung konnte den Wert nicht exakt speichern!!

## Warum sprechen wir darüber??

Wenn Sie die Ebenen und die damit verbundenen Fehlerursachen nicht unterscheiden können,
wiegen Sie sich in Sicherheit (Beispiel Patriot - "Der Software funktioniert logisch so wie ich das wollte") oder sie suchen 
am Fehler am falschen Ort,
interpretieren Symptome statt Ursachen,
oder finden den Fehler gar nicht (oder im besten Fall brauchen Sie dafür sehr, sehr lange!!)



```{admonition} Was Sie mitnehmen sollten
:class: tip

- Wissen, dass Zahlen im Computer Repräsentationen sind.
- Wissen, dass es mehr als nur Datentyp und Bitfolge gibt.
- Konzeptionell verstehen, wie diese Ebenen zusammenhängen.

Denn nur dann können Sie technische Probleme systematisch analysieren – statt zufällig zu experimentieren.
```