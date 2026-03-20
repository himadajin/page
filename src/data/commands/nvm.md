---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: nvm
draft: false
tags:
  - toolchain-manager
  - nodejs
  - javascript
  - typescript
description: nvm のコマンドラインオプションについて
---

```bash
# リモートのLTSバージョンを表示する
nvm ls-remote --lts
# 特定のバージョンの Node.js をインストールする
nvm install v24.13.0
# インストールされているバージョンを列挙する
nvm ls
# 使用中の Node.js のバージョンを表示する
nvm current
# 現在のシェルで使用する Node.js のバージョンに切り替える (一時的)
nvm use v24.13.0
# デフォルトで使用する Node.js のバージョンを切り替える (永続的)
nvm alias default v24.13.0
```
