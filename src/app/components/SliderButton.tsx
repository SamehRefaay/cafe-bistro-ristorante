import React from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const SliderButton = ({ type }: { type: 'prev' | 'next' }) => {
	return (
		<div
			className={`absolute top-1/2 ${
				type === 'prev' ? 'right-0' : 'left-0'
			}  -translate-y-1/2 w-14 h-14 rounded-full bg-black bg-opacity-90 text-white flex justify-center items-center transition-all duration-300 hover:bg-primary-red next-slick-arrow`}
		>
			<svg
				fill="#ffffff"
				height="20px"
				width="20px"
				version="1.1"
				id="XMLID_287_"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 24 24"
				xmlSpace="preserve"
				stroke="#ffffff"
				className={type === 'prev' ? 'rotate-180' : ''}
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g>
				<g id="SVGRepo_iconCarrier">
					{' '}
					<g id="next">
						{' '}
						<g>
							{' '}
							<polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon>{' '}
						</g>{' '}
					</g>{' '}
				</g>
			</svg>
		</div>
	);
};

export default SliderButton;
