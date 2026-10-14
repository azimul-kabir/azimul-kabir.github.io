import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { profile } from '~/data/profile';
import { blogPosts } from '~/lib/blog';

export async function GET(context: APIContext) {
  const posts = await blogPosts();
  return rss({
    title: `${profile.name}: Blog`,
    description: 'Notes, experiments and things I am learning.',
    site: context.site!,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
    })),
  });
}
