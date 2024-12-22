import CustomParagraph from './CustomParagraph';
import Image from 'next/image';

const AboutUs = () => {
	return (
		<section>
			<CustomParagraph
				firstTitle="Italian Restaurant"
				secondTitle="WELCOME"
				image="/our-story-01.jpg.webp"
				text="Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque."
			/>
		</section>
	);
};

export default AboutUs;
