import { FaTwitter } from 'react-icons/fa';

const FooterTwitter = () => {
	return (
		<div className="flex flex-col gap-5">
			<h3 className="font-poppins font-medium text-lg uppercase">
				LATEST TWITTER
			</h3>
			<div className="flex flex-col gap-10">
				{/* contact us */}

				{/* first twit */}
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-2">
						<FaTwitter color="#999" size={13} />
						<span className="text-sm text-primary-red cursor-pointer">
							@cafeBistroRistorante
						</span>
					</div>
					<p className="text-sm lg:max-w-sm text-[#999]">
						“How&apos;d you like our new dish? We&apos;d love to hear your
						comments.”
					</p>
					<p className="text-xs text-[#666]">21 Jun 2024</p>
				</div>
				{/* first twit */}
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-2">
						<FaTwitter color="#999" size={13} />
						<span className="text-sm text-primary-red cursor-pointer">
							@cafeBistroRistorante
						</span>
					</div>
					<p className="text-sm lg:max-w-sm text-[#999]">
						“How&apos;d you like our new dish? We&apos;d love to hear your
						comments.”
					</p>
					<p className="text-xs text-[#666]">21 Jun 2024</p>
				</div>
			</div>
		</div>
	);
};

export default FooterTwitter;
