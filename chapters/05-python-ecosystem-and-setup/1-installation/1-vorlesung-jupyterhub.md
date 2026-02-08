---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Vorlesung: interaktive Website und JupyterHub

In der Vorlesung arbeiten Sie über eine interaktive Website und auf dem JupyterHub der Hochschule München. Dort ist die Umgebung bereits eingerichtet: Sie können direkt programmieren, ohne lokal etwas zu installieren.


Wenn Sie später lokal arbeiten, unterscheidet sich vor allem eines: Sie müssen selbst entscheiden, welche Umgebung aktiv ist. Im JupyterHub ist das für Sie bereits gelöst.

Wenn Sie wissen möchten, welche Python-Version und welche Pakete dort installiert sind, können Sie das in Python abfragen:

```python
import sys

print("Python-Version:", sys.version)
print("Interpreter:", sys.executable)
```
