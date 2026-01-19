# „In Python bestimmt die Formatierung, was passiert.“

In Python bestimmt die Formatierung die Logik. Einrückung ist nicht nur hübsch, sie ist Teil der Sprache.

 Die **Einrückung** (Indentation) bestimmt Blöcke und damit Kontrollfluss. Andere „Formatierung“ (z.B. Leerzeichen um Operatoren) ist dagegen meist **egal** und nur Stil.

## Was steckt dahinter?

Python nutzt die sogenannte **Off-side rule**: Codeblöcke werden durch Einrückung definiert – nicht durch geschweifte Klammern `{}` oder `begin/end`.

### Mini-Beispiel: Einrückung ändert Bedeutung

```python
x = 1
if x > 0:
    print("positiv")
    print("immer noch im if-Block")
print("außerhalb")
```

Wenn Sie die Einrückung verändern, ändern Sie den Block – und damit die Programmlogik.

### Typischer Fehler: IndentationError

```python
if True:
print("oops")
```

Das ist in Python **Syntaxfehler**, nicht nur „schlecht formatiert“.

## Typische Stolperstelle / „Warum passiert das?“

- **Tabs vs. Spaces**: Gemischte Einrückung kann zu Fehlern führen (oder zu Code, der „komisch“ aussieht).
- **Kopieren aus PDFs/Websites**: Unsichtbare Whitespaces verursachen manchmal unerwartete `IndentationError`.
- **„Warum ist das in anderen Sprachen egal?“** Dort definieren `{}` die Blöcke; Einrückung ist nur Konvention.

## Richtigstellung (Takeaways)

- **Einrückung ist in Python Syntax**: Sie bestimmt Blöcke und damit Verhalten.
- **Nicht jede Formatierung ist semantisch**: Leerzeichen um Operatoren sind Stil (z.B. `a=1+2` vs. `a = 1 + 2`).
- Moderne Tools (IDE, Linter, Formatter) helfen, Einrückung konsistent zu halten – aber die Sprache bleibt dabei strikt.


