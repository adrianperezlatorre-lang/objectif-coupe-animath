#!/usr/bin/env python3
"""Empaqueta index.html + styles.css + data/*.js + app.js en un solo archivo
HTML autónomo (objectif-animath.html) que funciona con doble clic, sin servidor ni internet."""
import re, pathlib

root = pathlib.Path(__file__).parent
html = (root / "index.html").read_text(encoding="utf-8")
css  = (root / "styles.css").read_text(encoding="utf-8")

# 1) Quitar las líneas de fuentes de Google (para que funcione sin internet)
html = re.sub(r'\s*<link rel="preconnect"[^>]*>', '', html)
html = re.sub(r'\s*<link href="https://fonts\.googleapis[^>]*>', '', html)

# 2) Inlinar la hoja de estilos
html = html.replace('<link rel="stylesheet" href="styles.css" />',
                    f'<style>\n{css}\n</style>')

# 3) Inlinar cada <script src="..."></script> con su contenido
def inline(m):
    src = m.group(1)
    code = (root / src).read_text(encoding="utf-8")
    return f'<script>\n{code}\n</script>'

html = re.sub(r'<script src="([^"]+)"></script>', inline, html)

out = root / "objectif-animath.html"
out.write_text(html, encoding="utf-8")
print(f"OK -> {out}  ({out.stat().st_size//1024} KB)")
