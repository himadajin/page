---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: apt
draft: false
tags:
  - linux
  - package-manager
description: apt のコマンドラインオプションについて
---

```bash
# パッケージのリストを更新する
sudo apt update
# インストール済みのパッケージを更新する
sudo apt upgrade
```

**キャッシュの削除**

```bash
# /var/cache/apt/archives/ 以下の .deb ファイルを削除する
sudo apt clean
# 自動でインストールされた孤立しているパッケージを削除する
sudo apt autoremove
```

## apt-mark

```bash
# 手動でインストールしたパッケージを列挙する
apt-mark showmanual
```

## See also

- [brew](/posts/brew)
- [scoop](/posts/scoop)
