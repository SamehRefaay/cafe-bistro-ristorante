import React from 'react';
import CustomTitle from './CustomTitle';
import FeaturesItem from './FeaturesItem';
import { news } from '../../lib/data';

const Blog = () => {
	const data = news;

	return (
		<section className="w-full px-4 py-20 bg-white">
			<div className="max-w-7xl mx-auto">
				<CustomTitle
					firstTitle="Latest News"
					secondTitle="The Blog"
					variant={1}
				/>
				<div className="mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
					{data.map(item => (
						<FeaturesItem
							key={item.id}
							item={item}
							link={{ title: 'Continue Reading', url: `/news/${item.id}` }}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
