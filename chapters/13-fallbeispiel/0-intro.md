# Wie werden Programme entwickelt?


```{admonition} Lernziele
::class: learngoals

- Nach diesem Kapitel verstehen Sie den typischen Ablauf, wie aus einer Aufgabenstellung schrittweise ein lauffähiges Programm entsteht (inkl. *Build vs. Buy*).
- Nach diesem Kapitel sind Sie in der Lage, eine größere Lösung in Teilprobleme zu zerlegen (Parsing, Visualisierung, Statistik) und die Umsetzungsschritte begründet zu strukturieren.
- Nach diesem Kapitel sind Sie in der Lage, den Unterschied zwischen „Library nutzen“ und „selbst implementieren“ anhand von Abstraktionsgrad, Testaufwand, Wartbarkeit und Performance zu erläutern.
- Nach diesem Kapitel sind Sie in der Lage Programmcode mit einfachen Tests abzusichern.
- Nach diesem Kapitel können Sie einordnen, warum Sortieren (und damit Sortieralgorithmen) im Kontext der Statistik-Auswertung auftaucht, und mindestens einen einfachen Sortieralgorithmus selbst zu implementieren.
```

In diesem letzten Teil laufen wir einen kompletten, realistischen Ablauf durch: von der Aufgabenstellung über die Planung bis zur Umsetzung. Ziel ist, den Prozess als Ganzes zu sehen (nicht nur einzelne Sprachkonstrukte).


```{figure} ../../figs/02-course-concept/overview/fahrt.png
---
height: 320px
name: fahrt
---
```

Wir begleiten die Programmiererin Julia bei einer praxisnahen Aufgabe: Messdaten werden eingelesen, ausgewertet und visualisiert. Dabei sehen Sie zwei typische Wege der Softwareentwicklung:

- **Buy (Library nutzen)**: schnell zum Ergebnis kommen, indem gut gepflegte Bibliotheken (z. B. `pandas`) genutzt werden.
- **Build (Eigenentwicklung)**: zentrale Schritte selbst implementieren (z. B. weil keine neuen Abhängigkeiten erlaubt sind) und die eigene Lösung durch Tests absichern.



```{admonition} Hinweis: Sortieralgorithmen im Fallbeispiel
::class: remark

Sortieralgorithmen werden hier **nur gestreift**, weil sie im Modulhandbuch vorkommen und im Kontext der Statistik (Quantile/Median) natürlich auftauchen: Für viele Verfahren muss eine Liste (oder Teile davon) sortiert werden. Im Kapitel geht es nicht darum, alle Algorithmen auswendig zu lernen – wichtig ist, dass Sie verstehen, **warum** Sortieren gebraucht wird, und dass Sie (falls gefordert) mindestens **einen** einfachen Sortieralgorithmus selbst implementieren können. In der Praxis verwenden Sie in Python meist die eingebaute Sortierung.
```

```{admonition} Prüfungsrelevanz
::class: note

Dieses Kapitel ist insgesamt **nicht der Schwerpunkt der Prüfung**, aber die enthaltenen Übungen und Lösungsbausteine sollten Sie **nachvollziehen und erklären** können (insbesondere Vorgehen, Zerlegung, einfache Tests und die Begründung von „Build vs. Buy“).
```
