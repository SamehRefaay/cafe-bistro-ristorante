import React from 'react';
import { reviews } from '../lib/data';
import ReviewItem from './ReviewItem';
import CustomSlide from './CustomSlider';

const Review = () => {
	const data = reviews;
	const className =
		'absolute  lg:w-[1280px] h-[350px] left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 rounded-lg ';

	const animations = [
		'animate-fadeInDown',
		'animate-scaleUp',
		'animate-rotate360',
	];
	return (
		<section className="w-full bg-white">
			<CustomSlide
				titles={{
					firstTitle: 'Customers Say',
					secondTitle: 'Review',
					variant: 1,
				}}
			>
				{data.map((item, index) => (
					<ReviewItem
						key={item?.id}
						className={`${className} ${animations[index]}`}
						review={item}
					/>
				))}
			</CustomSlide>
		</section>
	);
};

export default Review;
