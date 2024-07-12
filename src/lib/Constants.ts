const production = {
	url: 'https://cafe-bistro-ristorante.vercel.app/',
};
const development = {
	url: 'http://localhost:3000',
};
export const UrlConfig =
	process.env.NODE_ENV === 'development' ? development : production;
