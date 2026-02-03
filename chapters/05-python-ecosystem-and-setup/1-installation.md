(sec-python-installation)=
# Installation

> Arbeiten mit Python heißt: Arbeiten in einer Python-Umgebung

Eine zentrale Idee, die Sie in dieser Vorlesung verstehen sollen, ist folgende: Python-Code läuft nie „einfach so“, sondern immer innerhalb einer Python-Umgebung.

In einer solchen Python-Umgebung ist festgelegt:
- welche Python-Version verwendet wird und
- welche Pakete (z. B. `numpy`, `pandas`, `matplotlib`) darin installiert sind.

Wenn Sie Python-Code ausführen, arbeitet Ihr Programm immer genau in *einer* solchen Umgebung – auch dann, wenn Ihnen das bisher nicht bewusst war.

**Warum Ihnen das bisher (vielleicht) nicht aufgefallen ist**

Im Rahmen der Vorlesung haben Sie bisher vor allem mit:
- interaktiven Webseiten und
- Jupyter Notebooks auf dem JupyterHub der Hochschule München
gearbeitet.

Dort konnten Sie Python-Code sofort ausführen, ohne selbst etwas installieren zu müssen.  
Das liegt daran, dass Python und alle benötigten Pakete bereits auf einem Server installiert waren. Sie haben sozusagen *von außen* auf eine bestehende Python-Umgebung zugegriffen.

Welche Python-Version und welche Pakete dort konkret installiert waren/sind, können Sie direkt in Python abfragen:

```python
import sys

print("Python-Version:", sys.version)
print("Interpreter:", sys.executable)
```

Diese Vorgehensweise hat einen klaren didaktischen Vorteil:

- Sie können sofort mit Python starten
- Sie können sich auf Konzepte und Programmierung konzentrieren
- Sie müssen sich nicht mit Installation und Konfiguration beschäftigen

Gerade am Anfang ist das hilfreich, weil technische Details sonst vom eigentlichen Lernziel ablenken würden.

**Warum das später nicht mehr reicht**

Wenn Sie Python professionell einsetzen möchten – etwa:
- für größere Projekte,
- in Teams,
- auf anderen Rechnern oder Servern,
- oder über längere Zeiträume hinweg –
dann werden genau diese technischen Fragen wichtig.

Denn Sie möchten sicherstellen, dass Ihr Programm:
- auch mit einer bestimmten Python-Version läuft,
- auch dann noch funktioniert, wenn sich Python weiterentwickelt,
- und auch dann stabil bleibt, wenn sich einzelne Pakete ändern.

Spätestens dann müssen Sie sich mit Fragen beschäftigen wie:

> Wie bekomme ich mein Programm mit einer bestimmten Python-Version und allen benötigten Paketen zum Laufen?  
> Wie kann ich mehrere Python-Versionen auf einem Rechner verwalten?  
> Wie stelle ich sicher, dass die installierten Pakete zur Python-Version passen?


## Python-Umgebungen erzeugen und verwalten

Eine Python-Umgebung entsteht nicht von selbst – sie muss irgendwie erzeugt werden.  
Grundsätzlich gibt es dafür zwei Wege:

1. **Ausgehend von einer Python-Distribution**  
   (z. B. Anaconda, die Python und viele Werkzeuge bereits mitbringt)

2. **Ausgehend von einer „reinen“ Python-Installation**  
   (z. B. von python.org, mit anschließendem Erzeugen eigener Umgebungen)

Die folgende Abbildung zeigt diesen Zusammenhang schematisch:

```{figure} ../../figs/05-python-ecosystem-and-setup/distribution_envs_packages.svg
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

**Python-Distribution**

Wir nutzen Anaconda als Python-Distribution. Sie dient als Startpunkt für die Erstellung einer Python-Umgebung: Sie bringt Python (und typischerweise weitere Werkzeuge) mit.

Auf den Praktikumsrechnern ist Anaconda bereits installiert, damit alle mit einer möglichst ähnlichen Basis arbeiten.
Wenn Sie auf Ihrem eigenen Rechner lokal wie im Praktikum arbeiten wollen, installieren Sie Anaconda von der offiziellen Seite:

- [Anaconda Download](https://www.anaconda.com/download)

Hinweis für Windows: Nutzen Sie danach den „Anaconda Prompt“ oder richten Sie conda so ein, dass es in Ihrer Shell verfügbar ist.

**Umgebungen**

Umgebungen sorgen dafür, dass sich Projekte nicht gegenseitig „kaputtinstallieren“. In {numref}`Abbildung {number} <fig-distribution-envs-packages>` sind das die getrennten Boxen „Environment A/B/C“.

Eine conda-Umgebung ist technisch „nur“ ein Ordner mit einer eigenen Python-Installation und eigenen Paketen.

Wenn man Umgebungen nur über einen Namen anlegt, liegen sie je nach Rechner-Konfiguration an verschiedenen Standardorten. Das ist im Praktikum unpraktisch: Man sieht die Dateien nicht direkt und im schlimmsten Fall liegt eine Umgebung in einem Bereich, der regelmäßig bereinigt wird.

Deshalb nutzen wir im Praktikum konsequent einen konkreten Pfad!

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

**Pakete-Installation**

Pakete werden immer in eine aktivierte Umgebung installiert. In der Abbildung sehen Sie zwei typische Wege:

- ``conda install ...``: Pakete aus der conda-Welt (oft sehr stabil für Data-Science-Pakete).
- ``pip install ...``: Pakete aus PyPI (falls etwas nicht per conda verfügbar ist).

Faustregel im Kurs:

1. Aktivieren Sie zuerst die passende Umgebung (z.B. ``conda activate ./envs/programmierung1``).
2. Versuchen Sie dann ``conda install paketname``.
3. Wenn nötig, nutzen Sie ``pip install paketname`` (aber nur innerhalb der aktivierten Umgebung).

## Praktikum-Setup: Schnellstart

Schritt 1: Prüfen, ob conda installiert ist. Öffnen Sie ein Terminal (unter Windows am einfachsten „Anaconda Prompt“) und führen Sie aus:

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
Schritt 2: Aktivieren Sie Ihre Kurs-Umgebung an

Falls Sie die Kursumgebung noch nicht angelegt haben, erstellen Sie sie wie oben beschrieben. Ansonsten: aktivieren Sie sie direkt:

```sh
conda activate ./envs/programmierung1
```

Falls notwendig: Installieren Sie Pakete 

```sh
conda install numpy matplotlib pandas
```

Wenn ein Paket nicht über conda verfügbar ist, installieren Sie es mit ``pip`` – aber nur, wenn das passende conda-Environment aktiv ist:

```sh
pip install paketname
```

Nachschauen, was installiert ist:

```sh
conda list
```