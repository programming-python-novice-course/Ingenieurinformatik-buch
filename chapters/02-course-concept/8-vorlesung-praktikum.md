---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Leseempfehlung: Buchkapitel für die Praktikumstermine

Diese Übersicht hilft Ihnen dabei, die richtigen Buchkapitel für die jeweiligen Praktikumstermine zu finden. Die Kapitelstruktur des Buches folgt einer didaktisch sinnvollen Progression, die sich von der Praktikumsaufteilung unterscheidet. Diese Tabelle zeigt Ihnen, welche Kapitel für welches Praktikum besonders wichtig sind.

## Übersichtstabelle

| Praktikum | Relevante Kapitel | Besonders wichtige Abschnitte | Hinweise |
|-----------|-------------------|-------------------------------|----------|
| **P1**<br>Erstes Programm | **Kapitel 06**: Python Ökosystem<br>**Kapitel 07**: Python Basics<br>**Kapitel 08**: Datentypen (Grundlagen)<br>**Kapitel 09**: Eingaben/Ausgaben | • Variablen (Kap. 07)<br>• Einfache Datentypen: int, float, bool, str (Kap. 08)<br>• input(), print(), f-Strings (Kap. 09)<br>• Module importieren (Kap. 06) | Lesen Sie zunächst die Grundlagen der Datentypen (int, float, bool, str) aus Kapitel 08, dann Kapitel 09 für Eingaben/Ausgaben. |
| **P2**<br>if-else | **Kapitel 08**: Datentypen (Wiederholung)<br>**Kapitel 11**: Kontrollstrukturen<br>**Kapitel 09**: Eingaben/Ausgaben (Wiederholung) | • Fallunterscheidungen: if, elif, else (Kap. 11)<br>• Vergleichsoperatoren (Kap. 11)<br>• Formatierte Ausgabe mit f-Strings (Kap. 09) | **Wichtig**: Kapitel 11 behandelt sowohl Fallunterscheidungen als auch Schleifen zusammen. Lesen Sie das gesamte Kapitel, auch wenn P2 nur Fallunterscheidungen behandelt. |
| **P3**<br>Schleifen | **Kapitel 08**: Datentypen (Listen vertiefen)<br>**Kapitel 11**: Kontrollstrukturen (Schleifen)<br>**Kapitel 09**: Eingaben/Ausgaben (Wiederholung) | • Schleifen: while, for (Kap. 11)<br>• Listen (list) - vollständig (Kap. 08)<br>• Durchlaufen von Listen mit for (Kap. 11 + 08)<br>• Tabellarische Ausgabe | Vertiefen Sie jetzt die Listen aus Kapitel 08. Kombinieren Sie Schleifen (Kap. 11) mit Listen (Kap. 08). |
| **P4**<br>Funktionen (Motivation) | **Kapitel 10**: Funktionen | • Motivation für Funktionen<br>• Code-Strukturierung<br>• Parameter und Rückgabewerte<br>• Lokale Variablen | Lesen Sie Kapitel 10 vollständig. Die Motivation und das Verständnis für Funktionen stehen hier im Vordergrund. |
| **P4a**<br>Funktionen definieren | **Kapitel 10**: Funktionen (vertiefen) | • Funktionsdefinition mit def<br>• Parameter vs. lokale Variablen<br>• Rückgabewerte (return)<br>• Übergang von Skript zu Funktionsaufrufen | Vertiefen Sie die praktische Anwendung aus Kapitel 10. Üben Sie das Definieren eigener Funktionen. |
| **P5**<br>Listen | **Kapitel 08**: Datentypen (Listen)<br>**Kapitel 11**: Kontrollstrukturen<br>**Kapitel 10**: Funktionen (Wiederholung) | • Listen vollständig (Kap. 08)<br>• Verschachtelte Schleifen (Kap. 11)<br>• Systematisches Kombinieren von Listenelementen<br>• Funktionen mit Listen (Kap. 10 + 08) | Kombinieren Sie alle bisherigen Konzepte: Listen, Schleifen und Funktionen. Wiederholen Sie die relevanten Abschnitte aus den vorherigen Kapiteln. |
| **P6**<br>Klausurvorbereitung | **Alle Kapitel 05-12** | • Wiederholung aller Inhalte<br>• Variablen, Datentypen, Funktionen<br>• Kontrollstrukturen<br>• Eingaben/Ausgaben<br>• Strukturierte Programme | Nutzen Sie diese Gelegenheit, alle Kapitel noch einmal durchzugehen und Wissenslücken zu schließen. |

## Wichtige Hinweise zur Kapitelstruktur

### Warum sind Kontrollstrukturen zusammen?

Im Buch sind **Fallunterscheidungen (if/elif/else) und Schleifen (while/for) in einem Kapitel** (Kapitel 11) zusammengefasst, weil beide Konzepte die Programmausführung steuern. Das Praktikum teilt diese Inhalte auf (P2: nur Fallunterscheidungen, P3: nur Schleifen), aber es ist sinnvoll, **Kapitel 11 komplett zu lesen**, um beide Konzepte im Zusammenhang zu verstehen.

### Warum kommen Eingaben/Ausgaben nach den Datentypen?

**Kapitel 09 (Eingaben/Ausgaben)** steht nach **Kapitel 08 (Datentypen)**, weil bei Eingaben und Ausgaben häufig **Konvertierungen zwischen Datentypen** notwendig sind (z.B. String von `input()` zu `int` konvertieren). 


## Praktikumsspezifische Leseempfehlungen

### Für P1 (Erstes Programm)

**Vorbereitung:**
1. Lesen Sie **Kapitel 06** (Python Ökosystem) - besonders Installation und Module
2. Lesen Sie **Kapitel 07** (Python Basics) - Variablen und Ausdrücke
3. Lesen Sie aus **Kapitel 08** die Abschnitte zu:
   - Ganzen Zahlen (int)
   - Fließkommazahlen (float)
   - Wahrheitswerten (bool)
   - Zeichenketten (str)
4. Lesen Sie **Kapitel 09** (Eingaben/Ausgaben) vollständig

**Wichtig für P1:**
- `input()` gibt immer einen String zurück - Sie müssen konvertieren!
- `print()` und f-Strings für die Ausgabe
- Module importieren (z.B. `import math`)

### Für P2 (if-else)

**Vorbereitung:**
1. Wiederholen Sie die Datentypen aus **Kapitel 08** (besonders bool für Bedingungen)
2. Lesen Sie **Kapitel 11** vollständig - auch wenn nur Fallunterscheidungen behandelt werden, verstehen Sie so den Zusammenhang mit Schleifen
3. Wiederholen Sie **Kapitel 09** (formatierte Ausgabe mit f-Strings)

**Wichtig für P2:**
- Vergleichsoperatoren (`==`, `!=`, `<`, `>`, `<=`, `>=`)
- Logische Operatoren (`and`, `or`, `not`)
- Verschachtelte if-Statements
- Fehlerbehandlung über Bedingungen

### Für P3 (Schleifen)

**Vorbereitung:**
1. Vertiefen Sie **Kapitel 08** - besonders den Abschnitt zu Listen (list)
2. Lesen Sie **Kapitel 11** - jetzt besonders die Schleifen (while, for)
3. Kombinieren Sie: Listen + Schleifen + Ausgabe

**Wichtig für P3:**
- `while`-Schleifen für unbekannte Wiederholungsanzahl
- `for`-Schleifen zum Durchlaufen von Listen
- Listen erstellen, ändern, durchlaufen
- Tabellarische Ausgabe mit Schleifen

### Für P4/P4a (Funktionen)

**Vorbereitung:**
1. Lesen Sie **Kapitel 10** vollständig
2. Verstehen Sie den Unterschied zwischen Parameter und lokalen Variablen
3. Üben Sie das Definieren eigener Funktionen mit `def`

**Wichtig für P4/P4a:**
- Funktionsdefinition mit `def`
- Parameter übergeben
- Rückgabewerte mit `return`
- Lokale vs. globale Variablen
- Code-Strukturierung durch Funktionen

### Für P5 (Listen vertiefen)

**Vorbereitung:**
1. Wiederholen Sie **Kapitel 08** (Listen)
2. Wiederholen Sie **Kapitel 11** (verschachtelte Schleifen)
3. Wiederholen Sie **Kapitel 10** (Funktionen mit Listen)

**Wichtig für P5:**
- Verschachtelte Schleifen
- Listen systematisch kombinieren
- Funktionen, die Listen als Parameter erhalten
- Funktionen, die Listen zurückgeben

### Für P6 (Klausurvorbereitung)

**Vorbereitung:**
- Gehen Sie alle Kapitel 05-12 noch einmal durch
- Fokussieren Sie sich auf die Kombination aller Konzepte
- Üben Sie strukturierte Programme mit Funktionen, Kontrollstrukturen und Listen

### Häufige Fragen zu den Praktikumsterminen

**F: Muss ich Kapitel 11 komplett lesen, auch wenn P2 nur if/else behandelt?**  
A: Ja, es ist sehr empfehlenswert! Beide Konzepte (Fallunterscheidungen und Schleifen) gehören zusammen und steuern die Programmausführung. Sie verstehen den Zusammenhang besser, wenn Sie das gesamte Kapitel lesen. Dies ist besonders wichtig für P2 und P3.

**F: Warum sind Listen schon in Kapitel 08, wenn sie erst in P3/P5 behandelt werden?**  
A: Listen sind ein Datentyp wie int oder str. Im Buch werden alle Datentypen zusammen behandelt, um einen Überblick zu geben. Für P1/P2 können Sie zunächst nur die Grundlagen (int, float, bool, str) lesen und Listen später in P3/P5 vertiefen.

**F: Soll ich Kapitel 10 (Funktionen) vor oder nach Kapitel 11 (Kontrollstrukturen) lesen?**  
A: Im Buch kommt Kapitel 10 vor Kapitel 11, aber für das Praktikum macht es Sinn, Kapitel 11 zuerst zu lesen (P2/P3) und dann Kapitel 10 (P4/P4a). Beide Reihenfolgen sind möglich - wählen Sie die, die für Sie besser passt.

**F: Ist Kapitel 12 (Objektorientierte Programmierung) wichtig für das Praktikum?**  
A: Nein, OOP wird im Praktikum nicht behandelt. Sie können dieses Kapitel überspringen, wenn Sie sich auf das Praktikum vorbereiten. Für P6 (Klausurvorbereitung) sollten Sie jedoch alle Kapitel wiederholen.

