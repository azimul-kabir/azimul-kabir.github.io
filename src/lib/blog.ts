import { getCollection } from 'astro:content';

export async function blogPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

/** Month and year only, for dates that shouldn't look stale after a few days (e.g. the "Now" section). */
export const formatMonth = (d: Date) => d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
