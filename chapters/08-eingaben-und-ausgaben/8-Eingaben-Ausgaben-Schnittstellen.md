
# Eingaben, Ausgaben, Schnittstellen

```{admonition} Lernziele
:class: learngoals

- Nach diesem Kapitel verstehen Sie, warum Programme Ein- und Ausgaben benötigen und welche Rolle Datentyp-Konvertierung dabei spielt.
- Nach diesem Kapitel sind Sie in der Lage, Nutzereingaben (z. B. über ``input()``) einzulesen, in passende Datentypen umzuwandeln und einfache Validierungen durchzuführen.
- Nach diesem Kapitel sind Sie in der Lage, Ergebnisse verständlich auszugeben (z. B. mit ``print()`` und Formatierung wie f-Strings).
- Nach diesem Kapitel verstehen Sie den Unterschied zwischen Text (Zeichen) und Bytes an Schnittstellen und können Protokolle/Dokumentation entsprechend einordnen.
- Nach diesem Kapitel sind Sie in der Lage, typische Fehlerquellen bei I/O (z. B. falsches Format, unerwartete Eingaben) systematisch zu erkennen und zu behandeln.
```

In den vorherigen Abschnitten haben wir verschiedene *built-in* Datentypen von Python kennengelernt: Zahlen, Listen, Tupel, Zeichenketten, Mengen und Wörterbücher.
Diese Datentypen existieren jedoch nicht isoliert in unserem Programm.
In der Praxis müssen Programme häufig mit Daten arbeiten, die von außen kommen:
- von anderen Programmen
- von Nutzerinnen und Nutzern
- aus Dateien

Ebenso müssen Programme ihre Ergebnisse nach außen kommunizieren:
- an andere Programme
- an Nutzerinnen und Nutzer
- in Dateien

