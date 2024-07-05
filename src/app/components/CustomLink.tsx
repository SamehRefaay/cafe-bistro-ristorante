import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

interface Props {
	title: string;
	href: string;
	alignment: string;
}
const CustomLink = ({ title, href, alignment }: Props) => {
	return (
		<Link
			href={href}
			className={`flex gap-2 items-center ${
				alignment === 'left'
					? 'justify-left'
					: alignment === 'center'
					? 'justify-center'
					: 'justify-end'
			} text-gray-700 text-sm uppercase font-medium transition-colors duration-300 hover:text-primary-red`}
		>
			{title} <FaArrowRightLong size={12} />
		</Link>
	);
};

export default CustomLink;
