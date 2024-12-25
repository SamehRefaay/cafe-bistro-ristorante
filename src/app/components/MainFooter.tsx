import FooterContactUs from './FooterContactUs';
import FooterGallery from './FooterGallery';
import FooterTwitter from './FooterTwitter';

const MainFooter = () => {
	return (
		<section className="w-full py-24 bg-[#222] text-[#eee]">
			<div className="container mx-auto">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{/* first column */}
					<FooterContactUs />
					{/* second column */}
					<FooterTwitter />
					{/* third column */}
					<FooterGallery />
				</div>
			</div>
		</section>
	);
};

export default MainFooter;
