/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'skyblue': '#4c8bf5'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
