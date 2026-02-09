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

# Skript

Eine Variante wie wir das Logo einbinden können, ist, dass wir unser Python-Skript einfach durch die entsprechende Logik erweitern.

```{code-cell} python3
from io import BytesIO
from urllib.request import urlopen

import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from matplotlib.offsetbox import OffsetImage, AnnotationBbox

LOGO_URL = "https://github.com/fk03ingenieursinformatik/ingenieurinformatik-buch-deploy/blob/master/img/logo-mini.png?raw=true"

fig, ax = plt.subplots()
ax.plot([0, 1, 2, 4, 6], [2, 1, 3, 0, 1]) # Grafik-Teil
ax.set_title("Messreihe (mit Logo)")

# Logo laden (aus URL) und einfügen
with urlopen(LOGO_URL, timeout=10) as response:
    data = response.read()
logo = mpimg.imread(BytesIO(data), format="png")
imagebox = OffsetImage(logo, zoom=0.07)
ab = AnnotationBbox(imagebox, (0.92, 0.88), xycoords="axes fraction", frameon=False)
ax.add_artist(ab)

plt.show()
```

Wenn wir eine neue Grafik brauchen kopieren wir das Skript und ändern den Grafik-Teil ab. 

Problem: 
- irgendwann haben wir ganz viele Kopien und wenn sich dann zum Beispiel das Logo ändert, müssen wir es 100000mal abändern in jedem einzelnen Skript. 

Lösung:
- wir möchten die Logo-Logik nicht in jedes Skript kopieren, sondern an **einer** Stelle zentral pflegen (z.B. als Wrapper oder als OO-Erweiterung).

