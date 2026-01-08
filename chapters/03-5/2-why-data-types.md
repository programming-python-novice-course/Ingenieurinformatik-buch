

# Hintergrund Datentypen

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

hinweise:
Mit Ausnahme der [Bitoperationen](sec-bit-operations) bieten Hochsprachen wie ``Python``, ``Java``, ``JavaScript`` bewusst kaum die Möglichkeit direkt mit den Bits im Speicher zu interagieren.
Wir ändern Zahlen, Text und anderes und die Hochsprachen kümmern sich darum, dass die Werte im Speicher dementsprechend angepasst werden.
Diese Abstraktion schützt Programmierer\*innen vor Fehlern und erhöht die Lesbarkeit des Quellcodes.

. was wir auch gesehen haben ist, dass es unterschiedliche arten gibt wie man die abfilge von bits realisieren kann. Idealerweise wollen wir keine bits verschwenden. in dem textbeispiel sehen wir dass die buchstaben bei utf-16 im ersten bereich immer null sind. in utf-8 wird das vermieden, indem man eine art meta-information hinzufügt: bestimmte zeichen sind dann länger (die die nicht so oft vorkommen). 

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

Hinweis
``Python`` ist dynamisch getypt.
Jedoch ruft ``Python`` intern ``C/C++`` Code auf und dieser ist statisch getypt!
``Python`` ist immer dann schnell, wenn der statisch getypte Code aufgerufen wird und immer dann langsam wenn wir lange im ``Python``-Code selbst (der dynamisch getypt ist) verweilen.


