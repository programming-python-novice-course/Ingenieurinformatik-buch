(sec-kapitelmarker)=
# Kapitelmarker (A/S/V) und * 

In diesem Skript finden Sie in den inhaltlichen Kapiteln (Kapitel 02-12) die Markierungen **(A)**, **(S)**, **(V)** und *. 

## Wissensarten (A/S/V)

Diese Markierung zeigt, **welche Art von Wissen** im jeweiligen Kapitel im Vordergrund steht. Sie hilft Ihnen dabei, Inhalte gezielt auszuwählen – je nachdem, ob Sie gerade üben, verstehen oder systematisch vorgehen möchten.

```{admonition} Hinweis
:name: hint-asv-keine-bewertung
:class: hint

Alle drei Wissensarten sind fachlich wichtig. Die Markierung dient der **Orientierung**, nicht der Bewertung.
```

**Überblick**

| Kürzel | Wissensart | Fokus | Typische Fragen |
|---|---|---|---|
| **(A)** | **Anwendungswissen** | konkrete Umsetzung und Anwendung | „Wie setze ich das in Python um?“, „Welche Funktion nutze ich?“ |
| **(S)** | **Strukturwissen** | Modelle, Zusammenhänge, Wirkmechanismen | „Warum funktioniert das?“, „Welche Annahmen stecken dahinter?“ |
| **(V)** | **Vorgehenswissen** | systematische Vorgehensweisen, Variantenbildung, Entscheidungen | „Wie gehe ich strukturiert vor?“, „Welche Lösung ist unter welchen Randbedingungen geeignet?“ |


Werkzeuge wie KI-gestützte Programmierhilfen können bei **(A)**-Aufgaben oft unterstützen (z.B. Code-Snippets, Standard-Workflows). Für gutes Handwerk bleiben jedoch zwei Dinge entscheidend:

**(S)**: Sie müssen beurteilen können, **ob** ein Ergebnis unter den gegebenen Annahmen sinnvoll ist.

**(V)**: Sie brauchen ein verlässliches Vorgehen, um Lösungen **zu planen**, **zu prüfen** und **zu verbessern** (insbesondere bei neuen oder unklaren Aufgabenstellungen).



- **Für die Prüfungsvorbereitung**: Die (A)-Kapitel sind entscheidend – hier üben Sie die Anwendung, die in der Prüfung abgefragt wird.
- **Wenn Verständnisfragen auftauchen**: Schauen Sie in (S) nach („Warum ist das so?“, „Geht das auch anders?“), um Konzepte und Zusammenhänge zu klären.
- **Für den Transfer (ins nächste Semester und darüber hinaus)**: Nutzen Sie (V), um Vorgehensweisen und Methoden zu lernen, die sich auf neue Aufgaben übertragen lassen.

## Eigenstudium (*)

Wie Sie im Modulhandbuch gesehen ist das Modul zeitlich wie folgt aufgeteilt:
- Präsenzstudium: 35h (ca. 14 x 1,5h Vorlesung, ca. 6 x 1,5h Prakikum )
- Selbststudium: 55h 


```{admonition} Was heißt das für Sie?
:class: note

Planen Sie pro Woche ca. 2-4 Stunden für das eigenständige Erlernen der Kursinhalte ein.
```

In der Vorlesungszeit werden wir nicht jeden einzelnen Handgriff gemeinsam üben wie das eventuell in Schule und/oder Ausbildung praktiziert wurde. 

Der Zweck der Vorlesung ist, dass Sie ein Verständnis für Strukturwissen und Vorgehenswissen entwickeln, sodass Sie selbstständig anwenden können.

Das heißt nicht, dass wir nicht auch "zusammen anwenden" - wir werden viele Beispiele in der Vorlesung sehen und zusammen bearbeiten.

Für das "Einüben" der Anwendung sind sie aber selbst verantwortlich. Planen Sie dafür ausreichend Zeit ein!


```{admonition} Eigenstudium: Stern-Marker (*)
:class: note

Kapitel, die mit einem Sternmarker markiert sind, sind für das Eigenstudium gedacht.
```

Sie haben vielleicht festgestellt, dass manche Kapitel in Strukturwissen und einen Anwendungswissen unterteilt sind. 

Zum Beispiel:

- Zahlensysteme (S)
- Zahlensysteme (A*)

Das Konzept ist wie folgt:

- In der Vorlesung lernen wir das Konzept (Strukturwissen) und besprechen, wie Sie Ergebnisse selbst prüfen und plausibilisieren können. 
- Die Anwendung üben Sie anschließend im Eigenstudium mit dem A-Teil (A*). Für Fragen stehen wir natürlich weiterhin zur Verfügung.


```{admonition} Tipp zur Prüfungsvorbereitung
:name: tip-asv-pruefung
:class: tip

In Klausuraufgaben steht häufig die **Anwendung** im Vordergrund. Nutzen Sie **(A)**-Kapitel zum gezielten Üben – und ergänzen Sie **(S)**/**(V)**, damit Sie Lösungen begründen, Ergebnisse plausibilisieren und bei Abweichungen sicher reagieren können.
```


## Tappen Sie nicht in die "Surface-Learning-Falle"

Surface Learning bezeichnet Lernstrategien, bei denen (Programmier-)Aufgaben vor allem durch
Nachahmen, Wiederverwenden von Codefragmenten und das Bearbeiten vieler ähnlicher Beispiele ("Reindrehen der Schraube Nr. 287") gelöst werden, ohne die zugrunde liegenden Konzepte wirklich zu verstehen.

```{admonition} Merksatz
Wenn Sie es nicht erklären können, haben Sie es noch nicht verstanden.
```

Beim Programmieren zeigt sich das zum Beispiel, wenn:

- Code aus Beispielen übernommen wird, ohne erklären zu können, warum er funktioniert,
- kleine Änderungen (z. B. andere Daten, leicht andere Aufgabenstellung) unerwartet (!) zu Fehlern führen,
- Fehlermeldungen nicht eingeordnet werden können,
- Programme nur in der „gesehenen“ Form funktionieren, aber nicht angepasst werden können.

Viele Codebeispiele zu bearbeiten kann beim Einstieg helfen. Es ersetzt jedoch kein Verständnis zentraler Konzepte!

- Allein die Anzahl der bearbeiteten Aufgaben ist nicht zwangsweise entscheidend für Ihren Lernerfolg
- Entscheidend ist, wie gut Sie die zugrunde liegenden Konzepte verstehen.
- Erst wenn Sie erklären können, warum eine Lösung funktioniert, entsteht nachhaltiges Lernen.

```{important} 
**Qualität vor Quantität**

Wenige Übungen gründlich verstanden sind wertvoller als viele ohne echtes Verständnis.
```

## Selbstüberprüfung beim Programmieren

Wenn sich ein Programm anders verhält als erwartet, ist das ein wichtiges Warnsignal.

Wenn Sie sich die Frage **Warum macht das Programm das?** stellen, dann:

- liegt entweder ein Programmierfehler vor, den Sie bei echtem Verständnis gezielt finden und beheben können.
- Oder es wurde ein grundlegendes Konzept nicht verstanden – ein typisches Anzeichen für Surface Learning.

Zur Selbstüberprüfung:

- Kann ich in eigenen Worten sagen, was das Programm *eigentlich* tun soll?
- Kann ich erklären, warum die aktuelle Ausgabe entsteht?
- Welche Annahme steckt in meinem Code, die hier gerade nicht stimmt?
- Welche kleinste Änderung/Probe trennt die zwei wahrscheinlichsten Ursachen?

**In beiden Fällen ist die Konsequenz dieselbe:**

- Nicht mehr Beispiele programmieren, sondern das zugrunde liegende Prinzip klären! 
- Kommen Sie immer gerne auf uns zu.

