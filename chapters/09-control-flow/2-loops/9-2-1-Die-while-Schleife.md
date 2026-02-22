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

# Die ``while``-Schleife

Die ``while``-Schleife verwenden wir immer dann, wenn wir (zur Laufzeit) **nicht** wissen wie viele Wiederholungen wir maximal benötigen.
Die Wiederholung endet sobald eine bestimmte Bedingung, d.h. ein *logischer Ausdruck* ``P`` zu ``False`` ausgewertet wird.

```python
while P:
    # Codeblock1
else: # (optional)
    # Codeblock2
```

``Codeblock2`` wird einmal ausgeführt sobald ``P`` zu ``False`` ausgewertet wird und die ``while``-Schleife verlassen wird, d.h. als letzter Schritt.

```{admonition} Endlosschleifen
:class: attention
:name: attention-endless-loop
Wird ``P`` niemals ``False``, so endet die Wiederholung niemals und wir haben eine sog. *Endlosschleife*!
```

```{code-cell} python3
i = 0
while i < 10:
    i += 1
    print(i)
else:
    print('end of the while-loop')
```

```{admonition} Mächtigkeit der While-Schleife
:class: theorem
:name: theorem-while-vs-for
Jede ``for``-Schleife lässt sich in eine ``while``-Schleife transformieren!
```

```{code-cell} python3
names = ['Sarah', 'Sebastian', 'Babar', 'Simon', 'Martin']

for name in names:
    print(name)

print()

i = 0
while i < len(names):
    print(names[i])
    i += 1
```

``while``-Schleifen sind mächtiger aber auch gefährlicher bzw. oftmals schwerer zu lesen und zu verstehen als ``for``-Schleifen.

```{admonition} Verwendungskriterium
:class: remark
:name: remark-while-vs-for
Verwenden Sie die ``while``-Schleife nur wenn die ``for``-Schleife ungeeignet ist.
```

``break`` und ``continue`` funktionieren für die ``while``-Schleife genauso wie für die ``for``-Schleife.

```{admonition} Verwendungskriterium While-Schleife
:class: remark
:name: remark-while-usage
Gehen Sie sparsam mit ``break`` und ``continue`` um, oftmals brauchen Sie es nicht!
```

Folgender Code zeigt eine unnötige Verwendung von ``continue``.

```{code-cell} python3
# bad code!!!
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue
    print(i)
```

Stattdessen können wir die ``if``-Bedingung anpassen.

```{code-cell} python3
# better!
i = 0
while i < 10:
    i += 1
    if i % 2 == 1:
        print(i)
```

Oder aber Sie erhöhen die Zählervariable um zwei anstatt um eins.

```{code-cell} python3
# even better!
i = 1
while i < 10:      
    print(i)
    i += 2
```

Am einfachsten zu lesen bleibt jedoch die ``for``-Schleife.

```{code-cell} python3
# even better!
for i in range(1,10,2):
  print(i)
```

```{admonition} Verhindern von Endlosschleifen
:class: remark
:name: remark-avoid-endless-loop
Prüfen Sie immer ob Ihre Bedingung ``P`` durch den Schleifenrumpf garantiert irgendwann ``False`` ergibt!
```

```{exercise} Praxisaufgabe (PA3.1): Fakultät 
:label: ex-paufgaben-a31-fakultaet-while

Schreiben Sie ein Programm, das eine Zahl $n$ einliest und $n!$ berechnet.

- Akzeptieren Sie nur $1 \le n \le 50$ (Eingabeprüfung mit `while`).
- Berechnen Sie danach die Fakultät iterativ (ebenfalls mit `while`).
```

```{code-cell} python3
:tags: [skip-execution]

n = 22

```

