import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { prisma } from '@/utils/client';
import { Product } from '@prisma/client';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { StockText } from '../[id]/details/page';

const quantity = 1456;

const MenusGridPage = async () => {
	const products = await prisma.product.findMany();

	if (!products) return notFound();

	return (
		<div className='py-5'>
			<div className='container mx-auto'>
				<div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{products.map((item) => (
						<ProductGridItem key={item.id} product={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default MenusGridPage;

const ProductGridItem = ({ product }: { product: Product }) => {
	return (
		<Card className=''>
			<CardHeader className='p-0'>
				<div className='w-full h-[100px] relative overflow-hidden group rounded-t-xl'>
					{product.image && (
						<Image
							src={product.image}
							alt='product-image'
							fill
							className='object-cover group-hover:scale-105 transition-all duration-300'
						/>
					)}
				</div>
			</CardHeader>
			<CardContent>
				<div className='w-full flex items-center justify-between'>
					<span>{product?.name}</span>
					<span>${product?.price}</span>
				</div>
				<div className='w-full flex items-center justify-between'>
					<p>
						Qty<span>{product?.quantity}</span>
					</p>
					<StockText available={product?.available} />
				</div>
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
};
