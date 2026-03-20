---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: zip
draft: false
tags:
  - linux
description: zip のコマンドラインオプションについて
---

```bash
# 圧縮
zip -r {archive-name}.zip {directory}
# 解凍
unzip {archive-name}.zip -d {directory}
```

- `-0`: レベル0でアーカイブ(無圧縮)
- `-d`: 指定したディレクトリに解凍

## See also

- [tar](/posts/tar)
