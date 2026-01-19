---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

(sec-memory-management)=
# „In Python gibt es keine Zeiger – Speicher ist kein Thema.“

Im Kapitel [`chapters/03-computer-sciences-basics/3-programmierkonstrukte.md`](../03-computer-sciences-basics/3-programmierkonstrukte.md) haben wir *Zeiger* schon kurz erwähnt.
Vereinfacht gesagt: Ein Zeiger ist **eine Adresse im Speicher** – also ein Wert, der angibt, *wo* ein Objekt liegt.

Zurück zur Aussage: „In Python gibt es keine Zeiger – Speicher ist kein Thema.“

Sie müssen in Python tatsächlich **keinen Speicher manuell reservieren oder freigeben** (wie z.B. in C mit `malloc`/`free`). Diese Aufgabe übernimmt ein *Garbage Collector* (GC). Ein Garbage Collector erkennt Objekte, die nicht mehr verwendet werden, und gibt deren Speicher automatisch frei.


Zur Aussage „In Python gibt es keine Zeiger“:
Python arbeitet intern mit Speicheradressen. Für Sie erscheinen sie als **Referenzen** – Variablennamen „zeigen“ auf Objekte.
Sie merken das im Alltag meist nicht an einer speziellen Pointer-Syntax, aber Sie merken es am Verhalten (z.B. bei Referenzen und Seiteneffekten).

## Was heißt das im Detail?

### Was ist eine Variable?

Eine *Variable* ist (vereinfacht) ein **Name**, mit dem Sie ein Objekt wiederfinden können. Mit dem Zuweisungszeichen `=` wird der Name an ein Objekt „gebunden“ (der Name zeigt auf das Objekt). 

Durch das ``=`` Zeichen weisen wir einer *Variablen* (auf der linken Seite) den Wert des *Ausdrucks* (auf der rechten Seite) zu.
Zum Beispiel, weist

```{code-cell} ipython3
x = 3 + 10
```

den ausgewerteten Wert ``3 + 10`` also ``13`` der Variablen ``x`` zu.
Es ist äußerst wichtig, dass Sie zwischen dem ``=`` und dem mathematischen $=$ unterscheiden.

$$x = 13$$

bedeutet, dass $x$ gleich $13$ ist, wohingegen

```{code-cell} ipython3
x = 13
```

den Wert der Variablen ``x`` auf ``13`` setzt bzw. die Variable auf einen Speicherbereich verweisen lässt, welcher den Wert ``13`` enthält.



```{figure} ../../figs/python-tutorial/variables/ram.png
---
width: 400px
name: fig-ram-language-properties
---
Der Arbeitsspeicher ist eine sehr lange Liste bestehend aus Bits.
```

```{figure} ../../figs/python-tutorial/variables/variable.png
---
width: 800px
name: fig-variable-language-properties
---
Eine Variable ist ein Name, der auf einen Speicherbereich (und damit auf ein Objekt) zeigt.
```

Hinweis:
Python verwaltet viele Daten als dynamische Strukturen. Solche Strukturen wachsen/schrumpfen zur Laufzeit und enthalten intern Referenzen auf ihre Elemente.



## Takeaways

- **Sie müssen Speicher nicht manuell verwalten**, aber Python verwaltet ihn natürlich trotzdem.
- **Variablennamen sind Referenzen auf Objekte** – welche Auswirkung das auf die Programmierung hat, sehen wir uns im folgenden Abschnitt an.