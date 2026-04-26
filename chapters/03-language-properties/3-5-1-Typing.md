# Typing

```{admonition} Behauptung
:class: remark
In Python muss ich mir keine Gedanken machen, wie die Daten aussehen, die ich verarbeite: 0, 1.23 oder "abvcs" - Python verarbeitet alles irgendwie.
```

- Python nimmt Ihnen viel Arbeit ab – aber Typinformation ist trotzdem immer da: Sie bestimmt, wie Bits zu interpretieren sind und welche Operationen erlaubt sind.

- Wie Sie schon wissen, sind Typen in Python Eigenschaften von Objekten, nicht von Namen. Ein Variablenname kann im Laufe des Programms auf Objekte unterschiedlicher Typen zeigen:

```python
x = 3      # x zeigt auf ein int-Objekt
x = "hi"   # x zeigt jetzt auf ein str-Objekt
x = 4      # x zeigt jetzt auf ein int-Objekt
x = "hi"   # x zeigt jetzt auf ein str-Objekt
```

Dass eine derartige Zuweisung möglich ist, ist eine direkte Konsequenz aus dem Objektmodell: Der Name wird neu gebunden, das Objekt trägt den Typ (siehe [Python‑Datenmodell](sec-object-model)).

## Dynamische und starke Typisierung

Python ist **dynamisch typisiert**: Welchen Datentyp ein Objekt hat und welche Operationen damit möglich sind, wird zur Laufzeit entschieden.

```python
def potenz(basis, exponent):
    return basis ** exponent

print(potenz(3, 4))        # 81
print(potenz(3.0, 2.0))    # 9.0
print(potenz("a", "b"))    # TypeError zur Laufzeit
```

Python ist außerdem **stark typisiert**: Es führt nicht automatisch „magische“ Typumwandlungen durch.

```python
x = "5"
print(2 + x)  # TypeError: int + str
```

Zum Vergleich (vereinfachtes Beispiel) in JavaScript:

```javascript
x = "5"
// je nach Kontext entstehen implizite Umwandlungen
y = 2 + x   // ergibt "25"
```

## Type Hints

Mit *Type Hints* können Softwareentwickler anderen Entwickler:innen Hinweise geben, welche Typen erwartet sind.
Zum Beispiel macht es keinen Sinn, die Potenz eines Textes zu berechnen.

Wichtig dabei:

- Type Hints ändern (standardmäßig) nicht das Laufzeitverhalten.
- Sie dienen der Dokumentation und Werkzeugunterstützung (IDE, Linter).

```python
def potenz(basis: float, exponent: float) -> float:
    """Berechnet basis^exponent (nur Zahlen)."""
    return basis ** exponent
```

```{admonition} Klarstellung
:class: note
- Python nimmt Ihnen viel Typ‑Arbeit ab, aber Typen sind trotzdem zentral.
- Python ist dynamisch typisiert (Prüfung zur Laufzeit) und stark typisiert (wenig implizite Konvertierung).
- Type Hints sind ein Werkzeug: besseres Verständnis, bessere IDE‑Hinweise, früheres Finden von Fehlern.
```