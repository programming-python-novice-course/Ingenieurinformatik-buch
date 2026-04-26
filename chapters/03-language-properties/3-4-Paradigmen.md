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

(paradigma-sec)=
# Paradigmen

```{admonition} Behauptung
:class: remark
„Python ist objektorientiert.“
```

Diese Aussage liest man oft – und sie ist „halb richtig“. Python **ermöglicht** objektorientierte Programmierung sehr gut, ist aber gleichzeitig **multiparadigmatisch**.

**Was genau hat es damit auf sich?**

Ein Programmierparadigma kann man sich wie einen Programmierstil vorstellen: eine bestimmte Art, wie man eine Funktionalität in Programmcode niederschreibt und strukturiert. Paradigmen sind dabei weitgehend unabhängig von der konkreten Sprache – eine Sprache kann ein Paradigma stärker „nahelegen“, aber oft mehrere unterstützen.

Die drei Paradigmen sind (vgl. {cite}`martin:2017clean`):

- Prozedurale Programmierung (auch manchmal "Strukturierte Programmierung" genannt, wobei es genau genommen keine Synomyme sind)
- Funktionale Programmierung
- Objektorientierte Programmierung

```{admonition} Was Sie hier (nicht) können müssen
:class: learngoals
**Erwartet:** Sie kennen die Begriffe **strukturiert/prozedural**, **funktional** und **objektorientiert** und können grob einordnen, was damit gemeint ist. 

**Nicht erwartet:** Dass Sie alle drei Stile schon sicher erkennen oder selbst umsetzen können. In der Vorlesung arbeiten wir vor allem strukturiert/prozedural.
```

Wir schauen uns anhand eines kurzen Python-Beispiels an, wie sich diese Paradigmen unterscheiden. Entscheidend ist nur die Beobachtung: Wir rechnen dreimal $5 \cdot 5$ aus – aber der Code ist jeweils anders strukturiert (Funktion, Lambda, Klasse). Diese unterschiedlichen Strukturen stehen für verschiedene Programmierstile.

Für dieselbe Aufgabe gibt es daher oft mehrere „richtige“ Implementierungen – abhängig vom Stil, den man wählt.

**Beispiel: Quadrat einer Zahl berechnen**

```{code-cell} python3
def quadrat_strukturiert(x):
    return x * x

quadrat_funktional = lambda x: x * x

class QuadratRechner:
    def __init__(self, x):
        self.x = x

    def berechne(self) -> int:
        return self.x * self.x

print(quadrat_strukturiert(5))        # 25
print(quadrat_funktional(5))          # 25
print(QuadratRechner(5).berechne())   # 25
```

```{admonition} Wichtig
:class: important
:name: important-paradigm-choice
Wir werden in diesem Modul vor allem strukturiert/prozedural programmieren.
```
Wie das Beispiel zeigt, erlaubt uns Python, sowohl prozedural, funktional als auch objektorientiert zu programmieren.

```{admonition} Klarstellung
:class: note

- **Python ist sehr gut für objektorientierte Programmierung geeignet**, aber nicht darauf beschränkt.
- **Python ist multiparadigmatisch** (es unterstützt objektorientierte, funktionale und prozedurale Programmierung). Viele Bibliotheken und Konventionen sind jedoch objektorientiert geprägt.
- In der Praxis ist weniger wichtig, „welches Paradigma richtig ist“, sondern **welches Modell Ihr Problem am klarsten beschreibt**.
```