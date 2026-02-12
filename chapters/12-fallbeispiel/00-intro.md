# Wie werden Programme entwickelt? 

```{figure} ../../figs/01-course-overview/overview/fahrt.png
---
height: 320px
name: fahrt
---
```


```{admonition} Lernziele
::class: learngoals
Nach diesem Kapitel können Sie:

- einen praxisnahen Entwicklungsablauf von der Aufgabenstellung bis zur Lösung nachvollziehen (inkl. Build vs. Buy),
- eine größere Aufgabe in Teilprobleme zerlegen und Abhängigkeiten erkennen (z. B. Parsing, Visualisierung, Statistik),
- Entscheidungen zu Abstraktionsgrad, Abhängigkeiten und Testaufwand begründet treffen,
- eigenen Code mit einfachen Tests absichern,
- einordnen, warum Sortieren in Statistik-Auswertungen auftaucht (Quantile/Median) und bei Bedarf einen einfachen Sortieralgorithmus implementieren.
```

Julia bekommt eine praxisnahe Aufgabe: Eine Messdatei soll eingelesen, ausgewertet und visualisiert werden. In diesem Kapitel schauen wir ihr über die Schulter – vom ersten Lesen der Aufgabe bis zu zwei möglichen Lösungen.




Julia möchte am Ende zwei Dinge liefern: eine einfache Visualisierung der Verteilung und eine Tabelle mit Kennzahlen. Auf dem Weg dorthin trifft sie eine zentrale Entscheidung: nutzt sie vorhandene Bibliotheken oder baut sie die Bausteine selbst?

- Buy: Julia nutzt gut gepflegte Bibliotheken (z. B. `pandas`) und kommt schnell zu einem Ergebnis.
- Build: Julia implementiert zentrale Schritte selbst (z. B. weil keine neuen Abhängigkeiten erlaubt sind) und sichert die Lösung mit Tests ab.

> Kernidee: Nicht „Kann ich das programmieren?“, sondern „Soll ich es selbst programmieren?“ ist oft die entscheidende Frage.


