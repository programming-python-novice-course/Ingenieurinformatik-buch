# Motivation (V)

Lassen Sie uns einmal auf unseren Roboter blicken.
Dieser bewegt sich auf einem Gitter.
Jeder Gitterpunkt ist entweder begehbar oder durch ein Hindernis belegt.
Der Roboter kann nur nach vorne laufen und sich nach links um 90 Grad drehen.
Eine genauere Beschreibung des Roboters und seiner Welt finden Sie in der Übung [Roboterwelt](sec-robo-world).

Die folgende Welt enthält unseren Roboter (türkis), das Ziel (gelb), begehbare Zellen (lila) und unbegehbare Hindernisse (blau).

```{code-cell} python3
:tags: [skip-execution]

import roboworld as rw

world = rw.complex_maze(nrows=5, ncols=7)
world.show()
```

Wir sollen nun einen Algorithmus entwerfen, welcher den Roboter zum Ziel führt (sofern dies möglich ist).
Diese Aufgabe scheint überwältigend schwierig!

Wir verwenden das ``random``-Modul um einen *fairen Münzwurf* zu simulieren.
Zudem verwenden wir lediglich folgende Methoden des Roboters:
- ``turn_left()``
- ``is_wall_in_front()``
- ``move()``
- ``is_at_goal()``

In wie vielen Zeilen Code können wir dieses Problem lösen?
Durch das Potenzial der **Wiederholung** brauchen wir ca. 10 Zeilen Code!

Zuerst definieren wir eine Funktion ``random_move(robo)`` welche den Roboter um einen zufälligen Nachbargitterpunkt bewegt (falls dies möglich ist).

```{code-cell} python3
import random as rnd

def random_move(robo):
    turns = rnd.choice([0,1,2,3])
    for _ in range(turns):
        robo.turn_left()
    if not robo.is_wall_in_front():
        robo.move()
```

Dann nutzten wir die Wiederholung und bewegen den Roboter immer weiter auf zufällige Nachbargitterpunkte bis er am Ziel angekommen ist:

```{code-cell} python3
:tags: [skip-execution]

robo = world.get_robo()
robo.disable_print()
while not robo.is_at_goal():
    random_move(robo)
```

Lassen Sie uns die sog. *Zufallsfahrt* des Roboters ansehen:

```{code-cell} python3
:tags: [skip-execution]

rw.animate(world)
```


Ist dieser Algorithmus besonders klever?
Nein!
Der Algorithmus ist sehr einfach und benötigt unter Umständen sehr viel Rechenzeit.
Dennoch zeigt dieses Beispiel, dass die Wiederholung von einfachen Befehlen zu komplexen Lösungen führen können!

```{only} latex

```{figure} ../../../figs/09-control-flow/roboworld/loops-screenshot.png
---
width: 600px
name: fig-loops-screenshot
---
Screenshot der Roboterwelt-Visualisierung
```
```
