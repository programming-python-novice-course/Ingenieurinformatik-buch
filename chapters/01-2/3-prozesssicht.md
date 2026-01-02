# Softwareentwicklung


## Produktlebenszyklus einer Software
Um sicherzustellen, dass die Software am Ende das tut was sie soll wird üblicherweise nach einem bestimmten Schema vorgegangen. Je nach Firma und Projekt gibt es unterschiedliche Schemata wie man Software entwickeln kann, die sich darin unterscheiden, wann welche Aufgabe in einem bestimmten Umfang als erledigt betrachtet wird. Unabhängig davon werden im Rahmen einer Entwicklungsprozesses folgenden Phasen durchlaufen:


```{figure} ../../figs/overview/development-phases.png
---
width: 600px
name: fig-development-phases
---
Entwicklungsphasen der Softwareentwicklung.
```

- Analyse und Definition der Anforderungen (nicht Teil der Vorlesung)
- System- und Softwareentwurf (nicht Teil der Vorlesung): Architektur
- Implementierung und Modultests: Der Fokus dieser Vorlesung liegt auf der Implementierung isolierter Funktionalitäten
- Integration und Systemtest (nicht Teil der Vorlesung)
- Betrieb und Wartung (nicht Teil der Vorlesung)

Phasen-übergreifend wird
- die IT-Security berücksichtigt
- die Safety berüchsichtigt
- Konfigurationsmanagement betrieben 
- die Softwarequalität monitored


```{admonition} Hinweis
:name: remark-sample
:class: remark
Das Software Engineering Compentency Model (SWECOM) der IEEE Computer Society beschreibt welche Kompetenzen ein Softwareentwickler benötigt, um die Phasen-bezogenen und phasen-übergreifenden Aufgaben zu erledigen.
```

## Fokus dieser Vorlesung

Softwareentwicklung beinhaltet viele Aspekte. Im Rahmen dieser Vorlesung können wir nicht auf alle eingehen. Wie nehmen an dass

- das Problem ("Die Aufgabe") bekannt ist (Anforderungsdefinition erledigt)
- dass Ihr Programm von keinem anderen menschen oder keiner andere Software benutzt werden muss (Systemplanung und Integration entfällt)
- dass Ihr Programm nur auf dem Rechner laufen muss, auf dem er entwickelt wurde (Systemplanung- und Systemintegration, Betrieb und Wartung entfällt)
- dass Sie den Algorithmus nur über einen begrezten Zeitraum nutzen wollen  (keine Softwareupdates!)

Im Rahmen dieser Vorlesung liegt der Fokus auf den Grundlagen des Programmierens, was der Phase "Implementierung und Modultests" entspricht.
Dabei lernen Sie wie man einen Algorithmus entwickelt, in einem Computerprogramm umsetzte ("implementiert") und testet. 


```{admonition} Hinweis
:name: remark-sample
:class: remark
Ein Algorithmus ist ein Konzeptrezept, das beschreibt wie ein konkretes Problem gelöst werden soll. Ein Algorithmus ist grundsätzlich also erst einmal unabhängig von einer Programmiersprache. Die Implementierung einer Algorithmus ist allerdings immer programmiersprachen-spezifisch. 
```




