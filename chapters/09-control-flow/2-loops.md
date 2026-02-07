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

(sec-loops)=
# Schleifen (A)


Erinnern Sie sich noch an unser Roboterbeispiel aus dem Kapitel {ref}`sec-python-beispiele`?

Zur Erinnerung: Das Ziel war, dass ein Roboter eine Zielkachel in einem Labyrinth findet.

```{code-cell} python3
:tags: [skip-execution]

%matplotlib inline
import matplotlib as mpl
mpl.rcParams["animation.html"] = "jshtml"
mpl.rcParams["animation.embed_limit"] = 50


import roboworld as rw

world = rw.complex_maze(nrows=8, ncols=3)
world.show()
```

In diesem Kapitel werfen wir einen genaueren Blick auf den Algorithmus, mit dem der Roboter ans Ziel kommt.
Die Idee war: Der Roboter wählt zufällig eine neue Richtung und macht (falls möglich) einen Schritt auf ein freies Feld.

Je nachdem, wie weit das Ziel entfernt ist, wie komplex das Labyrinth ist und wie viel Pech der Roboter hat,
kann das mal mehr oder weniger lang dauern.

Wichtig ist: Wir wissen vorher nicht, wie viele Schritte nötig sein werden – vermutlich sind es sehr viele.
Und genau dafür brauchen wir Schleifen.

Als informeller Ablauf sieht das so aus:

```text
solange der Roboter nicht am Ziel ist:
  - zufällig drehen
  - wenn kein Hindernis vor ihm ist: einen Schritt vorwärts
```


Nachdem wir uns mit dem roboworld-Bibliothek vertraut gemacht haben (hinweis: sie müssen die roboworld biltiothek nicht kennen - sie dient hier nur der geschichte.) und festgestellt haben was der robo alles kann, schreiben wir eine Funktion `random_move(robo)`, die genau einen solchen Zufallsschritt ausführt:

```{code-cell} python3
import random as rnd

def random_move(robo):
    turns = rnd.choice([0, 1, 2, 3])
    for _ in range(turns):
        robo.turn_left()
    if not robo.is_wall_in_front():
        robo.move()
```

Wir könnten nun versuchen, ein Programm zu schreiben, das wie folgt aussieht:

```{code-cell} python3
:tags: [skip-execution]

robo = world.get_robo()
robo.disable_print()

random_move(robo)
random_move(robo)
random_move(robo)
random_move(robo)
random_move(robo)

rw.animate(world)
```
**Was ist das Problem?**

- 1. wir wissen gar nicht wann wir fertig sind - im Zweifel ist er noch nicht angekommen!
- 2. wir kopieren eine Logik immer und immer wieder

**Geht das nicht besser?**

Ja, indem wir sogenannte *Schleife* nutzen: 

```{code-cell} python3
:tags: [skip-execution]

robo = world.get_robo()
robo.disable_print()
while not robo.is_at_goal():
    random_move(robo)

rw.animate(world)
```
*Schleifen* können ihnen das Leben sehr viel erleichtern und deshalb sehen wir uns im folgenden genauer an welche Arten es gibt.