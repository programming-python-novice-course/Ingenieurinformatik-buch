# Schnittstellen (S)

In der Praxis wird oft davon gesprochen, dass über eine Schnittstelle hinweg kommuniziert wird.
Das klingt zunächst so, als wäre die Schnittstelle eine Komponente, die man zwischen zwei Partner „dazwischen schaltet“.

Technisch gesehen ist das falsch.

Eine Schnittstelle gehört nie nur einem Kommunikationspartner.
Sie ist immer Teil der konkreten Umsetzung eines Systems:

- ein sendendes System (Außenwelt oder Programm)
- ein empfangendes System (Programm oder Außenwelt)


```{figure} ../../figs/08-eingaben-und-ausgaben/interfaces.png
---
width: 700px
name: fig-interfaces
---
Wie hängen Input, Output, Programm und Schnittstellen zusammen?
```


Die Schnittstellen-Aufgaben lassen sich so zusammenfassen:

- **Sender-Schnittstelle**: interne Daten in ein übertragbares Format bringen
  (z. B. formatieren, serialisieren, kodieren)
- **Empfänger-Schnittstelle**: empfangene Daten wieder interpretieren
  (z. B. dekodieren, parsen, konvertieren, validieren)

Beide Seiten implementieren ihre Schnittstelle unabhängig.
Sie müssen sich aber an denselben Vertrag (Protokoll) halten.



Protokoll
→ beschreibt was übertragen wird und was es bedeutet
(Format, Struktur, Semantik)
Schnittstelle
→ beschreibt wie ein konkretes System diesen Vertrag technisch umsetzt
Das Protokoll ist gemeinsam,
die Schnittstellen sind systemabhängig.
Kernaussage
Das Protokoll verbindet Systeme.
Die Schnittstellen setzen es um.







**Wie sollen wir daraus wieder Zahlen herstellen?**

Wir müssen zwei Schritte durchführen:

1. **Konvertierung**: Das Objekt, das wir bekommen haben, umwandeln (z. B. Text "2" in die Zahl 2)
2. **Validierung**: Überprüfen, ob die Eingabe dem erwarteten Format entspricht

## Was geben wir über diese Schnittstellen aus?

Bei der Ausgabe müssen wir unsere internen Datentypen in ein Format umwandeln, das über die Schnittstelle übertragen werden kann.
In der Regel bedeutet das:
- **Konvertierung zu Text (String)**: Zahlen, Listen, Wörterbücher etc. werden zu Zeichenketten umgewandelt
- **Formatierung**: Die Darstellung wird so gestaltet, dass sie für den Empfänger verständlich ist

Die Funktion `print()` übernimmt diese Konvertierung automatisch für uns, aber es ist wichtig zu verstehen, was dabei passiert.

Im Folgenden sehen wir uns exemplarisch an, wie Eingaben und Ausgaben in Python funktionieren:
- **Eingaben**: Wie wir Daten von Nutzerinnen über Command Line Interface oder grafische Benutzeroberflächen erhalten
- **Ausgaben**: Wie wir Daten mit `print()` ausgeben und formatieren

