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

# Lösung mit Library

Wir sehen uns an, wie man mit "Einkaufsteilen" (Bibliotheken) sehr schnell Programme erstellen kann. Eine wichtige Regel in der Softwareentwicklung ist: "Do not reinvent the wheel!" Das heißt: Nutzen Sie Einkaufsteile, die gut getestet sind und gewartet werden! Eine Sammlung von Einkaufsteilen wird in der Softwareentwicklung als **Library** bezeichnet. Konkret sehen wir uns an, wie Julia das Fallbeispiel mithilfe einer Library lösen kann.


```{admonition} Hinweis
:class: remark

Sie können im interaktiven Modus keine lokalen Dateien einlesen, da der Code auf einem Server ausgeführt wird, auf den Sie keinen direkten Zugriff haben. Die Datei liegt bereits auf dem Server unter dem Pfad `/home/jovyan/data/air_quality_no2.csv`.
```

Als erstes lesen wir die Messdaten aus der CSV-Datei ein und werfen einen ersten Blick auf die Tabelle.

```{code-cell} python3
:tags: [skip-execution]

import pandas as pd

df = pd.read_csv(
    "/home/jovyan/data/air_quality_no2.csv",
    parse_dates=["datetime"]
)

df.head()
```

Als Nächstes bereiten wir die Daten so vor, dass Zeitpunkte bequem als Index genutzt werden können.

```{code-cell} python3
:tags: [skip-execution]

df = df.set_index("datetime")
df.head()
```

Nun lassen wir uns zentrale Kennwerte (z. B. Mittelwert, Standardabweichung und Perzentile) automatisch berechnen.

```{code-cell} python3
:tags: [skip-execution]

stats = df.describe().T
stats
```

Zum Abschluss visualisieren wir die Verteilung der Messwerte als Histogramm.

```{code-cell} python3
:tags: [skip-execution]

import matplotlib.pyplot as plt  # pandas uses matplotlib!

ax = df.hist()
plt.show()
```