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

# Statisken

Zum Schluss macht sich Julia noch an die Berechnung der Statistiken:
die Berechnung des Standardabweichung und 

```{code-cell} python3
---
tags: [hide-input]
---

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
```

Zunächst liest Julia wieder die Datei ein:

```{code-cell} python3
from urllib.request import urlopen

url = "https://raw.githubusercontent.com/pandas-dev/pandas/main/doc/data/air_quality_no2.csv"
with urlopen(url) as response:
    csv_text = response.read().decode("utf-8")

data = parse_air_quality_csv_v3(csv_text)

```


## Quantile

Was sind quantile? Grundsätzlich..

Beispiel: 
Wir haben 10 Werte
82, 91, 12, 92, 63, 9, 28, 55, 96, 97

Wir sortieren sie:
9, 12, 28, 55, 63, 82, 91, 92, 96, 97


Was bedeutet „25 %-Quantil“?
25 % heißt: „Ein Viertel der Werte soll links davon liegen.“
Ein Viertel von 10 sind 2,5 Werte.

Und jetzt gibt es veschiedenen Verfahren, die sich dadurch unterscheiden was wir jetzt machen: rechnen wie den 2. und 3. wert zusammen? nehmen wir den 3. wert? 

-> wir verwenden hier das "Nearest-Rank Quantile"

Nearest-Rank Quantile:

Es gibt keinen halben Wert, also nehmen wir den nächsten ganzen Wert, bei dem man sagen kann:
„Jetzt sind mindestens 25 % erreicht.“
Das ist:
9, 12, [28], 55, 63, 82, 91, 92, 96, 97
-> 25 %-Quantil = 28

Was bedeutet der Median (50 %)?
50 % heißt:
„Die Hälfte der Werte liegt links, die Hälfte rechts.“
Bei 10 Werten gibt es keinen einzelnen mittleren Wert, sondern zwei in der Mitte:
9, 12, 28, 55, [63, 82], 91, 92, 96, 97
Der Median liegt zwischen diesen beiden:
(63 + 82) / 2 = 72,5
-> 50% Quantil = 72,5

75 % heißt:
„Drei Viertel der Werte sollen links davon liegen.“
Drei Viertel von 10 sind 7½ Werte.

Wieder: kein halber Wert → nächster sinnvoller Messwert:
9, 12, 28, 55, 63, 82, 91, [92], 96, 97
-> 75 %-Quantil = 92

## Berechnung

Die Herausforderung ist es nun die Liste an Zahlen zu sortieren. Julia ist ganz Feuer und Flamme, da sie im Studium viel über Sortieralgorithmen gelernt hat.

Sie erinnert sich noch dass es zum Sortieren unterschiedliche Algorithmen gibt und findet eine Übersichtstabelle:

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


Sie recherchiert weiter und findet heraus, dass in Python bis Python3.10 TimSort zum Sortieren von Listen verwendet. Ab 3.11 wurde die Merge- ..  geändert: jetzt wird PowerSort  verwendet. #todo: beschreibe was ist damit gemeint?? Quelle: https://www.i-programmer.info/news/216-python/15954-python-now-uses-powersort.html

Julia würde allerdings gerne selbst bestimmen können, welcher Algorithmus verwendet wird. Also implementiert sie ein Strategiepattern:

#todo implementiere bubble sort und selection sort beispielhaft.



#Dann macht sie einen performance test. und vergleicht ihre beiden algorithmen mit dem Python default.


Julia entscheidet sich aufgrund des Performance unterschieds, der bei großen datenmengen ja noch größer wird, deshalb nun das sortieren doch mithilfe der python implementierung zu implementieren

#todo add implementierung
data_temp = data.copy()
for station in data_temp:
    _result = describe(data_temp[station]["no2"])
    cols.append(station)
    results_dict.append(_result)


## statistics

Dann kommt Julias Kollegin vorbei und meint dass es für die ganzen Berechnungen auch eine native Python-Bibliothek gibt: statistics.
Julia hofft, dass ihre Implementierung deutlich schneller ist als die native. Falls das der Fall wäre, hat ihre Implementierung immer noch Bestand. Falls nicht, macht es Sinn umzusteigen und ihre Implementierung zu löschen.


```{code-cell} python3
import statistics as stats
sample = [2,1,4,66,2,3,6,4,3,8,12,124]
quantiles = stats.quantiles(sample, n=4) 

print.. 

```




## Finale Implementierung

```{code-cell} python3
import statistics as stats

def describe(data):

    quantiles = stats.quantiles(data, n=4)
    return {
        "count": len(data),
        "mean": stats.mean(data),
        "std": stats.stdev(data),
        "min": min(data),
        "25%": quantiles[0],
        "50%": quantiles[1], # median
        "75%": quantiles[2],
        "max": max(data),
    }

    
def print_table(stats, cols, precision=2):
    header = ["stat"] + cols
    rows = []

    for stat, values in stats.items():
        row = [stat] + [
            f"{v:.{precision}f}" if isinstance(v, float) else str(v)
            for v in values
        ]
        rows.append(row)

    col_widths = [
        max(len(str(cell)) for cell in column)
        for column in zip(header, *rows)
    ]

    def fmt_row(row):
        return "  ".join(
            cell.ljust(w) for cell, w in zip(row, col_widths)
        )

    print(fmt_row(header))
    print("-" * (sum(col_widths) + 2 * (len(col_widths) - 1)))
    for row in rows:
        print(fmt_row(row))

results_dict = []
cols = []

for station in data:
    _result = describe(data[station]["no2"])
    cols.append(station)
    results_dict.append(_result)
    
    
table = {k: [row[k] for row in results_dict] for k in results_dict[0]}
print_table(table, cols = cols)
```