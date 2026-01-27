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


# Histogram

Nachdem Julia nun mithilfe ihres neuen Parsers die Daten auslesen kann, macht sie sich an die Visualisierung der Histogramme.


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

Zunächst liest Julia die Datei ein. Dafür verwendet sie `urllib` – das gehört zur Standardbibliothek von Python. Es muss also nichts installiert werden (was aus Compliance-Gründen nicht immer möglich ist).

```{code-cell} python3
from urllib.request import urlopen

url = "https://raw.githubusercontent.com/pandas-dev/pandas/main/doc/data/air_quality_no2.csv"
with urlopen(url) as response:
    csv_text = response.read().decode("utf-8")

data = parse_air_quality_csv_v3(csv_text)

data = {k.replace("station_", "").title(): v for k, v in data.items()}

print(list(data.keys()))
print({station: list(d.keys()) for station, d in data.items()})
```
Wenn sie etwas genauer prüfen möchte, nutzt sie zusätzlich `json` (ebenfalls Standardbibliothek), um eine kompakte Vorschau der Daten formatiert auszugeben.

```{code-cell} python3
import json

# Kompaktes JSON-Preview (erste n Werte pro Station)
def _preview_data(data, n=5):
    return {
        station: {"time": d["time"][:n], "no2": d["no2"][:n], "total": len(d["time"])}
        for station, d in data.items()
    }

print(json.dumps(_preview_data(data, n=5), indent=2, ensure_ascii=False))
```

Dann schreibt Julia eine Funktion, die ein Histogramm ausgeben soll. Da sie keine externen Bibliotheken einbinden kann, bleibt nur die Konsole. Sie entscheidet sich für eine einfache Darstellung: **Für jede Zählung wird ein `|` gezeichnet**.

```{code-cell} python3
def histogram(station_dict, bins=8):
    """
    Einfaches ASCII-Histogramm für EINE Station.

    Erwartete Struktur:
      {"time": [...], "no2": [...], ...}
    """
    values = station_dict.get("no2", [])
    if not values:
        print("(keine Werte)")
        return

    vmin = min(values)
    vmax = max(values)
    if vmin == vmax:
        print(f"{vmin:.1f}–{vmax:.1f}: " + "|" * len(values))
        return

    step = (vmax - vmin) / bins
    edges = [vmin + i * step for i in range(bins + 1)]
    counts = [0] * bins

    for v in values:
        # letztes Intervall inklusive rechter Kante
        idx = bins - 1 if v == vmax else int((v - vmin) / step)
        counts[idx] += 1

    for i, c in enumerate(counts):
        a, b = edges[i], edges[i + 1]
        bar = "|" * c
        print(f"{a:5.1f}–{b:5.1f}: {bar} ({c})")

# Unskaliert (1 Strich pro Zählung) 
for station in data:
    print(f"\nHistogramm (unskaliert): {station}")
    histogram(data[station])
```

Für kleinere Datenmengen funktioniert das gut. Bei größeren Datensätzen werden die Balken jedoch schnell so lang, dass sie über die Seitenbreite hinausragen. Julia braucht also eine skalierte Darstellung.

```{code-cell} python3
def histogram_scaled(station_dict, bins=8, width=50):
    """
    ASCII-Histogramm für EINE Station, aber auf eine feste Breite skaliert.

    - width: maximale Balkenlänge (Anzahl Zeichen)
    - Die Zählungen bleiben als Zahl sichtbar; der Balken ist nur eine Visualisierung.
    """
    values = station_dict.get("no2", [])
    if not values:
        print("(keine Werte)")
        return

    vmin = min(values)
    vmax = max(values)
    if vmin == vmax:
        print(f"{vmin:.1f}–{vmax:.1f}: " + "|" * min(width, len(values)) + f" ({len(values)})")
        return

    step = (vmax - vmin) / bins
    edges = [vmin + i * step for i in range(bins + 1)]
    counts = [0] * bins

    for v in values:
        idx = bins - 1 if v == vmax else int((v - vmin) / step)
        counts[idx] += 1

    max_count = max(counts) or 1
    for i, c in enumerate(counts):
        a, b = edges[i], edges[i + 1]
        bar_len = round((c / max_count) * width) if c > 0 else 0
        bar_len = max(1, bar_len) if c > 0 else 0
        bar = "|" * bar_len
        print(f"{a:5.1f}–{b:5.1f}: {bar} ({c})")

# Skaliert auf eine feste Breite, besser lesbar bei großen Datensätzen
for station in data:
    print(f"\nHistogramm (skaliert): {station}")
    histogram_scaled(data[station], width=50)
```

Julia ist mit ihrer Lösung zufrieden und macht sich nun an die Statistiken.