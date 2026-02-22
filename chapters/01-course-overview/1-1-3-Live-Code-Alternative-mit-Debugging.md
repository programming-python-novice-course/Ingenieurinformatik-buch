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

# Live-Code-Alternative (mit Debugging)

Falls 
- die Einrichtung von „Live Code“ einmal fehlschlägt oder 
- Sie debuggen möchten (mehr dazu weiter unten), 

können Sie die Beispiele auf dieser Website alternativ auch als *Jupyter-Notebook* ausführen.

```{code-cell} python3
:tags: [skip-execution]

print("Hello World!") # Hinweis: Das Ausgeben von Hello World ist ein bekanntes Code-Beispiel
```

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

- Sie starten das *Jupyter-Notebook* über den Jupyter-Notebook-Button. 
- Sie werden automatisch an den DataHub der Hochschule München weitergeleitet, wo Sie das zur aktuellen Website passende Notebook finden.


```{figure} ../../figs/01-course-overview/jupyterhub/notebook-button.png
---
width: 800px
---
Starten eines Jupyter-Notebooks
```

Für externe Interessierte besteht die Möglichkeit die Jupyter-Notebooks auf dem BinderHub von mybinder.org auszuführen. Hierfür kann in den Einstellungen "Binder" ausgewählt werden.

```{figure} ../../figs/01-course-overview/jupyterhub/binderhub-for-external.png
---
width: 800px
---
Externe Interessierte können mybinder.org zum Ausführen der Notebooks nutzen. 
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

