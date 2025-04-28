---
hero: images/{{ .File.ContentBaseName }}.png
completed:
height: {{ partial "fn/GetImageRatio" (add "images/" .File.ContentBaseName ".png") }}
portfolios: []
---
