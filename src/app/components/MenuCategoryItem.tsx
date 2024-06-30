import { ProductType } from '@/types/types';
import React from 'react';

const MenuCategoryItem = ({ product }: { product: ProductType }) => {
	return (
		<div className="w-full">
			<div className="flex justify-between items-center">
				<h6 className="uppercase font-poppins font-light text-[18px] text-[#333] leading-6 tracking-[2px]">
					{product?.title}
				</h6>
				<div className="bg-dot flex-1  h-[1px]"></div>
				<span className="uppercase font-normal text-[22px] text-[#333] leading-5">
					${product?.price}
				</span>
			</div>
			<p className="text-[13px] font-medium text-[#666] leading-7">
				{product?.desc}
			</p>
		</div>
	);
};

export default MenuCategoryItem;
