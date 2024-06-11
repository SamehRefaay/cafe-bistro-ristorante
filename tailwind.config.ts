import { transform } from 'next/dist/build/swc';
import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-red': '#ec1d25',
				'primary-gray': '#ececec',
			},
			fontFamily: {
				courgette: ['Courgette', ...defaultTheme.fontFamily.sans],
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			animation: {
				fadeIn: 'FadeIn 0.5s ease-in-out',
				moveDown: 'MoveDown 5s infinite',
			},
			keyframes: {
				FadeIn: {
					from: { opacity: '0.7' },
					to: { opacity: '1' },
				},
				MoveDown: {
					form: { opacity: '0', top: '25%' },
					to: { opacity: '1', top: '50%' },
				},
			},
		},
	},
	plugins: [],
};
export default config;
