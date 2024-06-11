import OurStory from './components/OurStory';
import Slider from './components/Slider';

const slides = [
	{ id: '001', src: '/slide1-01.jpg.webp', alt: 'slide-1' },
	{ id: '002', src: '/master-slides-01.jpg.webp', alt: 'slide-2' },
	{ id: '003', src: '/master-slides-02.jpg.webp', alt: 'slide-3' },
];

export default function Home() {
	return (
		<main className="w-full flex flex-col">
			{/* Slider */}
			<Slider images={slides} />
			<OurStory />
			<div className="w-full h-[400pd]"> new</div>
		</main>
	);
}
