
# Module und Pakete

Sobald Ihr Code nicht mehr sinnvoll in eine Datei passt, verteilen Sie ihn auf mehrere Dateien und importieren Bausteine wieder. Genau dafür gibt es in Python Module und Pakete.

- Ein Modul ist eine Python-Datei (zum Beispiel `squaresum.py`), die Funktionen oder Klassen enthält.
- Ein Paket ist ein Ordner mit Modulen. Pakete helfen, größere Projekte zu strukturieren.

Module schaffen außerdem Namensräume. Statt `func1()` schreiben Sie dann zum Beispiel `ourmodulename.func1()`. Das hilft, Namenskonflikte zu vermeiden.

```{admonition} Zitat (Dokumentation)
:class: note
Python has a way to put definitions in a file and use them in a script or in an interactive instance of the interpreter. Such a file is called a module. – [offizielle Dokumentation](https://docs.python.org/3/tutorial/modules.html#tut-modules)
```
Im folgenden sehen wir uns an wie wir Funktionalitäten einbinden können.