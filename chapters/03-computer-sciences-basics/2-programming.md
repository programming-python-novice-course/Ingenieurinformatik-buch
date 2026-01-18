(sec-programming)=
# Programmieren
Programmieren ist eine Tätigkeit, bei der wir Ideen und Konzepte in eine **präzise, ausführbare Beschreibung** überführen – meist als Quellcode.
Oft meinen wir damit zwei Dinge:

- das Entwerfen eines **Algorithmus** (die Idee / Vorgehensweise) und
- die **Implementierung** in einer Programmiersprache (z. B. Python).

Dabei ist Programmieren immer auch **Kommunikation**: Sie müssen sich selbst (in zwei Wochen) und anderen (im Team) erklären können, *was* der Code tut und *wie* er strukturiert ist.

## Lernziele

Nach diesem Abschnitt können Sie …

- die Begriffe **Algorithmus**, **Programm**, **Quellcode** und **Software** unterscheiden.
- erklären, wie Anwendungssoftware typischerweise strukturiert ist (**Entrypoint**, **Workflow/Geschäftslogik**, **wiederverwendbare Bausteine**).
- erklären, warum ein GitHub-Repository oft nach „mehr“ aussieht als eine einzelne Python-Datei (Tests, Konfiguration, Doku, Abhängigkeiten, CI).
- den Zweck von `if __name__ == "__main__":` als **Guard** erklären (direkt ausführen vs. importieren).

Als gute Programmierer\*innen müssen wir 

+ unseren Kontext kennen,
+ logisch und mathematisch Denken können,
+ uns exakt ausdrücken können und uns auch unmissverständlich mit anderen austauschen können und
+ unsere Entwicklungswerkzeuge beherrschen können
  
Wir benötigen ein Grundverständnis davon wie ein [Computer funktioniert](sec-information-processing) und wie wir uns in der abstrakten Welt der [Kontroll-](sec-control-structures) und [Datenstrukturen](sec-data-structures) ausdrücken können.


Im Folgenden wollen wir eine gemeinsame Sprache schaffen und festlegen, was unter *Algorithmus*, *Programmcode* und *Programm*, *Software verstanden wird* .

## Algorithmus

Ein *Algorithmus* ist eine wohldefinierte Sequenz von Anweisungen, die zu einer (endlichen) Eingabe in endlich vielen Schritten eine (endliche) Ausgabe berechnet – und dabei nur endlich viel Speicher verwendet {cite}`knuth:1997`.


```{exercise} Beispiel: Euklidischer Algorithmus
:label: euclid-exercise
Problem: 
Gegeben seien zwei natürliche Zahlen $n, m \in \mathbb{N}$.
Wir suchen nach dem größten gemeinsamen Teiler $\text{ggT}(n,m)$ von $n$ und $m$, d.h., die größte natürliche Zahl die sowohl $n$ als auch $m$ teilt.

Algorithmus:
Wir starten mit zwei Zahlen, und ziehen solange immer und immer wieder die kleinere von der größeren ab, bis beide Zahlen gleich sind.
Das Ergebnis ist der größter gemeinsamer Teiler der beiden ursprünglichen Zahlen!
Warum funktioniert das? -> siehe formalen nachweis.
```

Die Realisierung dieses Algorithmus in Python kann so aussehen:

```{code-cell} python3
def gcd(zahl1,zahl2):

    n = zahl1 # Wir starten mit zwei Zahlen
    m = zahl2
    
    while n != m: # solange die zahlen ungleich sein
        n = n - m # ziehen die kleinere von der größeren zahl ab
        if m > n: # bestimme welche aktuell die kleinere der beiden ist 
          t = m  # merke dir die größere zahl
          m = n # speichere den kleineren zahlwert in m
          n = t # speichere den größeren zahlenwert in n
    return m

gcd(544, 119) 
```
Daneben gibt es weitere Realisierungsmöglichkeiten. Wichtig an dieser Stelle ist zu verstehen: wir können ein problem oftmals mit unterschiedlichen algorithmen lösen. Einen weiteren Algorithmus und die mathematische Theorie, warum die Algorithmen "funktionieren", finden Sie im [Expertenwissen](sec-euclid-alg).


```{admonition} Eigenschaften von Algorithmen
:name: def-algorithm
:class: definition

Ein Algorithmus hat folgende Eigenschaften:

**(1) Endlichkeit:** 
: Identisch zur Beschreibung einer [Turingmaschine](info-universal-turing-machine), besteht ein Algorithmus aus endlich vielen Zeichen.
Anders ausgedrückt, können wir ihn in endlich viel Zeit niederschreiben.
Durch die Endlichkeit seiner Beschreibung, kann ein Algorithmus als Programm in einem (endlichen) Speicher abgelegt werden.

**(2) Ausführbarkeit:** 
: Jede Anweisung des Algorithmus muss ausführbar sein.
Das heißt, die [Semantik](def-semantik) einer jeden Anweisung muss im jeweiligen Kontext eindeutig definiert sein.
Es muss in jedem Schritt nicht nur klar sein was zu tun ist, sondern dieses was muss auch tatsächlich möglich sein.

**(3) Gebundenheit:** 
: Während der Ausführung des Algorithmus wird lediglich endlich viel Speicher bzw. eine endliche Anzahl an Variablen benötigt.

**(4) Terminierung:** 
: Die Ausführung eines Algorithmus muss nach endlich vielen Schritten enden.
Die Terminierung ist das Gegenstück zur *Gebundenheit* bezogen auf die Zeit.
**(1)** und **(4)** stellen sicher, dass ein Programm und dessen Ressourcen zusammengenommen nur endlich viel Speicher verbrauchen. 
In der Komplexitätstheorie spricht man hierbei von *dynamischer Finitheit* des Speicherbedarfs.

**(5) Eingabe:** 
: Jeder Algorithmus hat entweder keine oder eine endliche Eingabe.

**(6) Ausgabe:** 
: Jeder Algorithmus liefert mindestens eine Ausgabe, d.h., ein Ergebnis zurück.

Es gibt noch zwei optionale Eigenschaften für Algorithmen, welche oftmals gefordert werden:

**(7) Determiniertheit:** 
: Wir nennen einen Algorithmus **determiniert**, wenn er bei gleicher Eingabe auch die gleiche Ausgabe erzeugt.
Entscheidet ein Algorithmus durch einen *echten Münzwurf* (kein pseudo Zufall sondern echter Zufall) über den Verlauf der Ausführung, so wäre jener Algorithmus nicht determiniert.
Algorithmen basieren wenn überhaupt auf Pseudozufallszahlen, deren Erzeugung mit einem Startwert (*Seed*) initialisiert wird.
Bei gleichem *Seed* und gleicher Eingabe erzeugen diese Algorithmen auch das gleiche Ergebnis.
Da der *Seed* zur Eingabe gehört, sind jene Algorithmen determiniert.

**(8) Determinismus:** 
: Wir nennen einen Algorithmus **deterministisch**, wenn dieser während seiner Ausführung zu jedem Zeitpunkt die nächste Anweisung eindeutig definiert.
Es gibt keine reale digitale Maschine die nichtdeterministische Algorithmen direkt umsetzten kann.
Ein Beispiel für einen nichtdeterministischen Algorithmus wäre die Wanderung durch ein Labyrinth wobei Sie bei jeder Verzweigung beide Wege zeitgleich ablaufen.
Dies ist nicht möglich, da Sie sich klonen müssten bzw. an zwei Orten gleichzeitig sein müssten.
Verwechseln Sie dies nicht mit der **Parallelität**.
Es ist natürlich möglich, dass sich zwei Personen bei einer Abzweigung trennen.
Nichtdeterminismus bedarf jedoch der Kopie des gesamten Zustands der Maschine!

Determinismus und Determiniertheit hängen zusammen, denn Determiniertheit folgt aus dem Determinismus jedoch folgt aus der Determiniertheit nicht unbedingt der Determinismus.


```

## Software vs. Programm

Ein *Programm* ist in einer Programmiersprache wie ``Python`` geschrieben und kann auf einer Maschine ausgeführt werden.

Eine *Software* besteht in der Regel aus einem oder mehreren Programmen sowie deren Konfigurationsdateien und der Dokumentation. Aus der Systemdokumentation können Entwickler den Aufbau der Software verstehen, insbesondere welche Strukturen vorhanden sind, damit verschiedene Programme ausführbar sind. Die Benutzerdokumentation dient dem Anwender, um zu verstehen, wie er von außen das Programm bedient {cite}`sommerville`.

Damit eine Software ihren Nutzerinnen und Nutzern verschiedene Programme bzw. Funktionen anbieten kann, muss sie sogenannte *Entrypoints* (Startpunkte) bereitstellen. Für jedes Programm gibt es mindestens einen Entrypoint (z. B. ein auszuführendes Skript, ein Kommando in der Konsole oder ein Menüpunkt in einer grafischen Oberfläche). Häufig wird das Verhalten eines Programms zusätzlich durch *Konfigurationsdateien* beeinflusst (z. B. „Welche Daten sollen geladen werden?“ oder „Welche Einstellungen gelten für dieses Projekt?“).

Bei Programmen mit *grafischer Benutzeroberfläche (GUI)* werden solche Konfigurationen oft im Hintergrund verwaltet: Der Nutzer speichert dann eine „Projektdatei“, in der die gewählten Einstellungen und Verweise auf Daten abgelegt sind.

```{figure} ../../figs/overview/softwarevsprogram.png
---
width: 700px
name: fig-software-vs-program
---
Anwendungs-Software besteht meist aus mehreren Programmen, die sowohl programmspezifischen Code enthalten als auch gemeinsamen Code nutzen. Häufig greifen Programme dabei auf extern entwickelte Bibliotheken oder Frameworks zurück.
```

**Geschäftslogik (Anwendungslogik)** bezeichnet den Teil eines Programms, der die fachlichen Regeln und Abläufe beschreibt: *Was* soll passieren – und *in welcher Reihenfolge*? Geschäftslogik setzt sich in der Regel aus mehreren Funktionalitäten zusammen, z. B. einem Algorithmus, der eigentlichen Datenverarbeitung und der Auswahl eines passenden Algorithmus auf Basis einer Eingabe.

Ein *Entrypoint* ist dabei **nicht** die Geschäftslogik selbst, sondern ein Startpunkt, der die Geschäftslogik aufruft (z. B. über eine GUI oder „headless“ ohne Oberfläche).

Wie sieht so etwas in der Praxis (z. B. in Python) aus?

Für das **Basiswissen** reicht hier die Idee: Ein Projekt trennt typischerweise

- **Entrypoints** (Startpunkte) von
- **Geschäftslogik/Workflow** (Ablauf) und
- **wiederverwendbaren Bausteinen** (Module/Funktionen).

Die ausführliche Praxis (typischer Projektbaum, `__main__`-Guard, „Skripten vs. Programmieren“) behandeln wir im Teil **Python anwenden** in: [Python-Skripte](sec-python-scripts).

## Was sehe ich typischerweise in einem GitHub-Repository?

Wenn Sie ein Softwareprojekt auf GitHub öffnen, sehen Sie häufig deutlich mehr als „nur Code“. Das ist normal: Ein Repository enthält nicht nur das Programm selbst, sondern auch alles, was es **nutzbar, wartbar und reproduzierbar** macht.

- **README / Doku**: Was ist das? Wie installiert/benutzt man es?
- **Quellcode** (z. B. `src/`): Wiederverwendbare Bausteine (Module) und Programme/Workflows.
- **Entrypoints** (z. B. `bin/`, `cli/`, `app/`): Startskripte/Kommandos.
- **Tests** (z. B. `tests/`): Automatische Prüfungen gegen Regressionen.
- **Konfiguration** (z. B. `configs/`): Default-Einstellungen, Profile, Parameter.
- **Daten/Beispiele** (z. B. `data/`): Beispielinput, kleine Demo-Datensätze (nicht immer).
- **Abhängigkeiten/Packaging** (z. B. `pyproject.toml`, `requirements.txt`): Welche Bibliotheken werden benötigt?
- **CI** (z. B. GitHub Actions unter `.github/workflows/`): Tests/Checks laufen automatisch bei Änderungen.

Wichtig: Viele dieser Dinge sind *kein* „unnötiger Ballast“, sondern helfen Teams, Software über längere Zeit stabil weiterzuentwickeln.

**Fokus dieser Veranstaltung**

In der Vorlesung (und im Praktikum) arbeiten wir an vielen Stellen bewusst mit **nur einer Python-Datei**. Das reduziert die Komplexität am Anfang: Sie müssen weniger „Projektstruktur“ lernen und können sich auf Konzepte und Programmierkonstrukte konzentrieren.

Wichtig ist aber: Auch wenn alles in *einer* Datei steht, steckt darin oft schon die gleiche Aufteilung wie in einem größeren Projekt:

- **Entrypoint (Startpunkt)**: Wo startet das Programm?
- **Geschäftslogik / Ablauf (Workflow)**: Welche Schritte passieren in welcher Reihenfolge?
- **Bausteine (Funktionalitäten)**: z. B. Rechenkern/Simulation, Einlesen/Schreiben von Daten, kleine Hilfsfunktionen.

In Python sieht das häufig so aus:

```python
def load_inputs(path: str):
    # Baustein: Eingaben laden
    ...

def simulate(inputs):
    # Baustein: gemeinsamer Rechenkern / Algorithmus
    ...

if __name__ == "__main__": # Entrypoint
    
    # Geschäftslogik/Ablauf: welche Schritte in welcher Reihenfolge?
    inputs = load_inputs("data/input.csv")
    results = simulate(inputs)
    # ... Ergebnisse weiterverarbeiten / speichern ...

```

Hinweis: Wenn Sie eine Datei **direkt ausführen**, läuft auch Code *ohne* den *Guard* `if __name__ == "__main__":` – Python arbeitet die Datei von oben nach unten ab. Der Guard ist trotzdem hilfreich, weil er verhindert, dass der Ablauf automatisch startet, wenn die Datei später **importiert** und als Modul wiederverwendet wird.

```{admonition} Hinweis: Was ist ein „Guard“?
Ein *Guard* (wörtlich „Schutz/Schranke“) ist eine **Bedingung**, die Code „abschirmt“: Der eingerückte Block darunter wird nur ausgeführt, wenn die Datei als **Hauptprogramm** gestartet wurde. Wird die Datei dagegen nur importiert (um z. B. `simulate(...)` wiederzuverwenden), wird der Guard-Block übersprungen.
```


Im Rahmen dieser Vorlesung programmieren wir überwiegend **headless** Anwendungen (ohne grafische Benutzeroberfläche) und konzentrieren uns auf saubere Programmstruktur:

Beim *Skripten* schreiben wir oft vor allem den **Workflow** (A → B → C) und verwenden vorhandene Bibliotheken als Bausteine.
Beim *Programmieren* entwickeln wir zusätzlich (oder vor allem) die Bausteine selbst (A/B/C), sodass sie sauber strukturiert und wiederverwendbar sind.



```{admonition} Hinweis
Ein *proprietäres Format* ist ein Dateiformat, das nicht offen standardisiert ist und meist an ein bestimmtes Tool gebunden ist.

Beispiel: Wenn Sie ein Bauteil in CATIA als `.CATPart` speichern, können Sie die Geometrie in anderen CAD-Tools oft nicht direkt öffnen oder weiterbearbeiten. Häufig müssen Sie das Bauteil dafür erst in ein Austauschformat exportieren, z. B. als STEP-Datei (`.step`/`.stp`). STEP ist ein *offener Standard* für den Datenaustausch.
```


*Programmiercode* auch genannt *Quellcode*, *Source Code* oder kurz *Code*, ist das Resultat der *Programmierung* und Teil eines *Programms*.
Das heißt zur Ausführung des *Quellcodes* fehlt möglicherweise ein Teil des gesamten Codes.



## Teaser: Was kann man (nicht) berechnen?

Die Frage „Was kann man überhaupt berechnen?“ ist ein wichtiges Fundament der theoretischen Informatik (z. B. Halteproblem, Turingmaschine, Turing-Vollständigkeit). Für das praktische Programmieren in dieser Vorlesung ist das spannend – aber **nicht Kernstoff** dieses Kapitels.

Wenn Sie tiefer einsteigen möchten, finden Sie den Hintergrund im Expertenwissen: [Berechenbarkeit & Turing-Vollständigkeit](sec-expert-berechenbarkeit).

## Selbstcheck

- Was ist der Unterschied zwischen **Programm** und **Software** (nenne mindestens 2 Bestandteile von Software neben dem Code)?
- Wo liegt in einem Projekt typischerweise die **Geschäftslogik** – und wo die **Entrypoints**?
- Warum ist `if __name__ == "__main__":` hilfreich, wenn man Funktionen später importieren will?

