# Lernen einer Programmiersprache

```{admonition} Lernen
:class: note

Was bedeutet es, eine Programmiersprache zu lernen?
```

Es bedeutet, dass Sie Syntax, Semantik und zentrale Konzepte unterscheiden und anwenden können und das Sprach-Ökosystem gezielt einsetzen.

- Syntax beschreibt die Regeln, wie Code geschrieben werden muss („Grammatik der Programmiersprache“).
- Semantik beschreibt die Bedeutung von Sprachkonstrukten („Was heißt `if`, `while`, Funktionsaufruf, Zuweisung …?“) und damit, was ein konkretes Programm bei einer Eingabe tut.
- Pragmatik: beschreibt Konzepte, wiederkehrende Ideen und Bausteine, mit denen man Probleme strukturiert löst. Es umfasst, dass man das Ökosystem seiner Sprache kennt (wofür gibt es bereits Lösungen, die ich anwenden aber nicht selbst programmieren muss?)

**Syntax**

Beispiel zur Syntax: „Hello World“ sieht in C und Python unterschiedlich aus, obwohl die Idee gleich ist.

Hello World in C:
```c
#include <stdio.h>

int main(void) {
    printf("Hello World\n");
    return 0;
}
```

Hello World in Python:
```python
if __name__ == "__main__":
    print("Hello World")
```

Damit wird sichtbar: Dieselbe Idee kann in unterschiedlichen Sprachen sehr unterschiedlich aussehen.

**Semantik**

Beispiel zur Programsemantik: Zwei Programme können ähnlich aussehen, aber sich bei bestimmten Eingaben unterschiedlich verhalten.

Programm 1 (mit if-Statement):
```python
if __name__ == "__main__":
    x = 5
    if x == 5:
        print("Hello World")
```

Programm 2 (ohne if-Statement):
```python
if __name__ == "__main__":
    x = 5
    print("Hello World")
```

Beide Programme verhalten sich bei `x = 5` identisch und geben "Hello World" aus. Bei `x = 3` würde Programm 1 nichts ausgeben, Programm 2 würde weiterhin "Hello World" ausgeben. Die Programme haben also unterschiedliche Semantik, auch wenn sie bei bestimmten Werten gleich wirken.

Man kann sich das so merken: Bestimmte Code-Bausteine entscheiden über das Verhalten. Semantik ist das, was der Code tatsächlich tut, nicht nur, wie er aussieht.


```{admonition} Hinweis
:name: syntax-semantik
:class: remark
Syntax-Fehler werden von der IDE oder dem Interpreter sofort erkannt. Semantik-Fehler sind schwieriger zu finden: Der Code ist syntaktisch korrekt, tut aber nicht das, was beabsichtigt war. Die Unterscheidung zwischen Syntax (wie schreibe ich es?) und Semantik (was tut es?) ist fundamental für das Verständnis von Programmiersprachen.
```
**Pragmatik - Konzepte**

Konzepte sind wiederkehrende Ideen und Mechanismen, mit denen man Programme strukturiert entwickelt.
Sie sind oft sprachenübergreifend, aber jede Sprache setzt sie etwas anders um.

Beispiel: Speicherverwaltung
- Ein Programm erzeugt zur Laufzeit Daten (Objekte) und braucht dafür Speicher.
- Irgendwann werden diese Daten nicht mehr gebraucht, und der Speicher sollte wieder frei werden.

In der Programmiersprache C (vereinfacht) kann Speicher explizit reserviert und freigegeben werden:

```c
int* xs = malloc(3 * sizeof(int)); // malloc = memory allocation 
xs[0] = 1;
xs[1] = 2;
xs[2] = 3;
// ... xs benutzen ...
free(xs);
```

In der Programmiersprache Python wird Speicher in der Regel automatisch verwaltet:

```python
xs = [1, 2, 3]
# ... xs benutzen ...
# Kein free/delete nötig; Speicher wird freigegeben, wenn keine Referenzen mehr existieren.
```

Warum gibt es hierfür unterschiedliche Konzepte?
- Manuelle Speicherverwaltung gibt viel Kontrolle, ist aber komplex und fehleranfällig!
- Automatische Speicherverwaltung ist oft leichter zu nutzen und sicherer, bietet aber weniger Kontrolle über den genauen Zeitpunkt der Freigabe.

> Die Wahl einer Programmiersprache hängt von Ihren Anforderungen (z. B. maximale Kontrolle vs. schneller Einstieg) ab!

Die Eigenschaften der Programmiersprache Python, einschließlich zentraler Konzepte, werden im Kapitel [Spracheigenschaften](chapters/03-language-properties/00-intro) behandelt.


**Pragmatik - Ökosystem**

Zum Lernen einer Programmiersprache gehört auch, ihr Ökosystem zu kennen.
Das heißt: Sie wissen, welche Bausteine es bereits gibt, wie man sie findet, wie man sie einbindet, und wann es sinnvoll ist, etwas selbst zu entwickeln.

- Viele Probleme sind Standardprobleme (Dateiformate, Web, Datenanalyse, Visualisierung, Tests, Logging). Dafür gibt es etablierte Bibliotheken und Werkzeuge.
- Wer alles „von Grund auf“ selbst baut, verliert Zeit und riskiert Fehler, die andere bereits gelöst haben.
- Gleichzeitig muss man Bibliotheken bewusst auswählen: Qualität, Wartung, Sicherheit, Lizenz und Abhängigkeiten spielen eine Rolle.

Bei Python spielt das Kennen und das Anwenden des Ökosystems eine stärkere Rolle als in anderen Programmiersprachen, weil das Ökosystem extrem breit ist.

Für das Engineering besonders wichtig:

- Signalverarbeitung: [SciPy](https://docs.scipy.org/doc/scipy/) (z. B. Filter, FFT, Spektren, numerische Methoden)
- Simulationen und Auswertung: [NumPy](https://numpy.org/doc/) und [pandas](https://pandas.pydata.org/docs/) (z. B. Matrizen/Rechnen, Messdaten-Tabellen, CSV/Excel)
- Optimierung: [scikit-optimize](https://scikit-optimize.github.io/) (z. B. Black-Box-Optimierung und Parameter-/Hyperparameter-Tuning)
- Steuerungs- und Regelungstechnik: [python-control](https://python-control.readthedocs.io/en/0.10.2/) (z. B. Zustandsraum, Übertragungsfunktionen, Flugregelungskonzepte)
- Maschinelles Lernen: [scikit-learn](https://scikit-learn.org/stable/) oder [PyTorch](https://pytorch.org/) (z. B. Klassifikation, Regression, neuronale Netze)
- Webentwicklung: [FastAPI](https://fastapi.tiangolo.com/) oder [Django](https://docs.djangoproject.com/) (z. B. Web-APIs, Webanwendungen)




```{figure} ../../figs/01-course-overview/languages/ecosystem.png
---
width: 400px
name: fig-python-ecosystem
---
Schematische Darstellung des wissenschaftlichen Python-Ökosystems (Jake VanderPlas, PyCon 2017). Quelle: https://www.researchgate.net/figure/Schematic-view-of-the-Python-scientific-software-ecosystem-Figure-taken-from-Jake_fig1_332799309 (Zugriff: 03.02.2026).
```

```{admonition} Tipp
:class: tip
:name: tip-learning-order
Lernreihenfolge: Lernen Sie zunächst die Konzepte einer Programmiersprache kennen, bevor Sie Syntax und Semantik anwenden. 

In dieser Vorlesung finden Sie:
- Konzepte in den Teilen "Basiswissen" und "Python verstehen"
- Programmiertechniken (Anwendung von Syntax und Semantik zur Umsetzung von Logik) im Teil "Python anwenden"
- Informationen zum Ökosystem finden Sie unter anderem in "Python anwenden"; eine beispielhafte Anwendung findes Sie im "Fallbeispiel".
```