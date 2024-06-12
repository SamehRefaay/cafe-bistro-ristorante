import Slider from './components/Slider';
import OurStory from './components/OurStory';
import Discover from './components/Discover';
import Features from './components/Features';
import OurMenu from './components/OurMenu';

export default function Home() {
	const slides = [
		{ id: '001', src: '/slide1-01.jpg.webp', alt: 'slide-1' },
		{ id: '002', src: '/master-slides-01.jpg.webp', alt: 'slide-2' },
		{ id: '003', src: '/master-slides-02.jpg.webp', alt: 'slide-3' },
	];

	return (
		<main className="w-full flex flex-col">
			{/* Slider */}
			<Slider images={slides} />
			<OurStory />
			<Discover />
			<Features />
			<OurMenu />
			<div className="w-full h-[600px]"> new</div>
		</main>
	);
}
