import OurStory from '../components/OurStory';
import Discover from '../components/Discover';
import Features from '../components/Features';
import OurMenu from '../components/OurMenu';
import Events from '../components/Events';
import Reservation from '../components/Reservation';
import Review from '../components/Review';
import Slider from '../components/Slider';
import OurVideo from '../components/OurVideo';
import Blog from '../components/BLog';

export default function Home() {
	const slides = [
		{ id: '001', src: '/slide1-01.jpg.webp', alt: 'slide-1' },
		{ id: '002', src: '/master-slides-01.jpg.webp', alt: 'slide-2' },
		{ id: '003', src: '/master-slides-02.jpg.webp', alt: 'slide-3' },
	];

	return (
		<main className="w-full flex flex-col">
			<Slider images={slides} />
			<OurStory />
			<Discover />
			<Features />
			<OurMenu />
			{/* <Events /> */}
			<Reservation />
			<Review />
			<OurVideo />
			<Blog />
		</main>
	);
}
