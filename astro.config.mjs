import { defineConfig } from 'astro/config';
import netlify from '@astrojs/adapter-netlify';

export default defineConfig({
	adapter: netlify(),
});