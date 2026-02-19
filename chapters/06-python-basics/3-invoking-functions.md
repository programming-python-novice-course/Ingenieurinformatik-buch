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

(sec-function-calls)=
# Funktionsaufrufe (A)

Wenn Sie das Buch von vorne bis hierhin gelesen haben, werden Ihnen so einige Funktionsdefinitionen über den Weg gelaufen sein.
Wie wir eigene Funktionen definieren, werden wir uns noch genauer ansehen.
Vorerst begnügen wir uns mit dem *Aufrufen* von bereits existierenden *Funktionen*.

Vorab sei betont, dass eine *mathematische Funktion* sich von einer ``Python``-Funktion wesentlich unterscheidet.
Wir diskutieren dies genaue im Abschnitt [Reinheit](sec-purity).

Wollen wir eine bestimmte Abfolge von [Ausdrücken](sec-expressions) wieder und wieder aufrufen, so können wir diese Ausdrücke in einer Funktion *kapseln*.
Diese Funktion erfüllt einen bestimmten Zweck.

Benutzten wir bereits existierende Funktionen, so kennen wir (jedenfalls sollte das so sein) das **WAS** aber nicht unbedingt das **WIE**.
Das bedeutet für geübte Programmiererinnen, dass diese sich viel mit Dokumentationen diverser Module beschäftigen.
Einerseits um das **WAS** in Erfahrung zu bringen und andererseits um eine Vorstellung vom **WIE** zu erhalten.

Wir rufen eine Funktion mit dem Namen ``name`` auf, indem wir an den Namen runde Klammern anfügen: ``name(par1, par2)``.
Funktionen erwarten eine bestimmte Anzahl an *Parametern* (hier ``par1``, ``par2``), wobei es manchmal auch *optionale Parameter* geben kann.

```{admonition} Parameter und Argumente
:name: def-parameter
:class: definition

Die in der Funktionsdefinition angegebenen Namen (Variablen) heißen *Parameter*.
Die Werte, welche diese Parameter erhalten bezeichnen wir als *Argumente* des Funktionsaufrufs.
```

Argumente sind Werte, welche die Funktion erwartet und die wir übergeben müssen.
Diese Argumente werden von der Funktion verarbeitet.

Zum Beispiel, bietet ``Python`` die vordefinierte Funktion ``abs`` an, welche eine Zahl als Argument erwartet.

```{code-cell} python3
abs(-23)
```

In diesem Fall realisiert diese ``Python``-Funktion eine *mathematische Funktion*, nämlich den Betrag $\text{abs}(x) = |x|$.
Weitere Beispiele sind die ``Python``-Funktionen ``round`` und ``max``.

```{code-cell} python3
round(5 - 1.3)
```

```{code-cell} python3
max(2, 3, 5 - 3, 3 * 3)
```

```{code-cell} python3
max(2, -10)
```

``round`` erwartet ebenfalls eine Zahl als Argument.
Die Funktion berechnet aus dem Argument die am nächsten liegende ganze Zahl und liefert diese zurück.
In anderen Worten, ``round`` rundet zur nächst liegenden ganzen Zahl.

``max`` erwartet zwei oder mehr Zahlen als Argumente und liefert die größere Zahl zurück.

Bemerkenswert ist beim obigen *Funktionsaufruf*, dass die *Ausdrücke* ``5-3`` und ``3 * 3`` ausgewertet werden bevor die Funktion aufgerufen wird.
Das heißt, die Funktion wird mit den Argumenten ``2, 3, 2`` und ``9`` aufgerufen.
Wir sehen auch, dass ``max`` mit einer unterschiedlichen Anzahl an Argumenten umgehen kann.

Dieses Kapitel ist in Unterkapitel aufgeteilt:

- [Module (A)](3-invoking-functions/1-module.md)
- [Auswertungsreihenfolge (V)](3-invoking-functions/2-auswertungsreihenfolge.md)
- [Das Kennenlernen (V)](3-invoking-functions/3-das-kennenlernen.md)