import { news } from '../../lib/data';
// components
import CustomTitle from './CustomTitle';
import FeaturesItem from './FeaturesItem';

const Blog = () => {
	const data = news;

	return (
		<section className='w-full px-4 py-20 bg-white'>
			<div className='container mx-auto'>
				<CustomTitle firstTitle='Latest News' secondTitle='The Blog' variant={1} />
				<div className='mt-10 grid gap-10 grid-cols-1 lg:grid-cols-3 '>
					{data.map((item) => (
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
