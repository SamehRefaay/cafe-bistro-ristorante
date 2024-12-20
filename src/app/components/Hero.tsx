'use client';
import React, { useCallback, useState } from 'react';
import CustomParagraph from './CustomParagraph';

// import swiper component
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import swiper moduels
import 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

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
				spaceBetween={50}
				loop={true}
				// breakpoints={{
				// 	640: { slidesPerView: 1 },
				// 	768: { slidesPerView: 2 },
				// 	1024: { slidesPerView: 3 },
				// 	1280: { slidesPerView: 4 },
				// }}
				onSwiper={setSwiperRef}
				onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
				modules={[Autoplay]}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				className="w-full h-[400px] xl:h-screen"
			>
				<SwiperSlide className="w-full h-full bg-red-400">1</SwiperSlide>
				<SwiperSlide className="w-full h-full bg-green-400">2</SwiperSlide>
				<SwiperSlide className="w-full h-full bg-blue-400">3</SwiperSlide>
				<SwiperSlide className="w-full h-full bg-yellow-400">4</SwiperSlide>
			</Swiper>
			{/* slider buttons */}
			<div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 mx-auto absolute left-0 top-[200px] xl:top-[50vh] z-10 flex items-center justify-between">
				<button
					onClick={handlePrevious}
					className="text-2xl bg-black hover:bg-accent-hover text-white w-[48px] h-[48px] flex justify-center items-center rounded-full"
				>
					<FiArrowLeft />
				</button>
				<button onClick={handleNext} className="slider-btn text-2xl">
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
			<div className="container mx-auto h-[400px] bg-black"></div>
		</section>
	);
};

export default Hero;
