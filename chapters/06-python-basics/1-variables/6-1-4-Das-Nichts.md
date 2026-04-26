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

# Das Nichts

Um einer *Variablen* "keinen" Wert zuzuweisen gibt es das Signalwort ``None``.
Dies [repräsentiert](sec-representation) "keinen Wert" bzw. das Nichts.
Dennoch besitzt die *Variable* einen Wert, eben den Wert ``None``.

```{code-cell} python3
z = 0
z + 20
z = None
z
```

Die Ausgabemechanik des Notebooks ignoriert ``None``, jedoch können wir die *Variable* in eine Zeichenkette umwandeln und dann ausgeben:

```{code-cell} python3
z = None
print(id(z))
print(z)
```

``None`` wird uns wieder begegnen, wenn wir uns ``Python``-Funktionen ansehen.
Vorab sei gesagt, dass falls eine [Funktion](sec-functions) keinen Rückgabewert besitzt, sie ``None`` zurückliefert.
