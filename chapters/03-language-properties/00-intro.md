(sec-information-processing)=

# Spracheigenschaften

- In diesem Teil geht es darum, Python als Programmiersprache besser zu verstehen.
- Jede Programmiersprache hat Eigenschaften, die das Programmieren prägen.
- Wenn man diese Eigenschaften nicht kennt, entstehen in der Praxis unnötige Umwege, schwer erklärbare Fehler oder ungünstige Strukturen.

**Analogie: Autofahren lernen**

- Stellen Sie sich vor Sie lernen Auto fahren mit einem Elektroauto.
- Wenn Ihnen niemand ihnen in der 1. Fahrstunde sagt: das hier ist ein Elektroauto - da gibt es keine Gänge, dann denken Sie es ist "normal", dass es keine Gänge gibt. 
- Im schlimmsten Fall kaufen Sie dann einen Benziner und wundern sich, dass es im 1. Gang bei 70km/h doch sehr laut ist.
- Um sicher zu fahren ("Programmieren"), sollten Sie Ihre Programmiersprache ("Auto") kennen! 

::::{only} html
```{figure} ../../figs/01-course-overview/overview/motorhaube.png
---
height: 320px
name: motorhaube
---
```
::::

Ziel dieses Kapitels ist ein Grundverständnis von Python, das Ihnen später beim Anwenden hilft.

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






