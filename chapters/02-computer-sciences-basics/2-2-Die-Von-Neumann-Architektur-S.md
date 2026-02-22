
(sec-von-neumann)=
# Die Von-Neumann-Architektur (S)

Die *Von-Neumann-Architektur* ist die bekannteste und meist verwendete Hardware-Architektur, die den Aufbau von Computern beschreibt.

```{figure} ../../figs/02-computer-sciences-basics/digital-computer/informationcycle/von-neumann-architecture.png
---
height: 300px
name: von-neumann-architecture-2
---
Die Von-Neumann-Architektur auch bekannt als Princeton Architektur.
```

In der Von-Neumann-Architektur finden Sie (vereinfacht) vier zentrale Bausteine: Hauptspeicher (RAM), CPU, Register und Bus. Programme liegen zunächst auf einem persistenten Speicher (z. B. Festplatte/SSD) und werden zum Ausführen in den Hauptspeicher geladen.

Die wichtigsten Komponenten sind:

(def-main-memory)=
- **Hauptspeicher (RAM)**: Temporärer, flüchtiger Speicher (auch *Arbeitsspeicher*), in dem während der Ausführung Programme und Daten liegen, auf die die CPU schnell zugreifen kann. Er verliert seinen Inhalt bei Stromausfall.
(def-cpu)=
- **CPU**: Führt Befehle aus und verarbeitet Daten. Vereinfacht besteht sie aus einer Kontrolleinheit (liest/steuert Befehle, steuert den Ablauf) und einer arithmetisch-logischen Einheit (führt Rechen- und Logikoperationen aus).
(def-register)=
- **Register**: Sehr kleine, extrem schnelle Speichereinheiten innerhalb der CPU für aktuelle Operanden und Zwischenergebnisse.
- **Bus**: Verbindet die Komponenten und transportiert Informationen als [Bits](def-bit) und [Bytes](def-byte) über elektrische Leitungen.

Die Flüchtigkeit des Hauptspeichers ermöglicht hohe Geschwindigkeit, während persistente Speicher die Daten dauerhaft erhalten.

Damit die [Bits](def-bit) und [Bytes](def-byte) nicht durcheinander gelesen, manipuliert und geschrieben werden, ist die CPU *getaktet*:

- Eine globale Uhr gibt vor, wann Komponenten aktiv werden können.
- Eine CPU mit 3 Gigahertz (GHz) führt 3 Milliarden Zyklen pro Sekunde durch.


```{admonition}  Cache
:name: def-cache
:class: definition
Ein *Cache* ist ein schneller, temporärer Speicherbereich, der dazu dient, häufig verwendete Daten oder Anweisungen zwischenzuspeichern, um den Zugriff darauf zu beschleunigen. 
- Er ist eine Art (kleiner) Puffer.
- Er enthält einen (kleinen) Teil der Daten die zeitlich gesehen gerade verwendet werden.
- Er dient dazu wiederholte Zugriffe auf ein langsames Hintergrundmedium (wie den Hauptspeicher) zu vermeiden.
- Durch die Nähe zum Prozessor oder zu anderen wichtigen Komponenten minimiert der Cache die Zeit, die für den Datenaustausch benötigt wird, und erhöht dadurch die Systemleistung. 
```

```{admonition} Hardvard-Architektur
:class: remark
:name: remark-neumann-vs-harvard
Eine weitere beachtenswerte Architektur ist die sog. *Harvard-Architektur*.
- Im Unterschied zur *Von-Neumann-Architektur* hat sie zwei unterschiedliche und separierte Speicher, einen für den Programmcode und einen für die zu verarbeitenden Daten.
- Nachteil: kompliziert und viele Bauteile!
- Vorteil: die CPU kann **gleichzeitig** Programmcode laden als auch in den [Hauptspeicher](def-main-memory) schreiben oder aus ihm lesen.
```