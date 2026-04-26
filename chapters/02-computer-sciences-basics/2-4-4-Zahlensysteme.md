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

# Zahlensysteme

```{admonition} Eigenstudium
:class: note

Dieser Abschnitt ist für das Eigenstudium gedacht. Jede Umrechnungsrichtung ist gleich aufgebaut: **Theorie** – **Kochrezept** – **Aufgabe**. Lösen Sie die Aufgaben zuerst **selbst von Hand**, bevor Sie die Lösung im Dropdown öffnen oder die Verifikations-Code-Zellen ausführen. Es ist kein Hexenwerk – Sie wenden einfach nur die Rezepte an.
```

**Wiederholung**

Im vorherigen Abschnitt haben wir gesehen, dass es möglich ist, Zahlen unterschiedlich darzustellen.

Beispiel: Zahl "dreizehn"

- **13** im Dezimalsystem (Basis 10, Alltagsschreibweise) - das verwenden wir im Alltag, wenn wir von der Zahl 13 sprechen
- **1101** im Binärsystem (Basis 2)
- **D** im Hexadezimalsystem (Basis 16)

Alle drei Zahlensysteme sind **Stellenwertsysteme**. Das bedeutet, dass der Wert einer Ziffer von ihrer Position abhängt.

```{admonition} Notation verschiedener Zahlensysteme
:class: remark
:name: remark-number-systems-notation
Um der Verwirrung vorzubeugen notieren wir eine Zahl $k$, geschrieben in der Dezimaldarstellung, auch durch $k_{10}$
und eine Zahl $b$ in der Binärdarstellung durch $b_2$.
```

## Zahlen im Binärsystem

Werfen wir einen genaueren Blick aufs *Binärsystem*, auch *binäres Zahlensystem* genannt.
Um Zahlen mit **Strom an** und **Strom aus**, also den zwei Zuständen einer Lampe/Transistors/*Bit* zu repräsentieren, verwenden Computer das *Binärsystem*.

### Natürliche Zahlen

In dem für Sie intuitiven *Dezimalsystem* schreiben wir eine Zahl mit den Ziffern $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$ und verwenden eine Basis von $10$. 
Zum Beispiel ist $1871$ gleich

$$1 \cdot 10^3 + 8 \cdot 10^2 + 7 \cdot 10^1 + 1 \cdot 10^0.$$

Die Zahl, beschrieben als Folge von Ziffern $d_{n-1} \ldots d_0$ mit $d_i \in \{0,1,2,3,4,5,6,7,8,9\}$, hat den Wert

```{math}
:label: eq:decimal:natural
d_{n-1} \ldots d_0 
= d_{n-1} \cdot 10^{n-1} + \ldots + d_0 \cdot 10^0 
= \sum\limits_{i=0}^{n-1} d_i \cdot 10^i.
```

Im *Binärsystem* verwenden wir hingegen lediglich die Ziffern $0, 1$ und die Basis $2$.
Eine Zahl als Folge von Ziffern $b_{n-1} \ldots b_0$ mit $b_i \in \{0,1\}$ hat den Wert

```{math}
:label: eq:binary:natural
    b_{n-1} \ldots b_0 
    = b_{n-1} \cdot 2^{n-1} + \ldots + b_0 \cdot 2^0
    = \sum\limits_{i=0}^{n-1} b_i \cdot 2^i.
```

Zum Beispiel hat $1101_2$ den Wert

$$1 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 = 8 + 4 + 0 + 1 = 13_{10}.$$

$1101_2$ (binär) und $13_{10}$ (dezimal) repräsentieren den gleichen numerischen Wert, lediglich ihre Darstellung---ihr Repräsentant---ist ein anderer.

### Binär → Dezimal

**Theorie:** Eine Binärzahl lässt sich in Dezimal umwandeln, indem man jede Stelle mit ihrer Stellenwertigkeit $2^i$ multipliziert und die Produkte addiert (vgl. Gleichung {eq}`eq:binary:natural`).

**Kochrezept**

**Gegeben:** Binärzahl (nur 0 und 1)  
**Gewollt:** Dezimalzahl

**Algorithmus:**

1. **Die Stellen von rechts beginnend nummerieren** (rechts: Index 0, dann 1, 2, …).

   Bei $1101_2$:
   ```{math}
   \begin{array}{cccc}
   1 & 1 & 0 & 1 \\
   3 & 2 & 1 & 0 \quad \text{(Index } i \text{)}
   \end{array}
   ```

2. **Stelle $i$ hat die Stellenwertigkeit $2^i$** (also $2^0=1$, $2^1=2$, $2^2=4$, …).

   Bei $1101_2$:
   ```{math}
   \begin{array}{cccc}
   1 & 1 & 0 & 1 \\
   8 & 4 & 2 & 1 \quad (2^3, 2^2, 2^1, 2^0)
   \end{array}
   ```

3. **Für jede Ziffer: Ziffer $\times$ Stellenwertigkeit; alle Produkte addieren.**

   Bei $1101_2$: $1 \cdot 8 + 1 \cdot 4 + 0 \cdot 2 + 1 \cdot 1 = 8 + 4 + 0 + 1 = 13_{10}$

**Ergebnis:** $1101_2 = 13_{10}$

**Aufgabe**

```{exercise} Binär → Dezimal
:label: binary-to-decimal-exercise
Wandeln Sie die folgenden Binärzahlen in Dezimalzahlen um:

1. $10110_2$
2. $111111_2$
3. $1000011_2$
```

```{solution} binary-to-decimal-exercise
:label: binary-to-decimal-solution
:class: dropdown
1. $10110_2 = 1 \cdot 16 + 0 \cdot 8 + 1 \cdot 4 + 1 \cdot 2 + 0 \cdot 1 = 22_{10}$
2. $111111_2 = 32 + 16 + 8 + 4 + 2 + 1 = 63_{10}$
3. $1000011_2 = 64 + 0 + 0 + 0 + 0 + 2 + 1 = 67_{10}$
```

```{admonition} Lösung überprüfen
:class: tip
Führen Sie die folgende Code-Zelle aus (Live Code aktivieren, dann „Run“), um Ihre Ergebnisse zu überprüfen.
```

```{code-cell} python3
:tags: [skip-execution]

# Ihre Ergebnisse: 10110₂ = ?, 111111₂ = ?, 1000011₂ = ?
print("Binär → Dezimal:")
print("  10110₂   =", int("10110", 2))
print("  111111₂  =", int("111111", 2))
print("  1000011₂ =", int("1000011", 2))
```

```{admonition} Optional
:class: note
Die folgende Code-Zelle zeigt die Umsetzung des Kochrezepts in Python – für alle, die den Algorithmus im Programmcode nachvollziehen möchten.
```

```{code-cell} python3
# Transformation einer Zahl in Binärdarstellung zu ihrer Dezimaldarstellung
def to_decimal(binary_number):
    decimal_number = 0
    i = len(binary_number)-1
    for bit in binary_number:
        decimal_number += bit * 2**i
        i += -1
    return decimal_number
# Zahl in Binärdarstellung 111 0100 1111 wird umgewandelt
to_decimal([1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1])
```

### Dezimal → Binär

**Theorie:** Um eine Dezimalzahl in Binär umzuwandeln, teilt man wiederholt durch 2 und notiert die Reste. Die Binärzahl ergibt sich, indem man die Reste von unten nach oben liest.

**Kochrezept**

**Gegeben:** Dezimalzahl  
**Gewollt:** Binärzahl (nur 0 und 1)

**Algorithmus:**

1. **Zahl durch 2 teilen, Rest notieren.**

   Bei $9_{10}$: $9 = 4 \cdot 2 + \mathbf{1}$ (Rest 1)

2. **Mit dem Quotienten wiederholt von Schritt 1, bis der Quotient 0 ist.**

   Bei $9_{10}$:
   ```{math}
   \begin{split}
   9 &= 4 \cdot 2 + 1 \\
   4 &= 2 \cdot 2 + 0 \\
   2 &= 1 \cdot 2 + 0 \\
   1 &= 0 \cdot 2 + 1
   \end{split}
   ```
   Die Reste (rechts): 1, 0, 0, 1

3. **Die Reste von unten nach oben lesen** – das ergibt die Binärzahl.

   Bei $9_{10}$: Reste 1, 0, 0, 1 (von unten) → $1001_2$

**Ergebnis:** $9_{10} = 1001_2$

**Aufgabe**

```{exercise} Dezimal → Binär
:label: decimal-to-binary-exercise
Wandeln Sie die folgenden Dezimalzahlen in Binärzahlen um:

1. $42_{10}$
2. $100_{10}$
3. $255_{10}$
```

```{solution} decimal-to-binary-exercise
:label: decimal-to-binary-solution
:class: dropdown
1. $42_{10} = 101010_2$ (42 = 2·21+0, 21 = 2·10+1, 10 = 2·5+0, 5 = 2·2+1, 2 = 2·1+0, 1 = 2·0+1 → Reste von unten: 101010)
2. $100_{10} = 1100100_2$
3. $255_{10} = 11111111_2$
```

```{admonition} Lösung überprüfen
:class: tip
Führen Sie die folgende Code-Zelle aus, um Ihre Ergebnisse zu überprüfen.
```

```{code-cell} python3
:tags: [skip-execution]

# Ihre Ergebnisse: 42₁₀ = ?, 100₁₀ = ?, 255₁₀ = ?
print("Dezimal → Binär:")
print("  42₁₀  =", format(42, "08b"), "=", format(42, "b") + "₂")
print("  100₁₀ =", format(100, "08b"), "=", format(100, "b") + "₂")
print("  255₁₀ =", format(255, "08b"), "=", format(255, "b") + "₂")
```

```{admonition} Optional
:class: note
Die folgende Code-Zelle zeigt die Umsetzung des Kochrezepts in Python – für alle, die den Algorithmus im Programmcode nachvollziehen möchten.
```

```{code-cell} python3
# Transformation einer Zahl in Dezimaldarstellung zu ihrer Binärdarstellung
def to_binary(number):
    binary_number = []
    while number != 0:
        r = number % 2
        number = number // 2
        binary_number = [r] + binary_number
    return binary_number
# Zahl in Dezimaldarstellung wird umgewandelt
to_binary(1871)
```

(sec-integers)=
### Ganze Zahlen

Uns steht kein Minus- oder Pluszeichen zur Verfügung.
Alles was der Computer kennt sind [Bits](def-bit) und [Bytes](def-byte). 
Wollen wir also anstatt der natürlichen Zahlen die ganzen Zahlen repräsentieren, müssen wir das Vorzeichen irgendwie codieren.

Für die Darstellung von **negativen ganzen Zahlen** wird in Computern das **Zweierkomplement** verwendet.
Das höchste Bit wird dabei nicht als einfaches Vorzeichenbit, sondern als negativer Anteil interpretiert.

````{admonition} Komplement einer Bitfolge
:name: def-complement
:class: definition
Das *Komplement* einer Bitfolge $b_{n-1} \ldots b_0$, geschrieben als

```{math}
\overline{b_{n-1} \ldots b_0},
```

erhalten wir indem wir jedes Bit, mit dem Wert $0$, mit einem Bit, mit dem Wert $1$, und jedes Bit, mit dem Wert $1$, mit einem Bit, mit dem Wert $0$, ersetzen.
````

Im *Zweierkomplement* wird eine Zahl $b_{n-1} \ldots b_0$ wie folgt interpretiert:

```{math}
:label: eq:binary:integer
  \begin{split}
    b_{n-1} \ldots b_0 &= -b_{n-1} \cdot 2^{n-1} + b_{n-2} \cdot 2^{n-2} + \ldots + b_0 \cdot 2^0\\
    &= -b_{n-1} \cdot 2^{n-1} + \sum\limits_{i=0}^{n-2} b_i \cdot 2^i.
  \end{split}
```

**Beispiele:**
- $1011_2$ (4 Bits) = $-2^3 \cdot 1 + 2^2 \cdot 0 + 2^1 \cdot 1 + 2^0 \cdot 1 = -8 + 2 + 1 = -5_{10}$
- $111_2$ (3 Bits) = $-2^2 \cdot 1 + 2^1 \cdot 1 + 2^0 \cdot 1 = -4 + 2 + 1 = -1_{10}$

**Beispiel für 8-Bit-Zahlen:**
- 0-127: positive Zahlen (höchstes Bit = 0)
- 128-255: negative Zahlen im Zweierkomplement (höchstes Bit = 1)

So kann mit 8 Bits der Bereich von $-128$ bis $+127$ dargestellt werden.

Dieses System macht es uns einfach, eine Zahl $k$ in eine Zahl $-k$ umzuwandeln.
Sei $b_{n-1} \ldots b_0$ eine solche Zahl in Binärdarstellung, so ist ihr [Komplement](def-complement) plus $1$, also

```{math}
\overline{b_{n-1} \ldots b_0} + 1
```

gleich $-k$.
Dies gilt sowohl für positive wie auch negative Zahlen $k$. 

**Beispiel:**
- $5_{10} = 0101_2$ (4 Bits) und $\overline{0101}_2 + 1_2 = 1010_2+1_2 = 1011_2 = -5_{10}$
- $\overline{1011}_2 + 1_2 = 0100_2 + 1_2 = 0101_2 = 5_{10}$

### Addieren (und Subtrahieren)

Um mit dem *Zweierkomplement* rechnen zu können müssen wir die Anzahl der Bits fixieren, das heißt, alle Zahlen der Rechnung werden durch gleich viele Bits repräsentiert.
Verwenden wir 5 Bits so ist $00011_2 = 3_{10}$ und $10011_2 = -13_{10}$.
Erzeugen wir einen Überlauf, d. h., bräuchten wir mehr Bits als vorhanden, so werden die höchsten Bits einfach weggelassen.

Mit diesen Annahmen funktioniert die Addition genauso wie Sie es im Dezimalsystem gewohnt sind, wobei $1_2 + 1_2 = 10_2$ mit dem *Übertrag* $1$ ergibt.

**Beispiel: Addition zweier positiver Zahlen**

Addieren wir die zwei 5-Bit Zahlen $00011_2 = 3_{10}$ und $00111_2 = 7_{10}$:

```{math}
  \begin{split}
	  00011_2&\\
	  +\ \ 00111_2&\\ \hline
	  = 01010_2&=10_{10}
	\end{split}
```

**Beispiel: Überlauf**

Benötigt das Ergebnis mehr Bits als zu Verfügung stehen, kommt es zu einem *Überlauf*.

Addieren wir beispielsweise die zwei 5-Bit Zahlen $01011_2 = 11_{10}$ und $00111_2 = 7_{10}$ ergibt dies $010010_2 = 18_{10}$.
Doch diese Zahl benötigt 6 Bits.
Abgeschnitten ergibt dies deshalb $10010_2 = -14_{10}$.
Dies ist ein **unerwünschter Überlauf**!

Durch das *Zweierkomplement* können wir auch negative Zahlen wie gewohnt addieren.
Addieren wir beispielsweise $01011_2 = 11_{10}$ und $11111_2 = -1_{10}$ (5 Bits):

```{math}
  \begin{split}
	  01011_2&\\
	  +\ \ 11111_2&\\ \hline
	  = 101010_2&
	\end{split}
```

Schneiden wir den Überlauf weg, so ergibt dies $01010_2 = 10_{10}$.
Dies ist ein **erwünschter Überlauf**!

Die Subtraktion $a - b$ zweier ganzer Zahlen $a, b$ lässt sich auf die Addition $a + (-b)$ zurückführen.

```{exercise} Erwünschter und unerwünschter Überlauf
:label: useful-and-useless-overflow-exercise
In welchen Fällen kann es zu einem unerwünschten Überlauf bei der Addition zweier $n$-Bit Binärzahlen kommen?
```

```{solution} useful-and-useless-overflow-exercise
:label: useful-and-useless-overflow-solution
:class: dropdown
Ein unerwünschter Überlauf kann nur dann eintreten wenn entweder beide Zahlen positiv sind oder aber beide Zahlen negativ sind.
```

```{exercise} Addition und Subtraktion von Binärzahlen
:label: binary-addition-substraction-exercise
Berechnen Sie das Ergebnis 4-Bit-Ergebnis folgender 4-Bit-Zahlen:

1. $0101_2 + 1001_2$
2. $0111_2 + 0001_2$
3. $0011_2 + 0100_2$
4. $1100_2 + 0111_2$
```

```{solution} binary-addition-substraction-exercise
:label: binary-addition-substraction-solution
:class: dropdown
Die Addition dieser Zahlen ergibt:

1. $0101_2 + 1001_2 = 1110_2 = -2_{10} = 5_{10} + (-7_{10})$
2. $0111_2 + 0001_2 = 1000_2 = -8_{10} = 7_{10} + 1_{10}$ (unerwünschter Überlauf)
3. $0011_2 + 0100_2 = 0111_2 = 7_{10} = 3_{10} + 4_{10}$
4. $1100_2 + 0111_2 = 0011_2 = 3_{10} = -4_{10} + 7_{10}$ (erwünschter Überlauf)

```

## Hexadezimalsystem

Das **Hexadezimalsystem** (Basis 16) verwendet die Ziffern $0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F$, wobei $A=10$, $B=11$, $C=12$, $D=13$, $E=14$, $F=15$.

Eine Hexadezimalzahl $h_{n-1} \ldots h_0$ hat den Wert

```{math}
h_{n-1} \ldots h_0 = \sum\limits_{i=0}^{n-1} h_i \cdot 16^i.
```

### Dezimal → Hexadezimal

**Theorie:** Analog zu Dezimal → Binär: Wiederholt durch 16 teilen, Reste notieren. Reste 10–15 als A–F.

**Kochrezept**

**Gegeben:** Dezimalzahl  
**Gewollt:** Hexadezimalzahl (Ziffern 0–9, A–F)

**Algorithmus:**

1. **Zahl durch 16 teilen, Rest notieren** (10–15 als A–F).

   Bei $255_{10}$: $255 = 15 \cdot 16 + \mathbf{15}$ (Rest 15 = F)

2. **Mit dem Quotienten wiederholt von Schritt 1, bis der Quotient 0 ist.**

   Bei $255_{10}$:
   ```
   255 ÷ 16 = 15  Rest: 15 (= F)
    15 ÷ 16 =  0  Rest: 15 (= F)
   ```
   Die Reste (rechts): F, F

3. **Die Reste von unten nach oben lesen** – das ergibt die Hexadezimalzahl.

   Bei $255_{10}$: Reste F, F (von unten) → $FF_{16}$

**Ergebnis:** $255_{10} = FF_{16}$

**Aufgabe**

```{exercise} Dezimal → Hexadezimal
:label: decimal-to-hex-exercise
Wandeln Sie die folgenden Dezimalzahlen in Hexadezimalzahlen um:

1. $42_{10}$
2. $200_{10}$
```

```{solution} decimal-to-hex-exercise
:label: decimal-to-hex-solution
:class: dropdown
1. $42_{10} = 2A_{16}$ (42 ÷ 16 = 2 Rest 10 = A, 2 ÷ 16 = 0 Rest 2)
2. $200_{10} = C8_{16}$ (200 ÷ 16 = 12 Rest 8 = C8)
```

```{admonition} Lösung überprüfen
:class: tip
Führen Sie die folgende Code-Zelle aus, um Ihre Ergebnisse zu überprüfen.
```

```{code-cell} python3
:tags: [skip-execution]

# Ihre Ergebnisse: 42₁₀ = ?, 200₁₀ = ?
print("Dezimal → Hexadezimal:")
print("  42₁₀  =", format(42, "X") + "₁₆")
print("  200₁₀ =", format(200, "X") + "₁₆")
```

### Hexadezimal → Dezimal

**Theorie:** Wie bei Binär → Dezimal: Jede Stelle mit ihrer Stellenwertigkeit $16^i$ multiplizieren und addieren. Buchstaben A–F zuerst in 10–15 umwandeln.

**Kochrezept**

**Gegeben:** Hexadezimalzahl (Ziffern 0–9, A–F)  
**Gewollt:** Dezimalzahl

**Algorithmus:**

1. **Die Stellen von rechts beginnend nummerieren** (rechts: Index 0, dann 1, 2, …).

   Bei $FF_{16}$:
   ```{math}
   \begin{array}{cc}
   F & F \\
   1 & 0 \quad \text{(Index } i \text{)}
   \end{array}
   ```

2. **Stelle $i$ hat die Stellenwertigkeit $16^i$.** A=10, B=11, …, F=15.

   Bei $FF_{16}$:
   ```{math}
   \begin{array}{cc}
   F & F \\
   16 & 1 \quad (16^1, 16^0)
   \end{array}
   ```

3. **Für jede Ziffer: Ziffer $\times$ Stellenwertigkeit; alle Produkte addieren.**

   Bei $FF_{16}$: $15 \cdot 16 + 15 \cdot 1 = 240 + 15 = 255_{10}$

**Ergebnis:** $FF_{16} = 255_{10}$

**Aufgabe**

```{exercise} Hexadezimal → Dezimal
:label: hex-to-decimal-exercise
Wandeln Sie die folgenden Hexadezimalzahlen in Dezimalzahlen um:

1. $2A_{16}$
2. $C8_{16}$
```

```{solution} hex-to-decimal-exercise
:label: hex-to-decimal-solution
:class: dropdown
1. $2A_{16} = 2 \cdot 16 + 10 = 32 + 10 = 42_{10}$
2. $C8_{16} = 12 \cdot 16 + 8 = 192 + 8 = 200_{10}$
```

```{admonition} Lösung überprüfen
:class: tip
Führen Sie die folgende Code-Zelle aus, um Ihre Ergebnisse zu überprüfen.
```

```{code-cell} python3
:tags: [skip-execution]

# Ihre Ergebnisse: 2A₁₆ = ?, C8₁₆ = ?
print("Hexadezimal → Dezimal:")
print("  2A₁₆ =", int("2A", 16))
print("  C8₁₆ =", int("C8", 16))
```

### Binär ↔ Hexadezimal

**Theorie:** Da $16 = 2^4$ gilt, entspricht jede Hexadezimalziffer genau 4 Binärziffern. Die Umrechnung erfolgt über 4er-Gruppen – der schnellste Weg zwischen diesen beiden Systemen.

**Kochrezept**

**Gegeben:** Binärzahl oder Hexadezimalzahl  
**Gewollt:** Hexadezimalzahl oder Binärzahl

**Richtung: Binär → Hexadezimal**

1. **Binärzahl von rechts nach links in Gruppen zu 4 Ziffern einteilen.**

   Bei $10101101_2$: $1010 \, | \, 1101$

2. **Jede 4er-Gruppe in Hex-Ziffer umwandeln** (0–9, A=10–F=15).

   Bei $10101101_2$: 1010 = 10 = A, 1101 = 13 = D → $AD_{16}$

**Ergebnis:** $10101101_2 = AD_{16}$

**Richtung: Hexadezimal → Binär**

1. **Jede Hexadezimalziffer durch 4 Binärziffern ersetzen.**

   Bei $3F_{16}$: 3 = 0011, F = 15 = 1111

2. **Die 4er-Blockfolge aneinanderfügen.**

   Bei $3F_{16}$: 0011 1111 → $00111111_2 = 111111_2$

**Ergebnis:** $3F_{16} = 111111_2$

**Aufgabe**

```{exercise} Binär ↔ Hexadezimal
:label: binary-hex-exercise
Wandeln Sie um (nutzen Sie die 4er-Gruppen-Methode):

1. $10101101_2$ in Hexadezimal
2. $3F_{16}$ in Binär
```

```{solution} binary-hex-exercise
:label: binary-hex-solution
:class: dropdown
1. $10101101_2$: Von rechts in 4er-Gruppen: 1010 | 1101 → A | D → $AD_{16}$
2. $3F_{16}$: 3 = 0011, F = 1111 → $00111111_2 = 111111_2$
```

```{admonition} Lösung überprüfen
:class: tip
Führen Sie die folgende Code-Zelle aus, um Ihre Ergebnisse zu überprüfen.
```

```{code-cell} python3
:tags: [skip-execution]

# Ihre Ergebnisse: 10101101₂ = ?, 3F₁₆ = ?
print("Binär → Hexadezimal:")
print("  10101101₂ =", format(int("10101101", 2), "X") + "₁₆")
print("Hexadezimal → Binär:")
print("  3F₁₆ =", format(0x3F, "08b") + "₂")
```

## Tabellen

Die folgenden Tabellen helfen Ihnen, häufig vorkommende Zahlen schnell zu erkennen und einzuordnen.

### Tabelle: Dezimal, Binär und Hexadezimal (0-15)

| Dezimal | Binär | Hexadezimal |
|---------|-------|-------------|
| 0       | 0000  | 0           |
| 1       | 0001  | 1           |
| 2       | 0010  | 2           |
| 3       | 0011  | 3           |
| 4       | 0100  | 4           |
| 5       | 0101  | 5           |
| 6       | 0110  | 6           |
| 7       | 0111  | 7           |
| 8       | 1000  | 8           |
| 9       | 1001  | 9           |
| 10      | 1010  | A           |
| 11      | 1011  | B           |
| 12      | 1100  | C           |
| 13      | 1101  | D           |
| 14      | 1110  | E           |
| 15      | 1111  | F           |

### Tabelle: Wichtige Zahlen in der Informatik

Diese Zahlen sind besonders wichtig, da sie häufig in der Informatik vorkommen (z.B. bei Speicheradressen, Farbwerten, Bitmasken).

| Dezimal | Binär      | Hexadezimal |
|---------|------------|-------------|
| 0       | 00000000   | 00          |
| 16      | 00010000   | 10          |
| 32      | 00100000   | 20          |
| 64      | 01000000   | 40          |
| 100     | 01100100   | 64          |
| 128     | 10000000   | 80          |
| 192     | 11000000   | C0          |
| 224     | 11100000   | E0          |
| 240     | 11110000   | F0          |
| 255     | 11111111   | FF          |

## Byte und Hexadezimal

```{admonition} Byte
:name: def-byte
:class: definition

Ein **Byte** besteht aus **8 Bits**. Ein Byte kann Werte von 0 bis 255 darstellen.
```

Ein Byte entspricht genau **zwei Hexadezimalziffern**:
- **00**₁₆ = 0₁₀ = 00000000₂ (kleinster Wert)
- **FF**₁₆ = 255₁₀ = 11111111₂ (größter Wert)

Diese Beziehung macht Hexadezimal besonders praktisch für die Darstellung von Bytes: Jede Hexadezimalziffer repräsentiert genau 4 Bits (eine "Nibble"), und zwei Hexadezimalziffern repräsentieren genau ein Byte.

**Beispiele:**
- Ein Byte mit dem Wert $13_{10} = \textbf{0D}_{16}$ (führende Null nicht weglassen, wenn man explizit ein Byte darstellt)
- Ein Byte mit dem Wert $255_{10} = \textbf{FF}_{16}$
- Die Speicheradresse eines Bytes wird oft in Hexadezimal angegeben, z.B. `0x0042` für Byte an Adresse 66

## Praktische Tipps

1. **Binär ↔ Hexadezimal**: Nutzen Sie die einfache Umrechnung über 4er-Gruppen. Dies ist der schnellste Weg zwischen diesen beiden Systemen.

2. **Potenzen von 2**: In der Informatik sind Potenzen von 2 besonders wichtig:
   - $2^0 = 1$
   - $2^1 = 2$
   - $2^2 = 4$
   - $2^3 = 8$
   - $2^4 = 16$
   - $2^5 = 32$
   - $2^6 = 64$
   - $2^7 = 128$
   - $2^8 = 256$

3. **Hexadezimalziffern**: Die Hexadezimalziffern A-F entsprechen den Dezimalwerten 10-15. Diese Zuordnung sollten Sie auswendig kennen.

4. **8-Bit-Bereich**: Zahlen von 0-255 können mit 8 Bits dargestellt werden. Dies entspricht zwei Hexadezimalziffern (00-FF). Dieser Bereich ist besonders wichtig für Farbwerte und viele andere Anwendungen.

```{admonition} Hinweis
:class: important

In der Praxis müssen Sie nicht ständig Zahlen von Hand umrechnen. Wichtig ist jedoch:
- Die verschiedenen Darstellungen zu **erkennen** (z.B. in Debugger-Ausgaben oder technischen Dokumentationen)
- Die **Bedeutung** zu verstehen (z.B. dass $FF_{16} = 255_{10} = 11111111_2$ dieselbe Zahl ist)
- Bei Bedarf die Umrechnung **nachvollziehen** zu können

Viele Entwicklungsumgebungen und Taschenrechner bieten Umrechnungsfunktionen. Das Verständnis der Zahlensysteme hilft Ihnen jedoch, Fehler zu erkennen und technische Dokumentationen besser zu verstehen.
```

## Selbstcheck

- Was ist $D_{16}$ in Dezimal – und warum ist das schnell über Binärgruppen nachvollziehbar?
- Woran erkennen Sie in einer Ausgabe, dass `0xFF` eine Hexzahl ist?
