---
hero: images/{{ .File.ContentBaseName }}.png
completed: {{ with .File.ContentBaseName }}{{ substr . 0 4 }}-{{ substr . 4 2 }}-{{ substr . 6 2 }}{{ end }}
weight:
height: {{ partial "fn/GetImageRatio" (add "images/" .File.ContentBaseName ".png") }}
featured:
---
