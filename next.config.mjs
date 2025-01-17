import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.freepik.com',
				pathname: '**',
			},
			// http://res.cloudinary.com/
			{
				protocol: 'http',
				hostname: 'res.cloudinary.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'kocbljwitasovkxvxibb.supabase.co',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
