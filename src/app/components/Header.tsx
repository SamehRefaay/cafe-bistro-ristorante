'use client';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const links = [
	{
		id: '001',
		title: 'Home',
		url: '/',
	},
	{
		id: '002',
		title: 'Menu',
		url: '/menu',
	},
	{
		id: '003',
		title: 'Reservation',
		url: '/reservation',
	},
	{
		id: '004',
		title: 'Gallery',
		url: '/gallery',
	},
	{
		id: '005',
		title: 'About',
		url: '/about',
	},
	{
		id: '006',
		title: 'Blog',
		url: '/blog',
	},
	{
		id: '007',
		title: 'Contact',
		url: '/contact',
	},
];

const Header = () => {
	const [headerBackground, setHeaderBackground] = useState<boolean>();

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
			className={`lg:sticky relative px-4 top-0 left-0 z-50 w-full border-t-8 border-accent ${
				headerBackground ? 'lg:bg-[#e7e7e7] md:bg-opacity-85' : 'bg-transparent'
			} `}
		>
			{/* bg-transparent */}
			<div className="max-w-7xl h-24 mx-auto flex justify-between items-center">
				{/*///////////////////// desktop nav /////////////*/}

				{/* desktop logo */}
				<div
					className={`hidden lg:block border-[3px] ${
						headerBackground
							? 'border-primary-red text-primary-red'
							: 'border-white text-white'
					}  text-start py-1 px-2 rounded-lg w-max uppercase`}
				>
					<h1 className="text-2xl font-bold">Bistro</h1>
					<p className="-mt-2 text-sm">Restaurant</p>
				</div>
				{/* desktop links */}
				<div className="hidden md:flex gap-6">
					{links.map(link => (
						<Link
							className={`uppercase transition-all duration-300 hover:text-primary-red ${
								headerBackground ? 'text-black' : 'text-white'
							}`}
							key={link.id}
							href={link.url}
						>
							{link.title}
						</Link>
					))}
				</div>
				{/* desktop social */}
				<div className="hidden lg:flex gap-4 items center">
					<span>
						<FaFacebookF
							className={`cursor-pointer transition-colors duration-300 hover:text-primary-red ${
								headerBackground ? 'text-black' : 'text-white'
							}`}
						/>
					</span>
					<span>
						<FaTwitter
							className={`cursor-pointer transition-colors duration-300 hover:text-primary-red ${
								headerBackground ? 'text-black' : 'text-white'
							}`}
						/>
					</span>
				</div>

				{/* desktop menu button */}
				<div
					className={`hidden md:flex gap-5 hover:text-primary-red ${
						headerBackground ? 'text-black' : 'text-white'
					}`}
				>
					<Button as={Link} color="primary" href="/auth/signup" variant="flat">
						Sign Up
					</Button>
					<HiOutlineMenuAlt4 size={25} className="font-thin" />
				</div>

				{/*///////////////////// mobile nav /////////////*/}

				{/* mobile logo */}
				<div
					className="border-white text-white md:hidden border-[3px] 
				  text-start py-1 px-2 rounded-lg w-max uppercase"
				>
					<h1 className="text-lg font-bold">Bistro</h1>
					<p className="-mt-2 text-[10px]">Restaurant</p>
				</div>

				{/*mobile social links */}
				<div className="lg:hidden flex gap-4 ">
					<span>
						<FaFacebookF className="cursor-pointer transition-colors duration-300 hover:text-primary-red text-white" />
					</span>
					<span>
						<FaTwitter className="cursor-pointer transition-colors duration-300 hover:text-primary-red text-white" />
					</span>
				</div>
				{/* mobile menu button */}
				<div
					className="md:hidden hover:text-primary-red text-white
						"
				>
					<HiOutlineMenuAlt4 size={25} className="font-thin" />
				</div>
			</div>
		</div>
	);
};

export default Header;
