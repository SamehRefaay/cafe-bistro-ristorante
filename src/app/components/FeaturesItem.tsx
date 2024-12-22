import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomLink from './CustomLink';

interface Props {
	item: {
		title: string;
		desc: string;
		image: string;
	};
	link: {
		title: string;
		url: string;
	};
}

const FeaturesItem = ({ item, link }: Props) => {
	return (
		<div className="w-full flex flex-col gap-10">
			<div className="overflow-hidden rounded-lg">
				<Image
					className="transition-all duration-500 hover:scale-110"
					src={item?.image}
					alt="feature image"
					width={600}
					height={600}
				/>
			</div>
			<div className="w-full flex flex-col text-left gap-5">
				<Link href="#">
					<h3 className="text-[22px] font-medium font-poppins text-primary-gray-dark leading-[5px] tracking-widest uppercase transition-colors duration-300 hover:text-primary-red">
						{item?.title}
					</h3>
				</Link>
				<p className="text-[16px] text-gray-500 font-normal">{item?.desc}</p>
				<CustomLink title={link.title} href={link.url} alignment="left" />
			</div>
		</div>
	);
};

export default FeaturesItem;
