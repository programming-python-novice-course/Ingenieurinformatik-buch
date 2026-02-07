# Sichtbarkeit (S)

Es gibt also mehrere *Namensräume* und wie in einem Wörterbuch müssen die Schlüssel, d.h. die Namen innerhalb eines Namensraums eindeutig sein.
Allerdings kann es den gleichen Namen in verschiedenen Namensräumen geben und dieser kann auf unterschiedliche Objekte verweisen.

Existiert ein Name nun in mehreren Namensräumen, woher wissen wir welcher Namensraum von ``Python`` verwendet wird?
Der Namensraum den ``Python`` wählt, legt fest welches Objekt (im Speicher) wir schlussendlich adressieren!

Die *Sichtbarkeit* bzw. der *Scope* entscheidet darüber!
Der *Scope* eines Namens ist der Bereich eines Programms in dem der Name eine Bedeutung hat.
Der [Interpreter](def-interpreter) bestimmt dies zur Laufzeit.
Als Basis verwendet er die Information, wo die Namensdefinitionen auftauchen, und wo der Name referenziert wird.

Bezieht sich unser Code auf den Namen ``x``, so sucht ``Python`` den Namen ``x`` in der folgenden Reihenfolge:

1. **Lokal**: Sofern wir ``x`` innerhalb einer Funktion referenzieren, sucht ``Python`` im lokalen Namensraum der Funktion.
2. **Enclosing**: Referenzieren wir ``x`` innerhalb einer umschlossenen Funktion und so sucht der Interpreter als nächstes im umschließenden Namensraum der umschließenden Funktion.
3. **Global**: Schlägt dies auch fehl und er findet ``x`` nicht, sucht der Interpreter im globalen Namensraum.
4. **Built-in**: Wenn selbst das fehlschlägt, sucht der Interpreter als letztes im built-in Namensraum.
