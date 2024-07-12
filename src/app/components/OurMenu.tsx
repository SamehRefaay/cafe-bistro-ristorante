import React from 'react';
import CustomTitle from './CustomTitle';
import MenuTypeItem from './MenuTypeItem';
import { CategoryType } from '@/types/types';
import { UrlConfig } from '@/lib/Constants';

const getMenuCategory = async () => {
	const res = await fetch(`${UrlConfig}/api/categories`, {
		cache: 'no-store',
	});

	if (!res.ok) {
		throw new Error('Some thing went wrong!');
	}

	return res.json();
};

const OurMenu = async () => {
	const data: CategoryType[] = await getMenuCategory();
	return (
		<section className="w-full px-4 lg:px-0 bg-[#f5f2ec] py-32">
			<div className="max-w-7xl mx-auto">
				<CustomTitle firstTitle="Discover" secondTitle="Our Menu" variant={1} />
				<div className="mt-20 grid gap-2 md:gap-3 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
					{data &&
						data.map((item, index) => (
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
									title={item.title}
									href={`/${item?.slug}`}
									image={item?.images[0]}
								/>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default OurMenu;
