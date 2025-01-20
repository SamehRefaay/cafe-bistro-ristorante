import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Routes } from '@/constants/enums';
import { prisma } from '@/utils/client';
import Image from 'next/image';
import Link from 'next/link';

const page = async () => {
	const products = await prisma.product.findMany();
	return (
		<div className='py-5'>
			<div className='container mx-auto bg-white rounded-xl shadow-md'>
				<h3 className='py-4 text-2xl text-primary font-primary font-medium'>Product List</h3>
				<Separator className='mb-8' />
				<Table>
					<TableCaption>A list of products.</TableCaption>
					<TableHeader className='bg-accent hover:bg-accent-hover py-4 '>
						<TableRow>
							<TableHead className='text-white'>Product Id</TableHead>
							<TableHead className='text-white'>Product Name</TableHead>
							<TableHead className='text-white text-right'>Quantity</TableHead>
							<TableHead className='text-white text-right'>Status</TableHead>
							<TableHead className='text-white text-right'>Price</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{products.map((product) => (
							<TableRow key={product.id}>
								<TableCell className='font-medium'>{product.id}</TableCell>
								<TableCell className=''>
									<Link
										href={`/${Routes.DASHBOARD}/${Routes.MENUS}/${product.id}/${Routes.PRODUCT_DETAIL}`}
										className='flex gap-5 items-center'
									>
										{product.image && <ProductImage image={product.image} />}
										<div>{product?.name}</div>
									</Link>
								</TableCell>
								<TableCell className='text-right'>{32642}</TableCell>
								<TableCell className='text-right'>In Stock</TableCell>
								<TableCell className='text-right'>{product.price}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default page;

const ProductImage = ({ image }: { image: string }) => {
	return (
		<div className='w-[50px] h-[50px] relative overflow-hidden rounded-full group'>
			<Image
				src={image}
				alt='product-image'
				fill
				className='object-cover group-hover:scale-110 transition-all duration-300'
			/>
		</div>
	);
};
