import React from 'react';
import FeaturesItem from './FeaturesItem';

const Features = () => {
	const features = [
		{
			id: crypto.randomUUID(),
			title: 'Romantic Restaurant',
			desc: 'Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.',
			image: '/intro-01.jpg.webp',
		},
		{
			id: crypto.randomUUID(),
			title: 'Delicious Food',
			desc: 'Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat',
			image: '/intro-02.jpg.webp',
		},
		{
			id: crypto.randomUUID(),
			title: 'Red Wines you love',
			desc: 'Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
			image: '/intro-03.jpg.webp',
		},
	];
	return (
		<section className="w-full px-4 lg:px-0">
			<div className="max-w-7xl mx-auto py-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
				{features.map(item => (
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
