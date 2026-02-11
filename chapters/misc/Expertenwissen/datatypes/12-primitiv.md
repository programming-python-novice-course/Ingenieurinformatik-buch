# Komplexität 

> Ein Datentyp kann entweder primitiv oder komplex sein.

In ``Python`` gibt es streng genommen keine primitiven Datentypen.

```{admonition} Primitive Datentypen
::name: def-primitive-datatypes
::class: definition

*Primitive Datentypen* sind jene Datentypen aus denen alle anderen Datentypen einer Sprache hervorgehen.
Sie sind nicht weiter reduzierbar.
```

>Worin besteht der Unterschied zwischen einem primitiven und einem atomaren Datentyp?

Nehmen wir zum Beispiel den ``Python`` Datentyp ``int``.
Der Wert vom Typ ``int`` besteht nicht nur ais dem reinen Wert der ganzen Zahl sondern enthält zusätzlich noch einen Zähler, welcher angibt wie viele Variablen auf den Wert verweisen.
Das heißt wir können ``int`` weiter in den Zähler und den eigentlichen Wert zerlegen.
Allerdings macht es keinen Sinn diese beiden Teile zu zersplittern und separat weiter zu verarbeiten -- sie gehören zusammen, da sie nur gemeinsam verarbeitbar sind!
Zeichenketten sind weder primitiv noch atomar, denn eine Zeichenkette lässt sich in ihre einzelnen Zeichen zersplittern und die Weiterverarbeitung der einzelner Zeichen macht durchaus Sinn.

Übertragen wir das auf die 'echte' Welt, so könnte man bei einem Brief von einem Wert eines [zusammengesetzten Datentyps](def-data-structures) sprechen.
Dieser enthält einen Briefkopf, ein Datum einen Absender, Empfänger und den Text.
Das Datum ist wiederum ein *zusammengesetzten Datentyp* bestehend aus Tag, Monat und Jahr.
Der Tag ist schließlich ein *primitiver* oder (in ``Python``) ein *atomarer* Datentyp (eine Zahl zwischen 0 und 31).

```{exercise} Der Datentyp Zeichenkette
::label: datatype-str-exercise
Ist ``set``, d.h. eine Menge, ein atomarer oder zusammengesetzter Datentyp?
Begründen Sie Ihre Antwort.
```

```{solution} datatype-str-exercise
::label: datatype-str-solution
::class: dropdown

``set`` ist ein zusammengesetzter Datentyp dessen Wert eine variable Anzahl an Werten verschiedener Datentypen enthalten kann.
```

