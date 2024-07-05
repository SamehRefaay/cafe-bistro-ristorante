import ChefCard from '@/app/components/ChefCard';
import CustomParagraph from '@/app/components/CustomParagraph';
import CustomTitle from '@/app/components/CustomTitle';
import OurVideo from '@/app/components/OurVideo';
import PageHeader from '@/app/components/PageHeader';
import { chefData } from '@/lib/data';

const AboutUsPage = () => {
	const data = chefData;
	return (
		<main className="w-full -mt-[96px]">
			<PageHeader image="/bg-title-page-01.jpg.webp" title="About Us" />
			{/* container */}
			<div className="w-full px-4 lg:px-0 py-20 max-w-7xl mx-auto">
				<CustomTitle
					firstTitle="Italian Restaurant"
					secondTitle="Our Story"
					variant={1}
				/>
				<p className="mt-10 mx-auto text-[#666] text-center lg:max-w-[60%] ">
					Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis
					pretium. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a
					scelerisque in, luctus vel felis. Donec odio diam, dignissim a
					efficitur at, efficitur et est. Pellentesque semper est ut pulvinar
					ullamcorper. Class aptent taciti sociosqu ad litora torquent per
					conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas
					velit ac, fringilla tortor. Sed varius justo sed luctus mattis.
				</p>
			</div>
			<OurVideo bg={'bg-special-cat-01'} />
			<CustomParagraph
				firstTitle="Delicious"
				secondTitle="RECIPES"
				text="Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque."
				image="/our-story-01.jpg.webp"
			/>
			<CustomParagraph
				firstTitle="Romantic"
				secondTitle="RESTAURANT"
				text="Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla quis suscipit nisl."
				image="/our-story-02.jpg.webp"
				imageFirst={true}
			/>
			<div className="w-full h-screen bg-fixed bg-ourVideo-bg"></div>

			{/* meet our chef section */}
			<div className="w-full max-w-7xl mx-auto py-28 px-4 lg:px-0">
				<CustomTitle firstTitle="Meet our" secondTitle="Chef" variant={1} />
				<div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
					{data.map(chef => (
						<ChefCard key={chef?.id} chef={chef} />
					))}
				</div>
			</div>
		</main>
	);
};

export default AboutUsPage;
