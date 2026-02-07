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

Sobald Ihr Code nicht mehr sinnvoll in eine Datei passt, verteilen Sie ihn auf mehrere Dateien und importieren Bausteine wieder. Genau dafür gibt es in Python **Module** und **Pakete**.

- Ein **Modul** ist eine Python-Datei (z.B. `squaresum.py`), die Funktionen/Klassen enthält.
- Ein **Paket** ist ein Ordner mit Modulen, damit Sie größere Projekte strukturieren können.

Module schaffen außerdem **Namensräume**: statt `func1()` schreiben Sie dann z.B. `ourmodulename.func1()`. Das hilft, Namenskonflikte zu vermeiden.

>Python has a way to put definitions in a file and use them in a script or in an interactive instance of the interpreter. Such a file is called a module. -- [offizielle Dokumentation](https://docs.python.org/3/tutorial/modules.html#tut-modules)

## Unterkapitel

- [Ein eigenes Modul](4-modules/1-ein-eigenes-modul.md)
- [Wie findet Python die Module?](4-modules/2-modul-suche.md)
- [Pakete](4-modules/3-pakete.md)