import React from 'react';
import CustomLink from './CustomLink';
import Image from 'next/image';
import CountDown from './CountDown';

interface Props {
	event: {
		title: string;
		description: string;
		datetime: string;
		image: string;
	};
}

const EventItem = ({ event }: Props) => {
	return (
		<div className="w-full h-full flex flex-col lg:flex-row">
			{/* event image & event date & time  */}
			<div className="w-full h-full pt-[60px] lg:py-0 lg:pl-[70px] rounded-tl-lg rounded-tr-lg lg:rounded-tr-none lg:rounded-bl-lg bg-accent">
				<div className="relative w-full h-[300px] ">
					<p className="absolute -top-[40px] left-1/2 -translate-x-1/2 lg:top-1/2 lg:-left-[40px] text-[16px] text-white lg:-rotate-90 z-10 ">
						{/* {event?.datetime} */}
						24 November 2018
					</p>
					<Image
						className="w-full h-full object-cover"
						src={event.image}
						alt=""
						priority
						fill
					/>
				</div>
			</div>
			{/* event details title & description */}
			<div className="w-full p-4 flex flex-col gap-5 text-center justify-center items-center bg-white  rounded-b-lg  lg:rounded-bl-none lg:rounded-tr-lg">
				<h1 className="text-[22px] font-poppins font-medium text-[#222] leading-5 uppercase">
					{event?.title}
				</h1>
				<p className="text-[15px] text-[#666] max-w-md leading-7 font-normal">
					{event?.description}
				</p>
				<CountDown />
				<CustomLink title="View Details" href="#" alignment="center" />
			</div>
		</div>
	);
};

export default EventItem;
