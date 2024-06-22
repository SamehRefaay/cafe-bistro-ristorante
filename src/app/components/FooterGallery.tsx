import Image from 'next/image';
import { gallery } from '../lib/data';

const FooterGallery = () => {
	const data = gallery;
	return (
		<div className="flex flex-col gap-5">
			<h3 className="font-poppins font-medium text-lg uppercase">Gallery</h3>
			<div className="grid grid-cols-4 gap-3">
				{data.map((item: any) => (
					<div
						key={item.id}
						className="relative cursor-pointer hover:bg-primary-red"
					>
						<Image
							src={item.image}
							alt={item.title}
							width={100}
							height={100}
							className="w-full h-20 object-cover"
						/>
						<div className="absolute top-0 left-0 w-full h-full bg-primary-red opacity-0 hover:opacity-85 transition-all duration-300"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FooterGallery;
