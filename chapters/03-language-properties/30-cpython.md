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


# Varianten und Versionen (S)

```{admonition} Behauptung
:class: remark
„Es gibt verschiedene Python-Implementierungen und verschiedene Python-Versionen.“
```

**Verschiedene Python-Implementierungen**

Im vorherigen Abschnitt haben wir vereinfacht gesagt: Am Ende wird immer Maschinencode ausgeführt. Bei Python liegt ein großer Teil dieses Maschinencodes im Python-Interpreter (also dem Programm, das Ihren Python-Code ausführt). Auf Windows heißt dieses Programm oft `python.exe`, auf macOS/Linux typischerweise `python3`.

Wichtig ist: Es gibt nicht „den einen“ Python-Interpreter, sondern mehrere Implementierungen, die denselben Python-Sprachstandard umsetzen.

Je nachdem, in welcher Sprache und für welche Plattform der Interpreter implementiert wurde, unterscheidet man z. B.:

+ [CPython](https://github.com/python/cpython) ([Referenzimplementierung](def-reference-implementation) von ``Python``)
+ [IronPython](https://ironpython.net/) (``Python`` auf der .NET-Plattform)
+ [Jython](https://www.jython.org/) (``Python`` auf der Java Virtual Machine (JVM))
+ [PyPy](https://www.pypy.org/) (Eine performantere ``Python``-Implementierung mit einem Just-In-Time-[Übersetzer](def-compiler) (JIT), wird allerdings von nur wenigen Modulen unterstützt)
+ [Stackless Python](https://github.com/stackless-dev/stackless/wiki/) (Abgeändertes CPython, das u. a. den Call-Stack anders organisiert und Microthreads unterstützt, jedoch weiterhin durch den [Global Interpreter Lock](https://docs.python.org/3/glossary.html#term-global-interpreter-lock) begrenzt wird)
+ [MicroPython](https://micropython.org/) (``Python``, das auf Microcontrollern läuft)
+ ...


Wenn wir im Allgemeinen von der ``Python``-Implementierung sprechen, meinen wir die bekannteste von allen Implementierungen: [CPython](https://github.com/python/cpython).
Wir werden ausschließlich diese Implementierung in diesem Kurs verwenden.

**CPython**

CPython ist eine sog. *Referenzimplementierung* von ``Python`` und wurde vom Erfinder der Sprache selbst (Guido van Rossum) initiiert. 

```{admonition} Referenzimplementierung
:name: def-reference-implementation
:class: definition

Als *Referenzimplementierung* bezeichnen wir eine *Implementierung*, die einen Standard oder De-facto-Standard darstellt und damit für alle anderen *Implementierungen* vorgibt, wie sich diese zu verhalten haben und welche Standards diese erfüllen sollten.

```

Wie der Name andeutet, ist CPython in ``C`` (und ``Python`` selbst) geschrieben.
Das mag verwirrend klingen.

```{admonition} Frage
:class: question
Wenn eine Sprache wie ``Python`` eine Implementierung wie *CPython* benötigt, die wiederum in einer anderen Sprache wie ``C`` geschrieben ist: Wie kann es dann jemals ausführbaren Code geben?
```


```{figure} ../../figs/03-language-properties/funny-image-cpython.png
---
width: 300px
name: fig-funny-cpython
---
Wer kompiliert den C-Code von CPython?
```

Kurz gesagt: CPython ist Quellcode (vor allem in C), der mit einem C-Compiler in Maschinencode übersetzt wird. Dieser C-Compiler ist Teil Ihrer System-Toolchain (und wurde wiederum irgendwann mit einem anderen Compiler gebaut – das nennt man Bootstrapping).

Die [(C)Python Standard Library](https://docs.python.org/3/library/) besteht aus built-in Modulen, die in ``C`` geschrieben sind, und Modulen, die wiederum in ``Python`` selbst geschrieben sind.
Der ``C``-Code liegt nach dem Übersetzen als Maschinencode vor; der Python-Anteil bleibt Quelltext und wird vom Interpreter ausgeführt.

**Verschiedene Python-Versionen**

Zusätzlich dazu gibt es verschiedene Python-Versionen, die sich in Syntax und Funktionalität unterscheiden können. In der Praxis ist heute fast immer Python 3 relevant; Python 2 ist seit Jahren End-of-Life und sollte nicht mehr verwendet werden.

Auch innerhalb von Python 3 kann es Unterschiede geben (z. B. neue Sprachfeatures oder Änderungen in der Standardbibliothek). In der Regel sind das aber kleinere, evolutionäre Änderungen zwischen den 3.x-Versionen.

Ein kleines Beispiel für eine (historische) Syntax‑Änderung:

```python
# Python 2 (historisch):
print "Hallo"

# Python 3:
print("Hallo")
```

Wenn Sie mit anderen zusammenarbeiten, lohnt es sich daher, kurz zu klären, welche Python‑Version (und ggf. welche Distribution/Umgebung) verwendet wird.

In diesem interaktiven Notebook können Sie die Version direkt abfragen:

```{code-cell} python3
:tags: [skip-execution]
import sys

print("Python-Version:", sys.version)
print("Interpreter:", sys.executable)
```


```{admonition} Klarstellung
:class: note

- Die Aussage, dass es mehrere Python-Implementierungen und -Versionen gibt, ist korrekt.
- Die Referenzimplementierung von Python (CPython) ist in der Programmiersprache C geschrieben.

```


```{admonition} Tipp
:class: tip

- Wenn Sie über verschiedene Betriebssysteme und Plattformen hinweg mit anderen arbeiten, fragen Sie im Zweifel nach, welches Python (Implementierung + Version) verwendet wird. Es kann kleine Unterschiede geben (z. B. unterstützte Pakete, Performance, Details der Laufzeit).
```
