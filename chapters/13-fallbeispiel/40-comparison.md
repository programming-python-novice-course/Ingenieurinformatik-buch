# Abstraktionsgrad


Wir haben uns angesehen, wie Julia das Problem mithilfe von **High-Level-Funktionen** aus der Fremdbibliothek pandas gelöst hat. Diese Funktionen kapseln komplexe Datenstrukturen und statistische Auswertungen und ermöglichen eine sehr kompakte Implementierung.

Anschließend wurde betrachtet, wie Julia das Problem mit eigenen Lösungen umgesetzt hat. Dabei kamen überwiegend **Low-Level-Funktionen** zum Einsatz, bei denen einzelne Berechnungsschritte explizit implementiert wurden. Am Ende wurden hierfür native Python-Bibliotheken wie statistics genutzt, die elementare statistische Funktionen bereitstellen und damit eine feinere Kontrolle über den Berechnungsprozess erlauben.

Definition
High-Level-Funktionen sagen was berechnet wird,
Low-Level-Funktionen bestimmen wie es berechnet wird.

Beispiele
pandas.describe -> liefert eine komplette statistische analyse (high)
stats.median() -> liefert eine statistische größe, die teil einer statistischen analyse sein kann (high/low .. depends)



#todo add figure
figs/13-fallbeispiel/abstraction-degress.png

Kernaussage: Sie müssen Pakete kennen und Sie müssen erkennen können, auf welchem Level Sie programmieren. Auf welchem Abstraktionsgrad sind Sie unterwegs? 



Wir haben beim Parsing-Teil gesehen wie wenig generisch eigenen Quellcode sein kann. Wir haben beim Sortieren der Listen gesehen, dass Built-In-Funktionalitäten (sort()) ein Vielfaches schneller sein können - das kann daran liegen dass der Quellcode in CPython direkt implementiert ist, sodass eine Interpretation nicht mehr notwendig ist, ABER auch am ALgorithmus selbst, der dabei genutzt wird.

Wir haben gesehen wie viele Zeilen Code Julia produziert hat und wie viele Zeilen mehr Code notwendig sind um diesen Code zu testen. Dass wir uns umfangreiche tests immer dann sparen können, wenn wir gut geteste Biblgiotheken wie pandas verwenden.

Sie stehen, wenn Sie Software entwickeln, immer vor der Herausforderung:
was kann ich beziehen und was muss ich selbst implementieren? und wenn ich mehrere implementierungen zur auswahl habe: wie finden sie heraus welche davon in ihrem softwareprodukt am besten geeignet ist bzgl. arbeitsspeicher, zeit,..

Was wir die ganze Zeit über aussen vor gelassen haben ist das Thema Sicherheit. 

```{admonition} Hinweis: CVE
:class: remark

Common Vulnerabilities and Exposures (CVE) ist ein öffentliches Referenzsystem zur eindeutigen Identifikation bekannter Sicherheitslücken in Software und Hardware. Jede CVE erhält eine standardisierte Kennung (z. B. CVE-2024-12345), die eine konsistente Kommunikation über Schwachstellen zwischen Herstellern, Sicherheitstools und Organisationen ermöglicht. CVEs bilden die Grundlage für viele Vulnerability-Scanner, Patch-Management-Prozesse und Risikobewertungen. Die offizielle CVE-Datenbank wird von der MITRE Corporation gepflegt und ist unter [cve.org](https://www.cve.org) abrufbar.
```

