import { ProductType } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const SpecialCategoryProduct = ({ product }: { product: ProductType }) => {
	return (
		<div className="flex gap-6">
			<div className="w-[200px] rounded-3xl relative overflow-hidden">
				{product.image && (
					<Image
						className="w-[200px] h-auto rounded-3xl object-contain hover:scale-125 transition-all duration-300"
						src={product.image}
						alt="product-image"
						width={200}
						height={200}
					/>
				)}
			</div>
			<div className="flex flex-col justify-between">
				<div>
					<h6 className="uppercase font-poppins font-light text-[18px] text-[#333] leading-6 tracking-[2px]">
						{product?.title}
					</h6>
					<p className="font-medium text-[#666] leading-7">{product?.desc}</p>
				</div>
				<p className="uppercase font-normal text-[22px] text-[#333] leading-5">
					{product?.price}$
				</p>
			</div>
		</div>
	);
};

export default SpecialCategoryProduct;
