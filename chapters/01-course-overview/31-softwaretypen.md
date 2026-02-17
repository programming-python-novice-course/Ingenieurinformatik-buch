# Softwaretypen

Es gibt verschiedene Softwaretypen:

- Eingebettete Systeme (embedded software) – z.B. Flugregelung
- Datenerfassungssysteme – Beispiel: Air Data System
- Systeme von Systemen – z.B. Air Traffic Management System: Flugzeug, Tower, Luftraum und Infrastruktur
- Eigenständige Anwendungen (stand-alone) wie Systeme für Modellierung und Simulation – z.B. Geometrieerzeugung (FreeCAD, CATIA) zur Bauteiloptimierung (optiSLang)

```{figure} ../../figs/01-course-overview/overview/motivation.png
---
height: 320px
name: motivation
---
```

Diese Typen werden unter anderem von Ingenieurinnen entwickelt.

Daneben gibt es weitere Softwaretypen, bei denen Ingenieure weniger häufig beitragen:

- Interaktive transaktionale Anwendungen (z.B. Amazon)
- Stapelverarbeitende Software (batch processing) – Lohnauszahlungssysteme
- Unterhaltungssysteme – Beispiel: Computerspiele

Wie ein Softwareprodukt entwickelt wird, hängt stark vom Softwaretyp ab. 

```{admonition} Hinweis
:name: remark-sample
:class: remark
Die Einteilung der Softwaretypen ist nicht trennscharf!
```

## Beispiel aus der Praxis: Erstellung von CAD-Geometrie mit Python

FreeCAD ist eine Software zur Erstellung von Geometrie - ähnlich wie CATIA, das Sie im Rahmen einer anderen Vorlesung kennenlernen werden.

```{figure} ../../figs/01-course-overview/freecad.png
---
width: 700px
name: fig-freecad
---
Beispiel: CAD-Geometrieerstellung in FreeCAD (automatisierbar mit Python).
```

- Sie können in FreeCAD Geoemtrie einfach über das Klicken der entsprechenden "Knöpfe im Menu" erzeugen 

- Jeder "Knopfdruck" erzeugt im Hintergrund aber eigentlich nur einen Python-Command.


**Beispiel: Einfache Box**

```python
# ============================================================================
# FreeCAD Document and Object Creation - COPY the following command
# into the FreeCAD GUI to create the box 
# ============================================================================

if not App.activeDocument(): 
    doc = App.newDocument()
else:
    doc = App.activeDocument()

# Create a parametric Part::Box object
# Using Part::Box instead of Part::Feature allows changing dimensions later
doc_obj = doc.addObject("Part::Box", "Box")
doc_obj.Length = 100
doc_obj.Width = 50
doc_obj.Height = 70
doc_obj.Label = "MyBox"

# Apply translation to position the box
doc_obj.Placement.Base = App.Vector(xshift, 0, 0)

# Recompute the document to update the geometry
doc.recompute()
```

- Das bedeutet für uns: wenn wir ein wenig Python verstehen, können wir uns das "Knöpfe drücken" sparen und die Geometrie automatisch generieren lassen (was viel viel schneller ist).

## Projektstudium an der HM, FK03: Laufroboter

Im Laufe Ihres Bachelorstudiums haben Sie ein Projektstudium. 

Wir (Berghammer, Ertl, Mayr, Mehlert, Muhl) haben beispielsweise einen Laufrobor entwickelt (Sommersemester 2017).

- Das Bewegungsverhalten haben wir vorher simuliert - in der Programmiersprache Matlab.

- Die eigentliche Programmierung des Roboters erfolgte dann in der Programmiersprache C.

```{figure} ../../figs/01-course-overview/robot/robot_ganz_pic.png
---
width: 400px
name: fig-laufroboter-gesamt
---
Laufroboter (Projektstudium HM FK03, SoSe 2017): Gesamtansicht.
```

:::{only} html
```{figure} ../../figs/01-course-overview/robot/robot_ganz.gif
---
width: 300px
name: fig-laufroboter-animation
---
```
:::
