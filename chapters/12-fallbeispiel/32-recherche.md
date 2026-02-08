# Recherche

Für jedes Teilproblem prüfen wir jetzt, ob es dafür schon ein Python-Paket (oder sogar eine “Komplettlösung”) gibt. Moderne LLMs können diese Recherche stark beschleunigen – wichtig ist dabei, dass Sie sich **Quellen/Links** geben lassen und die Vorschläge kurz verifizieren.

```{tip}
Bitten Sie das LLM immer um Links zur offiziellen Doku (oder PyPI) und darum, keine Pakete zu “erfinden”. Recherchieren heißt: Vorschläge sammeln, vergleichen, entscheiden.
```

**Beispielprompt (zum Kopieren)**

```text
Ich will ein Python-Programm schreiben, das Messdaten auswertet. Ich habe die Aufgabe in Teilprobleme zerlegt:

| Teilproblem | Input | Transformation (grob) | Output | Abhängigkeiten |
|---|---|---|---|---|
| 1 Visualisierung | Messdaten | Daten aufbereiten → geeignete Visualisierung erstellen | Plot(s) zur Verteilung | 3 Daten einlesen |
| 2 Statistik-Tabelle | Messdaten | Kennzahlen berechnen (z. B. Mean/Median/Quantile) → tabellarisch darstellen | Tabelle mit Kennzahlen | 3 Daten einlesen |
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

Antwort von ChatGPT

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

Am besten probieren Sie den prompt einfach selbst aus.



Was hier wichtig ist: das LLM wird Ihnen alles mögliche an Paketen anbieten - das ist super, aber Sie sind dafür verantwortlich, dass diese Pakete stabil funktionieren.
- Wie werden die Pakete gewartet? 
- Sind sie die Pakete qualitätsgesichtert, also "gut getestet"?
- Sind sie einfach installierbar? 
- Wie komplex darf/muss das System aufgebaut sein? Reicht uns die Minimal-Variante?

Sie sehen: trotz recherche und beispielskript haben wir immer noch einige Fragen zu klären.
+
Das LLM kann in der Regel keine Schnittstellenarbeit für Sie übernehmen. In unserem Fall: Sie müssen sich darum kümmern, dass die Datei an einer Stelle abgelegt ist, worauf Sie Zugriff haben.


Julia entscheidet sich, dass eine Minimal-Variante erst einmal reichen soll. Also wenige neue Pakete - überschaubare Komplexität.
Sie entscheidet sich deshalb für die Variante "pandas und matplotlib" - Pakete, die sie bereits im Studium als verwendet hat und mit denen sie aus Erfahrung weiss, dass diese weit verbreitet, gut gewartet/getestet sind.