export type CategoryType = {
	id: string;
	title: string;
	image: string;
	slug: string;
	url: string;
	products: ProductType[];
};

export type ProductType = {
	id: string;
	title: string;
	description: string;
	image?: string;
	price: number;
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
