// import Reservation from '../components/Reservation';
// import Review from '../components/Review';
// import Slider from '../components/Slider';
// import OurVideo from '../components/OurVideo';
// import Blog from '../components/BLog';
// import CustomParagraph from '../components/CustomParagraph';
// components
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Discover from './components/Discover';
import Features from './components/Features';
import OurMenu from './components/OurMenu';
import Events from './components/Events';
import Reservation from './components/Reservation';
import Review from './components/Review';
import OurVideo from './components/OurVideo';
import Blog from './components/BLog';

export default function Home() {
	return (
		<main className="-mt-[96px] w-full flex flex-col">
			<Hero />
			<AboutUs />
			<Discover />
			<Features />
			<OurMenu />
			<Events />
			<Reservation />
			<Review />
			<OurVideo />
			<Blog />
		</main>
	);
}
