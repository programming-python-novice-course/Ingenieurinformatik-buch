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

# Vergleich Pseudocode - Struktogramm (V)

Betrachten wir einen einfachen Algorithmus, der das Maximum einer Liste von Zahlen findet. Wir stellen ihn in drei verschiedenen Formen dar.

## Pseudocode

```
FUNCTION finde_maximum(liste):
    WENN liste leer:
        GIB Fehler zurück
    ENDE WENN
    
    maximum = erstes Element der liste
    
    FÜR jedes element IN liste:
        WENN element > maximum:
            maximum = element
        ENDE WENN
    ENDE FÜR
    
    GIB maximum zurück
ENDE FUNKTION
```

## Struktogramm

```{figure} ../../figs/02-computer-sciences-basics/struktogramm-example.png
---
width: 350px
name: fig-struktogramm-example
---
Struktogramm für den Algorithmus zur Bestimmung des Maximums einer Liste.
```

## Python-Code

```{code-cell} python3
def finde_maximum(liste):
    if not liste:
        raise ValueError("Liste ist leer")
    
    maximum = liste[0]
    
    for element in liste:
        if element > maximum:
            maximum = element
    
    return maximum

# Beispiel
zahlen = [3, 7, 2, 9, 1, 5]
print(f"Das Maximum von {zahlen} ist {finde_maximum(zahlen)}")
```

Sie haben nur drei Wege gesehen, wie man einen Algorithmus kommunizieren kann.

```{admonition} Dokumentation in der Praxis
:name: remark-dokumentation-praxis
:class: remark

In der Praxis werden Sie vor allem auf Sequenzdiagramme und Paketdiagramme treffen. Diese Diagrammtypen stellen häufig Softwarearchitekturen dar, die allein aus dem Quellcode nicht mehr ersichtlich sind.

Ein wichtiger Grundsatz der Dokumentation lautet: Dokumentiert und visualisiert wird all das, was nicht direkt aus dem Quellcode hervorgeht.

Ist ein Algorithmus einmal implementiert, benötigen Sie sein Struktogramm in der Regel nicht mehr in der Dokumentation – die Implementierung im Quellcode reicht aus (sofern der Algorithmus korrekt implementiert wurde). Das bedeutet jedoch nicht, dass beim Entwurf kein Struktogramm verwendet wurde: Struktogramme und Pseudocode sind wichtige Werkzeuge während der Entwicklung, auch wenn sie später nicht in der finalen Dokumentation erscheinen.
```

```{exercise} Aufgabe
:label: ex-visualization-medium

Sie möchten einer Kommilitonin erklären, was diese Funktion macht, ohne Python-Syntax im Detail zu besprechen:

> „Gegeben ist eine Liste von Zahlen. Gib die größte Zahl zurück. Falls die Liste leer ist, gib einen Fehler aus.“

1. Welches Kommunikationsmedium wählen Sie (Pseudocode, Struktogramm oder Python-Code) – und warum?
2. Schreiben Sie den Algorithmus in 5–10 Zeilen Pseudocode.
```

```{solution} ex-visualization-medium
:class: dropdown

1. Hier gibt es keine Musterlösung. Begründen Sie Ihre Wahl.
2. Beispiel-Pseudocode:

   - Wenn die Liste leer ist: Fehler zurückgeben
   - maximum = erstes Element
   - Für jedes Element in der Liste:
     - Wenn Element > maximum: maximum = Element
   - maximum zurückgeben
```

