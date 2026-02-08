# Takeaways

Zum Abschluss: Dieses Fallbeispiel war weniger ein „neues Sprachkonstrukt“, sondern eine Zusammenführung. Sie haben gesehen, wie Julia aus einer Aufgabe Schritt für Schritt eine Lösung macht – und welche Praxisfragen dabei sofort auftauchen.

- Build vs. Buy ist eine Kernentscheidung: Oft ist die Frage nicht „Kann ich es programmieren?“, sondern „Soll ich es programmieren?“ (Abhängigkeiten, Zeit, Qualität, Compliance).
- Der Abstraktionsgrad hat konkrete Folgen: High-Level‑Bibliotheken beschreiben eher *was* berechnet werden soll, Low-Level‑Code legt fest *wie*. Das beeinflusst Entwicklungszeit, Fehlerrisiko und Wartbarkeit.
- Eigener Code ist anfangs selten generisch: Erste Versionen lösen meist nur den aktuellen Fall. Robustheit (fehlende Werte, andere Formate, kaputte Zeilen) kostet zusätzliche Tests, Fehlerbehandlung und Refactoring.
- Performance ist oft „eingebaut“: Standardfunktionen wie `sorted()`/`list.sort()` sind in der Praxis meist schneller und besser getestet als eigene Implementierungen.
- Tests sind Teil der Eigenentwicklung: Sobald Julia selbst implementiert, muss sie Verhalten festlegen und absichern, sonst ist die Lösung schwer wartbar.
- Design Patterns sind Werkzeuge: Das Strategy-Pattern zeigt, wie Julia austauschbare Algorithmen modellieren kann, ohne den Rest des Programms ständig umzubauen.

**Was wir bewusst nicht betrachtet haben**

Das Fallbeispiel ist absichtlich klein und isoliert. Deshalb haben wir viele Themen, die in realer Softwareentwicklung wichtig sind, nicht behandelt:

- System-Integration & Architektur: Es gibt kein Zusammenspiel mehrerer Komponenten (z. B. GUI ↔ Logik ↔ Datenhaltung) und keine API-Architektur.
- Ablaufmodell: Es ist ein einzelnes Programm, das überwiegend sequentiell arbeitet; Nebenläufigkeit und Skalierung bleiben außen vor.
- Security-by-Design: Sicherheitsanforderungen werden nicht systematisch modelliert (Threat Modeling, Authentisierung/Autorisierung, Input-Härtung, Secrets-Handling) – siehe auch {ref}`tip-cve`.
- Deployability/Operations: Es gibt kein Packaging, keine Deployment-Pipeline und keine Monitoring/Logging-Strategie.
- Lieferkette/Compliance: Es wird keine SBOM erstellt; Abhängigkeits- und Lizenzmanagement wird nur angerissen.
- Test-Automatisierung (CI): Tests werden im Notebook gezeigt, aber nicht als professioneller CI-Workflow (Unit-/Integrations-/Systemtests, Quality Gates) aufgebaut.

Wenn Sie diese Themen theoretisch oder praktisch vertiefen möchten, sprechen Sie uns gerne an. Wir geben Ihnen gerne Literaturempfehlungen und Hinweise zu möglichen Vertiefungsangeboten.


```{admonition} Hinweis: CVE
:class: remark
:name: tip-cve

Common Vulnerabilities and Exposures (CVE) ist ein öffentliches Referenzsystem zur eindeutigen Identifikation bekannter Sicherheitslücken in Software und Hardware. Jede CVE erhält eine standardisierte Kennung (z. B. CVE-2024-12345), die eine konsistente Kommunikation über Schwachstellen zwischen Herstellern, Sicherheitstools und Organisationen ermöglicht. CVEs bilden die Grundlage für viele Vulnerability-Scanner, Patch-Management-Prozesse und Risikobewertungen. Die offizielle CVE-Datenbank wird von der MITRE Corporation gepflegt und ist unter [cve.org](https://www.cve.org) abrufbar.
```

