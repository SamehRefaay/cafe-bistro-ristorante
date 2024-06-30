import React from 'react';
import { reviews } from '../../lib/data';
import SimpleSlider from './SimpleSlider';
import CustomTitle from './CustomTitle';

const Review = () => {
	const data = reviews;

	return (
		<section className="py-20 w-full px-4 lg:px-0 flex flex-col gap-10">
			<div className="w-full max-w-7xl mx-auto">
				<div className="w-full">
					<CustomTitle
						firstTitle="Customers Say"
						secondTitle="Review"
						variant={1}
					/>
				</div>
				<div className="w-full">
					<SimpleSlider items={reviews} />
				</div>
			</div>
		</section>
	);
};

export default Review;
