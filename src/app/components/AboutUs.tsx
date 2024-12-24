import CustomParagraph from './CustomParagraph';
import Image from 'next/image';
// bg-gray-pattern-1
const AboutUs = () => {
	return (
		<section className="w-full relative py-20 border h-max">
			{/* background */}
			<div className="absolute top-0 left-0 w-full h-full bg-grid-bg-2 opacity-[0.02]"></div>
			<div className="container mx-auto">
				<CustomParagraph
					firstTitle="Italian Restaurant"
					secondTitle="WELCOME"
					image="/our-story-01.jpg.webp"
					text="Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque."
				/>
			</div>
		</section>
	);
};

export default AboutUs;
