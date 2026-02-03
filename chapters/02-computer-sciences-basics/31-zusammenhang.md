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

Im letzten Abschnitt haben Sie zwei grundsätzlich verschiedene Konzepte kennengelernt, mit denen Zahlen als Bitfolgen dargestellt werden können:

- BCD (Binary Coded Decimal) ist eine Codierung von Dezimalziffern.  
  Jede Ziffer 0–9 wird unabhängig von ihrem Stellenwert durch ein festes Bitmuster aus 4 Bit dargestellt.

- Die Binärdarstellung ist eine Stellenwertdarstellung zur Basis 2, also ein Zahlensystem, bei dem der Zahlenwert durch die Position der Ziffern bestimmt wird.

Beide Konzepte wurden verwendet, um ganze Zahlen als Bitfolgen darzustellen, beruhen jedoch auf unterschiedlichen Prinzipien:

- Codierung bezeichnet eine feste Abbildung, die festlegt, welches Bitmuster für welches Symbol steht  
  (z. B. die Ziffer „7“ → `0111` im BCD).

- Ein Zahlensystem ist ein Stellenwertsystem, das definiert, wie ein Zahlenwert als Folge von Ziffern zur Basis b geschrieben und interpretiert wird  
  (z. B. Basis 2, 10 oder 16).

```{figure} ../../figs/02-computer-sciences-basics/coding-numbers.png
---
width: 900px
name: fig-coding-numbers
---
Zahlensysteme ändern die Darstellung einer Zahl, nicht ihre Bedeutung. Codierung übersetzt die Darstellung in eine Bitfolge. Sonderfall: Bei der Binärdarstellung von natürlichen Zahlen fallen Ziffernfolge und Bitfolge zusammen. In der Regel sind Darstellung (Zahlensystem) und Bitfolge (=Ergebnis der Codierung) strikt getrennt!
```

**Wichtige Zahlensystem**

Es gibt 3 Zahlensysteme, auf die Sie in der Praxis beim Programmieren stoßen können: das Dezimal-, das Binär- und das Hexadezimalsystem. 

Die Zahl „dreizehn“ sieht in diesen drei Zahlensystemen wie folgt aus:

- \(13\) im Dezimalsystem (Basis 10, Alltagsschreibweise)
- \(1101\) im Binärsystem (Basis 2)
- \(D\) im Hexadezimalsystem (Basis 16)

Als Programmierin sollten Sie die drei Zahlensysteme kennen, denn: 

- Debugger zeigen Speicheradressen oder Registerwerte eventuell in Hexadezimaldarstellung an,
- Fehlermeldungen, Bitmasken oder Statusflags sind in binärer oder hexadezimaler Form,
- in technische Dokumentationen können Werte in verschiedenen Zahlensystemen angeben sein.

Sie sollten in der Lage sein Zahlensysteme zu verstehen und sicher zwischen Darstellungen wechseln zu können. Dabei geht es nicht darum, ständig von Hand umzurechnen, sondern Darstellungen korrekt zu erkennen, einzuordnen und bei Bedarf nachvollziehen zu können.

In Python können Sie Zahlen über `format` unterschiedlich darstellen:

```{code-cell} python3
# Hexadezimal → Integer (Binär ist nur eine Schreibweise!)
zahl_1 = 0x2A                 # Hexadezimale Darstellung
print(zahl_1)                 # 42 -> "0x2A" entspricht 42 in dezimal!
print(format(zahl_1, "b"))    # 101010, b -> "bytes"  

# Binär → Integer 
zahl_2 = 0b101010             # Binäre Darstellung
print(zahl_2)                 # 42

# Dezimal → Integer
zahl_3 = 255                  # Dezimale Darstellung
print(zahl_3)                 # 255
print(format(zahl_3, "x"))    # ff, x -> hexadezimal
print(format(zahl_3, "#x"))   # 0xff 
```

Die folgende Tabelle zeigt die wichtigsten Zahlen:

```{code-cell} python3
for n in [0, 1, 10, 42, 255]:
    print(f"{n:>3}  {n:08b}  0x{n:02X}")
```


```{admonition} Spezialfall: Natürliche Zahlen
:class: important

Der Spezialfall ist in {numref}`fig-coding-numbers` dargestellt: Für natürliche Zahlen kann man „Zahlen direkt als Bits darstellen".

Für alles andere (Zahlen mit Nachkommastellen, Text, ... ) braucht man eine Codierung!
```

Hausaufgabe: In [](32-zahlensysteme.md) üben Sie, zwischen Dezimal-, Binär- und Hexadezimaldarstellung umzurechnen und die Notation sicher zu verwenden.
