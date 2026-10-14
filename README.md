# plata8jp-blip.github.io

Raíz del dominio. Solo contiene:

- `.well-known/assetlinks.json`: verificación de Digital Asset Links para la app Android de Parla (`io.github.plata8jpblip.parla`). Debe incluir las huellas SHA-256 de la clave de subida y de la clave de firma de apps de Google Play.
- `.nojekyll`: sin él, GitHub Pages ignora las carpetas que empiezan por punto (como `.well-known`).
- `index.html`: redirige a https://plata8jp-blip.github.io/parla/
