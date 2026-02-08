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

# Beispiel: Ticketpreis (V)

Wir modellieren ein (vereinfachtes) Ticket-System: Aus *Alter* und einem *Status* bestimmen wir eine Ticket-Kategorie.

- **Eingaben**: `alter` (in Jahren), `status` (z. B. `"schueler"`, `"student"`, `"keiner"`)
- **Ausgabe**: Ticket-Kategorie als Text

**Regeln (Beispiel)**

- `alter < 6`: `"gratis"`
- `6 <= alter <= 17`: Schüler:innen `"stark ermäßigt"`, sonst `"ermäßigt"`
- `18 <= alter <= 64`: Studierende `"ermäßigt"`, sonst `"normal"`
- `alter >= 65`: `"senior"`

```{code-cell} python3
alter = 20
status = "student"  # z.B. "schueler" | "student" | "keiner"

if alter < 6:
    ticket = "gratis"

elif alter <= 17:
    if status == "schueler":
        ticket = "stark ermäßigt"
    else:
        ticket = "ermäßigt"

elif alter <= 64:
    if status == "student":
        ticket = "ermäßigt"
    else:
        ticket = "normal"

else:
    ticket = "senior"

ticket
```

```{admonition} Was passiert, wenn ein Senior „student“ angibt?
:class: question

In diesem Beispiel **gewinnt die Altersregel**: Sobald `alter >= 65` ist, landen wir im `else`-Zweig und bekommen immer `"senior"`, egal welcher `status` angegeben wurde.
```

```{exercise} Ticketpreis als `match`/`case`
:label: exercise-ticketpreis-match-case

Schreiben Sie die gleiche Logik als `match`/`case` (Pattern Matching).

Testen Sie Ihr Programm mindestens mit diesen Fällen:

- `alter = 5`, `status = "student"`  → `"gratis"`
- `alter = 16`, `status = "schueler"` → `"stark ermäßigt"`
- `alter = 16`, `status = "keiner"` → `"ermäßigt"`
- `alter = 30`, `status = "student"` → `"ermäßigt"`
- `alter = 30`, `status = "keiner"` → `"normal"`
- `alter = 70`, `status = "student"` → `"senior"`
```
