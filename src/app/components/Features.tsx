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
		<section className="w-full py-20">
			<div className="container mx-auto">
				<div className="w-full grid gap-10 grid-cols-1 lg:grid-cols-3 ">
					{features.map(item => (
						<div key={item.id} className="w-full h-max">
							<FeaturesItem
								item={item}
								link={{ title: 'Learn More', url: `/features/${item.id}` }}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
