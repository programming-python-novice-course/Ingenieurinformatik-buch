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

(sec-expressions)=
# Ausdrücke (A)

Im Vergleich zu natürlichen Sprachen, sind Programmiersprachen sind viel einfacher aufgebaut.
Entwickler\*innen der Sprachen versuchen ihre [Syntax](def-syntax) so unmissverständlich, elegant, kurz und ausdrucksstark wie möglich zu gestalten.
In der Vergangenheit gelang das nicht immer und über die Jahre haben wir viel dazu gelernt.
In diesem Kurs verwenden wir ``Python`` insbesondere deshalb, weil es eine der leserlichsten und zugleich mächtigsten Sprachen unserer Zeit ist.

Jedes Programm, bzw. jeder Algorithmus besteht aus vielen *Ausdrücken*.
Ein *Ausdruck* beschreibt wie Daten (die Eingabe) verarbeitet werden sollen.

Die Multiplikation ``3 * 5`` ist beispielsweise ein Ausdruck der zwei Dezimalzahlen multipliziert.
Der *Ausdruck* besteht aus dem Symbol ``*`` und zwei nummerischen *Ausdrücken*.
Die Multiplikation wird durch den Computer, genauer die [CPU](def-cpu) berechnet.
``3 * 5`` ergibt ``15``.

```{code-cell} python3
3 * 5
```

Die [Syntax](def-syntax) einer Programmiersprache ist strikt.
Sie wird durch eine sog. *Grammatik* definiert.å
Zum Beispiel ist folgender *Ausdruck* fehlerhaft, da er nicht durch die *Grammatik* von ``Python`` definiert ist.
Man sagt auch, dass die Sprache, welche durch die Grammatik definiert ist, den folgenden Ausdruck nicht enthält.

```{code-cell} python3
---
tags: [raises-exception]
---
3 * * 5
```

Der Computer bzw. ``Python``-[Interpreter](def-interpreter) weiß mit dieser Folge an Symbolen nichts anzufangen.
Wir werden vom Interpreter sachlich auf die mögliche Fehlerursache hingewiesen.
Bereits kleine Änderungen an der [Syntax](def-syntax) können zu einer neuen Bedeutung ([Semantik](def-semantik)) führen.
In ``Python`` ist der *Ausdruck*

```{code-cell} python3
3 ** 5
```

syntaktisch korrekt.
Seine [Semantik](def-semantik) ist die Berechnung von $3^5$, was $243$ ergibt.
In kaum einer anderen Sprache gibt es für die Potenz eine derart kurze Schreibweise.

Dieses Kapitel ist in Unterkapitel aufgeteilt:

- [Arithmetische Operatoren (A)](2-expressions/1-arithmetische-operatoren.md)
- [Vergleichsoperatoren (A)](2-expressions/2-vergleichsoperatoren.md)
- [Logische Operatoren (A)](2-expressions/3-logische-operatoren.md)
- [Bitoperatoren (S)](2-expressions/4-bitoperatoren.md)

