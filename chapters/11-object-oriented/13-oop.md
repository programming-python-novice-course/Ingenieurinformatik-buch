---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# OOP-Variante

Was wäre, wenn wir anstelle eines Wrappers einfach den Hintergrund austauschen? Was der wrapper ja macht ist, dass wir dem Hintergrund ein element hinzufügen.
Was wäre wenn wir einfach sagen: es gibt mehrere arten von Hintergründen:
- weiß
- weiß mit Logo

Und der Programmierer entscheidet einfach über eine Einstellung was er will:
also sowas in der Art

matplotlib.plot( hintergrund = "weiss")
matplotlib.plot( hintergrund = "weissmitlogo")

Das hätte den Vorteil dass
- alle Personen können weiterhin matplotlib verwenden und müssen nicht erst jede einzelne der wrapper funktionen durchlesen und verstehen.
- wir haben keine 20 wrapper-funktionen!! -> code ist wartbarer, einfacher zu verstehen


## Wie könnte man das erreichen?
Matplotlib ist wie viele externe Python-Biliotheken objektorientiert.
Objektorientierung begünstigt, dass einzelne Komponenten einfach ausgetauscht werden. 

Was haben wir denn für komponenten?
- es gibt ein Logo 
- es gibt die Komponente hintergrund (axes in matplotlib) 
- es gibt die komponente linie (??)
- es gibt die komponente rahmen (??)
- es gibt die gesamte Grafik (figure), die sich aus den komponenten .. zusammesetzt.

Die Idee: Wir tauschen den alten hintergrund erinfach aus:
- das Logo bildet zusammen mit dem alten hintergrund (komponente) eine neur Art von Hintergrund: "Zusammengesetzter Hintergrund" 

Wie erreichen wir das?
- indem wir matplotlibsagen dass es eine neue art von hintergrund gibt - matplotlib ist objektorientiert gedacht und bietet solche funktionalitäten an, dass man dinge einfach austauschen kann.

- woher weiss matplotlib ob das wirklich ein hintergrund ist? also beispiel: wenn wir eine schraube im motor austauschen wollen, dann können wir eine schraube mit einer höheren festigkeitsklasse nehmen - aber keine niete! wir müssen also sicherstellen dass sich unser neuer hintergrund so verhält wie ein hintergrund. wir erreichen dass dadurch dass wir basierend auf dem vorhanden hintergrund eine neue variante erzeugen.

- Die **Vererbung** sehen Sie direkt in `class LogoAxes(Axes):` – `LogoAxes` ist eine *Kindklasse* von Matplotlibs `Axes`-Klasse. Dadurch kann ein `LogoAxes` alles, was ein normales `Axes` kann (`plot`, `scatter`, `set_title`, …).
- Mit `super().__init__(...)` wird zuerst ein „normales“ `Axes` aufgebaut (Konstruktor der Elternklasse). **Danach** fügen wir unser Zusatzverhalten hinzu (`self._ensure_logo()`).
- `register_projection(LogoAxes)` ist keine Vererbung, sondern eine **Anmeldung bei Matplotlib**: wir geben unserem `Axes`-Typ den Namen `LogoAxes.name = "logo"` und sagen Matplotlib, dass es bei `projection="logo"` künftig ein `LogoAxes` erzeugen soll.

```{code-cell} python3
from matplotlib.axes import Axes
from matplotlib.projections import register_projection


class LogoAxes(Axes):
    """Ein Matplotlib-Axes, das automatisch ein Logo einfügt."""

    name = "logo"

    def __init__(
        self,
        *args,
        logo_url: str = LOGO_URL,
        logo_zoom: float = 0.07,
        logo_xy=(0.92, 0.88),
        **kwargs,
    ):
        # Eigene Parameter speichern (nicht an Axes weiterreichen).
        self._logo_url = logo_url
        self._logo_zoom = logo_zoom
        self._logo_xy = logo_xy
        self._logo_artist = None

        super().__init__(*args, **kwargs)
        self._ensure_logo()

    def _ensure_logo(self):
        if self._logo_artist is not None:
            return

        logo = load_logo(self._logo_url)
        imagebox = OffsetImage(logo, zoom=self._logo_zoom)
        self._logo_artist = AnnotationBbox(
            imagebox, self._logo_xy, xycoords="axes fraction", frameon=False
        )
        self.add_artist(self._logo_artist)


register_projection(LogoAxes)
# Ab hier kennt Matplotlib unseren neuen Axes-Typ:
# fig.add_subplot(..., projection="logo") -> erzeugt ein LogoAxes-Objekt.


fig = plt.figure()
ax = fig.add_subplot(111, projection="logo", logo_url=LOGO_URL)
ax.plot([0, 1, 2, 4, 6], [2, 1, 3, 0, 1])
ax.set_title("OOP: Axes-Subclass mit Logo")

plt.show()
```


Was haben wir in dem beispiel gemacht?

wir haben eine komponente ausgetauscht - der plot an sich funktioniert wie vorher .. über eine einfache konfiguration des nutzers pojection = "logo" bekommen wir eine andere konfiguration des plots.

Die wichtigste Idee hinter objektorientierter Programmierung ist:
> Große Systeme so bauen, dass man kleine Teile ändern kann, ohne alles andere anzufassen.

**Vergleich**
Stellen Sie sich ein Auto vor.
Das Auto besteht aus vielen Baugruppen:
- Karosserie
- Motorraum
- Antrieb
- Motor
- einzelne Schrauben

Wenn eine Schraube am Motor geändert werden soll, möchte man nicht:
- das ganze Auto neu konstruieren
- den Motorraum umbauen
- das Getriebe ändern

Man möchte:
dass eine kleine Änderung in einer Baugruppe sich nicht auf andere Baugruppen auswirkt. Oder möchten Sie, dass nachdem die Schrauben am Motor ausgetauscht wurden plötzlich eine anderen Sitzbezug wiederfinden?

Objektorientierung erlaubt:
Bauteile so zu definieren, dass sie gleich angeschlossen bleiben,
aber innen anders funktionieren dürfen.
Von außen sieht es gleich aus.
Innen kann sich etwas ändern.

Beispiel:
- Standard-Motor
- Motor mit zusätzlichem Sensor

Beide passen ins gleiche Auto, weil die Schnittstellen gleich bleiben (Aufhängung, Welle, Anschlüsse).

Übertragung auf Software
In großen Programmen gibt es auch „Bauteile“:
- Fenster
- Diagramme
- Sensor-Modelle
- Regelungsblöcke

Wenn diese klar definiert sind, kann man: 
- eine Variante austauschen
- Verhalten erweitern
ohne den Rest umzubauen



Moderne Software- oder Software-/Hardware-Systeme sind: 
- sehr groß
- langlebig
- von vielen Menschen entwickelt werden

Objektorientierung begünstigt im gegensatz zu prozeduralrer und funtkionaler programmiereung stärker die schaffung von Softwarestrukturen in denen komponenten einfach auszutauschen sind - weil in komponenten ("Objekten") gedacht wird.

Es ist allerdings kein garant dafür! es gibt objektorientierte software in denen gar nichts ausgetauscht werden kann, weil die architektur nciht passt!! ("der motor ist auf dem beifahrersitz gelagert und muss während dem tanken immer laufen, weil sonst sicherung fliegt" ) 

UND 
es gibt prozedurale software in denen jede komponente super ausgetauscht werden kann! Deshalb: nur weil etwas objektorientiert ist, ist es nicht besser oder schlechter!!


Wichtig:
Die Motivation hinter objektorientierter Programmierung ist: Große Systeme so bauen, dass man kleine Teile ändern kann, ohne alles andere anzufassen. Umgesetzt wird das mit Klassen.