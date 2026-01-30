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


```{admonition} Merksatz: Zusammenhang Zahlensystem und Codierung
:class: important

Ein Zahlensystem beschreibt die Schreibweise eines Zahlenwerts als Ziffernfolge  
(Basis, Stellenwerte).

Eine numerische Codierung beschreibt, wie diese Ziffern oder Symbole als Bitfolge im Speicher abgelegt werden.

Man kann den Prozess in zwei Schritte zerlegen:

**Zahlenwert → Ziffernfolge (Zahlensystem) → Bitfolge (Codierung)**

Bei der Binärdarstellung fallen Ziffernfolge und Bitfolge oft zusammen; bei BCD sind sie strikt getrennt.
```

## Wichtige Zahlensystem
Es gibt in der Informatik 3 Zahlensysteme, die besonders häufig genutzt werden: das Dezimal-, das Binär- und das Hexadezimalsystem.

Die Zahl „dreizehn“ sieht in diesen drei Zahlensystemen wie folgt aus:

- \(13\) im Dezimalsystem (Basis 10, Alltagsschreibweise)
- \(1101\) im Binärsystem (Basis 2)
- \(D\) im Hexadezimalsystem (Basis 16)


Beim Programmieren werden Ihnen diese Zahlensysteme immer wieder begegnen, zum Beispiel wenn:

- Debugger Speicheradressen oder Registerwerte in Hexadezimaldarstellung anzeigen,
- Fehlermeldungen Bitmasken oder Statusflags in binärer oder hexadezimaler Form enthalten,
- technische Dokumentationen Werte in verschiedenen Zahlensystemen angeben.

Deshalb lohnt es sich, Zahlensysteme zu verstehen und sicher zwischen Darstellungen wechseln zu können. Dabei geht es nicht darum, ständig von Hand umzurechnen,
sondern Darstellungen korrekt zu erkennen, einzuordnen und bei Bedarf nachvollziehen zu können.

Wichtig:

> **Zahlensysteme ändern die Darstellung einer Zahl, nicht ihre Bedeutung.**

```{admonition} Spezialfall: Ganze Zahlen
:class: important

Wenn wir eine bereits bekannte **ganze Zahl** (z. B. 13) als Bitfolge darstellen wollen, dann ist die numerische Bedeutung bereits festgelegt.
In diesem Spezialfall fällt der Schritt „Zahl als Bits darstellen“ oft mit dem **Wechsel des Zahlensystems** zusammen (z. B. Dezimal \(\rightarrow\) Binär).

Dies gilt jedoch **nur für ganze Zahlen**! Für Zahlen mit Nachkommastellen (z. B. 3,14) reicht ein Zahlensystem allein nicht aus:
Dann braucht man zusätzliche Regeln (z. B. eine Gleitkommacodierung wie IEEE 754).

Im **allgemeinen Fall** erzeugt eine **Codierung** die Bitfolge – ein Zahlensystem ist nur ein möglicher Baustein davon.
```

```{admonition} Merksatz
:class: important

- **Codierungen** legen fest, *dass* eine Bitfolge eine bestimmte Bedeutung hat (z. B. Zahl, Zeichen, Farbe).
- **Zahlensysteme** legen fest, *wie* eine Zahl als Stellenwertsystem dargestellt und gelesen wird (z. B. Basis 2, 10 oder 16).
```

Als nächstes (Hausaufgabe): In [](32-zahlensysteme.md) üben Sie, zwischen Dezimal-, Binär- und Hexadezimaldarstellung umzurechnen und die Notation sicher zu verwenden.
