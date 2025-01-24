const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');
// $ npm i lorem-ipsum

const prisma = new PrismaClient();

const foodImages = [
	'/menu/our-menu-01.webp',
	'/menu/our-menu-04.webp',
	'/menu/our-menu-06.webp',
	'/gallery/photo-gallery-03.webp',
	'/gallery/photo-gallery-04.webp',
	'/gallery/photo-gallery-05.webp',
	'/gallery/photo-gallery-08.webp',
];

const drinkImages = ['/gallery/photo-gallery-06.webp', '/menu/our-menu-02.webp'];

const startesFoodImages = [
	'/gallery/photo-gallery-02.webp',
	'/gallery/photo-gallery-16.webp',
	'/gallery/photo-gallery-17.webp',
];

const dessertFoodImages = ['/gallery/photo-gallery-10.webp', '/blog-06.jpg.webp', '/gallery/photo-gallery-18.webp'];

const categroiesNames = ['Launch', 'Dinner', 'Drink', 'Starters', 'Happy Hour', 'Dessert'];

const categoriesData = categroiesNames.map((item, index) => ({
	id: index + 1,
	name: item,
	description: `this is fake description for ${item}category`,
	image: `/menu/our-menu-0${index + 1}.webp`,
}));

const productsData = Array.from({ length: 60 }).map((_, index) => ({
	id: index + 1,
	name: faker.food.dish(),
	description: faker.food.description(),
	categoryId:
		index <= 10
			? 1
			: index > 10 && index <= 20
			? 2
			: index > 20 && index <= 30
			? 3
			: index > 30 && index <= 40
			? 4
			: index > 40 && index <= 50
			? 5
			: 6,
	price: Math.floor(10 + Math.random() * 89),
	image:
		index <= 20
			? foodImages[Math.floor(Math.random() * foodImages.length)]
			: index > 20 && index <= 30
			? drinkImages[Math.floor(Math.random() * drinkImages.length)]
			: index > 30 && index <= 40
			? startesFoodImages[Math.floor(Math.random() * drinkImages.length)]
			: index > 40 && index <= 50
			? foodImages[Math.floor(Math.random() * foodImages.length)]
			: dessertFoodImages[Math.floor(Math.random() * dessertFoodImages.length)],
	available: Math.round(Math.random() + 0.25) === 1 ? true : false,
	quantity: Math.floor(Math.random() * 3921),
}));

async function main() {
	// await prisma.productCategory.createMany({
	// 	data: categoriesData,
	// });

	await prisma.product.createMany({
		data: productsData,
	});
}

main()
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});
