'use client';
import React, { useCallback, useEffect, useState } from 'react';
import CustomParagraph from './CustomParagraph';

// import swiper component
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import swiper moduels
import 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import { motion } from 'framer-motion';

const slides = [
	{
		id: crypto.randomUUID(),
		src: '/hero/slide-1.webp',
		contentAnimation: ['SlideRight', 'fadeInUp', 'fadeInDown'],
	},
	{
		id: crypto.randomUUID(),
		src: '/hero/slide-2.webp',
		contentAnimation: ['fadeIn', 'scaleUp', 'rotate360'],
	},
	{
		id: crypto.randomUUID(),
		src: '/hero/slide-3.webp',
		contentAnimation: ['fadeInUp', 'fadeInDown', 'SlideRight'],
	},
];

const Hero = () => {
	const [swiperRef, setSwiperRef] = useState<any>(null);
	//state to store active slide index
	const [activeSlide, setActiveSlide] = useState(0);

	const handlePrevious = useCallback(() => {
		swiperRef?.slidePrev();
	}, [swiperRef]);

	const handleNext = useCallback(() => {
		swiperRef?.slideNext();
	}, [swiperRef]);

	return (
		<section className="relative">
			{/* image slider */}
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				onSwiper={setSwiperRef}
				onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
				modules={[Autoplay, Pagination]}
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				effect="fade"
				className="w-full h-[400px] xl:h-screen"
			>
				{slides.map(slide => (
					<SwiperSlide key={slide.id}>
						{
							<div className="relative overflow-hidden w-full h-full group">
								<div className="w-0 h-0 bg-white/20 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 animate-flashing"></div>
								<Image src={slide.src} alt="" fill className="object-cover" />
								<div className="w-[600px] h-[200px] bg-black absolute top-1/2 left-1/2 bg-red z-10 -translate-x-1/2 -translate-y-1/2">
									<motion.div
										initial={{ opacity: 0, y: -150 }}
										animate={{ opacity: 1, y: 0 }}
										className=""
									>
										welcome to
									</motion.div>
									<h1 className={`animate-${slide.contentAnimation}`}>
										Bistro Resturant
									</h1>
									<button className={`animate-${slide.contentAnimation}`}>
										Look Menu
									</button>
								</div>
							</div>
						}
					</SwiperSlide>
				))}
			</Swiper>
			{/* slider buttons */}
			<div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 mx-auto absolute left-0 top-[200px] xl:top-[50vh] z-10 flex items-center justify-between">
				<button
					onClick={handlePrevious}
					className="w-[48px] h-[48px] btn-slider text-2xl"
				>
					<FiArrowLeft />
				</button>
				<button
					onClick={handleNext}
					className="w-[48px] h-[48px] btn-slider text-2xl"
				>
					<FiArrowRight />
				</button>
			</div>
			<div>
				<CustomParagraph
					firstTitle="Italian Restaurant"
					secondTitle="WELCOME"
					text="Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque."
					image="/our-story-01.jpg.webp"
				/>
			</div>
			<div className="container mx-auto bg-black">
				<div className="w-[200px] h-[200px] relative group overflow-hidden">
					<Image src="/avatar-01.webp" alt="" fill className="object-cover" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
