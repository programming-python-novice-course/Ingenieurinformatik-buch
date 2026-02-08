---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

(sec-bit-operations)=
# Bitoperatoren (S)

Zur Vollständigkeit listen wir auch noch die sog. *Bitoperatoren* auf.
Diese manipulieren ganze Zahlen in ihrer [Binärdarstellung](sec-binary-numbers).

Erinnern Sie sich an den Abschnitt [Repräsentation](sec-representation)?
Dort haben wir beschrieben wie schlussendlich jeder Wert, egal ob Zahl, Zeichen, Bild, Ton als Binärcode im Speicher liegt.
*Bitoperatoren* nehmen diesen Binärwert und verarbeiten bzw. kombinieren ihn.
Dabei wird jedes [Bit](def-bit) des einen Werts mit dem Bit des anderen Werts kombiniert.
Unsere Gatter aus dem Abschnitt [Manipulation](sec-manipulation) bilden den Grundstock für eine derartige Verarbeitung.

``Python`` bietet uns an diese maschinennahen Operationen auf Zahlen anzuwenden.
Zum Beispiel, kombinieren wir mit ``5 & 4`` jedes Bit der Zahl ``5`` mit dem ``and`` der Zahl ``4``.
Dies nennen wir das *bitweise* UND.

```{code-cell} python3
5 & 4
```

Jedes Bit der Zahl $5_{10} = 0101_2$ und $4_{10} = 0100_2$ wird durch eine AND-Gatter gejagt.
Dies nennen wir auch *bitweises* UND der Binärzahlen $0101_2$ und $0010_2$:

```{math}
  \begin{split}
	  0101_2&\\
	  \land\ \ 0010_2&\\ \hline \hline
	  = 0100_2&=4_{10}
	\end{split}
```

Wenn Sie an dieser Stelle Probleme mit Binärzahlen haben, lesen sie Abschnitt [Zahlen im Binärsystem](sec-binary-numbers).
Folgende *bitweisen Operationen* stehen Ihnen in zur Verfügung:

| Operator | Beschreibung                                       | Beispiel | Ergebnis |
| :------: | :------------------------------------------------- | :------- | :------- |
| `x & y`  | UND von `x` mit `y`                                | `10 & 3` | `2`      |
| `x \| y`  | ODER von `x` mit `y`                               | `10 \| 3` | `11`     |
| `x ^ y`  | exklusives ODER von `x`  mit `y`                   | `10 ^ 3` | `9`      |
| `x << y` | Bitverschiebung von `x` um `y` Stellen nach links  | `8 << 3` | `64`     |
| `x >> y` | Bitverschiebung von `x` um `y` Stellen nach rechts | `8 >> 2` | `2`      |

Weshalb ist ``10 ^ 3`` gleich ``9``?
Die ``^``-Operation steht für das sog. *exklusive ODER* gesprochen *entweder oder*.
Das exklusive oder $x \oplus y$ ergibt 1 genau dann wenn *entweder* $x$ *oder* $y$ (nicht aber beide) gleich 1 sind.
Es gilt $10_{10} = 01010_2$ und $3_{10} = 00011_2$.

```{math}
  \begin{split}
	  01010_2&\\
	  \oplus\ \ 00011_2&\\ \hline \hline
	  = 01001_2&=9_{10}
	\end{split}
```

Für ganze Zahlen entspricht die Bitverschiebung um ein Bit nach links der Multiplikation mit 2.
Die Verschiebung um ein Bit nach rechts, hingegen der [ganzzahligen Division](sec-python-operator-arithmetic) mit 2.
Deshalb ist `8 << 3` gleich 

$$8 \cdot 2 \cdot 2 \cdot 2 = 8 \cdot 2^3 = 64$$

und ``8 >> 2`` gleich 

$$\left \lfloor{8 \cdot 2^{-2}}\right \rfloor = 2.$$
