import { Routes } from '@/constants/enums';
import Link from 'next/link';
import React from 'react';

const links = [
	{
		id: crypto.randomUUID(),
		title: 'Menu',
		href: Routes.MENU,
	},
	{
		id: crypto.randomUUID(),
		title: 'Reservation',
		href: Routes.RESERVATION,
	},
	{
		id: crypto.randomUUID(),
		title: 'Gallery',
		href: Routes.GALLERY,
	},
	{
		id: crypto.randomUUID(),
		title: 'About',
		href: Routes.ABOUT,
	},
	{
		id: crypto.randomUUID(),
		title: 'Blog',
		href: Routes.BLOG,
	},
	{
		id: crypto.randomUUID(),
		title: 'Contact',
		href: Routes.CONTACT,
	},
	{
		id: crypto.randomUUID(),
		title: 'Sign up',
		href: Routes.AUTH,
	},
];

const Navbar = ({ background = false }: { background: boolean }) => {
	return (
		<div className="hidden lg:flex items-center gap-6">
			{links.map(link =>
				link.href !== Routes.AUTH ? (
					<Link
						className={`uppercase transition-all duration-300 hover:text-accent-hover ${
							background ? 'text-black' : 'text-white font-medium'
						}`}
						key={link.id}
						href={`/${link.href}`}
					>
						{link.title}
					</Link>
				) : (
					<button className="btn btn-accent ml-[120px]" key={link.id}>
						Sign Up
					</button>
				)
			)}
		</div>
	);
};

export default Navbar;
