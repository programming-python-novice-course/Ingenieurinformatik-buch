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

(sec-logic-expressions)=
# Logische Operatoren (A)

Der obige *Ausdruck* ist aus weiteren Ausdrücken zusammengesetzt.
Er behinhaltet den *Ausdruck* ``and``, d.h., dem logischen UND ($\land$).
Dieser erwartet auf der linken und rechte Seite jeweils einen Wahrheitswert (*boolschen Ausdruck*).
Zum Beispiel, liefern [Vergleichsoperatoren](sec-python-operator-compare) *boolsche Ausdrücke* zurück.

```{code-cell} python3
x = True
y = False

x and y
```

``x and y`` ergibt genau dann ``True`` wenn die Auswertung von ``x`` und ``y`` jeweils ``True`` ergeben.
Wir haben diese Operatoren bereits im Abschnitt [Manipulation](sec-manipulation) besprochen.
Sie werden in Computern durch Gatter realisiert.
Lassen Sie uns diese nochmals zusammenfassen:

| Operator  | Beschreibung                                               |
| :-------: | :--------------------------------------------------------- |
|  `not x`  | ist `True` genau dann wenn `x == False`.                   |
| `x and y` | ist `True` genau dann wenn `x == True` und `y == True`.    |
| `x or y`  | ist `True` genau dann wenn ``x == True`` oder `y == True`. |
