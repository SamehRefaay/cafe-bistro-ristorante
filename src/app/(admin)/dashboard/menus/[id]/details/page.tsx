import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Routes } from '@/constants/enums';
import { prisma } from '@/utils/client';
import { Product } from '@prisma/client';
import { SpeakerIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMicrophone, FaMicrophoneAlt } from 'react-icons/fa';
import { FaHeart, FaSpeakap, FaSpeakerDeck } from 'react-icons/fa6';

const page = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const product = await prisma.product.findUnique({
		where: {
			id: Number(id),
		},
		include: {
			category: true,
		},
	});

	return (
		<div className='py-5'>
			<div className='container mx-auto'>
				<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10'>
					<div className='col-span-1 lg:col-span-2 h-[480px]'>
						<ProductImageCard image={product?.image} />
					</div>
					<div className='col-span-1 h-[420px]'>
						<ProductInfoCard product={product} />
					</div>
					<div className='col-span-1 h-[420px]'>
						<ProductDetailsCard product={product} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;

const ProductImageCard = ({ image }: { image: string | null | undefined }) => {
	return (
		<Card className='h-full'>
			<CardHeader className=''>
				<h2 className='text-xl font-semibold text-primary'>Product Details</h2>
			</CardHeader>
			<Separator className='mb-6' />
			<CardContent className=''>
				{image && (
					<div className='relative overflow-hidden w-full h-[350px] rounded-xl group'>
						<Image
							src={image}
							alt='product-image'
							fill
							className='object-cover group-hover:scale-105 transition-all duration-300 rounded-xl'
						/>
					</div>
				)}
			</CardContent>
		</Card>
	);
};

const ProductInfoCard = ({ product }: { product: any }) => {
	return (
		<Card className='w-full h-full'>
			<CardHeader className=''>
				<h2 className='text-xl font-semibold text-primary'>Product Info</h2>
			</CardHeader>
			<CardContent>
				<Attribute title='Price' value={product.price} />
				<Attribute title='Product Category' value={product?.category.name} />
				<Attribute title='Availiblity' value='In stock' highLightedValue={true} />
				<Attribute title='Delivery Charges' value={'free'} />
				<Attribute title='SKU Identification' value={product.id} />
			</CardContent>
			<CardFooter className='flex gap-10 items-center'>
				<Button asChild className='w-full h-full py-3 bg-primary hover:bg-primary/80'>
					<Link href={`/${Routes.DASHBOARD}/${Routes.MENUS}/${product.id}/${Routes.EDIT_PRODUCT}`}>Edit</Link>
				</Button>
				<Button
					className='w-full h-full py-3 bg-accent hover:bg-accent-hover
                '
				>
					Delete
				</Button>
			</CardFooter>
		</Card>
	);
};
const ProductDetailsCard = ({ product }: { product: any }) => {
	return (
		<Card className='w-full h-full'>
			<CardHeader className=''>
				<h2 className='text-xl font-semibold text-primary'>Product Details</h2>
			</CardHeader>
			<CardContent className='w-full'>
				<p>{product.description}</p>
			</CardContent>
			<CardFooter className='w-full h-[150px] flex gap-10 items-center'>
				<div className='w-full flex flex-col items-center'>
					<SpeakerIcon />
					<p>1033</p>
					<p>Total Order</p>
				</div>
				<Separator className='w-[1px] h-full' orientation='vertical' />
				<div className='w-full flex flex-col items-center'>
					<FaHeart />
					<p>1033</p>
					<p>Favorits</p>
				</div>
			</CardFooter>
		</Card>
	);
};

const Attribute = ({
	title,
	value,
	highLightedValue = false,
}: {
	title: string;
	value: string;
	highLightedValue?: boolean;
}) => {
	return (
		<div className='w-full py-3 flex justify-between items-center border-t-1'>
			<span className='text-primary font-bold text-[18px]'>{title}</span>
			<span className={`capitalize ${highLightedValue ? 'px-1 rounded-md bg-accent text-white' : ''}`}>
				{value}
			</span>
		</div>
	);
};
