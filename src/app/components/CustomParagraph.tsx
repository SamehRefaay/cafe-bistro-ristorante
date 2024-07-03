import Image from 'next/image';
import CustomLink from './CustomLink';
import CustomTitle from './CustomTitle';

interface Props {
	firstTitle: string;
	secondTitle: string;
	text: string;
	image: string;
	imageFirst?: boolean;
	hasALink?: boolean;
	linkTitle?: string;
	linkUrl?: string;
}

const CustomParagraph = ({
	firstTitle,
	secondTitle,
	text,
	image,
	imageFirst = false,
	hasALink = false,
	linkTitle,
	linkUrl,
}: Props) => {
	return (
		<section className="relative py-20 px-4 lg:px-0 h-max bg-gray-pattern-1">
			<div className="absolute top-0 left-0 w-full h-full bg-grid-bg-2 opacity-[0.02]"></div>
			<div className="relative max-w-7xl mx-auto grid gap-20 grid-cols-1 md:grid-cols-2">
				<div
					className={`${
						imageFirst ? 'order-2' : 'order-1'
					} w-full p-8 lg:max-w-[600px] text-center`}
				>
					<CustomTitle
						firstTitle={firstTitle}
						secondTitle={secondTitle}
						variant={1}
					/>
					<p className="mt-10 text-gray-600 text-sm leading-7 ">{text}</p>
					{hasALink && linkTitle && linkUrl && (
						<CustomLink title={linkTitle} href={linkUrl} alignment="center" />
					)}
				</div>
				<div className={`w-full ${imageFirst ? 'order-1' : 'order-2'}`}>
					<div className="max-w-[400px] mx-auto overflow-hidden rounded-lg">
						<Image
							className="transition-transform duration-1000 hover:scale-125 "
							src={image}
							alt="our story image"
							width={400}
							height={450}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CustomParagraph;
