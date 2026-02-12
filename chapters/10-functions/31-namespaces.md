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

(sec-namespaces)=
# Namensräume und Sichtbarkeit (A)

Jeder *Name*, d.h. jede *Variable* in einem Programm hat einen sogenannten

+ *Scope* (Sichtbarkeitsbereich),
+ eine *Lebensdauer*,
+ und ist einem *Namensraum* zugeordnet.

Der Scope wird aus den gerade bestehenden Namensräumen bestimmt.

Bei einem Funktionsaufruf wird ein **lokaler Namensraum** eröffnet: alle Variablen und Parameter, die innerhalb der Funktion definiert werden, gehören zu diesem Namensraum und sind von außen nicht sichtbar.
Nach Beendigung der Funktion wird dieser Namensraum wieder freigegeben.

**Globale** Variablen existieren auf Modul-Ebene und sind in der ganzen Datei (bzw. dem ganzen Modul) sichtbar – außer dort, wo ein lokaler Name denselben Namen „überdeckt“.

Ein einfaches Beispiel:

```{code-cell} python3
x = 10  # global

def f():
    x = 5   # lokal – überdeckt das globale x innerhalb von f
    return x

print(f())   # gibt 5 zurück
print(x)     # gibt 10 zurück – globales x ist unverändert
```

Wollen wir innerhalb einer Funktion auf eine globale Variable **zugreifen** (ohne sie zu überschreiben), so ist das möglich – Python sucht in den umschließenden Namensräumen.
Wollen wir eine globale Variable **ändern**, müssen wir sie explizit mit ``global`` kennzeichnen (in der Praxis sollten Sie das sparsam einsetzen).

Das Verständnis von Namensräumen hilft beim Debuggen: Wenn eine Variable einen unerwarteten Wert hat, prüfen Sie, in welchem Namensraum sie definiert ist und ob sie vielleicht von einer anderen Variable gleichen Namens überdeckt wird.
