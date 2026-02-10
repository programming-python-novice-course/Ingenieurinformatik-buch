
# Text (S)

Text besteht aus Zeichen (Buchstaben, Ziffern, Sonderzeichen), die als Bitfolgen codiert werden müssen. Hierbei handelt es sich um eine **Codierung** im eigentlichen Sinne: Wir legen fest, welche Bitfolge welchem Zeichen entspricht.

Wie wir bereits im Kapitel über [Codierung](sec-codierung) gesehen haben, kann die gleiche Bitfolge `01000001` je nach Codierung unterschiedliche Bedeutungen haben:
- Als Zahl: $65_{10}$ (wenn wir die Bitfolge als Binärzahl interpretieren)
- Als Buchstabe: "A" (wenn wir die Bitfolge als ASCII-Zeichen interpretieren)

## Grundprinzip der Zeichencodierung

Wollen wir die Buchstaben des Alphabets in Binärdarstellung schreiben, so müssen wir uns darauf einigen, welche Binärzahl welchen Buchstaben repräsentiert.
Dies ist eine **Codierung** - wir legen fest, wie Bitfolgen als Zeichen interpretiert werden.

Da das lateinische Alphabet 26 Großbuchstaben enthält, brauchen wir mindestens 5 Bits, denn es gilt:

$$2^4 < 26 \leq 2^5.$$

Mit 5 Bits können wir $2^5 = 32$ verschiedene Zeichen darstellen, was für die 26 Buchstaben ausreicht.

```{exercise} Repräsentation
:label: repraesentation-alphabet-exercise
Wie viele Bits benötigen Sie, wenn Sie die Kleinbuchstaben auch repräsentieren möchten?
```

```{solution} repraesentation-alphabet-exercise
:label: repraesentation-alphabet-solution
:class: dropdown
Mit Kleinbuchstaben haben wir $52$ Elemente und brauchen somit $6$ Bits, denn 

$$2^5 < 52 \leq 2^6$$
```

Ein Wort besteht natürlich aus mehreren Buchstaben.
Zum Beispiel wäre *BAD* repräsentiert durch die Konkatenation der Binärdarstellungen der einzelnen Buchstaben.
Im Computer würden demnach mehrere Bits, die entweder den Zustand **Strom aus** oder **Strom an** haben, das Wort repräsentieren.

Sonderzeichen wie Leerzeichen oder weitere Zeichen müssten wir in unsere Codierung noch einfügen.
Auch könnten wir einen vollkommen anderen Zeichensatz benutzen.
Programme, die auf diesem aufbauen, müssen die Codierung lediglich kennen.

Auch können wir längere Wörter oder ganze Sätze bilden, brauchen dafür natürlich Speicherplatz.
In unserem Beispiel benötigt jeder Buchstabe 5 Bits.
D. h., um einen Text mit, sagen wir 300 Zeichen im Speicher zu halten, brauchen wir die Bauteile für mindestens $300 \times 5 = 1500$ Bits, was wiederum $187.5$ Bytes bzw. $0.1875$ [kiloByte](https://en.wikipedia.org/wiki/Kilobyte) (kB) ($10^3$ Byte) und ca. $0.1831$ [kibiByte](https://en.wikipedia.org/wiki/Kilobyte) (KB/KiB) ($2^{10}$ Byte) sind.

## ASCII

Eine der ersten wichtigen Zeichencodierungen ist **ASCII** (American Standard Code for Information Interchange). ASCII verwendet 7 Bits und kann damit 128 verschiedene Zeichen darstellen (0-127).

ASCII ist eine **Codierung**, die festlegt:
- Welche Bitfolge welchem Zeichen entspricht
- Wie Zeichen als Bitfolgen gespeichert werden

ASCII enthält:
- Lateinische Groß- und Kleinbuchstaben (A-Z, a-z)
- Ziffern (0-9)
- Sonderzeichen und Satzzeichen (!, ?, ., etc.)
- Steuerzeichen (z.B. Zeilenumbruch, Tabulator)

**Beispiel:**
- Der Buchstabe "A" hat den ASCII-Code $65_{10}$, was der Bitfolge `01000001` entspricht
- Der Buchstabe "a" hat den ASCII-Code $97_{10}$

ASCII hat jedoch eine wichtige Limitation: Es kann nur englische Zeichen darstellen. Umlaute (ä, ö, ü), Akzente (é, è, à) oder Zeichen aus anderen Schriftsystemen (z.B. Chinesisch, Arabisch) sind nicht enthalten. Auch Emojis können nicht dargestellt werden.

## Unicode

Um diese Einschränkung zu überwinden, wurde **Unicode** entwickelt – ein universeller Zeichensatz, der Zeichen aus praktisch allen Sprachen und Schriftsystemen der Welt umfasst. Unicode definiert für jedes Zeichen eine eindeutige Nummer, den sogenannten **Code Point**.

Unicode enthält weit mehr Zeichen als ASCII:
- Alle ASCII-Zeichen (Code Points 0-127)
- Umlaute und Akzente (ä, ö, ü, é, è, à, etc.)
- Zeichen aus anderen Schriftsystemen (Chinesisch, Arabisch, Kyrillisch, etc.)
- Emojis und Sonderzeichen (🎉, €, ©, etc.)

Wichtig: Unicode definiert nur, *welche* Zeichen es gibt und welche Nummer (Code Point) jedes Zeichen hat. Es legt jedoch **nicht** fest, wie diese Zeichen als Bitfolgen gespeichert werden sollen. Unicode ist also noch keine vollständige Codierung - es ist eine Zuordnung von Zeichen zu Nummern.

### UTF-8

**UTF-8** (Unicode Transformation Format 8-bit) ist eine **Codierung**, die festlegt, wie Unicode-Zeichen als Bitfolgen gespeichert werden. UTF-8 ist die Standard-Codierung für Python-Strings.

UTF-8 verwendet eine **variable Länge**: Je nach Zeichen werden unterschiedlich viele Bytes verwendet:

- **1 Byte** für ASCII-Zeichen (z.B. "A", "1", "!")
- **2 Bytes** für viele europäische Zeichen (z.B. "ä", "ö", "ü", "é")
- **3 Bytes** für viele andere Zeichen (z.B. "€", "©")
- **4 Bytes** für Emojis und einige seltene Zeichen (z.B. "🎉", "🚀")

**Beispiele:**
- "A" → 1 Byte (gleich wie ASCII)
- "ä" → 2 Bytes
- "€" → 3 Bytes
- "🎉" → 4 Bytes

Ein wichtiger Vorteil von UTF-8 ist die **Rückwärtskompatibilität zu ASCII**: Alle ASCII-Zeichen werden in UTF-8 genauso codiert wie in ASCII. Das bedeutet, dass jeder ASCII-Text automatisch auch ein gültiger UTF-8-Text ist.

```{admonition} Wichtig
:class: important

**Python Strings sind UTF-8**: In Python werden Strings standardmäßig als UTF-8 gespeichert. Sie können mit den Funktionen ``ord()`` und ``chr()`` zwischen Zeichen und ihren Unicode-Code Points umwandeln:

```python
ord('A')    # 65
chr(65)     # 'A'
ord('ä')    # 228
chr(228)    # 'ä'
ord('🎉')   # 127881
```

**Encoding-Probleme**: Bei der Arbeit mit Dateien oder beim Datenaustausch über Netzwerke kann es zu Encoding-Problemen kommen, wenn die Codierung nicht korrekt angegeben wird. Stellen Sie sicher, dass Sie beim Öffnen von Dateien das richtige Encoding angeben (z.B. ``open('datei.txt', encoding='utf-8')``).
```
