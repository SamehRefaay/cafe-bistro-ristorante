import Image from 'next/image';
import CustomLink from './CustomLink';
import CustomTitle from './CustomTitle';

const OurStory = () => {
	return (
		<section className="-mt-[96px] py-[100px] px-4 lg:px-0 h-max bg-primary-gray">
			<div className="max-w-7xl mx-auto grid gap-20 grid-cols-1 md:grid-cols-2">
				<div className="w-full p-8 lg:max-w-[600px] text-center">
					<CustomTitle
						firstTitle="Italian Restaurant"
						secondTitle="Welcome"
						variant={1}
					/>
					<p className="mt-10 text-gray-600 text-sm leading-7 ">
						Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
						fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
						facilisis ligula sem id neque.
					</p>
					<CustomLink title="our story" href="/about" alignment="center" />
				</div>
				<div className="w-full">
					<div className="max-w-[400px] mx-auto overflow-hidden rounded-lg">
						<Image
							className="transition-transform duration-1000 hover:scale-125 "
							src={'/our-story-01.jpg.webp'}
							alt="our story image"
							width={400}
							height={450}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurStory;
