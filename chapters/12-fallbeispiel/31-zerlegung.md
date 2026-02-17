# Dekomposition (V)

```{admonition} Leitfrage
:class: question
Wie viele tatsächliche Probleme stecken in diesem Auftrag?
```

Julia liest die Aufgabenstellung und merkt: „Visualisierung“ und „Statistik-Tabelle“ sind Ziele, aber beide setzen voraus, dass die Daten überhaupt zuverlässig im Programm ankommen. Bevor sie Code schreibt, zerlegt sie die Aufgabe daher in Teilprobleme.

**Wiederholung: Aufgabenstellung**

- Kontext: Julia erhält eine Datei mit Messwerten (NO\(_2\)-Konzentration) zu verschiedenen Flughäfen und Zeitpunkten.
- Ziel: Ein Programm, das die Messdaten auswertet:
  - grafisch: Verteilung visualisieren
  - tabellarisch: Übersichtstabelle mit Kennzahlen (z. B. Mittelwert, Median, Quartile (Q1, Median, Q3))

Julia nutzt für jedes Teilproblem denselben Fragenkatalog:

1. Input: Welche Daten brauche ich?
2. Transformation: Welche Schritte verwandeln Input in Output?
3. Output: Was soll am Ende konkret vorliegen (Plot, Tabelle, Datei, …)?
4. Abhängigkeiten: Was muss vorher gelöst sein (Dateizugriff, Einlesen, Format, …)?

Wenn mehrere Teilprobleme dieselbe Voraussetzung haben, ist das oft ein eigenes Teilproblem.

```{admonition} Kernidee
:class: remark
Julia schreibt hier noch keinen Code. Sie schafft zuerst Klarheit über Abhängigkeiten, damit sie nicht an der falschen Stelle startet.
```

```{admonition} Aufgabe
:class: note

Analysieren Sie Input, Output und Abhängigkeiten für die Teilaufgaben „Visualisierung“ und „Statistik-Tabelle“. Was fällt Ihnen auf?
```

**Julias Lösung**

| Teilproblem | Input | Transformation (grob) | Output | Abhängigkeiten |
|---|---|---|---|---|
| 1 Visualisierung | Messdaten | Daten aufbereiten → geeignete Visualisierung erstellen | Plot(s) zur Verteilung | 3 Daten einlesen |
| 2 Statistik-Tabelle | Messdaten | Kennzahlen berechnen (z. B. Mean/Median/Quantile; insbesondere Quartile (Q1, Median, Q3)) → tabellarisch darstellen | Tabelle mit Kennzahlen | 3 Daten einlesen |
| 3 Daten einlesen & vorbereiten | Datei mit Messdaten | Datei finden/öffnen → parsen → bereinigen/validieren | Daten im Programm (z. B. Liste/Array/DataFrame) | — |

Damit ist klar: Teilproblem 1 und 2 hängen beide von Teilproblem 3 ab.

```{figure} ../../figs/12-fallbeispiel/dekomposition_teilprobleme.png
---
name: fig-dekomposition-teilprobleme
width: 700px
---
Dekomposition und Abhängigkeiten der Teilprobleme.
```

```{important}
Teilproblem 3 (Daten einlesen & vorbereiten) steht oft nicht explizit in der Aufgabenstellung, ist aber Voraussetzung für die „eigentlichen“ Ziele.

Identifizieren Sie systematisch Input/Output/Abhängigkeiten, um versteckte Teilprobleme sichtbar – so könen Sie Aufwand und Komplexität realistischer kommunizieren!
```
