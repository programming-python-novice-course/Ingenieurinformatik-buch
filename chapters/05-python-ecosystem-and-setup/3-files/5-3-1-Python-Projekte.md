# Python-Projekte

Python-Projekte (klein wie groß) trennen typischerweise drei Dinge:

- **Entrypoint (Startpunkt)**: *Wie* wird ein Programm gestartet? (z. B. `python ...`, ein CLI-Kommando, ein GUI-Button)
- **Geschäftslogik / Workflow**: *Welche Schritte passieren in welcher Reihenfolge?* (A → B → C)
- **Bausteine (Funktionen/Module)**: wiederverwendbare Teile, die die Geschäftslogik aufruft

In großen Softwareprojekten werden diese Dinge oft auf **Unterordner und Dateien** verteilt. In dieser Vorlesung halten wir die Struktur bewusst klein – aber die Problemstellung bleibt dieselbe: Wir müssen festlegen, **wo der Startpunkt ist**, **wo der Ablauf steht** und **wo Bausteine liegen**, damit wir sie später wiederverwenden können.

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

- **`bin/`**: enthält *Entrypoints* (oft kleine Startskripte)
- **`src/my_app/`**: enthält *Bausteine* und ggf. mehrere *Workflows/Programme*
- **`configs/`**, **`data/`**, **`results/`**: trennen Konfiguration, Input und Output
