(sec-information-processing)=

# Spracheigenschaften

- In diesem Teil geht es darum, Python als Programmiersprache besser zu verstehen.
- Jede Programmiersprache hat Eigenschaften, die das Programmieren prägen.
- Wenn man diese Eigenschaften nicht kennt, entstehen in der Praxis unnötige Umwege, schwer erklärbare Fehler oder ungünstige Strukturen.

- Analogie: Elektroauto vs. Gangschaltung.
  - Beide haben einen Schalthebel, aber die Bedienlogik ist unterschiedlich.
  - Genauso kann „ähnlich aussehender“ Code je nach Sprache anders funktionieren und andere Stolperstellen haben.
  - Im Berufsalltag begegnen Ihnen mehrere Sprachen; deshalb lohnt sich ein Blick hinter die Oberfläche.

::::{only} html
```{figure} ../../figs/01-course-overview/overview/motorhaube.png
---
height: 320px
name: motorhaube
---
```
::::

- Ziel dieses Kapitels ist ein Grundverständnis, das Ihnen beim Anwenden hilft.
  - Sie können typische Fehler schneller erklären und vermeiden.
  - Sie können Lösungen besser beurteilen, statt nur „Code zu kopieren, bis es läuft“.
  - Sie können Wissen später leichter auf andere Sprachen übertragen (z. B. MATLAB).


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






