// Repository metadata fetched once at build time. Visitors never call the
// GitHub API, and a failed request only hides the numbers; the build still succeeds.

export type RepoStats = {
  stars: number;
  language: string | null;
  latestRelease: string | null;
  latestReleaseDate: string | null;
};

const cache = new Map<string, Promise<RepoStats | null>>();

async function api<T>(path: string): Promise<T | null> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'Cache-Control': 'no-cache',
    'User-Agent': 'azimul-website-build',
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  try {
    const res = await fetch(`https://api.github.com/${path}`, {
      headers,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

async function load(repo: string): Promise<RepoStats | null> {
  const [info, release] = await Promise.all([
    api<{ stargazers_count: number; language: string | null }>(`repos/${repo}`),
    api<{ tag_name: string; published_at: string | null; draft: boolean; prerelease: boolean }[]>(
      `repos/${repo}/releases?per_page=100`,
    ),
  ]);
  if (!info) return null;
  const latestRelease = release
    ?.filter(
      (item) =>
        !item.draft &&
        !item.prerelease &&
        item.published_at &&
        Number.isFinite(Date.parse(item.published_at)),
    )
    .sort((a, b) => Date.parse(b.published_at ?? '') - Date.parse(a.published_at ?? ''))[0];
  const publishedAt = latestRelease?.published_at ? new Date(latestRelease.published_at) : null;
  return {
    stars: info.stargazers_count,
    language: info.language,
    latestRelease: latestRelease?.tag_name ?? null,
    latestReleaseDate:
      publishedAt && !Number.isNaN(publishedAt.getTime())
        ? new Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            timeZone: 'UTC',
          }).format(publishedAt)
        : null,
  };
}

export function repoStats(repo: string): Promise<RepoStats | null> {
  if (!cache.has(repo)) cache.set(repo, load(repo));
  return cache.get(repo)!;
}

export function latestReleaseLabel(stats: RepoStats | null | undefined): string | null {
  if (!stats?.latestRelease) return null;
  return [stats.latestRelease, stats.latestReleaseDate].filter(Boolean).join(' · ');
}
