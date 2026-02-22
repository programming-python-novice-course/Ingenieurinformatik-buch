# Recherche (V)

Julia prüft für jedes Teilproblem, ob es dafür bereits ein Python-Paket (oder sogar eine „Komplettlösung“) gibt. Ein LLM kann diese Recherche beschleunigen – aber Julia bleibt verantwortlich dafür, die Vorschläge kurz zu verifizieren.

```{tip}
Julia bittet das LLM immer um Links zur offiziellen Doku (oder PyPI) und darum, keine Pakete zu „erfinden“. Recherche heißt: Vorschläge sammeln, vergleichen, entscheiden.
```

## Beispielprompt für die Recherche

```text
Ich will ein Python-Programm schreiben, das Messdaten auswertet. Ich habe die Aufgabe in Teilprobleme zerlegt:

| Teilproblem | Input | Transformation (grob) | Output | Abhängigkeiten |
|---|---|---|---|---|
| 1 Visualisierung | Messdaten | Daten aufbereiten → geeignete Visualisierung erstellen | Plot(s) zur Verteilung | 3 Daten einlesen |
| 2 Statistik-Tabelle | Messdaten | Kennzahlen berechnen (z. B. Mean/Median/Quantile; insbesondere Quartile (Q1, Median, Q3)) → tabellarisch darstellen | Tabelle mit Kennzahlen | 3 Daten einlesen |
| 3 Daten einlesen & vorbereiten | Datei mit Messdaten | Datei finden/öffnen → parsen → bereinigen/validieren | Daten im Programm (z. B. Liste/Array/DataFrame) | — |

Kennst du Python-Pakete, die diese Aufgaben bereits abdecken? Gibt es ein Paket, das möglichst viele Teilprobleme gleichzeitig löst?

Bitte antworte so:
1) Paket-Vorschläge pro Teilproblem (jeweils mit Link zur offiziellen Doku oder PyPI + 1 Satz Begründung).
2) Empfehlung: “Minimal-Stack” (wenige Pakete) vs. “komfortabel” (mehr Features).
3) Ein kurzes Beispiel-Skript (mit Imports), das:
   - die CSV einliest,
   - fehlende Werte sinnvoll behandelt,
   - Kennzahlen berechnet,
   - mindestens eine einfache Visualisierung erzeugt.
4) Falls möglich: `pip install ...` Zeile(n).

Die Messdatei ist eine CSV und sieht so aus (erste Zeilen):

datetime,station_antwerp,station_paris,station_london
2019-05-07 02:00:00,,,23.0
2019-05-07 03:00:00,50.5,25.0,19.0
2019-05-07 04:00:00,45.0,27.7,19.0
2019-05-07 05:00:00,,50.4,16.0
...
```

## Beispielantwort 

```{figure} ../../figs/12-fallbeispiel/recherche/response-1.png
---
name: fig-recherche-response-1
width: 95%
---
Beispielantwort - Teil 1 (LLM-Recherche).
```

```{figure} ../../figs/12-fallbeispiel/recherche/response-2.png
---
name: fig-recherche-response-2
width: 95%
---
Beispielantwort - Teil 2 (LLM-Recherche).
```

```{figure} ../../figs/12-fallbeispiel/recherche/response-3.png
---
name: fig-recherche-response-3
width: 95%
---
Beispielantwort - Teil 3 (LLM-Recherche).
```

Am besten probieren Sie den Prompt selbst aus.



Wichtig ist: Das LLM wird Julia viele Paketvorschläge machen.
Das ist hilfreich, aber Julia muss entscheiden, ob diese Pakete für ihr Umfeld wirklich taugen.

Zum Beispiel:

- Wie werden die Pakete gewartet?
- Sind die Pakete gut getestet?
- Sind sie einfach installierbar?
- Wie komplex darf das System werden? Reicht eine Minimal-Variante?

Selbst mit Recherche und Beispielskript bleiben meist Fragen offen.
Außerdem kann das LLM in der Regel keine Schnittstellenarbeit übernehmen.

In diesem Fall heißt das:

- Julia muss sicherstellen, dass die Datei an einer Stelle liegt (oder erreichbar ist), auf die ihr Programm zugreifen kann.


## Julias Entscheidung: Minimal-Stack (V)

Julia entscheidet sich zunächst für eine Minimal-Variante: wenige neue Pakete, überschaubare Komplexität. Sie wählt daher „pandas und matplotlib“ – Werkzeuge, die verbreitet sind und die sie bereits kennt.

## Recherche-Checkliste (V)

- Julia fordert Links zu offizieller Doku oder PyPI an, statt sich auf Namen zu verlassen.
- Julia prüft kurz Wartung, Qualität und Installierbarkeit, bevor sie ein Paket übernimmt.
- Julia entscheidet bewusst zwischen „minimal“ (wenig Abhängigkeiten) und „komfortabel“ (mehr Features).
- Julia klärt die Datenquelle (Pfad/URL) als eigene Schnittstellenaufgabe.

## Kurz zusammengefasst (V)

- Julia nutzt das LLM als Recherchehilfe, nicht als Entscheidungsträger.
- Julia priorisiert einen Minimal-Stack, um schnell und robust starten zu können.