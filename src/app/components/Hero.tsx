'use client';
import React, { useCallback, useEffect, useState } from 'react';

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
import { easeIn, easeInOut, motion } from 'framer-motion';

const slides = [
	{
		id: crypto.randomUUID(),
		src: '/hero/slide-1.webp',
		contentText: ['welcome to', 'bistro place'],
		contentAnimation: ['SlideRight', 'fadeInUp', 'fadeInDown'],
	},
	{
		id: crypto.randomUUID(),
		src: '/hero/slide-2.webp',
		contentText: ['welcome to', 'bistro resturant '],
		contentAnimation: ['fadeIn', 'scaleUp', 'rotate360'],
	},
	{
		id: crypto.randomUUID(),
		src: '/hero/slide-3.webp',
		contentText: ['enjoy your time in', 'bistro cafe'],

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
						{({ isActive }) => (
							<div className="relative overflow-hidden w-full h-full group">
								<div className="w-0 h-0 bg-white/20 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 animate-flashing"></div>
								<Image src={slide.src} alt="" fill className="object-cover" />
								<div className="absolute top-1/2 left-1/2 bg-red z-10 -translate-x-1/2 -translate-y-1/2 flex gap-5 xl:gap-10 flex-col justify-center">
									<motion.div
										initial={{ opacity: 0, y: -999 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 1 }}
										className="text-2xl xl:text-5xl font-accent text-white text-center"
									>
										{slide.contentText[0]}
									</motion.div>
									<motion.h1 className="uppercase text-3xl xl:text-6xl tracking-widest font-bold font-primary text-white text-center">
										{slide.contentText[1]}
									</motion.h1>
									<motion.button
										initial={{ opacity: 0, y: 9999 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 1,
											delay: 0.5,
											easings: ['easeOut'],
										}}
										className="w-max mx-auto btn bg-white uppercase text-accent text-base xl:text-lg"
									>
										Look Menu
									</motion.button>
								</div>
							</div>
						)}
					</SwiperSlide>
				))}
			</Swiper>
			{/* slider buttons */}
			<div className="w-full absolute left-0 top-[200px] xl:top-[50vh] z-10">
				<div className="container mx-auto">
					<div className="flex items-center justify-between">
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
				</div>
			</div>
		</section>
	);
};

export default Hero;
