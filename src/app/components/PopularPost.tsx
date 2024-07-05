import { PostType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
	post: {
		id: string;
		datetime: string;
		image: string;
		title: string;
		slug: string;
	};
}

const PopularPost = ({ post }: Props) => {
	return (
		<div className="flex gap-5">
			<Link href={`/blog/post?.slug`}>
				<Image
					className="w-[100px] h-[70px] object-cover rounded-lg"
					src={post?.image}
					alt="post image"
					width={200}
					height={200}
				/>
			</Link>
			<div className="flex flex-col justify-between">
				<Link href={`/blog/post?.slug`}>
					<h6 className="text-[14px]">{post?.title}</h6>
				</Link>
				<p className="text-[#666] text-sm">{post?.datetime}</p>
			</div>
		</div>
	);
};

export default PopularPost;
