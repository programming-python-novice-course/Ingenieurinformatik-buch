# Namensräume (S)

Ein *Namensraum* ist eine Sammlung von derzeit definierten symbolischen Namen mit der jeweiligen Information welches Objekt (im Speicher) der jeweilige Name referenziert.
Wir können uns einen Namensraum als ein [Wörterbuch](sec-dict) vorstellen, wobei die Schlüssel die Namen sind und die Werte die jeweiligen Objekte.
Jedes Schlüssel-Wert-Paar bildet einen Namen auf sein entsprechendes Objekt ab.

In ``Python`` gibt es vier *Namensräume* (engl. namespaces):

1. *built-in*,
2. *global*
3. *enclosing*
4. *local*

Und alle diese *Namensräume* haben eine unterschiedliche *Lebensdauer*.
``Python`` kümmert sich automatisch um die Erstellung und Löschung der *Namensräume* zur Laufzeit.

## Built-in

Im *built-in Namensraum* befinden sich alle Namen aller ``Python`` *built-in* Objekte.
Zum Beispiel befinden sich die Namen ``len``, ``list``, ``str`` usw. in diesem Namensraum.
Diesen Namensraum sollten wir nicht verändern.
Wir können uns alle Namen des *built-in* Namensraums ausgeben lassen: 

```{code-cell} python3
---
tags: [output_scroll]
---
dir(__builtins__)
```

Sobald er startet, legt der ``Python``-[Interpreter](def-interpreter) den *built-in Namensraum* an.
Die *Lebensdauer* des Namensraums endet sobald der Interpreter beendet wird.

(sec-global-namespace)=
## Global

Der *globale Namensraum* beinhaltet alle Namen die auf der Ebene des Hauptprogramms definiert wurden.
``Python`` erzeugt den globalen Namensraum sobald das Hauptprogramm startet.
Der Namensraum existiert ebenfalls solange der Interpreter noch nicht beendet ist.

Genau genommen erzeugt der Interpreter für jedes Modul einen globalen Namensraum, es gibt somit möglicherweise mehrerer.
Jedes Modul was wir mit ``import`` laden, erhält seinen eigenen globalen Namensraum.

(sec-local-namespace)=
## Lokal und umschließend

Wann immer eine Funktion ausgeführt wird, wird ein neuer *lokaler Namensraum* für diesen Funktionsaufruf erzeugt.
Die Lebensdauer des Namensraums endet sobald die Funktion verlassen wird oder die Funktion durch einen Fehler abbricht.

Ein *umschließender Namensraum* wird hingegen erzeugt, wenn wir innerhalb einer Funktion eine weitere Funktion definieren.
Das haben wir bis hierher noch nie gemacht, sehen wir uns also ein Beispiel an.
Der folgende extra kompliziert gestaltete Code veranschaulicht mehrere Konzepte zugleich:

```{code-cell} python3
def f(y):
    print('start f()')
    x = 5
    t = 99

    def g():
        t = 0
        print('start g()')
        print(f'x from the enclosing namespace {x}')
        print(f'y from the enclosing namespace {y}')
        print(f'z from the enclosing namespace {z}')
        print(f't from the local namespace {t}')
        print('end g()')
        return
    
    z = 42
    print('end f()')
    return g

func = f(-20)
func()
```

``Python`` erzeugt während des Ablauf dieses Codes zwei Namensräume.

1. einen lokalen Namensraum für den Aufruf von ``g()``
2. einen umschließenden Namensraum für ``f()`` 

Der nachdem der Funktionsaufruf ``f(-20)`` zurückspringt, kann die Funktion ``g`` noch immer auf ``x``, ``y`` und ``z`` zugreifen!
Das funktioniert nur weil ``x``, ``y`` und ``z`` sich im *umschließenden Namensraum* von ``f(-20)`` befindet.

In der letzten Zeile rufen wir dieses ``g()`` durch ``func()`` auf.
Dabei wird ein lokaler Namensraum für den Aufruf erzeugt zugleich existiert der umschließende Namensraum.
In beiden gibt es die Variable ``t``.
Es wird jedoch die des lokalen Namensraums bevorzugt!

Nachdem wir wieder aus der Funktion ``func()`` zurückspringen wird der lokale Namensraum von ``func()`` gelöscht.
Der umschließende Namensraum bleibt hingegen solange besteht, solange es noch eine Referenz auf ``func`` gibt.

Bei jedem Aufruf von ``f(y)`` wird ein neuer umschließender Namensraum erzeugt.

Beachten Sie, dass wir ``z`` in der Funktionsdefinition von ``g`` verwenden obwohl es unterhalb der Definition steht.
Zur Laufzeit, d.h., wenn wir ``g()`` aufrufen existiert es jedoch.

Im Gegensatz dazu kracht es bei folgendem Code, da wir ``g()`` aufrufen bevor ``z`` initialisiert wurde:

```{code-cell} python3
---
tags: [raises-exception]
---
def f():
    def g():
        t = 0
        print(f'z from the enclosing namespace {z}')
        return
    g()
    z = 42
    return

f()
```
