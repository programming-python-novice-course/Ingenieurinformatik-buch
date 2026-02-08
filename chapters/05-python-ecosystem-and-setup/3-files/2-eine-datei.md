# Einfaches Pythonprojekt (S)

> Im Rahmen dieses Moduls werden wir keine komplexern Python-Projekte erstellen.

Damit Sie sich auf Programmierkonzepte konzentrieren können, arbeiten wir häufig mit **einer Python-Datei**.
Auch in einer Datei können (und sollten) Sie gedanklich trennen:

- **Entrypoint**: *wo startet der Ablauf?*
- **Workflow/Geschäftslogik**: A → B → C
- **Bausteine**: z. B. kleine Hilfsfunktionen

Wichtig: Wenn Sie eine Datei direkt ausführen (`python mein_script.py`), arbeitet Python sie **von oben nach unten** ab.

Der *Entrypoint* ist dabei **nicht** „die erste Zeile“, sondern der **Programmstart** (der Aufruf in der Konsole: `python mein_script.py`).

## Einfaches Skript 

Im folgenden Beispiel speichern wir Python-Befehle in einer Datei `mein_script.py` und führen sie aus über `python mein_script.py` (im Terminal oder über einen Button in der IDE, der diesen Konsolenaufruf für Sie startet).
Das Skript soll dreimal „mal zwei nehmen“ und dann alles addieren:

```python
# Datei: mein_script.py
# Entrypoint: Start mit: python mein_script.py

print("Programm startet")

# Workflow/Geschäftslogik (A → B → C) als einfacher Ablauf:
z1 = 10
z2 = 11
z3 = 14

y1 = z1 * 2
y2 = z2 * 2
y3 = z3 * 2

ergebnis = y1 + y2 + y3
print("Ergebnis:", ergebnis)
```
Sie sehen, dass im Skript die Logik „mal zwei nehmen“  mehrfach kopiert ist.

## Beispiel 2: Skript mit Funktion (Baustein)

Wir wollen den Code nicht kopieren, weil das schnell unübersichtlich wird und Fehler begünstigt. Deshalb lagern wir ihn in eine Funktion aus.


```python
# Datei: mein_script.py
# Entrypoint: Start mit: python mein_script.py

def mal_zwei(zahl: int) -> int:
    """Baustein: wiederverwendbare Funktion."""
    return zahl * 2

print("Programm startet")

# Workflow/Geschäftslogik:
y1 = mal_zwei(10)
y2 = mal_zwei(11)
y3 = mal_zwei(14)

ergebnis = y1 + y2 + y3
print("Ergebnis:", ergebnis)
```

Die Funktion ist ein **Baustein** und der restliche Code ist der **Workflow**.

## Empfohlene Datei-Struktur

Sobald Sie Bausteine aus einer Datei in einer anderen Datei wiederbenutzen möchten, verwenden Sie in Python typischerweise einen **Import**.
Ein *Import* bedeutet: Code aus einer anderen Datei (z. B. eine Funktion) wird in der aktuellen Datei verfügbar gemacht.
Wichtig dabei: Beim Import wird die andere Datei einmal **geladen** – und dabei wird ihr **Top-Level-Code** ausgeführt.

Damit beim Importieren nicht automatisch der ganze Workflow startet, nutzen wir einen Guard:

`if __name__ == "__main__":` 

Wie sieht das in einem Skript aus?

```python
# Datei: skript1.py

def mal_zwei(zahl: int) -> int:
    return zahl * 2

def main() -> None:
    # Workflow/Geschäftslogik:
    ergebnis = mal_zwei(10) + mal_zwei(11) + mal_zwei(14)
    print("Ergebnis:", ergebnis)

if __name__ == "__main__":  # Entrypoint für dieses Skript
    main()

```

Wenn wir `skript1.py` direkt aufrufen (Entrypoint = `skript1.py`), wird `main()` ausgeführt und das Ergebnis ausgegeben.

Ein anderes Skript (`skript2.py`) kann den Baustein importieren, ohne die Geschäftslogik auszulösen:

```python
# Datei: skript2.py
from skript1 import mal_zwei

print(mal_zwei(7))
```
Warum? Wir rufen `skript2.py` auf (Entrypoint = `skript2.py`). Dabei wird `skript1.py` importiert, aber `main()` in `skript1.py` wird **nicht** ausgeführt, weil der Guard `if __name__ == "__main__":` nur beim direkten Start von `skript1.py` greift.
