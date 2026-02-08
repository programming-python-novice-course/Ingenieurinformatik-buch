# Eingaben (A)

Wenn wir in Python Texteingaben über das Command Line Interface (CLI) verarbeiten möchten, verwenden wir die Funktion `input()`.

```python
text = input("Eingabe: ")
```

### Was macht `input()`?

- `input()` liest **Text** von der Standard-Eingabe (`stdin`)
- dieser Text wird **unverändert** an unser Programm übergeben
- der Rückgabewert ist **immer vom Typ `str`**
- `input()` nutzt eine **textbasierte Eingabe-Schnittstelle**, die vom Betriebssystem bereitgestellt wird

Beispiele (ausgelagert als Unterkapitel):

- [Beispiel 1: Zahl einlesen und quadrieren (Typumwandlung) (A)](1-eingaben/1-zahl-einlesen-und-quadrieren.md)
- [Beispiel 2: E-Mail-Adresse einlesen (Validierung) (A)](1-eingaben/2-email-validierung.md)

```{admonition} Warnung
:name: warning-input-limitations
:class: warning

`input()` ist ein **didaktisches Werkzeug**, kein Praxisstandard. Es kann nur verwendet werden, wenn die Ausführungsumgebung eine Texteingabe-Schnittstelle (STDIN) bereitstellt. Dies ist der Fall:
- wenn Sie oder Ihre Entwicklungsumgebung (IDE) Ihr Programm in einem Terminal starten (Terminal = stdin)
- wenn Sie Ihr Programm in einem Jupyter Notebook ausführen (Notebook web frontend = stdin)

In der Praxis benutzen Endanwender jedoch kein Terminal oder Jupyter Notebook (generell wollen sie von der Programmierung nichts sehen). Vielmehr geben sie ihre Daten in einer grafischen Nutzeroberfläche ein.
```

