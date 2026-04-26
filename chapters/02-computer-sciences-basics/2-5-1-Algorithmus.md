---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Algorithmus

Ein *Algorithmus* ist eine wohldefinierte Sequenz von Anweisungen, die zu einer (endlichen) Eingabe in endlich vielen Schritten eine (endliche) Ausgabe berechnet – und dabei nur endlich viel Speicher verwendet {cite}`knuth:1997`.


```{exercise} Beispiel: Euklidischer Algorithmus
:label: euclid-exercise
Gegeben seien zwei natürliche Zahlen $n, m \in \mathbb{N}$.
Gesucht ist der größte gemeinsame Teiler $\mathrm{ggT}(n,m)$, also **die größte natürliche Zahl**, die sowohl $n$ als auch $m$ teilt.

Idee des Algorithmus:

- Starten Sie mit zwei Zahlen.
- Ziehen Sie wiederholt die kleinere von der größeren ab.
- Stoppen Sie, sobald beide Zahlen gleich sind.

Diese Zahl ist der größte gemeinsame Teiler der beiden ursprünglichen Zahlen.
Warum das funktioniert, sehen Sie im formalen Nachweis.
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

```{admonition} Hinweis: Algorithmen und Berechenbarkeit
:class: note

Mit dem Begriff *Algorithmus* ist direkt die Frage verknüpft: **Welche Probleme sind überhaupt berechenbar?**  
Die Berechenbarkeitstheorie untersucht (vereinfacht gesagt), ob es für ein Problem *grundsätzlich* einen Algorithmus geben kann – oder ob das unmöglich ist.

Wenn Sie tiefer einsteigen möchten, finden Sie den Hintergrund im [Expertenwissen](sec-expert-berechenbarkeit).
```