import Image from 'next/image';

interface Props {
	image: string;
	title: string;
}

const PageHeader = ({ image, title }: Props) => {
	return (
		<section className="relative top-0 left-0 h-[500px] px-4 lg:px-0 flex justify-center items-center">
			<Image className="w-full" src={image} alt="page-background-image" fill />
			<h1 className="relative text-6xl text-[#eee] uppercase font-bold">
				{title}
			</h1>
		</section>
	);
};

export default PageHeader;
