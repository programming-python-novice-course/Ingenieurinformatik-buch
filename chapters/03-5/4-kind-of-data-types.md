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

(sec-kind-of-data-types)=
# Arten von Datentypen



## Hintergrund: der Computer kennt nur 0 und 1 ;)

Ausgangslage: der computer kennt nur 0 und 1 (an/aus-zustände). Wie bereits beschrieben ist es für einen menschen schwierig einen algorithmus in maschinencode auszudrücken. vielmehr wird er eine höherere programmiersprache verwenden. wir haben bereits darüber gesprochen, dass sich compiler und interpreter darum kümmern, dass der quelltext in maschinencode umgewandelt wird. was wir noch nicht besprochen haben ist das wie. 

program: wir addieren die zahlen 5000 und 2500 auf einem Rechner mit einer 8-Bit-CPU. 8-Bit-CPU: das heisst 8-Bit können vom Arbeitsspeicher auf einmal in die CPU verschoben werden.

Auf einem rechner werden zahlen im binärsystem representiert.

5000 entspricht 1001110001000 im dualsystem (13 Stellen)
2500 entspricht 100111000100 im dualsystem (12 Stellen)

Das programm sieht in maschinencode aus,  wenn es in den arbeitsspeicher geladen wurde, wie folgt aus 
#todo: cite charles petzold "wie computer funktionieren"

00111110₂ befehl, der das nächte Byte in die CPU verschiebt
10001000₂ Low-Byte von der Zahl 5000
11000110₂ befehl der das nächste Byte zum Wert in die CPU addiert
11000100₂ Low-Byte von 2500
00110010₂ befehl der das ergebnis an der speicheradresse (nächste zwei bytes) ablegt
00010000₂ speicheraddresse - part 2
00000000₂ speicheraddresse - part 1
00111110₂ befehl der das nächste byte in die cpu verschiebt
00010011₂ High-byte von 5000
11001110₂ befehl der das nächste byte mit übertrag zum wert in die cpu addiert
00001001₂ high byte von 2500
00110010₂ befehl der das ergebnis an der speicheradresse (nächste zwei bytes) ablegt
00010001₂ speicheradresse teil 2
00000000₂ speicheradresse teil 1
01110110₂ befehl zum anhalten der cpu
00000000₂
00000000₂ speicherstelle für das ergebnis
00000000₂ speicherstelle für das ergebnis


Wir sehen dass in dem maschinencode sowohl befehel als auch Daten abgelegt sind. Je nachdem welchen chip man vor sich hat, unterscheiden sich diese befehle. Die entwicklung von befehlssätzen ist eigene ingenieursdisziplin. Wenn Sie als ingenieur programme entwicklen, werden sie nur selten damit in berührung kommen. Womit sie allerdings in berührung kommen können, ist die art wie Daten im datenspeicher abgelegt werden.

Was fällt an dem beispiel auf?
Wir haben gesehen dass die zahl 5000 in binär 13 stellen hat:
1001110001000
Da in unserem beispiel immer nur 8 bits auf einmal von der CPU verarbeitet werden können, müssen wir die zahl in zwei portionen an die CPU übergeben. Das ist unschön, weshalb man inzwischen mit 64 und auch 128 bit nutzt (aber auch hier haben wir das problem - wenn etwas grösser ist müssen wir aufteilen)

hinweis: die reihenfolge wie die portionen auf einem rechner abgelegt sind: 1-2-3 oder 3-2-1 bezeichnet man als big- und long-endian.

was fällt noch auf?
die 0 und 1 nehmen relativ viel platz und man übersieht einmal schnell eine 0 oder 1. man verwendet daher in der regel nicht die repräsentation im binärsystem sondern im hexadezimalsystem.

anstelle von 1001110001000 schreibt man 

die umrechnungstabelle sehen sie hier:

#todo add hexadezimal tabeööe


hinweis: sie haben gerade gesehen wie wir die zahlen unterschiedlich repräsentieren könnne. wenn wir im alltag von der zahl 5000 sprechen meinen wir damit eigentlich 5000 im dezimalsystem. genausogut können sie die zahl binär oder auch hexadezimal darstellen - sie müssen nur die umrechnung kennen. In höheren programmiersprachen werden sie damit nur selten in berührung kommen. Falls doch: seien sie nicht überrascht. 


Wichtig: wir haben gesehen wir eine dezimalzahl auf einem rechner abbilden.
5000 -> 

Aber was ist wenn wir einen text auf einem rechner abbilden wollen? 
"hello!" -> ??
wie viele 0 und 1 brauchen ich und in welcher reihenfolge muss ich sie anordnen?
Antwort: es gibt dafür verschiedene lösungen. 

**Beispiel mit Multibyte-Zeichen: "Hello 中"**

**"Hello 中" in UTF-8:**
- H (U+0048): 01001000₂
- e (U+0065): 01100101₂
- l (U+006C): 01101100₂
- l (U+006C): 01101100₂
- o (U+006F): 01101111₂
- Leerzeichen (U+0020): 00100000₂
- 中 (U+4E2D): 11100100 10111000 10101101₂

Gesamt: 11 Bytes = 88 Bits (5 ASCII-Zeichen à 1 Byte + 1 Leerzeichen à 1 Byte + 1 chinesisches Zeichen à 3 Bytes)

**"Hello 中" in UTF-16:**
- H (U+0048): 00000000 01001000₂
- e (U+0065): 00000000 01100101₂
- l (U+006C): 00000000 01101100₂
- l (U+006C): 00000000 01101100₂
- o (U+006F): 00000000 01101111₂
- Leerzeichen (U+0020): 00000000 00100000₂
- 中 (U+4E2D): 01001110 00101101₂

Gesamt: 14 Bytes = 112 Bits (7 Zeichen à 2 Bytes)

Wir sehen: UTF-8 verwendet für ASCII-Zeichen 1 Byte, für das chinesische Zeichen 3 Bytes (variabel). UTF-16 verwendet für alle Zeichen im Basic Multilingual Plane (BMP) fest 2 Bytes pro Zeichen.

Kernbotschaft: jeder buchstabe wird wieder durch eine abfolge von bits realisiert. 

das prinzip ist immer das gleiche. was wir auch gesehen haben ist, dass es unterschiedliche arten gibt wie man die abfilge von bits realisieren kann. Idealerweise wollen wir keine bits verschwenden. in dem textbeispiel sehen wir dass die buchstaben bei utf-16 im ersten bereich immer null sind. in utf-8 wird das vermieden, indem man eine art meta-information hinzufügt: bestimmte zeichen sind dann länger (die die nicht so oft vorkommen). 

Was macht der compiler oder interpreter? er kümmert sich darum, dass die objekte (zahlen, text, etc. ) in 0 und 1 überführt werden.  
für einige objekttpyen ist klar, wie diese abgelegt werden (ganze zahlen), für einige objekttypen (text) gibt es hierfür mehrere wege. unabhängig davon muss der compiler/interpreter wissen, was er da vor sich hat: zahl oder text, weil abhängig davon muss er ja ein unterschiedliches verfahren zum übersetzen auswähen.

aber woher weiss der compiler/interpreter was er da vor sich hat, also was er da vor sich hat? Hier gibt es zwei Wege:
- es wird im quellcode explizit festgelegt.
- es wird nicht festgelegt und der interpreter/just-in-time-compiler muss während der laufzeit bestimmen was es ist.

Man spricht hier auch von statischer und dynamischern Typisierung. Python besitzt eine dynamische Typisierung, d.h. sie können theoretisch mit Python programmieren ohne dass sie sich groß darüber gedanken machen müssen, ob sie jetzt ganze zahlen oder gleitkommazahlen miteinander addieren wollen.

```python
def potenz(basis, exponent):
    return basis ** exponent

if __name__ == "__main__":
    # Mit ganzen Zahlen
    ergebnis_ganz = potenz(3, 4)
    print(ergebnis_ganz)  # Ausgabe: 81
    
    # Mit Gleitkommazahlen
    ergebnis_komma = potenz(3.0, 2.0)
    print(ergebnis_komma)  # Ausgabe: 9.0
    
    # Mit Strings - FEHLER!
    ergebnis_string = potenz("text1", "text2")
    # TypeError: unsupported operand type(s) for ** or pow(): 'str' and 'str'
```

Problem: es gibt keine potenzen von einem text. deshalb gibt es einen runtime error. Problem also in Python: wir können grundsätzlich mal alles übergeben, aber ob das klappt wisse wir erst bei der ausführung. bei fremden komplizierten quellcode müssen sie raten und test, was sie übergeben dürfen. das ist nicht effizient, weshalb man in python üblicherweise auch den datentypen angibt (dies dient alleine zur Dokumentation).

**Lösung: Type Hints in Python**

```python
def potenz(basis: float, exponent: float) -> float:
    """Berechnet die Potenz von basis^exponent. Nur für Zahlen!"""
    return basis ** exponent

if __name__ == "__main__":
    ergebnis = potenz(3, 4)
    print(ergebnis)  # Ausgabe: 81
    
    # IDE/Type Checker warnt: potenz("text", 2) ist nicht erlaubt!
```

```python
from typing import Union

def addition(a: Union[int, float, str], b: Union[int, float, str]) -> Union[int, float, str]:
    """Addiert Zahlen oder verkettet Strings."""
    return a + b

if __name__ == "__main__":
    # Funktioniert mit Zahlen
    ergebnis_zahl = addition(3, 4)
    print(ergebnis_zahl)  # Ausgabe: 7
    
    # Funktioniert mit Strings
    ergebnis_string = addition("text1 ", "text2")
    print(ergebnis_string)  # Ausgabe: "text1 text2"
```

**Vorteil von Type Hints:**
- Code ist selbstdokumentierend: Man sieht sofort, welche Typen erwartet werden
- IDEs können Fehler bereits beim Schreiben erkennen
- Type Checker (z.B. `mypy`) können den Code analysieren, ohne ihn auszuführen
- Bessere Unterstützung durch Code-Vervollständigung in IDEs

Haupterkenntnis: Python  zwingt uns nicht dazu dass wir einen Datentyp festlegen. Ich kann einfach sagen:
x = 3 
x = 4.0 
Python erkennt automatisch dass es ist eine ganze zahl oder eine gleitkommanzahl und speichert das entsprechende objekt möglichst effizient (wenige nullen) für uns ab. ABER: nicht jede funktionalität macht für jeden datentypen sinn (beispiel potenz), deshalb kommen wir nicht darum herum uns damit zu besschäftigen was es denn für datentypen gibt, wie sich unterscheiden und wie ich sie in python nutze.


# Datentypen
Der *Datentyp* einer Variablen gibt an, wie die [Bits](def-bit) und [Bytes](def-byte) [interpretiert](sec-interpretation) werden.
Die Bits und Bytes des Speicherbereichs, auf welchen die Variable *zeigt*, machen den *Wert* der Variablen aus.
Im folgenden definieren und initialisieren wir Variablen mit unterschiedlichen Datentypen: 

+ [Ganze Zahl](sec-int) ``int``, 
+ [Fließkommazahl](sec-float) ``float``, 
+ [Zeichenkette](sec-string) ``str``, 
+ [Wahrheitswert](sec-bool) ``bool``, 
+ eine [Liste](sec-list) ``list``, welche ganze Zahlen ``int`` enthält und
+ ein [Tupel](sec-tuple) ``tuple``, welche Zeichenketten ``str`` enthält.

```{code-cell} python3
number = 111
floating_number = 1.3
characters = 'Hello'
boolean = True
mylist = [1,2,3,4]
mytuple = ('A', 'B', 'C')
```

Beim Datentyp ``list`` und ``tuple`` fällt auf, dass diese Werte eines anderen Datentyps enthalten, hier ``int`` und ``str``.
Solche Datentypen nennen wir [zusammengesetzt Datentypen](sec-datastructures)) wohingegen wir Datentypen, welche wir nicht zerlegen können als [atomare Datentypen](def-atomare-data-types) bezeichnen.
Diese *atomaren Datentypen* können zudem auch [atomare Datentypen](def-primitive-datatypes) sein.

Zudem gibt es Datentypen, welche von der jeweiligen Programmiersprache definiert sind und solche die Sie selbst definieren.
Erstere nennen wir *built-in Datentypen* und letztere werden durch *Klassen* realisiert.
Wir werden auf [Klassen](sec-class-and-object) erst am Ende des Kurses eingehen.

Zusammenfassend gibt es fünf Arten von Datentypen:

1. Primitive Datentypen,
2. atomare Datentypen
3. zusammengesetzte Datentypen,
4. built-in Datentypen und
5. eigens definierte Datentypen.

Dabei ist ein Datentyp entweder atomar oder zusammengesetzt und zugleich entweder built-in oder eigens definiert.
Primitive Datentypen sind spezielle atomare Datentypen.
Oftmals sind built-in Datentypen zugleich primitive Datentypen (siehe z.B. ``Java``, ``C/C++``).
Eigens definierte Datentypen können niemals primitiv sein.

## Primitive Datentypen

```{admonition} Primitive Datentypen
:name: def-primitive-datatypes
:class: definition

*Primitive Datentypen* sind jene Datentypen aus denen alle anderen Datentypen einer Sprache hervorgehen.
Sie sind nicht weiter reduzierbar.
```

Unsere Definitionen von [atomaren](def-atomare-data-types) und [primitiven](def-primitive-datatypes) Datentypen ähneln sich sehr.

>Worin besteht der Unterschied zwischen einem primitiven und einem atomaren Datentyp?

Nehmen wir zum Beispiel den ``Python`` Datentyp ``int``.
Der Wert vom Typ ``int`` besteht nicht nur ais dem reinen Wert der ganzen Zahl sondern enthält zusätzlich noch einen Zähler, welcher angibt wie viele Variablen auf den Wert verweisen.
Das heißt wir können ``int`` weiter in den Zähler und den eigentlichen Wert zerlegen.
Allerdings macht es keinen Sinn diese beiden Teile zu zersplittern und separat weiter zu verarbeiten -- sie gehören zusammen, da sie nur gemeinsam verarbeitbar sind!
Zeichenketten sind weder primitiv noch atomar, denn eine Zeichenkette lässt sich in ihre einzelnen Zeichen zersplittern und die Weiterverarbeitung der einzelner Zeichen macht durchaus Sinn.

Übertragen wir das auf die 'echte' Welt, so könnte man bei einem Brief von einem Wert eines [zusammengesetzten Datentyps](def-data-structures) sprechen.
Dieser enthält einen Briefkopf, ein Datum einen Absender, Empfänger und den Text.
Das Datum ist wiederum ein *zusammengesetzten Datentyp* bestehend aus Tag, Monat und Jahr.
Der Tag ist schließlich ein *primitiver* oder (in ``Python``) ein *atomarer* Datentyp (eine Zahl zwischen 0 und 31).

```{exercise} Der Datentyp Zeichenkette
:label: datatype-str-exercise
Ist ``set``, d.h. eine Menge, ein atomarer oder zusammengesetzter Datentyp?
Begründen Sie Ihre Antwort.
```

```{solution} datatype-str-exercise
:label: datatype-str-solution
:class: dropdown

``set`` ist ein zusammengesetzter Datentyp dessen Wert eine variable Anzahl an Werten verschiedener Datentypen enthalten kann.
```

(sec-built-in-data-types)=
## Built-in Datentypen

*Built-in* Datentypen sind jene Datentypen, welche die Programmiersprache (ohne weitere Bibliotheken) mitliefert.
Zur Vollständigkeit listen wir hier alle *built-in Datentypen* von ``Python`` auf.
Einige davon werden Sie jedoch in diesem Kurs nicht verwenden.
Die wichtigsten *built-in Datentypen* sind hervorgehobenen:

1. **Das Nichts** ``None``
2. Zahlen (Numbers)
   + **Ganze Zahlen** ``int``
   + **Fließkommazahl (rationale Zahlen)** ``float``
   + Komplexe Zahlen ``complex``
3. Sequenzen (Sequences)
    1. Unveränderlich
       + **Zeichenketten** ``str``
       + **Tupels** ``tuple``
       + Bytes ``bytes``
    2. Veränderlich
       + **Listen** ``list``
       + Byte Arrays ``bytearray``
4. Mengen (Set types)
   + **(normale) Mengen** ``set``
   + (gefrorene Mengen) ``frozenset``
5. Abbildungen (Mappings)
   + **Wörterbuch** ``dict``
6. Aufrufbare Typen (Callable)
   + **Funktionen**
   + Methoden
   + Klassen
7. Module

Diese Datentypen stehen Ihnen zur Verfügung sobald Sie ``Python`` auf Ihrem System oder Ihrer Umgebung installiert haben.

Anders als in vielen anderen Sprachen müssen Sie den (built-in) Datentyp einer Variablen in ``Python`` nicht explizit angeben.
``Python`` schließt von der Schreibweise des Wertes automatisch auf den richtigen Datentyp.

Eine Folge von Ziffern mit einem optional vorangestellten Minuszeichen werden als ganze Zahl ``int`` interpretiert.
Befindet sich in der Folge ein Punkt ``.`` so wird der Wert als Fließkommazahl interpretiert.
Sie können den Datentyp einer Variablen ``x`` oder eines Wertes mit ``type(x)`` abfragen:

```{code-cell} python3
type(-3123)
```

```{code-cell} python3
type(1.313)
```

```{code-cell} python3
name = 'Anna'
type(name)
```

```{code-cell} python3
mylist = [1, 2, 3, 4, 'A']
print(f'List Type: {type(mylist)}')
print(f'Element 0 Type: {type(mylist[0])}')
print(f'Element 4 Type: {type(mylist[4])}')
```

## Zusammengesetzte Datentypen

Zusammengesetzte Datentypen definieren wir durch andere Datentypen, welche bereits definiert wurden.
Die Basis der zusammengesetzten Datentypen sind deshalb entweder *built-in Datentypen* der Sprache oder eigens definierte zusammengesetzte Datentypen.

Angenommen Sie wollen den Datentyp ``Person`` definieren welcher sich dadurch auszeichnet, dass er sich aus zwei Zeichenketten ``str`` nämlich dem Vor- und Nachnamen zusammensetzt.
Durch [Klassen](sec-class-and-object) können Sie einen solchen Datentyp definieren.
Wie wir dies machen, werden wir auf einen späteren Zeitpunkt verschieben.

Listen ``list``, Tupel ``tuple``, Mengen ``set`` und Wörterbücher ``dict`` sind *zusammengesetzter built-in Datentypen* und zugleich enthalten die Werte (Objekte) dieser Datentypen eine
variable Anzahl an Elementen unterschiedlicher Datentypen.
Eine gute Analogie zu diesen sog, [Sammlung / Kollektion (engl. Collections)](def-collection) sind physikalische Ordner, Schließfächer, Listen auf Papier geschrieben, Rücksäcke, Körbe, Tüten und andere physikalischen Objekte die wir im Alltag verwenden um andere physikalische Objekte zu ordnen, strukturieren oder schlicht zu halten.
Auch der Arbeitsspeicher ist in diesem Sinne eine sowohl physikalische wie auch virtuelle Kollektion an Bits.

```{admonition} Sammlung (Collection)
:name: def-collection
:class: definition

Als *Sammlung* bezeichnen wir alle Datentypen ([Tupel](sec-tuple), [Dictionary](def-python-dictionary), [Listen](sec-list), [Mengen](sec-set) usw.), die eine **variable Anzahl** an anderen Elementen (normalerweise mehrere) beinhalten.

```

Mit **variabler Anzahl** ist gemeint, dass es Sammlung gibt, welche 5 Elemente enthalten und Sammlung gibt die 1000 Elementen enthalten.
Es kann dennoch sein, dass eine Sammlung die 10 Elemente enthält nicht verändert werden kann, d.h. sie wird auf immer dieser 10 Elemente enthalten.

```{code-cell} python3
mylist = [1, 2, 'A', 3, 1.23, [1, 2, 3]]
mylist
```

```{code-cell} python3
mytuple = (mylist, 'D')
mytuple
```

```{code-cell} python3
mydict = {'firstname' : 'Paulina', 'lastname' : 'Schmidt', 'age' : 23 }
mydict
```

```{code-cell} python3
month = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}
month
```

Eine Zeichenkette ``str`` ist ebenfalls eine Kollektion, jedoch sind deren Elemente alle vom gleichen Typ -- dem Zeichen.