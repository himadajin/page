---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: tar
draft: false
tags:
  - linux
description: tar のコマンドラインオプションについて
---

```bash
# 圧縮 (-c)
tar -cvf name.tar name
# 解凍 (-x)
tar -xvf name.tar
```

- `c`: アーカイブを作成
- `x`: アーカイブを展開
- `v`: 詳細表示
- `f`: ファイル名の指定

## tar.xz

```bash
tar -cJvf name.tar.xz name
tar -xJvf name.tar.xz
```

## See also

- [zip](/posts/zip)
