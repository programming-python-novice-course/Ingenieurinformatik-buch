(sec-information-processing)=

# Spracheigenschaften

In diesem Teil der Vorlesung geht es darum, Python zu verstehen. Was ist damit gemeint? Jede Programmiersprache hat bestimmte Eigenschaften. Diese sollten Sie kennen! Viele Programmierfehler oder ungute Strukturen entstehen nämlich dadurch, dass jemand die Eigenschaften seiner Sprache nicht kennt. 

Zurück zu unserem Autobeispiel: Sowohl ein Elektroauto als auch ein Gangschaltauto haben einen Schalthebel. Die Bedienung ist aber sehr unterschiedlich: Einmal benutzen Sie den Schalthebel nur, um einen Modus (vorwärts, rückwärts, parken) einzustellen, und beim anderen schalten Sie Gänge, die unterschiedliche Geschwindigkeiten erlauben. Ähnlich ist es mit Programmiersprachen. Python bietet Ihnen sehr viel Komfort! Im Autobeispiel wäre Python vielleicht das E-Auto, bei dem Sie nicht mehr manuell schalten müssen. Allerdings werden Sie in Ihrem Berufsalltag nie mit nur einer Sprache in Berührung kommen. Vielleicht müssen Sie plötzlich doch schalten lernen? Deshalb: ein Blick unter die Motorhaube lohnt sich.

```{figure} ../../figs/01-course-overview/overview/motorhaube.png
---
height: 320px
name: motorhaube
---
```

Unabhängig davon können eine Programmiersprache nur dann effizient anwenden, wenn Sie ihre Eigenschaften kennen. Kennen Sie diese nicht, suchen Sie entweder nach Lösungen, die keiner braucht (ich suche im E-Auto verzweifelt nach den Gängen am Schalthebel) oder Sie machen eventuell Fehler (Sie fahren im Gangschalter nur im ersten Gang, weil Sie nicht wissen, dass man schalten kann). Das wollen wir vermeiden.

In diesem Teil der Vorlesung werden wir daher Eigenschaften von Python kennenlernen, die direkte Auswirkung auf die Anwendung von Python haben. Wir ordnen Python als Programmiersprache ein: Welche Eigenschaften prägen das Programmieren in Python und welche allgemeinen Konzepte stecken dahinter? Das hilft Ihnen, Wissen später auf andere Sprachen zu übertragen (z. B. in Richtung MATLAB).


```{admonition} Lernziele
:class: learngoals

Nach diesem Kapitel ...
- können Sie erklären, was in Python Syntax ist (z. B. Einrückung/Blöcke) und typische Syntaxfehler wie `IndentationError` einordnen.
- können Sie beschreiben, wie Python‑Code ausgeführt wird (Quelltext → Bytecode → Ausführung) und warum „interpretiert“ eine Vereinfachung ist.
- können Sie Python‑Implementierungen und -Versionen unterscheiden und erläutern, warum CPython als Referenzimplementierung eine besondere Rolle spielt.
- können Sie das Paradigma‑Konzept erklären und einordnen, warum Python multiparadigmatisch ist (strukturiert, funktional, objektorientiert).
- können Sie erklären, wie Python mit Variablen und Datentypen umgeht und welche typischen Stolpersteine sich daraus ergeben (z. B. „gleich“ vs. „dasselbe“, `==` vs. `is`, Fehler die erst zur Laufzeit auffallen).
- können Sie erklären, unter welchen Umständen Python‑Code Zustände im Speicher verändern kann (Seiteneffekte) und warum das insbesondere bei veränderlichen Objekten relevant ist.
```






