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

# Kontrollstrukturen (A)

```{admonition} Hinweis
:name: def-control-structure
:class: definition

In diesem Kapitel geben wir eine Einführung zu Kontrollstrukturen, damit Sie im Praktikum schon einmal losarbeiten können. Details zu Kontrollstrukturen lernen wir dann im Kapitel [Kontrollstrukturen](sec-control-statements) kennen.
```

Kontrollstrukturen sind etwas, das uns im Alltag ständig begegnet. Sie bestimmen, wie ein Ablauf aussieht.

Schauen Sie sich als Beispiel eine Baumstammproduktion an:
- Im ersten Schritt wird geprüft, ob der Baum lang genug ist. Falls ja, geht es weiter in die Produktion. Falls nein, wird der Baum anderweitig verwertet.
- Im zweiten Schritt wird der Baum solange in gleich lange Abschnitte zerteilt, bis nur noch ein Reststück übrig bleibt.
- Im dritten Schritt werden die Abschnitte nach Größe in verschiedene Kisten sortiert.

Wichtig dabei: Die Schritte erfolgen nacheinander und bauen aufeinander auf.


```{figure} ../../figs/02-computer-sciences-basics/kontrollstruktur-bieber.png
---
width: 700px
name: fig-kontrollstruktur-bieber
---
Kontrollstrukturen – Überblick. Oben: Fallunterscheidung (Verzweigung), Mitte: Schleife. Unten: Match-case.
```

Ein einfaches Computerprogramm (ohne Parallelisierung) macht nichts anderes: Es führt nacheinander Schritte aus. Innerhalb dieser Schritte kann es Wiederholungen geben („Zerteile solange, bis …“) oder auch Fallunterscheidungen („Wenn größer, dann …“).


Wir unterscheiden:

- Fallunterscheidungen: führen Code nur aus, wenn eine Bedingung erfüllt ist.
- Wiederholung: führen Code mehrfach aus (als Schleife oder als Rekursion).
- Funktionen: kapseln Teilaufgaben und machen Code wiederverwendbar.

```{figure} ../../figs/02-computer-sciences-basics/functionbieber.png
---
width: 700px
name: fig-function-bieber
---
Funktionen – das Bündeln der Äste (Funktion) folgt immer dem gleichen Ablauf (Äste greifen, anordnen, Schnur herumwickeln, prüfen). Wie groß das resultierende Bündel (Ergebnis) ist, hängt von der Astanzahl (Übergabeparameter) ab.
```


(sec-if-else)=
## Fallunterscheidungen (bedingte Ausführung)

Eine Fallunterscheidung führt Code nur dann aus, wenn eine Bedingung erfüllt ist. Die Bedingung wird zur Laufzeit zu `True` oder `False` ausgewertet.


```{code-cell} python3
stamm_laenge = 20  # 20 m
if stamm_laenge < 15:
    print("Zu kurz. Wird anderweitig verwertet.")
else:
    print("Passt. Ab damit in die Produktion.")
```

(sec-repetition-and-recursion)=
## Wiederholung

Wiederholung bedeutet: Wir schreiben einen Ablauf einmal und führen ihn mehrfach aus. So können Programme abhängig von der Eingabe unterschiedlich viele Schritte machen (z. B. „solange, bis …“).

Zwei zentrale Formen sind:

1. Iteration (Schleifen): Wiederholung über `for` oder `while`.
   - bestimmt: Die Anzahl der Durchläufe ist vorab bekannt (typisch: `for`).
   - unbestimmt: Die Anzahl hängt von einer Bedingung ab (typisch: `while`).
2. Rekursion: Wiederholung durch Selbstbezug.

```{admonition} Hinweis: Rekursion
:class: note

Rekursion bedeutet grob: Man wendet „denselben Trick“ immer wieder auf kleinere Teile an, bis es nicht mehr weitergeht.

Beispiel (Biber und Stamm):

- Der Biber halbiert den Stamm.
- Jede Hälfte halbiert er wieder.
- Die entstehenden Stücke halbiert er wieder.
- … bis die Stücke klein genug sind.

In diesem Kapitel lassen wir das bewusst als Idee stehen und konzentrieren uns auf Iteration (Schleifen). Details finden Sie im Kapitel [Rekursion](sec-recursive-functions).
```

(sec-iteration)=
### Iteration

Iteration wiederholt einen Codeblock mithilfe einer Schleife. Typisch sind `for` (wiederhole über eine Folge von Werten) und `while` (wiederhole, solange eine Bedingung gilt).

In dem folgenden Beispiel haben wir einen 25m langen Baum bekommen. Den sollen wir in 4m lange Teilstücke zersägen. Wir zersägen solange, bis das Reststück kürzer als 4m ist.

Zum Zersägen nutzen wir eine `while`‑Schleife (unbestimmte Wiederholung) und zählen wie viele Teilstücke wir erhalten:

```{code-cell} python3
stamm_laenge = 25  # 25 m
stueck_laenge = 4  # 4 m

anzahl_stuecke = 0
while stamm_laenge >= stueck_laenge:  # solange noch ein ganzes Stück möglich ist ...
    neue_stamm_laenge = stamm_laenge - stueck_laenge  # ... sägen wir eines ab
    stamm_laenge = neue_stamm_laenge
    anzahl_stuecke = anzahl_stuecke + 1

print("Stücke:")
print(anzahl_stuecke)

print("Rest (in m):")
print(stamm_laenge)
```

Nach dem Zersägen muss jeder einzelne Holzscheit noch auf sein Gewicht geprüft werden.
Nachdem wir nun wissen, wie viele Teilstücke wir haben, können wir eine Schleife mit bekannter Anzahl an Durchläufen nutzen: die `for`‑Schleife.

Im folgenden Beispiel übernehmen Sie den Mess-Biber. Für jedes Teilstück geben Sie ein Gewicht ein. Basierend auf Ihrer Eingabe erhalten Sie eine Rückmeldung, ob das Gewicht in Ordnung ist.


```{code-cell} python3

# anzahl_stuecke = 10

for i in range(anzahl_stuecke):
    print(f"Starte Prüfung des Teilstücks mit der Nummer {i}")
    gewicht = float(input("    Bitte geben Sie das Gewicht in kg an (bitte Zahl eingeben): "))

    if gewicht < 2.0:
        print(f"    Das Gewicht ist zu gering! Bitte entsorgen Sie das Teilstück {i}.")
    else:
        print(f"    Alles super! Lege Teilstück {i} zum Ablagestapel.")

    print(f"--------------------------------------------------------")

```

Wichtig an diesem Beispiel ist zu erkennen, wie die `for`-Schleife aufgebaut ist.

`range(anzahl_stuecke)` erzeugt die Zahlen von 0 bis `anzahl_stuecke - 1`.
Die Variable `i` nimmt dann der Reihe nach diese Werte an.

Beispiel: `range(5)` bedeutet: 0, 1, 2, 3, 4


(sec-functions-control-structures)=
## Funktionen

Funktionen kapseln Teilaufgaben: Sie geben einem Ablauf einen Namen, können Parameter annehmen und (typisch) ein Ergebnis zurückgeben. So wird Code wiederverwendbar und Programme werden übersichtlicher.

Im folgenden Beispiel nutzen wir eine Funktion, um Äste zu bündeln.
Als Eingabe erhalten wir die Anzahl der Äste.
Als Ausgabe erzeugen wir eine Zeichenkette, die die Äste visuell darstellt. Jeder Ast wird durch `|` dargestellt.

Ein Bündel von 3 Ästen soll so aussehen: `> ||| <`
Ein Bündel von 5 Ästen soll so aussehen: `> ||||| <`


```{code-cell} python3
def create_bundle(n: int) -> str:
    _bundle = "> "
    for i in range(n):
        _bundle = _bundle + "|"
    _bundle = _bundle + " <"
    return _bundle


print("Mein Damm:")

print(create_bundle(5))
print(create_bundle(12))
print(create_bundle(44))
print(create_bundle(17))
print(create_bundle(6))
print(create_bundle(20))

```

```{admonition} Aufgabe
:class: note

Schreiben Sie ein kleines Python-Programm, das Teilstücke eines Stamms in die Kisten `S`, `M` oder `L` einsortiert.

- Die Anzahl der Teilstücke ist bekannt (Variable `anzahl_stuecke`).
- Für jedes Teilstück fragen Sie den Nutzer nach dem Durchmesser (in m).
- Geben Sie anschließend aus, ob das Teilstück in `S`, `M` oder `L` gehört:
  - `S`: 0.1 m bis 0.2 m
  - `M`: größer als 0.2 m bis 0.3 m
  - `L`: größer als 0.3 m
```

Nutzen Sie dafür die folgende Code-Zelle:

```{code-cell} python3

anzahl_stuecke = 6


```


```{figure} ../../figs/02-computer-sciences-basics/control-structures.png
---
width: 700px
name: fig-control-structures
---
Überblick über grundlegende Kontrollstrukturen
```
