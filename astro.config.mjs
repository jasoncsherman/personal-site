// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx()],
	image: {
		// Allow build-time optimization of Open Library book covers (self-hosted output)
		domains: ["covers.openlibrary.org"],
	},
});
