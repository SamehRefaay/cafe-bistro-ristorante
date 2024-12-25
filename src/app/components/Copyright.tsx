import SocialLinks from './SocialLinks';

const Copyright = () => {
	return (
		<section className="w-full px-4 py-5 bg-[#111]">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<SocialLinks background={false} />
					<div className="text-sm text-[#eee]">
						All Rights Reserved &copy;2024
					</div>
				</div>
			</div>
		</section>
	);
};

export default Copyright;
