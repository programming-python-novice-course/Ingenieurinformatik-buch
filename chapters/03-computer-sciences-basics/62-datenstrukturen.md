
# Datenstrukturen

Da sich alle Daten (Programm und dessen Eingabe/Ausgabe) im [Arbeitsspeicher](def-main-memory) befinden, müssen wir begreifen welche Funktionalität diese *konkrete* Datenstruktur bietet.
Alle weiteren *abstrakten* Datenstrukturen bauen auf diesen Möglichkeiten auf.

Es gibt zwei wesentliche Arten, wie Datenstrukturen im Arbeitsspeicher realisiert werden:

(1) Statische Sammlungen
: Die [Sammlung](def-collection) liegt als zusammenhängende Folge von [Bits](def-bit) im Arbeitsspeicher

(2) Dynamische Sammlungen 
: Die [Sammlung](def-collection) besteht aus mehreren zusammenhängenden Folgen von [Bits](def-bit), die voneinander getrennt im Arbeitsspeicher liegen. - wird von Python genutzt.

```{admonition} Statische Sammlungen
:name: def-static-ds
:class: definition
*Statische Sammlungen* können zur Laufzeit des Programms ihre Größe nicht verändern, d.h. ihr Speicherverbrauch kann sich **nicht** verändern. 
Stattdessen muss eine neue Datenstruktur angelegt werden.
```

```{admonition} Dynamische Sammlungen
:name: def-dynamic-ds
:class: definition
*Dynamische Sammlungen* können zur Laufzeit des Programms anwachsen und schrumpfen, d.h. ihr Speicherverbrauch kann sich verändern. Möglich wird dies durch die Verwendung von *[Zeigern](sec-pointer)*. Damit die fragmentierten Teile als ganzes repräsentiert werden können, müssen sie verbunden werden.
Dies wird durch sog. *[Zeiger/Pointer](def-pointer)* realisiert.
Oft spricht man auch von einer *Referenz*.
Dabei ist wichtig, dass ein *Zeiger* wiederum auf einen weiteren *Zeiger* *zeigen/verweisen/referenzieren* kann.
```

```{admonition} Zeiger
:name: def-pointer
:class: definition
Ein *Zeiger* ist ein Objekt welches eine Speicheradresse repräsentiert.
Programmiersprachen bieten die Mittel um Zeiger *aufzulösen*, was den Zugriff auf das Objekt auf das sie verweisen ermöglicht.
```


## Überblick über wichtige Datenstrukturen

In diesem Abschnitt unterscheiden wir zwei Perspektiven:

- **Abstrakte Datentypen (ADT)** beschreiben *das Verhalten* einer Sammlung: welche Operationen erlaubt sind und in welcher Reihenfolge (z. B. FIFO/LIFO).
- **Implementierungen** beschreiben *die Realisierung im Speicher*: liegen Elemente zusammenhängend oder verkettet, statisch oder dynamisch?

Wichtig: **Ein ADT kann durch verschiedene Implementierungen realisiert werden** (z. B. eine Queue als verkettete Liste *oder* auf Basis eines Arrays).

Das folgende Bild gibt einen Überblick über eine **strukturelle** Klassifikation (z. B. linear vs. nicht-linear). Diese Einordnung ist **unabhängig** von der Unterscheidung ADT vs. Implementierung.

- **Lineare Datenstrukturen**: Die Elemente sind in einer bestimmten Reihenfolge angeordnet.
  - **Statische lineare Strukturen**: Die Größe ist fest und kann sich nicht ändern.
  - **Dynamische lineare Strukturen**: Die Größe kann zur Laufzeit verändert werden.
- **Nicht-lineare Datenstrukturen**: Die Elemente sind nicht in einer einfachen Reihenfolge angeordnet.

```{figure} ../../figs/03-computer-sciences-basics/overview/datenstrukturen.png
:name: fig-data-structures-overview
:width: 100%
:align: center

Überblick über wichtige Datenstrukturen
```

### Abstrakte Datentypen (ADT)

(sec-stack)=
Der *Stapel* (engl. *Stack*) oder auch *Stapelspeicher/Keller* ist einer der einfachsten [dynamischen Sammlungen](def-dynamic-ds), welche dem *Last-In-First-Out (LIFO)* Prinzip folgt.
LIFO bedeutet soviel wie: *zuletzt hinein - zuerst heraus*.
Das was zuletzt hinein gekommen ist, wird auch als erstes herausgenommen.
Stellen Sie sich einen Stapel aus Büchern vor.
Das Buch was Sie zuletzt auf den Bücherstapel gelegt haben liegt zugriffsbereit ganz oben.

Typische Operationen sind: **push** (ablegen), **pop** (entnehmen) und **top/peek** (oberstes Element ansehen).
Ein Stack kann z. B. als Array/dynamisches Array oder als verkettete Liste implementiert werden.

(sec-queue)=
Die *Warteschlange* (engl. *Queue*) ist eine [dynamische Sammlung](def-dynamic-ds) und folgt dem sog. *First-In-First-Out (FIFO)* Prinzip.
FIFO bedeutet soviel wie: *zuerst hinein - zuerst hinaus*.
Das was zuerst hinein gekommen ist, wird auch als erstes herausgenommen.
Der Name rührt daher, dass die Datenstruktur wie eine Warteschlange an der Kasse funktioniert.
Kunden die sich zuerst in die Schlange einreihen, werden auch zuerst bedient.

Typische Operationen sind: **enqueue** (hinten anstellen), **dequeue** (vorne entnehmen) und **front/peek** (vorderstes Element ansehen).
Auch eine Queue kann auf unterschiedliche Weise implementiert werden (z. B. verkettet oder als Ringpuffer auf Basis eines Arrays).

### Implementierungen (Speicherrepräsentationen)

(sec-array)=
Ein *Array* ist eine [statische Sammlung](def-static-ds) mit direktem Indexzugriff.
Es wird durch einen zusammenhängenden Speicherbereich realisiert.
Ein Array beinhaltet üblicherweise Elemente die alle vom gleichen [Datentyp](def-datatypes) sind.
Arrays bieten effizienten Zugriff über einen Index, können aber ihre Größe nicht dynamisch ändern.

```{admonition} Arrays in Python?
:name: remark-arrays-python
:class: remark
Anders als in den meisten Sprachen, gibt es in ``Python`` keine nativen Arrays.
```

Es gibt sog. [Tupel](sec-tuple), die einem Array nahekommen, jedoch kann man die Elemente eines Tupels nicht verändern.
``Python``-Listen sind hingegen [dynamische Arrays](sec-dynamic-array).
Details zu Tupeln und Listen finden Sie im Kapitel [Tupel](sec-tuple) und [Listen](sec-list).

(sec-dynamic-array)=
*Dynamische Arrays* kombinieren die Vorteile von Arrays (effizienter Indexzugriff) mit der Flexibilität dynamischer Sammlungen (Größenänderung zur Laufzeit).
Sie basieren auf einem zusammenhängenden Speicherbereich, der jedoch bei Bedarf neu angelegt wird.
Die ``Python``-[Liste](sec-list) ist ein *dynamisches Array*.
Details zur Arbeit mit Listen in ``Python`` finden Sie im Kapitel [Listen](sec-list).

(sec-linked-list)=
Eine *verkettete Liste* (engl. *Linked List*) besteht aus Knoten, die durch [Zeiger](def-pointer) verbunden sind.
Jeder Knoten enthält Daten und einen Zeiger auf den nächsten Knoten.
Sie ist eine [dynamische Sammlung](def-dynamic-ds), d.h. sie kann zur Laufzeit vergrößert und verkleinert werden.
Haben wir direkten Zugriff auf einen Knoten so können wir in die *verkettete Liste* ein neues Element effizient einfügen ohne dabei die anderen Elemente der Liste zu verschieben -- ein wesentlicher Vorteil dieser Datenstruktur.



```{admonition} Mehr Hintergrund
:class: note
Mehr Hintergrund zum Thema Speichern von Datenstrukturen finden Sie im [Expertenwissen: Speicherlayout von Datenstrukturen](sec-memory-layout).
```

