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



# Python-Beispiele

Am besten testen Sie den Live-Code gleich selbst aus! Aktivieren Sie „Live Code“ über die Rakete und führen Sie „Run“ aus.


```{code-cell} python3
:tags: [skip-execution]

myname = "Christina"
print("hello")
print(myname)
```
Das ist nicht ihr Name? Dann ändern sie den Namen einfach ab und führen erneut "Run" aus.

Wie der Live-Code funktioniert, wieso man auf einer Website Python-Code ausführen kann, ist technisch relativ komplex - auch wenn es für Sie nicht so aussieht. Aber im Hintergrund laufen viele Prozesse ab, von denen wir einen Teil in dieser Vorlesung auch besprechen werden.

Wichtig für Sie ist zu wissen, was Sie hier auf der Website alles tun können. Wie Sie bereits gesehen haben, können ein Python-Programm ausführen, aber auch verändern. 

**Installieren von Paketen**

Zusätzlich dazu können Sie Python-Pakete installieren und nutzen. Pakete, einfach gesprochen, stellen Ihnen Funktionalitäten bereit, sodass Sie selbst nicht so viel programmieren müssen.  Zum Beispiel ermöglicht das Python-Paket pyfiglet Schriftbanner zu erstellen. Wenn Sie die folgende Code-Zelle ausführen, wird das Paket installiert. Anschließend sagen wir Python dass wir es nutzen möchten ("importiert") und dann nutzen wir die Schritft-Banner-Funktionalität.


```{code-cell} python3
:tags: [skip-execution]

!pip install pyfiglet
import pyfiglet

myname = "Christina"
print(pyfiglet.figlet_format(f"Hello {myname}"))
```

Wichtig: Sie müssen in diesem Beispiel und den folgenden beispielen den programmcode nicht verstehen. Es geht nur darum zu zeigen, was wir auf der website möglich ist. einiges davon werden wir im laufe der vorlesung nutzen, wie zum beispiel dass wir Animationen programmieren und hier direkt auf der website ausführen.

**Programmierte Animationen**

Sie können im Live-Code auch Animationen erstellen und ausführen. 

```{code-cell} python3
:tags: [skip-execution]

# -----------------------------
# Einstellungen
# -----------------------------

myname = "Christina"         # Dein Name
fontsize = 28                # Schriftgröße
letter_spacing = 0.9         # Abstand zwischen Buchstaben (kleiner = enger, größer = weiter)
frame_interval = 60          # Geschwindigkeit der Animation (größer = langsamer)
random_colors = True         # True = zufällige Farben, False = schwarz

# -----------------------------
# Programm
# -----------------------------

import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
import random

start_height = 1.4            # Startposition der Buchstaben (größer = weiter oben)
fly_frames = 10               # Dauer des Einfliegens (größer = langsamer)
target_height = 0.5           # Zielposition (vertikale Mitte)
message = f"Hello {myname}"   # Schriftzug

fig, ax = plt.subplots(figsize=(8, 2))
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
ax.axis("off")

font = dict(fontfamily="DejaVu Sans Mono", fontsize=fontsize)

# Horizontale Positionen automatisch berechnen
dx = letter_spacing / max(1, len(message) - 1)
x0 = 0.5 - dx * (len(message) - 1) / 2
xs = [x0 + i * dx for i in range(len(message))]

# Textobjekte erzeugen
letters = []
for i, ch in enumerate(message):
    color = (
        random.random(), random.random(), random.random()
    ) if random_colors else "black"

    txt = ax.text(
        xs[i],
        start_height,
        ch,
        ha="center",
        va="center",
        color=color,
        **font
    )
    letters.append(txt)

# Animationsfunktion
def update(frame):
    for i, txt in enumerate(letters):
        start = i
        end = i + fly_frames

        if frame < start:
            y = start_height
        elif frame >= end:
            y = target_height
        else:
            y = start_height + (target_height - start_height) * (frame - start) / fly_frames

        txt.set_position((xs[i], y))
    return letters

ani = FuncAnimation(
    fig,
    update,
    frames=len(message) + fly_frames + 1,
    interval=frame_interval,
    blit=True
)

plt.close(fig)
ani
```
**Komplexere Animationen**

Oder falls ihnen das immer noch zu langweilig ist: einen Robotor den Ausweg aus einem Labyrinth finden lassen. 

Die folgende Welt enthält unseren Roboter (türkis), das Ziel (gelb), begehbare Zellen (lila) und unbegehbare Hindernisse (blau).

```{code-cell} python3
:tags: [skip-execution]

%matplotlib inline
import matplotlib as mpl
mpl.rcParams["animation.html"] = "jshtml"
mpl.rcParams["animation.embed_limit"] = 50


import roboworld as rw

world = rw.complex_maze(nrows=5, ncols=7)
world.show()
```

Der Roboter kann nur nach vorne laufen und sich nach links um 90 Grad drehen.

```{code-cell} python3
:tags: [skip-execution]

import random as rnd

%matplotlib inline
import matplotlib as mpl
mpl.rcParams["animation.html"] = "jshtml"
mpl.rcParams["animation.embed_limit"] = 50


def random_move(robo):
    turns = rnd.choice([0,1,2,3])
    for _ in range(turns):
        robo.turn_left()
    if not robo.is_wall_in_front():
        robo.move()


robo = world.get_robo()
robo.disable_print()
while not robo.is_at_goal():
    random_move(robo)

rw.animate(world)
```