import { Routes } from '@/constants/enums';
import Link from 'next/link';
import { ReactNode } from 'react';

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
];

const Navbar = ({ background = false }: { background: boolean }) => {
	return (
		<div className="hidden lg:flex items-center gap-6">
			{links.map(link =>			
					<Link
						className={`uppercase transition-all duration-300 hover:text-accent-hover ${
							background ? 'text-black' : 'text-white font-medium'
						}`}
						key={link.id}
						href={`/${link.href}`}
					>
						{link.title}
					</Link>		
					
					
			)}
		</div>
	);
};

export default Navbar;
