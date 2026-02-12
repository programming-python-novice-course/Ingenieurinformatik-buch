(sec-python-data-types)=
# Datentypen 

Im Speicher eines (digitalen) Computers finden sich ausschließlich Bits.
Diese Bits können nur einen von zwei Zuständen (0 und 1) annehmen.

```{figure} ../../figs/03-language-properties/python-tutorial/variables/ram.png
---
width: 400px
name: fig-ram-2
---
Der Arbeitsspeicher ist eine sehr lange Liste bestehend aus [Bits](def-bit).
Die Adresse ist im Wesentlichen die Nummer / der Index eines bestimmten Speicherplatzes.
```

Unterschiedliche Interpretationen ermöglichen es, Bits und [Byte](def-byte) als Zahlen, Text, Bilder usw. zu verarbeiten.

Der Datentyp einer Variablen gibt an, wie die [Bits](def-bit) und [Bytes](def-byte) [interpretiert](sec-interpretation) werden und was man mit dem Wert tun darf.
Wie Codierung, Datentypen und Datenstrukturen zusammenhängen und wie daraus die Speicherung im Computer entsteht, sehen wir am Ende des Kapitels im [Big picture](sec-pib-picture).

```{admonition} Lernziele
::class: learngoals

- Nach diesem Kapitel verstehen Sie, was ein Datentyp in Python bedeutet und warum Typen für korrektes Programmieren wichtig sind.
- Nach diesem Kapitel können Sie die wichtigsten eingebauten Datentypen gezielt auswählen und anwenden (z. B. ``int``, ``float``, ``bool``, ``str``, ``list``, ``tuple``, ``set``, ``dict``).
- Nach diesem Kapitel können Sie Datentypen prüfen (z. B. mit ``type``), Typkonvertierungen vornehmen und typische Operationen auf Sequenzen und Sammlungen anwenden (inkl. veränderlich/unveränderlich).
```
