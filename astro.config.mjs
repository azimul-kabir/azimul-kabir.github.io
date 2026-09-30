// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The public URL of the site, used for canonical URLs, the sitemap and RSS.
// Set SITE_URL in the build environment once a custom domain is connected.
const site = process.env.SITE_URL ?? 'https://azimulkabir.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
