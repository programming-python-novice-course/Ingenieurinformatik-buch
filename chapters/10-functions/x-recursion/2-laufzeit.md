# Laufzeit (S)

Obwohl der *Stack* enorm effizient ist, sind iterative Lösungen fast immer schneller in ihrer Ausführung.
Übersetzten wir den Code in Maschinencode, also in die niedrigste bzw. konkreteste Form, so benötigen rekursive Lösungen fast immer mehr Sprungbefehle.

Auch benötigt ein Funktionsaufruf mehr Ressourcenmanagement als ein Sprung zum Anfang einer Schleife.
Vergleichen wir unsere rekursive Lösung mit der iterativen:

```{code-cell} python3
def fac_it(n):
    result = 1
    for i in range(1,n+1):
        result += i
    return result
```

Die iterative Lösung verwendet lediglich drei Variablen nämlich ``n``, ``i`` und ``result``, wohingegen wir bei der rekursiven Lösung für ``fac(n)`` ca. ``n`` Variablen benötigen.

Zusätzlich sind [CPU's](def-cpu) in der von [Neumann Architektur](sec-von-neumann) auf Schleifen optimiert.
Rücksprünge kann die CPU nur vorhersagen, wenn es von ihnen nicht zu viele hintereinander gibt.
Dazu verwendet die CPU einen begrenzten Speicher.
Läuft dieser voll, schlägt die Vorhersage fehl und die Ausführungszeit verlängert sich drastisch.

Lassen Sie uns die Laufzeiten der beiden Implementierungen vergleichen:

```{code-cell} python3
%timeit fac_it(1000)
```

```{code-cell} python3
%timeit fac(1000)
```

Der rekursive Aufruf benötigt ca. 473 Nanosekunden, wohingegen die iterative Berechnung ca. 60 Nanosekunden benötigt.
Das heißt die iterative Berechnung ist um einen Faktor von

$$\frac{473}{60} \approx 7.8$$

schneller!
