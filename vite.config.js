import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: [".svelte", ...mdsvexConfig.extensions],
			preprocess: [mdsvex(mdsvexConfig)],
			adapter: adapter()
		})
	]
});
