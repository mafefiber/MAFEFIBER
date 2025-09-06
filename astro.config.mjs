import { defineConfig } from 'astro/config';
import staticAdapter from '@astrojs/adapter-static';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: staticAdapter(),
});