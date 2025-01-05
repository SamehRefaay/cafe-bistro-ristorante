'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

// components
import Logo from '../Logo';
import Navbar from './Navbar';
import SocialLinks from '../SocialLinks';

interface Props {
	children: ReactNode;
}

const Header = ({ children }: Props) => {
	const [headerBackground, setHeaderBackground] = useState<boolean>(false);

	const listenScrollEvent = (event: any) => {
		if (window.scrollY > 96) {
			return setHeaderBackground(true);
		} else if (window.screenY < 96) {
			return setHeaderBackground(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);

		return () => {
			window.removeEventListener('scroll', listenScrollEvent);
		};
	}, []);

	return (
		<div
			className={`lg:sticky relative top-0 left-0 z-50 w-full border-t-8 border-accent ${
				headerBackground ? ' bg-white lg:bg-opacity-95 shadow-xl' : 'bg-transparent'
			} `}
		>
			<div className='container mx-auto'>
				<div
					className={`w-full flex justify-between items-center transition-all duration-300 ${
						headerBackground ? 'h-[80px]' : 'h-[90px]'
					} `}
				>
					{/* logo */}
					<Logo background={headerBackground} />
					{/* navbar */}
					<Navbar background={headerBackground} />
					{/* signin Pannel & social links */}
					<div className='flex gap-5 items-center'>
						{/* social links */}
						<SocialLinks background={headerBackground} />
						{/*  singin pannel */}
						{children}
					</div>
					{/* menu button*/}
					<div
						className={`lg:hidden flex gap-5 hover:text-primary-red ${
							headerBackground ? 'text-black' : 'text-white'
						}`}
					>
						<HiOutlineMenuAlt4 size={25} className='font-thin' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
