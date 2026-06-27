---
title: gh
tags:
  - vcs
description: gh のコマンドラインオプションについて
---

```bash
# GitHub にログインする
gh auth login
# 現在のリポジトリのPRの状態を表示する
gh pr status
```

`gh pr`

```bash
# 現在のブランチをpushする
git push -u origin HEAD
# PRを下書きで作成する
gh pr create --draft --fill
# 現在のブランチのPRの内容を表示する
gh pr view
# 現在のブランチのPRの差分を表示する
gh pr diff
# 現在のブランチのPRのCIの状態を表示する
gh pr checks
# 現在のブランチのPRをレビュー可能な状態にする
gh pr ready
# 現在のブランチのPRをsquash mergeしてリモートブランチを削除する
gh pr merge --squash --delete-branch
```

## See also

- [git](/cmds/git)
