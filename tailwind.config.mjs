/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'card': '0px 4px 20px 0px rgba(0, 0, 0, 0.10)'
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
