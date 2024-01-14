import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			// change below to your repo name
			base: ''
		}
	},
	preprocess: vitePreprocess()
};

export default config;
