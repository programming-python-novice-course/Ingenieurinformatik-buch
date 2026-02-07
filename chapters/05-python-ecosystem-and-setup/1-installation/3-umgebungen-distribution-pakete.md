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

# Python-Umgebungen: Distribution, Umgebungen, Pakete (S)

Eine Python-Umgebung entsteht nicht von selbst – sie muss irgendwie erzeugt werden.  
Grundsätzlich gibt es dafür zwei Wege:

1. Ausgehend von einer Python-Distribution  
   (z. B. Anaconda, die Python und viele Werkzeuge bereits mitbringt)

2. Ausgehend von einer „reinen“ Python-Installation  
   (z. B. von python.org, mit anschließendem Erzeugen eigener Umgebungen)

Die folgende Abbildung zeigt diesen Zusammenhang schematisch:

```{figure} ../../../figs/05-python-ecosystem-and-setup/distribution_envs_packages.png
---
width: 90%
name: fig-distribution-envs-packages
---
Zusammenspiel von Python-Distribution, Umgebungen (Environments) und Paketen.
```

In {numref}`Abbildung {number} <fig-distribution-envs-packages>` sehen Sie drei Ebenen, die man beim Python-Setup auseinanderhalten sollte:

- Python-Distribution: liefert Python (und oft weitere Werkzeuge) als „Grundpaket“.
- Umgebungen (Environments): getrennte Arbeitsbereiche pro Kurs/Projekt, mit eigener Python-Version und eigenen Paketen.
- Pakete: zusätzliche Bibliotheken (z.B. ``numpy``), die in eine konkrete Umgebung installiert werden.

Im Praktikum verwenden wir Anaconda. Wichtig ist dabei: „Anaconda“ ist kein einzelnes Konzept, sondern deckt mehrere Rollen ab.

## Distribution (Anaconda)

Wir nutzen Anaconda als Python-Distribution. Sie dient als Startpunkt für die Erstellung einer Python-Umgebung: Sie bringt Python (und typischerweise weitere Werkzeuge) mit.

Auf den Praktikumsrechnern ist Anaconda bereits installiert, damit alle mit einer möglichst ähnlichen Basis arbeiten.
Wenn Sie auf Ihrem eigenen Rechner lokal wie im Praktikum arbeiten wollen, installieren Sie Anaconda von der offiziellen Seite:

- [Anaconda Download](https://www.anaconda.com/download)

```{admonition} Hinweis: conda in der Shell
:class: note

Beim Installieren werden Sie ggf. gefragt, ob conda Ihre Shell automatisch anpassen soll. Wir empfehlen, das nicht automatisch machen zu lassen. Stattdessen können Sie es kontrolliert nachholen und gleichzeitig verhindern, dass ``base`` immer automatisch aktiv ist:

    conda init zsh  # macOS (zsh)
    conda config --set auto_activate_base false
```


Hinweis für Windows: Nutzen Sie danach den „Anaconda Prompt“ oder richten Sie conda so ein, dass es in Ihrer Shell verfügbar ist.

## Umgebungen (Environments)

Umgebungen sorgen dafür, dass sich Projekte nicht gegenseitig „kaputtinstallieren“. In {numref}`Abbildung {number} <fig-distribution-envs-packages>` sind das die getrennten Boxen „Environment A/B/C“.

Eine conda-Umgebung ist technisch „nur“ ein Ordner mit einer eigenen Python-Installation und eigenen Paketen.

Wenn man Umgebungen nur über einen Namen anlegt, liegen sie je nach Rechner-Konfiguration an verschiedenen Standardorten. Das ist im Praktikum unpraktisch: Man sieht die Dateien nicht direkt und im schlimmsten Fall liegt eine Umgebung in einem Bereich, der regelmäßig bereinigt wird.

Deshalb nutzen wir im Praktikum konsequent einen konkreten Pfad.

Wählen Sie einen dauerhaften Speicherort für Ihre Umgebungen (keine Temp-Ordner). Fragen Sie im Praktikum Ihre Dozentin/Ihren Dozenten, welche Ordner dafür geeignet sind.

Legen Sie die Umgebung als Ordner an:

```sh
conda create --prefix ./envs/programmierung1 python
```

Alle Umgebungen (inkl. Pfad) sehen Sie mit:

```sh
conda env list
conda info
```

Um mit einer Umgebung arbeiten zu können, müssen Sie sie aktivieren:

```sh
conda activate ./envs/programmierung1
```
In Ihrer Entwicklungsumgebung geht das üblicherweise über das Hinterlegen eines entsprechenden Pfads.


````{admonition} Wichtig (Praktikum): Umgebung benutzen
:class: attention
Prüfen Sie im Praktikum immer zuerst, ob die richtige Umgebung aktiv ist. So vermeiden Sie typische Probleme wie „Paket fehlt“ oder „falsche Python-Version“.
````

````{admonition} Hinweis: Paket „verschwindet“?
:class: note

Wenn Sie vergessen, Ihre Kursumgebung zu aktivieren und dann Pakete installieren, landen diese häufig in der Standardumgebung ``base`` (oder in einer anderen gerade aktiven Umgebung). In Ihrer Kursumgebung fehlen sie dann später scheinbar.

Prüfen Sie im Zweifel immer zuerst, welche Umgebung aktiv ist (z.B. mit ``conda env list``) und aktivieren Sie dann die richtige Umgebung.
````

## Pakete installieren

Pakete werden immer in eine aktivierte Umgebung installiert. In der Abbildung sehen Sie zwei typische Wege:

- ``conda install ...``: Pakete aus der conda-Welt (oft sehr stabil für Data-Science-Pakete).
- ``pip install ...``: Pakete aus PyPI (falls etwas nicht per conda verfügbar ist).

Faustregel im Kurs:

1. Aktivieren Sie zuerst die passende Umgebung (z.B. ``conda activate ./envs/programmierung1``).
2. Versuchen Sie dann ``conda install paketname``.
3. Wenn nötig, nutzen Sie ``pip install paketname`` (aber nur innerhalb der aktivierten Umgebung).
