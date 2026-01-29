
(sec-von-neumann)=
# Die Von-Neumann-Architektur

Die *Von-Neumann-Architektur* ist die bekannteste und meist verwendete Hardware-Architektur, die den Aufbau von Computern beschreibt.
Sie legt fest, wie die wesentlichen Bauteile miteinander interagieren.

```{figure} ../../figs/03-computer-sciences-basics/digital-computer/informationcycle/von-neumann-architecture.png
---
height: 300px
name: von-neumann-architecture-2
---
Die Von-Neumann-Architektur auch bekannt als Princeton Architektur.
```

In der Von-Neumann-Architektur finden Sie (vereinfacht) vier zentrale Bausteine: Hauptspeicher (RAM), CPU, Register und Bus. Programme liegen zunächst auf einem persistenten Speicher (z. B. Festplatte/SSD) und werden zum Ausführen in den Hauptspeicher geladen.

Die wichtigsten Komponenten sind:

- **Hauptspeicher (RAM)**: Temporärer Speicher für das auszuführende Programm (oder Programmteile) und die zu verarbeitenden Daten. Er ist flüchtig und verliert seinen Inhalt bei Stromausfall.
- **CPU**: Führt die Befehle aus und verarbeitet Daten. Vereinfacht besteht sie aus einer Kontrolleinheit (liest/steuert Befehle) und einer arithmetisch-logischen Einheit (führt Rechen- und Logikoperationen aus).
- **Register**: Sehr kleine, extrem schnelle Speichereinheiten innerhalb der CPU für Zwischenergebnisse und aktuelle Operationen.
- **Bus**: Verbindet die Komponenten und transportiert Informationen als [Bits](def-bit) und [Bytes](def-byte) über elektrische Leitungen.

Die Flüchtigkeit des Hauptspeichers ermöglicht hohe Geschwindigkeit, während persistente Speicher die Daten dauerhaft erhalten.

Damit die [Bits](def-bit) und [Bytes](def-byte) nicht durcheinander gelesen, manipuliert und geschrieben werden, ist die CPU *getaktet*.
Eine globale Uhr gibt vor, wann Komponenten aktiv werden können.
Eine CPU mit 3 Gigahertz (GHz) führt 3 Milliarden Zyklen pro Sekunde durch.

