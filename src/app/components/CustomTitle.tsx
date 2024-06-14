import React from 'react';

const CustomTitle = ({
	firstTitle,
	secondTitle,
	variant,
}: {
	firstTitle: string;
	secondTitle: string;
	variant: number;
}) => {
	return (
		<div className="flex flex-col justify-center items-center gap-8">
			<h3 className="font-courgette text-xl md:text-2xl lg:text-3xl leading-5 text-primary-red ">
				{firstTitle}
			</h3>
			<h2
				className={`${
					variant === 2 ? 'text-white' : 'text-black'
				} font-poppins font-bold text-3xl md:text-4xl  lg:text-5xl leading-5 tracking-[10px] uppercase`}
			>
				{secondTitle}
			</h2>
		</div>
	);
};

export default CustomTitle;
