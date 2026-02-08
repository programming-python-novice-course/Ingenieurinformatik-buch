# Automatische Konvertierung bei `print()` (A)

Eines der wichtigsten Merkmale von `print()` ist die **automatische Konvertierung** aller Datentypen zu Strings.

```python
zahl = 42
print(zahl)  # Die Zahl 42 wird automatisch zu "42" konvertiert

liste = [1, 2, 3]
print(liste)  # Die Liste wird automatisch zu "[1, 2, 3]" konvertiert

woerterbuch = {"name": "Anna", "alter": 25}
print(woerterbuch)  # Das Wörterbuch wird automatisch zu "{'name': 'Anna', 'alter': 25}" konvertiert
```

## Explizite Konvertierung mit `str()`

Wenn Sie eine explizite Konvertierung zu einem String durchführen möchten, können Sie die Funktion `str()` verwenden:

```python
zahl = 42
text = str(zahl)  # Explizite Konvertierung zu String
print(text)       # Ausgabe: 42
print(type(text)) # Ausgabe: <class 'str'>
```

Die Funktion `str()` konvertiert jeden Datentyp zu seiner String-Repräsentation.
Dies ist genau das, was `print()` intern für jeden Wert macht.
