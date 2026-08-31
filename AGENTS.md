# Agent Instructions

## Toolchain

- Use npm and install with `npm ci`; do not create another package-manager lockfile.
- Use the exact Node.js version in `.nvmrc`; `package.json#engines` defines the supported range.

## Commands

| Task | Command |
|------|---------|
| Lint changed files | `npm exec eslint -- <paths>` |
| Check changed-file formatting | `npm exec prettier -- --check <paths>` |
| Format changed files | `npm exec prettier -- --write <paths>` |
| Full lint | `npm run lint` |
| Full format check | `npm run format:check` |
| Type check and production build | `npm run build` |

## Verification

- After code, config, or content changes, run `npm run lint`, `npm run format:check`, and `npm run build`.
- For documentation-only changes, run Prettier on the changed files.
- After dependency or `Dockerfile` changes, also run `docker build -t terrestrial-transit:local .` when Docker is available.

## Content

- Collection schemas live in `src/content.config.ts`; content lives in `src/data/cmds/`, `src/data/prompts/`, and `src/data/prompt-translations/`.
- Every prompt must have a translation with the same relative path and filename; the build fails when the matching translation ID is missing.
- Add new command and prompt entries to the applicable `src/data/*/index.md`; collection pages do not generate those index links.

## Generated Files

- `npm run build` regenerates `dist/` and `public/pagefind/`; both are ignored and must not be committed.
- Keep `CLAUDE.md` as the `@AGENTS.md` entrypoint; do not duplicate instructions there.

## Commits

- Use Conventional Commit subjects; `cz.yaml` contains the versioning convention.

## References

| Need | File |
|------|------|
| Local setup and deployment | `README.md` |
| CI source of truth | `.github/workflows/ci.yml` |
| Astro and Markdown behavior | `astro.config.ts` |
| Cloudflare asset routing | `wrangler.jsonc` |
