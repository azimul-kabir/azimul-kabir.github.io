import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lab = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lab' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// One article per project. The entry id is the project's slug in src/data/projects.ts,
// which holds the card details (name, summary, tags, links and hero image).
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      /** One sentence under the title. */
      tagline: z.string(),
      facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      /** Screenshot groups shown above the article. */
      gallery: z
        .array(
          z.object({
            title: z.string().optional(),
            /** wide: two per row; phone: four portrait shots per row; full: one per row. */
            layout: z.enum(['wide', 'phone', 'full']).default('wide'),
            items: z.array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() })),
          }),
        )
        .default([]),
    }),
});

export const collections = { lab, projects };
