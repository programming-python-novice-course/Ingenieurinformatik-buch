(sec-information-processing)=

# Python verstehen


In diesem Teil der Vorlesung geht es darum, Python zu verstehen. Was ist damit gemeint? Jede Programmiersprache hat bestimmte Eigenschaften. Diese sollten Sie kennen! Viele Programmierfehler oder ungute Strukturen entstehen nämlich dadurch dass jemand die Eigenschaften seiner Sprache nicht kennt. Zurück zu unserem Autobeispiel: sowohl ein elektoauto als auch ein gangschaltauto haben einen schalthebel. die bedienung ist aber sehr unterschiedlich: einmal benutzen sie den schalthebel nur um einen modus (vorwärts, rückwärts, parken) einzustellen, und beim anderen schalten sie gänge, die unterschiedliche geschwindigkeiten erlauben. ähnlich ist es mit programmiersprachen. Python bietet ihnen sehr viel komfort! Im autobeispiel wäre python vllt. das e-auto, bei dem sie nicht mehr manuell schalten müssen. Allerdings werden sie in ihrem berufsalltag nie mit nur einer sprache in berührung kommen. vielleicht müssen sie plötzlich doch schalten lernen? 

Deshalb: Sie können eine Programmiersprache nur dann effizient anwenden, wenn Sie ihre Eigenschaften kennen. Kennen Sie diese nicht suchen sie entweder nach Lösungen die keiner braucht (ich suche im eauto verzweifelt nach den gängen am schalthebel) ODER sie machen eventuell fehler (sie fahren im gangschalter nur im ersten gang, weil sie nicht wissen, dass man schalten kann). Das wollen wir vermeiden ;)

In diesem Teil der Vorlesung werden wir daher Eingenschaften von Python kennenlernen. Insgesamt 10 Stück. Dabei werden wir ein wenig mehr über die Funktionsweise von (digitalen) Computern lernen.

```{admonition} Lernziel
:class: learngoals

Verstehen welche Eigenschaften die Programmiersprache Python besitze und erkennen welche Auswirkungen dies auf die Programmierung in Python hat.
```


#TODO: exkurs ODER move

Alle Computer basieren auf diesen vier grundlegenden Aufgabe:

1. Informationen **einlesen**
2. Informationen **speichern**
3. Informationen **verarbeiten**
4. Informationen **ausgeben**

Sie bilden das Fundament eines jeden Computers.
Die Verarbeitung von [Information](sec-information) wird symbolisch vollzogen, d.h. Computer manipulieren auf Grundlage von bestimmten Regeln die Symbole der Eingabe um die Symbole der Ausgabe zu bestimmen.
Computer haben keine eigene Intention oder agieren aus einer Emotion heraus.
Sie haben auch keinerlei Verständnis von der Eingabe.
Zum Beispiel können Computer Texte in unterschiedlichen Sprachen übersetzen was jedoch nicht bedeutet, dass sie "verstehen" was sie da übersetzen.
Inwieweit symbolische Manipulationen zu einem "Verstehen" führen könnten, wird derzeit rege im Bereich der *künstlichen Intelligenz* diskutiert.

```{admonition} EVA-Prinzip
:class: remark
:name: remark-eva
Der Computer basiert auf dem sog. *EVA-Prinzip* (**Eingabe**, **Verarbeitung** und **Ausgabe**).
```

Ein Computer erweitert das EVA-Prinzip um den **Speicher** und damit um einen **Zustand**.
Wäre der Computer zustandslos würde er bei gleicher **Eingabe** $x$ auch stets die gleiche **Ausgabe** $y$ erzeugen.
Durch den Speicher kann sich, je nach Eingabe, der Zustand $z$ des Computers verändern und, je nach seinem Zustand, kann dieselbe Eingabe zu unterschiedlichen Ausgaben führen.

```{figure} ../../figs/digital-computer/basics/dfa.png
---
width: 600px
name: fig-dfa
---
Ein Modell eines Computers mit 4 Zuständen. 
Der Computer befindet sich in Zustand $z = z_1$ (rot).
Die Ausgabe $y$ hängt von der Eingabe $x$ als auch vom aktuellen Zustand $z$ (hier $ = z_1$) des Computers ab.
Während der Berechnung der Ausgabe verändert der Computer seinen Zustand auf $g(z, x)$.
$f$ und $g$ sind mathematische Funktionen.
```

Über *Eingabegeräte*, die den Computer mit der Eingabe füttern, ist er mit der Außenwelt verknüpft.
Tastatur und Maus sind beispielsweise Eingabegeräte, die uns Menschen eine unmittelbare Möglichkeit geben, um *Informationen* in den *Computer* zu speisen.
Als weitere Eingabegeräte können wir eine Kamera oder andere Sensoren wie Messgeräte, die den Puls oder Blutzucker messen, anfügen.

Die Eingabe eines Computers kann analog zu unserer eigene Wahrnehmung gesehen werden.
Nach dem vereinfachten empirischen Menschenbild, nehmen wir durch Stimulierungen unserer Sinne die Welt wahr und unser "menschlicher Prozessor" verarbeitet die aufgenommenen Informationen.
Der Unterschied zwischen unserer Eingabe und der eines Computers, ist die Art mit der Informationen repräsentiert werden.
Wir Menschen übertragen und verarbeiten Informationen (analog) durch Nervenenden und chemische Prozesse.
Die Eingabe eines Computers wird durch das *Eingabegerät* in eine Folge von zwei Zuständen 0, 1 transformiert und in den Speicher des Computers abgelegt.
Hier sei erwähnt, dass das soeben beschriebene Menschenbild als Analogie genommen wird und nicht in dieser Weise zutreffen muss.
Die Grenze zwischen Mensch und seiner Welt, d.h. dem Subjekt und seinen Objekten, ist möglicherweise weit aus weniger klar als wir uns das vorstellen.

Der Prozessor eines Computers **ließt** (digitale) Informationen aus dem Speicher, **manipuliert** sie durch eine Abfolge von Symbolmanipulationen, d.h., durch das Abarbeiten eines [Algorithmus](def-algorithm) (eine endliche Folge von Anweisungen) und **schreibt** die **veränderte** Information zurück in den Speicher.

Wenn alle Arbeit getan ist, wird die verarbeitete Information durch die *Ausgabegeräte* **ausgegeben**.
Ausgabegeräte können Monitore, Lautsprecher aber auch andere Geräte, wie zum Beispiel VR-Brillen sein.
Die Ausgabegeräte erhalten als Information eine Folge von 0 und 1.
Sie transformieren diese Information in Bilder, Videos und mehr.




#todo hinweis
Der Begriff *Computer* hatte ursprünglich eine andere Bedeutung.
Anstatt digitaler Maschinen waren es menschliche Computer die unentwegt Berechnungen durchführten.
Die ersten maschinellen Computer bestanden noch aus Holz, Metall, mechanischen Hebeln und Getrieben.
Im 20. Jahrhundert wurden schließlich die mechanischen Komponenten durch elektrische Bauteile abgelöst.
Die daraus resultierenden Computer waren dennoch riesig und, im Vergleich zu heute, enorm langsam.
Um eine einfache Gleichung zu lösen brauchten diese Rechner, die einen ganzen Raum füllten, mehrere Stunden.
