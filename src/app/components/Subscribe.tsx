import React from 'react';
import CustomButton from './CustomButton';
import { IoMdMail } from 'react-icons/io';

const Subscribe = () => {
	return (
		<section className="px-4 w-full h-[300px] relative bg-gray-pattern-1">
			<div className="absolute top-0 left-0 w-full h-full bg-grid-bg-2 opacity-[0.02]"></div>

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
		</section>
	);
};

export default Subscribe;
