const { PrismaClient } = require('@prisma/client');
const { categoriesData, products } = require('./data.ts');
const prisma = new PrismaClient();

type CategoryType = {
	slug: string;
	title: string;
	images: string[];
};

async function main() {
	// await prisma.category.createMany({
	// 	data: categories,
	// });
	const categories = await prisma.$transaction(
		categoriesData.map((cat: CategoryType) =>
			prisma.category.upsert({
				where: { slug: cat.slug },
				update: {},
				create: {
					slug: cat.slug,
					title: cat.title,
					images: cat.images,
				},
			})
		)
	);
	console.log('Added category data');

	await prisma.product.createMany({
		data: products,
	});
	console.log('Added product data');

	// const starter = await prisma.category.upsert({
	// 	where: { slug: 'starter' },
	// 	update: {},
	// 	create: {
	// 		title: 'Starter',
	// 		slug: 'starter',
	// 		products: {
	// 			create: [
	// 				{
	// 					title: 'seed starter 01',
	// 					desc: 'seed starter 01 desc',
	// 					price: 20,
	// 				},
	// 				{
	// 					title: 'seed starter 02',
	// 					desc: 'seed starter 02 desc',
	// 					price: 30,
	// 				},
	// 			],
	// 		},
	// 	},
	// });
	// const main = await prisma.category.upsert({
	// 	where: { slug: 'main' },
	// 	update: {},
	// 	create: {
	// 		title: 'Main',
	// 		slug: 'main',
	// 		products: {
	// 			create: [
	// 				{
	// 					title: 'seed main 01',
	// 					desc: 'seed main 01 desc',
	// 					price: 20,
	// 				},
	// 				{
	// 					title: 'seed main 02',
	// 					desc: 'seed main 02 desc',
	// 					price: 30,
	// 				},
	// 			],
	// 		},
	// 	},
	// });
	// const launch = await prisma.category.upsert({
	// 	where: { slug: 'launch' },
	// 	update: {},
	// 	create: {
	// 		title: 'Launch',
	// 		slug: 'launch',
	// 		products: {
	// 			create: [
	// 				{
	// 					title: 'seed launch 01',
	// 					desc: 'seed launch 01 desc',
	// 					price: 20,
	// 				},
	// 				{
	// 					title: 'seed launch 02',
	// 					desc: 'seed launch 02 desc',
	// 					price: 30,
	// 				},
	// 			],
	// 		},
	// 	},
	// });
	// const dinner = await prisma.category.upsert({
	// 	where: { slug: 'dinner' },
	// 	update: {},
	// 	create: {
	// 		title: 'Dinner',
	// 		slug: 'dinner',
	// 		products: {
	// 			create: [
	// 				{
	// 					title: 'seed dinner 01',
	// 					desc: 'seed dinner 01 desc',
	// 					price: 20,
	// 				},
	// 				{
	// 					title: 'seed dinner 02',
	// 					desc: 'seed dinner 02 desc',
	// 					price: 30,
	// 				},
	// 			],
	// 		},
	// 	},
	// });
	// const drink = await prisma.category.upsert({
	// 	where: { slug: 'drink' },
	// 	update: {},
	// 	create: {
	// 		title: 'Drink',
	// 		slug: 'drink',
	// 		products: {
	// 			create: [
	// 				{
	// 					title: 'seed drink 01',
	// 					desc: 'seed drink 01 desc',
	// 					price: 20,
	// 				},
	// 				{
	// 					title: 'seed drink 02',
	// 					desc: 'seed drink 02 desc',
	// 					price: 30,
	// 				},
	// 			],
	// 		},
	// 	},
	// });
	// const dessert = await prisma.category.upsert({
	// 	where: { slug: 'dessert' },
	// 	update: {},
	// 	create: {
	// 		title: 'Dessert',
	// 		slug: 'dessert',
	// 		products: {
	// 			create: [
	// 				{
	// 					title: 'dessert 01',
	// 					desc: 'dessert 01 desc',
	// 					price: 20,
	// 				},
	// 				{
	// 					title: 'dessert 02',
	// 					desc: 'dessert 02 desc',
	// 					price: 30,
	// 				},
	// 			],
	// 		},
	// 	},
	// });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
