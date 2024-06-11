import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const OurStory = () => {
	return (
		<section className="-mt-[96px] py-[100px] h-max bg-primary-gray">
			<div className="max-w-7xl mx-auto grid gap-20 grid-cols-1 md:grid-cols-3">
				<div className="p-8 col-span-2 lg:max-w-[600px] text-center">
					<h3 className="font-courgette text-primary-red text-3xl">
						Italian Restaurant
					</h3>
					<h2 className="mt-5 font-poppins font-bold text-5xl ">Welcome</h2>
					<p className="mt-10 text-gray-600 text-sm leading-7 ">
						Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
						fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
						facilisis ligula sem id neque.
					</p>
					<Link
						href="/about"
						className="mt-5 flex gap-2 items-center justify-center text-center text-gray-700 text-sm uppercase"
					>
						Our Story <FaArrowRightLong size={12} className="text-gray-700" />
					</Link>
				</div>

				<div className="col-span-1 overflow-hidden rounded-lg">
					<Image
						className="transition-transform duration-1000 hover:scale-125 "
						src={'/our-story-01.jpg.webp'}
						alt="our story image"
						width={400}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
};

export default OurStory;
