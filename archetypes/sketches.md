---
hero: images/{{ .File.ContentBaseName }}.png
height: {{ partial "fn/GetImageRatio" (add "images/" .File.ContentBaseName ".png") }}
portfolios: []
---
