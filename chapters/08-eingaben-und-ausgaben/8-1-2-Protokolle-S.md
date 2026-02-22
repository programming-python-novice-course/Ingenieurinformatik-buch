# Protokolle (S)

Ein *Protokoll* legt fest, **wie Daten über eine Schnittstelle übertragen werden** und **was sie bedeuten**.
Es beschreibt also den Vertrag zwischen Sender und Empfänger (Format, Struktur, Semantik).

Grundsätzlich unterscheidet man:

1. **Textbasierte Protokolle**  
   Daten werden als Zeichen übertragen.  
   Beispiele: ``stdin/stdout``, HTTP (Text), JSON

2. **Binäre Protokolle**  
   Daten werden als Bytes übertragen.  
   Beispiele: TCP/IP

## Wo liegt das Problem?

Wir erhalten bei der Kommunikation über Schnittstellen **Bytes oder Text**.
Die ursprüngliche Bedeutung im Programm müssen wir daraus erst wieder herstellen.

Nehmen wir an, wir erhalten den Text:

```
"Meine Zahlen: 2,3,4"
```

Die Zeichen `"2"`, `"3"` und `"4"` sind hier **Text** und keine echten Zahlen.
Zum Rechnen brauchen wir aber Zahlenwerte (z. B. `2`, `3`, `4` als `int`).

Wie wir das erreichen, sehen wir im Abschnitt zur **Konvertierung** (Text → Zahl).

```{admonition} Tipp: Rückfragen bei „Schnittstelle/Protokoll“
:class: tip
Wenn jemand sagt „das geht dann über eine Schnittstelle XYZ“, fragen Sie nach:

- Wie ist die Schnittstelle beim **Sender** und beim **Empfänger** implementiert?
- Wie heißt das **Protokoll** (Format/Regeln), an das sich beide halten?
- Wer stellt sicher, dass der Empfänger überhaupt **empfangen kann** (z. B. „aktiv ist“)?
- Gibt der Empfänger dem Sender eine **Bestätigung** (Ack), dass Daten korrekt angekommen sind?
- Kann der Empfänger **fehlerhafte Sendungen** erkennen oder sogar korrigieren?
```