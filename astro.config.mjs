import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  }),
  integrations: [tailwind(), vue()]
});