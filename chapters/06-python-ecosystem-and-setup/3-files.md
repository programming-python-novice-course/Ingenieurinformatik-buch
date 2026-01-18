# Python-Skripte

(sec-python-scripts)=

Die wohl gängigste Technik ``Python``-Anwendungen zu entwickeln ist es den Code in Dateien abzulegen und dieses Datei dann [interpretieren](def-interpreter) zu lassen, d.h., auszuführen.
Insbesondere für die Entwicklung großer Anwendungen (z.B. auch Webseiten) oder Pakete, wie etwa [roboworld](https://github.com/BZoennchen/robo-world), und Skripte, ist diese Methode geeignet.

Wir haben in [Programmieren](sec-programming) darüber gesprochen, dass **Software** aus mehreren Programmen bestehen kann. Über die **Entrypoints** werden verschiedene geschäftslogiken (<"Abläufe") gestartet, die verschiedene "bausteine" ausführen.

In großen Softwareprojekten mit mehreren Programmen werden die **Entrypoints**, die **Abläufe (Workflows)** und die **Bausteine** meist in einer klaren Struktur abgelegt. Hier ein typisches Beispiel:

```text
my_app/
├─ README.md                   # Einstieg: Was ist das Projekt? Wie nutze ich es?
├─ bin/                        # Entrypoints (Startskripte)
│  ├─ run_design_gui.py        # startet Programm A (interaktiv, ggf. GUI)
│  └─ run_optimize.py          # startet Programm B (Batch/Optimierung, ohne GUI)
├─ src/
│  └─ my_app/                  # Python-Paket (wiederverwendbarer Quellcode)
│     ├─ __init__.py
│     ├─ shared_logic/
│     │  └─ simulator.py       # gemeinsamer Kern: Simulation/Berechnung
│     └─ programs/
│        ├─ design.py          # Geschäftslogik A: „Auslegung/Interaktion“
│        └─ optimize.py        # Geschäftslogik B: „Optimierung/Batch“
├─ configs/
│  └─ default.yaml             # Konfiguration (z. B. Parameterprofile)
├─ data/
│  └─ input.csv                # Beispieldaten
└─ results/
   └─ output.csv               # Ergebnisdaten (z. B. vom Batch-Lauf erzeugt)
```

So lesen Sie diese Struktur:

- **`bin/`**: Enthält die *Startpunkte*. Diese Dateien sind meist klein und rufen nur die eigentliche Geschäftslogik auf.
- **`src/my_app/`**: Enthält die *Bausteine* (wiederverwendbare Funktionen/Klassen) und ggf. mehrere *Workflows/Programme*.
- **`configs/`**, **`data/`**, **`results/`**: Trennen Konfiguration, Eingabedaten und Ergebnisse (je nach Projektgröße/Team sehr hilfreich).

Wichtig: das ganze ist nur ein beispiel, das ihnen verdeutlichen soll, dann unterschiedliche funktionalitäten einer software üblicherweise an unterschiedlichen stellen (also in unterschiedlichen dateien) abgelegt werden. Wo was wie am besten abgelegt wird - damit beschäftigt siche softwarearchitekten!!

## Was wir machen werden im Rahmen der Vorlesung

In der Vorlesung/Übung wollen wir uns auf Konzepte der Porgroammierung anhand von Python kverstehen. Damit Sie sich darauf konzentrieren können, verzichten wir bewusst auf eine  komplexe ordnerstruktur und arbeiten stattdessen mit einer python-datei. Diese enthält sowohl:
- einen **Entrypoint** 
- eine **Workflow/Geschäftslogik** (A → B → C) 
- alsu auch **Bausteine** (Funktionen/Module) auf.

Wichtig ist zu wissen: Wenn Sie eine Datei direkt ausführen, arbeitet Python sie **von oben nach unten** ab (Top-Level-Code).
Der *Entrypoint* ist dabei **nicht** „die erste Zeile“, sondern der **Start des Programms** (z. B. der Aufruf `python mein_script.py`).
Praktisch bedeutet das: Alles, was auf oberster Ebene steht, wird beim Start einmal ausgeführt (Imports, Variablenzuweisungen, `print(...)`, usw.). Funktionsdefinitionen werden dabei *angelegt*, aber nicht automatisch *ausgeführt*.

### Beispiel: Skript ohne Funktionen (Top-Level-Workflow)

```python
# Datei: mein_script.py
# Entrypoint: Sie starten dieses Programm mit: python mein_script.py

print("Programm startet")      # wird beim Start ausgeführt (Top-Level)

# Workflow/Geschäftslogik (A → B → C) als einfacher Ablauf:
x = 10                         # A
y = x * 2                      # B

x2 = 11                         #C
y2 = x2 * 2                     # D

x3 = 14                        #E 
y3 = x3 * 2                     # F

ergebnis = y + y2 + y3

print("Ergebnis:", ergebnis)          # C
```

## Beispiel Skript mit Funktionen:

Wie sie sehen wird in Schritt B und D und F die gleiche Logik (mal zwei nehmen) ausgeführt. das ist blöd weill 

Deshalb können wir das umschreiben:
```python
# Datei: mein_script.py
# Entrypoint: Sie starten dieses Programm mit: python mein_script.py

print("Programm startet")      # wird beim Start ausgeführt (Top-Level)

# Workflow/Geschäftslogik (A → B → C) als einfacher Ablauf:
der mal_zwei(zahl):
    zwischenergebnis = zahl * 2
    return zwischenergebnis

x = 10
y = zwischenergebnis(x)

x2 = 11
y2 = zwischenergebnis(x2)

x3 = 14
y3 = zwischenergebnis(x3)

ergebnis = y + y2 + y3

print("Ergebnis:", ergebnis)          
```

## Skript mit Funktionen und Guard 

So werden unsere skripte im praktkum standardmäßig aufgebaut sein!!!

Auch wenn wir in der vorlesung keine komplexen softwarestrukturen bauen wollen, kann es vorkommen, dass sie ein skript erstellt haben mit einer funktion, die sie nun in einem anderen skript nutzen möchten. das problem ist, dass python ja immer jede zeile ausführt. was sie möchten: sie möchten die funktion nutzen ohne dass der restliche Ablauf „automatisch“ der in dem skript enthalten ist.

wir müssen also sicherstellen dass der "entrypoint" korrekt ist:

- entrypoint: skript2 -> skript 2 ruft funktion aus skript 1 auf.


das erreichehn wir über den guard `if __name__ == "__main__":`-Block zu legen (siehe nächster Abschnitt).


## `if __name__ == "__main__":` (Guard)

Häufig möchten Sie Funktionen aus einer Datei **importieren und wiederverwenden**, 
Dafür nutzt man einen Guard:

```python
def simulate(...):
    ...

if __name__ == "__main__":
    # nur ausführen, wenn die Datei als Programm gestartet wurde
    ...
```

So bleibt die Datei sowohl als **Modul** (importierbar) als auch als **Programm** (direkt ausführbar) nutzbar.


