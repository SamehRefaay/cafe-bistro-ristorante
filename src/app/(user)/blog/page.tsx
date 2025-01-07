import PageHeader from '@/app/components/PageHeader';
import Paging from '@/app/components/Paging';
import PopularPost from '@/app/components/PopularPost';
import Post from '@/app/components/Post';
import { archive, categories, popular, posts } from '@/lib/data';
import { PostType } from '@/types/types';
import Link from 'next/link';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const BlogPage = () => {
	const data: PostType[] = posts;
	const categoriesData = categories;
	const mostPopular = popular;
	const archiveData = archive;
	return (
		<main className='relative w-full -mt-[96px]'>
			<PageHeader image='/bg-title-page-01.jpg.webp' title='Blog' />
			<div className='w-full border-b'>
				<div className='container mx-auto '>
					<div className='py-5 flex gap-4 font-poppins'>
						<Link className='text-[#222] uppercase' href='/'>
							Home
						</Link>
						<span className='text-[#999]'>{'/'}</span>
						<Link className='text-[#999] uppercase' href='/blog'>
							Blog
						</Link>
					</div>
				</div>
			</div>
			<div className='container mx-auto'>
				<div className=' grid grid-cols-1 md:grid-cols-3'>
					<div className='md:col-span-2 md:pr-5 lg:pr-10 py-20 flex flex-col gap-20'>
						{data.map((post) => (
							<Post key={post.slug} post={post} />
						))}
						{/* paging */}
						<Paging pages={2} />
					</div>
					<div className='md:border-s md:pl-5 lg:pl-10 py-20 flex flex-col gap-20 '>
						{/* search form */}
						<form className=''>
							<div className='w-full relative'>
								<input
									className='w-full outline-none p-4 border-[3px] focus:border-primary-red'
									type='text'
									placeholder='Search'
								/>
								<div className='absolute bg-[#333] top-0 right-0 w-14 h-full flex justify-center items-center'>
									<FaSearch size={25} color='white' />
								</div>
							</div>
						</form>
						{/*  Categories */}
						<div>
							<h2 className='text-2xl font-medium font-poppins text-[#333] uppercase tracking-[5px]'>
								Categories
							</h2>
							<div className='mt-10 flex flex-col w-full text-sm text-[#444] leading-5 tracking-wider uppercase'>
								{categories.map((item) => (
									<Link key={item?.id} href={item?.url} className='w-full  border-b py-2'>
										{item?.name}
									</Link>
								))}
							</div>
						</div>
						{/* Most Popular */}
						<div>
							<h2 className='text-2xl font-medium font-poppins text-[#333] uppercase tracking-[5px]'>
								MOST POPULAR
							</h2>
							<div className='mt-10 flex flex-col gap-5'>
								{mostPopular.map((post) => (
									<PopularPost key={post.id} post={post} />
								))}
							</div>
						</div>
						{/* Archive */}
						<div>
							<h2 className='text-2xl font-medium font-poppins text-[#333] uppercase tracking-[5px]'>
								Archive
							</h2>
							<div className='mt-10 flex flex-col gap-5'>
								{archiveData.map((item) => (
									<div key={item.id} className='flex justify-between items-center'>
										<Link href={'#'}>
											<span className='text-[14px]'>{item?.date}</span>
										</Link>
										<span className='text-sm text-[#777]'>({item?.postsCount})</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default BlogPage;
