# Grafische und animierte Ausgaben (V)

Im vorherigen Abschnitt ging es um textbasierte Ausgabe: `print()` schickt Zeichen auf die Standard-Ausgabe (`stdout`), und die erscheinen als Text im Terminal oder unter der Notebook-Zelle.

Programme können aber auch andere Arten von Ausgabe nutzen – z.B. Grafiken oder Animationen. Diese laufen über andere Schnittstellen als stdout.

**Plots und Grafiken**

Mit Bibliotheken wie Matplotlib erzeugen Sie Bilder (Diagramme, Kurven, Histogramme).

- `plt.show()` (bzw. `matplotlib.pyplot.show()`) sorgt dafür, dass die erstellte Grafik angezeigt wird.
- Je nach Umgebung erscheint sie
  - in einem eigenen Fenster oder
  - in der Notebook-Ausgabe unter der Zelle.

Der Inhalt ist dann **kein Text**, sondern ein gerendertes Bild.

**Animationen**

Wenn Sie eine Abfolge von Einzelbildern als Animation darstellen wollen (z.B. einen Roboter, der durch ein Labyrinth läuft), nutzen Sie typischerweise eine Animationsfunktion wie `rw.animate(world)` aus roboworld.

Das Ergebnis ist ein abspielbares Video bzw. eine interaktive Animation in der Zelle.
Wiederum: keine Textausgabe über stdout.

Für die Anzeige solcher Animationen in Jupyter werden oft Einstellungen wie `%matplotlib inline` und `mpl.rcParams["animation.html"] = "jshtml"` gesetzt, damit die Animation im Notebook eingebettet und abspielbar ist.

**Beispiel: Von Textausgabe zu grafischer Ausgabe**

Im Roboworld-Kontext können Sie die Textausgabe mit `robo.disable_print()` abschalten und stattdessen die Simulation am Ende mit `rw.animate(world)` als Animation ausgeben. Statt fortlaufender Textmeldungen sehen Sie dann einen bewegten Ablauf – ein anderer Ausgabetyp:

```python
import random as rnd
%matplotlib inline
import matplotlib as mpl
mpl.rcParams["animation.html"] = "jshtml"
mpl.rcParams["animation.embed_limit"] = 50

def random_move(robo):
    turns = rnd.choice([0, 1, 2, 3])
    for _ in range(turns):
        robo.turn_left()
    if not robo.is_wall_in_front():
        robo.move()

robo = world.get_robo()
robo.disable_print()        # Textausgabe abschalten
while not robo.is_at_goal():
    random_move(robo)

rw.animate(world)           # Grafische/animierte Ausgabe
```

**Welche Ausgabekanäle gibt es – und wann schlagen sie fehl?**

| Ausgabetyp | Kanal | Wann sichtbar? | Headless (z.B. CI, Server)? |
|------------|-------|----------------|-----------------------------|
| Text (`print()`) | stdout (Dateideskriptor 1) | Terminal, Notebook-Textausgabe | Ja, funktioniert |
| Grafik (`plt.show()` mit GUI-Backend) | Display-Server (X11, Wayland) | Eigenes Fenster | Nein – fehlgeschlagen |
| Grafik/Animation (inline im Notebook) | Notebook-Rich-Output (PNG/HTML eingebettet) | Unter der Zelle | Ja, wenn korrekt konfiguriert |

**Headless** bedeutet: Die Umgebung hat keinen Bildschirm und keinen Display-Server (z.B. Docker-Container, GitLab CI, Server im Rechenzentrum).

Dann gilt:

- Alles, was ein echtes Fenster öffnen will, schlägt fehl.
  Beispiel: `plt.show()` mit einem GUI-Backend (Tk, Qt), weil kein X11/Wayland vorhanden ist.

Für headless Umgebungen werden daher typischerweise **softwarebasierte Backends** wie `Agg` genutzt:

- Matplotlib rendert die Grafik im Speicher zu einem Bild (PNG).
  Dieses Bild wird dann z.B. in die Notebook-Ausgabe eingebettet – ohne Display.
- Mit `%matplotlib inline` und passender Konfiguration (z.B. `MPLCONFIGDIR`, `MPLBACKEND=Agg`) funktionieren Plots und Animationen auch headless.

Der Text über stdout funktioniert in jedem Fall.

```{admonition} Kurz zusammengefasst
:class: note

Nicht jede Ausgabe eines Programms ist Text. `print()` nutzt stdout. Grafiken (`plt.show()`) und Animationen (`animate()`) nutzen andere Ausgabekanäle – und erscheinen dort, wo die Laufzeitumgebung Bilder und Videos anzeigt (z.B. unter der Zelle im Notebook). In headless Umgebungen funktioniert nur stdout garantiert; Grafiken erfordern ein softwarebasiertes Backend statt eines GUI-Fensters.
```
