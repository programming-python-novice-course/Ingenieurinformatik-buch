# Fallbeispiel: Sensordaten statistisch auswerten

Julia bekommt von einer Kollegin eine CSV-Datei mit echten Messwerten. Ihre Aufgabe klingt zunächst einfach („einlesen und auswerten“), aber schnell wird klar: Sie muss Anforderungen klären, Teilprobleme erkennen und Entscheidungen treffen.

```{exercise} Fallbeispiel: Sensordaten statistisch auswerten
:label: exercise-sensordata

**Ausgangslage:**  
Julia bekommt eine Datei mit NO₂-Messwerten verschiedener Messstationen zu vielen Zeitpunkten. Die Datei enthält auch fehlende Werte (leere Felder), wie sie in echten Messreihen typisch sind.

**Aufgabe:**  
Julia soll ein Programm erstellen, das die Messdaten auswertet:
- **Grafisch:** Die Verteilung der Messwerte pro Station visualisieren (z. B. als Histogramm).
- **Tabellarisch:** Eine Übersichtstabelle mit Kennzahlen erzeugen (z. B. Anzahl, Mittelwert, Standardabweichung, Minimum/Maximum sowie Quartile/Perzentile).
```

**Datensatz**

Die Messdatei liegt online. Julia arbeitet (wie später in den Codebeispielen) mit dieser Quelle:

`https://raw.githubusercontent.com/pandas-dev/pandas/main/doc/data/air_quality_no2.csv`

Die Daten sind reale Messdaten zur Stickstoffdioxid-Konzentration (NO₂) in der Umgebungsluft:

- Die Werte sind in µg/m³ (Mikrogramm pro Kubikmeter) angegeben.
- Die Messreihe ist zeitlich aufgelöst (Zeitstempel).
- Es gibt mehrere Messstationen in Europa (z. B. London, Paris, Antwerpen).

Die Datei stammt aus der pandas-Dokumentation und wurde für Lehrzwecke leicht vorverarbeitet (z. B. reduziert und als CSV bereitgestellt). Sie enthält typische Eigenschaften realer Daten, z. B. Messrauschen und fehlende Werte.




