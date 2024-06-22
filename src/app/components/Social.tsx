import FooterContactUs from './FooterContactUs';
import FooterGallery from './FooterGallery';
import FooterTwitter from './FooterTwitter';

const Social = () => {
	return (
		<section className="px-4 py-20 bg-[#222] text-[#eee]">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{/* first column */}
				<FooterContactUs />
				{/* second column */}
				<FooterTwitter />
				{/* third column */}
				<FooterGallery />
			</div>
		</section>
	);
};

export default Social;
