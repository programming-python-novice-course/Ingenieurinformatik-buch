# Parsing

Julia startet im „Build“-Pfad ganz unten Sie liest die CSV-Daten selbst ein und legen sie in einer Datenstruktur ab, die sie später leicht testen und weiterverarbeiten können.

Beispieldaten (CSV-Ausschnitt):

```text
datetime,station_antwerp,station_paris,station_london
2019-05-07 02:00:00,,,23.0
2019-05-07 03:00:00,50.5,25.0,19.0
2019-05-07 04:00:00,45.0,27.7,19.0
2019-05-07 05:00:00,,50.4,16.0
...
```

Ziel-Datenstruktur: Für jede Station speichert sie die Zeitpunkte und die zugehörigen NO₂-Werte. Fehlende Messwerte (leere Felder) lässt sie weg.  - Das ist eine Design Entscheidung. Genauso gut hätte sie NaN Werte oder leere Felder verwenden können - vgl. dazu die Tabelle von vorher: diese hatte leere Felder!

```{code-cell} python3

def parse_air_quality_csv(csv_text):
    """
    Sehr einfacher CSV-Parser.

    Annahmen (für unser Lehrbeispiel):
    - Trennzeichen ist ein Komma.
    - Es gibt keine Anführungszeichen und keine Kommata innerhalb von Feldern.
    - Erste Spalte heißt 'datetime' und bleibt als String (wir parsen sie hier NICHT).

    Rückgabe:
      {
        "station_antwerp": {"time": [...], "no2": [...]},
        "station_paris":   {"time": [...], "no2": [...]},
        ...
      }

    Leere Messwerte (z. B. ,,) werden ignoriert.
    """
    lines = [ln.strip() for ln in csv_text.strip().splitlines() if ln.strip()]
    if not lines:
        raise ValueError("CSV ist leer.")

    header = [h.strip() for h in lines[0].split(",")]
    if not header or header[0] != "datetime":
        raise ValueError("Erste Spalte muss 'datetime' heißen.")

    stations = header[1:]
    result = {s: {"time": [], "no2": []} for s in stations}

    for line in lines[1:]:
        parts = [p.strip() for p in line.split(",")]
        # falls am Zeilenende Werte fehlen: mit leeren Strings auffüllen
        if len(parts) < len(header):
            parts = parts + [""] * (len(header) - len(parts))

        t = parts[0]
        for idx, station in enumerate(stations, start=1):
            value = parts[idx] if idx < len(parts) else ""
            if value == "":
                continue
            result[station]["time"].append(t)
            result[station]["no2"].append(float(value))

    return result
```

Mini-Demo (optional): einmal parsen und prüfen, welche Stationen gefunden wurden.

```{code-cell} python3
:tags: [skip-execution]

sample = """\
datetime,station_antwerp,station_paris,station_london
2019-05-07 02:00:00,,,23.0
2019-05-07 03:00:00,50.5,25.0,19.0
2019-05-07 04:00:00,45.0,27.7,19.0
2019-05-07 05:00:00,,50.4,16.0
"""

data = parse_air_quality_csv(sample)
list(data.keys())
```

## Testing 

Wir sichern das Verhalten mit ein paar Unit Tests ab. In Notebooks nutzen wir dafür `ipytest`, das `pytest` in Zellen ausführbar macht (siehe auch das Test-Kapitel).

```{code-cell} python3
:tags: [skip-execution]

import ipytest
ipytest.autoconfig()
```

```{code-cell} python3

def _sample_csv_comma():
    return """\
datetime,station_antwerp,station_paris,station_london
2019-05-07 02:00:00,,,23.0
2019-05-07 03:00:00,50.5,25.0,19.0
2019-05-07 04:00:00,45.0,27.7,19.0
2019-05-07 05:00:00,,50.4,16.0
"""


def test_parse_returns_all_stations():
    data = parse_air_quality_csv(_sample_csv_comma())
    assert set(data.keys()) == {"station_antwerp", "station_paris", "station_london"}


def test_parse_ignores_missing_values():
    data = parse_air_quality_csv(_sample_csv_comma())
    # In der ersten Zeile (02:00) hat nur London einen Wert.
    assert data["station_antwerp"]["time"][0] != "2019-05-07 02:00:00"
    assert data["station_paris"]["time"][0] != "2019-05-07 02:00:00"
    assert data["station_london"]["time"][0] == "2019-05-07 02:00:00"


def test_parse_converts_values_to_float():
    data = parse_air_quality_csv(_sample_csv_comma())
    assert isinstance(data["station_london"]["no2"][0], float)
```

```{code-cell} python3
:tags: [skip-execution]

ipytest.run()
```

Jetzt kommt ein Test, der zeigt, wo es mit einem anderen Trennzeichen hakt. Dieser Test ist **absichtlich rot** (Fail), weil unser Parser (noch) nicht mit `;` umgehen kann.

```{code-cell} python3
:tags: [skip-execution]

def _sample_csv_semicolon():
    return """\
datetime;station_antwerp;station_paris;station_london
2019-05-07 02:00:00;;;23.0
2019-05-07 03:00:00;50.5;25.0;19.0
"""


def test_parse_with_semicolon_delimiter_should_work():
    # Erwartung (aus Nutzersicht): Semikolon funktioniert genauso.
    # Realität: unser Parser ist (noch) auf Komma fest verdrahtet -> der Test scheitert.
    data = parse_air_quality_csv(_sample_csv_semicolon())
    assert "station_london" in data
```

```{code-cell} python3
:tags: [skip-execution]

ipytest.run()
```


## Error handling

Julia fällt durch die unittests auf dass ihr parser nicht wirklich generisch aufgebaut ist: sobald das Trennzeichen anders aussieht,funktioniert das parsing nicht mehr. sie hat zwei Möglichkeiten: 
- 1 entweder macht sie ihren code generischer, d.h. dass mehr trennzeichen erkannt und verarbeitet werden 
- 2 ODER sie weisst den nutzer darauf hin, dass seine eingabe nicht korrekt ist
sie hat nicht mehr viel zeit. variante 1 ist daher nicht möglich. . sie muss variante 2. 

## Überarbeiteter Parser - variante 2

nehmen: sie implementiert die funktion erneut und sagt dem nutzer aber was er falsch gemacht hat. und was der code erwartet. 

```{code-cell} python3
:tags: [skip-execution]

def parse_air_quality_csv(csv_text):
    """
    Sehr einfacher CSV-Parser (Zwischenlösung).

    Annahmen:
    - Trennzeichen ist ein Komma `,`.
    - Keine Anführungszeichen, keine Kommata innerhalb von Feldern.
    - Erste Spalte heißt `datetime` (wir parsen sie hier NICHT).

    Fehlerbehandlung:
    - Wenn die Eingabe nach Semikolon-CSV aussieht, geben wir eine klare Fehlermeldung aus.
    """
    lines = [ln.strip() for ln in csv_text.strip().splitlines() if ln.strip()]
    if not lines:
        raise ValueError("CSV ist leer.")

    first_line = lines[0]
    if "," not in first_line and ";" in first_line:
        raise ValueError(
            "Unerwartetes Trennzeichen ';'. Dieser Parser erwartet Komma ',' als Trennzeichen."
        )

    header = [h.strip() for h in first_line.split(",")]
    if not header or header[0] != "datetime":
        raise ValueError(
            "Ungültiger Header: erste Spalte muss 'datetime' heißen (Komma ',' als Trennzeichen)."
        )

    stations = header[1:]
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
            value = parts[idx] if idx < len(parts) else ""
            if value == "":
                continue
            try:
                result[station]["time"].append(t)
                result[station]["no2"].append(float(value))
            except ValueError as e:
                raise ValueError(
                    f"Ungültiger Messwert {value!r} für {station!r} in Zeile: {line!r}."
                ) from e

    return result
```

Und jetzt passen wir die Tests an: Semikolon-Eingaben sollen **nicht** „irgendwie“ geparst werden, sondern mit einer klaren Fehlermeldung abbrechen.

```{code-cell} python3
:tags: [skip-execution]

import pytest


def test_parse_still_works_with_comma_csv():
    data = parse_air_quality_csv(_sample_csv_comma())
    assert set(data.keys()) == {"station_antwerp", "station_paris", "station_london"}


def test_parse_raises_on_semicolon_delimiter():
    with pytest.raises(ValueError, match=r"Trennzeichen.*';'.*Komma"):
        parse_air_quality_csv(_sample_csv_semicolon())


# Wir überschreiben absichtlich den zuvor roten Test (gleicher Name),
# damit der Notebook-Testlauf nach der Korrektur wieder grün wird.
def test_parse_with_semicolon_delimiter_should_work():
    with pytest.raises(ValueError, match=r"Trennzeichen.*';'.*Komma"):
        parse_air_quality_csv(_sample_csv_semicolon())
```

```{code-cell} python3
:tags: [skip-execution]

ipytest.run()
```
Wirklich zufrieden ist Julia auch weiterhin nicht: was ist wenn jemand ein weiteres trennzeichen wie | eingibt. oder wenn gar kein trennzeichen vorhanden ist weil die tabelle nur eine spalte hat?

das ist eine zwischenlösung mit der sie fürs erste leben kann. das weiterhin keine andereren trennzeichen verarbeitet werden können, schreibt sie in die Doku und macht ein internes Ticket auf. 

Das größerere problem das julia noch hat ist, ist dass aktuell alle funktionaliäten in einer funktion enthalten sind. ob werte in floats geparsed werden können, kann nicht unabhängig davon getestet werden mit dem einlesen .. 

Sie entscheidet sich daher nochmal den code umzuschreiben:

## Refactoring: kleine, testbare Funktionen

Julia trennt die Verantwortlichkeiten:
- **Text → Zeilen** (leere Zeilen ignorieren)
- **Delimiter-Check** (schnell erkennen, ob `;` benutzt wurde)
- **Header parsen**
- **Messwert parsen** (isoliert testbar!)
- **Gesamtes CSV parsen** (setzt die Bausteine zusammen)

```{code-cell} python3
:tags: [skip-execution]

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


def parse_air_quality_csv(csv_text):
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

Jetzt kann Julia z. B. das Float-Parsing unabhängig testen (ohne komplettes CSV zu bauen):

```{code-cell} python3
:tags: [skip-execution]

def test_parse_no2_value_empty_is_none():
    assert _parse_no2_value("", "station_x", "dummy") is None


def test_parse_no2_value_parses_float():
    assert _parse_no2_value(" 23.0 ", "station_x", "dummy") == 23.0


def test_parse_no2_value_raises_on_invalid_number():
    import pytest

    with pytest.raises(ValueError, match=r"Ungültiger Messwert"):
        _parse_no2_value("abc", "station_x", "dummy")
```

```{code-cell} python3
:tags: [skip-execution]

ipytest.run()
```