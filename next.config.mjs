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
		],
	},
};

export default nextConfig;
