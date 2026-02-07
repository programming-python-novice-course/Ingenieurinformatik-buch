# Merksatz fürs Praktikum (empfohlenes Muster) (V)

- Schreiben Sie Bausteine als **Funktionen** (und später ggf. als Module).
- Schreiben Sie den Ablauf unter if __name__ == "__main__":

```python

## hier bausteine

# ------- ###
if __name__ == "__main__":
    # Geschäftslogik:
    # Schritt 1
    # Schritt 2
    #Schritt 3
```

```{admonition} Exkurs (optional): Design Patterns
:class: tip
:name: tip-design-patterns
Damit sich Personen in größeren Softwareprojekten zurechtfinden, wird der Code normalerweise nach bestimmten Strategien strukturiert, woraus sich dann eine bestimmte Ordnerstruktur ergibt. Die Strategien, die man dort anwendet,  nennt man Design patterns.
**Design Patterns** sind wiederkehrende Lösungsbausteine (Muster). Ein besonders bekanntes ist das Model View Controller Pattern.
```
