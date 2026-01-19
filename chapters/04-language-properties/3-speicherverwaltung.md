---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

(sec-memory-management)=
# Speicherverwaltung in Python: Referenzen und Garbage Collection

Im Kapitel [`chapters/03-computer-sciences-basics/3-programmierkonstrukte.md`](../03-computer-sciences-basics/3-programmierkonstrukte.md) haben wir *Zeiger* schon kurz erwähnt.
Vereinfacht gesagt: Ein Zeiger ist **eine Adresse im Speicher** – also ein Wert, der angibt, *wo* ein Objekt liegt.

Zurück zur typischen Aussage: „In Python gibt es keine Zeiger – Speicher ist kein Thema.“

Sie müssen in Python tatsächlich **keinen Speicher manuell reservieren oder freigeben** (wie z.B. in C mit `malloc`/`free`). Diese Aufgabe übernimmt die Python‑Runtime (inklusive Garbage Collection).


Zur Aussage „In Python gibt es keine Zeiger“:
Python arbeitet intern natürlich mit Speicheradressen. Für Sie erscheinen sie als **Referenzen** – Namen „zeigen“ auf Objekte.
Wie dieses Referenz‑/Objektmodell funktioniert, steht im Kernabschnitt [Python‑Datenmodell: Objekte, Namen und Referenzen](sec-object-model).

## Was bedeutet „Python verwaltet Speicher automatisch“ konkret?

In der Praxis heißt das:

- **Allokation**: Wenn neue Objekte entstehen, reserviert die Runtime Speicher dafür.
- **Freigabe**: Wenn Objekte nicht mehr erreichbar sind, kann ihr Speicher wieder freigegeben werden.

Wie genau das passiert, hängt von der Python‑Implementierung ab.
In **CPython** (der üblichsten Implementierung) passiert das grob so:

- **Referenzzählung (reference counting)**: Jedes Objekt weiß, wie viele Referenzen auf es zeigen. Fällt der Zähler auf 0, kann das Objekt sofort freigegeben werden.
- **Zyklus‑Garbage‑Collector**: Referenzzählung allein findet *Zyklen* nicht (Objekte, die sich gegenseitig referenzieren). Ein zusätzlicher GC erkennt solche Zyklen und räumt sie auf.

## Warum merkt man das im Code trotzdem?

Auch wenn Sie Speicher nicht manuell verwalten, beeinflusst das Modell Ihr Programmierverhalten:

- Viele Datenstrukturen sind **dynamisch** (wachsen/schrumpfen zur Laufzeit) und enthalten intern **Referenzen** auf ihre Elemente.
- Teilen mehrere Namen/Programmteile dieselben Objekte, werden Themen wie **Mutabilität** und **Seiteneffekte** relevant.

## Takeaways

- **Sie müssen Speicher nicht manuell verwalten**, aber Python verwaltet ihn natürlich trotzdem.
- In CPython: **Referenzzählung + Zyklus‑GC**.
- Das Referenz‑/Objektmodell ist die Basis dafür, dass **geteilte, mutierbare Objekte** Seiteneffekte ermöglichen (siehe [Seiteneffekte](./4-seiteneffekte.md)).