import React from 'react';
import CustomTitle from './CustomTitle';
import { FaCirclePlay } from 'react-icons/fa6';

const OurVideo = () => {
	return (
		<section className="relative w-full h-[700px] py-20 bg-fixed bg-ourVideo-bg">
			<div className="w-full h-full flex flex-col items-center gap-10">
				<CustomTitle
					firstTitle="Discover"
					secondTitle="Our Video"
					variant={2}
				/>
			</div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
				<FaCirclePlay
					size={80}
					className="text-white transition-all duration-300 hover:text-primary-red hover:scale-125 hover:opacity-70"
				/>
			</div>
		</section>
	);
};

export default OurVideo;
