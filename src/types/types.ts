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

export type CommentType = {
	postSlug: string;
	id: number;
	name: string;
	email: string;
	body: string;
};
export type PostType = {
	slug: string;
	auther: string;
	dateTime: string;
	title: string;
	body: string;
	image: string;
	tags: string[];
	comments: CommentType[];
};
