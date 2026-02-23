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

# Live-Code

Die interaktive Website ist so aufgebaut, dass Sie darin direkt Python-Code erstellen, verändern und ausführen können. 

Damit haben Sie Ihr Skript und Ihr Programmier-Werkzeug an einer Stelle ohne dass Sie irgendetwas installieren müssen!

- Einige Seiten auf dieser Website enthalten nur theoretische Inhalte.
- Einige Seiten auf dieser Website enthalten theoretische Inhalte und Python-Code.

Ob eine Seite ausführbaren Code enthält, erkennen Sie daran, dass der Live-Code-Button grün und aktivierbar ist:

```{figure} ../../figs/01-course-overview/code-ausfuehren1.png
---
width: 700px
name: fig-code-ausfuehren1
---
Beispiel einer Seite mit ausführbaren Code: Der Live-Code-Button ist grün eingefärbt. Ansonsten ist der Button grau hinterlegt und nicht aktivierbar.
```
- Ausführbaren Python-Code erkennen Sie daran, dass er in einer Code-Zelle steht – einer Art „Box“ mit abgerundeten Ecken.

- Um Python-Code interaktiv auf der Website auszuführen, klicken Sie auf das Live-Code-Symbol.

- Danach müssen Sie einmalig warten (zwischen ca. 5 Sekunden und 2 Minuten). In dieser Zeit wird Python im Hintergrund für Sie eingerichtet - Sie müssen sich um nichts kümmern!

```{figure} ../../figs/01-course-overview/code-ausfuehren3.png
---
width: 700px
name: fig-code-ausfuehren3
---
Die Einrichtung ist erfolgreich, wenn die Statusmeldung „ready“ erscheint. Ab diesem Zeitpunkt sehen Sie bei jeder Code-Zelle ein Menü mit "Run".
```

- Sobald die Einrichtung abgeschlossen ist, können Sie auf der Website zwischen Seiten wechseln und neue Code-Zellen ausführen, ohne noch einmal zu warten.

- Sie können den Code nun beliebig anpassen und beliebig oft über „Run“ ausführen.

Am besten testen Sie den Live-Code gleich selbst aus: Aktivieren Sie „Live Code“ über den Button und klicken Sie anschließend auf „Run“.


```{code-cell} python3
:tags: [skip-execution]

myname = "Christina"
print("hello")
print(myname)
```
Das ist nicht Ihr Name? Dann ändern Sie den Namen einfach ab und führen erneut „Run“ aus.

```{admonition} Mini-Aufgabe
:label: namechange

- Ändern Sie `myname` und führen Sie die Zelle erneut aus.
- Fügen Sie eine weitere Zeile `print(...)` hinzu (z. B. Ihren Studiengang oder ein Emoji als Text) und beobachten Sie den Unterschied.
- Bonus: Machen Sie absichtlich einen kleinen Tippfehler und beheben Sie ihn wieder – Fehlermeldungen sind hier Teil des Lernens.
```