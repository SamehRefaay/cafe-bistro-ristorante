import React from 'react';
import CustomSlide from './CustomSlider';
import EventItem from './EventItem';
import { events } from '../../lib/data';

const Events = () => {
	const eventsData = {
		slides: [
			{ id: '001', src: '/bg-event-01.jpg.webp', alt: 'slide-1' },
			{ id: '002', src: '/bg-event-02.jpg.webp', alt: 'slide-2' },
			{ id: '003', src: '/bg-event-03.jpg.webp', alt: 'slide-3' },
		],
	};

	const data = events;

	const className =
		'absolute  lg:w-[1280px] h-[350px] left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 rounded-lg ';

	const animations = [
		'animate-fadeInDown',
		'animate-scaleUp',
		'animate-fadeInUp',
	];

	return (
		<CustomSlide
			titles={{ firstTitle: 'Upcoming', secondTitle: 'Events', variant: 2 }}
			images={eventsData.slides}
		>
			{data.map((item, index) => (
				<EventItem
					key={item?.id}
					className={`${className} ${animations[index]}`}
					event={item}
				/>
			))}
		</CustomSlide>
	);
};

export default Events;
