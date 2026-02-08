# Beispiel 1: Zahl einlesen und quadrieren (Typumwandlung) (A)

```python
text = input("Bitte eine Zahl eingeben: ")
zahl = int(text)
print("Quadrat:", zahl ** 2)
```

- `input()` liefert Text
- Typumwandlung kann fehlschlagen (`ValueError`)
- Fehlerbehandlung ist notwendig!!
