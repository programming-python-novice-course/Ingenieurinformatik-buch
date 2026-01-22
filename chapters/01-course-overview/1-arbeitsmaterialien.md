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

# Empfohlende Arbeitsmaterialien
Entweder Sind Sie gerade auf einer interkativen Website unterwegs oder Sie haben ein Skript vor sich liegen. So oder so: Schritt 1 ist geschafft - Sie haben bereits mindestens einen Teil Ihrer Arbeitsmaterialien erfolgreich im Einsatz. 

Um die Inhalte der Vorlesung möglichst effizient zu konsumieren, empfehle ich Ihnen, dass sie die folgenden Arbeitsmaterialien nutzen: 
- die interaktive Website
- das Vorlesungs-Skript (siehe [Downloads](../misc/downloads.html))

```{admonition} Hinweis
:name: remark-sample
:class: remark
Falls noch nicht geschehen: melden Sie sich zum Moodle-Kurs an. Der Name des Kurses auf der Moodle-Plattform sowie das Passwort erhalten Sie in der ersten Vorlesung. Im Falle einer Abwesenheit kontaktieren Sie Ihre Dozentin.
```

Die Website und das Skript sind thematisch identisch. 
Das Skript dient Ihnen dazu während der Vorlesung Notizen zu machen. 
Die interaktive Website ermöglicht Ihnen die in der Vorlesung gezeigten Programmierbeispiele direkt im Webbrowser auszuführen. So können Sie live während der Vorlesung die Beispiele ausführen oder, falls Ihnen das zu hektisch wird, die Beispiele in Ihrer Nachbereitung in Ruhe von zu Hause aus ausführen, abändern oder auch erweitern. 

**Wie und wann kann ich Python-Code auf der Website ausführen**

Nicht alle Webpages auf dieser Website haben ausführbaren Python-Code.
Ob eine Website Python-Code enthält, erkennen Sie daran, ob auf im Menu eine Rakete abgebildet ist.

```{figure} ../../figs/01-course-overview/code-ausfuehren1.png
---
width: 600px
---
```
Python-Code erkennen Sie daran, dass er in einer Code-Zelle enthalten ist, einer Art "Box" mit abgerundenten Ecken.

Um Python-Code interaktiv auf dieser Seite auszuführen, klicken Sie  zunächst auf die Rakete und dann auf "Live-Code".

```{figure} ../../figs/01-course-overview/code-ausfuehren2.png
---
width: 600px
---
```

Dann müssen Sie einmalig warten: zwischen 5Sekunden und 2 Minuten. In dieser Zeit wird Python im Hintergrund für Sie eingerichet. Sie müssen sich um nichts kümmern. Sobald die Einrichtung erfolgreich war, können Sie auf der Website hin- und herspringen und neue Seiten ausführen ohne nochmal warten zu müssen.

```{figure} ../../figs/01-course-overview/code-ausfuehren3.png
---
width: 600px
---
```
Die Einrichtung war erfolgreich, wenn die Statusmeldung "ready" enspricht.
Ab diesem Zeitpunkt sehen Sie bei jeder Code-Zelle ein Menu.

Sie können nun den Code beliebig anpassen und beliebig oft ausführen über "run". 

```{figure} ../../figs/01-course-overview/code-ausfuehren4.png
---
width: 600px
---
```

Am besten testen Sie es gleich hier auf dieser Seite: gehen Sie auf die Rakete, ändern sie die folgende Code-Zelle ab, und führen Sie sie aus über "run".


```{code-cell} python3
myname = "Christina"
print("hello")
print(myname)
```


