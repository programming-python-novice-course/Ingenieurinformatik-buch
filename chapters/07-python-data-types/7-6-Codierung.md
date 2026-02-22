# Codierung 

In diesem Kapitel haben wir nun eine Reihe von Datentypen kennengelernt, zum Beispiel `int`, `bool` und `float`, aber auch zusammengesetzte Datentypen wie `str` (Zeichenkette) oder eine Liste von Strings.

Was wir bisher noch nicht betrachtet haben: Wie werden solche Werte im Computer überhaupt gespeichert? Und warum kann ein Computer viele Kommazahlen nicht exakt ablegen, obwohl sie in der Mathematik eindeutig definiert sind?


```{admonition} Wiederholung
:name: def-encoding
:class: definition
Eine Codierung (engl. encoding) legt fest, wie eine Bitfolge zu interpretieren ist.
Sie definiert eine Zuordnung zwischen Bitfolgen und deren Bedeutung.

Ein Zahlensystem ist eine Darstellungsweise von Zahlen.
Es legt fest, wie Zahlen mit Ziffern notiert werden (z. B. Dezimal, Binär, Hexadezimal).
```

```{admonition} Frage
:class: question
Wie würden Sie $1/3$ speichern?
```
Als 1.3333 oder als 1.3333333333333333? Irgendwann muss man abbrechen.

Genau dieses Problem tritt bei der Speicherung vieler Kommazahlen auf: Man muss sie mit endlich vielen Bits repräsentieren.

Wozu das führen kann, zeigt ein bekanntes Beispiel: Ein mikroskopisch kleiner Rundungsfehler kann in einem zeitkritischen System gravierende Auswirkungen haben.

```{admonition} Beispiel: Patriot-Raketenabwehr-Fehler (Golfkrieg 1991)
:class: note

Am 25. Februar 1991 konnte ein US-Patriot-Abwehrsystem in Dhahran (Saudi-Arabien) eine anfliegende irakische Scud-Rakete nicht abfangen.
Die Rakete traf eine Kaserne und tötete 28 Soldaten.

Specifically, the time in tenths of second as measured by the system's internal clock was multiplied by 1/10 to produce the time in seconds. This calculation was performed using a 24 bit fixed point register. In particular, the value 1/10, which has a non-terminating binary expansion, was chopped at 24 bits after the radix point. The small chopping error, when multiplied by the large number giving the time in tenths of a second, led to a significant error. Indeed, the Patriot battery had been up around 100 hours, and an easy calculation shows that **the resulting time error due to the magnified chopping error was about 0.34 seconds**. (The number 1/10 equals 1/24+1/25+1/28+1/29+1/212+1/213+.... In other words, the binary expansion of 1/10 is 0.0001100110011001100110011001100.... Now the 24 bit register in the Patriot stored instead 0.00011001100110011001100 introducing an error of 0.0000000000000000000000011001100... binary, or about 0.000000095 decimal. Multiplying by the number of tenths of a second in 100 hours gives 0.000000095 x 100 x 60 x 60 x 10=0.34.) **A Scud travels at about 1,676 meters per second, and so travels more than half a kilometer in this time. This was far enough that the incoming Scud was outside the "range gate" that the Patriot tracked**. Ironically, the fact that the bad time calculation had been improved in some parts of the code, but not all, contributed to the problem, since it meant that the inaccuracies did not cancel, as discussed here and here.

Quelle: `https://people.cs.rutgers.edu/~sg1108/math/Math373/Matherrors.html`
```
Im folgenden wollen wir uns also wichtige Codierungen für Zahlen und Text ansehen.
