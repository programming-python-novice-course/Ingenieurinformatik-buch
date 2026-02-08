# Beispiel 2: E-Mail-Adresse einlesen (Validierung) (A)

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
