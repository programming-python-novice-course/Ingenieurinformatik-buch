# Python ausführen

Es gibt verschiedene Möglichkeiten Python-Code auszuführen. 
- einen python interpreter DIREKT starten, wenn wir commandos einmalig ausführen wollen - das machen wir typischerweise wenn wir KEIN Programm entwickeln wollen
-- python -> startet einen consolenanwendung  -> startet eine consolenanwendung, in der sie python befehle eingeben können
-- ipython -> startet ebenfalls eine consolenanwendung, in der sie python befehle eingeben können (aber ist besser weil..)

- ein reines python-Programm an den python interpreter übergeben
-- python2 meinprogramm.py -> übergibt ein reinen Python-programm das in der datei meinprogramm.py abgelegt ist an den pythoninterpreter. der interpreter führt zeile für zeile aus. -> DAS WIRD üblierweise gemacht wenn sie software entwickeln  ("Programmieren")

- ein python-programm starten wollen, bei dem neben echtem python-commandos auch nicht-python-commandos enthalten sind, die zur erklärung oder visualsierung dienen.
--  jupyterlab meinnotebook.oy -> übergibt.. -> DAS wird üblicherweise genutzt wenn sie existierende software nur anwenden ("Skripten")






Die wohl gängigste Technik ``Python``-Anwendungen zu entwickeln ist es den Code in Dateien abzulegen und dieses Datei dann [interpretieren](def-interpreter) zu lassen, d.h., auszuführen.
Insbesondere für die Entwicklung großer Anwendungen (z.B. auch Webseiten) oder Pakete, wie etwa [roboworld](https://github.com/BZoennchen/robo-world), und Skripte, ist diese Methode geeignet.
Notebooks eigenen sich hingegen für kleine Probleme bei denen wir Pakete bzw. Module lediglich Nutzung aber nicht selbst entwickeln.

Manchmal möchten wir aber auch nur ein paar Zeilen Code ausprobieren und zwar ohne irgendeine größere Entwicklungsumgebung zu starten.
Wir haben vielleicht vergessen wie ``Python`` den ``+``-Operator für zwei Listen realisiert und möchten das schnell ausprobieren.
Hierzu kann man durch die sog. *Read, Evaluate, Print, Loop* (REPL) zu Deutsch *Lese-Auswerte-Ausgabe-Schleife* oder auch IPython-shell, direkt mit dem ``Python``-Interpreter interagieren.

## REPL

### Python

Öffnen Sie Ihre Konsole und rufen

```sh
python
```

auf.
Jetzt können Sie den ``Python``-Code direkt eintippen.
Es wird das Ergebnis des letzten Befehl ausgegeben.
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

```{figure} ../../figs/python-tutorial/environment/repl.png
---
width: 800px
name: fig-repl
---
Ausgabe die auf der Konsole durch die oben angegeben Befehle erzeugt wird.
```

Mit ``quit()`` oder ``ctrl + D`` bzw. ``Strg + D`` beenden Sie den Kommandozeileninterpreter.

### IPython

Mit dem Befehl ``ipython`` starten Sie einen anderen Kommandozeileninterpreter zum interaktiven Arbeiten.
Im Unterschied zu ``python`` (Standard-Interpreter) bietet IPython viele Komfortfunktionen für die REPL, z. B. bessere Fehlermeldungen, Autovervollständigung, Command-History, magische Befehle (z. B. ``%time``) und ein angenehmeres interaktives Arbeiten.

Jupyter Notebooks verwenden im Hintergrund einen **IPython-Kernel** (``ipykernel``). Dafür benötigen Sie nicht zwingend ``jupyterlab`` – je nach Setup reicht auch ``jupyter``/``notebook`` bzw. die Installation von ``ipykernel``.

```sh
ipython
```

Wir können den selben Code ausführen:

```{figure} ../../figs/python-tutorial/environment/ipython.png
---
width: 800px
name: fig-ipython
---
Ausgabe die auf der Konsole durch die oben angegeben Befehle erzeugt wird.
```

## Script / Datei

Die nächste Möglichkeit besteht darin den Code in eine ``Python``-Datei zu packen.
Wir öffnen unseren Texteditor unserer Wahl und tippen folgenden Code ein:

```python
import sys

n = int(sys.argv[1])
square_sum = 0

for i in range(n):
    square_sum += (i+1)**2

print(square_sum)
```

Dieser Berechnet uns die Summe der Quadratzahlen von 1 bis ``n``, wobei ``n`` das 1. Argument des Programmaufrufs ist.
Das 0. Argument ist immer der Name der Datei in der das ``Python``-Script steht.
Wir speichern die Datei unter dem Namen ``square_sum.py`` im aktuellen Verzeichnis ab und rufen

```sh
python square_square.py 100
```

und erhalten als Ausgabe die Summe aller Quadratzahlen von 1 bis einschließlich 100. 

Diese besprechen wir im Abschnitt #todo add link to chapters/06-python-ecosystem-and-setup/3-files.md here noch weiter. 

## Jupyter Notebook

Jupyter Notebooks sind die letzte Möglichkeit ``Python``-Code zu entwickeln und auszuführen.
Diese besprechen wir noch im Detail in Abschnitt [Jupyter Notebooks](sec-jupyter-notebooks).
Hier sei nur erwähnt, dass Sie mit

```sh
jupyter lab [path/to/notebook/file]
```

ein bestimmtes Notebook starten und mit 

```sh
jupyter lab
```

die Jupyter-Lab-Umgebung im aktuellen Verzeichnis starten.
Dazu muss das ``jupyterlab`` Modul auf Ihrem System installiert und auffindbar sein.