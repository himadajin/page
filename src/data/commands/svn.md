---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: svn
draft: false
tags:
  - vcs
description: svn のコマンドラインオプションについて
---

```bash
# 作業コピーの情報を表示する
svn info
# 最新の5件のログを表示する
# `-r HEAD:0` で範囲を0~HEADに設定する
# `-l 5` で表示するログの件数を5に制限(limit)する
svn log -r HEAD:0 -l 5
# 指定したリビジョンのログを表示する
svn log -r {revision_number}
```

```bash
# 作業コピーをBASEリビジョンに戻す
svn revert -R .
# 作業コピーを指定したリビジョンに更新する
svn update -r {revision_number}
```

```bash
# リポジトリをチェックアウトする
svn checkout {repository_url}
```

## 用語

- 作業コピー: ローカルにチェックアウトすることで作成するリポジトリのコピー
- リビジョン: コミットごとに新しくリポジトリに作成されるもの 及び その番号
- HEAD リビジョン: リポジトリの最新のリビジョン
- BASE リビジョン: 作業コピーの基準となるリビジョン

## See also

- [用語集 | TortoiseSVN](https://tortoisesvn.net/docs/release/TortoiseSVN_ja/tsvn-glossary.html)
