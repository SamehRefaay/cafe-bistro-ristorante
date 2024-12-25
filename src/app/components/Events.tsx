'use client';
// import swiper component
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import swiper modules
import 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';
import { useCallback, useEffect, useState } from 'react';
import CustomTitle from './CustomTitle';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import EventItem from './EventItem';

const events = [
	{
		id: crypto.randomUUID(),
		slideBg: '/events/bg-event-01.webp',
		event: {
			title: 'Wine During Specific Nights',
			description:
				'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
			datetime: '2024-06-12T20:00:00.419Z', // ex:"08:00 PM TUESDAY - 21 NOVEMBER 2018"
			image: '/events/event-01.webp',
		},
	},
	{
		id: crypto.randomUUID(),
		slideBg: '/events/bg-event-02.webp',
		event: {
			title: 'Wine During Specific Nights',
			description:
				'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
			datetime: '2024-06-12T20:00:00.419Z', // ex:"08:00 PM TUESDAY - 21 NOVEMBER 2018"
			image: '/events/event-02.webp',
		},
	},
	{
		id: crypto.randomUUID(),
		slideBg: '/events/bg-event-03.webp',
		event: {
			title: 'Wine During Specific Nights',
			description:
				'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
			datetime: '2024-06-12T20:00:00.419Z', // ex:"08:00 PM TUESDAY - 21 NOVEMBER 2018"
			image: '/events/event-03.webp',
		},
	},
];
const Events = () => {
	const [swiperRef, setSwiperRef] = useState<any>(null);
	const [activeSlide, setActiveSlide] = useState(0);

	const handlePrev = useCallback(() => {
		swiperRef?.slidePrev();
	}, [swiperRef]);
	const handleNext = useCallback(() => {
		swiperRef?.slideNext();
	}, [swiperRef]);

	return (
		<section className="w-full relative">
			<div className="absolute top-10 lg:top-20 left-1/2 -translate-x-1/2 z-10">
				<CustomTitle firstTitle="Upcomming" secondTitle="Events" variant={2} />
			</div>
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
				className="w-full h-full xl:h-screen"
			>
				{events.map((item, index) => (
					<SwiperSlide key={item?.id}>
						{/* slider background image */}
						<div className="relative w-full h-screen">
							<div className="w-0 h-0 bg-white/20 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 animate-flashing"></div>
							<Image src={item?.slideBg} alt="" fill />
						</div>
						{/* slider content event item */}
						<div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
							<div className="container p-20 mx-auto">
								<div className="h-full lg:h-[300px]">
									<EventItem event={item?.event} />
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			{/* slider buttons */}
			<div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
				<div className="container mx-auto">
					<div className="w-full flex items-center justify-between">
						<button
							onClick={handlePrev}
							className="btn-slider w-[48px] h-[48px]"
						>
							<FiArrowLeft />
						</button>
						<button
							onClick={handleNext}
							className="btn-slider w-[48px] h-[48px]"
						>
							<FiArrowRight />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Events;
