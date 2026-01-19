# „In Python muss ich mir keine Gedanken machen, welche Daten ich verarbeite.“

Python fühlt sich oft so an: Sie schreiben Code, übergeben irgendetwas – und es „funktioniert schon“. Genau das ist der Komfort dynamischer Sprachen. Aber: Spätestens bei Fehlern („Warum passiert das?“) ist es entscheidend zu wissen, wie Python mit Typen umgeht.

## Stimmt das?

**Nein.** Sie *müssen* nicht immer vorher über Typen nachdenken – aber Python denkt trotzdem darüber nach. Der Unterschied ist: Python prüft viele Dinge **zur Laufzeit** (runtime), nicht beim Übersetzen (compile time).

## Was steckt dahinter?

### 1) Der Computer braucht Repräsentationen

Für den Computer sind Daten immer Bits. Ob eine Bitfolge „eine Zahl“ oder „Text“ bedeutet, hängt von einer Interpretation/Struktur ab (z.B. Zahlendarstellung, Zeichenkodierung). In Python erledigt diese Interpretation das Laufzeitsystem für Sie – aber es braucht dafür **Typinformationen**.

### 2) Typen in Python: Typ des Objekts, nicht Typ des Namens

- In Python hat **das Objekt** einen Typ (`int`, `str`, `list`, ...).
- Ein Variablenname kann im Laufe des Programms auf Objekte unterschiedlicher Typen zeigen.

```python
x = 3      # x zeigt auf ein int-Objekt
x = "hi"   # x zeigt jetzt auf ein str-Objekt
```

### 3) Dynamische Typisierung

Python ist **dynamisch typisiert**: Welche Operation möglich ist, wird zur Laufzeit entschieden.

```python
def potenz(basis, exponent):
    return basis ** exponent

print(potenz(3, 4))        # 81
print(potenz(3.0, 2.0))    # 9.0
print(potenz("a", "b"))    # TypeError zur Laufzeit
```

### 4) Starke Typisierung

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

## Typische Stolperstelle / „Warum passiert das?“

- **„Warum sehe ich den Fehler erst beim Ausführen?“** Weil Python viele Typ-/Operator‑Checks zur Laufzeit macht.
- **„Warum warnt mich meine IDE?“** Weil Tools aus optionalen Typangaben (Type Hints) Schlüsse ziehen können.
- **„Warum ist Python manchmal langsam?“** Dynamische Typ‑Checks und Dispatch kosten Zeit – besonders in engen Schleifen im „reinen Python“.

## Type Hints (optional, aber sehr hilfreich)

Type Hints ändern (standardmäßig) nicht das Laufzeitverhalten, helfen aber bei Dokumentation und Werkzeugunterstützung:

```python
def potenz(basis: float, exponent: float) -> float:
    """Berechnet basis^exponent (nur Zahlen)."""
    return basis ** exponent
```

## Richtigstellung (Takeaways)

- Python nimmt Ihnen viel Typ‑Arbeit ab, aber **Typen sind trotzdem zentral**.
- Python ist **dynamisch typisiert** (Prüfung zur Laufzeit) und **stark typisiert** (wenig implizite Konvertierung).
- Type Hints sind ein **Werkzeug**: besseres Verständnis, bessere IDE‑Hinweise, früheres Finden von Fehlern.
- Performance: Python ist häufig dann schnell, wenn zeitkritische Arbeit in **optimiertem, statisch typisiertem Code** (Bibliotheken) passiert.
