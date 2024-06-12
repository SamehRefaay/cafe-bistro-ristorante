import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomLink from './CustomLink';

const Features = () => {
	const data = [
		{ id: '001', title: 'Romantic Restaurant', image: '/intro-01.jpg.webp' },
		{ id: '002', title: 'Delicious Food', image: '/intro-02.jpg.webp' },
		{ id: '003', title: 'Red Wines you love', image: '/intro-03.jpg.webp' },
	];
	return (
		<section className="w-full">
			<div className="max-w-7xl mx-auto py-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
				{data.map(item => (
					<div key={item.id} className="w-full flex flex-col gap-10">
						<div className="overflow-hidden rounded-lg">
							<Image
								className="transition-all duration-500 hover:scale-110"
								src={item.image}
								alt="feature image"
								width={600}
								height={600}
							/>
						</div>
						<div className="w-full flex flex-col text-left gap-5">
							<Link href="#">
								<h3 className="text-[22px] font-medium font-poppins text-primary-gray-dark leading-[5px] tracking-[5px] uppercase transition-colors duration-300 hover:text-primary-red">
									{item.title}
								</h3>
							</Link>
							<p className="text-[16px] text-gray-500 font-normal">
								Lorem ipsum dolor sit, amet consectetur elit stiue de
								consectetur.
							</p>
							<CustomLink title="Read more" href="/features" alignment="left" />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
