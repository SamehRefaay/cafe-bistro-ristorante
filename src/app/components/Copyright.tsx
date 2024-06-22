import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Copyright = () => {
	return (
		<section className="w-full px-4 py-5 bg-[#111]">
			{/* container */}
			<div className="w-full h-full max-w-7xl mx-auto flex justify-between items-center">
				<div className="flex justify-center items-center gap-5 text-sm text-[#eee]">
					<FaFacebookF className="cursor-pointer transition-colors duration-300 hover:text-primary-red" />
					<FaTwitter className="cursor-pointer transition-colors duration-300 hover:text-primary-red" />
				</div>
				<div className="text-sm text-[#eee]">
					All Rights Reserved &copy;2024
				</div>
			</div>
		</section>
	);
};

export default Copyright;
