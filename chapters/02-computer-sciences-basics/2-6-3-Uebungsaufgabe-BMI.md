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

# Übungsaufgabe: BMI

```{exercise} Praxisaufgabe (PA2.3): BMI klassifizieren
:label: ex-paufgaben-a23-bmi-bool

Schreiben Sie ein Programm, das Körpergewicht $m$ (kg) und Körpergröße $l$ (m) einliest und den Body-Mass-Index berechnet:

$$
\mathrm{BMI} = \frac{m}{l^2}
$$

Geben Sie anschließend eine Klassifikation aus (z.B. wie in der Aufgabe):

- BMI < 20: Untergewicht
- BMI < 25: Normalgewicht
- BMI < 30: leichtes Übergewicht
- sonst: Übergewicht
```

Starten Sie mit dieser Zelle:

```{code-cell} python3
:tags: [skip-execution]

m = float(input("Körpergewicht in kg: "))
l = float(input("Größe in m: "))

# bmi = m / l**2

# TODO: Klassifikation bestimmen

```

```{admonition} Hinweis: Nachkommastellen formatieren
:class: tip

Sie können die Anzahl der Nachkommastellen in der Textausgabe mit **f-Strings** festlegen, z.B.:

`print(f"BMI = {bmi:.1f}, ...")`

Mehr Informationen dazu im Kapitel {ref}`fstrings-sec`.
```
