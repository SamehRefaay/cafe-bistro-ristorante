import { PostType } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import CustomLink from './CustomLink';

const Post = ({ post }: { post: PostType }) => {
	return (
		<div>
			<div className="w-full relative overflow-hidden rounded-lg group">
				<Image
					className="w-full h-auto object-cover rounded-lg group-hover:scale-110 transition-all duration-500"
					src={post?.image}
					alt="post image"
					width={900}
					height={600}
				/>
				<div className="absolute top-2 left-2 md:top-5 md:left-5 w-16 h-20 md:w-20 md:h-24 bg-primary-red rounded-lg flex justify-center items-center">
					<div className="flex flex-col items-center">
						<span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
							{post.dateTime.substring(0, 2)}
						</span>
						<span className="text-white text-xs md:text-sm">
							{post.dateTime.substring(3, 6)} {post.dateTime.substring(11)}
						</span>
					</div>
				</div>
			</div>
			<div className="mt-8 flex flex-col gap-5">
				<h2 className="text-3xl font-medium uppercase">{post?.title}</h2>
				<div className="flex gap-2 text-xs md:text-sm capitalize text-[#ababab]">
					<span>by {post?.auther}</span> |
					<span className="hidden md:inline">{post?.dateTime}</span>
					<span className="md:hidden">
						{post?.dateTime.substring(0, 2)} {post?.dateTime.substring(3, 6)}{' '}
						{post?.dateTime.substring(11)}
					</span>{' '}
					|<span> {[...post?.tags].join(', ')}</span> |
					<span> {post?.comments.length} Comments</span>
				</div>
				<p className="text-[#777]">{post?.body.substring(0, 180)}</p>
				<CustomLink
					href={`/blog/${post?.slug}`}
					title="Continue Reading"
					alignment="left"
				/>
			</div>
		</div>
	);
};

export default Post;
