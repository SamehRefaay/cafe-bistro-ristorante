import React from 'react';
import CustomTitle from './CustomTitle';
import Image from 'next/image';
import MenuTypeItem from './MenuTypeItem';

const OurMenu = () => {
	const data = [
		{
			id: '001',
			title: 'Launch',
			href: '/menu/#launch',
			image: '/our-menu-01.jpg.webp',
		},
		{
			id: '002',
			title: 'Dinner',
			href: '/menu/#dinner',
			image: '/our-menu-02.jpg.webp',
		},
		{
			id: '003',
			title: 'Drink',
			href: '/menu/#drink',
			image: '/our-menu-03.jpg.webp',
		},
		{
			id: '004',
			title: 'Starters',
			href: '/menu/#starters',
			image: '/our-menu-04.jpg.webp',
		},
		{
			id: '005',
			title: 'Happy Hour',
			href: '/menu/#happy-hour',
			image: '/our-menu-05.jpg.webp',
		},
		{
			id: '006',
			title: 'Desert',
			href: '/menu/#desert',
			image: '/our-menu-06.jpg.webp',
		},
	];
	return (
		<section className="w-full bg-[#f5f2ec] py-32">
			<div className="max-w-7xl mx-auto">
				<CustomTitle firstTitle="Discover" secondTitle="Our Menu" variant={1} />
				<div className="mt-20 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3">
					{data.map((item, index) => (
						<div
							key={item.id}
							className={`${
								index === 0 || index === 1
									? 'row-span-2'
									: index === 4
									? 'col-span-2'
									: 'col-span-1 row-span-1'
							}`}
						>
							<MenuTypeItem
								title={item.title}
								href={item.href}
								image={item.image}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurMenu;
