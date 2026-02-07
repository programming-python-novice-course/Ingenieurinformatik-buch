# ``if``-``if``-``else`` (S)

Aufeinanderfolgende ``if``-Statements sind nicht eine sondern mehrere Fallunterscheidungen, denn jedes ``if``-Statement leitet eine neue Fallunterscheidung ein!

```{code-cell} python3
x = 2

if x <= 2:
    print(f'x <= 2')
    x += 1
if x <= 5:
    print(f'x <= 5')
    x += 2
if x <= 7:
    print(f'x <= 7')
    x += 10
else:
    print(f'x > 2 and x > 5 and x > 7')
    x = 2   
print(x)
```

```{admonition} Aufeinander folgende Fallunterscheidungen
:class: remark
:name: remark-multi-cases
Es ist zu empfehlen aufeinanderfolgende ``if``-Statements durch eine Leerzeile zu trennen.
```

```{code-cell} python3
x = 2

if x <= 2:
    print(f'x <= 2')
    x += 1
    
if x <= 5:
    print(f'x <= 5')
    x += 2
    
if x <= 7:
    print(f'x <= 7')
    x += 10
else:
    print(f'x > 2 and x > 5 and x > 7')
    x = 2   
print(x)
```
