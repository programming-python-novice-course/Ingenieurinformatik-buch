# Empfohlene Datei-Struktur (V)

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
