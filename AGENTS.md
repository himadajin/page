# Agent Instructions

Astro 製の個人ページ。
Cloudflare Workers (static assets) にデプロイされます。

## Package Manager

- **npm** を使用: `npm ci`
- Node.js のバージョンは `.nvmrc` / `package.json` の `engines` に従う。

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Lint | `npm run lint` |
| Format check | `npm run format:check` |
| Format write | `npm run format` |
| Type check + build | `npm run build` |
| Workers ローカル確認 | `npm run cf:preview` |

## 検証

コードや設定を変更したら、CI と同じ次の 3 つを実行する。

```bash
npm run lint
npm run format:check
npm run build
```

依存関係や `Dockerfile` を変更した場合は、可能なら Docker build も確認する。

```bash
docker build -t terrestrial-transit:local .
```

## Key Conventions

- コンテンツは `src/data/`（`cmds`, `prompts`, `prompt-translations`）にあり、`src/content.config.ts` でスキーマ定義。
- ページは `src/pages/`、共通スタイルは `src/styles/`。
- コミットメッセージと PR タイトルは Conventional Commits（`cz.yaml` 参照）。

## External References

| Need | File |
|------|------|
| Setup / deploy | `README.md` |
| CI | `.github/workflows/ci.yml` |
| Workers 設定 | `wrangler.jsonc` |
