// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Your production domain. The sitemap and any absolute URLs are built from this.
  site: 'https://swettyboomer.dev',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
