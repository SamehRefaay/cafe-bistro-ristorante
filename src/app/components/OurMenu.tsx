import React from 'react';
import CustomTitle from './CustomTitle';
import MenuTypeItem from './MenuTypeItem';
import { menuCategories } from '../lib/data';

const OurMenu = () => {
	const data = menuCategories;
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
