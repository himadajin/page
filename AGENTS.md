# Agent Instructions

Personal page built with Astro.
Deployed to Cloudflare Workers (static assets).

## Package Manager

- Use **npm**: `npm ci`
- Follow the Node.js version in `.nvmrc` / `engines` in `package.json`.

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Lint | `npm run lint` |
| Format check | `npm run format:check` |
| Format write | `npm run format` |
| Type check + build | `npm run build` |
| Workers local preview | `npm run cf:preview` |

## Verification

After changing code or config, run the same three checks as CI.

```bash
npm run lint
npm run format:check
npm run build
```

If dependencies or the `Dockerfile` change, also verify the Docker build when possible.

```bash
docker build -t terrestrial-transit:local .
```

## Key Conventions

- Content lives in `src/data/` (`cmds`, `prompts`, `prompt-translations`); schemas are defined in `src/content.config.ts`.
- Pages are in `src/pages/`; shared styles in `src/styles/`.
- Commit messages and PR titles follow Conventional Commits (see `cz.yaml`).

## External References

| Need | File |
|------|------|
| Setup / deploy | `README.md` |
| CI | `.github/workflows/ci.yml` |
| Workers config | `wrangler.jsonc` |
