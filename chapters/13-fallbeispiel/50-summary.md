# Takeaways

Zum Abschluss: Dieses Fallbeispiel war weniger ein „neues Sprachkonstrukt“, sondern eine Zusammenführung. Sie haben gesehen, wie man aus einer Aufgabe Schritt für Schritt eine Lösung macht – und welche Praxisfragen dabei sofort auftauchen.

- **Build vs. Buy ist eine Kernentscheidung**: Oft ist die Frage nicht „Kann ich es selbst programmieren?“, sondern „Soll ich es selbst programmieren?“ (Abhängigkeiten, Zeit, Qualität, Compliance).
- **Abstraktionsgrad hat konkrete Folgen**: High-Level‑Bibliotheken beschreiben eher *was* berechnet werden soll, Low-Level‑Code legt fest *wie*. Das beeinflusst Geschwindigkeit, Entwicklungszeit, Fehlerrisiko und Wartbarkeit.
- **Eigener Code ist anfangs selten generisch** (Parsing): Erste Versionen lösen meist nur den aktuellen Fall. Robustheit (fehlende Werte, andere Formate, kaputte Zeilen) kostet zusätzliche Tests, Fehlerbehandlung und Refactoring.
- **Performance ist oft „eingebaut“** (Sortieren): Standardfunktionen wie `sorted()`/`list.sort()` sind in der Praxis meist deutlich schneller und besser getestet als eigene Implementierungen.
- **Tests sind kein Extra, sondern Teil der Eigenentwicklung**: Sobald Sie selbst implementieren, müssen Sie Verhalten festlegen und absichern (z. B. mit Unit-Tests), sonst ist die Lösung schwer wartbar!
- **Design Patterns als Werkzeugkasten**: Wir haben das *Strategy Pattern* kurz gestreift, um austauschbare Algorithmen (z. B. Sortierstrategien) zu modellieren. In professioneller Softwareentwicklung ist es hilfreich, mehrere Patterns zu kennen und situationsgerecht einzusetzen.

## Was wir bewusst NICHT betrachtet haben (Einschränkungen)

Das Fallbeispiel ist absichtlich klein und isoliert. Deshalb haben wir viele Themen, die in realer Software Entwicklung wichtig sind, **nicht** behandelt:

- **System-Integration & Architektur**: kein Zusammenspiel mehrerer Komponenten (z. B. GUI ↔ Programmlogik ↔ Datenhaltung), keine verteilten Systeme, keine Schnittstellen-/API-Architektur.
- **Ablaufmodell**: ein einzelnes Programm, das überwiegend **sequentiell** abarbeitet; keine Nebenläufigkeit, keine Skalierung, keine asynchronen Workflows.
- **Security-by-Design**: wir haben Sicherheitsanforderungen nicht systematisch modelliert (Threat Modeling, Authentisierung/Autorisierung, Input-Härtung, Secrets-Handling) – siehe auch den Hinweis zu {ref}`tip-cve`.
- **Deployability/Operations**: kein Packaging, keine Deployment-Pipeline, keine Monitoring/Logging-Strategie, keine Update-Strategie.
- **Lieferkette/Compliance-Artefakte**: keine **SBOM** erstellt (auch wenn das Thema im Prozesskapitel motiviert wird); Abhängigkeits- und Lizenzmanagement wurde nur angerissen.
- **Test-Automatisierung (CI)**: Wir haben zwar Unit-Tests im Notebook erstellt, aber nicht betrachtet, wie Tests in professionellen Projekten typischerweise **automatisiert** ausgeführt werden (z. B. auf einem CI-Server), inklusive verschiedener Testarten (Unit-, Integrations-, Systemtests) und Qualitätschecks.

Wenn Sie diese Themen theoretisch oder praktisch vertiefen möchten, sprechen Sie uns gerne an. Wir geben Ihnen gerne Literaturempfehlungen und Hinweise zu möglichen Vertiefungsangeboten.

Exkurs: Sicherheit (CVE)

```{admonition} Hinweis: CVE
:class: remark
:name: tip-cve

Common Vulnerabilities and Exposures (CVE) ist ein öffentliches Referenzsystem zur eindeutigen Identifikation bekannter Sicherheitslücken in Software und Hardware. Jede CVE erhält eine standardisierte Kennung (z. B. CVE-2024-12345), die eine konsistente Kommunikation über Schwachstellen zwischen Herstellern, Sicherheitstools und Organisationen ermöglicht. CVEs bilden die Grundlage für viele Vulnerability-Scanner, Patch-Management-Prozesse und Risikobewertungen. Die offizielle CVE-Datenbank wird von der MITRE Corporation gepflegt und ist unter [cve.org](https://www.cve.org) abrufbar.
```

