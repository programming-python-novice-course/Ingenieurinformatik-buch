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

# Statistiken (S)

Zum Schluss macht sich Julia an den letzten Baustein des Fallbeispiels: die statistische Auswertung der NO₂-Messwerte.

Ziel ist eine tabellarische Übersicht *ähnlich zu* `pandas.describe()` – aber ohne Pandas (also ohne externe Bibliotheken): Anzahl, Mittelwert, Standardabweichung, Minimum/Maximum sowie Quartile (25 %, Median, 75 %).

## Quantile: Idee 

Julia startet mit der Berechnung der Quantile. Sie rechechiert erst einmal was das ist und findet folgendes heraus:
Grundsätzlich teilen Quantile eine (aufsteigend) **sortierte** Zahlenliste in Abschnitte.

- **25 %-Quantil (Q1)**: 25 % der Werte liegen links davon (oder sind kleiner/gleich).
- **50 %-Quantil (Median)**: „mittlerer“ Wert (bzw. bei gerader Anzahl der Mittelwert der zwei mittleren Werte).
- **75 %-Quantil (Q3)**: 75 % der Werte liegen links davon.

**Beispiel**

Wir haben 10 Werte:
```text
82, 91, 12, 92, 63, 9, 28, 55, 96, 97
```

Wir sortieren sie:
```text
9, 12, 28, 55, 63, 82, 91, 92, 96, 97
```


**25 %-Quantil (Q1)**

25% heißt: „Ein Viertel der Werte soll links davon liegen.“
In unserem Zahlenbeispiel mit 10 Zahlenwerten, wäre das der 2,5. Wert. Den gibt es aber leider nicht. Also was sollen wir tun? Julia entscheidet sich einfach die Zahl an der 3. Position zu nehmen. In der Literatur ist diese Verfahren, bei dem also die nächst höhere Position verwendet wird, als Nearest-Rank-Verfahren bekannt. Es gibt auch andere Strategien.

```text
9, 12, [28], 55, 63, 82, 91, 92, 96, 97
```
In unserem Beispiel ist das 25 %-Quantil = 28.


```{admonition} Hinweis
:class: remark

Es gibt verschiedene Quantil-Definitionen. Je nach Definition bekommt man auch andere Ergebnisse. Die Idee der Nearest-Rank-Definition ist:
- Idee: „Es gibt keine halbe Position – wir nehmen den nächsten sinnvollen Messwert.“
- Regel: Nimm das **kleinste Element**, bei dem „mindestens \(q\) %“ erreicht sind.
Im Zweifel: fragen Sie immer nach, mit welchem Verfahren die Ergebnisse bestimmt wurden.
```


**50 %-Quantil (Median)**

50 % heißt: „Die Hälfte der Werte liegt links, die Hälfte rechts.“
Bei 10 Werten gibt es keinen einzelnen mittleren Wert, sondern zwei in der Mitte.

```text
9, 12, 28, 55, [63, 82], 91, 92, 96, 97
```

Der Median liegt zwischen diesen beiden:
(63 + 82) / 2 = 72,5

In unserem Beispiel ist das 50 %-Quantil (Median) = 72,5.

**75 %-Quantil (Q3)**

75 % heißt: „Drei Viertel der Werte sollen links davon liegen.“
Drei Viertel von 10 sind 7,5 Werte → Nearest-Rank nimmt den nächsten ganzen Rang: \(k = \lceil 0{,}75 \cdot 10 \rceil = 8\).

```text
9, 12, 28, 55, 63, 82, 91, [92], 96, 97
```

In unserem Beispiel ist das 75 %-Quantil = 92.

```{admonition} Versteckte Komplexität
:::class: note
Quantile können unterschiedliche definiert sein. Die Ergebnisse hängen von der gewählten Methode ab. Was wohl pandas intern verwendet hat? Finden Sie es heraus!
```