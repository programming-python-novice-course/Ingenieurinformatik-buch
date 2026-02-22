
# Praktikum-Setup (V)

Im Praktikum arbeiten wir lokal, damit Sie Werkzeuge kennenlernen, die in echten Projekten Standard sind: eine feste Python-Umgebung, Paketverwaltung und ein reproduzierbarer Start.

Für schnelles Ausprobieren sind Live-Code/Notebooks gut – im Praktikum üben wir zusätzlich den typischen Projekt-Workflow: Interpreter/Umgebung wählen, Pakete gezielt installieren und immer in der richtigen Umgebung ausführen (auch wenn das Programm nur aus einer Datei besteht).


## Schritt 1: Prüfen, ob `conda` verfügbar ist

Öffnen Sie ein Terminal (unter Windows am einfachsten „Anaconda Prompt“) und führen Sie aus:

```sh
conda --version
python --version
```

Wenn `conda` nicht gefunden wird, lesen Sie zuerst den Hintergrundteil:  
→ [Python-Umgebungen: Distribution, Umgebungen, Pakete](2-umgebungen-distribution-pakete.md)

## Schritt 2: Kursumgebung anlegen (falls nötig)

Legen Sie die Kursumgebung als Ordner an (Pfad-basiert, damit sie im Projekt sichtbar ist):

```sh
conda create --prefix ./envs/programmierung1 python
```

Alle Umgebungen sehen Sie mit:

```sh
conda env list
```

## Schritt 3: Kursumgebung aktivieren

Aktivieren Sie die Umgebung über den Pfad:

```sh
conda activate ./envs/programmierung1
```

```{figure} ../../../figs/05-python-ecosystem-and-setup/active_env.png
---
width: 600px
name: fig-active-env
---
Nach dem Aktivieren einer Umgebung steht ihr Name bzw. Pfad in Klammern vor der Eingabeaufforderung (Prompt).
```

Prüfen Sie zur Sicherheit, dass Sie wirklich die erwartete Python-Version/den erwarteten Interpreter verwenden:

```sh
python --version
python -c "import sys; print(sys.executable)"
```

## Schritt 4: Pakete installieren (falls nötig)

```sh
conda install numpy matplotlib pandas
```

Wenn ein Paket nicht über conda verfügbar ist, installieren Sie es mit `pip` – aber nur, wenn die Kursumgebung aktiv ist:

```sh
pip install paketname
```

## Schritt 5: Nachschauen, was installiert ist

```sh
conda list
```

## Schritt 6: Hinterlegen der Umgebung in der IDE

Hierzu werden Sie im Rahmen des Praktikums mehr erfahren.



## Typische Stolpersteine

- Falscher Interpreter in der IDE: das Programm läuft, aber Pakete fehlen oder Versionen sind anders.  
  → Prüfen Sie `python -c "import sys; print(sys.executable)"` im Terminal und wählen Sie denselben Interpreter in der IDE.
- Umgebung nicht aktiviert: `pip install ...` landet in `base` oder irgendwo anders.  
  → Vor jedem Installieren: `conda activate ./envs/programmierung1`.
- Paket „verschwindet“: installiert, aber später nicht importierbar.  
  → Meist: Installation in falscher Umgebung; prüfen Sie `conda env list` / `conda list`.
- `conda` vs `pip` gemischt: funktioniert oft, aber kann zu Konflikten führen.  
  → Faustregel: erst `conda install ...`, nur falls nötig `pip install ...` (immer in der aktivierten Umgebung).
