import React from 'react';
import FeaturesItem from './FeaturesItem';
import { features } from '../lib/data';

const Features = () => {
	const data = features;
	return (
		<section className="w-full">
			<div className="max-w-7xl mx-auto py-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
				{data.map(item => (
					<FeaturesItem
						key={item.id}
						item={item}
						link={{ title: 'Learn More', url: `/features/${item.id}` }}
					/>
				))}
			</div>
		</section>
	);
};

export default Features;
