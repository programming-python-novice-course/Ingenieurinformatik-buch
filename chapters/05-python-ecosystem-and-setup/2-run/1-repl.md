# REPL (V)

Eine REPL ist ideal, um schnell etwas auszuprobieren (ein Ausdruck, ein Import, ein kurzer Test). Im Praktikum ist das vor allem für Mini-Experimente nützlich – für „richtige“ Programme arbeiten wir dann meist mit Skript-Dateien.

## Python

Öffnen Sie Ihre Konsole und rufen

```sh
python
```

auf.
Jetzt können Sie den ``Python``-Code direkt eintippen.
Es wird (in der Regel) das Ergebnis des letzten Ausdrucks ausgegeben.
Zum Beispiel können wir

```python
x = 3 + 6
x + 6
```

rechnen.
Wir können auch Mehrzeilige Befehle abfeuern.
Lassen Sie uns z.B. eine Funktion ``add(x, y)`` definieren:

```python
def add(x, y):
    return x + y

add(9, 5)
```

```{figure} ../../../figs/05-python-ecosystem-and-setup/python-tutorial/environment/repl.png
---
width: 800px
name: fig-repl
---
Ausgabe die auf der Konsole durch die oben angegeben Befehle erzeugt wird.
```

Mit ``quit()`` oder ``ctrl + D`` bzw. ``Strg + D`` beenden Sie den Kommandozeileninterpreter.

## IPython

Mit dem Befehl ``ipython`` starten Sie einen anderen Kommandozeileninterpreter zum interaktiven Arbeiten.
Im Unterschied zu ``python`` (Standard-Interpreter) bietet IPython viele Komfortfunktionen für die REPL, z. B. bessere Fehlermeldungen, Autovervollständigung, Command-History, magische Befehle (z. B. ``%time``) und ein angenehmeres interaktives Arbeiten.

```sh
ipython
```

Wir können den selben Code ausführen:

```{figure} ../../../figs/05-python-ecosystem-and-setup/python-tutorial/environment/ipython.png
---
width: 800px
name: fig-ipython
---
Ausgabe die auf der Konsole durch die oben angegeben Befehle erzeugt wird.
```
