
(sec-programming-constructs)=
# Programmstruktur

In diesem Abschnitt lernen wir die fundamentalen Bausteine der Programmierung kennen: 

- Kontrollstrukturen und
- Datenstrukturen
Diese beiden Konzepte bilden zusammen die Grundlage für alle Algorithmen und Programme!

Die Kernidee ist einfach.
- Ein Programm braucht einen Kontrollfluss, der festlegt, welche Schritte wann ausgeführt werden.
- Ein Programm braucht Daten, mit denen es arbeitet, also Werte und Strukturen im Speicher.
- Kontrollfluss und Daten sind unterschiedliche Dinge, aber sie greifen ständig ineinander.

**Maschinencode-Beispiel (vereinfacht)**

In dem Beispiel wird ein Kontostand berechnet.
- Das Programm liest zuerst einen Startwert aus dem Speicher (der aktuelle Kontostand).
- Danach addiert es mehrere Beträge (z. B. Buchungen wie +45.000, +10.000, +5.000).
- Am Ende schreibt es das Ergebnis zurück in den Speicher und beendet sich.


```text

Adresse   Inhalt   Bedeutung                        Rolle
--------------------------------------------------------------------------------
0000h     01h      Opcode: Lade Wert aus Speicher    KONTROLLFLUSS
0001h     20h      Teil der Adresse                  DATEN           \
0002h     00h      Teil der Adresse                  DATEN            > Adresse: 0020h
0003h     00h      Teil der Adresse                  DATEN           /

0004h     02h      Opcode: Addiere nächsten Wert     KONTROLLFLUSS
0005h     C8h      Teil des Werts                    DATEN           \
0006h     AFh      Teil des Werts                    DATEN            > Wert: 00AFC8h = 45.000
0007h     00h      Teil des Werts                    DATEN           /

0008h     02h      Opcode: Addiere nächsten Wert     KONTROLLFLUSS
0009h     10h      Teil des Werts                    DATEN           \
000Ah     27h      Teil des Werts                    DATEN            > Wert: 002710h = 10.000
000Bh     00h      Teil des Werts                    DATEN           /

000Ch     02h      Opcode: Addiere nächsten Wert     KONTROLLFLUSS
000Dh     88h      Teil des Werts                    DATEN           \
000Eh     13h      Teil des Werts                    DATEN            > Wert: 001388h = 5.000
000Fh     00h      Teil des Werts                    DATEN           /

0010h     03h      Opcode: Schreibe Ergebnis         KONTROLLFLUSS
0011h     20h      Teil der Adresse                  DATEN           \
0012h     00h      Teil der Adresse                  DATEN            > Adresse: 0020h
0013h     00h      Teil der Adresse                  DATEN           /

0014h     FFh      Opcode: Programmende              KONTROLLFLUSS

--------------------------------------------------------------------------------
0020h     00h      Startwert / Ergebnis (Byte 0)     DATEN           \
0021h     00h      Startwert / Ergebnis (Byte 1)     DATEN            > Ergebnis: 0000EA60h = 60.000
0022h     00h      Startwert / Ergebnis (Byte 2)     DATEN           /
0023h     00h      Startwert / Ergebnis (Byte 3)     DATEN

```

Erkennen Sie die Trennung zwischen Kontrollfluss und Daten?

- Einige Bytes sind Befehle (OpCodes), die der CPU sagen, welche Aktion als nächstes ausgeführt wird (Kontrollfluss).
- Andere Bytes sind Daten, zum Beispiel Adressen oder Zahlenwerte, auf die sich ein Befehl bezieht (Daten).
- Ohne Befehle passiert nichts, und ohne Daten hat ein Programm nichts, worauf es arbeiten kann.

Im Folgenden verschaffen wir uns einen Überblick, was mit Kontrollfluss und Datenstrukturen gemeint ist und welche typischen Formen es dafür gibt.

