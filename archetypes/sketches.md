---
hero: images/{{ .File.ContentBaseName }}.png
completed: {{ substr .File.ContentBaseName 0 4 }}-{{ substr .File.ContentBaseName 4 2 }}-{{ substr .File.ContentBaseName 6 2 }}
height: {{ partial "fn/GetImageRatio" (add "images/" .File.ContentBaseName ".png") }}
portfolios: []
---
