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

# Test-Frameworks (V)

Julia erkundigt sich zuerst, welches Test-Framework in der Firma verwendet wird. Sie will möglichst früh prüfen können, ob ihre Eigenentwicklung das gewünschte Verhalten hat.


Ein *Test-Framework* ist ein Softwarepaket, das beim Schreiben, Ausführen und Auswerten von Tests unterstützt (z. B. Tests entdecken, Ergebnisse übersichtlich anzeigen, Fehlermeldungen gut lesbar machen).

Für Python sind u. a. diese Optionen verbreitet:

- `unittest`: Teil der Python-Standardbibliothek, läuft ohne Zusatzinstallation.
- `pytest`: sehr beliebt, weil Tests kurz und gut lesbar sind (z. B. via `assert`).
- Notebook-Variante: In Jupyter-Notebooks nutzt man häufig `ipytest`, um `pytest` bequem „in Zellen“ laufen zu lassen – das tun wir hier.


Im Folgenden verwenden wir `ipytest` für ein minimales Beispiel.



```{code-cell} python3
# `autoconfig()` richtet die Ausgabe/Ergebnisdarstellung ein,
import ipytest
ipytest.autoconfig()
```

Julia startet mit einer kleinen Funktion `mean()` und schreibt zwei Tests:

- `test_mean_of_three_values`
- `test_mean_raises_on_empty_list`

Jeder Test beschreibt kurz, was er prüfen soll.

```{code-cell} python3

# Beispiel-Funktion (das wäre "Produktionscode", den wir testen wollen)
def mean(values):
    """Sehr einfache Beispiel-Funktion."""
    return sum(values) / len(values)


# WICHTIG: pytest erkennt Tests u. a. an Namen, die mit `test_` beginnen.
# Diese Funktion wird daher als Test gesammelt und ausgeführt.
def test_mean_of_three_values():
    # einfaches Zahlenbespiel dessen Ergebnis wir kennen
    assert mean([1, 2, 3]) == 2


# Auch das ist ein pytest-Test (Name beginnt mit `test_`).
# `pytest.raises(...)` prüft, ob beim Aufruf die erwartete Exception entsteht.
def test_mean_raises_on_empty_list():
    import pytest # nur in dieser Funktion benötigt
    # Soll sicherstellen, dass im Fall der leeren Liste der korrekte Fehler zurückgegeben wird. 
    with pytest.raises(ZeroDivisionError):
        mean([])

# Startet `pytest` und lässt alle gefundenen Tests laufen.
# (ipytest sammelt den Code aus dem Notebook-Kontext und ruft dann pytest auf.)
ipytest.run()
```


```{admonition} Hinweis
:class: remark

Woher weiß das System, was ein Test ist? Nicht IPython entscheidet das, sondern `pytest`. `ipytest` ist nur die „Brücke“, um `pytest` bequem aus einem Notebook heraus zu starten. `pytest` findet Tests über Konventionen, z. B. Funktionen, deren Name mit `test_` beginnt.
```


