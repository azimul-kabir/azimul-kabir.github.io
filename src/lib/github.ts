// Repository metadata fetched once at build time. Visitors never call the
// GitHub API, and a failed request only hides the numbers; the build still succeeds.

export type RepoStats = {
  stars: number;
  language: string | null;
  latestRelease: string | null;
};

const cache = new Map<string, Promise<RepoStats | null>>();

async function api<T>(path: string): Promise<T | null> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
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
    api<{ tag_name: string }>(`repos/${repo}/releases/latest`),
  ]);
  if (!info) return null;
  return {
    stars: info.stargazers_count,
    language: info.language,
    latestRelease: release?.tag_name ?? null,
  };
}

export function repoStats(repo: string): Promise<RepoStats | null> {
  if (!cache.has(repo)) cache.set(repo, load(repo));
  return cache.get(repo)!;
}
