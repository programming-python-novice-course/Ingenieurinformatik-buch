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


# Bibliothek `statistics` (V)

Dann kommt plötzlich Julias Kollegin vorbei und meint, dass sie bereits sehr gute Erfahrung mit der Python-Bibliothek `statistics` gemacht hat - auch eine native Bib. Die Bibliothek liefert nicht nur Mittelwerte und Standardabweichung sondern auch schon Quantile. Das ganze Sortieren, das Julia bereits angefangen hat, war also gar nicht notwendig.

Julia ärgert sich ein wenig, dass sie nicht ordentlich rechechiert hat und entscheidet sich die Bibliothek zu nutzen - damit muss sie auch keine Tests implementieren, was ja auch noch ausstehen würde.

## Einlesen der Daten

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

Damit die Ausgabe später hübscher aussieht, entfernt Julia noch das Präfix `station_` aus den Stationsnamen (wie schon im Histogramm-Kapitel).

```{code-cell} python3
data = {k.replace("station_", "").title(): v for k, v in data.items()}
sorted(data.keys())
```

Zur Erinnerung: Die Daten liegen als Dictionary vor, pro Station jeweils die Zeitstempel und die NO₂-Werte.

Wenn Julia kurz prüfen möchte, ob alles passt, gibt sie eine kleine Vorschau aus (statt das komplette Dictionary in den Text zu kopieren).

```{code-cell} python3
import json

def preview_data(data, n=5):
    return {
        station: {"time": d["time"][:n], "no2": d["no2"][:n], "total": len(d["no2"])}
        for station, d in data.items()
    }

print(json.dumps(preview_data(data, n=5), indent=2, ensure_ascii=False))
```

## Finale Lösung

Dann implementiert Julia die Statistiken mit der Bibliothek `statistics`.

```{code-cell} python3
import statistics as st

def describe(values):
    """
    Ähnlich zu pandas.describe(), aber:
    - ohne externe Bibliotheken
    - Quartile über `statistics.quantiles(...)` (Nearest-Rank war oben nur ein didaktisches Beispiel)
    """
    if not values:
        raise ValueError("Leere Liste.")

    # quantiles(...) gibt für n=4 drei Werte zurück: [25%, 50%, 75%]
    # Wir verwenden "inclusive", damit es auch für kleinere Listen definiert ist.
    q25, q50, q75 = st.quantiles(values, n=4, method="inclusive")
    sv = sorted(values)  # nur für min/max (ohne Input zu verändern)

    return {
        "count": len(values),
        "mean": st.mean(values),
        "std": st.stdev(values) if len(values) >= 2 else 0.0,
        "min": sv[0],
        "25%": q25,
        "50%": q50,
        "75%": q75,
        "max": sv[-1],
    }


def print_table(table_data, cols, precision=2):
    header = ["stat"] + cols
    rows = []

    for stat, values in table_data.items():
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
        return "  ".join(cell.ljust(w) for cell, w in zip(row, col_widths))

    print(fmt_row(header))
    print("-" * (sum(col_widths) + 2 * (len(col_widths) - 1)))
    for row in rows:
        print(fmt_row(row))


results_dict = []
cols = []

for station in data:
    result = describe(data[station]["no2"])
    cols.append(station)
    results_dict.append(result)

table = {k: [row[k] for row in results_dict] for k in results_dict[0]}
print_table(table, cols=cols)
```

