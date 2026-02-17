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

# Beispiel Barcode (S)

Dieses Beispiel (inkl. Abbildungen) ist angelehnt an das Kapitel 11 im Buch „Code“ von Charles Petzold {cite}`petzold:2000code`.

```{figure} ../../figs/02-computer-sciences-basics/codierung/barcode.png
---
width: 200px
name: fig-upc-barcode
---
Beispiel eines UPC-Barcodes (Quelle: angelehnt an Petzold, 2000).
```

Der Universal Product Code (UPC) ist ein Strichcode, der in den Vereinigten Staaten eingesetzt wird. In Europa wird ein anderer Code eingesetzt.

Das Prinzip ist dasselbe: 
- Schwarze und weiße Felder wechseln sich ab.
- **Schwarz** steht für 1 steht.
- **Weiß** für 0.
- Es gibt pro Feld also nur zwei mögliche Zustände (Binärcode).

```{figure} ../../figs/02-computer-sciences-basics/codierung/coding.png
---
width: 800px
name: fig-upc-bits
---
Der Barcode als Folge von schwarzen (1) und weißen (0) Feldern, also als Bitfolge (Quelle: angelehnt an Petzold, 2000).
```


Das *Codierschema* des UPC sagt uns, wie wir diese Bits zu interpretieren haben:

| Bits                                                                       | Bedeutung                                                         |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `101`                                                                      | **Startzeichen** (Start Guard)                                    |
| `0001101`<br>`0110001`<br>`0011001`<br>`0001101`<br>`0001101`<br>`0001101` | **Nutzdaten links** (6 Ziffern, L-Code)|
| `01010`                                                                    | **Trennzeichen** (Middle Guard)                                   |
| `1110010`<br>`1100110`<br>`1101100`<br>`1001110`<br>`1100110`<br>`1000100` | **Nutzdaten rechts** (6 Ziffern, R-Code) |
| `101`                                                                      | **Stoppzeichen** (End Guard)                                      |

```{admonition} Definition: Parität (hier: ungerade Parität)
:class: def-sample

Ein Bitmuster hat **ungerade Parität**, wenn die Anzahl der 1-Bits **ungerade** ist.
Das kann zur einfachen Fehlererkennung genutzt werden.
```

Die Bitfolgen, bestehend auf 7 Bits, stehen jeweils für Zahlenwerte. Die folgenden beiden Tabellen enthalten die Zuordnung: also welche Bitfolge steht für welche Zahl?

| Bitfolge (L-Code) | Ziffer |
|-------------------|-------:|
| `0001101` | 0 |
| `0011001` | 1 |
| `0010011` | 2 |
| `0111101` | 3 |
| `0100011` | 4 |
| `0110001` | 5 |
| `0101111` | 6 |
| `0111011` | 7 |
| `0110111` | 8 |
| `0001011` | 9 |


| Bitfolge (R-Code) | Ziffer |
|-------------------|-------:|
| `1110010` | 0 |
| `1100110` | 1 |
| `1101100` | 2 |
| `1000010` | 3 |
| `1011100` | 4 |
| `1001110` | 5 |
| `1010000` | 6 |
| `1000100` | 7 |
| `1001000` | 8 |
| `1110100` | 9 |


Ist Ihnen aufgefallen, dass der R-Code und der L-Code genau das Gegenteil voneinander sind?
Also: wo beim L-Code eine 0 ist, ist beim R-Code eine 1 (und umgekehrt). Man sagt: L-Code und R-Code sind **Komplemente**.

```{admonition} Definition: Komplement (Bitweise)
:class: def-sample

Das **Komplement** einer Bitfolge erhält man, indem man jedes Bit umdreht: 0 → 1. 1 → 0.
```


```{exercise} UPC dekodieren
Entschlüsseln (dekodieren) Sie den binären Code!
```

## Programmatische Lösung

Das war anstrengend + langweilig? 
- Ja – und deswegen gibt es für solche Aufgaben Programme!


Der folgende Python-Code erledigt genau das, was Sie gerade per Hand erledigt haben:

- er bekommt eine Folge von 0 und 1
- er entfernt die Startzeichen (101)
- dann übersetzt er die Bitgruppen in Ziffern mit dem L-Code
- dann überprüft er, ob das Trennzeichen vorhanden ist
- dann übersetzt er die nächsten Bitgruppen mit dem R-Code

```{important} Wichtig
Sie müssen den folgenden Python-Code noch nicht verstehen. Sie sollten lediglich erkennen, dass die Codierung nicht „magisch“ passiert:
Die Tabellen, die Sie bei der manuellen Übersetzung verwendet haben, sind 1:1 als Tabellen im Code hinterlegt!
```


```{code-cell} python3
:tags: [skip-execution]
# UPC-A (vereinfacht)

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


