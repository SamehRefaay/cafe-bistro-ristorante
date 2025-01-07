import AdminControl from '@/app/components/AdminControl';
import MenuCategories from '@/app/components/MenuCategories';
import PageHeader from '@/app/components/PageHeader';
import SpecialCategories from '@/app/components/SpecialCategories';
import { CategoryType } from '@/types/types';

// const getCategories = async () => {
// 	const res = await fetch('http://localhost:3000/api/categories', {
// 		cache: 'no-store',
// 	});

// 	if (!res.ok) throw new Error('Failed to fetch all categories!');

// 	return res.json();
// };

// function reorderArrayByIndexes(originalArray: any[], indexesArray: number[]) {
// 	return indexesArray.map(index => originalArray[index]);
// }

const categories: CategoryType[] = [
	{
		id: crypto.randomUUID(),
		title: 'Launch',
		slug: 'launch',
		url: '/menu/#launch',
		image: '/menu/our-menu-01.webp',
		products: [
			{
				id: crypto.randomUUID(),
				title: 'product 1',
				description: 'description 1',
				price: 10,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 2',
				description: 'description 2',
				price: 15,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 3',
				description: 'description 3',
				price: 20,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 4',
				description: 'description 4',
				price: 25,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 5',
				description: 'description 5',
				price: 30,
				image: '/menu/our-menu-01.webp',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		title: 'Dinner',
		slug: 'dinner',
		url: '/menu/#dinner',
		image: '/menu/our-menu-02.webp',
		products: [
			{
				id: crypto.randomUUID(),
				title: 'product 1',
				description: 'description 1',
				image: '/menu/our-menu-01.webp',
				price: 10,
			},
			{
				id: crypto.randomUUID(),
				title: 'product 2',
				description: 'description 2',
				image: '/menu/our-menu-01.webp',
				price: 15,
			},
			{
				id: crypto.randomUUID(),
				title: 'product 3',
				description: 'description 3',
				price: 20,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 4',
				description: 'description 4',
				price: 25,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 5',
				description: 'description 5',
				price: 30,
				image: '/menu/our-menu-01.webp',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		title: 'Drink',
		slug: 'drink',
		url: '/menu/#drink',
		image: '/menu/our-menu-03.webp',
		products: [
			{
				id: crypto.randomUUID(),
				title: 'product 1',
				description: 'description 1',
				price: 10,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 2',
				description: 'description 2',
				price: 15,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 3',
				description: 'description 3',
				price: 20,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 4',
				description: 'description 4',
				price: 25,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 5',
				description: 'description 5',
				price: 30,
				image: '/menu/our-menu-01.webp',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		title: 'Starters',
		slug: 'starters',
		url: '/menu/#starters',
		image: '/menu/our-menu-04.webp',
		products: [
			{
				id: crypto.randomUUID(),
				title: 'product 1',
				description: 'description 1',
				price: 10,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 2',
				description: 'description 2',
				price: 15,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 3',
				description: 'description 3',
				price: 20,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 4',
				description: 'description 4',
				price: 25,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 5',
				description: 'description 5',
				price: 30,
				image: '/menu/our-menu-01.webp',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		title: 'Happy Hour',
		slug: 'main',
		url: '/menu/#main',
		image: '/menu/our-menu-05.webp',
		products: [
			{
				id: crypto.randomUUID(),
				title: 'product 1',
				description: 'description 1',
				price: 10,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 2',
				description: 'description 2',
				price: 15,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 3',
				description: 'description 3',
				price: 20,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 4',
				description: 'description 4',
				price: 25,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 5',
				description: 'description 5',
				price: 30,
				image: '/menu/our-menu-01.webp',
			},
		],
	},
	{
		id: crypto.randomUUID(),
		title: 'Dessert',
		slug: 'dessert',
		url: '/menu/#dessert',
		image: '/menu/our-menu-06.webp',
		products: [
			{
				id: crypto.randomUUID(),
				title: 'product 1',
				description: 'description 1',
				price: 10,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 2',
				description: 'description 2',
				price: 15,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 3',
				description: 'description 3',
				price: 20,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 4',
				description: 'description 4',
				price: 25,
				image: '/menu/our-menu-01.webp',
			},
			{
				id: crypto.randomUUID(),
				title: 'product 5',
				description: 'description 5',
				price: 30,
				image: '/menu/our-menu-01.webp',
			},
		],
	},
];

const Menu = async () => {
	// const indexesArray = [1, 2, 0, 3];
	// const categories: CategoryType[] = await getCategories();
	// const launchAndDinnerCategories = categories.filter(
	// 	cat =>
	// 		cat.title.toLocaleLowerCase() === 'launch' ||
	// 		cat.title.toLocaleLowerCase() === 'dinner'
	// );
	// const otherCategories = categories.filter(
	// 	cat =>
	// 		cat.title.toLocaleLowerCase() !== 'launch' &&
	// 		cat.title.toLocaleLowerCase() !== 'dinner'
	// );

	// const reorderedArray = reorderArrayByIndexes(otherCategories, indexesArray);

	const launchAndDinnerCategories = categories.filter(
		(category) => category.slug === 'launch' || category.slug === 'dinner'
	);

	return (
		<div className='w-full -mt-[96px]'>
			<PageHeader image='/bg-menu.jpg.webp' title='Bistro' />
			{/* starters - main - drinks - desert */}
			<MenuCategories categories={categories} />
			{/*  launch - dinner */}
			<SpecialCategories categories={launchAndDinnerCategories} />
		</div>
	);
};

export default Menu;
