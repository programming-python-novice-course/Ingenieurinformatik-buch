# Zahlensysteme 

Ein **Zahlensystem** ist ein Bestandteil der numerischen Codierung.
Es legt fest, **wie eine Zahl symbolisch dargestellt und gelesen wird**,
also welches Stellenwertsystem verwendet wird (z. B. Basis 2 oder Basis 10).

Die gleiche Zahl kann in verschiedenen Zahlensystemen unterschiedlich dargestellt werden.
Beispiel: die Zahl **13**:

- **13** im Dezimalsystem (Basis 10, Alltagsschreibweise)
- **1101** im Binärsystem (Basis 2)
- **D** im Hexadezimalsystem (Basis 16)

Alle diese Darstellungen stehen für **dieselbe numerische Bedeutung**.
Nur die **Darstellung** unterscheidet sich.

Ihre Aufgabe als Programmiererin oder Programmierer ist es,
sich von unterschiedlichen Darstellungen **nicht verwirren zu lassen**,
sondern sie korrekt einzuordnen und zu interpretieren. In der Praxis begegnet Ihnen das zum Beispiel, wenn:
- Debugger Speicheradressen oder Registerwerte in **Hexadezimaldarstellung** anzeigen,
- Fehlermeldungen **Bitmasken** oder **Statusflags** in binärer oder hexadezimaler Form enthalten,
- technische Dokumentationen Werte in verschiedenen Zahlensystemen beschreiben,
- Sie mit hardwarenahen Programmiersprachen oder Systemen arbeiten.

Deshalb lohnt es sich, Zahlensysteme zu verstehen und sicher zwischen verschiedenen Darstellungen wechseln zu können. Dabei geht es **nicht** darum, Zahlen ständig von Hand umzurechnen, sondern darum, Darstellungen richtig zu erkennen,
einzuordnen und bei Bedarf nachvollziehen zu können.


> **Zahlensysteme ändern die Darstellung einer Zahl, nicht ihre Bedeutung.**

```{admonition} Spezialfall: Ganze Zahlen 
:class: important

Gehen wir von einer bereits bekannten **ganzen Zahl** aus (z. B. der Zahl 13) und möchten diese als Bitfolge darstellen, dann ist die numerische Bedeutung der Zahl bereits festgelegt.

In diesem Spezialfall fällt der Codierungsschritt mit dem **Wechsel des Zahlensystems** zusammen:
- Die Wahl des Zahlensystems (z. B. Binär, Dezimal, Hexadezimal) bestimmt direkt die Darstellung der Zahl als Bitfolge.

Dies gilt jedoch **nur für ganze Zahlen**! Sollen Zahlen mit Nachkommastellen (z. B. 3,14) dargestellt werden, reicht ein Zahlensystem allein nicht aus.
Dann ist eine zusätzliche **Codierung** erforderlich, die festlegt, wie das Komma, die Nachkommastellen und Rundungen repräsentiert werden (z. B. Gleitkommacodierungen wie IEEE 754).

Im **allgemeinen Fall** erzeugt die Codierung die Bitfolge, nicht das Zahlensystem!

```

```{admonition} Merksatz
:class: important

**Codierungen** legen fest, *dass* eine Bitfolge eine bestimmte Bedeutung hat  
(z. B. Zahl, Zeichen, Farbe).

**Zahlensysteme** legen fest, *wie* eine Zahl dargestellt und gelesen wird  
(z. B. zur Basis 2, 10 oder 16).

```
