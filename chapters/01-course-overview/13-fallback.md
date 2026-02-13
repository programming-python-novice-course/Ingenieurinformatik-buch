# Live-Code-Alternative (mit Debugging)


Es gibt verschiedene Möglichkeiten, Python-Code auszuführen. Eine davon haben Sie bereits genutzt – hier auf der Webseite, in Form von ausführbaren Code-Zellen. Daneben gibt es weitere Varianten; einige davon werden Sie im Laufe der Vorlesung kennenlernen und anwenden.

```{admonition} Wichtig
:class: attention

Falls die Einrichtung von „Live Code“ einmal fehlschlägt, können Sie die Beispiele auf dieser Website alternativ als *Jupyter-Notebook* ausführen.

Die Oberfläche sieht dort etwas anders als auf der Website. Die Inhalte sind aber identisch.


```{figure} ../../figs/01-course-overview/jupyterhub/debug-1.png
---
width: 800px
---
Die Inhalte von Website und Jupyter-Notebook sind identisch. 
```

Wie im Live-Code arbeiten mit Code-Zellen, die Sie ausführen können:

```{figure} ../../figs/01-course-overview/jupyterhub/debug-1-ausfuehren.png
---
width: 800px
---

Im Gegensatz zum Live Code hat nicht jede Zelle einen eigenen "Run"-Button. Sie wählen die Zelle aus und klicken dann auf den "Run-Button" oben im Menu.
```

## Wie startet man das Notebook?

Sie starten die Live-Code-Alternarive über die Rakete entweder 

- über die Hochschule München ("JupyterHub") ODER
- über die Plattform Binder ("Binder").

```{figure} ../../figs/01-course-overview/jupyterhub/livecodealternative.png
---
width: 800px
---

Sie haben die Wahl zwischen zwei Anbietern.
```

```{admonition} Hinweis
:class: remark
Voraussetzung: Für den Zugriff auf den JupyterHub müssen Sie vorab eine Multi-Faktor-Authentifizierung (MFA) für Ihren HM-Account eingerichtet haben. Eine Anleitung finden Sie unter [MFA eduMFA](https://collab.dvb.bayern/spaces/HMITFAQ/pages/1303873567/MFA+eduMFA).
```


## Debugging

Immer dann wenn Code "etwas komplizierter wird", möchte man nicht, dass die ganze Code Zelle auf einmal ausgeführt wird, sondern dass man die Ausführung des Codes an bestimmten Stellen pausieren kann, um sich anzusehen was bisher passiert ist und was der aktuelle Stand ist. 

Man nennt das Debugging.


```{figure} ../../figs/01-course-overview/jupyterhub/debug-3-debug.png
---
width: 800px
---

Wenn Sie das Debugging (Käfer-Symbol) aktivieren, können Sie die Ausführung des Programms pausieren, um sich z.B. anzuschauen welchen aktuellen Wert "myname" hat.
```

```{admonition} Hinweis
:class: remark

- Wir verwenden Live Code in der Vorlesung, um Konzepte deutlich zu machen und "um mal schnell etwas auszutesten". Wichtig: Live Code ermöglicht kein Debugging und ist auch nicht dafür gedacht!

- Immer dann, wenn es "komplizierter wird", wechseln wir in ein Jupyter-Notebook, wo wir den Code mithilfe von Debugging besser inspizieren können.
```


Mehr Hintergrund zu Jupyter Notebooks finden Sie im Abschnitt [Jupyter Notebooks](../misc/Expertenwissen/jupyter-notebooks.html).

