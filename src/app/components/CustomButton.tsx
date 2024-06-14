import React from 'react';

interface Props {
	title: string;
	type?: 'submit' | 'reset' | 'button' | undefined;
	className?: string;
	variant: number;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const CustomButton = ({ title, type, className, variant, onClick }: Props) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${className} ${
				variant === 2
					? 'bg-black text-white'
					: 'bg-white text-primary-gray-dark'
			} py-2 px-4 rounded-lg  font-bold uppercase tracking-[5px] transition-all duration-300 hover:bg-primary-red hover:text-white`}
		>
			{title}
		</button>
	);
};

export default CustomButton;
