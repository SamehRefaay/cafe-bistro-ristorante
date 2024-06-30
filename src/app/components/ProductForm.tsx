'use client';
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { useRouter } from 'next/navigation';
import { CategoryType } from '@/types/types';

type Props = {
	categories: CategoryType[];
};

type Inputs = {
	title: string;
	desc: string;
	price: number;
	cateSlug: string;
};

type Option = {
	title: string;
	additionalPrice: number;
};

const ProductForm = ({ categories }: Props) => {
	const [inputs, setInputs] = useState<Inputs>({
		title: '',
		desc: '',
		price: 0,
		cateSlug: 'launch',
	});
	const [option, setOption] = useState<Option>({
		title: '',
		additionalPrice: 0,
	});

	const [options, setOptions] = useState<Option[] | undefined>();

	const [file, setFile] = useState<File | null>();

	const router = useRouter();

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setInputs(prev => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setOption(prev => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};
	const handleOptionDelete = (title: string) => {
		const filteredOptions = options?.filter(opt => opt.title !== title);
		setOptions(filteredOptions);
	};

	const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const item = (target.files as FileList)[0];
		setFile(item);
	};

	const upload = async () => {
		const data = new FormData();
		data.append('file', file!);
		data.append('upload_preset', 'restaurant');

		const res = await fetch(
			'https://api.cloudinary.com/v1_1/dzjbesm00/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);

		const resData = await res.json();
		return resData.url;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const url = await upload();
			const res = await fetch('http://localhost:3000/api/products', {
				method: 'POST',
				body: JSON.stringify({
					image: url,
					...inputs,
					options,
				}),
			});

			const data = await res.json();

			if (res.ok) router.push('/menu');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="mt-16">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
				{/* Image */}
				<div className="col-span-3 flex flex-col gap-2">
					<label htmlFor="image" className="text-sm text-[#666]">
						Image
					</label>
					<input
						id="image"
						className="w-full bg-white border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
						type="file"
						name="image"
						onChange={handleChangeImage}
					/>
				</div>
				{/* Title */}
				<div className="col-span-3 flex flex-col gap-2">
					<label htmlFor="title" className="text-sm text-[#666]">
						Title
					</label>
					<input
						id="title"
						className="w-full border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
						type="text"
						name="title"
						placeholder="Title"
						onChange={handleChange}
					/>
				</div>
				{/* Description */}
				<div className="col-span-3 flex flex-col gap-2">
					<label htmlFor="desc" className="text-sm text-[#666]">
						Description
					</label>
					<textarea
						id="desc"
						rows={4}
						className="w-full border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
						name="desc"
						placeholder="Description"
						onChange={handleChange}
					/>
				</div>
				{/* Price */}
				<div className="col-span-3 flex flex-col gap-2">
					<label htmlFor="price" className="text-sm text-[#666]">
						Price
					</label>
					<input
						id="price"
						className="w-full border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
						type="number"
						step={0.01}
						name="price"
						placeholder="Price"
						onChange={handleChange}
					/>
				</div>
				{/*  ////////////////////  Category /////////////////////// */}
				{/* Category */}
				<div className="col-span-3 flex flex-col gap-2">
					<label htmlFor="category" className="text-sm text-[#666]">
						Category
					</label>
					<select
						id="category"
						className="w-full bg-white border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
						name="cateSlug"
						onChange={handleChange}
					>
						{categories.map(category => (
							<option key={category.id} value={category.slug}>
								{category.title}
							</option>
						))}
					</select>
				</div>
				{/*  ////////////////////  Options /////////////////////// */}
				<div className="col-span-3 flex flex-col gap-2">
					<label htmlFor="options" className="text-sm text-[#666]">
						Options
					</label>
					<div className="flex gap-4 md:gap-8">
						<input
							id="title"
							className="w-full border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
							type="text"
							name="title"
							placeholder="Title"
							onChange={handleOptionChange}
						/>
						<input
							id="additionalPrice"
							className="w-full border p-3 rounded-lg focus:outline-primary-red text-[#999] text-sm"
							type="number"
							name="additionalPrice"
							placeholder="Additional Price"
							onChange={handleOptionChange}
						/>
						<div className="w-full h-full">
							<button
								className="w-full h-full rounded-lg bg-black text-white hover:bg-primary-red transition-colors duration-300"
								onClick={() => {
									const existingOption = options?.find(
										opt => opt.title === option.title
									);

									if (!existingOption) {
										setOptions(prev => (prev ? [...prev, option] : [option]));
									}
								}}
							>
								Add Options
							</button>
						</div>
					</div>
					<div className="w-full text-[#777] mt-4 flex flex-wrap gap-3">
						{options?.map(opt => (
							<div
								key={opt?.title}
								className="relative overflow-hidden group flex gap-2 p-2 border-[2px] border-primary-red rounded-lg"
							>
								<span>{opt?.title}</span>
								<span>{opt?.additionalPrice}$</span>
								<button
									className="flex justify-center items-center bg-red-500 text-white font-bold absolute top-0 left-0 w-full h-full -translate-y-full group-hover:translate-y-0 cursor-pointer"
									onClick={() => handleOptionDelete(opt?.title)}
								>
									X
								</button>
							</div>
						))}
					</div>
				</div>
				{/* submit button */}
				<div className="col-span-3 flex flex-col gap-2">
					<CustomButton
						className=""
						type="submit"
						title="Add To Menu"
						variant={2}
					/>
				</div>
			</div>
		</form>
	);
};
export default ProductForm;
