import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
	title: string;
	href: string;
	image: string;
}

const MenuTypeItem = ({ title, href, image }: Props) => {
	return (
		<div className="w-full h-full relative flex justify-center items-center overflow-hidden rounded-lg">
			<Image
				className="object-cover rounded-lg transition-all duration-500 hover:scale-110"
				src={image}
				alt={`${title}-image`}
				fill
			/>
			<Link
				href={href}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 btn bg-white bg-opacity-90 text-primary/80 font-bold uppercase tracking-[5px] transition-all duration-300 hover:bg-accent-hover hover:bg-opacity-90 hover:text-white text-[12px] md:text-[14] lg:text-base"
			>
				{title}
			</Link>
		</div>
	);
};

export default MenuTypeItem;
