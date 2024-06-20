import React from 'react';
import { reviews } from '../lib/data';
import SimpleSlider from './SimpleSlider';
import CustomTitle from './CustomTitle';

const Review = () => {
	const data = reviews;

	return (
		<section className="py-20 w-full flex flex-col gap-10">
			<div>
				<CustomTitle
					firstTitle="Customers Say"
					secondTitle="Review"
					variant={1}
				/>
			</div>
			<div>
				<SimpleSlider items={reviews} />
			</div>
		</section>
	);
};

export default Review;
