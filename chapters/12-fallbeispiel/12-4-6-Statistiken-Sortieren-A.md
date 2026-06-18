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

# Statistiken - Sortieren (A)

Zur Ermittlung der Quantile muss Julia die Messwerte also erst einmal sortieren.

## Sortieralgorithmen

Julia startet damit, die Messwerte zu sortieren.

Sie ist ganz Feuer und Flamme, da sie im Studium viel über Sortieralgorithmen gelernt hat.
Sie erinnert sich: Es gibt viele unterschiedliche Ansätze zum Sortieren.

Sie findet dazu eine Übersichtstabelle:

| Algorithmus / Familie | Kurzidee | Best Case | Average Case | Worst Case | Extra Space | Stabil | In-place | Praxis / Bemerkung |
|----------------------|----------|-----------|--------------|------------|-------------|--------|----------|--------------------|
| Bubble Sort | Tauscht benachbarte Elemente | O(n) | O(n²) | O(n²) | O(1) | Ja | Ja | Lehrzwecke |
| Selection Sort | Wählt jeweils Minimum | O(n²) | O(n²) | O(n²) | O(1) | Nein | Ja | Minimaler Speicher |
| Insertion Sort | Fügt Elemente in sortierte Teilliste ein | O(n) | O(n²) | O(n²) | O(1) | Ja | Ja | Kleine / fast sortierte Daten |
| Merge Sort | Divide & Conquer + Merge | O(n log n) | O(n log n) | O(n log n) | O(n) | Ja | Nein | Stabile Referenz |
| Quick Sort | Partition um Pivot | O(n log n) | O(n log n) | O(n²) | O(log n) | Nein | Ja | Sehr schnell, aber Worst-Case |
| Heap Sort | Heap-Struktur | O(n log n) | O(n log n) | O(n log n) | O(1) | Nein | Ja | Garantierte Laufzeit |
| Counting Sort | Zählt Vorkommen | O(n+k) | O(n+k) | O(n+k) | O(k) | Ja | Nein | Kleine Wertebereiche |
| Radix Sort | Ziffernweise Sortierung | O(n·k) | O(n·k) | O(n·k) | O(n+k) | Ja | Nein | Ganzzahlen / Strings |
| Timsort (Familie) | Adaptive Merge + Insertion | O(n) | O(n log n) | O(n log n) | O(n) | Ja | Nein | Industriestandard |
| PowerSort (Merge-Policy) | Nahezu optimale Merge-Reihenfolge | O(n) | O(n log n) | O(n log n) | O(n) | Ja | Nein | CPython ≥ 3.11 |


Sie recherchiert weiter und findet heraus:

- Python sortiert Listen seit Jahren mit einer sehr ausgefeilten, stabilen Merge-Sort-Familie (**Timsort**).
- Ab Python 3.11 wurde vor allem die *Merge-Strategie* verbessert (**PowerSort**).

Julia würde trotzdem gerne selbst bestimmen können, welcher Algorithmus verwendet wird.
Also implementiert sie ein kleines Strategie-Pattern:

- „Sortieren“ ist austauschbar.
- Der Rest des Programms bleibt gleich.

```{code-cell} python3

from dataclasses import dataclass

class SortStrategy:
    def sort(self, values):
        raise NotImplementedError


@dataclass(frozen=True)
class BubbleSort(SortStrategy):
    def sort(self, values):
        a = list(values)  # kopieren, Input nicht verändern
        n = len(a)
        for i in range(n):
            swapped = False
            for j in range(0, n - i - 1):
                if a[j] > a[j + 1]:
                    a[j], a[j + 1] = a[j + 1], a[j]
                    swapped = True
            if not swapped:
                break
        return a


@dataclass(frozen=True)
class SelectionSort(SortStrategy):
    def sort(self, values):
        a = list(values)
        n = len(a)
        for i in range(n):
            min_idx = i
            for j in range(i + 1, n):
                if a[j] < a[min_idx]:
                    min_idx = j
            if min_idx != i:
                a[i], a[min_idx] = a[min_idx], a[i]
        return a


@dataclass(frozen=True)
class PythonSort(SortStrategy):
    def sort(self, values):
        return sorted(values)
```

Mini-Demo: Alle Strategien liefern dasselbe Ergebnis.



```{code-cell} python3
values = [82, 91, 12, 92, 63, 9, 28, 55, 96, 97]

strategies = [BubbleSort(), SelectionSort(), PythonSort()]
for s in strategies:
    print(type(s).__name__, "->", s.sort(values))
```

## Performance: Lernalgorithmen vs. Python-Sort 

Julia muss sich entscheiden, welchen Algorithmus sie jetzt verwendet. Deshalb führt sie einen einfachen Performance-Test durch.


```{admonition} Exkurs: Performance messen (Profiling)
:class: tip
„Performance“ kann sich auf verschiedene Dinge beziehen – z.B. **Laufzeit**, **Speicherverbrauch (RAM)** oder **I/O-Verhalten** (Warten auf Dateien/Netzwerk). Welche Kennzahl relevant ist, hängt vom Programm ab.

**Einfache Zeitmessung in Python**

Die Idee ist folgende:
- Wir messen den Startzeitpunkt: `start = time.perf_counter()` (alternativ: `time.time()`).
- Wir messen den Endzeitpunkt: `end = time.perf_counter()`.
- Die Dauer ist dann entsprechend: `dauer = end - start`.


**Profiling**
Profiling ist mehr als eine einzelne Zeitmessung: Es hilft Ihnen zu verstehen, **welche Funktionen** wie viel Zeit (oder Speicher) verbrauchen – also **wo** der Engpass wirklich liegt. 

- **CPU-Profiling (Standardbibliothek)**: `cProfile` (+ Auswertung mit `pstats`)
- **Visualisierung**: z.B. `snakeviz` (zeigt `cProfile`-Ausgaben grafisch)
- **Sampling-Profiler (geringer Overhead)**: z.B. `py-spy` (läuft auch an laufenden Prozessen)
- **Line-by-line**: z.B. `line_profiler` (sehr konkret, aber mehr Overhead)
- **Speicher/Allokationen**: `tracemalloc` (Standardbibliothek), optional `memory_profiler`

Tipp: Messen Sie mit **realistischen Eingaben** und achten Sie darauf, ob Ihr Programm eher **CPU-bound** (Rechnung) oder **I/O-bound** (Warten) ist.
```

Der Performance-Test ist so aufgebaut, dass jeder Algorithmus 100-mal für die Messdaten der Station Paris getestet wird.
Dann werden die Ergebnisse in einem Boxplot gegenübergestellt.



```{admonition} Hinweis
:class: remark

Für die Darstellung verwenden wir `seaborn`. Das ist eine externe Bibliothek. Julia findet das hier in Ordnung, weil der Performance-Test nur der Analyse dient und nicht Teil der ausgelieferten Software ist.
```

## Daten einlesen


Wie in den vorherigen Teilkapiteln liest Julia die CSV-Datei direkt aus dem Internet ein. Dafür reicht `urllib` aus der Standardbibliothek – es muss nichts installiert werden.

```{code-cell} python3
from urllib.request import urlopen

def _non_empty_lines(text):
    return [ln.strip() for ln in text.strip().splitlines() if ln.strip()]


def _ensure_comma_delimiter(lines):
    """
    Zwischenlösung: Wir unterstützen NUR Komma.
    Wenn es nach Semikolon aussieht, geben wir eine klare Fehlermeldung.
    """
    if not lines:
        raise ValueError("CSV ist leer.")

    first_line = lines[0]
    if "," not in first_line and ";" in first_line:
        raise ValueError(
            "Unerwartetes Trennzeichen ';'. Dieser Parser erwartet Komma ',' als Trennzeichen."
        )


def _parse_header(header_line):
    header = [h.strip() for h in header_line.split(",")]
    if not header or header[0] != "datetime":
        raise ValueError(
            "Ungültiger Header: erste Spalte muss 'datetime' heißen (Komma ',' als Trennzeichen)."
        )
    stations = header[1:]
    if not stations:
        raise ValueError("Header enthält keine Stationsspalten.")
    return header, stations


def _parse_no2_value(value, station, line):
    """
    Parsen eines einzelnen Messwerts.

    - Leere Felder geben wir als None zurück (d.h. Messwert fehlt).
    - Nicht-leere Felder müssen in float umwandelbar sein.
    """
    value = value.strip()
    if value == "":
        return None
    try:
        return float(value)
    except ValueError as e:
        raise ValueError(
            f"Ungültiger Messwert {value!r} für {station!r} in Zeile: {line!r}."
        ) from e


def parse_air_quality_csv_v3(csv_text):
    lines = _non_empty_lines(csv_text)
    _ensure_comma_delimiter(lines)

    header, stations = _parse_header(lines[0])
    result = {s: {"time": [], "no2": []} for s in stations}

    for line in lines[1:]:
        if "," not in line and ";" in line:
            raise ValueError(
                "Unerwartetes Trennzeichen ';' in den Datenzeilen. Dieser Parser erwartet Komma ','."
            )

        parts = [p.strip() for p in line.split(",")]
        if len(parts) > len(header):
            raise ValueError(
                f"Zu viele Spalten in Zeile: {line!r} (erwartet {len(header)}, gefunden {len(parts)})."
            )
        if len(parts) < len(header):
            parts = parts + [""] * (len(header) - len(parts))

        t = parts[0]
        for idx, station in enumerate(stations, start=1):
            parsed = _parse_no2_value(parts[idx], station, line)
            if parsed is None:
                continue
            result[station]["time"].append(t)
            result[station]["no2"].append(parsed)

    return result


url = "https://raw.githubusercontent.com/programming-python-novice-course/ingenieurinformatik-buch-deploy-lrz/master/data/air_quality_no2.csv"
with urlopen(url) as response:
    csv_text = response.read().decode("utf-8")

data = parse_air_quality_csv_v3(csv_text)
```


## Performance-Test mit Echtdaten


```{code-cell} python3
import time
import matplotlib.pyplot as plt
import seaborn as sns

def time_sort_once(strategy, values):
    # Achtung: Listen sind mutable -> jede Messung auf einer frischen Kopie
    sample = list(values)
    t0 = time.perf_counter()
    strategy.sort(sample)
    return time.perf_counter() - t0

# Reale Messdaten: wir vergleichen auf der Station Paris.
paris_no2 = data["Paris"]["no2"]

strategies = [BubbleSort(), SelectionSort(), PythonSort()]

print(f"Station: Paris | Größe n={len(paris_no2)}")

# 100 Messungen pro Algorithmus
n_runs = 100
names = []
times_ms = []

for s in strategies:
    name = type(s).__name__
    for _ in range(n_runs):
        dt = time_sort_once(s, paris_no2)
        names.append(name)
        times_ms.append(dt * 1000)

plt.figure(figsize=(8, 4))

sns.boxplot(x=names, y=times_ms)
plt.title(f"Sortier-Performance (n={len(paris_no2)}, je {n_runs} Läufe)")
plt.xlabel("Algorithmus")
plt.ylabel("Zeit (ms)")
plt.tight_layout()
plt.show()
```

```{exercise} Aufgabe
:label: exercise-sample

Implementieren Sie einen weiteren Sortieralgorithmus selbst und fügen Sie ihn dem Performance-Test hinzu. Visualisieren den Algorithmus mithilfe eines Struktogramms.
```



```{admonition} Wichtig
:class: warning

Sortieralgorithmen können prüfungsrelevant sein. Sie müssen die Algorithmen nicht alle lernen, aber Sie sollten in der Lage sein, mindestens einen Algorithmus selbstständig (also **ohne** `list.sort()` oder `sorted()`) zu implementieren.
```

Julia entscheidet sich: Für reale Daten nutzt sie die Python-Implementierung (schnell, getestet, robust). Ihre Implementierungen behält sie - vielleicht sind diese ja später noch irgendwann nutzbar.

