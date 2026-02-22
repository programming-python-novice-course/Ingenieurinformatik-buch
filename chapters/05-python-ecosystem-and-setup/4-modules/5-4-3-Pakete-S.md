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

# Pakete (S)

Ein Paket bildet eine hierarchisch strukturierte Ansammlung an Modulen.
Ein Modul befindet sich in einer Datei, wohingegen ein Paket sich in einem Ordner befindet.

Zum Beispiel, ist [roboworld](https://github.com/BZoennchen/robo-world) ein Paket mit den Teilmodulen (engl. submodules) 

- ``visualization``, 
- ``world``,
- ...

Um nur ein Teilmodul eines Pakets einzubinden, um es nutzbar zu machen, verwenden wir die ``.`` Dot-Notation:

```{code-cell} python3
import roboworld.world
```

oder 

```{code-cell} python3
from roboworld import world
```

Wie wir Pakete installieren und verwalten, haben wir im Setup-Teil behandelt: {ref}`Installation (Kurs-Setup) <sec-python-installation>`.
Soweit zu den Grundlagen in sehr wenigen Worten.
Weiterführende Informationen können Sie der exzellenten [Dokumentation](https://docs.python.org/3/tutorial/modules.html#tut-modules) entnehmen.
