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

# Command-Line-Interface - CLI (A)

Wenn wir in Python Texteingaben über das Command Line Interface (CLI) verarbeiten möchten, verwenden wir die Funktion `input()`.

```python
text = input("Eingabe: ")
```

## Was macht `input()`? 

- `input()` liest **Text** von der Standard-Eingabe (`stdin`)
- dieser Text wird **unverändert** an unser Programm übergeben
- der Rückgabewert ist **immer vom Typ `str`**
- `input()` nutzt eine **textbasierte Eingabe-Schnittstelle**, die vom Betriebssystem bereitgestellt wird

```python
text = input("Bitte eine Zahl eingeben: ")
zahl = int(text)
print("Quadrat:", zahl ** 2)
```

- `input()` liefert Text
- Typumwandlung kann fehlschlagen (`ValueError`)
- Fehlerbehandlung ist notwendig!!

```python
email = input("Bitte E-Mail-Adresse eingeben: ")

if "@" in email:
    print("E-Mail-Adresse sieht gültig aus.")
else:
    print("Ungültige E-Mail-Adresse.")
```

Validierung bedeutet **nicht**, dass eine Eingabe harmlos oder sicher ist.

Beispiel einer formal gültigen, aber potenziell problematischen Adresse:

```
mein-trojanerlegtdeinenpclam@hacking.de
```


```{admonition} Warnung
:name: warning-input-limitations
:class: warning

`input()` ist ein **didaktisches Werkzeug**, kein Praxisstandard. Es kann nur verwendet werden, wenn die Ausführungsumgebung eine Texteingabe-Schnittstelle (STDIN) bereitstellt. Dies ist der Fall:
- wenn Sie oder Ihre Entwicklungsumgebung (IDE) Ihr Programm in einem Terminal starten (Terminal = stdin)
- wenn Sie Ihr Programm in einem Jupyter Notebook ausführen (Notebook web frontend = stdin)

In der Praxis benutzen Endanwender jedoch kein Terminal oder Jupyter Notebook (generell wollen sie von der Programmierung nichts sehen). Vielmehr geben sie ihre Daten in einer grafischen Nutzeroberfläche ein.
```

```{exercise} Praxisaufgabe (PA1.5): Widerstände einlesen und prüfen
:label: ex-paufgaben-a15-input-konvertierung

Schreiben Sie ein Programm, das drei Widerstände \(R_1, R_2, R_3\) (in Ohm) einliest.

- Falls **alle** Werte positiv sind, berechnen Sie:
  - **Reihenschaltung**: \(R_\\text{Reihe} = R_1 + R_2 + R_3\)
  - **Parallelschaltung**: \(\\frac{1}{R_\\text{parallel}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}\)
- Andernfalls geben Sie eine Fehlermeldung aus.
```

```{code-cell} python3
:tags: [skip-execution]

r1 = float(input("R1 in Ohm: "))
r2 = float(input("R2 in Ohm: "))
r3 = float(input("R3 in Ohm: "))

# TODO: prüfen und berechnen
```


