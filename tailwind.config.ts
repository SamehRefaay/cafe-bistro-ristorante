import { url } from 'inspector';
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
				// 'primary-red': '#ec1d25',
				'primary-red': '#d61c22',
				'primary-gray': '#ececec',
				'primary-gray-dark': '#333333',
			},
			fontFamily: {
				courgette: ['Courgette', ...defaultTheme.fontFamily.sans],
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'discover-bg': 'url(/intro-bg.jpg.webp)',
				// "url('https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
