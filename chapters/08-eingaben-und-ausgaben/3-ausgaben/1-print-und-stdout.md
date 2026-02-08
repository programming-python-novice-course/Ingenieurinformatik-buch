# Was macht `print()`? (A)

- `print()` schreibt **Text** auf die Standard-Ausgabe (`stdout`)
- der Text wird **unverändert** an die Ausgabe-Schnittstelle übergeben
- `print()` nutzt eine **textbasierte Ausgabe-Schnittstelle**, die vom Betriebssystem bereitgestellt wird

## Wohin wird ausgegeben?

Die Ausgabe von `print()` geht an die **Standard-Ausgabe** (`stdout`).
Wo diese Ausgabe tatsächlich erscheint, hängt von der Ausführungsumgebung ab:

- **Terminal/Konsole**: Wenn Sie Ihr Programm in einem Terminal starten, erscheint die Ausgabe im Terminal-Fenster
- **Jupyter Notebook**: Wenn Sie Code in einem Jupyter Notebook ausführen, erscheint die Ausgabe unter der Code-Zelle
- **IDE**: In Entwicklungsumgebungen (IDE) erscheint die Ausgabe meist in einem speziellen Ausgabebereich

```{admonition} Hinweis: stdout
:name: tip-stdout
:class: tip

`stdout` (Standard Output) ist ein Konzept aus dem Betriebssystem.
Es bezeichnet den "Standard-Ausgabekanal" eines Programms.
In Python wird `stdout` automatisch mit dem Terminal oder der Notebook-Umgebung verbunden, wenn Sie `print()` verwenden.
```
