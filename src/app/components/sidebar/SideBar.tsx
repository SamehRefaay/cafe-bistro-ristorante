'use client';
import React, { useState } from 'react';
// components
import Logo from '@/app/components/Logo';
import SideMenu from './SideMenu';

const SideBar = () => {
	return (
		<aside className="border w-[250px] h-full bg-accent flex flex-col gap-10">
			<div className="w-full h-[100px] flex justify-center items-center">
				<Logo background={false} />
			</div>
			<div>
				<SideMenu />
			</div>
		</aside>
	);
};

export default SideBar;
