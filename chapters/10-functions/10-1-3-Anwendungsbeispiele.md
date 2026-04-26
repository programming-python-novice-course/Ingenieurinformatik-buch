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

# Anwendungsbeispiele

In diesem Abschnitt sehen Sie praxisnahe Beispiele, wie Funktionen eingesetzt werden können – z.B. für Einheitenumrechnung, geometrische Berechnungen oder Sortierung.

## Einheitenumrechnung

Funktionen eignen sich gut, um Umrechnungen zu kapseln und wiederverwendbar zu machen:

```{code-cell} python3
def mm_to_m(mm):
    """Konvertiert Millimeter in Meter."""
    return mm / 1000

def kg_to_g(kg):
    """Konvertiert Kilogramm in Gramm."""
    return kg * 1000

# Beispiel: 500 mm = 0.5 m
print(mm_to_m(500))
print(kg_to_g(2.5))
```

## Geometrische Berechnungen

Typische Anwendungen sind Flächen- und Volumenberechnungen:

```{code-cell} python3
def kreisflaeche(radius):
    """Berechnet die Fläche eines Kreises mit Flächeninhalt A = π * r²."""
    return 3.14159 * radius ** 2

def zylindervolumen(radius, hoehe):
    """Berechnet das Volumen eines Zylinders: V = π * r² * h."""
    return kreisflaeche(radius) * hoehe

print("Kreisfläche (r=5):", kreisflaeche(5))
print("Zylindervolumen (r=5, h=10):", zylindervolumen(5, 10))
```

## Sortierung mit benannter Funktion

Die Built-in-Funktion `sorted()` kann einen Parameter `key` erhalten: eine Funktion, die für jedes Element einen Sortierschlüssel liefert.

```{code-cell} python3
teile = [("Bolzen", 12), ("Schraube", 8), ("Mutter", 6), ("Dübel", 10)]

def nach_laenge(tupel):
    """Liefert das zweite Element (Länge) für die Sortierung."""
    return tupel[1]

def nach_name(tupel):
    """Liefert das erste Element (Name) für die Sortierung."""
    return tupel[0]

# Sortieren nach Länge (zweites Element)
sortiert_nach_laenge = sorted(teile, key=nach_laenge)
print(sortiert_nach_laenge)

# Sortieren nach Name (erstes Element)
sortiert_nach_name = sorted(teile, key=nach_name)
print(sortiert_nach_name)
```
