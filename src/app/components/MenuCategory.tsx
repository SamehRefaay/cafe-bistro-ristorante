import { CategoryType, ProductType } from '@/types/types';
import MenuCategoryItem from './MenuCategoryItem';

const getProductsByCategory = async (slug: string) => {
	const res = await fetch(`http://localhost:3000/api/products?cat=${slug}`, {
		cache: 'no-store',
	});

	if (!res.ok) throw new Error('Failed to fetch all categories!');

	return res.json();
};

const MenuCategory = async ({ category }: { category: CategoryType }) => {
	const products: ProductType[] = await getProductsByCategory(category.slug);
	return (
		<div className="flex flex-col gap-10">
			<h5 className="uppercase font-poppins font-medium text-[24px] text-[#222] leading-5 tracking-[3px] ">
				{category.title}
			</h5>
			<div className="flex flex-col gap-5">
				{products.map(product => (
					<MenuCategoryItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default MenuCategory;
