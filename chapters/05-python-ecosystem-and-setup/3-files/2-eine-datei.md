# Was wir im Kurs machen (vereinfacht: eine Datei) (V)

Damit Sie sich auf Programmierkonzepte konzentrieren können, arbeiten wir häufig mit **einer Python-Datei**.
Auch in einer Datei können (und sollten) Sie gedanklich trennen:

- **Entrypoint**: *wo startet der Ablauf?*
- **Workflow/Geschäftslogik**: A → B → C
- **Bausteine**: z. B. kleine Hilfsfunktionen

Wichtig: Wenn Sie eine Datei direkt ausführen (`python mein_script.py`), arbeitet Python sie **von oben nach unten** ab.

Der *Entrypoint* ist dabei **nicht** „die erste Zeile“, sondern der **Programmstart** (der Aufruf in der Konsole: `python mein_script.py`).

## Einfaches Skript 

Im folgenden Beispiel wird..  Die Pythonbefehle werden in der datei main_script.py abgespeichert. Wir können das skript ausführen über `python mein_script.py` (entweder in der console oder über einen button in der IDE, der den consolenaufruf für Sie übernimmt)

```python
# Datei: mein_script.py
# Entrypoint: Start mit: python mein_script.py

print("Programm startet")

# Workflow/Geschäftslogik (A → B → C) als einfacher Ablauf:
x = 10
y = x * 2

x2 = 11
y2 = x2 * 2

x3 = 14
y3 = x3 * 2

ergebnis = y + y2 + y3
print("Ergebnis:", ergebnis)
```
Sie sehen, dass im Skript die Logik „mal zwei nehmen“  mehrfach kopiert ist.

## Beispiel 2: Skript mit Funktion (Baustein)

Wir wollen den Code nicht kopieren, weil ...
Deshalb lagern wir ihn in eine funktion aus.


```python
# Datei: mein_script.py
# Entrypoint: Start mit: python mein_script.py

def mal_zwei(zahl: int) -> int:
    """Baustein: wiederverwendbare Funktion."""
    return zahl * 2

print("Programm startet")

# Workflow/Geschäftslogik:
y = mal_zwei(10)
y2 = mal_zwei(11)
y3 = mal_zwei(14)

ergebnis = y + y2 + y3
print("Ergebnis:", ergebnis)
```

Die Funktion ein **Baustein** und der restliche Code ist der **Workflow**.
