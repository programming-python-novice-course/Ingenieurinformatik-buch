# Definition (A)

In ``Python`` definieren wir eine Funktion mit dem Signalwort ``def`` (für Definition).
Es folgt der Funktionsname und in runden Klammern, getrennt durch Komma, die Parameter der Funktion.
Nach dem ``:`` beginnt der Funktionskörper, welcher eingerückt sein muss!

```python
def name_der_funktion(parameter1, parameter2, ...):
    '''
    An dieser Stelle steht der sog. "docstring".
    Dieser wird ausgegeben wenn help() zur Funktion aufgerufen wird.
    Er dient der Dokumentation und soll klären WAS Ihre Funktion macht.
    '''
    # Code
    # Code
    return output # (optional)
```

``Python`` erlaubt uns vor den Code des Funktionskörpers eine Zeichenkette zu schreiben.
Diese dient lediglich der Dokumentation.
Rufen wir zum Beispiel ``help(name_der_funktion)`` auf, erscheint genau jener Text.
Nach diesem ``docstring`` folgt unser Befehlsbündel.

Eine Funktion kann kein oder mehrere ``return``-Ausdrücke beinhalten.
Allerdings liefert eine ``Python``-Funktion immer etwas zurück.
Sollte die Funktion keinen ``return``-Ausdruck beinhalten oder das Programm in einen Zweig laufen, welcher ohne ein ``return`` endet, so gibt die Funktion ``None`` zurück.

Der Name für ``name_der_funktion`` darf frei vergeben werden.
Jedoch achtet man in der Programmierung stets auf **sprechende** Funktions- und Parameternamen.
Vergleichen Sie:

```{code-cell} python3
def dddd(something, l):
    """
    computes the subtraction of something and l.
    """
    return something - l
dddd(5, 6)
```

und

```{code-cell} python3
def subtract(x, y):
    """
    returns x - y
    """
    return x - y
subtract(5, 6)
```

Die erste Benennung erschwert das Lesen und Verstehen der Funktion.
Für die zweite Version müssen wir lediglich auf den Namen ``subtract`` und den kurzen ``docstring`` blicken um zu verstehen was die Funktion tut.

Den ``docstring`` könnten wir uns auch schenken, doch bedenken Sie dass andere Entwickler\*innen, welche Ihren Code benutzten, oft nicht in den Code blicken sondern sich lediglich den ``docstring`` ausgeben lassen.

```{admonition} Docstrings und Kommentare
:class: attention
:name: attention-missleading-doc

Nichts ist irreführender als fehlerhafte, widersprüchliche oder schlicht falsche Kommentare!
```
