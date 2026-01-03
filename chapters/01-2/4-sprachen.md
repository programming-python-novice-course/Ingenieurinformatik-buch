# Programmiersprachen

Es existiert eine Vielzahl an Programmiersprachen. Es gibt nicht die beste Programmiersprache! 
Welche Programmiersprache Sie verwenden hängt immer von ihrem Problem ab! 
Ein guter Softwareentwickler kennt viele Programmiersprachen und entscheidet abhängig vom Problem welche dafür geeignet ist.

Was heisst es eine Programmiersprache zu lernen?

Eine Programmiersprache zu lernen bedeutet, dass wir 
- den Syntax der Sprache ("die Grammatik") und deren Semantik ("die Bedeutung") verstehen (da hilft Ihnen ChatGPT)
- und deren Konzepte kennen und anwenden. (da hilft Ihnen ChatGPT nur wenn Sie die Konzepte kennen und wenn Sie das kennen, dann ist zweifelhaft ob sie ChatGPT noch nutzen)


Was versteht man unter Syntax?
-> Vergleich helloworld in C und HelloWorld in Python

**Hello World in C:**
```c
#include <stdio.h>

int main(void) {
    printf("Hello World\n");
    return 0;
}
```

**Hello World in Python:**
```python
if __name__ == "__main__":
    print("Hello World")
```

Wir sehen, dass die selbe Logik in unterschiedlichen Sprachen unterschiedlich aussieht.

Was versteht man unter Semantik?

**Programm 1 (mit if-Statement):**
```python
if __name__ == "__main__":
    x = 5
    if x == 5:
        print("Hello World")
```

**Programm 2 (ohne if-Statement):**
```python
if __name__ == "__main__":
    x = 5
    print("Hello World")
```

Beide Programme verhalten sich bei `x = 5` identisch - sie geben "Hello World" aus. Bei `x = 3` würde Programm 1 nichts ausgeben, Programm 2 würde weiterhin "Hello World" ausgeben. Die Programme haben also unterschiedliche Semantik, auch wenn sie bei bestimmten Werten das gleiche Verhalten zeigen.


Bestimmte "Textbausteine" entscheiden über das Verhalten des Codes.


```{admonition} Hinweis
:name: chatgpt-warning
:class: remark
Tipp: Large Language Models (LLMs) unterstützen Sie bei der korrekten Umsetzung des Syntax eine Programmiersprache - normalerweise entwickelen Sie aber in einer IDE. IDEs unterstützen Sie dabei sowieso. Was die Semantik angeht: hier wird es tricky - auch hier können LLMs helfen, aber woher weiß das LLM ob sie Hello World nur printen wollen, falls x den wert 5 annimmt? Die schwierigkeitbesteht besteht darin zu wissen, dass die bedingung notwendig ist (semantik), nicht wie die bedingung syntaktisch in python abgebildet wird (mit "if ... :". Again: den syntax kann chatgpt für sie lösen ;) 
```


Was versteht man unter Konzepten?
je nachdem welche Programmiersprache ich verwende, muss ich mich um bestimmte "Probleme" selbst kümmern oder nicht. 
Beispiel: Speicherplatz reservieren und freigeben. 

Warum will ich mich selbst darum kümmern?
Weil ich damit eine hohe Kontrolle über das Programm habe.

Warum will ich mich nicht selbst darum kümmern?
Weil es aufwändig ist das zu lernen! 

Je nachdem was ich brauche (hohe Konrolle oder schneller Einstieg) wähle ich eine Programmiersprache die mir für das entsprechende Problem eine Lösung bereitstellt (ein Konzept), sodass ich mich nicht selbst drum kümmern darf oder nicht kümmern muss.


```{admonition} Warnung
:class: attention
:name: attention-sample
Konzeptwissen ist unerlässlich. Nur weil Sie sich in Python die meiste Zeit nicht um Speicherplatzalloierung kümmern müssen, heisst das nicht, dass das Problem nicht da ist. Sie sehen es einfach nicht. Steigen Sie auf eine andere Programmiersprache um, müssen Sie sich darum kümmern! Und im schlimmsten Fall legen Sie eine Firma lahm!  Meine Empfehlung: lernen Sie zunächst die Konzepte eine Programmiersprache und dann den Syntax und die Semantik!

```














