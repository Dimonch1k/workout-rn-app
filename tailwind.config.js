// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.tsx',
		'./app/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				primary: '#fff50a',
				secondary: '#062029',
			},
			fontFamily: {
				'poppins-regular': ['Poppins-Regular'],
				'poppins-semibold': ['Poppins-SemiBold'],
				'poppins-bold': ['Poppins-Bold'],
				spaceMono: ['SpaceMono-Regular'],
				system: ['ui-sans-serif'],
			},
		},
	},
	plugins: [],
}
