import CustomTitle from '@/app/components/CustomTitle';
import ProductForm from '@/app/components/ProductForm';
import { CategoryType } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const getCategories = async () => {
	const res = await fetch('http://localhost:3000/api/categories', {
		cache: 'no-store',
	});

	if (!res.ok) throw new Error('Failed to fetch all categories!');

	return res.json();
};

const NewProduct = async () => {
	const categories: CategoryType[] = await getCategories();

	return (
		<section className="bg-gray-pattern-1 py-24 px-4">
			<div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
				<div className="col-span-1">
					<CustomTitle
						firstTitle="New Plate"
						secondTitle="Add New Item"
						variant={1}
					/>
					{/* Reservation form */}
					<ProductForm categories={categories} />
				</div>
				<div className="col-span-1 border flex justify-center items-center">
					<div className="w-full h-full md:w-[75%] md:h-[75%]  m-auto rounded-lg overflow-hidden">
						<Image
							className="hover:scale-110 transition-all duration-300"
							src="/booking-01.jpg.webp"
							alt="booking image"
							width={600}
							height={600}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewProduct;

/**const fetcher = (...args: Parameters<typeof fetch>) =>
		fetch(...args).then(res => res.json());

	const {
		data,
		error,
		isLoading,
	}: { data: ; error: any; isLoading: boolean } = useSWR(
		'/api/categories',
		fetcher
	);

	if (isLoading) return <div>Loading ...</div>;

	if (error) return notFound(); */
