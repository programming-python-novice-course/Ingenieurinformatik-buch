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

(sec-comprehension)=
# Comprehensions 

Oft möchten wir aus einer bestehenden Datenstruktur eine neue erzeugen:
Wir transformieren Werte, filtern Elemente heraus oder bauen eine neue Struktur auf.
Mit *Comprehensions* bietet ``Python`` dafür eine sehr kompakte [Syntax](def-syntax).

**Aus Daten werden neue Daten **

Eine typische Schleifen-Form, die Sie vielleicht schon geschrieben haben, sieht so aus:

```{code-cell} python3
numbers = list(range(5))

result = []
for x in numbers:
    result.append(x * x)

result
```
Was ist hier passiert? Wir haben eine neue Datenstruktur, eine Liste, erzeugt. Diese haben wir dann schrittweise befüllt.

Mit einer List-Comprehension können wir das als einen Ausdruck schreiben:

```{code-cell} python3
numbers = list(range(5))

[x * x for x in numbers]
```

```{admonition} Merke
Materialisierende Comprehensions eignen sich zur Transformation von Datenstrukturen, wenn Sie in *einer* Zeile klar ausdrücken können: „nimm jedes Element und mache etwas damit (eventuell unter einer bestimmten Voraussetzung)“.
Wenn mehrere Schritte, Nebenwirkungen oder Debug-Ausgaben nötig sind, ist eine normale Schleife oft besser lesbar!
```

```{admonition} Expertentipp: Generator-Expressions (Werte erst bei Bedarf)
:class: dropdown

Eine Generator-Expression (z. B. ``(x*x for x in numbers)``) erzeugt **keine** neue Datenstruktur,
sondern einen *Datenstrom* von Werten, der erst beim Iterieren berechnet wird.
Das spart nicht nur Speicher, sondern kann auch **Arbeit vermeiden** (z. B. wenn man früh abbrechen kann)
und ist praktisch für **Pipelines**: Datenquelle hier, Verarbeitung dort.
```


