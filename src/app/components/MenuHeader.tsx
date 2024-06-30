import Image from 'next/image';

const MenuHeader = () => {
	return (
		<section className="relative top-0 left-0 h-[500px] px-4 lg:px-0 flex justify-center items-center">
			<Image
				className=" w-full"
				src="/bg-menu.jpg.webp"
				alt="page-background-image"
				fill
			/>
			<h1 className="z-10 text-6xl text-[#eee] uppercase font-bold">
				Bistro Menu
			</h1>
		</section>
	);
};

export default MenuHeader;
