# Python

Python ist eine Universalsprache (General Purpose Language) und damit [Turing-vollständig](info-universal-turing-machine).
Das bedeutet: Python kann grundsätzlich sehr viele unterschiedliche Problemklassen ausdrücken.

Python wurde bereits 1990 entwickelt und ist damit älter als z. B. Java.
In den letzten Jahren ist Python aber besonders stark gewachsen und heute sehr weit verbreitet.

Der Name „Python“ stammt von der Comedy-Gruppe Monty Python.


```{figure} ../../figs/01-course-overview/languages/programming-language-popularity.png
---
width: 700px
name: fig-language-popularity
---
Popularität der Programmiersprachen nach dem [PYPL Index](https://pypl.github.io/PYPL.html) (logarithmische Skala) -- ``Python`` gefolgt von ``Java``, ``JavaScript``, ``C#`` und ``C++``. 
```


## Warum ist Python so populär?

Ein wichtiger Grund ist, dass Python vergleichsweise leicht zu lesen und zu lernen ist.
Viele Aufgaben lassen sich mit wenig Code ausprobieren und schnell ausführen.

Hier ist ein Mini-Beispiel: Eine Datei `sum-squares.py` liest eine Zahl ein und gibt die Summe der Quadratzahlen aus.

```python
import sys
n = int(sys.argv[1])
squares = sum([(i+1)**2 for i in range(n)])
print(squares)
```

So wird das Programm gestartet.

```
python sum-squares.py 5
```

Als Ausgabe erhalten wir die Summe der Quadratzahlen von 1 bis 5.


Neben der einfachen Syntax spielt das Ökosystem eine große Rolle.
- Viele Bibliotheken lösen typische Aufgaben, ohne dass man alles selbst implementieren muss.
- Für Webentwicklung werden z. B. Django oder Flask genutzt.
- Für grafische Oberflächen werden z. B. PyQt, Tkinter oder Kivy genutzt.

Python ist außerdem im wissenschaftlichen Umfeld stark, weil viele Standardwerkzeuge verfügbar sind.
- NumPy, SciPy, Pandas und Matplotlib sind verbreitete Bausteine für Datenanalyse und Visualisierung.
- Jupyter-Notebooks (auf denen auch diese Website basiert) helfen dabei, Ergebnisse und Code nachvollziehbar zu dokumentieren und zu teilen.

Ein weiterer Faktor ist die breite Unterstützung aus Industrie und Hochschulen, die Werkzeuge, Tutorials und Weiterentwicklung antreibt.

Python ist außerdem in Administration und DevOps verbreitet, weil sich Automatisierungsskripte damit schnell schreiben und warten lassen.

```{admonition} Welche ist die beste Programmiersprache?
:class: remark
:name: remark-no-best-language
Es gibt nicht die eine beste Programmiersprache! Unterschiedliche Sprachen eignen sich für unterschiedliche Aufgaben, Anwendungsbereiche und folgen subjektiven Vorlieben. Softwareentwicklerinnen kennen meiste mehrere Programmiersprachen und wenden diese problem-abhängig an. 

Die wesentlichen Kriterien zur Beurteilung einer Programmiersprache sind:

1. Syntax: Wie der Code geschrieben wird und wie gut er sich lesen lässt.
2. Ökosystem: Welche Bibliotheken, Tools, Dokumentation und Community es gibt.
3. Anwendungsbereiche: Für welche Aufgaben und Domänen die Sprache gut geeignet ist.
4. Performance: Wie schnell Programme laufen und welche Ressourcen sie brauchen.
```






