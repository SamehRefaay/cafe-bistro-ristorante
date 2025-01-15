'use client';
import { ReactNode } from 'react';
import { IoNotifications, IoMail } from 'react-icons/io5';
// components
import { SidebarTrigger } from '@/components/ui/sidebar';
import SearchBar from './SearchBar';

const AdminHeader = ({ children }: { children: ReactNode }) => {
	return (
		<header className='h-20 px-8 bg-white border-b-1'>
			<div className='w-full h-full flex items-center justify-between'>
				<SidebarTrigger className='text-[30px]' />
				<div className='flex items-center gap-5 lg:gap-20'>
					<SearchBar />
					<IoMail size={30} />
					<IoNotifications size={30} />
					{children}
				</div>
			</div>
		</header>
	);
};
export default AdminHeader;
