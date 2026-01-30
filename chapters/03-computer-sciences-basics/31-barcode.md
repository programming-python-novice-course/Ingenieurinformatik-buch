# Beispiel Barcode

beispiel stammt aus christian petzold code #todo add citation to all pictures

Barcode: 
#todo add figure figs/03-computer-sciences-basics/codierung/barcode.png



Der Universal Product Code (UPC) ist ein Strichcode, der in den Vereinigten Staaten eingesetzt wird. In Europa wird eine anderer Code eingesetzt, aber das Prinzip ist dasselbe: schwarze und weisse felder wechseln sich ab, wobei schwar für 1 steht und weiß für 0. Es gibt pro feld also nur zwei mögliche Zustände (binärcode).

#todo add this figure
figs/03-computer-sciences-basics/codierung/coding.png

%10100011010110001001100100011010001101000110101010111001011001101101100100111011001101000100101

der gesamte UPC besteht auf 95 Zeichen. da jedes zeichen nur 0 oder 1 sein kann, sprechen wir auch von 95 bits. Die Codierung sagt uns nun wie wir diese bits zu interpretieren haben:

| Bits                                                                       | Bedeutung                                                         |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `101`                                                                      | **Startzeichen** (Start Guard)                                    |
| `0001101`<br>`0110001`<br>`0011001`<br>`0001101`<br>`0001101`<br>`0001101` | **Nutzdaten links** (6 Ziffern, L-Code)|
| `01010`                                                                    | **Trennzeichen** (Middle Guard)                                   |
| `1110010`<br>`1100110`<br>`1101100`<br>`1001110`<br>`1100110`<br>`1000100` | **Nutzdaten rechts** (6 Ziffern, R-Code) |
| `101`                                                                      | **Stoppzeichen** (End Guard)                                      |


| Ziffer | Bitfolge (L-Code) |
|-------:|-------------------|
| 0 | `0001101` |
| 1 | `0011001` |
| 2 | `0010011` |
| 3 | `0111101` |
| 4 | `0100011` |
| 5 | `0110001` |
| 6 | `0101111` |
| 7 | `0111011` |
| 8 | `0110111` |
| 9 | `0001011` |


| Ziffer | Bitfolge (R-Code) |
|-------:|-------------------|
| 0 | `1110010` |
| 1 | `1100110` |
| 2 | `1101100` |
| 3 | `1000010` |
| 4 | `1011100` |
| 5 | `1001110` |
| 6 | `1010000` |
| 7 | `1000100` |
| 8 | `1001000` |
| 9 | `1110100` |

Ist Ihnen aufgefallen, dass die Bitfolge immer eine ungerade Anzahl an 1-Bits hat? Das nennt man eine ungerade Parität.

Definition: Parität 


Ist Ihnen aufgefallen, dass der R-Code und der L-Code genau das Gegenteil voneinander sind? Also da wo beim L-Code eine 0 ist, ist beim R-Code eine 1? Man spricht dann davon dass L-Code und R-Code Komplemente sind.

Definition: Komplement



Aufgabe: Enschlüsseln (decodieren) Sie die den binären Code! 


Das war anstrengend? Ja, und deswegen machen wir das üblicherweise nicht von Hand sondern mit einem kleinen Programm, dass das für uns erledigt. Der folgende Python-Code erledigt genau das was Sie gerade per Hand erledigt haben:
- es bekommt eine Folge von 0 und 1
- es entfernt die Startzeichen (101)
- dann übersetzt es die bitgruppen in zahlen mit dem L-Code
- dann überprüft es ob das Trennzeichen vorhanden ist
- dann übersetzt es die näcshten birgruppen mit dem R-Code

Wichtig an dieser Stelle: Sie müssen den Python Code noch nicht verstehen. Wichtig ist zu erkennen, dass die Codierung nicht magisch passiert. Die Tabellen, die Sie bei der manuellen üebrsetzung verwendet haben, sind 1-1 so im Code Tabellen hinterlegt. 



```{code-cell} python3
# UPC-A (vereinfacht): Start Guard (101) + 6x L-Code + Middle Guard (01010) + 6x R-Code + End Guard (101)

L_CODE = {
    "0001101": "0",
    "0011001": "1",
    "0010011": "2",
    "0111101": "3",
    "0100011": "4",
    "0110001": "5",
    "0101111": "6",
    "0111011": "7",
    "0110111": "8",
    "0001011": "9",
}

R_CODE = {
    "1110010": "0",
    "1100110": "1",
    "1101100": "2",
    "1000010": "3",
    "1011100": "4",
    "1001110": "5",
    "1010000": "6",
    "1000100": "7",
    "1001000": "8",
    "1110100": "9",
}


def decode_upc_bits(bits: str) -> str:
    bits = bits.strip().replace(" ", "")
    if len(bits) != 95:
        raise ValueError(f"UPC erwartet 95 Bits, erhalten: {len(bits)}")
    if bits[:3] != "101" or bits[-3:] != "101":
        raise ValueError("Start-/Stoppzeichen (101 ... 101) nicht gefunden.")
    if bits[45:50] != "01010":
        raise ValueError("Trennzeichen (Middle Guard 01010) nicht an Position 45..49 gefunden.")

    left = bits[3:45]    # 6 * 7 Bits
    right = bits[50:92]  # 6 * 7 Bits

    digits = []
    for i in range(0, 42, 7):
        chunk = left[i : i + 7]
        if chunk not in L_CODE:
            raise ValueError(f"Unbekannter L-Code-Chunk: {chunk}")
        digits.append(L_CODE[chunk])

    for i in range(0, 42, 7):
        chunk = right[i : i + 7]
        if chunk not in R_CODE:
            raise ValueError(f"Unbekannter R-Code-Chunk: {chunk}")
        digits.append(R_CODE[chunk])

    return "".join(digits)


bits = "10100011010110001001100100011010001101000110101010111001011001101101100100111011001101000100101"
decoded = decode_upc_bits(bits)
print(decoded)
```


