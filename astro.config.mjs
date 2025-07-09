import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import vue from "@astrojs/vue";
import vercelAnalytics from '@vercel/analytics/astro';

export default defineConfig({
  adapter: vercel(),
  integrations: [tailwind(), vue(), vercelAnalytics()],
});