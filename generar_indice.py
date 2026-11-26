#!/usr/bin/env python3
"""Genera el índice del visor a partir de las carpetas Practica_* cercanas."""
import json
from pathlib import Path

app = Path(__file__).resolve().parent
root = app.parent
groups = []
for folder in sorted(root.glob("Practica_*")):
    if not folder.is_dir():
        continue
    exercises = []
    for sub in sorted(p for p in folder.iterdir() if p.is_dir()):
        files = sorted(p for p in sub.rglob("*") if p.is_file())
        html = next((p for p in files if p.suffix.lower() == ".html"), None)
        js = next((p for p in files if p.suffix.lower() == ".js"), None)
        rel = lambda p: "../" + p.relative_to(root).as_posix()
        exercises.append({
            "name": sub.name,
            "html": rel(html) if html else None,
            "js": rel(js) if js else None,
            "files": [rel(p) for p in files],
        })
    groups.append({"name": folder.name, "annex": "_Anexos" in folder.name, "exercises": exercises})
(app / "indice.json").write_text(json.dumps(groups, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Índice actualizado: {sum(len(g['exercises']) for g in groups)} carpetas de ejercicios en {len(groups)} prácticas.")
