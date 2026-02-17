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

# Datenmodell 
(sec-object-model)=

Zahlreiche Eigenschaften von Python sind direkte Folgen von Pythons Datenmodell. Deshalb gehen wir hier kurz auf Pythons Datenmodell ein. 

Wie Sie schon wissen, sind Daten für den Computer immer nur **Bits**. Ob eine Bitfolge „eine Zahl“ oder „Text“ bedeutet, hängt von ihrer **Interpretation** ab. 

Genau hier kommt das Datenmodell ins Spiel: In Python werden Werte als Objekte modelliert. Ein Objekt hat

- (mindestens) einen Wert, 
- einen Typ und 
- eine Identität.

Variablennamen sind keine „Speicherzellen“, sondern Bindungen auf solche Objekte. Der Typ des Objekts bestimmt, wie die zugrunde liegenden Bits zu interpretieren sind (z.B. als `int` oder als `str`).

Sehen wir uns hierzu das folgende Code‑Beispiel an:

```{code-cell} ipython3
x = 100
identitaet = id(x)
print("id(x):", identitaet)  # Identität (Adresse/Referenzwert)
print("x:", x)               # Wert
```

Auf den ersten Blick wirkt es so, als würde der Zahlenwert *100* „in“ der Variable `x` abgespeichert werden.
Unter der Haube passiert aber etwas anderes: `x` ist **nur ein Name**, der an ein `int`‑Objekt **gebunden** wird.
Dieses Objekt hat einen Wert („100“), einen Typ (`int`) und eine Identität („dieses konkrete Objekt“).
Diese Identität können Sie mit `id(...)` sichtbar machen (in CPython ist das oft die Speicheradresse).


```{figure} ../../figs/03-language-properties/overview/object.png
---
width: 550px
name: fig-python-object-model
---
Ein Objekt hat eine Identität (`id`) und einen Wert; Variablennamen sind Bindungen auf Objekte.
```

Das Zuweisungszeichen `=` ist in Python eine **Zuweisung/Bindung** (kein mathematisches Gleichheitszeichen).
`x = 13` bedeutet: „Binde den Namen `x` an das Objekt `13`“ – nicht „lege 13 in eine Variable ab“.

```{figure} ../../figs/03-language-properties/python-tutorial/variables/ram.png
---
width: 400px
name: fig-ram-language-properties
---
Der Arbeitsspeicher ist eine sehr lange Liste bestehend aus Bits.
```

**Name und Wert**

Im Speicher liegen letztlich Bits. Interessant ist dabei: **Mehrere Namen können auf dasselbe Objekt zeigen**.
Beispiel: Wir weisen `25` den Variablen `x` und `z` zu. Im Arbeitsspeicher könnte das wie in {numref}`fig-variable-language-properties` gezeigt aussehen.

```{figure} ../../figs/03-language-properties/xzadresse.png
---
width: 800px
name: fig-variable-language-properties
---
Initialisierung und Zuweisung der Variablen x und z mit dem Wert 25. Die Adresse beider Variablen ist identisch.
```

**Identität**

Das obige Beispiel zeigt **Identität**: mehrere Namen können auf **dasselbe Objekt** verweisen (gleiche Identität). Es kann aber auch sein, dass der Wert gleich ist, aber in **zwei verschiedenen Objekten** gespeichert ist - dann spricht man von Gleichheit.

- `==` prüft (typischerweise) **Wert/Gleichheit**.
- `is` prüft **Identität** („ist es wirklich dasselbe Objekt?“).

```{code-cell} ipython3
a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a == b, a is b)  # gleicher Inhalt, gleiche Identität
print(a == c, a is c)  # gleicher Inhalt, aber andere Identität
```
**Typ**

Nachdem wir gesehen haben, wie Werte im Arbeitsspeicher abgelegt werden, betrachten wir nun die Typinformation.
Grundidee: Auch der Typ muss irgendwo repräsentiert sein – er ist Teil der Daten, mit denen das Laufzeitsystem arbeitet.
Wie genau das im Speicher aussieht, kann je nach Datentyp und Implementierung variieren, aber „Typ“ entsteht nicht automatisch, sondern muss mitverwaltet werden.


```{figure} ../../figs/03-language-properties/speicheranordnung.png
---
width: 800px
name: fig-speicheranordnung-language-properties
---
Speicheranordnung von Werten verschiedener Datentypen. 
```

```{admonition} Klarstellung
:class: note
- Namen (Variablen) referenzieren Objekte (Binding), Python ist nicht „Variablen = Speicherzellen“.
- Mit `is` prüfen Sie Identität (dasselbe Objekt), mit `==` Gleichheit (gleicher Wert).
```

