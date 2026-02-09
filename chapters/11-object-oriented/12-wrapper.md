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

# Wrapper-Funktion 

Wir schreiben eine neue Funktion, die die plot() Funkion von matplotlib ersetzen soll. In Zukunft können dann alle Personen diese Funktion nutzen anstelle der matplotlib plot Funktion. 

Die Funktion plot_line_with_logo
- ruft intern matplotlib plot funktionalität auf
- fügt dann noch das logo hinzu

Man spricht hier auch davon, dass plot_line_with_logo eine wrapper funktion ist (sie wrapped die matplotlib funktionaliät)


```{code-cell} python3

import matplotlib.pyplot as plt

def load_logo(url: str):
    """Lädt das Logo von einer URL (PNG) als Bildarray."""
    with urlopen(url, timeout=10) as response:
        data = response.read()
    return mpimg.imread(BytesIO(data), format="png")


def add_logo(ax, logo, *, zoom: float = 0.07, xy=(0.92, 0.88)):
    """Fügt ein Logo oben rechts in ein Axes-Objekt ein."""
    imagebox = OffsetImage(logo, zoom=zoom)
    ab = AnnotationBbox(imagebox, xy, xycoords="axes fraction", frameon=False)
    ax.add_artist(ab)
    return ab

def plot_line_with_logo(x, y, *, logo_url: str = LOGO_URL, **plot_kwargs):
    fig, ax = plt.subplots()
    ax.plot(x, y, **plot_kwargs)
    add_logo(ax, load_logo(logo_url))
    return fig, ax


fig, ax = plot_line_with_logo([0, 1, 2, 4, 6], [2, 1, 3, 0, 1], color="tab:blue")
ax.set_title("Wrapper: Plot + Logo")
plt.show()
```

**Was ist daran „ungut“?**

Ein Wrapper ist nicht „falsch“ – aber in der Praxis hat er typische Probleme:

Skalierung: Heute Linie, morgen `scatter`, dann `hist`, dann mehrere Subplots … der Wrapper wächst schnell oder es entstehen viele Wrapper.

- plot_line_with_logo -> ruft intern matplotlib...plot auf
- plot_scatter_with_logo -> ruft intern matplotlib...scatter
- plot_hist_with_logo -> ruft intern 
- ..

Unschön: Wir haben dann ganz viel neue Funktionen ...

Disziplin: Alle müssen den Wrapper konsequent verwenden. Sobald jemand `plt.subplots()` direkt nutzt, fehlt das Logo wieder.


Die Frage ist also: können wir irgendwie anders das Logo hinzufügen ohne zu wrappen?


