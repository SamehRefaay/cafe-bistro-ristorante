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
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-4 px-8 rounded-lg bg-white bg-opacity-90 text-primary-gray-dark font-bold uppercase tracking-[5px] transition-all duration-300 hover:bg-primary-red  hover:bg-opacity-90 hover:text-white"
			>
				{title}
			</Link>
		</div>
	);
};

export default MenuTypeItem;
