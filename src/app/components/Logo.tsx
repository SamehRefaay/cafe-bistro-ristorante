import { Routes } from '@/constants/enums';
import Link from 'next/link';

const Logo = ({ background = false }: { background: boolean }) => {
	return (
		<Link
			href={Routes.ROOT}
			className={`border-[3px] ${
				background ? 'border-accent text-accent' : 'border-white text-white'
			}  text-start py-1 px-2 rounded-lg w-max uppercase`}
		>
			<h1 className="text-lg lg:text-2xl font-semibold lg:font-bold">Bistro</h1>
			<p className="-mt-2 text-[10px] lg:text-sm">Restaurant</p>
		</Link>
	);
};

export default Logo;
