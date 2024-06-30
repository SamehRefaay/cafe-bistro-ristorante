import { CategoryType, ProductType } from '@/types/types';
import SpecialCategoryProduct from './SpecialCategoryProduct';

interface Props {
	category: CategoryType;
}

const getProductsByCategory = async (slug: string) => {
	const res = await fetch(`http://localhost:3000/api/products?cat=${slug}`, {
		cache: 'no-store',
	});

	if (!res.ok) throw new Error('Failed to fetch all categories!');

	return res.json();
};

const SpecialCategory = async ({ category }: Props) => {
	const products: ProductType[] = await getProductsByCategory(category.slug);

	return (
		<div className="w-full">
			<div
				className={`w-full h-[400px] bg-fixed ${
					category.slug === 'launch' ? 'bg-special-cat-01' : 'bg-special-cat-02'
				}  `}
			>
				<div className="w-full h-full flex justify-center items-center">
					<h1 className="text-6xl text-[#eee] font-poppins font-bold uppercase">
						{category.title}
					</h1>
				</div>
			</div>
			<div className="max-w-7xl mx-auto py-20">
				<div className="grid gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 ">
					{products.map(product => (
						<SpecialCategoryProduct key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SpecialCategory;
