---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: wsl
draft: false
tags:
  - windows
  - linux
description: wsl のコマンドラインオプションについて
---

```bash
# シャットダウンする
wsl --shutdown
# 指定したディストリビューションを起動する
wsl -d Ubuntu-22.04
# インストールされているディストリビューションを列挙する
wsl -l -v
# デフォルトのディストリビューションを設定する
wsl --set-default Ubuntu-22.04
# ディストリビューション(ext4ファイル)を削除する
wsl --unregister Ubuntu-20.04
# ディストリビューションをtarにエクスポートする
wsl --export Ubuntu-22.04 Ubuntu-22.04.tar
# tarからディストリビューションをインポートする
wsl --import Ubuntu-22.04 "C:/wsl/Ubuntu-22.04" "C:/path/to/Ubuntu-22.04.tar"
```

## See also

- [docker](/posts/docker)
