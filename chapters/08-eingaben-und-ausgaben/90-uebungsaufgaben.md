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

# Übungsaufgaben


```{exercise} Praxisaufgabe: Umrechnung kW ↔ PS 
:label: ex-paufgaben-a11-kw-ps-script

Schreiben Sie ein Python-Programm, das Leistungsangaben umrechnet.
```

```{figure} ../../figs/08-eingaben-und-ausgaben/paufgaben/k1/k1_abb1.jpg
---
width: 300px
name: fig-paufgaben-a11-kw-ps
---
```

**Eingabe**: 
- Zahl (Leistung) 
- Umrechnungs-Richtung (`1` = kW → PS, `2` = PS → kW)

**Hinweis**: $1\,\mathrm{kW} = 1.35962\,\mathrm{PS}$

**Ausgabe**: Ergebnis (gerne mit 2 Nachkommastellen)

Optional: Geben Sie bei ungültiger Richtung eine Fehlermeldung aus.

```{code-cell} python3
import math

direction = input("Richtung (1 = kW → PS, 2 = PS → kW): ").strip()

```


