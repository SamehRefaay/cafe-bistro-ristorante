import { Separator } from '@/components/ui/separator';
import { prisma } from '@/utils/client';
import Image from 'next/image';

const page = async () => {
	const product = await prisma.product.findUnique({
		where: {
			id: 1,
		},
	});

	return (
		<div className='py-5'>
			<div className='container'>
				<h3 className='text-2xl text-primary font-primary font-medium'>Product Details</h3>
				<Separator className='mb-8' />
				<div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
					<div className='md:col-span-2 relative w-full h-[400px]'>
						{product?.image && (
							<Image src={product?.image} alt='product-image' fill className='object-cover' />
						)}
					</div>
					<div className='col-span-1'></div>
					<div className='col-span-1'></div>
				</div>
			</div>
		</div>
	);
};

export default page;
