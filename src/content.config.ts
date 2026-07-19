import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per app lives in src/content/apps/. The filename (minus
// .md) becomes the slug used in /apps/<slug> and /privacy/<slug>.
const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    hook: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    screenshots: z.array(z.string()),
    icon: z.string(),
    storeLinks: z.object({
      microsoft: z.string().optional(),
      apple: z.string().optional(),
      google: z.string().optional(),
    }),
    privacy: z.object({
      dataCollected: z.array(z.string()),
      thirdParties: z.array(z.string()),
    }),
    status: z.enum(['live', 'coming-soon']),
    // Optional: controls left-to-right order on the shelf. Lower = first.
    order: z.number().optional(),
  }),
});

export const collections = { apps };
