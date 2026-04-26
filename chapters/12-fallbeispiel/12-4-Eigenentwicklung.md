# Eigenentwicklung

Julia hat die Aufgabe im Buy-Pfad bereits gelöst. Dann kommt die Überraschung: Für neue externe Bibliotheken braucht es vorab eine Freigabe (Compliance-Prozess). Auch wenn `pandas` lizenzrechtlich grundsätzlich nutzbar ist, fordert die Firma zusätzliche Schritte (z. B. Third-Party-Notices aktualisieren, Abhängigkeiten dokumentieren/SBOM pflegen, Security-Check der Lieferkette).

Das Team entscheidet deshalb: Für dieses Projekt werden keine neuen Abhängigkeiten aufgenommen. Julia muss umplanen. Statt „Buy“ (Bibliothek nutzen) bleibt hier nur „Build“ (selbst entwickeln).


Julia merkt sofort: Wenn sie selbst Funktionalität implementiert, muss sie auch selbst festlegen, was „korrekt“ heißt, und das Verhalten absichern. Tests sind damit kein Extra, sondern Teil der Eigenentwicklung.

```{admonition} Kernidee
:class: remark
Build bedeutet Verantwortung – für Korrektheit, Wartbarkeit und klare Fehlermeldungen.
```


Julia geht in drei Schritten vor:

- Sie klärt, wie sie Tests schreibt und ausführt (damit sie Verhalten früh absichern kann).
- Sie zerlegt die Teilprobleme weiter, bis sie kleine, testbare Funktionen hat.
- Sie implementiert dann nacheinander Parsing, Histogramm und Statistik – jeweils mit kurzen Tests und klarer Fehlerbehandlung.
