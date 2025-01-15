import { prisma } from '@/utils/client';
import AddNewProductForm from './_components/AddNewProductForm';
import Image from 'next/image';

const currencies = [
	{
		id: crypto.randomUUID(),
		name: 'USD',
	},
	{
		id: crypto.randomUUID(),
		name: 'EURO',
	},
	{
		id: crypto.randomUUID(),
		name: 'EGP',
	},
];

const AddProductPage = async () => {
	const categories = await prisma.productCategory.findMany();
	return (
		<main className='py-20'>
			<div className='container mx-auto'>
				<h2 className='mb-5 text-3xl font-semibold text-start'>ADD NEW PRODUCT</h2>
				<div className='grid gap-10 grid-cols-1 lg:grid-cols-2 '>
					<AddNewProductForm categories={categories} currencies={currencies} />
					<div>
						<div className='relative w-full h-full group rounded-3xl overflow-hidden'>
							<Image
								src='/menu/our-menu-01.webp'
								alt='product image'
								className='group-hover:scale-110 duration-300 transition-transform'
								fill
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AddProductPage;
