import { CategoryType, ProductType } from '@/types/types';
import MenuCategoryItem from './MenuCategoryItem';

const MenuCategory = async ({ category }: { category: CategoryType }) => {
	return (
		<div className='flex flex-col gap-10'>
			<h5 className='uppercase font-poppins font-medium text-[24px] text-[#222] leading-5 tracking-[3px] '>
				{category.title}
			</h5>
			<div className='flex flex-col gap-5'>
				{category.products.map((product) => (
					<MenuCategoryItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default MenuCategory;
