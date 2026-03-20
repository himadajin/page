---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: brew
draft: false
tags:
  - macos
  - package-manager
description: brew のコマンドラインオプションについて
---

**基本操作**

```bash
# パッケージをインストールする
brew install {package}
# パッケージをアンインストールする
brew uninstall {package}
# すべてのキャッシュを削除する
brew cleanup --prune=all
```

**リポジトリ**

```bash
# パッケージのリストを更新する
brew update
# 手動でインストールしたパッケージを列挙する
brew leaves
# 古いバージョンのパッケージを列挙する
brew outdated
# すべてのキャッシュを削除
brew cleanup --prune=all
# リポジトリを追加
brew tap riscv-software-src/riscv
# リポジトリを削除
brew untap riscv-software-src/riscv
```

`brew tap riscv-software-src/riscv`としたときは暗黙的に

```
https://github.com/riscv-software-src/homebrew-riscv.git
```

を参照する。

## See also

- [apt](/posts/apt)
- [scoop](/posts/scoop)
