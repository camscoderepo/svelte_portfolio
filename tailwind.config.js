// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				background: 'var(--color-background)',
				text: 'var(--color-text)',
			  },
			fontFamily: {
				sans: ['Open Sans', 'system-ui', 'sans-serif'],
				serif: ['Georgia', 'serif'],
			},
			screens: {
                'tablet': '640px',
                'laptop': '1024px',
                'desktop': '1280px',
                'ultrawide': '2560px', // Custom breakpoint for ultrawide screens
            }
				},
	},
	plugins: [
		skeleton({
			themes: { preset: [ "skeleton" ] }
		})
	]
}