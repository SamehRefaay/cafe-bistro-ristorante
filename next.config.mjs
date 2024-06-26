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
		],
	},
};

export default nextConfig;
