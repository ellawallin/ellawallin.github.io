---
title: {{ replace .File.ContentBaseName "-" " " | title }}
published: {{ .Date | time.Format "2006-01-02" }}
modified:
hero:
---
