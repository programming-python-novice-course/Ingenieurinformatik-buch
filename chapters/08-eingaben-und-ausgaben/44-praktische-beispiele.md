# Beispiele (A)

## Beispiel 1: Kombination von Eingabe und Ausgabe

```python
name = input("Wie heißen Sie? ")
alter_text = input("Wie alt sind Sie? ")
alter = int(alter_text)

print(f"Hallo {name}! Sie sind {alter} Jahre alt.")
print(f"In 10 Jahren werden Sie {alter + 10} Jahre alt sein.")
```

## Beispiel 2: Formatierte Tabellenausgabe

```python
produkte = [
    {"name": "Apfel", "preis": 1.50, "anzahl": 10},
    {"name": "Banane", "preis": 2.00, "anzahl": 5},
    {"name": "Orange", "preis": 1.75, "anzahl": 8}
]

print("Produkt\t\tPreis\tAnzahl")
print("-" * 30)
for produkt in produkte:
    print(f"{produkt['name']}\t\t{produkt['preis']:.2f}€\t{produkt['anzahl']}")
```

## Beispiel 3: Fehlermeldungen ausgeben

```python
zahl_text = input("Bitte eine Zahl eingeben: ")
try:
    zahl = int(zahl_text)
    print(f"Die eingegebene Zahl ist: {zahl}")
except ValueError:
    print(f"Fehler: '{zahl_text}' ist keine gültige ganze Zahl!")
```
