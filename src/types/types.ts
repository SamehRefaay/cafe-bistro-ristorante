export type CategoryType = {
	id: string;
	title: string;
	images: string[];
	slug: string;
	products: ProductType[];
};

export type ProductType = {
	id: string;
	title: string;
	desc: string;
	image?: string;
	price: number;
	isFeatured: boolean;
	options: {}[];
	cateSlug: String;
};
