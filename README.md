# azimul-website

Personal website of Azimul Kabir Apu. Built with [Astro](https://astro.build), TypeScript and Tailwind CSS v4, and deployed as static files on Cloudflare Workers.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check
npm run build    # static site in dist/
```

Node 22 (see `.nvmrc`).

## Editing content

Most updates don't touch page components:

| What | Where |
|---|---|
| Name, intro, "Now" section, education | `src/data/profile.ts` |
| Projects (order, summaries, links) | `src/data/projects.ts` |
| Career timeline, employer | `src/data/work.ts` |
| Social links (and which appear in the footer) | `src/data/social.ts` |
| Lab posts | `src/content/lab/*.md` or `.mdx` |

Lab posts need `title`, `description` and `date` in the frontmatter. Posts with `draft: true` show in `npm run dev` but are left out of the build.

The social preview image is `public/og.png`. Edit `scripts/og.html` and run `npx -p playwright node scripts/og.mjs` to regenerate it.

## GitHub data

Star counts and latest release versions for public repositories are fetched from the GitHub API **at build time** (`src/lib/github.ts`). Visitors never call GitHub. If the API is unreachable, the numbers are hidden and the build still succeeds. The workflow rebuilds daily to keep them current.

## Deploy

The site is fully static, so it needs no Astro adapter: `wrangler.jsonc` serves `dist/` as Workers static assets.

Manual deploy: `npx wrangler login`, then `npm run deploy`.

Automatic deploy (`.github/workflows/deploy.yml`) builds every push and PR. To deploy from `main` and on the daily schedule, add these in the repository settings:

- Secrets: `CLOUDFLARE_API_TOKEN` (the "Edit Cloudflare Workers" template), `CLOUDFLARE_ACCOUNT_ID`
- Variables: `DEPLOY_ENABLED` = `true`, `SITE_URL` = your final URL, e.g. `https://azimulkabir.com`

Alternatively, connect the repo with Cloudflare Workers Builds (build command `npm run build`, deploy command `npx wrangler deploy`) and leave `DEPLOY_ENABLED` unset.
