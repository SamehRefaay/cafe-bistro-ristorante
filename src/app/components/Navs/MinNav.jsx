'use client';
import { Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

const MinNav = () => {
	const pathname = usePathname()
		.replace('/dashboard', 'Home')
		.replace('addProduct', 'Add Product')
		.toUpperCase()
		.split('/')
		.slice(0, 3);
	return (
		<div className='w-full py-5'>
			<div className='container'>
				<div className='flex gap-2'>
					<Home />
					{pathname.map((item, index) => (
						<p key={index} className='flex gap-2'>
							<span>{item}</span>
							{index !== pathname.length - 1 && <span>/</span>}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default MinNav;
