'use client';
import { useState } from 'react';
import { AddProductFormSchema } from '@/lib/zodSchema';
import { Prisma, ProductCategory } from '@prisma/client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { uploadProductImage } from '@/lib/upload';
import { useRouter } from 'next/navigation';
import { editProduct, saveProduct } from '@/lib/actions/product';
import { Routes, SubmitterNames } from '@/constants/enums';
import Image from 'next/image';
//icons
import { BsInfoSquareFill } from 'react-icons/bs';
//toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//shadcn components
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
// custom components
import FileInput from '@/app/components/forms/FileUpload';
import SubmitButton from './SubmitButton';

interface ProductCurrancy {
	id: string;
	name: string;
	value: string;
}

interface AddNewProductFormProps {
	categories: ProductCategory[];
	currencies: ProductCurrancy[];
	product?: Prisma.ProductGetPayload<{
		include: {
			category: true;
		};
	}>;
	isEdit?: boolean;
}

export type FormValues = z.infer<typeof AddProductFormSchema>;

const messages = {
	name: 'Write your product name here.',
	categroy: 'Select your product category for example "Launch" or "Dinner" ext.',
	description: 'Write here a description for your product.',
	currency: 'Select your currency.',
	quantity: 'Enter product quantity.',
	price: 'Enter product price.',
	image: 'Upload an image for your product.',
};

const AddNewProductForm = ({ isEdit = false, ...props }: AddNewProductFormProps) => {
	const [productImage, setProductImage] = useState<File | null>(null);
	const [saveAndAddd, setSaveAndAdd] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const form = useForm<FormValues>({
		defaultValues: {
			name: props.product?.name ?? undefined,
			description: props.product?.description ?? undefined,
			price: props.product?.price.toString() ?? undefined,
			quantity: props.product?.quantity.toString() ?? undefined,
			categoryId: props.product?.categoryId.toString() ?? '1',
			currencyId: props.currencies[0].id,
			available: props.product?.available ?? undefined,
			discount: false,
		},
		resolver: zodResolver(AddProductFormSchema),
	});

	const onSubmit: SubmitHandler<FormValues> = async (data, event) => {
		try {
			// const submitter = (event?.nativeEvent as SubmitEvent).submitter as HTMLButtonElement;
			// submitter?.innerText === SubmitterNames.SAVE_AND_ADD ? setSaveAndAdd(true) : setSaveAndAdd(false);
			const url = productImage ? await uploadProductImage(productImage) : props.product?.image;
			if (isEdit && props.product) {
				setLoading(true);
				await editProduct(props.product?.id, data, url ?? '');
				setLoading(false);
				// form.resetField('name');
				// form.resetField('categoryId');
				// form.resetField('currencyId');
				// form.resetField('quantity');
				// form.resetField('price');
				// form.resetField('description');
				// form.resetField('available');
				// form.resetField('discount');
				form.reset({ name: '', price: '0', quantity: '0', available: false, description: '' });
				toast.success('Product updated successfully!');
			} else {
				setLoading(true);
				await saveProduct(data, url ?? '');
				setLoading(false);
				form.reset({ name: '', price: '0', quantity: '0', available: false, description: 'Message' });
				toast.success('Product added successfully!');
			}
		} catch (error) {
			console.error({ 'some thing went wrong': error });
		} finally {
			saveAndAddd ? router.refresh() : router.push(`/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCT_LIST}`);
		}
	};

	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit, (errors) => {})}
					className='grid gap-20 grid-cols-1 lg:grid-cols-2 place-items-start'
				>
					<div className='w-full grid grid-cols-2 gap-4'>
						{/* Product Name */}
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem className='col-span-2'>
									<div className='flex gap-2 items-center'>
										<FormLabel className='text-[17px]'>Product Name</FormLabel>
										<DescriptionTooltip content={messages?.name} />
									</div>
									<FormControl>
										<Input placeholder='Pizza' {...field} />
									</FormControl>
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
										<DescriptionTooltip content={messages?.categroy} />
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
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* Product Currency */}
						<FormField
							control={form.control}
							name='currencyId'
							render={({ field }) => (
								<FormItem className='col-span-1'>
									<div className='flex gap-2 items-center'>
										<FormLabel className='text-[17px]'>Currency</FormLabel>
										<DescriptionTooltip content={messages?.currency} />
									</div>
									<FormControl>
										<Select value={String(field.value)} onValueChange={field.onChange}>
											<SelectTrigger className=''>
												<SelectValue placeholder={props.currencies[0]?.name} />
											</SelectTrigger>
											<SelectContent>
												{props.currencies.map((currancy) => (
													<SelectItem key={currancy.id} value={String(currancy.id)}>
														{currancy.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* Product Quantity */}
						<FormField
							control={form.control}
							name='quantity'
							render={({ field }) => (
								<FormItem className='col-span-1'>
									<div className='flex gap-2 items-center'>
										<FormLabel className='text-[17px]'>Quantity</FormLabel>
										<DescriptionTooltip content={messages?.quantity} />
									</div>
									<FormControl>
										<Input placeholder='01' {...field} />
									</FormControl>
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
										<DescriptionTooltip content={messages?.price} />
									</div>
									<FormControl>
										<Input placeholder='$0' {...field} />
									</FormControl>
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
										<DescriptionTooltip content={messages?.description} />
									</div>
									<FormControl>
										<Textarea rows={4} placeholder='Message' {...field} />
									</FormControl>
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
										<DescriptionTooltip content={messages?.image} />
									</div>
									<FormControl>
										<FileInput
											type='file'
											onSelect={(e: any) => {
												setProductImage(e.target.files?.[0] || null);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className='w-full flex flex-col gap-5'>
						{/* show product image */}
						<div className='relative w-full h-[215px] group rounded-xl overflow-hidden'>
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
						{/* available status */}
						<FormField
							control={form.control}
							name='available'
							render={({ field }) => (
								<FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
									<div className='space-y-0.5'>
										<FormLabel>Status Available</FormLabel>
										<FormDescription>
											Status Available switch between Instock and Out of stock..
										</FormDescription>
									</div>
									<FormControl>
										<Switch checked={field.value} onCheckedChange={field.onChange} aria-readonly />
									</FormControl>
								</FormItem>
							)}
						/>
						{/* discount  */}
						<FormField
							control={form.control}
							name='discount'
							render={({ field }) => (
								<FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
									<div className='space-y-0.5'>
										<FormLabel>Discount Active</FormLabel>
										<FormDescription>
											Enable Discount to increase sales of this product.
										</FormDescription>
									</div>
									<FormControl>
										<Switch checked={field.value} onCheckedChange={field.onChange} aria-readonly />
									</FormControl>
								</FormItem>
							)}
						/>
						{/* Submit buttons */}
						<div className='w-full flex items-center justify-between'>
							<div className='w-[150px]'>
								<SubmitButton
									onClick={() => {
										setSaveAndAdd(false);
									}}
									loading={loading}
									isEdit={isEdit}
									text='Save'
									loadingText='Please wait'
									updatingText='Update'
									background=''
								/>
							</div>
							{!isEdit && (
								<div className='w-[150px]'>
									<SubmitButton
										onClick={() => setSaveAndAdd(true)}
										loading={loading}
										isEdit={isEdit}
										text='Save and Add'
										loadingText='Please wait'
										updatingText='Update'
										background='accent'
									/>
								</div>
							)}
						</div>
					</div>
				</form>
			</Form>
		</div>
	);
};
export default AddNewProductForm;

const DescriptionTooltip = ({ content }: { content: string }) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger disabled>
					<BsInfoSquareFill />
				</TooltipTrigger>
				<TooltipContent>
					<p>{content}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
