import React from 'react';
import { IoList, IoNotifications, IoPencil, IoSettings, IoShare } from 'react-icons/io5';

const RightPannel = () => {
	return (
		<div className='w-20 h-screen py-8 px-4 bg-white border-l-1'>
			<div className='flex flex-col gap-10 justify-center '>
				<IoList size={20} />
				<IoNotifications size={20} />
				<IoPencil size={20} />
				<IoShare size={20} />
				<IoSettings size={20} />
			</div>
		</div>
	);
};

export default RightPannel;
