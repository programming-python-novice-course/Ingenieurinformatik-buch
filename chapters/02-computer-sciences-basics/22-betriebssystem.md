# Betriebssystem: ja/nein? (S)

Sie können später als Ingenieurinnen und Ingenieure sowohl mit Embedded-Software (z. B. Mikrocontroller in Maschinen, Sensorik, Aktorik) als auch mit „klassischer“ Software auf PCs/Servern in Berührung kommen. Deshalb ist es wichtig, dass Sie die Unterschiede zwischen zwei Welten kennen:

- Systeme mit Betriebssystem (z. B. Windows, Linux): Anwendungsprogramme laufen nicht direkt auf der Hardware, sondern werden vom Betriebssystem geladen und verwaltet.
- Systeme ohne klassisches Betriebssystem (z. B. Bare Metal auf Mikrocontrollern): Ihr Programm läuft direkt auf der Hardware und übernimmt Aufgaben, die sonst ein Betriebssystem erledigen würde.


```{admonition} Mikrocontroller vs. Computer
Ein **Mikrocontroller** ist ebenfalls ein Computer im weiteren Sinne – aber typischerweise für eine *spezielle Aufgabe* optimiert: Er integriert CPU, Speicher und Ein-/Ausgabe (GPIO, Timer, ADC, Kommunikationsschnittstellen) auf einem Chip und arbeitet oft mit deutlich weniger Ressourcen.
```

**Was macht ein Betriebssystem?**

Ein Betriebssystem ist die Software-Schicht zwischen Hardware und Anwendungsprogrammen. Es verwaltet Ressourcen (z. B. CPU-Zeit, Arbeitsspeicher, Geräte) und stellt Abstraktionen bereit, die das Programmieren und Ausführen von Programmen vereinfachen (z. B. Prozesse, Dateien, Netzwerkzugriffe).
```{admonition} Betriebssystem
:name: def-operating-system
:class: definition
Das *Betriebssystem* eines Computers ist ein spezielles Hauptprogramm, welches alle anderen Programme und die Rechnerressourcen des Computers verwaltet.
```

Das *Betriebssystem* (z. B. Ubuntu, Windows, macOS) bestimmt, wann welches Programm welche Hardware nutzen darf und auf welchen Speicherbereich das jeweilige Programm zugreifen darf.

Typische Aufgaben eines Betriebssystems sind:

- Programme starten und beenden (Prozesse)
- CPU-Zeit zuteilen (Scheduling), scheinbare Parallelität herstellen
- Speicher verwalten und (teilweise) voneinander isolieren
- Gerätezugriffe über Treiber und Standardschnittstellen anbieten (z. B. Dateien, Netzwerk, Bildschirm)

Hat ein Computer nur eine CPU (mit nur einem Kern), so erscheint es nur so, als würden viele Programme gleichzeitig laufen. In der Realität wechselt das Betriebssystem die aktiven Programme fortwährend durch.


```{admonition} Bootvorgang
:name: def-booting
:class: definition
Der *Bootvorgang* ist der Prozess, bei dem ein Computer nach dem Einschalten oder Neustarten sein Betriebssystem und weitere essenzielle Software lädt, um betriebsbereit zu werden.
```

Das *Betriebssystem* wird beim Start des Computers geladen (*Booten*).
Der Schlüssel hierzu ist ein kleines Programm auf dem *Festwertspeicher (ROM)*, das von der Hardware selbst geladen wird.
Die Logik zum Laden des ersten Programms ist in den Bauteilen selbst fest verdrahtet.
Der Festwertspeicher ist nicht flüchtig und bleibt auch nach dem Ausschalten erhalten.

Auf Mikrocontrollern ist der Ablauf oft einfacher: Nach einem Reset startet ein sehr kleiner Bootloader (oder direkt Ihr Programm) und springt dann in Ihre Firmware. Ob dabei ein RTOS beteiligt ist, hängt vom System ab.


**Programme ausführen (mit Betriebssystem)**

Starten Sie ein Programm, teilen Sie dem [Betriebssystem](def-operating-system) mit, dass Sie dieses Programm ausführen möchten.
Das *Betriebssystem* lädt es in den Hauptspeicher und teilt ihm entsprechende Ressourcen zu.
Laut der *[Von-Neumann-Architektur](von-neumann-architecture-2)* liegen **Daten** und **Programme** im gleichen *Hauptspeicher*.
Das Programm ist eine zusammenhängende Folge von 0 und 1, welche Befehle repräsentieren, z.B.:

- $\text{ADD} \ \$5 \ \$6 \ \$7$: Addiere Zahlen in Register $\$5$ und $\$6$, speichere Ergebnis in Register $\$7$
- $\text{LOAD} \ \#15 \ \$5$: Lade Daten aus Hauptspeicheradresse $\#15$ ins Register $\$5$
- $\text{STORE} \ \$7 \ \#16$: Speichere Daten von Register $\$7$ im Hauptspeicher an Adresse $\#16$

```{figure} ../../figs/02-computer-sciences-basics/digital-computer/informationcycle/program-run.png
---
width: 700px
name: fig-program-run
---
Zusammenspiel zwischen Kontrolleinheit und arithmetische/logische Einheit, Register, Befehlszeiger (CPU) und Arbeitsspeicher.
```

```{admonition} Befehlszeiger
:name: def-program-counter
:class: definition
Der *Befehlszeiger* ist ein spezielles Register der *Kontrolleinheit*, das die Arbeitsspeicheradresse des nächsten auszuführenden Befehls enthält.
Bei der Ausführung eines Programms wird der Befehlszeiger aktualisiert, um auf die nächste Anweisung zu zeigen, die ausgeführt werden soll.
```

Die *Kontrolleinheit* liest Befehle aus dem Hauptspeicher, lädt die benötigten Daten in Register, aktiviert die Recheneinheiten und schreibt Ergebnisse zurück.
Der *Befehlszeiger* zeigt dabei auf die nächste auszuführende Anweisung.
Register sind deutlich schneller als der Hauptspeicher und befinden sich näher an den Recheneinheiten, weshalb häufig verwendete Werte dort zwischengespeichert werden.

Wenn das Betriebssystem entscheidet, dass ein anderes Programm an der Reihe ist, wird der aktuelle Zustand des laufenden Programms gesichert (z. B. der Befehlszeiger).
Sobald das Programm wieder aktiv wird, werden alle notwendigen Daten wieder geladen.


```{admonition} Hinweis: Programmieren mit/ohne Betriebssystem
::class: remark

Je nachdem, ob Ihr Zielsystem ein Betriebssystem hat oder nicht, unterscheiden sich typische Aufgaben beim Programmieren:

- **Komfort-Funktionen**: Mit Betriebssystem sind Dinge wie Dateien/Netzwerk meist „da“; ohne Betriebssystem müssen Sie vieles selbst (oder über sehr kleine Bibliotheken) lösen.
- **Hardwarezugriff**: Mit Betriebssystem greifen Sie über Treiber/APIs zu; ohne Betriebssystem arbeiten Sie näher an der Hardware (Peripherie, Interrupts).
- **Ressourcen**: Auf PCs/Servern sind RAM/Speicher meist großzügiger; auf Embedded-Systemen sind RAM/Flash oft knapp.
- **Timing**: Mit Betriebssystem ist Timing weniger vorhersehbar (andere Programme laufen parallel); ohne Betriebssystem ist Timing oft besser kontrollierbar und manchmal echtzeitkritisch.
- **Test & Ausrollen**: Mit Betriebssystem: typische Toolchains/CI/Installer; ohne Betriebssystem: Debugging am Gerät und „Firmware flashen“ bzw. Updates über Bootloader/OTA.
```



