import React from 'react';
import MenuCategory from './MenuCategory';
import { CategoryType } from '@/types/types';

type CategoriesType = {
	categories: CategoryType[];
};

const MenuCategories = async ({ categories }: CategoriesType) => {
	return (
		<section className='relative bg-gray-pattern-1 w-full py-20 px-4 lg:px-0'>
			<div className='container mx-auto'>
				<div className='absolute top-0 left-0 w-full h-full bg-grid-bg-2 opacity-[0.02]'></div>
				<div className='opacity-100 max-w-7xl mx-auto  grid gap-5 md:gap-10 lg:gap-20 grid-cols-1 md:grid-cols-2'>
					{categories.map((category) => {
						return <MenuCategory key={category.id} category={category} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default MenuCategories;
