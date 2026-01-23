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


```{code-cell} python3
:tags: [skip-execution]

%matplotlib inline
import matplotlib as mpl
mpl.rcParams["animation.html"] = "jshtml"
mpl.rcParams["animation.embed_limit"] = 50

import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

name = "Christina Mayr"

fig, ax = plt.subplots(figsize=(7, 2))
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
ax.axis("off")

t = ax.text(0.5, 0.5, "", ha="center", va="center", fontsize=28)

def update(frame):
    t.set_text(name[:frame])
    return (t,)

ani = FuncAnimation(fig, update, frames=len(name)+1, interval=200, blit=True)
plt.close(fig)

ani

```