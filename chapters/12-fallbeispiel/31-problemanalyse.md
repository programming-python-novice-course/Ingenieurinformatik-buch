# Dekomposition

> Wie viele tatsächliche Probleme haben wir eigentlich in unserem Auftrag?

**Aufgabenstellung (Kurzfassung)**

- Kontext: Julia erhält eine Datei mit Messwerten (NO\(_2\)-Konzentration) zu verschiedenen Flughäfen und Zeitpunkten.
- Ziel: Ein Programm, das die Messdaten auswertet:
  - Grafisch: Verteilung visualisieren
  - Tabellarisch: Übersichtstabelle mit Kennzahlen (z. B. Mittelwert, Median, Quantile/Perzentile)

**Systematisches Vorgehen**

Für jedes Ziel/Teilproblem gehen Sie immer gleich vor:

1. **Input**: Welche Daten brauche ich?
2. **Transformation**: Welche Schritte/Algorithmen verwandeln Input in Output?
3. **Output**: Was soll am Ende konkret vorliegen (Plot, Tabelle, Datei, …)?
4. **Abhängigkeiten**: Was muss vorher gelöst sein (Dateizugriff, Einlesen, Format, …)?

Wenn mehrere Teilprobleme dieselbe Voraussetzung haben, ist das oft ein eigenes Teilproblem.

**Teilprobleme (Ergebnis)**

| Teilproblem | Input | Transformation (grob) | Output | Abhängigkeiten |
|---|---|---|---|---|
| 1 Visualisierung | Messdaten | Daten aufbereiten → geeignete Visualisierung erstellen | Plot(s) zur Verteilung | 3 Daten einlesen |
| 2 Statistik-Tabelle | Messdaten | Kennzahlen berechnen (z. B. Mean/Median/Quantile) → tabellarisch darstellen | Tabelle mit Kennzahlen | 3 Daten einlesen |
| 3 Daten einlesen & vorbereiten | Datei mit Messdaten | Datei finden/öffnen → parsen → bereinigen/validieren | Daten im Programm (z. B. Liste/Array/DataFrame) | — |

Damit ist klar: Teilproblem 1 und 2 hängen beide von Teilproblem 3 ab!

```{figure} ../../figs/12-fallbeispiel/dekomposition_teilprobleme.png
---
name: fig-dekomposition-teilprobleme
width: 700px
---
Dekomposition und Abhängigkeiten der Teilprobleme.
```

```{important}
Teilproblem 3 (Daten einlesen & vorbereiten) steht oft nicht explizit in der Aufgabenstellung, ist aber Voraussetzung für die “eigentlichen” Ziele.

Wenn Sie systematisch Input/Output/Abhängigkeiten identifizieren, werden solche versteckten Teilprobleme sichtbar – und Sie können Aufwand und Komplexität realistischer kommunizieren.
```