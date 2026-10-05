# azimul-website

Personal website of Azimul Kabir Apu. Built with [Astro](https://astro.build), TypeScript and Tailwind CSS v4, and deployed to GitHub Pages at https://azimul-kabir.github.io.

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
| Projects (order, summaries, links, card image) | `src/data/projects.ts` |
| Project pages (article, facts, screenshots) | `src/content/projects/<slug>.md`, images in `src/assets/projects/<slug>/` |
| Career timeline, employer | `src/data/work.ts` |
| Social links (and which appear in the footer) | `src/data/social.ts` |
| Lab posts | `src/content/lab/*.md` or `.mdx` |

Every project in `projects.ts` needs a matching `src/content/projects/<slug>.md`, which becomes `/projects/<slug>`; the build fails if one is missing. Its frontmatter takes a `tagline`, optional `facts` and a `gallery` of screenshot groups (`wide`, `phone` or `full` layout).

Lab posts need `title`, `description` and `date` in the frontmatter. Posts with `draft: true` show in `npm run dev` but are left out of the build.

The social preview image is `public/og.png`. Edit `scripts/og.html` and run `npx -p playwright node scripts/og.mjs` to regenerate it.

## GitHub data

Star counts and latest release versions for public repositories are fetched from the GitHub API **at build time** (`src/lib/github.ts`). Visitors never call GitHub. If the API is unreachable, the numbers are hidden and the build still succeeds. The workflow rebuilds daily to keep them current.

## Deploy

`.github/workflows/deploy.yml` builds every push and pull request, and deploys `main` to GitHub Pages on each push and once a day. Repository setting required: **Settings → Pages → Source: GitHub Actions**.

### Custom domain

1. Add the domain under **Settings → Pages → Custom domain** and create the DNS records GitHub shows.
2. Add a repository variable `SITE_URL` (Settings → Secrets and variables → Actions → Variables), e.g. `https://azimulkabir.com`, so canonical URLs, the sitemap and RSS use it.
