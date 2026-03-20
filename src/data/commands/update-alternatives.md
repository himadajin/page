---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: update-alternatives
draft: false
tags:
  - linux
description: update-alternatives のコマンドラインオプションについて
---

```bash
# 指定したバイナリを登録する
sudo update-alternatives --install {symlink} {name} {binary} {priority}
```

## Pythonのバージョンを切り替える

```bash
# Python 3.10を優先度1で登録する
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.10 1
# Python 3.14を優先度2で登録する
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.14 2
```
