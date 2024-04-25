import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

import { SITE_METADATA } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: SITE_METADATA.siteUrl,
  markdown: {
    syntaxHighlight: 'prism'
  },
  integrations: [
    // mdx(),
    sitemap(),
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    }),
    mdx({
      // Markdown config now ignored
      extendMarkdownConfig: false
      // No `remarkPlugins` applied
    })
  ]
});
