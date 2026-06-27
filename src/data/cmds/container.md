---
title: container
tags:
  - virtualization
description: container のコマンドラインオプションについて
---

`container system`

```bash
# システムサービスを起動する
container system start
# システムサービスを停止する
container system stop
# システムサービスの状態を表示する
container system status
# 実行中のコンテナの一覧を表示する
container list
# 実行中/停止中のコンテナの一覧を表示する
container list --all
# コンテナを起動する
container start {container-id}
# コンテナを停止する
container stop {container-id}
# コンテナを削除する
container delete {container-id}
```

`container image`

```bash
# イメージをpullする
container image pull ubuntu:24.04
# ローカルに保存したイメージの一覧を表示する
container image list
# イメージの詳細をJSON形式で表示する
container image inspect ubuntu:24.04
# イメージを削除する
container image delete ubuntu:24.04
```

`container run`

```bash
# コンテナを起動する (シェルを起動する)
container run -it ubuntu:24.04
# コンテナを起動する (コマンドを実行する)
container run ubuntu:24.04 uname -a
# 名前を指定してコンテナを起動する
container run --name ubuntu ubuntu:24.04 uname -a
# コンテナを起動して終了後に削除する
container run --rm ubuntu:24.04 uname -a
```

`container machine`

```bash
# container machine を作成する (Macのホームディレクトリをマウントする)
container machine create alpine:3.22 --name alpine
# container machine を作成する (Macのホームディレクトリをマウントしない)
container machine create alpine:3.22 --name alpine --home-mount none

# container machine を起動する (シェルを起動する)
container machine run --name alpine
# container machine を起動する (コマンドを実行する)
container machine run --name alpine uname -a

# container machine の一覧を表示する
container machine list
# container machine を停止する
container machine stop alpine
# container machine を削除する
container machine delete alpine
```

## `~/.config/container/config.toml`

```toml
[registry]
domain = "docker.io"

[machine]
homeMount = "none"
```

- `[registry].domain`: 短いイメージ名を解決するときのデフォルトレジストリ
- `[machine].homeMount`: `container machine`でMacのホームディレクトリをマウントする方法

## See also

- [docker](/cmds/docker)
- [wsl](/cmds/wsl)
- [container/docs/tutorials/container-system-config-tutorial.md at 1.0.0 · apple/container](https://github.com/apple/container/blob/1.0.0/docs/tutorials/container-system-config-tutorial.md)
