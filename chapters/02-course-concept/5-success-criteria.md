# Python

Wie ``Java``, ``C++``, ``C#``, ``Scala`` und viele mehr, zählt ``Python`` zu den Universalsprachen (General Purpose Languages) und ist damit [Turing-vollständig](info-universal-turing-machine). 
Das heißt ``Python`` ist in sehr vielen Bereichen anwendbar und ist im Stande all die Probleme zu lösen, die im Allgemeinen als lösbar angesehen werden.
Der Name ``Python`` stammt von der Comedy-Gruppe Monty Python, was möglicherweise darauf hindeuten soll, dass die Sprache Spaß verbreiten soll.

``Python`` wurde bereits 1990 entwickelt und ist damit älter als z.B. ``Java``.
Sie ist jedoch erst in den letzten Jahren so richtig in Fahrt gekommen.
Der Zugang war vor nicht allzu langer Zeit keineswegs derart einfach, was den anfänglichen Erfolg behindert hat. ``Python`` ist heute eine der weitverbreitetsten Sprachen und sie scheint sich weiter und weiter auszubreiten.


```{figure} ../../figs/02-course-concept/languages/programming-language-popularity.png
---
width: 700px
name: fig-language-popularity
---
Popularität der Programmiersprachen nach dem [PYPL Index](https://pypl.github.io/PYPL.html) (logarithmische Skala) -- ``Python`` gefolgt von ``Java``, ``JavaScript``, ``C#`` und ``C++``. 
```


Einer der Hauptgründe für die Popularität von ``Python`` ist dass die Programmiersprache einfach zu lesen und zu erlernen. In Python lässt sich sehr schnell ein Programm schreiben und ausführen. Erstellen wir eine neue Datei ``sum-squares.py`` und fügen folgenden ``Python``-Code ein.

```python
import sys
n = int(sys.argv[1])
squares = sum([(i+1)**2 for i in range(n)])
print(squares)
```

Führen wir dann das Programm durch den Konsolenbefehl

```
python sum-squares.py 5
```

aus, erhalten wir als Ausgabe die Summe der Quadratzahlen von 1 bis 5.
So schnell geht's!


Da ``Python`` einen so schnellen und einfachen Zugang bietet, begannen mehr und mehr Anfänger die Sprache zu nutzen.
Das brachte eine große Menge neue potenzieller Entwickler\*innen auf den Arbeitsmarkt.
Um dieses Potenzial nutzen zu können wurden die Bibliotheken um weitere Pakete für die Webentwicklung (``Django``, ``Flask``), graphische Benutzeroberflächen (``PyQt5``, ``Tkinter``, ``Kivy``) und mehr ergänzt.

Der Erfolg von Python lässt sich auch auf die Unterstützung durch große IT-Unternehmen wie Google und Facebook aber auch der Universitäten zurückführen.
Diese Unterstützung trieb die Entwicklung vieler Pakete, insbesondere im wissenschaftlichen Umfeld an.
Paketen wie ``Numpy``, ``SciPy``, ``Pandas`` und ``Matplotlib`` ist es zu verdanken, dass ``Python`` im wissenschaftlichen Bereich derart verbreitet ist.
Im Unterschied zu ``MATLAB`` und ``Mathematica``, gegen die sich ``Python`` im wissenschaftlichen Umfeld behaupten musste, ist ``Python`` frei zugänglich, was schlussendlich zu einer höheren Codequalität wie auch einer schnelleren Weiterentwicklung geführt hat.
Mit den ``Jupyter``-Notebooks haben ProgrammiererInnen in der wissenschaft eine Möglichkeit erhalten, ihre Ergebnisse samt Code anderen in aufbereiteter Weise zur Verfügung zu stellen.
Das beschleunigt den wissenschaftlichen Austausch und verbessert die Transparenz.
Auch dieses Konzept gab es bereits durch ``Mathematica``, doch ist diese Sprache viel schwerer zu lesen und deren Lizenzen sind teuer.

Gute Skripte zu schreiben ist zudem nicht nur für Wissenschaftler\*innen sondern auch für Systemadministrator\*innen und DevOps wichtig.
Deshalb trat auch in diesem Bereich ``Python`` einen Siegeszug an.

```{admonition} Hinweis
:class: remark
:name: remark-no-best-language
Es gibt nicht die eine beste Programmiersprache! Unterschiedliche Sprachen eignen sich für unterschiedliche Aufgaben, Anwendungsbereiche und folgen subjektiven Vorlieben.

Die wesentlichen Kriterien zur Beurteilung einer Programmiersprache sind:

1. **Syntax** - Die Grammatik der Sprache
2. **Ökosystem** - Vorhandene Bibliotheken, Tutorials, Dokumentationen, Lehrvideos, eine starke offene und diverse Gemeinschaft
3. **Anwendungsbereiche** - Für welche Aufgaben die Sprache geeignet ist
4. **Performance** - Laufzeit des Programmcodes
```


```{admonition} Hinweis
:class: remark
:name: remark-learn-multiple-languages
Wir empfehlen, im Laufe Ihres Studiums zusätzlich zu Python mindestens eine statisch getypte, kompilierte Sprache zu erlernen, da Sie in Ihrem Berufsalltag vermutlich auf interpretierte Sprachen (Python, Octave) als auch auf kompilierte Sprachen (C++, Java, etc.) treffen werden.
```





