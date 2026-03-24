import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],
	kit: {
		env: {
			dir: './'
		},
		adapter: adapter()
	}, 
	alias: {
		"@/*": "./path/to/lib/*",
	  },
};

export default config;
