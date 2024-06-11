'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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

const Navbar = () => {
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
			className={`sticky top-0 left-0 z-10 w-full border-t-8 border-primary-red ${
				headerBackground ? 'bg-[#e7e7e7] bg-opacity-85' : 'bg-transparent'
			} `}
		>
			{/* bg-transparent */}
			<div className="max-w-7xl h-24 mx-auto flex justify-between items-center">
				{/* logo */}
				<div
					className={`border-[3px] ${
						headerBackground
							? 'border-primary-red text-primary-red'
							: 'border-white text-white'
					}  text-start py-1 px-2 rounded-lg w-max uppercase`}
				>
					<h1 className="text-2xl font-bold">Bistro</h1>
					<p className="-mt-2 text-sm">Restaurant</p>
				</div>
				{/* desktop links */}
				<div className="flex gap-8">
					{links.map(link => (
						<Link
							className={`uppercase hover:text-primary-red ${
								headerBackground ? 'text-black' : 'text-white'
							}`}
							key={link.id}
							href={link.url}
						>
							{link.title}
						</Link>
					))}
				</div>
				{/*desktop menu button */}
				<div
					className={`hover:text-primary-red ${
						headerBackground ? 'text-black' : 'text-white'
					}`}
				>
					<HiOutlineMenuAlt4 size={25} className="font-thin" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
