import React from 'react';
import CustomLink from './CustomLink';
import Image from 'next/image';
import CountDown from './CountDown';

interface Props {
	event: {
		title: string;
		desc: string;
		datetime: string;
		image: string;
	};
	className: string;
}

const EventItem = ({ event, className }: Props) => {
	return (
		<div className={`${className} flex`}>
			<div className="relative w-12 rounded-l-lg bg-primary-red text-white ">
				<p className="absolute top-1/2 -left-1/2 -rotate-90 ">
					{event?.datetime}
				</p>
			</div>
			<div className="flex-1 h-full">
				<Image
					className="w-full h-full object-cover"
					src={event?.image}
					alt="event image"
					width={800}
					height={300}
				/>
			</div>
			<div className="flex-1 flex flex-col gap-5 text-center justify-center items-center bg-white rounded-r-lg">
				<h1 className="text-[22px] font-poppins font-medium text-[#222] leading-5 uppercase">
					{event?.title}
				</h1>
				<p className="text-[15px] text-[#666] max-w-md leading-7 font-normal">
					{event?.desc}
				</p>
				<CountDown />
				<CustomLink title="View Details" href="#" alignment="center" />
			</div>
		</div>
	);
};

export default EventItem;
