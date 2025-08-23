// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://ap-gautham.github.io',
    base: '/ap-gautham',
  integrations: [mdx(), sitemap(), tailwind()]
});

