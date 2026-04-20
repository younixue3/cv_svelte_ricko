import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: sveltePreprocess({
		postcss: true
	}),
	kit: {
		adapter: adapter()
	}
};