---
title: go
tags:
  - compiler
  - build-system
  - go
description: go のコマンドラインオプションについて
---

## バージョンを確認する

```bash
go version
```

**実行**

```bash
# カレントディレクトリの main パッケージを実行する
go run .
# ファイルを指定して実行する
go run main.go
```

**ビルド**

```bash
# カレントディレクトリの main パッケージをビルドする
go build
# 出力ファイル名を指定してビルドする
go build -o app
```

**テスト**

```bash
# すべてのパッケージをテストする
go test ./...
# 詳細を表示する
go test -v ./...
# カバレッジを表示する
go test -cover ./...
```

**モジュール**

```bash
# go.mod を作成する
go mod init example.com/myapp
# 依存関係を整理する
go mod tidy
# 依存モジュールをダウンロードする
go mod download
```

**パッケージ**

```bash
# パッケージを追加する
go get example.com/pkg
# パッケージを更新する
go get -u example.com/pkg
```

**その他**

```bash
# 最新版をインストールする
go install golang.org/x/tools/cmd/goimports@latest

# Go の環境変数を表示する
go env
# Go の特定の環境変数を表示する
go env GOPATH
go env GOMODCACHE
```
