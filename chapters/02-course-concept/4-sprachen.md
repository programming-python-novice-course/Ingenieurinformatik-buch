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


## Skriptsprachen vs. kompilierte Sprachen

Sie kennen sicherlich die Aussage ein Computer kennt nur 0 und 1. Und tatsächlich: ein jedes Computerprogramm ist, wenn es ausgeführt wird, nur eine abfolge von 0 und 1, die auf eine bestimmte Weise verarbeitet werden. Die Abfolge von 0 und 1 wird als Maschinencode bezeichnet. Maschinencode sieht üblicherweise wie folgt aus:



Üblicherweise geben Programmierer aber keine 0 und 1 in den Computer direkt ein. Warum? Weil er nicht in 0 und 1 denkt, sondern weil ein Mensch üblicherweise anders denkt: wenn bedinung 1 erfüllt ist, dann soll XYZ passieren. Danach soll schritt 2 geschehen. Höhere Programmiersprachen wurden genau zu diesem Zweck entwickelt: sie ermöglichen ein Programm zu entwickeln, das für menschen verständlich ist. Fast alle Programmiersprachen die in der praxis heutzutage anwendung finden sind höhere Programmiersprachen. 

Die große Frage die bleibt ist allerdings: wenn der Computer am Ende nur 0 und 1 ausführen kann. Wie wird aus aus dem Quelltext, den wir in einer höheren Programmiersprache geschrieben haben, am Ende eine Abfolge von 0 und 1, die der Rechner versteht? Grundsätzlich brauchen wir eine Übersetzung zwischen dem Quelltext und dem Maschinencode (Abfolge von 0 und 1). 

Programmiersprachen werden in zwei Arten eingeteilt, die sich dadurch unterscheiden wann und wie die Übersetzung durchgeführt wird.
- kompilierte Sprachen. Klassische Beispiele hierfür sind C, C++
- Skriptsprachen. Python

Ob ein Programm in einer kompilierten Sprache erstellt wurde, erkennen Sie daran, dass Sie eine ausführbare Datei vor sich haben, die Sie direkt starten können:
```
meine-anwendung.exe
```

Haben Sie ein Programm vor sich liegen, das in einer Skriptsprache entwickelt wurde, dann starten Sie das Programm anders:
```
python3 meine-anwendung.py
```

Der fundamentale Unterschied zwischen den beiden ist, wo der Maschinencode zu finden ist. Im ersten Fall befindet sich der Maschinencode in `meine-anwendung.exe`; im zweiten Fall ist er im Python-Interpreter (`python3`) enthalten. `meine-anwendung.py` liegt weiterhin als Quelltext vor.

**Wichtig zu verstehen:** Bei einer nativ kompilierten Sprache wie C oder C++ enthält die `.exe`-Datei bereits den nativen Maschinencode (0 und 1), der speziell für Ihr Betriebssystem und Ihre Prozessorarchitektur kompiliert wurde. Das Betriebssystem erkennt die `.exe`-Datei an ihrem Dateiformat (z.B. PE-Format bei Windows) und kann sie direkt ausführen - es muss nicht "wissen", in welcher Sprache das Programm ursprünglich geschrieben wurde, da es bereits zu Maschinencode übersetzt wurde. Eine ausführbare Datei kann nur auf dem Betriebssystem und der Prozessorarchitektur ausgeführt werden, für die sie kompiliert wurde (z.B. Windows x64, Linux ARM, etc.).


```{figure} ../../figs/overview/interpretationcompilation.png
---
width: 600px
name: fig-interpretationcompilation
---
Vergleich zwischen Kompilierung und Interpretation
```


Warum sollte man den Unterschied kennen: Der Entwicklungsprozess und auch die möglichen Fehlerquellen in der Programmierung hängen davon ab, ob sie in einer kompilierten Sprache oder einer Skriptsprache entwickeln. Unser ziel ist es in Python zu programmieren: Sie sollten daher verstehen wie aus Ihrem Programm 0 und 1 werden, die vom Rechner ausgeführt werden können. 

## Übersetzung


Sowohl bei Skriptsprachen als auch komipilierten Sprachen muss an irgeneiner Stelle irgendwann eine Übersetzung stattfinden: ein Übersetzer (ein Compiler) übersetzt Quelltext in Maschinencode! Der unterschied ist wann das ganze passiert.














