import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	// safelist: ['animate-[fade-in-down_1s_ease-in-out]'],
	theme: {
		extend: {
			colors: {
				// 'primary-red': '#ec1d25',
				'primary-red': '#d61c22',
				'primary-gray': '#ececec',
				'gray-pattern-1': '#eeeeee',
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
				scaleUp: 'ScaleUp 1s ease-in-out',
				rotate360: 'rotate360 1s ease-in-out',
				SlideRight: 'slide 1s ease-in-out',
				fadeInDown: 'fadeInDown 1s ease-in-out',
			},
			keyframes: {
				FadeIn: {
					from: { opacity: '0.7' },
					to: { opacity: '1' },
				},
				ScaleUp: {
					from: { opacity: '0', scale: '0' },
					to: { opacity: '1', scale: '100%' },
				},
				rotate360: {
					'0%': { opacity: '0', left: '50%', rotate: '360deg' },
					'100%': { opacity: '1', left: '50%', rotate: '0deg' },
				},
				fadeInDown: {
					'0%': {
						opacity: '0',
						left: '50%',
						top: '0%',
						transform: 'translateX(-50%) translateY(0%)',
					},

					'100%': {
						opacity: '1',
						left: '50%',
						top: '50%',
						transform: 'translateX(-50%) translateY(-50%)',
					},
				},
			},
		},
	},
	plugins: [require('tw-elements/plugin.cjs')],
};
export default config;
