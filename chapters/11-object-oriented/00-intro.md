# Objektorientierte Programmierung

In unserer Vorlesung haben wir uns bisher nur auf die *prozedurale Programmierung* beschränkt. Die *prozedurale Programmierung* war lange Zeit die dominierende Art und Weise zu programmieren.

```{admonition} Prozedurale Programmierung
:class: definition
:name: def-procedural-programming
Die *prozedurale Programmierung* ist ein *Programmierparadigma*, welches auf *Funktionen / Prozeduren* aufgebaut ist.
Sie gilt als Erweiterung des *imperativen Paradigmas*.
```

In den letzten 15 Jahren hat sich in vielen Bereichen der Softwareentwicklung immer mehr die *objekt-orientierte Programmierung* durchgesetzt, das wie die *prozedurale Programmierung* ein Programmierparadigma darstellt.

Sie werden in der Programmierpraxis daher immer wieder mit diesem Programmierparadigma in Berührung kommen.


**Wo begegnet uns OOP als Ingenieure?**

Es gibt zwei sehr typische Situationen:

- Große Softwareprojekte: (z.B. CAD/CAE, Simulation, Embedded, Datenpipelines): Der Code ist so groß, dass man Struktur und klare Schnittstellen braucht. OOP ist ein weit verbreitetes Mittel dafür. Auch wenn Sie nicht „Architektur“ machen, müssen Sie oft bestehende OO-Strukturen verstehen, um an der richtigen Stelle Änderungen einzubauen.
- Bibliotheken/Frameworks nutzen und erweitern: Viele Python-Bibliotheken, die Sie im Ingenieurkontext verwenden (u.a. Matplotlib), sind objektorientiert aufgebaut. Wenn etwas „fast passt, aber nicht ganz“, ist es hilfreich zu verstehen, wie man das bestehende Verhalten erweitert, ohne alles neu zu schreiben. 

Den zweiten Fall wollen wir uns im Folgenden näher ansehen.

```{admonition} Lernziele
:class: learngoals

- Nach diesem Kapitel verstehen Sie den Unterschied zwischen prozeduraler und objektorientierter Programmierung und warum OOP als Paradigma in der Praxis so verbreitet ist.
- Nach diesem Kapitel sind Sie in der Lage, Klassen und Objekte als benutzerdefinierte Datentypen zu erklären und einfache Klassen zu implementieren (Attribute, Methoden, ``__init__``).
- Nach diesem Kapitel sind Sie in der Lage, Methodenaufrufe und das Zusammenspiel von Daten und Verhalten in Objekten nachzuvollziehen (inkl. ``self``).
- Nach diesem Kapitel sind Sie in der Lage, grundlegende OOP-Konzepte anzuwenden und einzuordnen (Kapselung, Vererbung, Polymorphie) – soweit im Kapitel behandelt.
- Nach diesem Kapitel sind Sie in der Lage, für einfache Problemstellungen zu entscheiden, ob ein prozeduraler oder objektorientierter Ansatz sinnvoller ist, und Ihre Entscheidung zu begründen.
Das Ziel dieses Kapitels ist, dass Sie:
- erkennen, **wann** und **warum** Ihnen OOP begegnet,
- typische OO-Strukturen (Klassen, Objekte, Vererbung) **lesen und verstehen** können,
- und sehen, wie OOP helfen kann, reale Anforderungen sauber in bestehende Software einzubetten.

```
