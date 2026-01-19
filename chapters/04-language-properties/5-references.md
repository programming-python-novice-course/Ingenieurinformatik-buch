# „Python ist object-by-reference.“


Python nutzt einen Übergabemechanismus, den man als **object references** oder **call-by-sharing** bezeichnet: Funktionsparameter bekommen eine Referenz auf ein Objekt. Entscheidend ist dann, ob Sie das Objekt **mutieren** oder ob Sie den Namen **neu binden**.

## Was steckt dahinter?

Stellen Sie sich vor, Sie möchten einem Freund ein Buch geben:

1. **Kopie geben**: Ihr Freund bekommt eine Kopie. Änderungen betreffen nicht Ihr Original.
2. **Adresse geben**: Ihr Freund bekommt die Adresse – Änderungen passieren am Original.
3. **Adresse + „veränderbar oder nicht?“**: Ihr Freund bekommt die Adresse, aber ob er etwas ändern kann, hängt davon ab, ob das Buch veränderbar ist.

Fall 3 ist eine gute Analogie für Python:

- Beim Funktionsaufruf wird **kein Objekt kopiert**, sondern eine **Referenz** übergeben.
- Bei **mutierbaren Objekten** (z.B. `list`, `dict`) können Änderungen „durchschlagen“.
- Bei **immutablen Objekten** (z.B. `int`, `str`, `tuple`) können Sie das Objekt nicht „in place“ ändern – Sie können nur einen Namen auf ein neues Objekt zeigen lassen.

```{admonition} Profiwissen
:name: uebergabemechanismen
:class: tip
Neben Python‑„object references“ gibt es in anderen Sprachen oft diese Vereinfachungen:

- **Pass by Value (Wertübergabe)**: Kopie wird übergeben; Änderungen in der Funktion betreffen das Original nicht.
- **Pass by Reference (Referenzübergabe)**: Eine Referenz/Adresse wird so übergeben, dass die Funktion auch den *Aufrufer‑Bezug* direkt verändern kann (z.B. C++ mit `&`).
Python liegt dazwischen: Referenz aufs Objekt ja, aber das „Neu‑Binden“ eines Parameters wirkt nicht auf den Aufrufer zurück.
```

## Typische Stolperstelle: Mutation vs. Rebinding

```python
def mutiere(liste):
    liste.append("X")      # Mutation: Objekt wird verändert

def binde_neu(liste):
    liste = liste + ["X"]  # Rebinding: Name zeigt auf neues Objekt

a = ["A"]
mutiere(a)
print(a)  # ['A', 'X']  -> Original wurde verändert

b = ["A"]
binde_neu(b)
print(b)  # ['A']       -> Original unverändert
```

## Richtigstellung (Takeaways)

- Python ist **nicht** „pass-by-reference“ wie in C++.
- Python übergibt **Referenzen auf Objekte** (call-by-sharing).
- **Mutation** kann sich auf den Aufrufer auswirken; **Rebinding** eines Parameters nicht.
- Viele „Seiteneffekte“ entstehen genau aus dieser Kombination von Referenzen + mutierbaren Objekten.
