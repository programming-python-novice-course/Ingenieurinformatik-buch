
# Zahlen (S)

Für Zahlen gibt es verschiedene Codierungsverfahren, die je nach Art der Zahl unterschiedlich sind.

## Ganze Zahlen (natürliche Zahlen)

Ganze Zahlen wie z.B. die dezimale $13_{10}$ lassen sich als Bitfolge darstellen, indem wir die Zahl in das Binärsystem umrechnen.
In diesem einfachen Fall nutzen wir das Binärsystem als **Zahlensystem** - wir stellen die Zahl $13_{10}$ als $1101_2$ dar.

Eine Binärzahl $b_{n-1} \ldots b_0$ mit $b_i \in \{0,1\}$ hat den Wert

$$b_{n-1} \cdot 2^{n-1} + \ldots + b_0 \cdot 2^0 = \sum\limits_{i=0}^{n-1} b_i \cdot 2^i.$$

Zum Beispiel hat $1101_2$ den Wert

$$1 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 = 8 + 4 + 0 + 1 = 13_{10}.$$

Hierbei handelt es sich um einen direkten **Zahlensystemwechsel** - keine spezielle Codierung im eigentlichen Sinne.
Die **Codierung** besteht lediglich darin, dass wir festlegen: "Diese Bitfolge wird als Binärzahl interpretiert."

Für Details zur Umrechnung zwischen Dezimal- und Binärsystem siehe das Kapitel [Zahlensysteme](../02-computer-sciences-basics/32-zahlensysteme.md).

## Negative Zahlen (Zweierkomplement)

Für die Darstellung von **negativen ganzen Zahlen** wird in Computern das **Zweierkomplement** verwendet.
Hierbei handelt es sich um eine **Codierung**, die festlegt, wie Bitfolgen als negative Zahlen interpretiert werden.

Das höchste Bit wird dabei nicht als einfaches Vorzeichenbit, sondern als negativer Anteil interpretiert.

Im *Zweierkomplement* wird eine Zahl $b_{n-1} \ldots b_0$ wie folgt interpretiert:

```{math}
:label: eq:binary:integer
  b_{n-1} \ldots b_0 = -b_{n-1} \cdot 2^{n-1} + \sum\limits_{i=0}^{n-2} b_i \cdot 2^i.
```

**Beispiel für 8-Bit-Zahlen:**
- $0$-$127$: positive Zahlen (höchstes Bit = 0)
- $128$-$255$: negative Zahlen im Zweierkomplement (höchstes Bit = 1)

So kann mit 8 Bits der Bereich von $-128$ bis $+127$ dargestellt werden.

**Beispiele:**
- $1011_2$ (4 Bits) = $-2^3 \cdot 1 + 2^2 \cdot 0 + 2^1 \cdot 1 + 2^0 \cdot 1 = -8 + 2 + 1 = -5_{10}$
- $111_2$ (3 Bits) = $-2^2 \cdot 1 + 2^1 \cdot 1 + 2^0 \cdot 1 = -4 + 2 + 1 = -1_{10}$

```{admonition} Hinweis: Zweierkomplement
:class: note

Das Zweierkomplement ist eine **Codierung**, die festlegt, wie Bitfolgen als negative Zahlen interpretiert werden.
Es ist mehr als nur ein Zahlensystem - es definiert eine spezielle Interpretation von Bitfolgen für negative Werte.

Für detaillierte Informationen über das Zweierkomplement, die Umrechnung zwischen positiven und negativen Zahlen sowie Addition und Subtraktion im Binärsystem siehe das Kapitel [Zahlensysteme](../02-computer-sciences-basics/32-zahlensysteme.md).
```

## Gleitkommazahlen (IEEE 754)

Für Zahlen mit Nachkommastellen (z.B. $3.14$ oder $0.0000000001$) reicht ein einfacher Zahlensystemwechsel nicht aus. Hier ist eine spezielle **numerische Codierung** erforderlich, die festlegt, wie das Komma, die Nachkommastellen und Rundungen repräsentiert werden.

Der Standard für die Codierung von Gleitkommazahlen ist **IEEE 754** (Institute of Electrical and Electronics Engineers Standard 754). Dieser Standard legt fest, wie Fließkommazahlen im Computer gespeichert werden.

Gleitkommazahlen werden nach dem IEEE 754-Standard codiert, indem die Zahl in drei Komponenten aufgeteilt wird:

1. **Vorzeichenbit**: Bestimmt, ob die Zahl positiv (0) oder negativ (1) ist
2. **Exponent**: Bestimmt die Größenordnung der Zahl (wo das Komma steht)
3. **Mantisse** (auch Signifikand): Enthält die signifikanten Ziffern der Zahl

Die Idee ist ähnlich der wissenschaftlichen Schreibweise: Eine Zahl wie $1234.56$ kann als $1.23456 \times 10^3$ geschrieben werden. Im Binärsystem funktioniert dies analog mit Potenzen von 2.

In Python werden Fließkommazahlen (``float``) nach dem IEEE 754-Standard mit **64 Bits** (8 Bytes) gespeichert:

- **1 Bit** für das Vorzeichen
- **11 Bits** für den Exponenten
- **52 Bits** für die Mantisse

Diese Aufteilung ermöglicht es, sowohl sehr kleine Zahlen (z.B. $0.0000000001$) als auch sehr große Zahlen (z.B. $10000000.0$) mit der gleichen Anzahl von Bits darzustellen, indem die Position des "Kommas" (genauer: des Binärpunkts) durch den Exponenten verschoben wird.


**Rundungsfehler**: Aufgrund der begrenzten Anzahl von Bits können nicht alle Dezimalzahlen exakt als Gleitkommazahlen dargestellt werden. Dies führt zu Rundungsfehlern, die bei Berechnungen auftreten können.

**Beispiel:**
```python
0.1 + 0.2 == 0.3  # False!
```

Dies liegt daran, dass $0.1$ im Binärsystem eine periodische Zahl ist und nicht exakt dargestellt werden kann. Für die meisten praktischen Anwendungen sind diese Rundungsfehler jedoch vernachlässigbar klein.

**Genauigkeit**: Mit 64 Bits können etwa 15-17 signifikante Dezimalstellen dargestellt werden. Für die meisten technischen Berechnungen ist dies ausreichend.

