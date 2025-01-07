import { ProductType } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const SpecialCategoryProduct = ({ product }: { product: ProductType }) => {
	return (
		<div className='w-full grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
			<div className='md:col-span-1 lg:col-span-2 relative w-full max-w-[350px] mx-auto h-[150px] overflow-hidden rounded-3xl'>
				{product.image && (
					<Image
						className='rounded-3xl object-cover hover:scale-125 transition-all duration-300'
						src={product.image}
						alt='product-image'
						fill
					/>
				)}
			</div>
			<div className='md:col-span-2 lg:col-span-4 flex flex-col justify-between text-center md:text-left'>
				<div>
					<h6 className='uppercase font-poppins font-light text-[18px] text-[#333] leading-6 tracking-[2px]'>
						{product?.title}
					</h6>
					<p className='font-medium text-base text-[#666] leading-7'>{product?.description}</p>
				</div>
				<p className='hidden lg:block uppercase font-normal text-[22px] text-[#333] leading-5'>
					{product?.price}$
				</p>
			</div>
		</div>
	);
};

export default SpecialCategoryProduct;
