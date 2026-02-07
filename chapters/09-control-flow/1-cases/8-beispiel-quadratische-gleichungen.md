# Beispiel (quadratische Gleichungen) (V)

Sei $f(x) = ax^2 + bx + c$ mit konstanten Zahlen $a, b, c \in \mathbb{R}$. Wir wissen, dass $f(x) = 0$ für

$$x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

sofern $b^2 - 4ac >= 0$.
Lassen Sie uns eine Funktion ``solve_quadratic(a, b, c)`` entwerfen, welche uns alle $x_{1,2}$ berechnet. 
Es gibt eine, zwei oder keine Lösung.

Lassen Sie uns als erstes eine Funktion entwerfen, die testet ob eine Fließkommazahl annähernd gleich null ist.
Beachten Sie: [Fließkommazahlen](sec-float) sind lediglich eine Annäherung des echten Wertes und damit ist der exakte Vergleich ``==`` ungeeignet.
Stattdessen ist unsere Fließkommazahl ``x`` gleich null, falls sie annähernd gleich null ist.

```{code-cell} python3
def is_zero(x):
    epsilon = 1.0e-12
    return -epsilon < x < 1.0e-12
```

Lassen Sie uns nun die quadratische Gleichung lösen.
Dazu müssen wir lediglich die Formel für $x_{1,2}$ implementieren:

```{code-cell} python3
def solve_quadratic(a, b, c):    
    disc = b**2 - (4*a*c)
            
    # disc < 0 => no solution
    if disc < 0:
        return ()
    
    # disc == 0? => one solution
    if is_zero(disc):
        return -b / (2*a),
    
    # default case => 2 solutions
    return (-b + disc**0.5) / (2*a), (-b - disc**0.5) / (2*a)
```

Der Code scheint zur richtigen Lösung zu führen:

```{code-cell} python3
print(f'solution for x^2 -4x + 1 = 0: {solve_quadratic(1, -4, 1)}')
print(f'solution for x^2 + x = 0: {solve_quadratic(1, 1, 0)}')
print(f'solution for x^2 = 0: {solve_quadratic(1, 0, 0)}')
```

Was passiert allerdings wenn ``a==0`` ist?

```{code-cell} python3
---
tags: [raises-exception]
---
print(f'solution for -4x + 1 = 0: {solve_quadratic(0, -4, 1)}')
```

In diesem Fall teilen wir durch null und erhalten (zum Glück) einen Fehler.
Sofern ``a==0`` gilt müssen wir die lineare Gleichung 

$$bx + c = 0 \Rightarrow x = c/b$$

lösen.

Hier wartet ein weiterer Sonderfall für ``b==0``!
In diesem Fall gibt es kein Ergebnis sofern ``c != 0``, andernfalls gibt es unendlich viele Lösungen.
Nutzen wir die Fallunterscheidung um all diese Sonderfälle abzudecken:

```{code-cell} python3
def solve_quadratic(a, b, c):
    """"
    solves the quadratic equation ax^2 + bx + c = 0.
    a == b == c == 0 is not allowed!
    """
    
    disc = b**2 - (4*a*c)
    epsilon = 1.0e-12
    
    # a == 0? => line => one or none solution
    if is_zero(a):
        # b == 0? 
        if is_zero(b):
            # c == 0 => infinitely many solutions
            if is_zero(c):
                raise AttributeError('Invalid arguments a == b == c == 0! This quadratic equation has infinitely many solutions.')
            else:
                return ()
        else:
            return -c/b,
        
    # disc < 0 => no solution
    if disc < 0:
        return ()
    
    # disc == 0? => one solution
    if is_zero(disc):
        return -b / (2*a),
    
    # default case => 2 solutions
    return (-b + disc**0.5) / (2*a), (-b - disc**0.5) / (2*a)
```

```{code-cell} python3
print(f'solution for x^2 -4x + 1 = 0: {solve_quadratic(1, -4, 1)}')
print(f'solution for x^2 + x = 0: {solve_quadratic(1, 1, 0)}')
print(f'solution for x^2 = 0: {solve_quadratic(1, 0, 0)}')
print(f'solution for -4x + 1 = 0: {solve_quadratic(0, -4, 1)}')
print(f'solution for 1 = 0: {solve_quadratic(0, 0, 1)}')
```

Gilt ``a == b == c == 0`` wird unsere Funktion zu $f(x) = 0$ und demnach gilt für jedes $x_0 \in \mathbb{R}$ dass es eine Nullstelle ist.
Das wären unendlich viele Zahlen, deshalb werfen wir (``raise``) in diesem Fall einen Fehler.

```{code-cell} python3
---
tags: [raises-exception]
---
print(f'solution for 0 = 0: {solve_quadratic(0, 0, 0)}')
```
