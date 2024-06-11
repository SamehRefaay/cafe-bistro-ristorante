'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

interface Image {
	id: string;
	src: string;
	alt: string;
}

interface Props {
	images: Image[];
}

const Slider = ({ images }: Props) => {
	const [slide, setSlide] = useState(0);
	const [slideAnimation, setSlideAnimation] = useState(false);
	const [textAnimation, setTextAnimation] = useState(false);
	const dots = [...new Array(images.length)];

	useEffect(() => {
		const interval = setInterval(handleShowNext, 4000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		setTextAnimation(true);
	}, []);

	const handleShowPrev = () => {
		setSlideAnimation(true);
		setSlide(prev => (prev > 0 ? prev - 1 : images.length - 1));
		setTimeout(() => {
			setSlideAnimation(false);
		}, 500);
	};

	const handleShowNext = () => {
		setSlideAnimation(true);
		setSlide(prev => (prev < images.length - 1 ? prev + 1 : 0));
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
		<div className="w-full h-screen">
			<div className="relative -top-[96px] left-0 w-full h-screen">
				<Image
					className={`duration-[4000] ${
						slideAnimation ? 'animate-fadeIn' : ''
					}`}
					src={images[slide].src}
					alt={images[slide].alt}
					fill
				/>
			</div>

			{/* previous button */}
			<button
				className="absolute left-10 top-[50%] w-16 h-16 rounded-full bg-black bg-opacity-70 text-white flex justify-center items-center"
				onClick={handleShowPrev}
			>
				<MdNavigateBefore size={30} />
			</button>

			{/* next button */}
			<button
				className="absolute right-10 top-[50%] w-16 h-16 rounded-full bg-black bg-opacity-70 text-white flex justify-center items-center"
				onClick={handleShowNext}
			>
				<MdNavigateNext size={30} />
			</button>

			{/*  text */}

			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
				<h1
					className={`font-courgette text-white text-6xl transition-all duration-1000 ${
						textAnimation
							? 'opacity-100 translate-y-0'
							: '-translate-y-20 opacity-0 duration-0'
					}`}
				>
					welcome to
				</h1>
				<h1
					className={`font-poppins font-bold uppercase text-white text-8xl transition-all delay-500 duration-1000 ${
						textAnimation
							? 'opacity-100 translate-y-0'
							: 'translate-y-20 opacity-0 duration-0'
					}}`}
				>
					Bistro Place
				</h1>
				<button
					className={`mt-4 bg-white py-2 px-4 rounded-lg uppercase text-black hover:bg-primary-red hover:text-white scale-0 transition-all delay-1000 duration-1000 ${
						textAnimation ? 'opacity-100 scale-100' : 'opacity-0 '
					}`}
				>
					look menu
				</button>
			</div>

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

export default Slider;
