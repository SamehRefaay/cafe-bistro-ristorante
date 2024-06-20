'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderButton from './SliderButton';
import ReviewItem from './ReviewItem';

export default function SimpleSlider({ items }: { items: any[] }) {
	const [animation, setAnimation] = useState(true);

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: (
			<div>
				<SliderButton type="prev" />
			</div>
		),
		nextArrow: (
			<div>
				<SliderButton type="next" />,
			</div>
		),

		beforeChange: () => setAnimation(false),
		afterChange: () => setAnimation(true),
	};
	return (
		<div className="max-w-7xl mx-auto">
			<Slider {...settings}>
				{items.map(item => (
					<ReviewItem key={item.id} review={item} animation={animation} />
				))}
			</Slider>
		</div>
	);
}
