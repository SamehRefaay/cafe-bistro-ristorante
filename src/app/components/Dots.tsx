import React from 'react';

const Dots = () => {
	return (
		<div className=''>
			<div className='sm:hidden '>
				<DivDots length={20} />
			</div>
			<div className='hidden sm:flex md:hidden'>
				<DivDots length={45} />
			</div>
			<div className='hidden md:flex lg:hidden'>
				<DivDots length={22} />
			</div>
			<div className='hidden lg:flex xl:hidden'>
				<DivDots length={35} />
			</div>
			<div className='hidden xl:flex'>
				<DivDots length={45} />
			</div>
		</div>
	);
};

export default Dots;

const DivDots = ({ length }: { length: number }) => (
	<div className='w-full flex items-center justify-between'>
		{Array.from({ length: length })
			.map((item) => '. ')
			.map((item) => item)}
	</div>
);
