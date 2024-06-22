import React from 'react';
import CustomButton from './CustomButton';
import { IoMdMail } from 'react-icons/io';
import Image from 'next/image';

const Subscribe = () => {
	return (
		<section className="px-4 w-full h-[300px] bg-gray-pattern-1">
			<div className="relative w-full h-full flex justify-center items-center">
				<Image
					className="opacity-[0.02] object-cover "
					src="https://img.freepik.com/free-photo/aesthetic-minimal-white-grid-pattern-wallpaper_53876-96916.jpg?w=1280&t=st=1717539507~exp=1717540107~hmac=2aa0cc1b3194c740c0855e8661467e1b8671c4248d49d627db898ec9801ea823"
					alt="image"
					fill
				/>
				<div className="w-full max-w-7xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-wrap justify-center items-center gap-5">
					<h3 className="text-xl text-[#333] leading-5 tracking-widest">
						SPECIALS SIGN UP
					</h3>

					<div className="relative w-full max-w-[400px]">
						<input
							id="email"
							className="w-full border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
							type="email"
							name="email"
							placeholder="Email Address"
						/>
						<IoMdMail className="absolute top-1/2 right-4  -translate-y-1/2 text-[#666]" />
					</div>

					<CustomButton
						className="text-sm"
						type="submit"
						title="Sign Up"
						variant={2}
					/>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
