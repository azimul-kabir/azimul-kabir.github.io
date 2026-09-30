import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { profile } from '~/data/profile';
import { labPosts } from '~/lib/lab';

export async function GET(context: APIContext) {
  const posts = await labPosts();
  return rss({
    title: `${profile.name}: The Lab`,
    description: 'Notes, experiments and things I am learning.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/lab/${post.id}`,
    })),
  });
}
