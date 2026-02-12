# Protokoll (S)

Grundsätzlich unterscheidet man:

1. **Textbasierte Protokolle**  
   Daten werden als Zeichen übertragen.  
   Beispiele: ``stdin/stdout``, HTTP (Text), JSON

2. **Binäre Protokolle**  
   Daten werden als Bytes übertragen.  
   Beispiele: TCP/IP
```

Problem:

Wir erhalten Bytes oder Text. Die ursprüngliche Bedeutung in unserem Programm müssen wir selbst hergestellen: 

Nehmen wir an, wir haben den Text

```
"Meine Zahlen: 2,3,4"
```

erhalten.
Die Zeichen "2", "3" und "4" sind hier Text und keine echten Zahlen.
Zum Rechnen brauchen wir aber echte Zahlen!

-> wie wir das erreichen besprechen wir im nächsten abschnitt


tipp:

wenn jemand sagt "das geht dann über eine schnittstelle xyz"
fragen Sie nach:
- wie ist die schnittstelle beim sender und empfänger implementiert?
- wie heisst das protkoll?
- wer kümmert sich darum dass der empfänger empfangen kann ("aktiv ist")? 
- gibt der empfänger dem sender eine bestätigung, dass er etwas korrekt empfangen hat? 
- kann der empfänger fehlerhafte sendungen erkennen oder sogar korrigieren?

