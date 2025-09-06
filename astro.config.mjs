import { defineConfig } from 'astro/config';
import node from '@astrojs/adapter-node';

export default defineConfig({
	adapter: node(),
});