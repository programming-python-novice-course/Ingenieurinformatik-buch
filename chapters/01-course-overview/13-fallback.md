# Live-Code-Alternative (mit Debugging)

Falls 

- die Einrichtung von „Live Code“ einmal fehlschlägt oder 
- Sie debuggen möchten (mehr dazu weiter unten), 

können Sie die Beispiele auf dieser Website alternativ auch als *Jupyter-Notebook* ausführen.

„Das Aussehen“ eines *Jupyter-Notebooks* unterscheidet sich etwas von dem auf der Website. Die Inhalte sind aber identisch!


```{figure} ../../figs/01-course-overview/jupyterhub/debug-1.png
---
width: 800px
---
Beispiel für ein Jupyter-Notebook
```

Wie beim Live Code arbeiten Sie mit Code-Zellen, die Sie ausführen können:

```{figure} ../../figs/01-course-overview/jupyterhub/debug-1-ausfuehren.png
---
width: 800px
---

Im Gegensatz zum Live Code hat nicht jede Zelle einen eigenen „Run“-Button. Sie wählen die Zelle aus und klicken dann auf den „Run“-Button oben im Menü.
```

## Wie startet man das Notebook?

Sie starten das *Jupyter-Notebook* über die Rakete. Entweder über

- die Hochschule München ("JupyterHub") ODER
- die Plattform Binder ("Binder").

```{figure} ../../figs/01-course-overview/jupyterhub/livecodealternative.png
---
width: 800px
---

Bitte nutzen Sie als Studierende der HM direkt den JupyterHub. Die Binder-Variante ist für externe Interessierte gedacht.
```

```{admonition} Hinweis
:class: remark
Voraussetzung: Für den Zugriff auf den JupyterHub müssen Sie vorab eine Multi-Faktor-Authentifizierung (MFA) für Ihren HM-Account eingerichtet haben. Eine Anleitung finden Sie unter [MFA eduMFA](https://collab.dvb.bayern/spaces/HMITFAQ/pages/1303873567/MFA+eduMFA).
```


## Debugging

- Immer dann, wenn Code „etwas komplizierter wird“, möchte man nicht, dass die ganze Code-Zelle auf einmal ausgeführt wird, sondern dass man die Ausführung des Codes an bestimmten Stellen pausieren kann, um sich anzusehen, was bisher passiert ist und was der aktuelle Stand ist. 

- Man nennt das Debugging.


```{figure} ../../figs/01-course-overview/jupyterhub/debug-3-debug.png
---
width: 800px
---

Wenn Sie das Debugging (Käfer-Symbol) aktivieren, können Sie die Ausführung des Programms pausieren, um sich z. B. anzuschauen, welchen aktuellen Wert „myname“ hat.
```

```{admonition} Hinweis
:class: remark

- Wir verwenden Live Code in der Vorlesung, um Konzepte deutlich zu machen und „um mal schnell etwas auszutesten“. Wichtig: Live Code ermöglicht kein Debugging und ist auch nicht dafür gedacht!

- Immer dann, wenn es „komplizierter wird“, wechseln wir in ein Jupyter-Notebook, wo wir den Code mithilfe von Debugging besser inspizieren können.
```


Mehr Hintergrund zu Jupyter Notebooks finden Sie im Abschnitt {ref}`Jupyter Notebooks <sec-jupyter-notebooks>`.

