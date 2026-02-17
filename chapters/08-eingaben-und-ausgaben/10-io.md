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

# I/O Überblick

Sie kennen schon `input()` und `print()`.
Damit haben Sie Schnittstellen also bereits genutzt, ohne dass es Ihnen unbedingt bewusst war.

Dabei haben Sie vermutlich auch schon festgestellt:

- Eingaben kommen oft als **Text** (String) ins Programm.
- Für Berechnungen brauchen Sie aber **Zahlen**.
- Deshalb müssen Sie Datentypen häufig **konvertieren** (z. B. Text → `int` oder `float`).

Ein Mini-Beispiel (nicht ausführen, wenn Sie gerade keinen Input geben wollen):

```{code-cell} python3
:tags: [skip-execution]
text = input("Bitte eine Zahl eingeben: ")
zahl = int(text)
print("Quadrat:", zahl ** 2)
```

Für Sie als Anwender:in ist es völlig normal, dass Sie und eine Software Informationen austauschen können.

Technisch ist das aber hochkomplex.
Denn dieser Austausch erfordert eine Verbindung Ihres Programms zur Außenwelt.

```{figure} ../../figs/08-eingaben-und-ausgaben/interfaces-simple.png
---
width: 500px
name: fig-interfaces-simple
---
Programm und Außenwelt: Einfaches Modell einer Schnittstelle.
```



Eine Verbindung zur Außenwelt nennt man **Schnittstelle**.

Damit Ihre Programme zuverlässig und schnell Informationen mit der Außenwelt austauschen können, ist es wichtig, dass Sie:

- verstehen, **was** eine Schnittstelle ist,
- welche **Arten** es gibt,
- und wie Sie im Zweifel eine passende Schnittstelle **auswählen**.



