
(sec-control-statements)=
# Kontrollstrukturen 

```{figure} ../../figs/02-computer-sciences-basics/control-structures.png
---
width: 700px
name: fig-control-structures
---
Es gibt verschiedene Ausprägungen von Kontrollstrukturen, die wir im Detail in Kapitel 
```


```{admonition} Lernziele
:class: learngoals

- Nach diesem Kapitel verstehen Sie, wozu Kontrollstrukturen dienen und wie sie die sequenzielle Programmausführung gezielt verändern.
- Nach diesem Kapitel sind Sie in der Lage, Fallunterscheidungen zu implementieren (z. B. mit ``if``/``elif``/``else`` bzw. passenden Sprachmitteln) und Bedingungen korrekt zu formulieren.
- Nach diesem Kapitel sind Sie in der Lage, Wiederholungen mit Schleifen (``for``/``while``) umzusetzen und typische Schleifenfehler (z. B. Endlosschleifen) zu vermeiden.
- Nach diesem Kapitel sind Sie in der Lage, über Datenstrukturen zu iterieren und Kontrollfluss so zu gestalten, dass Ihr Programm nachvollziehbar bleibt.
- Nach diesem Kapitel sind Sie in der Lage, einfache Probleme in kontrollflussbasierte Algorithmen zu übersetzen (z. B. Suchen, Zählen, Filtern).
```

Kontrollstrukturen beeinflussen die Reihenfolge der abzuarbeitenden Befehle. 
Sie ermöglichen es von einer rein *sequenziellen* Abarbeitung abzuweichen.

Erst durch diese Abweichung erlangen wir die nötige Ausdrucksweise um das zu berechnen was *berechenbar* ist.
Es gibt lediglich zwei wesentliche Kontrollstrukturen:

1. [Fallunterscheidung](sec-cases) (führe entweder Codeabschnitt A oder B aus)
2. [Schleifen](sec-loops) (führe Codeabschnitt A öfters aus)

Beide Konzepte verwenden wir bereits immerzu in der 'echten' Welt.
