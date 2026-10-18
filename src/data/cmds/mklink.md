---
title: mklink
tags:
  - windows
description: mklink のコマンドラインオプションについて
---

`mklink /J {link} {target}` の順で指定する（`ln -s` とは逆で、作るリンクが先）。

**スキルをインストールする**

```bat
mkdir .agents\skills
mklink /J .agents\skills\{skill} {repo}\skills\{skill}
```

**ユーザー全体にインストールする**

```bat
mkdir %USERPROFILE%\.agents\skills
mklink /J %USERPROFILE%\.agents\skills\{skill} {repo}\skills\{skill}
```

**シンボリックリンクを使う（管理者権限か開発者モードが必要）**

```bat
mklink /D .agents\skills\{skill} {repo}\skills\{skill}
```

**PowerShell から実行する**

```powershell
cmd /c mklink /J .agents\skills\{skill} {repo}\skills\{skill}
```

**リンクを削除する**

`rmdir /s` や `del /s` を使うとリンク先の実体まで消えるので、`/s` を付けずに削除する。

```bat
rmdir .agents\skills\{skill}
```
