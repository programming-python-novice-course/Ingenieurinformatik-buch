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

```{figure} ../../figs/03-computer-sciences-basics/coding-numbers.svg
---
width: 900px
name: fig-coding-numbers
---
Zahlensysteme ändern die Darstellung einer Zahl, nicht ihre Bedeutung. Codierung übersetzt die Darstellung in eine Bitfolge. Sonderfall: Bei der Binärdarstellung von natürlichen Zahlen fallen Ziffernfolge und Bitfolge zusammen. In der Regel sind Darstellung (Zahlensystem) und Bitfolge (=Ergebnis der Codierung) strikt getrennt!
```

## Wichtige Zahlensystem
Es gibt in der Informatik 3 Zahlensysteme, die besonders häufig genutzt werden: das Dezimal-, das Binär- und das Hexadezimalsystem. 

Die Zahl „dreizehn“ sieht in diesen drei Zahlensystemen wie folgt aus:

- \(13\) im Dezimalsystem (Basis 10, Alltagsschreibweise)
- \(1101\) im Binärsystem (Basis 2)
- \(D\) im Hexadezimalsystem (Basis 16)

Als Programmierin sollten Sie diese kennen, denn beim Programmieren werden Ihnen diese Zahlensysteme immer wieder begegnen: 

- wenn Debugger Speicheradressen oder Registerwerte in Hexadezimaldarstellung anzeigen,
- wenn Fehlermeldungen Bitmasken oder Statusflags in binärer oder hexadezimaler Form enthalten,
- wenn technische Dokumentationen Werte in verschiedenen Zahlensystemen angeben.

Sie sollten in der Lage sein Zahlensysteme zu verstehen und sicher zwischen Darstellungen wechseln zu können. Dabei geht es nicht darum, ständig von Hand umzurechnen, sondern Darstellungen korrekt zu erkennen, einzuordnen und bei Bedarf nachvollziehen zu können.


```{admonition} Spezialfall: Natürliche Zahlen
:class: important

Der Spezialfall ist in {numref}`fig-coding-numbers` dargestellt: Für natürliche Zahlen kann man oft „Zahl direkt als Bits darstellen".

Für alles andere (Zahlen mit Nachkommastellen, Text, ... ) braucht man eine Codierung!
```

Als nächstes (Hausaufgabe): In [](32-zahlensysteme.md) üben Sie, zwischen Dezimal-, Binär- und Hexadezimaldarstellung umzurechnen und die Notation sicher zu verwenden.
