---
author: himadajin
pubDatetime: 2026-03-20T00:00:00Z
title: docker
draft: false
tags:
  - virtualization
description: docker のコマンドラインオプションについて
---

```bash
# イメージをインタラクティブモードで起動する
docker run -it debian:bullseye
# イメージをバックグラウンドで起動する
docker run python:3.9 python -c 'print("Hello, world!")'
# ローカルに保存したイメージの一覧を表示する
docker images
# イメージをpullする
docker pull debian:bullseye
```

### イメージの起動 (インタラクティブモード)

```shell
docker run -it debian:bullseye
```

`-it`オプションを付けると、インタラクティブモードで起動し、ターミナル入力(`-i`)と疑似 TTY(`-t`)をアタッチする。
そのため、ユーザーのターミナルがコンテナ内のシェルに接続され、コンテナのターミナルを直接利用することができる。

### イメージの起動 (バックグラウンド)

`-it`オプションを省略すると、コンテナはバックグラウンドモードで実行される。
デフォルトの挙動はイメージによって異なる。debian の場合は何もせずに終了する。

```shell
docker pull python:3.9

# docker run <image> <command>
docker run python:3.9 python -c 'print("Hello, world!")'
# > Hello, world!
```

とすると、指定したコンテナ内でコマンドを実行することができる。指定したコマンドが実行された後は自動で終了する。

## Dockerfile のコマンド

### `RUN`

イメージのビルド時にシェルコマンドを実行するコマンド。

**シェル形式**

```dockerfile
RUN command param1 param2
```

**exec 形式**

```dockerfile
RUN ["executable", "param1", "param2"]
```

**apt を使用してパッケージをインストール**

```dockerfile
RUN apt update && \
    apt install -y git curl
```

### `ENV`

イメージの中に環境変数を設定するコマンド。
このコマンドによって設定された環境変数は、後続の`RUN`命令で使用できるだけでなく、コンテナの実行時にも使用できる。

```dockerfile
ENV VAR_NAME=value
```

**環境変数にパスを設定して、ディレクトリを作成**

```dockerfile
ENV INSTALL_DIR=/myapp
RUN mkdir $INSTALL_DIR
```

### `ARG`

ビルド時に渡すことができる変数を定義するコマンド。
外部からイメージのビルドプロセスにパラメーターを渡して、動的にイメージをカスタマイズすることができる。
このコマンドによって定義された変数はビルド時にのみ有効であり、コンテナの実行時には**使用できない**。

```dockerfile
ARG VAR_NAME=default_value
```

**バージョンの指定**

```dockerfile
ARG VERSION=latest
```

`VERSION`変数は、ビルド時に`--build-arg`オプションを使って値を指定することができる。

```shell
docker build --build-arg VERSION=1.2 -t myimage .
```

## See also

- [wsl](/posts/wsl)
