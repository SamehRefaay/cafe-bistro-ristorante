import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
    	container: {
    		center: true,
    		padding: '16px'
    	},
    	screens: {
    		sm: '640px',
    		md: '768px',
    		lg: '1024px',
    		xl: '1200px'
    	},
    	fontFamily: {
    		primary: 'var(--font-poppins)',
    		secondary: 'var(--font-montserrat)',
    		accent: 'var(--font-courgette)'
    	},
    	extend: {
    		colors: {
    			primary: '#111111',
    			secondary: '#919999',
    			accent: {
    				DEFAULT: '#d61c22',
    				hover: '#c0191e'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    			'grid-bg': 'url(https://img.freepik.com/free-vector/flat-design-grid-background_23-2150525345.jpg?w=740&t=st=1717539627~exp=1717540227~hmac=6015059fc67b3430dced253efaed3b64f4d27290320068e7f3d74129dcf9de8a)',
    			'grid-bg-2': 'url(https://img.freepik.com/free-photo/aesthetic-minimal-white-grid-pattern-wallpaper_53876-96916.jpg?w=740&t=st=1717539507~exp=1717540107~hmac=2aa0cc1b3194c740c0855e8661467e1b8671c4248d49d627db898ec9801ea823)',
    			dot: 'url(/pattern3.png.webp)',
    			discover: 'url(/intro-bg.jpg.webp)',
    			'ourVideo-bg': 'url(/bg-cover-video-02.jpg.webp)',
    			'special-cat-01': 'url(/header-menu-01.jpg.webp)',
    			'special-cat-02': 'url(/header-menu-02.jpg.webp)'
    		},
    		animation: {
    			fadeIn: 'FadeIn 0.5s ease-in-out',
    			scaleUp: 'ScaleUp 1s ease-in-out',
    			rotate360: 'rotate360 1s ease-in-out',
    			SlideRight: 'slide 1s ease-in-out',
    			fadeInUp: 'fadeInUp 1s ease-in-out',
    			fadeInDown: 'fadeInDown 1s ease-in-out',
    			FadeInMoveDown: 'FadeInMoveDown 1s ease-in-out',
    			fadeInRight: 'fadeInRight 1s ease-in-out',
    			flashing: 'flash 0.7s '
    		},
    		keyframes: {
    			flash: {
    				'0%': {
    					opacity: '1'
    				},
    				'40%': {
    					opacity: '1'
    				},
    				'100%': {
    					opacity: '0',
    					width: '200%',
    					height: '200%'
    				}
    			},
    			FadeIn: {
    				from: {
    					opacity: '0.7'
    				},
    				to: {
    					opacity: '1'
    				}
    			},
    			ScaleUp: {
    				from: {
    					opacity: '0',
    					scale: '0'
    				},
    				to: {
    					opacity: '1',
    					scale: '100%'
    				}
    			},
    			rotate360: {
    				'0%': {
    					opacity: '0',
    					left: '50%',
    					rotate: '360deg'
    				},
    				'100%': {
    					opacity: '1',
    					left: '50%',
    					rotate: '0deg'
    				}
    			},
    			fadeInDown: {
    				'0%': {
    					opacity: '0',
    					left: '50%',
    					top: '0%',
    					transform: 'translateX(-50%) translateY(0%)'
    				},
    				'100%': {
    					top: '50%',
    					opacity: '1',
    					left: '50%',
    					transform: 'translateX(-50%) translateY(-50%)'
    				}
    			},
    			FadeInMoveDown: {
    				'0%': {
    					top: '0',
    					transform: '-translateY(20px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			fadeInUp: {
    				'0%': {
    					opacity: '0',
    					left: '50%',
    					bottom: '0%',
    					transform: 'translateX(-50%) translateY(0%)'
    				},
    				'100%': {
    					opacity: '1',
    					left: '50%',
    					bottom: '50%',
    					transform: 'translateX(-50%) translateY(-50%)'
    				}
    			},
    			fadeInRight: {
    				'0%': {
    					opacity: '0',
    					left: '0',
    					top: '50%',
    					transform: 'translateX(-50%) translateY(0%)'
    				},
    				'100%': {
    					opacity: '1',
    					left: '50%',
    					top: '50%',
    					transform: 'translateX(-50%) translateY(-50%)'
    				}
    			}
    		}
    	}
    },
	plugins: [
		require('tailwindcss-animate'),
		require('tw-elements/plugin.cjs'),
		nextui(),
	],
};
export default config;
