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

# Wie findet Python die Module? (S)

Befindet sich das Modul nicht in unserem aktuellen Verzeichnis funktioniert der obige Code nicht, da der ``Python``-[Interpreter](def-interpreter) das Modul ``squaresum`` nicht findet.
Schreiben wir 

```python
import squaresum
```

sucht der Interpreter nach dem Modul ``squaresum`` an verschiedenen Orten.

1. Ist das Modul ein *built-in* Modul welches zur [Python Standard Bibliothek](https://docs.python.org/3/library/) gehört?
2. Befindet sich die Datei mit dem Namen ``squaresum.py`` in einem der Verzeichnisse die in der Variable ``sys.path`` angegeben ist?
3. Befindet sich das Modul in der aktuell aktiven [virtuellen Umgebung](https://docs.python.org/3/tutorial/venv.html)?

``sys.path`` enthält auch immer das Verzeichnis indem das Skript welches den ``import squaresum`` Ausdruck enthält.
Die Liste enthält auch alle Verzeichnisse die sich in **PYTHONPATH** (ähnlich wie **PATH**) befinden.
Und zu guter Letzt beinhaltet es alle Verzeichnisse die von der ``Python``-Installation selbst oft abhängen, z.B. die von Anaconda oder Miniconda.

Aber keine Sorge, Sie müssen sich um das alles nicht kümmern, dafür gibt es die Modulverwaltungswerkzeuge ``conda`` bzw. ``pip``.
Installieren Sie Module oder Pakete über diese Werkzeuge auf korrekte Art und Weise, so findet der Interpreter diese.

Möchten Sie Ihr eigenes Modul für andere zur Verfügung stellen können Sie es auf einer Webseite in das Ökosystem einfügen.
Wie das geht würde an dieser Stelle zu weit führen.

Die sog. *virtuellen Umgebungen* sind ein ganz eigenes Kapitel, welches wir in diesem Kurs nicht besprechen werden.
Es sei gesagt, dass sie es ermöglichen mit unterschiedlichen ``Python`` Versionen und unterschiedlicher Modulen/Pakten Versionen auf ein und demselben System zu arbeiten.
Wenn Sie, zum Beispiel, Webseiten entwickeln gleichzeitig aber noch ein ganz anderes Projekt, was sich dem maschinellen Lernen zuwendet, entwickeln, so kann es Sinn machen für jedes der beiden Projekte eine dedizierte virtuelle Umgebung zu erstellen.
