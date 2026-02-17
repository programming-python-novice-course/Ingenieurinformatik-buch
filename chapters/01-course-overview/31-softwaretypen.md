# Softwaretypen

Es gibt verschiedene Softwaretypen, die Sie als zukünftige Ingenieure sowohl

- anwenden
- und/oder auch selbst entwickeln (d.h. programmieren).

## Beispiel: Software zur Erstellung von CAD-Geometrie (Python-Programmierung)

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

## Beispiel: Software für einen Laufroboter (Programmiersprachen: Matlab, C)

- Im Laufe Ihres Bachelorstudiums an der FK03 haben Sie ein Projektmodul. 

- Wir (Berghammer, Ertl, Mayr, Mehlert, Muhl) haben beispielsweise einen Laufrobor entwickelt (Sommersemester 2017).

- Das Bewegungsverhalten haben wir vorher simuliert - in der Programmiersprache Matlab.

- Die eigentliche Programmierung des Bewegungsverhaltens (Laufen, Hindernis ausweichen) erfolgte dann in der Programmiersprache C.

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

## Übersicht über Softwarearten

Die folgenden Softwaretypen werden unter anderem von Ingenieurinnen (mit-)entwickelt:

- Eingebettete Systeme (embedded software) – z.B. Flugregelung, Laufrobor
- Datenerfassungssysteme – Beispiel: Air Data System
- Systeme von Systemen – z.B. Air Traffic Management System: Flugzeug, Tower, Luftraum und Infrastruktur
- Eigenständige Anwendungen (stand-alone) wie Systeme für Modellierung und Simulation – z.B. Geometrieerzeugung (FreeCAD, CATIA), Bauteiloptimierung (optiSLang)

```{figure} ../../figs/01-course-overview/overview/motivation.png
---
height: 320px
name: motivation
---
```

Daneben gibt es weitere Softwaretypen, bei denen Ingenieure weniger häufig entwickeln (sondern nur anwenden):

- Interaktive transaktionale Anwendungen (z.B. Amazon)
- Stapelverarbeitende Software (batch processing) – Lohnauszahlungssysteme
- Unterhaltungssysteme – Beispiel: Computerspiele

Wie ein Softwareprodukt entwickelt wird, hängt stark vom Softwaretyp ab. 

```{admonition} Hinweis
:name: remark-sample
:class: remark
Die Einteilung der Softwaretypen ist nicht trennscharf!
```
