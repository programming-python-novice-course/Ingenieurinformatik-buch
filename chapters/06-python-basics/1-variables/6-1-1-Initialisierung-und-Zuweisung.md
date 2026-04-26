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

(sec-assignment)=
# Initialisierung und Zuweisung

Durch das ``=`` Zeichen weisen wir einer *Variablen* (auf der linken Seite) den Wert des *Ausdrucks* (auf der rechten Seite) zu.
Zum Beispiel, weist

```{code-cell} python3
x = 3 + 10
```

den ausgewerteten Wert ``3 + 10`` also ``13`` der Variablen ``x`` zu.
Es ist äußerst wichtig, dass Sie zwischen dem ``=`` und dem mathematischen $=$ unterscheiden.

$$x = 13$$

bedeutet, dass $x$ gleich $13$ ist, wohingegen

```{code-cell} python3
x = 13
```

den Wert der Variablen ``x`` auf ``13`` setzt bzw. die Variable auf einen Speicherbereich verweisen lässt, welcher den Wert ``13`` enthält.
Um eine *Zuweisung* mathematisch auszurücken, verwendet man oft $\leftarrow$, also 

$$x \leftarrow 13.$$

Mit

```{code-cell} python3
x = None
```

weisen wir ``x`` den Wert ``None``, d.h. "Nichts" zu. Doch ist dieses "Nichts" nicht nichts ;).
Es repräsentiert lediglich das Nichts.

Versuchen wir eine *Variable* zu verarbeiten, die noch nicht initialisiert wurde, so erhalten wir einen Fehler:

```{code-cell} python3
:tags: [raises-exception]
v + 20
```

Die Fehlermeldung ``name 'v' is not defined`` weist uns darauf hin, dass die *Variable* ``v`` noch nicht *initialisiert* wurde.
In anderen Worten ``v`` gibt es noch gar nicht und zeigt auch nicht auf eine Stelle im Speicher, hat also keinen Wert.
In ``Python`` reicht es wenn Sie der *Variablen* einen Wert zuweisen.
Sie wird automatisch erzeugt, d.h., *initialisiert*.
Besitzt Sie noch keinen Wert so existiert sie auch nicht bzw. ist noch nicht *initialisiert*.

```{admonition} Initialisierung mit Notebooks
:name: remark-evaluation-ordering
:class: remark
Nach Ausführung dieser Codezeilen funktioniert auch der obige Code.
Dies hängt mit der Funktionsweise der Notebooks zusammen.
Sobald ``z`` *initialisiert* wurde, existiert ``z`` für alle Zellen des Notebooks.
```

```{exercise} Praxisaufgabe (PA1.3): Temperatur umrechnen (Variablen + Zuweisung)
:label: ex-paufgaben-a13-temperatur-zuweisung

Schreiben Sie ein kleines Programm, das eine Temperatur $C$ in Grad Celsius einliest und in Grad Fahrenheit $F$ umrechnet:

\[
F = \frac{9}{5} \cdot C + 32
\]

Nutzen Sie dafür Variablen (z.B. `celsius`, `fahrenheit`) und geben Sie das Ergebnis aus.

Starten Sie mit dieser Zelle:

```{code-cell} python3
:tags: [skip-execution]

celsius = float(input("Temperatur in °C: "))

# TODO: fahrenheit berechnen

print(f"{celsius:.1f} °C sind ... °F")
```
```
