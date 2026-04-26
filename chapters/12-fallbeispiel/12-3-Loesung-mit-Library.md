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

Julia startet im Buy-Pfad: Sie möchte schnell zu einem Ergebnis kommen und nutzt dafür gut gepflegte Bibliotheken. Das ist in der Praxis oft die Standardwahl, solange Abhängigkeiten erlaubt sind und das Paket zuverlässig ist.

```{admonition} Kernidee
:class: remark
Julia beschreibt eher *was* sie will (Kennzahlen, Histogramm) und überlässt das *wie* der Library.
```


```{admonition} Hinweis
:class: remark

Sie führen den Code gerade auf einem Server aus. Deshalb können Sie nicht einfach Dateien von Ihrem Rechner-Pfad einlesen. Die Messdaten-Datei ist bereits für Sie online erreichbar.
```

**Datenquelle festlegen**

Julia greift über eine URL die Daten direkt als rohen Text ab. 

Hinweis: die Variable `csv_file_path` liefert die Messdaten im Textformat.


```{code-cell} python3
csv_file_path = "https://gitlab.lrz.de/fk03ingenieurinformatik/ingenieurinformatik-buch-deploy-lrz/-/raw/master/data/air_quality_no2.csv"

# fallback, falls gitlab LRZ down:
# csv_file_path = "data/air_quality_no2.csv" # live code (fallback)
# image_file = "../air_quality_no2.csv" jupyterhub/binderhub

print(f"Die Datei wird bezogen über: {csv_file_path}")
```

**CSV einlesen und inspizieren**

Als Erstes liest Julia die Messdaten ein und verschafft sich einen Überblick.


```{code-cell} python3

import pandas as pd

df = pd.read_csv(
    csv_file_path,
    parse_dates=["datetime"]
)

df = df.rename(
    columns={
        "station_antwerp": "Antwerp",
        "station_paris": "Paris",
        "station_london": "London",
    }
)

df.head()
```

**Daten vorbereiten**

Als Nächstes bereitet Julia die Daten so vor, dass Zeitpunkte bequem als Index genutzt werden können.

```{code-cell} python3

df = df.set_index("datetime")
df.head()
```

**Kennzahlen berechnen**

Dann lässt sich Julia zentrale Kennwerte automatisch berechnen (z. B. Mittelwert, Standardabweichung und Quartile (Q1, Median, Q3)).

```{code-cell} python3

stats = df.describe().T
stats
```

**Verteilung visualisieren**

Zum Abschluss visualisiert Julia die Verteilung der Messwerte als Histogramme.

```{code-cell} python3
import matplotlib.pyplot as plt

axs = df.hist()
for ax in axs.ravel():
    ax.set_xlabel("NO₂-Konzentration (µg/m³)")
    ax.set_ylabel("Häufigkeit")

plt.tight_layout(h_pad=2.0, w_pad=1.0)
plt.show()
```


```{admonition} Kurz gefasst
:class: note

- Julia löst die Aufgabe im Buy-Pfad mit wenigen, gut getesteten Bibliotheksaufrufen.
- Julia bekommt Einlesen, Kennzahlen und Histogramme, ohne die Algorithmen selbst zu implementieren.
- Julia profitiert vom hohen Abstraktionsgrad: Der Code ist kurz, aber sie ist an die Library gebunden.
```