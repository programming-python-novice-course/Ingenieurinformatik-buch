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

# Anwendungsbeispiel

Stellen Sie sich vor: Sie arbeiten in einem Unternehmen und erzeugen regelmäßig programmatisch Grafiken, z.B. für Reports.


```{code-cell} python3
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([0, 1, 2, 4, 6], [2, 1, 3, 0, 1])
ax.set_title("Messreihe")
plt.show()
```

Nun möchte die Firma, dass ab sofort in jeder neuen Grafik das Firmenlogo oben rechts eingeblendet wird:

```{figure} ../../figs/00-general/logo-mini.png
---
width: 140px
name: fig-logo-mini
---
Beispiel eines Firmenlogos, das in jeder Grafik erscheinen soll.
```