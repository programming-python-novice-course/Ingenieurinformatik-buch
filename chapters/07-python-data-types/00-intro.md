(sec-python-data-types)=
# Datentypen (S)

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

Der *Datentyp* einer Variablen gibt an, wie die [Bits](def-bit) und [Bytes](def-byte) [interpretiert](sec-interpretation) werden.

Wichtig ist die Abgrenzung zur Codierung:

- Codierung (Encoding) beantwortet die Frage, wie ein Wert als Bitmuster dargestellt wird. Typische Fragen sind: Welche Bits gehören zu einem Zeichen? Wie werden negative Zahlen gespeichert? Warum kann `0.1` nicht exakt als Bitfolge gespeichert werden? Mehr dazu im Kapitel [Codierung und Zahlensysteme](../02-computer-sciences-basics/30-codierung.md).
- Datentyp beantwortet die Frage, wie diese Bitmuster in einer Programmiersprache als Werte „gemeint“ sind und was man damit tun darf. Typische Fragen sind: Welche Operationen sind erlaubt (`+`, `len`, Indexieren)? Welche Eigenschaften gelten (veränderlich/unveränderlich)? Was passiert bei `==` und bei `is`?

Beides hängt zusammen: Die Codierung liefert die Repräsentation im Speicher, der Datentyp legt die Regeln fest, nach denen ein Programm diese Repräsentation interpretiert und verarbeitet.

```{admonition} Lernziele
::class: learngoals

- Nach diesem Kapitel verstehen Sie, was ein Datentyp in Python bedeutet (Interpretation von Bits/Bytes) und warum Typen für korrektes Programmieren entscheidend sind.
- Nach diesem Kapitel sind Sie in der Lage, die wichtigsten *built-in* Datentypen gezielt auszuwählen und anzuwenden (z. B. ``int``, ``float``, ``bool``, ``str``, ``list``, ``tuple``, ``set``, ``dict``).
- Nach diesem Kapitel sind Sie in der Lage, zwischen atomaren und zusammengesetzten Datentypen zu unterscheiden und typische Konsequenzen (z. B. Unveränderlichkeit/Veränderlichkeit) zu erklären.
- Nach diesem Kapitel sind Sie in der Lage, Datentypen zu prüfen (z. B. mit ``type``) und grundlegende Typkonvertierungen sicher vorzunehmen.
- Nach diesem Kapitel sind Sie in der Lage, typische Operationen auf Sequenzen und Sammlungen anzuwenden (Indexieren, Iterieren, Hinzufügen/Entfernen) und deren Ergebnis zu interpretieren.
```
