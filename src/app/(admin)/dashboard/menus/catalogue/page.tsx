import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Routes } from '@/constants/enums';
import { prisma } from '@/utils/client';
import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

const Catalogue = async () => {
	const products = await prisma.product.findMany();
	return (
		<div className='py-5'>
			<div className='container mx-auto'>
				<div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Catalogue;

const ProductCard = ({ product }: { product: Product }) => {
	return (
		<Card>
			<CardHeader className='p-0'>
				{product.image && <CardHeaderImage image={product.image} />}
				<div className='p-6 w-full flex justify-between items-center'>
					<h2 className='text-xl font-semibold text-primary'>{product?.name}</h2>
					<div
						className='w-[70px] h-[40px] p-4 bg-accent
                    text-white font-medium flex justify-center items-center rounded-xl'
					>
						${product?.price}
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className='flex items-center justify-between'>
					<p>
						Total Orders: <span className='text-accent font-bold'>150</span>
					</p>
					<p>
						Revenue: <span className='text-accent font-bold'>$1000</span>
					</p>
				</div>
			</CardContent>
			<CardFooter>
				<Button asChild className='w-full'>
					<Link href={`/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCTDETAIL}/${product.id}`}>
						See More
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};

const CardHeaderImage = ({ image }: { image: string }) => {
	return (
		<div className='w-full h-[200px] relative overflow-hidden rounded-t-xl group'>
			<Image
				src={image}
				alt='produt-image'
				fill
				className='object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300'
			/>
		</div>
	);
};
