
# Pythons Modulpriorisierung (S)

Wenn Sie

```python
import squaresum
```

schreiben, sucht der Interpreter nach dem Modul `squaresum` an verschiedenen Orten. Wenn es nirgends gefunden wird, erhalten Sie einen `ModuleNotFoundError`.

Typisch (vereinfacht) ist diese Reihenfolge:

1. **Standardbibliothek / built-ins**: Gehört das Modul zu Python selbst? (z.B. `math`, `sys`)  
   → [Python Standard Library](https://docs.python.org/3/library/)
2. **Installierte Pakete in der aktiven Umgebung**: Alles, was Sie z.B. mit `conda install ...` oder `pip install ...` in *dieser* Umgebung installiert haben.
3. **Ordner auf `sys.path`**: Dazu gehört u.a. das Verzeichnis des gestarteten Skripts (und je nach Kontext auch das aktuelle Arbeitsverzeichnis).
4. **Zusätzliche Suchpfade** (z.B. über `PYTHONPATH`).

Sie können sich die Suchpfade anschauen:

```python
import sys
print(sys.path)
```

Für den Kurs reicht als Faustregel meistens:

- **Eigene Module**: liegen im selben Projektordner (oder sind als Paket sauber strukturiert).
- **Fremde Pakete**: installieren Sie in der **aktiven** Kursumgebung über `conda` (und falls nötig `pip`).

Wie Sie Umgebungen/Installationen im Kurs handhaben, sehen Sie im Setup-Teil:  
→ {ref}`Installation (Kurs-Setup) <sec-python-installation>`
