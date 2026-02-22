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

(fstrings-sec)=
# f-Strings (A)

Formatted String Literals (f-Strings) sind eine elegante Möglichkeit, Variablen und Ausdrücke direkt in Strings einzubinden.

## Syntax

Ein f-String beginnt mit `f` oder `F` vor den Anführungszeichen:

```python
name = "Anna"
alter = 25
text = f"Mein Name ist {name} und ich bin {alter} Jahre alt."
print(text)  # Ausgabe: Mein Name ist Anna und ich bin 25 Jahre alt.
```

## Variablen einbinden

Sie können beliebige Variablen in geschweiften Klammern `{}` einbinden:

```python
zahl = 42
print(f"Die Antwort ist {zahl}")  # Ausgabe: Die Antwort ist 42
```

## Ausdrücke in f-Strings

Sie können nicht nur Variablen, sondern auch **Ausdrücke** in f-Strings verwenden:

```python
x = 5
y = 3
print(f"Die Summe von {x} und {y} ist {x + y}")  # Ausgabe: Die Summe von 5 und 3 ist 8
print(f"Das Quadrat von {x} ist {x ** 2}")      # Ausgabe: Das Quadrat von 5 ist 25
```

## Formatierung mit f-Strings

f-Strings unterstützen auch **Formatierungsoptionen**:

```python
# Dezimalstellen bei Fließkommazahlen
pi = 3.14159265359
print(f"Pi auf 2 Dezimalstellen: {pi:.2f}")  # Ausgabe: Pi auf 2 Dezimalstellen: 3.14
print(f"Pi auf 4 Dezimalstellen: {pi:.4f}")  # Ausgabe: Pi auf 4 Dezimalstellen: 3.1416

# Zahlen mit Tausendertrennzeichen
große_zahl = 1234567
print(f"Zahl mit Trennzeichen: {große_zahl:,}")  # Ausgabe: Zahl mit Trennzeichen: 1,234,567

# Prozentangaben
anteil = 0.75
print(f"Anteil als Prozent: {anteil:.1%}")  # Ausgabe: Anteil als Prozent: 75.0%
```

## Datentypkonvertierung in f-Strings

Auch in f-Strings werden alle Werte automatisch zu Strings konvertiert:

```python
zahl = 42
liste = [1, 2, 3]
woerterbuch = {"a": 1, "b": 2}

print(f"Zahl: {zahl}, Liste: {liste}, Wörterbuch: {woerterbuch}")
# Ausgabe: Zahl: 42, Liste: [1, 2, 3], Wörterbuch: {'a': 1, 'b': 2}
```

```{exercise} Praxisaufgabe (PA2.1): Stromrechnung mit Ausgabeformat :.2f
:label: ex-paufgaben-a21-stromrechnung-fstrings

Implementieren Sie eine Stromrechnung:

- bis 2500 kWh: 0,40 €/kWh
- die nächsten 2500 kWh: 0,35 €/kWh
- darüber: 0,30 €/kWh

Geben Sie den Rechnungsbetrag mit zwei Nachkommastellen aus (Formatierung in f-Strings).
```

```{code-cell} python3
:tags: [skip-execution]

kwh = float(input("Verbrauch in kWh: "))

# TODO: preis berechnen (if/elif/else)

print(f"Rechnungsbetrag: {preis:.2f} EUR")
```

