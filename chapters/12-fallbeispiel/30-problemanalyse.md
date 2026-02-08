# Problemanalyse

Bevor Julia entscheidet, ob sie kauft (Buy) oder baut (Build), hält sie kurz inne und analysiert die Aufgabe.

Julia sammelt als Erstes die Fakten:

- Es gibt eine CSV-Datei mit Messwerten (NO₂) zu vielen Zeitpunkten.
- Die Datei enthält mehrere Stationen (Spalten) und einen Zeitstempel.
- Es gibt fehlende Werte (leere Felder), wie es bei realen Messdaten üblich ist.
- Am Ende soll es eine Visualisierung der Verteilung und eine Tabelle mit Kennzahlen geben.

Dann notiert Julia offene Fragen, bevor sie sich im Code festlegt:

- Wie genau soll die Ausgabe aussehen (Plot-Format, Tabellendarstellung, Reihenfolge der Kennzahlen)?
- Wie sollen fehlende Werte behandelt werden (ignorieren, als `NaN` speichern, als Fehler werten)?
- Welche Kennzahlen sind „Pflicht“ (Quartile/Median oder weitere Perzentile, z. B. 5 %/95 %)?
- Wo liegt die Datei im konkreten Ausführungsumfeld (lokal, Server, URL), und wie darf sie darauf zugreifen?
- Welche Abhängigkeiten sind erlaubt (dürfen neue Bibliotheken installiert werden oder gilt „Standardbibliothek only“)?

```{admonition} Wichtig
:::class: important

Julia kann diese Fragen nicht alle „wegprogrammieren“. Sie muss Annahmen treffen oder Anforderungen klären – und diese Entscheidungen kurz dokumentieren.
```

Damit sie weiterarbeiten kann, trifft Julia pragmatische Annahmen:

- Fehlende Werte werden nicht als Fehler behandelt, sondern übersprungen oder explizit markiert (je nach Pfad im Kapitel).
- Für die Statistik reichen Quartile (25 %, Median, 75 %) plus Standardkennzahlen (count, mean, std, min, max).
- Die Visualisierung darf im Build-Pfad einfach sein (notfalls als ASCII-Ausgabe), solange die Verteilung erkennbar wird.

Julia formuliert außerdem „fertig“-Kriterien, damit sie später prüfen kann, ob die Lösung wirklich passt:

- Das Programm kann die Messdatei zuverlässig einlesen (inkl. fehlender Werte).
- Die Daten sind pro Station zugreifbar, sodass Statistik und Visualisierung darauf arbeiten können.
- Es entsteht eine Visualisierung pro Station und eine Kennzahlen-Tabelle pro Station, und die Kennzahlen sind nachvollziehbar definiert.

Julia notiert typische Stolpersteine – und was sie dagegen tun kann:

- CSV-Format weicht ab (z. B. anderes Trennzeichen) und Julia braucht klare Fehlermeldungen.
- Die Implementierung wird unübersichtlich und Julia muss früh refaktorieren, damit Tests möglich bleiben.
- Eigene Implementierungen sind fehleranfälliger und Julia sollte Kernlogik mit Unit-Tests absichern.

Aus dieser Analyse folgen für Julia zwei nächste Schritte:

- Julia zerlegt die Aufgabe (Dekomposition), um Abhängigkeiten sichtbar zu machen und die Umsetzung zu planen (siehe `31-zerlegung.md`).
- Julia nutzt anschließend ein LLM für die Recherche, um mögliche Libraries/Stacks zu sammeln und eine Build-vs.-Buy-Entscheidung zu begründen (siehe `32-recherche.md`).

> Kernidee: Dekomposition macht die Arbeit planbar, und Recherche macht Entscheidungen begründbar.

