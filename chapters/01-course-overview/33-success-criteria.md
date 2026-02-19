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

# Python

- Python ist eine Universalsprache (General Purpose Language).

- Python ist *Turing-vollständig*, das bedeutet vereinfacht: "Mit Python kann ein Programmierer theoretisch alle lösbaren Programmieraufgaben umsetzen."

```{figure} ../../figs/01-course-overview/python-logo.png
---
height: 150px
name: fig-python-logo
---
dummy
```

- Python wurde bereits 1990 entwickelt und ist damit älter als z. B. Java.

- In den letzten Jahren ist Python aber besonders stark gewachsen und heute sehr weit verbreitet.

- Der Name „Python“ stammt von der Comedy-Gruppe Monty Python.


```{figure} ../../figs/01-course-overview/languages/programming-language-popularity.png
---
width: 700px
name: fig-language-popularity
---
Popularität der Programmiersprachen nach dem [PYPL Index](https://pypl.github.io/PYPL.html) (logarithmische Skala) -- ``Python`` gefolgt von ``Java``, ``JavaScript``, ``C#`` und ``C++``. 
```


## Warum ist Python so populär?

Ein wichtiger Grund ist, dass Python vergleichsweise leicht zu lesen und zu lernen ist.

Viele Aufgaben lassen sich mit wenig Code ausprobieren und schnell ausführen.

**Beispiel: Gelbe Objekte in einem Bild erkennen**

```{code-cell} python3
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from matplotlib.patches import Rectangle
from io import BytesIO
from urllib.request import urlopen

url = "https://raw.githubusercontent.com/fk03ingenieursinformatik/ingenieurinformatik-buch-deploy/master/img/colors.png"

#url = "https://raw.githubusercontent.com/fk03ingenieursinformatik/ingenieurinformatik-buch-deploy/master/img/colors2.png"


# Logo laden (aus URL) und einfügen
with urlopen(url, timeout=10) as response:
    data = response.read()
img = mpimg.imread(BytesIO(data), format="png")

# Bilder sind in Rot-Grün-Blau unterteilt und haben einen Alphakanal (Transparenz)

rgb = img[:, :, :3]
alpha = img[:, :, 3] if img.shape[2] >= 4 else np.ones(img.shape[:2], dtype=rgb.dtype)
r, g, b = rgb[:, :, 0], rgb[:, :, 1], rgb[:, :, 2]

# "gelb" = rot & grün hoch, blau niedrig, und nicht transparent
yellow_mask = ((alpha > 0.05) & (r > 0.80) & (g > 0.80)  & (b < 0.30)  & (np.abs(r - g) < 0.20))

ys, xs = np.where(yellow_mask)
if len(xs) == 0:
    raise RuntimeError("Keine gelben Pixel gefunden – Schwellwerte ggf. anpassen.")
y0, y1 = ys.min(), ys.max()
x0, x1 = xs.min(), xs.max()

# Ausgabe
fig, ax = plt.subplots(figsize=(5.2, 3.0))
ax.imshow(img)
ax.add_patch(Rectangle((x0, y0), x1 - x0, y1 - y0, fill=False, lw=2, ec="gold"))
ax.set_title("Bounding Box um gelbe Elemente")
ax.axis("off")
plt.show()
```

**Beispiel: Berechnungen durchführen**

```{admonition} Hinweis
Das folgende Beispiel ist nicht für die Online-Ausführung gedacht, sondern zeigt ein lokales Skript (Aufruf in der Konsole/Terminal).
```

Die Summe der Quadratzahlen ausgeben, indem man eine Python-Datei schreibt und diese dann ausführt:

```python
import sys
n = int(sys.argv[1])
squares = sum([(i+1)**2 for i in range(n)])
print(squares)
```

So wird das Programm gestartet:

```
python sum-squares.py 5
```

Als Ausgabe erhalten wir die Summe der Quadratzahlen von 1 bis 5.


Neben der einfachen Syntax spielt das Ökosystem eine große Rolle. Viele Bibliotheken lösen typische Aufgaben, ohne dass man alles selbst implementieren muss:

- Webentwicklung: Django, Flask
- Grafische Oberflächen: PyQt, Tkinter oder Kivy 
- Datenanalyse und Visualisierung: NumPy, SciPy, Pandas und Matplotlib 
- Dokumentation und Teilen von Ergebnissen: Jupyter-Notebooks (auf denen auch diese Website basiert)
- ...

Ein weiterer Faktor ist die breite Unterstützung aus Industrie und Hochschulen, die Werkzeuge, Tutorials und Weiterentwicklung antreibt.

Python ist außerdem in Administration und DevOps verbreitet, weil sich Automatisierungsskripte damit schnell schreiben und warten lassen.

```{admonition} Welche ist die beste Programmiersprache?
:class: remark
:name: remark-no-best-language
Es gibt nicht die eine beste Programmiersprache! Unterschiedliche Sprachen eignen sich für unterschiedliche Aufgaben, Anwendungsbereiche und folgen subjektiven Vorlieben. Softwareentwicklerinnen kennen meiste mehrere Programmiersprachen und wenden diese problem-abhängig an. 

Die wesentlichen Kriterien zur Beurteilung einer Programmiersprache sind:

1. Syntax: Wie der Code geschrieben wird und wie gut er sich lesen lässt.
2. Ökosystem: Welche Bibliotheken, Tools, Dokumentation und Community es gibt.
3. Anwendungsbereiche: Für welche Aufgaben und Domänen die Sprache gut geeignet ist.
4. Performance: Wie schnell Programme laufen und welche Ressourcen sie brauchen.
```






