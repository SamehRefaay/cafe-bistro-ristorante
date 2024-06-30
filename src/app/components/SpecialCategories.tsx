import { CategoryType } from '@/types/types';
import React from 'react';
import SpecialCategory from './SpecialCategory';

interface Props {
	categories: CategoryType[];
}

const SpecialCategories = ({ categories }: Props) => {
	return (
		<section className="bg-white w-full px-4 lg:px-0">
			<div className="w-full">
				{categories.map(category => {
					return <SpecialCategory key={category.id} category={category} />;
				})}
			</div>
		</section>
	);
};

export default SpecialCategories;
