
# Module und Pakete

Sobald Ihr Code nicht mehr sinnvoll in eine Datei passt, verteilen Sie ihn auf mehrere Dateien und importieren Bausteine wieder. Genau dafür gibt es in Python **Module** und **Pakete**.

- Ein **Modul** ist eine Python-Datei (z.B. `squaresum.py`), die Funktionen/Klassen enthält.
- Ein **Paket** ist ein Ordner mit Modulen, damit Sie größere Projekte strukturieren können.

Module schaffen außerdem **Namensräume**: statt `func1()` schreiben Sie dann z.B. `ourmodulename.func1()`. Das hilft, Namenskonflikte zu vermeiden.

```{admonition} Zitat (Dokumentation)
:class: note
Python has a way to put definitions in a file and use them in a script or in an interactive instance of the interpreter. Such a file is called a module. -- [offizielle Dokumentation](https://docs.python.org/3/tutorial/modules.html#tut-modules)
```


