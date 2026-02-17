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

# Übungsaufgabe: ICAO-Standardatmosphäre (A*)

Die **ICAO-Standardatmosphäre** ist ein Referenzmodell für den Verlauf von Temperatur und Druck mit der Höhe und wird u.a. in der Luftfahrt und Meteorologie verwendet.

In dieser Übung berechnen Sie eine Temperatur $T(h)$ für eine eingegebene Höhe $h$, indem Sie zwischen bekannten **Stützpunkten linear interpolieren**.

Stützpunkte (für diese Aufgabe relevant: $0 \le h \le 47$ km):

| Geopot. Höhe $h$ (km) | 0 | 11 | 20 | 32 | 47 |
|---|---:|---:|---:|---:|---:|
| Temperatur $T$ (°C) | 15,0 | -56,5 | -56,5 | -44,5 | -2,5 |

```{figure} ../../figs/02-computer-sciences-basics/paufgaben/k2/k2_abb2.jpg
---
width: 300px
name: fig-paufgaben-icao
```

```{exercise} Praxisaufgabe (PA2.4): ICAO-Standardatmosphäre (Interpolation)
:label: ex-paufgaben-a24-icao

Programmieren Sie ein Skript zur Berechnung der Temperatur in einer bestimmten Höhe $h$ (siehe Abbildung).

- **Eingabe**: Höhe $h$ in **Metern**.
- **Validierung**: Bei $h < 0$ oder $h > 47000$ geben Sie eine Fehlermeldung aus.
- **Berechnung**: Andernfalls bestimmen Sie $T(h)$ durch **lineare Interpolation** zwischen den Stützpunkten aus der Tabelle (für $0 \le h \le 47$ km).
- **Ausgabe**: Geben Sie die berechnete Temperatur aus.

Zusatzaufgaben:

- Formatieren Sie die Ausgabe mit **zwei Nachkommastellen**.
- Optional: Lassen Sie in einer Schleife weitere Berechnungen zu (bis der Nutzer abbricht).
- Zeichnen Sie Struktogramme zu Ihren Lösungen.
```

```{figure} ../../figs/02-computer-sciences-basics/paufgaben/k2/k2_abb3.png
---
width: 700px
name: fig-paufgaben-icao-beispielausgabe
---
Beispielausgabe im Terminal.
```