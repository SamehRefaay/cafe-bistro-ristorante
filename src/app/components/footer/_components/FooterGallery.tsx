import Image from 'next/image';

export const galleryPhotos = [
	{
		id: crypto.randomUUID,
		title: 'gallery-01',
		image: '/gallery/photo-gallery-01.webp',
	},
	{
		id: crypto.randomUUID,
		title: 'gallery-02',
		image: '/gallery/photo-gallery-02.webp',
	},
	{
		id: crypto.randomUUID,
		title: 'gallery-03',
		image: '/gallery/photo-gallery-03.webp',
	},
	{
		id: crypto.randomUUID,
		title: 'gallery-04',
		image: '/gallery/photo-gallery-04.webp',
	},
	{
		id: crypto.randomUUID,
		title: 'gallery-05',
		image: '/gallery/photo-gallery-05.webp',
	},
	{
		id: crypto.randomUUID,
		title: 'gallery-06',
		image: '/gallery/photo-gallery-06.webp',
	},
	{
		id: crypto.randomUUID,
		title: 'gallery-07',
		image: '/gallery/photo-gallery-07.webp',
	},
	{
		id: crypto.randomUUID,
		title: 'gallery-08',
		image: '/gallery/photo-gallery-08.webp',
	},
	{
		id: crypto.randomUUID,
		title: 'gallery-09',
		image: '/gallery/photo-gallery-09.webp',
	},
	{
		id: crypto.randomUUID,
		title: 'gallery-10',
		image: '/gallery/photo-gallery-10.webp',
	},
	{
		id: crypto.randomUUID,
		title: 'gallery-11',
		image: '/gallery/photo-gallery-11.webp',
	},
	{
		id: crypto.randomUUID,
		title: 'gallery-12',
		image: '/gallery/photo-gallery-12.webp',
	},
];

const FooterGallery = () => {
	return (
		<div className="flex flex-col gap-5">
			<h3 className="font-poppins font-medium text-lg uppercase">Gallery</h3>
			<div className="grid grid-cols-4 gap-3">
				{galleryPhotos.map((item: any) => (
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
