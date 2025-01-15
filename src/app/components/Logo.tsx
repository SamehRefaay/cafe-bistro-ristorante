import { Routes } from '@/constants/enums';
import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ background = false }: { background: boolean }) => {
	return (
		<Link className='w-full h-full' href={Routes.ROOT}>
			<div className={`w-full h-full `}>
				{background ? (
					<Image src='/logo/logo-accent.png' alt='logo' className='object-cover' width={200} height={200} />
				) : (
					<Image src='/logo/logo-white.png' alt='logo' className='object-cover' width={200} height={200} />
				)}
			</div>
		</Link>
	);
};

export default Logo;
