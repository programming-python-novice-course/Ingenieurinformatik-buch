# Objektorientiert vs. prozedural?

Objektorientierung war (spätestens mit ``Java`` und dem Motto *„Write once, run everywhere.“*) lange Zeit das dominierende Paradigma in der industriellen Softwareentwicklung.
Dabei entstand stellenweise der Eindruck, OOP sei der „heilige Gral“ gegen Komplexität.
Heute ist klar: **OOP ist mächtig, aber kein Allheilmittel**.

Wichtiger als „das richtige Paradigma“ ist das **Ziel**: Strukturen zu schaffen, die **nachhaltig** sind – also gut **erweiterbar**, **verständlich** und **robust** gegenüber Fehlern und Änderungen.

In diesem Kurs haben wir nun neben der prozeduralen Denkweise auch die objektorientierte kennengelernt. Die funktionale lernen Sie gerne eigenständig kennen.

Uns ist wichtig: alle drei Paradigmen haben ihre Daseinsberechtigung:

- **prozedural/imperativ**: schneller Einstieg, direkte Abläufe, Zustand wird frei verändert (gut für einfache Skripte, klare Schrittfolgen).
- **funktional**: möglichst wenig veränderbarer Zustand, viele **reine Funktionen** und **unveränderliche Daten** (hilft gegen Seiteneffekte).
- **objektorientiert**: Daten und Verhalten werden gebündelt; vor allem **Kapselung** kann helfen, Teilzustände zu organisieren (und kann zugleich übertrieben werden).

Ein typisches Risiko – gerade bei OOP – ist, dass man zu früh zu viel Struktur erzwingt: Man modelliert „für das Paradigma“ und nicht für das Problem.
Dann entstehen Konstrukte mit Namen wie ``Manager``, ``Factory`` oder ``Handler`` und die eigentliche Logik verteilt sich über sehr viele Klassen - suchen Sie einfach mal zum Spaß in einem repo auf github und zählen Sie die Managers und Handlers ;)

Ob Sie am Ende objektorientiert, funktional, prozedural (oder gemischt) programmieren, ist deshalb nicht die Kernfrage.
Entscheidend ist, dass Ihr Code so strukturiert ist, dass er langfristig wartbar bleibt – **wie** Sie das erreichen, bleibt Ihnen überlassen.
