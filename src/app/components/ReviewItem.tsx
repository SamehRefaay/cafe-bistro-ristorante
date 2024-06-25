import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';

interface Review {
	id: string;
	user: {
		name: string;
		address: string;
		image: string;
	};
	rating: number;
	review: string;
}

interface Props {
	review: Review;
	animation: boolean;
}
const ReviewItem = ({ review, animation }: Props) => {
	return (
		<div className="w-full p-2 md:p-5 lg:p-10 flex flex-col justify-center items-center gap-10">
			<div
				className={`w-[125px] h-[125px] border-[4px] border-primary-red rounded-full overflow-hidden transition-all ${
					animation
						? 'opacity-100 scale-100 duration-1000'
						: 'opacity-0 scale-0 delay-200 duration-0'
				}  `}
			>
				<Image
					className="object-contain"
					src={review.user.image}
					alt="user image"
					width={125}
					height={125}
				/>
			</div>

			<div
				className={`w-full flex flex-col items-center gap-5 text-center transition-all  ${
					animation
						? 'opacity-100 -translate-y-5 duration-1000 delay-1000'
						: 'opacity-0 translate-y-5 delay-200 duration-0'
				}`}
			>
				<q className="border text-base md:text-lg lg:text-xl font-normal text-[#666] lg:max-w-screen-sm">
					{' '}
					{review.review}
					{'. '}
				</q>

				<div className="flex justify-center items-center gap-1">
					{[...new Array(review?.rating)].map((item: any, index: number) => (
						<FaStar key={index} size={20} className="text-primary-red" />
					))}
				</div>
				<div className="text-sm font-normal text-[#222] uppercase">
					{review.user.name} - {review.user.address}
				</div>
			</div>
		</div>
	);
};

export default ReviewItem;
