---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Praktikum-Setup: Schnellstart (V)

Schritt 1: Prüfen, ob conda verfügbar ist. Öffnen Sie ein Terminal (unter Windows am einfachsten „Anaconda Prompt“) und führen Sie aus:

```sh
conda --version
python --version
```

Schritt 2: Kursumgebung aktivieren

Falls Sie die Kursumgebung noch nicht angelegt haben, erstellen Sie sie wie oben beschrieben. Ansonsten aktivieren Sie sie direkt:

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

Schritt 3: Pakete installieren (falls nötig)

```sh
conda install numpy matplotlib pandas
```

Wenn ein Paket nicht über conda verfügbar ist, installieren Sie es mit ``pip`` – aber nur, wenn die Kursumgebung aktiv ist:

```sh
pip install paketname
```

Schritt 4: Nachschauen, was installiert ist

```sh
conda list
```
