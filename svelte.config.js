/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-cloudflare-workers';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#test',
		adapter: adapter()
	}
};

export default config;
