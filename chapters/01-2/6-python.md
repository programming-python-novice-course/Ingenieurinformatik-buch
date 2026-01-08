# Programmiersprache

## Sprachtypen

Python ist eine höhrere Programmiersprache.

TODO: erstelle jeweils ein code snippet in python und in

...

Python wird oft als Skriptsprache bezeichnet. Um genau zu sein ist eine hybride Sprache!


# Paradigma

Es gibt Stile wie man einen Algorithmen implementieren kann. Diese Stile werden in der Fachsprache als "Programmier-Paradigmen"
bezeichnet. Sie sind unabhängig von einer Programmiersprache!
Die drei Programmierparadigmen sind:
- die Strukturierte Programmierung
- die Funktionale Programmierung
- die Objektorientiere Programmierung


Beispiel: Wir berechnen das Quadrat einer Zahl in Python. 

Strukturiert programmiert sieht das so aus:

```python
def square_number(zahl):
    ergebnis = zahl * zahl
    return ergebnis

if __name__ == "__main__": # <--- entrypoint of a Python programm
    x = 5
    quadrat_von_x = quadrat_strukturiert(x)
    print(quadrat_von_x)  # print the result
```

Funktional programmiert würde das Berechnen der Quadratwurzel in Python so aussehen:

```python
# Funktionale Programmierung
quadrat_funktional = lambda z: z * z

if __name__ == "__main__":
    # Beispiel:
    quadrat_von_5 = quadrat_funktional(5)
    print(quadrat_von_5)  # Ausgabe: 25
```

Und objektorientiert könnte das so aussehen

```python
# Objektorientierte Programmierung
class QuadratRechner:
    def __init__(self, zahl):
        self.zahl = zahl
    
    def berechne(self):
        return self.zahl * self.zahl

if __name__ == "__main__":
    # Beispiel:
    rechner = QuadratRechner(5)
    ergebnis = rechner.berechne()
    print(ergebnis)  # Ausgabe: 25
```
oder auch so:

```python
# Objektorientierte Programmierung mit Klassenmethode
class QuadratRechner:
    @classmethod
    def berechne(cls, zahl):
        return zahl * zahl

if __name__ == "__main__":
    # Beispiel:
    ergebnis = QuadratRechner.berechne(5)
    print(ergebnis)  # Ausgabe: 25
```

Wichtig: Wir haben jetzt 4 Wege gesehen wie man in Python 1 Funktionalität implementieren kann. Und es gibt viele weitere! Welcher Weg davon für Sie Ihre Problemstellung am geeignsten ist, müssen Sie entscheiden! In diesem Kurs wird der Fokus vor allem auf der strukturierten Programmierung liegen. 


Hinweis:
Python wird oft als objekt-orientierte Sprache bezeichnet. Das ist nicht ganz korrekt: sie ermöglicht objektorientiere Programmierung aber auch funktionale und strukturierte Programmierung, wie wir im beispiel gesehen haben. Der Hintergrund ist, dass Python so entwickelt wurde, dass objekt-orientierte Strukturen besonders effizient ausgeführt werden können.  #TODO: hier wäre eine quelle hilfreich

# Architectural and design patterns

Am Beispiel vorher haben wir gesehen, dass es viele Wege gibt eine Funktionalität zu implementieren. Es gab es nur eine Funktionalität, nämlich eine Zahl zu quadrieren. Diese Funktionalität wurde nur einmal genutze. 

In einer software gibt es üblichweise 1000 oder 100000 funktionalitäten, von denen vielleicht nur ein bruchtteil aufgerufen wird. Stellen Sie sich word vor: dort können sie die schriftgröße und die farbe ändern. Sie können aber auch das dokument drucken. Nicht immer wird der nutzer alle funktionalitäten nutzen. Damit er überhaupt einen überblick über das dokument behalten kann, sind die funktionalitäten in unterschiedlichen kacheln organisiert. 

Ähnlich ist es mit software: damit sich programmierer darin zurechtfinden, verwendet man bestimmte strategien: bestimmte software funktionalitäten werden auf eine bestimmte art und weise an einem bestimmten ort, also nach einem bestimmten Muster, in der software abgelegt - man spricht daher auch von design patterns. 

Das nutzen von design patterns sorgt nicht dafür, dass sich andere entwickler schneller zurechtfinden, sondern sie sorgen auch dafür,
-  dass funktionalitäten nur dafür eingesetzt werden, wofür sie gedacht sind. 
- dass die entwicklung von funktionalitäten aufgeteilt werden kann: jeder übernimmt eine funktionalität. das zusammenspiel ist über das design pattern festgelegt. jeder weiss wie er "mitmacchen darf"
- dass instabile programme vermieden werden. Design patterns sind die Umsetzung von Strategien, bei denen sich herausgestellt hat, dass die software weniger häufig abstürzt/scheneller erweitert werden kann/. .. 

Wenn Sie software entwickeln wollen, die skalierbar ist, die erweitert werden kann, also nachhaltig ist: lernen Sie design patterns und lernen Sie wie die design patterns in ihrer Programmiersprache umgesetzt werden! 

Wissen über software architectur und die richtige anwendung von design patterns ist grundlage des sustainable software engineerings. 


