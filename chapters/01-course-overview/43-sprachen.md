# Programmiersprachen


Was bedeutet es, eine Programmiersprache zu lernen? Das bedeutet, dass Sie Syntax, Semantik und Konzepte unterscheiden und anwenden können.

- Syntax beschreibt die Regeln, wie Code geschrieben werden muss („Grammatik“).
- Semantik beschreibt, was Code bedeutet und wie er sich bei Eingaben verhält („Bedeutung“).
- Konzepte sind Lösungsansätze für wiederkehrende Probleme in der Programmierung.

Beispiel zur Syntax: „Hello World“ sieht in C und Python unterschiedlich aus, obwohl die Idee gleich ist.

Hello World in C:
```c
#include <stdio.h>

int main(void) {
    printf("Hello World\n");
    return 0;
}
```

Hello World in Python:
```python
if __name__ == "__main__":
    print("Hello World")
```

Damit wird sichtbar: Dieselbe Idee kann in unterschiedlichen Sprachen sehr unterschiedlich aussehen.

Beispiel zur Semantik: Zwei Programme können ähnlich aussehen, aber sich bei bestimmten Eingaben unterschiedlich verhalten.

Programm 1 (mit if-Statement):
```python
if __name__ == "__main__":
    x = 5
    if x == 5:
        print("Hello World")
```

Programm 2 (ohne if-Statement):
```python
if __name__ == "__main__":
    x = 5
    print("Hello World")
```

Beide Programme verhalten sich bei `x = 5` identisch und geben "Hello World" aus. Bei `x = 3` würde Programm 1 nichts ausgeben, Programm 2 würde weiterhin "Hello World" ausgeben. Die Programme haben also unterschiedliche Semantik, auch wenn sie bei bestimmten Werten gleich wirken.

Man kann sich das so merken: Bestimmte Code-Bausteine entscheiden über das Verhalten. Semantik ist das, was der Code tatsächlich tut, nicht nur, wie er aussieht.


```{admonition} Hinweis
:name: syntax-semantik
:class: remark
Syntax-Fehler werden von der IDE oder dem Interpreter sofort erkannt. Semantik-Fehler sind schwieriger zu finden: Der Code ist syntaktisch korrekt, tut aber nicht das, was beabsichtigt war. Die Unterscheidung zwischen Syntax (wie schreibe ich es?) und Semantik (was tut es?) ist fundamental für das Verständnis von Programmiersprachen.
```


Beispiel zu Konzepten (Speicherverwaltung):

- In einigen Sprachen (z. B. C, C++) reservieren und geben Programmierende Speicher explizit frei.
- In anderen Sprachen (z. B. Python, Java) übernimmt das die Sprache automatisch.
- Manuelle Speicherverwaltung gibt viel Kontrolle, ist aber komplexer und fehleranfälliger.
- Automatische Speicherverwaltung ist oft leichter zu erlernen und weniger fehleranfällig, bietet aber weniger Kontrolle.
- Je nach Anforderung (z. B. maximale Kontrolle vs. schneller Einstieg) wählen Sie eine Sprache, deren Konzepte gut passen.

Die Eigenschaften der Programmiersprache Python, einschließlich ihrer Konzepte, werden im Kapitel [Spracheigenschaften](chapters/04-language-properties/0-intro) detailliert behandelt.

```{admonition} Tipp
:class: tip
:name: tip-learning-order
Lernreihenfolge: Lernen Sie zunächst die Konzepte einer Programmiersprache kennen, bevor Sie Syntax und Semantik anwenden.

In dieser Vorlesung finden Sie:
- Konzepte in den Teilen "Basiswissen" und "Python verstehen"
- Programmiertechniken (Anwendung von Syntax und Semantik zur Umsetzung von Logik) im Teil "Python anwenden"
```

