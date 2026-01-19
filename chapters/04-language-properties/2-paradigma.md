# „Python ist objektorientiert.“

Diese Aussage liest man oft – und sie ist „halb richtig“. Python **ermöglicht** objektorientierte Programmierung sehr gut, ist aber gleichzeitig **multiparadigmatisch**.

**Was steckt dahinter**?

Ein **Programmierparadigma** kann man sich wie einen **Programmierstil** vorstellen: eine bestimmte Art, wie man eine Funktionalität in Programmcode niederschreibt und strukturiert. Paradigmen sind dabei weitgehend **unabhängig von der konkreten Sprache** – eine Sprache kann ein Paradigma stärker „nahelegen“, aber oft mehrere unterstützen.

Drei wichtige Paradigmen sind:

- **Strukturierte/Prozedurale Programmierung** 
- **Funktionale Programmierung** 
- **Objektorientierte Programmierung** 

## „In Python geht daher alles auf viele Arten“

Für dieselbe Aufgabe gibt es oft mehrere „richtige“ Implementierungen.

Beispiel: Quadrat einer Zahl berechnen 

```python
def quadrat_strukturiert(x: int) -> int:
    return x * x

quadrat_funktional = lambda x: x * x

class QuadratRechner:
    def __init__(self, x: int):
        self.x = x

    def berechne(self) -> int:
        return self.x * self.x

if __name__ == "__main__":
    print(quadrat_strukturiert(5))        # 25
    print(quadrat_funktional(5))          # 25
    print(QuadratRechner(5).berechne())   # 25
```

```{admonition} Wichtig
:class: important
:name: important-paradigm-choice
Sie müssen an dieser Stelle nicht verstehen wie man die drei Paradigmen programmiert. Sie sollen nur erkennen, dass es unterschiedliche Wege gibt. Wir werden in diesem Modul vor allem strukturiert/prozedural programmieren.
```




## Takeaways

- **Python ist sehr gut für objektorientierte Programmierung geeignet**, aber nicht darauf beschränkt.
- **Python ist multiparadigmatisch**: strukturiert, funktional und objektorientiert sind möglich – es unterstützt objektorientierte, funktionale und strukturierte Programmierung. Viele Bibliotheken und Konventionen sind jedoch objektorientiert geprägt.
- In der Praxis ist weniger wichtig, „welches Paradigma richtig ist“, sondern **welches Modell Ihr Problem am klarsten beschreibt**.
