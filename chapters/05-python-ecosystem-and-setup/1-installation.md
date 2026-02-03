(sec-python-installation)=
# Installation

> Wie bekomme ich mein Programm mit einer bestimmten Python-version und allen paketen die ich dafür brauche zum laufen? Wie beziehe ich eine bestimmte Python-Version (auf Ihrem Rechner können Sie mehrere installieren)? Wie schaffe ich es, dass darin wiederum Paket installiert werden, die mit der Python-Version kompatibel sind?

Diese Frage scheint erstmal trivial, aber...

```{figure} ../../figs/05-python-ecosystem-and-setup/python-tutorial/environment/python_tooling.png
---
width: 900px
name: fig-python-tooling
---
Überblick über typische Bausteine einer Python-Arbeitsumgebung (Versionen, Umgebungen, Paketverwaltung).
```

- **Python-Versionsmanager**: ermöglicht das Installieren und Wechseln zwischen verschiedenen Python-Interpreter-Versionen (z. B. 3.10, 3.11, 3.12)  
  *Beispiel für ein Tool:* `pyenv`

- **Python-Distribution**: liefert einen Python-Interpreter zusammen mit einer vorab ausgewählten Sammlung an Paketen („fertiges Ökosystem“)  
  *Beispiel für ein Tool:* `Anaconda`

- **Environment-Manager**: erstellt und verwaltet isolierte Python-Environments, sodass Projekte voneinander getrennt bleiben  
  *Beispiel für ein Tool:* `venv`

- **Package-Manager**: installiert, aktualisiert und entfernt Pakete innerhalb eines bestehenden Environments  
  *Beispiel für ein Tool:* `pip`

- **Project-Manager**: beschreibt Projektabhängigkeiten und sorgt für ein reproduzierbares Setup aus Environment und Paketen  
  *Beispiel für ein Tool:* `poetry`

 Wichtig: Sie müssen nicht im Detail verstehen, wie die einzelnen Tools funktionieren! Sondern dass sie sich um unterschiedliche Aufgabenkümmern!

 Das Tool das sie Im Praktikum verwenden ist Anaconda. Es hat eine Sonderstellung, da es gleich mehrere Aufgaben gleichzeitig für Sie übernimmt. Anaconda ist gleichzeitig:
- eine *Python-Distribution*, 
- ein *Environment-Manager* und 
- ein *Package-Manager*.

## Python-Setup in der Vorlesung

In diesem Kurs gibt es zwei sehr unterschiedliche Arbeitsweisen – und genau deshalb sieht auch das „Python-Setup“ unterschiedlich aus.

In der Vorlesung nutzen wir die interaktive Kurs-Website. Dort ist die komplette Umgebung bereits eingerichtet (Python, Notebooks, benötigte Pakete). Sie müssen auf Ihrem eigenen Rechner dafür nichts installieren.

Auch auf der alternativen Plattform (JupyterHub der Hochschule München) ist in der Regel alles vorinstalliert. Der Fokus liegt hier darauf, dass Sie Konzepte verstehen und mit Notebooks arbeiten können – nicht darauf, Installation und Tooling zu debuggen.

Wenn Sie auf der Website oder im JupyterHub prüfen möchten, was verfügbar ist, reichen meist diese zwei Befehle in einem Terminal/Notebook:

```sh
python --version
pip list
```
Falls ein Paket fehlt: In {ref}`sec-python-beispiele` sehen Sie ein Beispiel, wie man Pakete nachinstallieren kann.

## Praktikum: lokale Entwicklungsumgebung (Tooling lernen)

Im Praktikum arbeiten Sie nicht mit der interaktiven Website, sondern in einer „richtigen“ Entwicklungsumgebung. Hier geht es darum, Werkzeuge kennenzulernen, die das Programmieren in größeren Projekten erleichtern, z.B.:

- Arbeiten in einer IDE (Projektstruktur, Dateien, Run-Konfigurationen)
- Debugging
- Paketverwaltung und reproduzierbare Umgebungen

Auf den Praktikumsrechnern ist Anaconda bereits installiert. Wenn Sie zu Hause arbeiten möchten, installieren Sie am besten ebenfalls Anaconda, damit Ihr Setup möglichst nah an den Praktikumsrechnern ist.

## Warum Anaconda (und was ist das überhaupt)?

Anaconda ist eine Python-Distribution, die den Paketmanager ``conda`` mitbringt und das Verwalten von Umgebungen erleichtert. Für den Kurs ist vor allem wichtig:

- Sie können pro Kurs/Projekt eine eigene Umgebung anlegen.
- Pakete lassen sich zuverlässig installieren (insbesondere im wissenschaftlichen Python-Ökosystem).

## Praktikum-Setup: Schnellstart

### 1) Prüfen, ob conda da ist

Öffnen Sie ein Terminal (unter Windows am einfachsten „Anaconda Prompt“) und führen Sie aus:

```sh
conda --version
python --version
```

```{figure} ../../figs/05-python-ecosystem-and-setup/python-tutorial/environment/conda-version.png
---
width: 600px
name: fig-conda-version
---
```

### 2) Eigene Kurs-Umgebung anlegen

Arbeiten Sie nicht dauerhaft in der ``base``-Umgebung. Legen Sie stattdessen eine Umgebung für den Kurs an, z.B. ``ii``:

```sh
conda create -n ii python
conda activate ii
```

### 3) Pakete installieren und JupyterLab starten (falls benötigt)

```sh
conda install jupyterlab numpy matplotlib pandas
jupyter lab
```

```{figure} ../../figs/05-python-ecosystem-and-setup/python-tutorial/environment/jupyter-lab-start.png
---
width: 800px
name: fig-jupyter-lab-start
---
JupyterLab im Browser.
```

### 4) Nachschauen, was installiert ist

```sh
conda list
```

## conda und pip: eine kurze Faustregel

- Versuchen Sie zuerst ``conda install paketname``.
- Wenn ein Paket nicht über conda verfügbar ist, installieren Sie es mit ``pip`` – aber nur, wenn das passende conda-Environment aktiv ist:

```sh
pip install paketname
```

## Anaconda zu Hause installieren (optional, aber empfohlen)

Wenn Sie auf Ihrem eigenen Rechner lokal wie im Praktikum arbeiten wollen, installieren Sie Anaconda von der offiziellen Seite:

- [Anaconda Download](https://www.anaconda.com/download)

Hinweis für Windows: Nutzen Sie danach den „Anaconda Prompt“ oder richten Sie conda so ein, dass es in Ihrer Shell verfügbar ist.