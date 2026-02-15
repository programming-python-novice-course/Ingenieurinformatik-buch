# Hinweise zu Übungsaufgaben

Einige Übungsaufgaben stammen aus den Übungsmaterialien von Prof. Küpper (Hochschule München, FK03):

[https://kuepper.userweb.mwn.de/informatik/python-aufgabensammlung.pdf](https://kuepper.userweb.mwn.de/informatik/python-aufgabensammlung.pdf)

Er hat sein Einverständnis gegeben, dass wir die Übungsbeispiele wiederverwenden dürfen. 

Die folgenden Tabellen zeigen wo die jeweiligen Aufgaben in diesem Skript integriert wurden. Sie dienen der Nachvollziehbarkeit. 

**1. Grundlagen**

| Aufgabe | Thema | Empfohlene Stelle im Buch |
|---|---|---|
| A1.1 Umrechnung kW↔PS | `input`, `float`, Rechnen, `print`, (optional: `if` für Richtung) | `chapters/05-python-ecosystem-and-setup/2-run/3-script-datei.md` (Skript-Workflow) + Übungsseite Kap. 05 |
| A1.2 Mitternachtsformel | `if/else`, `sqrt`, Sonderfälle | `chapters/09-control-flow/1-cases/8-beispiel-quadratische-gleichungen.md` (Fallunterscheidung) oder später Kap. 10 als Funktion |
| A1.3 Temperatur | Variablen, Rechnen, `input`/`print` | `chapters/06-python-basics/1-variables/1-initialisierung-zuweisung.md` + Übungsseite Kap. 06 |
| A1.4 Kreisberechnung | `math.pi`, Potenz `**`, Formatierung | `chapters/05-python-ecosystem-and-setup/4-modules.md` (Imports) oder `chapters/06-python-basics/2-expressions/1-arithmetische-operatoren.md` |
| A1.5 Widerstände Reihe/Parallel | Rechnen, Fehlerfall `r<=0`, optional `if` | `chapters/08-eingaben-und-ausgaben/50-konvertierung.md` (Konvertierung/Validierung) + Kap. 11 Refactoring nach OOP |

**2. Verzweigungen**

| Aufgabe | Thema | Empfohlene Stelle im Buch |
|---|---|---|
| A2.1 Stromrechnung | `if/elif/else`, Format `:.2f` | `chapters/09-control-flow/1-cases/4-if-elif-else.md` + `chapters/08-eingaben-und-ausgaben/52-f-strings.md` |
| A2.2 Maximum/Median | Vergleiche, verschachtelte `if` | `chapters/06-python-basics/2-expressions/2-vergleichsoperatoren.md` oder `chapters/09-control-flow/1-cases/6-verschachtelung.md` |
| A2.3 BMI | `float`, `if/elif/else`, Grenzwerte, `bool` als Bedingung | `chapters/07-python-data-types/22-bool.md` + Übungsseite Kap. 07 |
| A2.4 ICAO Standardatmosphäre | `if/elif`, (teils) Schleifen/Listen | Fortgeschrittene Übung Kap. 09 oder Kap. 10 (Funktionen) |

**3. Schleifen, Matplotlib, Dateien**

| Aufgabe | Thema | Empfohlene Stelle im Buch |
|---|---|---|
| A3.1 Fakultät | `while` oder `for`, Zähler/Akkumulator | `chapters/09-control-flow/2-loops/1-while.md` (unbestimmte Wiederholung) |
| A3.4 Würfelspiel | `for`, Zufall (`random`), Simulation | `chapters/09-control-flow/2-loops/2-for.md` (Motivation/Simulation) |
| A3.6 Funktionsgraph | Listen sammeln + Plot | `chapters/09-control-flow/2-loops.md` (Iteration → Daten sammeln) + Übungsseite Kap. 09 |
| A3.10 Fibonacci | Liste/Sequenz, Plot (optional) | `chapters/07-python-data-types/31-list.md` (Listen) |
| A3.11 Textdatei lesen | Datei-I/O, Strings | `chapters/05-python-ecosystem-and-setup/3-files/2-eine-datei.md` + `chapters/07-python-data-types/34-string.md` |

**4. Funktionen**

| Aufgabe | Thema | Empfohlene Stelle im Buch |
|---|---|---|
| A4.1 Euklidischer Algorithmus | Schleife + Funktion | Idee in Kap. 02 (Algorithmus/Pseudocode), Implementierung in `chapters/10-functions/23-anwendung.md` |
| A4.3 Mitternachtsformel als Funktion | `def`, Rückgabe (mehrere Werte) | `chapters/10-functions/21-definition.md` |
| A4.5 Kraftvektor zerlegen | Parameter, Rückgabewerte, `math.sin/cos` | `chapters/10-functions/22-parameter.md` |
| A4.7 Widerstände als Funktion | `def`, Wiederverwendung | `chapters/10-functions/23-anwendung.md` (Strukturierung) |

**5. Prüfungsvorbereitung / Mini-Case-Studies**

| Aufgabe | Thema | Empfohlene Stelle im Buch |
|---|---|---|
| A5.4 Lithium-Ionen-Akku | Datei einlesen + Plot + Kennzahlen | Kap. 12 (`53-parsing.md`, `54-histogram.md`) als alternative Mini-Case-Study |
| A5.6 Nullstelle (Bisektion) | Iteration + Abbruchkriterium + Plot | Kap. 10 (fortgeschritten) oder Kap. 09 (Schleifen-Vertiefung) |
| A5.7 Verteilung von Zufallszahlen | Simulation + Histogramm/Plot | Kap. 09 (Loops/Simulation) oder Kap. 12 (Visualisierung/Statistik) |

**NumPy/SciPy (optional)**

| Beispiel | Thema | Empfohlene Stelle im Buch |
|---|---|---|
| C_Vektoren_Matrizen.py | `numpy` Arrays, `linspace`, `zeros`, `eye` | `chapters/07-python-data-types/60-external.md` (optional) |

