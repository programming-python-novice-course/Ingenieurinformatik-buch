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

(sec-functions)=
# Funktionen

Sie haben bereits Funktionen verwendet – etwa `print()`, `range()`, `len()` oder `create_bundle()` aus dem [Kapitel Kontrollstrukturen](sec-functions-control-structures).
Ohne Funktionen müssten Sie denselben Code immer wieder hinschreiben.

Stellen Sie sich vor, Sie sollen Flächen und Volumina berechnen – für Kreise, Zylinder, verschiedene Bauteile.
Statt die Formel π·r² an jeder Stelle neu zu tippen, definieren Sie sie einmal und rufen sie auf:

```{code-cell} python3
def kreisflaeche(radius):
    """Berechnet die Fläche eines Kreises."""
    return 3.14159 * radius ** 2

# Einmal definiert, mehrfach genutzt
print(kreisflaeche(5))
print(kreisflaeche(2.5))
print(kreisflaeche(10))
```

Funktionen bündeln Arbeitsschritte, nehmen Parameter entgegen und liefern ein Ergebnis.
So vermeiden Sie Wiederholung und strukturieren Ihren Code.
Gleiches gilt für komplexere Aufgaben: Sie zerlegen ein Problem in Teilprobleme, lösen jedes in einer Funktion.

Beispiel: Die ersten ``n`` Primzahlen berechnen.
Sie gehen davon aus, es gäbe bereits eine Funktion ``is_prime(k)`` – und schreiben zuerst ``prime_list(n)``:

```{code-cell} python3
def is_prime(k):
    pass  # noch nicht implementiert

def prime_list(n):
    primelist = []
    k = 1
    while len(primelist) < n:
        if is_prime(k):
            primelist.append(k)
        k += 1
    return primelist
```

Danach füllen Sie ``is_prime``:

```{code-cell} python3
def is_prime(k):
    if k == 1:
        return False
    if k == 2:
        return True
    for i in range(2, k):
        if k % i == 0:
            return False
    return True

def prime_list(n):
    primelist = []
    k = 1
    while len(primelist) < n:
        if is_prime(k):
            primelist.append(k)
        k += 1
    return primelist

prime_list(20)
```

In diesem Kapitel lernen Sie die Syntax (``def``, Parameter, ``return``), Namensräume und Seiteneffekte, Rekursion sowie einen Überblick über fortgeschrittene Konzepte.
Letztere (Lambdas, verschachtelte Funktionen, First-Class) werden im [Expertenwissen](sec-anonymous-function) vertieft.

```{admonition} Lernziele
::class: learngoals

- **Basis:** Eigene Funktionen definieren und aufrufen (Parameter, Argumente, Rückgabewert), sinnvolle Schnittstellen gestalten.
- **Basis:** Ablauf von Funktionsaufrufen nachvollziehen und typische Fehler systematisch debuggen.
- **Basis:** Grundlagen von Namensräumen/Scope verstehen und erklären, welche Variablen wo sichtbar sind.
- **Vertiefung:** Rekursion anwenden und fortgeschrittene Konzepte (Lambdas, First-Class) einordnen – Details im [Expertenwissen](sec-anonymous-function).
```
