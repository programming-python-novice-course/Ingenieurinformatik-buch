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

(sec-control-statements)=
# Kontrollstrukturen (S)

```{admonition} Lernziele
::class: learngoals

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

Funktionen kontrollieren ebenfalls den Programmablauf.
Man kann sie auch als Kontrollstrukturen betrachten.
Diese haben wir jedoch im Kapitel [Funktionen](sec-functions) besprochen.