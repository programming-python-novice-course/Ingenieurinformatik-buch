# Zahlen (S)

- Im vorherigen Abschnitt haben Sie gesehen, dass eine Bitfolge wie `0101111` für die Ziffer 6 stehen kann.
- Eine Bitfolge bedeutet nicht „von selbst“ etwas, sondern erst durch eine Codierung (ein Regelwerk).

Bei UPC gab es nicht direkt ein Muster. Sie haben in der Tabelle einfach abgelesen, dass `0101111` für die Ziffer 6 steht. 

## Binary-coded decimal

Der Binary-coded decimal (BCD) ist eine weitere numerische Codierung.
Die Zuordnung der Zahlen unterscheidet sich aber von dem, was wir bei UPC gesehen haben.
Sehen Sie sich die Zuordnungstabelle der BCD-Codierung näher an. Fällt Ihnen etwas auf?

| Zahl | BCD-Code |
|--------:|----------|
| 0  | `0000` |
| 1  | `0001` |
| 2  | `0010` |
| 3  | `0011` |
| 4  | `0100` |
| 5  | `0101` |
| 6  | `0110` |
| 7  | `0111` |
| 8  | `1000` |
| 9  | `1001` |
| 10 | `0001 0000` |
| 11 | `0001 0001` |
| 12 | `0001 0010` |
| 13 | `0001 0011` |
| 14 | `0001 0100` |
| 15 | `0001 0101` |
| 16 | `0001 0110` |
| 17 | `0001 0111` |
| 18 | `0001 1000` |
| 19 | `0001 1001` |
| 20 | `0010 0000` |
| 21 | `0010 0001` |
| 22 | `0010 0010` |
| 23 | `0010 0011` |

Die Bitmuster für 0–9 ergeben sich nach einem sehr einfachen Schema:

- **linkes Bit**: steht für 8 ($2^3$)
- **zweites Bit**: steht für 4 ($2^2$)
- **drittes Bit**: steht für 2 ($2^1$)
- **rechtes Bit**: steht für 1 ($2^0$)

Hat das Bit den Wert "1" wird der zugehörige Wert (8,4,2,1) addiert, bei "0" wird nichts addiert.

Hier noch einmal als Übersicht dargestellt:

| Dezimal | BCD-Code | Umrechnung |
|--------:|----------:|----------------------|
| 0  | `0000` | $0\cdot 8 + 0\cdot 4 + 0\cdot 2 + 0\cdot 1 = 0$ |
| 1  | `0001` | $0\cdot 8 + 0\cdot 4 + 0\cdot 2 + 1\cdot 1 = 1$ |
| 2  | `0010` | $0\cdot 8 + 0\cdot 4 + 1\cdot 2 + 0\cdot 1 = 2$ |
| 3  | `0011` | $0\cdot 8 + 0\cdot 4 + 1\cdot 2 + 1\cdot 1 = 3$ |
| 4  | `0100` | $0\cdot 8 + 1\cdot 4 + 0\cdot 2 + 0\cdot 1 = 4$ |
| 5  | `0101` | $0\cdot 8 + 1\cdot 4 + 0\cdot 2 + 1\cdot 1 = 5$ |
| 6  | `0110` | $0\cdot 8 + 1\cdot 4 + 1\cdot 2 + 0\cdot 1 = 6$ |
| 7  | `0111` | $0\cdot 8 + 1\cdot 4 + 1\cdot 2 + 1\cdot 1 = 7$ |
| 8  | `1000` | $1\cdot 8 + 0\cdot 4 + 0\cdot 2 + 0\cdot 1 = 8$ |
| 9  | `1001` | $1\cdot 8 + 0\cdot 4 + 0\cdot 2 + 1\cdot 1 = 9$ |


```{admonition} Definition: Nibble und Byte
:class: note

- Ein **Nibble** sind **4 Bits** (z. B. `0111`).
- Ein **Byte** sind **8 Bits** (= **2 Nibbles**, z. B. `0111 0101`).
```

- Im Vergleich zum UPC ist BCD damit „systematischer“. 
- Wenn Sie das Muster kennen, brauchen Sie für 0–9 keine Tabelle mehr! 

Bei zwei Ziffern, wird einfach jeder Ziffer einzeln umgerechnet.

## Beispiel: **75 in BCD**

1. Zerlegen Sie die Zahl in ihre Einzelziffern: $75 \rightarrow$ „7“ und „5“.
2. Codieren Sie jede Ziffer als 4 Bits (Schalterwerte 8-4-2-1):
   - $7 = 0\cdot 8 + 1\cdot 4 + 1\cdot 2 + 1\cdot 1 \rightarrow$ `0111`
   - $5 = 0\cdot 8 + 1\cdot 4 + 0\cdot 2 + 1\cdot 1 \rightarrow$ `0101`
3. Hängen Sie die Bits aneinander: $75 \rightarrow$ `0111 0101`


**Problem**

- BCD codiert jede Dezimalziffer mit 4 Bits. 
- Ab der Zahl 10 haben wir zwei Ziffern (1 und 0) und brauchen deshalb 2 Nibbles = 8 Bits (1 Byte).
- Das ist ineffizient, denn mit 4 Bits gäbe es bereits $2^4 = 16$ mögliche Bitmuster, aber für Dezimalziffern werden nur 10 davon genutzt (0–9) – 6 Muster bleiben ungenutzt.


Was wäre also, wenn wir diese ungenutzten Muster einfach zum Weiterzählen verwenden würden?

| Dezimal | BCD-Code        | Alternative??? |
|--------:|-----------------|----------------------|
| 0  | `0000`           | `0000` |
| 1  | `0001`           | `0001` |
| 2  | `0010`           | `0010` |
| 3  | `0011`           | `0011` |
| 4  | `0100`           | `0100` |
| 5  | `0101`           | `0101` |
| 6  | `0110`           | `0110` |
| 7  | `0111`           | `0111` |
| 8  | `1000`           | `1000` |
| 9  | `1001`           | `1001` |
| 10 | `0001 0000`      | `1010`  <-- ungenutzt |
| 11 | `0001 0001`      | `1011`  <-- ungenutzt|
| 12 | `0001 0010`      | `1100`  <-- ungenutzt|
| 13 | `0001 0011`      | `1101`  <-- ungenutzt |
| 14 | `0001 0100`      | `1110`  <-- ungenutzt|
| 15 | `0001 0101`      | `1111`  <-- ungenutzt|


## Binärdarstellung 

Die Binärdarstellung ist ein **Stellenwertsystem** und nutzt die verfügbaren Bitmuster aus:

| Zahl | Binär (Nibble-Darstellung) |
|-----:|----------------------------|
| 1 | `0001` |
| 2 | `0010` |
| 3 | `0011` |
| 4 | `0100` |
| 5 | `0101` |
| 6 | `0110` |
| 7 | `0111` |
| 8 | `1000` |
| 9 | `1001` |
| 10 | `1010` |
| 11 | `1011` |
| 12 | `1100` |
| 13 | `1101` |
| 14 | `1110` |
| 15 | `1111` |
| 16 | `0001 0000` |
| 17 | `0001 0001` |
| 18 | `0001 0010` |
| 19 | `0001 0011` |
| 20 | `0001 0100` |
| 32 | `0010 0000` |
| 64 | `0100 0000` |
| 128 | `1000 0000` |
| 256 (= 2**8) | `0001 0000 0000` |


Die Binärdarstellung ist eine **Stellenwertdarstellung zur Basis 2**:
Jedes Bit hat einen Stellenwert (eine Potenz von 2), und der Zahlenwert ergibt sich als Summe aller gesetzten Bits:

$$
\sum b_i \cdot 2^i \quad \text{mit} \quad b_i \in \{0,1\}
$$
