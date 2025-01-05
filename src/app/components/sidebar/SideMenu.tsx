'use client';
import { Routes } from '@/constants/enums';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleRight, FaAnglesDown } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const links = [
	{
		id: crypto.randomUUID(),
		title: 'Dashboard',
		href: Routes.DASHBOARD,
	},
	{
		id: crypto.randomUUID(),
		title: 'Product',
		href: '',
		subMenuItems: [
			{
				id: crypto.randomUUID(),
				title: 'All Products',
				href: `/${Routes.DASHBOARD}/${Routes.ALLPRODUCTS}`,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add Product',
				href: `/${Routes.DASHBOARD}/${Routes.ADDPRODUCT}`,
			},
			{
				id: crypto.randomUUID(),
				title: 'Edit Product',
				href: `/${Routes.DASHBOARD}/${Routes.EDITPRODUCT}`,
			},
		],
	},
	{
		id: crypto.randomUUID(),
		title: 'Users',
		href: '',
		subMenuItems: [
			{
				id: crypto.randomUUID(),
				title: 'User Profile',
				href: `/${Routes.DASHBOARD}/${Routes.EDITPRODUCT}`,
			},
			{
				id: crypto.randomUUID(),
				title: 'Add User',
				href: `/${Routes.DASHBOARD}/${Routes.ALLPRODUCTS}`,
			},
			{
				id: crypto.randomUUID(),
				title: 'User List',
				href: `/${Routes.DASHBOARD}/${Routes.ADDPRODUCT}`,
			},
		],
	},
];

const SideMenu = () => {
	const [showMenuItemOptions, setShowMenuItemOptions] = useState(false);

	const toggleMenuItem = () => {
		setShowMenuItemOptions(prev => !prev);
	};
	return (
		<ul className="flex flex-col items-center w-full">
			{links.map(item => (
				// !item.sublink ? (
				// 	<li
				// 		key={item.id}
				// 		className="w-full flex flex-col py-4 px-8 border-b-1 border-gray-400 cursor-pointer hover:bg-accent-hover"
				// 	>
				// 		<Link href={item.href}>{item.title}</Link>
				// 	</li>
				// ) : (
				// 	<li
				// 		key={item.id}
				// 		className="w-full flex flex-col gap-5 py-4 px-8 border-b-1 border-gray-400 cursor-pointer hover:bg-accent-hover"
				// 	>
				// 		<div
				// 			onClick={toggleMenuItem}
				// 			className="w-full flex gap-1 items-center text-start "
				// 		>
				// 			<span className="font-semibold">{item.title}</span>
				// 			<motion.span>
				// 				<FaAngleRight />
				// 			</motion.span>
				// 		</div>
				// 		<div>
				// 			{showMenuItemOptions && item.sublink && (
				// 				<ul className="w-full text-center">
				// 					{item.sublink.map(subItem => (
				// 						<li key={subItem.id} className="py-2 px-2 border-b">
				// 							<Link href={subItem.href}>{subItem.title}</Link>
				// 						</li>
				// 					))}
				// 				</ul>
				// 			)}
				// 		</div>
				// 	</li>
				// )
				<MenuItem key={item.id} item={item} />
			))}
		</ul>
	);
};

export default SideMenu;

const MenuItem = ({ item }: { item: any }) => {
	const pathname = usePathname();
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const toggleSubMenu = () => {
		setSubMenuOpen(prev => !prev);
	};

	return (
		<div className="">
			{item.subMenuItems ? (
				<>
					<button
						onClick={toggleSubMenu}
						className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
							pathname.includes(item.href) ? 'bg-zinc-100' : ''
						}`}
					>
						<div className="flex flex-row space-x-4 items-center">
							{item?.icon}
							<span className="font-semibold text-xl  flex">{item.title}</span>
						</div>

						<div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
							{/* <Icon icon="lucide:chevron-down" width="24" height="24" /> */}
							<FaAnglesDown size={24} />
						</div>
					</button>

					{subMenuOpen && (
						<div className="my-2 ml-12 flex flex-col space-y-4">
							{item.subMenuItems?.map((subItem: any) => {
								return (
									<Link
										key={subItem.id}
										href={subItem.href}
										className={`${
											subItem.href === pathname ? 'font-bold' : ''
										}`}
									>
										<span>{subItem.title}</span>
									</Link>
								);
							})}
						</div>
					)}
				</>
			) : (
				<Link
					href={item.href}
					className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
						item.href === pathname ? 'bg-zinc-100' : ''
					}`}
				>
					{item?.icon}
					<span className="font-semibold text-xl flex">{item.title}</span>
				</Link>
			)}
		</div>
	);
};
