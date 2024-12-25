'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import CustomTitle from './CustomTitle';
import 'tw-elements';

interface Image {
	id: string;
	src: string;
	alt: string;
}

interface Props {
	titles?: { firstTitle: string; secondTitle: string; variant: number };
	images?: Image[];
	children: React.ReactNode[];
}

const CustomSlide = ({ titles, images, children }: Props) => {
	const [slide, setSlide] = useState(0);
	const [slideAnimation, setSlideAnimation] = useState(false);
	const dots = images
		? [...new Array(images?.length)]
		: [...new Array(children?.length)];

	useEffect(() => {
		const interval = setInterval(handleShowNext, 4000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	const handleShowPrev = () => {
		setSlideAnimation(true);
		images && setSlide(prev => (prev > 0 ? prev - 1 : images.length - 1));
		children && setSlide(prev => (prev > 0 ? prev - 1 : children.length - 1));
		setTimeout(() => {
			setSlideAnimation(false);
		}, 500);
	};

	const handleShowNext = () => {
		setSlideAnimation(true);
		images && setSlide(prev => (prev < images.length - 1 ? prev + 1 : 0));
		children && setSlide(prev => (prev < children.length - 1 ? prev + 1 : 0));
		setTimeout(() => {
			setSlideAnimation(false);
		}, 500);
	};
	const handleDotClick = (index: number) => {
		setSlideAnimation(true);
		setSlide(index);
		setTimeout(() => {
			setSlideAnimation(false);
		}, 500);
	};

	return (
		<div className="relative w-full h-screen">
			<div className="w-full h-screen">
				{images && (
					<Image
						className={`duration-1000 ${
							slideAnimation ? 'animate-fadeIn' : ''
						}`}
						src={images[slide]?.src}
						alt={images[slide]?.alt}
						fill
					/>
				)}
			</div>

			{/* previous button */}
			<button
				className="absolute left-10 top-[50%] w-16 h-16 rounded-full bg-black bg-opacity-70 text-white flex justify-center items-center transition-all duration-300 hover:bg-primary-red"
				onClick={handleShowPrev}
			>
				<MdNavigateBefore size={30} />
			</button>

			{/* next button */}
			<button
				className="absolute right-10 top-[50%] w-16 h-16 rounded-full bg-black bg-opacity-70 text-white flex justify-center items-center
				transition-all duration-300 hover:bg-primary-red"
				onClick={handleShowNext}
			>
				<MdNavigateNext size={30} />
			</button>

			{/* title */}
			<div
				className={`absolute top-16 left-1/2 -translate-x-1/2 
				}`}
			>
				{titles && (
					<CustomTitle
						firstTitle={titles.firstTitle}
						secondTitle={titles.secondTitle}
						variant={titles.variant}
					/>
				)}
			</div>

			{/*  children */}
			{children[slide]}

			{/* dots */}
			<div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
				{dots.map((dot, index) => (
					<div
						key={index}
						className={`w-3 h-3 rounded-full cursor-pointer border-[3px]  hover:bg-primary-red hover:border-white ${
							index === slide
								? 'bg-primary-red border-white'
								: 'bg-slate-400 border-slate-400'
						}`}
						onClick={() => handleDotClick(index)}
					></div>
				))}
			</div>
		</div>
	);
};

export default CustomSlide;
