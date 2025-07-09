import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
//import vercel from '@astrojs/vercel/serverless';
import vue from "@astrojs/vue";

export default defineConfig({
  //adapter: vercel(),
  integrations: [tailwind(), vue()],
});