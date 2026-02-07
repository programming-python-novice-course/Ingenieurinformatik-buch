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

# Module und Pakete (S)

``Python`` ist unter anderem so erfolgreich, da es für immens viele Bereiche und Probleme eingesetzt wird und durch eine große Gemeinschaft gepflegt wird.
In dieser Gemeinschaft wird Programmiercode für eine Vielzahl an Problemen entwickelt, weiterentwickelt und **frei**, **kostenlos** wie auch **offen** angeboten!
Stoßen Sie auf ein Problem, welches Sie lösen möchten, ist die Wahrscheinlichkeit groß, dass andere Programmierer\*innen dafür bereits eine Lösung entwickelt haben.

Fremder, wie auch Ihr eigener Code wird irgendwann eine Anzahl an Zeilen erreichen, welche Sie nicht mehr in einem Notebook oder einer Datei halten möchten.
Sie möchten Ihren Code strukturiert auf mehrere Dateien verteilen und diesen Code wiederverwenden.
Was Sie benötigen sind sogenannte Module.

>Python has a way to put definitions in a file and use them in a script or in an interactive instance of the interpreter. Such a file is called a module. -- [offizielle Dokumentation](https://docs.python.org/3/tutorial/modules.html#tut-modules)

Module verhindern zudem sogenannte Namenskonflikte.
Angenommen Sie schreiben ein Modul, welches andere Programmierer\*innen benutzten wollen.
Sie definieren Funktionen in Ihrem Modul, doch woher wissen Sie, dass die anderen Programmierer\*innen nicht die gleichen Namen für ihre Funktionen verwenden.
Würden wir zum Beispiel eine Methode ``func1()`` definieren und diese den anderen zur Verfügung stellen und diese würden Sie vor folgendem Code Einbinden/Importieren:

```python
# import our func1() 
def func1():
    return 42
```

So würde unsere Funktion von deren ``func1()`` überschrieben werden, wie folgender Code zeigt:

```{code-cell} python3
# our imaginative func1()
def func1():
    return 0

print(func1())

def func1():
    return 42

print(func1())
```

Module lösen dieses Problem, sofern es keine zwei Module mit dem gleichen Namen gibt.
Der obige Code könnte dann wie folgt aussehen:

```python
def func1():
    return 42

func1()
ourmodulename.func1()
```

Dieses Kapitel ist in Unterkapitel aufgeteilt:

- [Ein eigenes Modul (A)](4-modules/1-ein-eigenes-modul.md)
- [Wie findet Python die Module? (S)](4-modules/2-modul-suche.md)
- [Pakete (S)](4-modules/3-pakete.md)