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

# Module und Pakete

Sobald Ihr Code nicht mehr sinnvoll in eine Datei passt, verteilen Sie ihn auf mehrere Dateien und importieren Bausteine wieder. Genau dafür gibt es in Python Module und Pakete.

- Ein Modul ist eine Python-Datei (zum Beispiel `squaresum.py`), die Funktionen oder Klassen enthält.
- Ein Paket ist ein Ordner mit Modulen. Pakete helfen, größere Projekte zu strukturieren.

Module schaffen außerdem Namensräume. Statt `func1()` schreiben Sie dann zum Beispiel `ourmodulename.func1()`. Das hilft, Namenskonflikte zu vermeiden.

```{admonition} Zitat (Dokumentation)
:class: note
Python has a way to put definitions in a file and use them in a script or in an interactive instance of the interpreter. Such a file is called a module. – [offizielle Dokumentation](https://docs.python.org/3/tutorial/modules.html#tut-modules)
```

Um zu verstehen, was ein Paket und ein Modul sind, müssen wir verstehen, wie Code in Dateien und Ordner strukturiert werden muss. Hierfür gibt es spezielle Regeln, die man kennen muss.

Im Live-Code können wir zwar auf Dateien zugreifen, diese sind allerdings etwas versteckt. Wir wechseln daher in einen Jupyter-Hub.

Hier haben wir Zugriff auf Dateien. Das Wichtigste zuerst: Wenn wir Python installieren, dann sagen wir unserem Betriebssystem: „Hier an dieser Stelle liegen Python-Pakete.“ Wenn jemand Python-Code schreibt, dann kann er diese Pakete nutzen, indem er sie importiert. Das kennen Sie bereits:

```{code-cell} python3
import math
math.sqrt(9)
```

Unser Ziel als Programmiererinnen und Programmierer ist es, neue Funktionalitäten hinzuzufügen. 
- Woher weiß das Betriebssystem nun, dass es die gibt? Gar nicht. Wir müssen es ihm sagen. 
- Wie das geht, hängt davon ab, ob ein Modul öffentlich zugänglich gemacht wurde (zum Beispiel über den Python Package Index) oder ob es lokal auf Ihrem Rechner liegt.

Wir wollen uns den Fall anschauen, wenn die Funktionalitäten lokal auf Ihrem Rechner liegen. 
- Konkret: Wir haben von einer Kollegin oder einem Kollegen über einen USB-Stick ein Verzeichnis erhalten, in dem verschiedene Dateien liegen, die Python-Code enthalten. 
- Das sollen wir nun für unser Projekt nutzen.

## Demo: Lokales Paket über `sys.path` einbinden

```{code-cell} python3
from pathlib import Path
import sys

# Notebook liegt in: deployed_notebooks/.../4-modules/
# Das Paket liegt in:  python-pkg/
# resolve() macht aus einem relativen Pfad einen absoluten, "aufgelösten" Pfad
# (z.B. werden ".."-Anteile normalisiert).
python_pkg = Path("../../python-pkg").resolve()
python_pkg_str = str(python_pkg)
print("python-pkg liegt bei:", python_pkg)

N = 8
print("\nsys.path (vorher, erste Einträge):")
print("\n".join(sys.path[:N]))
if len(sys.path) > N:
    print(f"... ({len(sys.path) - N} weitere)")

# Nur einmal eintragen (und ggf. Duplikate entfernen), sonst wächst sys.path beim erneuten Ausführen.
sys.path[:] = [p for p in sys.path if p != python_pkg_str]
sys.path.insert(0, python_pkg_str)

print("\nsys.path (nachher, erste Einträge):")
print("\n".join(sys.path[:N]))
if len(sys.path) > N:
    print(f"... ({len(sys.path) - N} weitere)")
```

## Demo: Imports, Namenskonflikte und `__all__`

```{code-cell} python3
# In Jupyter werden Imports gecached. Falls Sie `ii_import_demo` gerade geändert haben,
# Kernel neu starten oder das Paket neu laden:
import importlib
import ii_import_demo
importlib.reload(ii_import_demo)

# Zwei Module aus einem Paket importieren
from ii_import_demo.alpha import hello, square
from ii_import_demo.beta import cube, hello as hello_beta

hello("Ada"), square(3), hello_beta("Ada"), cube(3)
```

```{code-cell} python3
# "Nach außen" exportieren: das Paket re-exportiert ausgewählte Namen.
# (Auf Paketebene lösen wir den `hello`-Namensclash per Alias `hello_beta`.)
from ii_import_demo import hello, hello_beta, square, cube
hello("Ada"), hello_beta("Ada"), square(4), cube(4)
```

```{code-cell} python3
# `import *` importiert NUR die Namen aus `__all__`.
from ii_import_demo import *
print("\nNach `from ii_import_demo import *` sind z.B. verfügbar:")
print(
    "square:", "square" in globals(),
    "cube:", "cube" in globals(),
    "hello:", "hello" in globals(),
    "hello_beta:", "hello_beta" in globals(),
)
```

## Aufgabe

Manchmal sind Kolleginnen und Kollegen nicht so sorgfältig und das kann zu bösen Überraschungen führen.

Wir wollen sehen, was passiert, wenn in `ii_import_demo/__init__.py` der Alias `hello as hello_beta` nicht verwendet wird.

1. Entfernen Sie in `__init__.py` den Alias und exportieren Sie beide `hello`-Funktionen ohne Alias.
2. Laden Sie das Paket im Notebook neu (oder starten Sie den Kernel neu).
3. Beobachten Sie, welche `hello`-Variante auf Paketebene verfügbar ist.
4. Beheben Sie den Konflikt wieder durch einen Alias und prüfen Sie, dass `hello` und `hello_beta` beide funktionieren.

Zusatz: Sehen Sie den Konflikt direkt im Notebook-Namensraum.

```{code-cell} python3
# Namenskollision: Dieser Import überschreibt den Namen `hello` im Notebook.
from ii_import_demo.beta import hello
hello("Ada")
```

Und so vermeiden Sie den Konflikt sauber, indem Sie Aliase verwenden.

```{code-cell} python3
from ii_import_demo.alpha import hello as hello_alpha
from ii_import_demo.beta import hello as hello_beta_module

hello_alpha("Ada"), hello_beta_module("Ada")
```
