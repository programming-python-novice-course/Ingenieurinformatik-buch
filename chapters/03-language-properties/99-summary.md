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

# Takeaways

- **Syntax zählt (wirklich)**: In Python ist Einrückung Teil der Syntax („Off-side rule“) und bestimmt Codeblöcke und damit das Programmverhalten.
- **„Interpretiert“ ist eine Vereinfachung**: Python (z. B. CPython) übersetzt Quelltext typischerweise in Bytecode und führt ihn dann aus (Hybrid aus Übersetzung + Ausführung).
- **Multiparadigmen-Sprache**: Python unterstützt prozedurales/strukturiertes, funktionales und objektorientiertes Programmieren – wichtig ist, welches Modell das Problem am klarsten beschreibt.
- **Objektmodell**: Werte sind Objekte mit **Typ**, **Wert** und **Identität**; Variablennamen sind Bindungen auf Objekte. `==` prüft Gleichheit (Wert), `is` Identität (dasselbe Objekt).
- **Typing**: Python ist **dynamisch** typisiert (Prüfung zur Laufzeit) und **stark** typisiert (wenig implizite „Magie“-Konvertierungen). Type Hints helfen bei Lesbarkeit und Tooling, ändern aber standardmäßig nicht die Laufzeit.
- **Seiteneffekte & Mutabilität**: Funktionen können Seiteneffekte haben, weil oft Referenzen auf (mutierbare) Objekte geteilt werden (*call-by-sharing*). Ob ein Aufruf „etwas mitverändert“, hängt stark vom Datentyp ab.
- **Speicher & Repräsentation**: Speicherverwaltung passiert automatisch (in CPython grob: Referenzzählung + Zyklus-GC). Ganze Zahlen (`int`) können in Python sehr groß werden (kein klassischer Überlauf wie bei fester Bitbreite, z. B. `numpy.int32`).


**Das „Zen of Python“**

Zum Abschluss werden wir noch einen Blick auf das "Zen of Python".

- Es ist eine Sammlung kurzer Leitgedanken („Aphorismen“) für **lesbaren, wartbaren Python-Code** (von Tim Peters). 
- Es sind keine harten Regeln, aber ein sehr guter Kompass für Stil- und Designentscheidungen. 

Sie können es direkt in Python anzeigen lassen:

```{code-cell} python3
import this
```
