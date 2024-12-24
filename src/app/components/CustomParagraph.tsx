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
		<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
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
			<div className={`border ${imageFirst ? 'order-1' : 'order-2'}`}>
				<div className="h-[350px] w-[350px] relative overflow-hidden rounded-lg">
					<Image
						className="object-cover transition-transform duration-1000 hover:scale-125 "
						src={image}
						alt="our story image"
						fill
					/>
				</div>
			</div>
		</div>
	);
};

export default CustomParagraph;
