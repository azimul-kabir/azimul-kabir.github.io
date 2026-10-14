import { getCollection } from 'astro:content';

export async function blogPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

/** Month and year only, for dates that shouldn't look stale after a few days (e.g. the "Now" section). */
export const formatMonth = (d: Date) => d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

/** Rough minutes to read a post, at 220 words a minute, ignoring MDX imports and component tags. */
export function readingTime(body = '') {
  const text = body
    .replace(/^import .*$/gm, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_`>\[\]()!]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
