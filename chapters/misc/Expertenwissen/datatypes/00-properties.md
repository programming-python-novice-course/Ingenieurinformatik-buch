(sec-data-props)=
# Datentypen - Eigenschaften

Datentypen lassen sich nach drei Eigenschaften klassifizieren:

1. Zerteilbarkeit: atomar oder zusammengesetzt?  
   Atomar bedeutet: der Wert ist „ein Ding“ (z. B. `int`, `float`, `bool`).  
   Zusammengesetzt bedeutet: der Wert besteht aus mehreren Teilen oder enthält andere Werte (z. B. `list`, `tuple`, `dict`, `set`, auch `str` als Folge von Zeichen).

2. Abstraktionsgrad: primitiv - ja oder nein?  
   Die Idee ist: Manche Typen sind nah an grundlegenden Werten (Zahlen, Wahrheitswerte, Text), andere Typen dienen vor allem dazu, Werte zu strukturieren oder Beziehungen auszudrücken (Sammlungen wie `list`/`dict` oder eigene Klassen). Oft spricht man hier von „primitiven“ vs. „komplexen“ Typen, aber in Python ist der Begriff „primitiv“ nicht so sauber wie in C/Java: In Sprachen wie C/Java meint „primitive“ meist Werttypen (direkt im Speicher/Stack, keine Objektidentität, andere Semantik als Objekte/Referenzen). In Python gilt dagegen: Alles sind Objekte (auch `int`, `bool`, `float`, `str`). Im strengen, technischen Sinn gibt es daher in Python keine „primitiven Datentypen“ wie in C/Java!

3. Herkunft: built-in oder benutzerdefiniert?
   Built-in Typen kommen mit Python (z. B. `int`, `str`, `list`, `dict`).  
   Benutzerdefinierte Typen bauen Sie selbst (typisch mit `class`), um Begriffe aus der Domäne zu modellieren; intern verwenden sie meistens wieder built-in Typen.
