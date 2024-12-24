import React from 'react';
import CustomTitle from './CustomTitle';
import MenuTypeItem from './MenuTypeItem';
import { CategoryType } from '@/types/types';
import { UrlConfig } from '@/lib/Constants';

// const getMenuCategory = async () => {
// 	console.log(UrlConfig.url);
// 	const res = await fetch(`${UrlConfig.url}/api/categories`, {
// 		cache: 'no-store',
// 	});

// 	if (!res.ok) {
// 		throw new Error('Some thing went wrong!');
// 	}

// 	return res.json();
// };

interface MenuCategroey {
	id: string;
	title: string;
	slug: string;
	url: string;
	image: string;
}

const categories: MenuCategroey[] = [
	{
		id: crypto.randomUUID(),
		title: 'Launch',
		slug: 'launch',
		url: '/menu/#launch',
		image: '/photo-gallery-01.jpg.webp',
	},
	{
		id: crypto.randomUUID(),
		title: 'Dinner',
		slug: 'dinner',
		url: '/menu/#dinner',
		image: '/photo-gallery-02.jpg.webp',
	},
	{
		id: crypto.randomUUID(),
		title: 'Drink',
		slug: 'drink',
		url: '/menu/#drink',
		image: '/photo-gallery-03.jpg.webp',
	},
	{
		id: crypto.randomUUID(),
		title: 'Starters',
		slug: 'starters',
		url: '/menu/#starters',
		image: '/photo-gallery-04.jpg.webp',
	},
	{
		id: crypto.randomUUID(),
		title: 'Happy Hour',
		slug: 'main',
		url: '/menu/#main',
		image: '/photo-gallery-05.jpg.webp',
	},
	{
		id: crypto.randomUUID(),
		title: 'Dessert',
		slug: 'dessert',
		url: '/menu/#dessert',
		image: '/photo-gallery-06.jpg.webp',
	},
];

const OurMenu = async () => {
	return (
		<section className="w-full px-4 lg:px-0 bg-[#f5f2ec] py-32">
			<div className="max-w-7xl mx-auto">
				<CustomTitle firstTitle="Discover" secondTitle="Our Menu" variant={1} />
				<div className="mt-20 grid gap-2 md:gap-3 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
					{categories.map((item, index) => (
						<div
							key={item.id}
							className={`w-full ${
								index === 0 || index === 1
									? 'col-span-1 row-span-1 h-[250px] lg:row-span-2 lg:h-[516px]'
									: index === 4
									? 'lg:col-span-2'
									: 'h-[250px] col-span-1 row-span-1'
							}`}
						>
							<MenuTypeItem
								title={item?.title}
								href={`/menu/#${item?.slug}`}
								image={item?.image}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurMenu;
