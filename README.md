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
| Blog posts | `src/content/blog/*.md` or `.mdx` |

Every project in `projects.ts` needs a matching `src/content/projects/<slug>.md`, which becomes `/projects/<slug>`; the build fails if one is missing. Its frontmatter takes a `tagline`, optional `facts` and a `gallery` of screenshot groups (`wide`, `phone` or `full` layout).

Blog posts need `title`, `description` and `date` in the frontmatter. Posts with `draft: true` show in `npm run dev` but are left out of the build.

The social preview image is `public/og.png`. Edit `scripts/og.html` and run `npx -p playwright node scripts/og.mjs` to regenerate it.

Blog posts and project pages end with a **Share** row (`src/components/ShareButtons.astro`): plain links to X, LinkedIn, Facebook, WhatsApp and email, a button for the device's share sheet where supported, and Copy link. They are ordinary links, with no third-party scripts or tracking.

## GitHub data

Star counts and latest release versions and publication dates for public repositories are fetched from the GitHub API **at build time** (`src/lib/github.ts`). Actua's latest version and release date appear on the home page and project page. Visitors never call GitHub. If the API is unreachable, the metadata is hidden and the build still succeeds. The site rebuilds within an hour of a new release (see below) and once a day for star counts.

## Deploy

The site is published in two places:

- **GitHub Pages** (https://azimul-kabir.github.io): `.github/workflows/deploy.yml` builds every push and pull request and deploys `main`. Repository setting required: **Settings → Pages → Source: GitHub Actions**.
- **Cloudflare Pages** (https://azimulkabir.com): Cloudflare builds from this repository on every push to `main`.

### Automatic updates after a release

`.github/workflows/refresh-releases.yml` checks every hour for a new stable (non-draft, non-pre-release) GitHub release of any project with a `repo` in `src/data/projects.ts`. When a version changes, it runs `deploy.yml`, which rebuilds GitHub Pages and then asks Cloudflare to rebuild azimulkabir.com. `deploy.yml` also does this once a day so star counts stay current.

Cloudflare only rebuilds if it has a deploy hook. One-time setup:

1. In Cloudflare, open **Workers & Pages → (this site) → Settings → Builds → Deploy hooks**, add a hook for the `main` branch and copy its URL.
2. In this repository, add it as an Actions secret named `CLOUDFLARE_DEPLOY_HOOK` (**Settings → Secrets and variables → Actions → New repository secret**).
3. Optional but recommended: in the Cloudflare Pages project, add a `GITHUB_TOKEN` environment variable holding a fine-grained GitHub token with public read-only access. Without it, Cloudflare's builds call the GitHub API anonymously and can hit its rate limit, which hides the version numbers.

To refresh by hand, run **Actions → Refresh on new releases → Run workflow** and tick *Rebuild even if no release changed*.

For an instant refresh instead of waiting up to an hour, an app's release workflow can send a `repository_dispatch` event of type `app-released` to this repository after publishing, for example:

```yaml
- name: Refresh azimulkabir.com
  env:
    GH_TOKEN: ${{ secrets.WEBSITE_DISPATCH_TOKEN }} # fine-grained token: Contents read and write on azimul-kabir.github.io
  run: gh api repos/azimul-kabir/azimul-kabir.github.io/dispatches -f event_type=app-released
```

### Custom domain

1. Add the domain under **Settings → Pages → Custom domain** and create the DNS records GitHub shows.
2. Add a repository variable `SITE_URL` (Settings → Secrets and variables → Actions → Variables), e.g. `https://azimulkabir.com`, so canonical URLs, the sitemap and RSS use it.
