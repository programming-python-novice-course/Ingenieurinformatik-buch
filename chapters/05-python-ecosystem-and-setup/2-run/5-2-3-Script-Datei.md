# Script / Datei

Im Praktikum ist das der Standard: Sie schreiben Code in `.py`-Dateien und führen diese aus (im Terminal oder über Ihre IDE).

Die wohl gängigste Technik, Python-Anwendungen zu entwickeln, ist es, Code in **Dateien** (z. B. `mein_script.py`) abzulegen und diese dann vom Python-Interpreter ausführen zu lassen.

Wir öffnen unseren Texteditor unserer Wahl und tippen folgenden Code ein:

```python
import sys

n = int(sys.argv[1])
square_sum = 0

for i in range(n):
    square_sum += (i+1)**2

print(square_sum)
```
Wir speichern die Datei unter dem Namen ``square_sum.py`` im aktuellen Verzeichnis ab.
Was passiert? Das Skript

- berechnet die Summe der Quadratzahlen von 1 bis ``n``, wobei ``n`` das **erste Argument** des Programmaufrufs ist und
- nutzt `sys.argv` (Argumente aus der Kommandozeile).

Das 0. Argument ist immer der Name der Datei in der das ``Python``-Script steht.
Nun führen wir die Datei aus:

```sh
python square_sum.py 100
```
und erhalten als Ausgabe die Summe aller Quadratzahlen von 1 bis einschließlich 100. 

Wie man Skripte sinnvoll strukturiert (Entrypoint/Workflow/Bausteine, Guard, Import) besprechen wir im nächsten Abschnitt: {ref}`Python-Skripte <sec-python-scripts>`.
