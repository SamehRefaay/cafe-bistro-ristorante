'use client';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AddProductFormSchema } from '@/lib/zodSchema';
import { Prisma, ProductCategory } from '@prisma/client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { uploadProductImage } from '@/lib/upload';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { editProduct, saveProduct } from '@/lib/actions/product';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileInput from '@/app/components/forms/FileUpload';
import { Routes } from '@/constants/enums';
import { revalidatePath } from 'next/cache';
import { Loader2 } from 'lucide-react';
import { FaInfo } from 'react-icons/fa6';
import Image from 'next/image';

interface AddNewProductFormProps {
	categories: ProductCategory[];
	product?: Prisma.ProductGetPayload<{
		include: {
			category: true;
		};
	}>;
	isEdit?: boolean;
}

export type FormValues = z.infer<typeof AddProductFormSchema>;

const AddNewProductForm = ({ isEdit = false, ...props }: AddNewProductFormProps) => {
	const [productImage, setProductImage] = useState<File | null>(null);
	const [showProductNameInfo, setShowProductNameInfo] = useState(false);
	const [showProductPriceInfo, setShowProductPriceInfo] = useState(false);
	const [showProductImageInfo, setShowProductImageInfo] = useState(false);
	const [showProductCategoryInfo, setShowProductCategoryInfo] = useState(false);
	const [showProductDescriptionInfo, setShowProductDescriptionInfo] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const form = useForm<FormValues>({
		defaultValues: {
			name: props.product?.name ?? undefined,
			description: props.product?.description ?? undefined,
			price: props.product?.price.toString() ?? undefined,
			categoryId: props.product?.categoryId.toString() ?? undefined,
		},
		resolver: zodResolver(AddProductFormSchema),
	});

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		try {
			const url = productImage ? await uploadProductImage(productImage) : props.product?.image;
			if (isEdit && props.product) {
				setLoading(true);
				await editProduct(props.product?.id, data, url ?? '');
				setLoading(false);
				toast.success('Product updated successfully!');
				revalidatePath(`/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCT_LIST}`);
			} else {
				setLoading(true);
				await saveProduct(data, url ?? '');
				setLoading(false);
				toast.success('Product added successfully!');
				revalidatePath(`/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCT_LIST}`);
			}
		} catch (error) {
			console.error({ 'some thing went wrong': error });
		} finally {
			router.push(`/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCT_LIST}`);
		}
	};

	return (
		<div className='grid gap-20 grid-cols-1 lg:grid-cols-2 place-items-center '>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit, (errors) => console.log(errors))}
					className='w-full grid grid-cols-2 gap-4'
				>
					{/* Product Name */}
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem className='col-span-2'>
								<div className='flex gap-2 items-center'>
									<FormLabel className='text-[17px]'>Product Name</FormLabel>
									<div
										onClick={() => setShowProductNameInfo((prev) => !prev)}
										className='w-[16px] h-[16px] flex justify-center items-center cursor-pointer bg-secondary/80 rounded-full text-white'
									>
										<FaInfo size={10} />
									</div>
								</div>
								<FormControl>
									<Input placeholder='Pizza' {...field} />
								</FormControl>
								{showProductNameInfo && <FormDescription>This is the product name.</FormDescription>}
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* Product Category */}
					<FormField
						control={form.control}
						name='categoryId'
						render={({ field }) => (
							<FormItem className='col-span-1'>
								<div className='flex gap-2 items-center'>
									<FormLabel className='text-[17px]'>Select Category</FormLabel>
									<div
										onClick={() => setShowProductCategoryInfo((prev) => !prev)}
										className='w-[16px] h-[16px] flex justify-center items-center cursor-pointer bg-secondary/80 rounded-full text-white'
									>
										<FaInfo size={10} />
									</div>
								</div>
								<FormControl>
									<Select value={String(field.value)} onValueChange={field.onChange}>
										<SelectTrigger className=''>
											<SelectValue
												className='capitalize'
												placeholder={props.categories[0].name}
											/>
										</SelectTrigger>
										<SelectContent>
											{props.categories.map((category) => (
												<SelectItem
													key={category.id}
													className='capitalize'
													value={String(category.id)}
												>
													{category.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								{showProductCategoryInfo && (
									<FormDescription>
										Select your product category for example &quot;Launch&quot; or
										&quot;Dinner&quot; ext.
									</FormDescription>
								)}
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* Product Price */}
					<FormField
						control={form.control}
						name='price'
						render={({ field }) => (
							<FormItem className='col-span-1'>
								<div className='flex gap-2 items-center'>
									<FormLabel className='text-[17px]'>Price</FormLabel>
									<div
										onClick={() => setShowProductPriceInfo((prev) => !prev)}
										className='w-[16px] h-[16px] flex justify-center items-center cursor-pointer bg-secondary/80 rounded-full text-white'
									>
										<FaInfo size={10} />
									</div>
								</div>
								<FormControl>
									<Input placeholder='$0' {...field} />
								</FormControl>
								{showProductPriceInfo && <FormDescription>This is the product price.</FormDescription>}
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* Product Description */}
					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem className='col-span-2'>
								<div className='flex gap-2 items-center'>
									<FormLabel className='text-[17px]'>Description</FormLabel>
									<div
										onClick={() => setShowProductDescriptionInfo((prev) => !prev)}
										className='w-[16px] h-[16px] flex justify-center items-center cursor-pointer bg-secondary/80 rounded-full text-white'
									>
										<FaInfo size={10} />
									</div>
								</div>
								<FormControl>
									<Textarea rows={4} placeholder='Message' {...field} />
								</FormControl>
								{showProductDescriptionInfo && (
									<FormDescription>This is the product description.</FormDescription>
								)}
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* Product Image */}
					<FormField
						// control={form.control}
						name='image'
						render={({ field }) => (
							<FormItem className='col-span-2'>
								<div className='flex gap-2 items-center'>
									<FormLabel className='text-[17px]'>Product Image</FormLabel>
									<div
										onClick={() => setShowProductImageInfo((prev) => !prev)}
										className='w-[16px] h-[16px] flex justify-center items-center cursor-pointer bg-secondary/80 rounded-full text-white'
									>
										<FaInfo size={10} />
									</div>
								</div>
								<FormControl>
									<FileInput
										type='file'
										onSelect={(e: any) => {
											setProductImage(e.target.files?.[0] || null);
										}}
									/>
								</FormControl>
								{showProductImageInfo && <FormDescription>This is the product image.</FormDescription>}
								<FormMessage />
							</FormItem>
						)}
					/>

					{loading ? (
						<Button disabled>
							<Loader2 className='animate-spin' />
							Please wait
						</Button>
					) : (
						<Button type='submit' className='h-full py-3 col-span-2'>
							{isEdit ? 'Update' : 'Save'}
						</Button>
					)}
				</form>
			</Form>
			<div className='relative w-full h-[400px] group rounded-xl overflow-hidden'>
				<Image
					src={
						productImage
							? URL.createObjectURL(productImage) //load image when user browse new iamge to upload
							: props.product?.image //load image if edit
							? props.product.image //load image if add and user did not select image to upload yet.
							: '/menu/our-menu-01.webp'
					}
					alt='product image'
					className='group-hover:scale-110 duration-300 transition-transform'
					fill
				/>
			</div>
		</div>
	);
};
export default AddNewProductForm;
