import Image from 'next/image';
import React from 'react';
import { BsStar } from 'react-icons/bs';

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

const ReviewItem = ({
	className,
	review,
}: {
	className: string;
	review: Review;
}) => {
	return (
		<div
			className={`${className} border flex flex-col justify-center items-center gap-10`}
		>
			<div className="w-[125px] h-[125px] border-[4px] border-primary-red rounded-full overflow-hidden">
				<Image
					className="object-contain"
					src={review.user.image}
					alt="user image"
					width={125}
					height={125}
				/>
			</div>
			<p>{review.review}</p>

			<div className="flex justify-center items-center gap-1">
				{[...new Array(review?.rating)].map((item: any) => (
					<BsStar key={item} size={16} className="text-primary-red" />
				))}
			</div>
			<div>
				{review.user.name} - {review.user.address}
			</div>
		</div>
	);
};

export default ReviewItem;
