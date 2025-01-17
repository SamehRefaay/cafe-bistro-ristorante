'use client';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AddProductFormSchema } from '@/lib/zodSchema';
import { ProductCategory } from '@prisma/client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { uploadProductImage } from '@/lib/upload';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveProduct } from '@/lib/actions/product';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileInput from '@/app/components/forms/FileUpload';
import { Routes } from '@/constants/enums';
type Currency = {
	id: string;
	name: string;
};

interface AddNewProductFormProps {
	categories: ProductCategory[];
	currencies: Currency[];
	isEdit?: boolean;
}

// type FormValues = {
// 	name: string;
// 	description: string;
// 	price: string;
// 	category: {
// 		name: string;
// 	};
// };

// export type FormValues = z.infer<typeof AddProductFormSchema>;

const AddNewProductForm = ({ isEdit = false, categories, currencies }: AddNewProductFormProps) => {
	const [productImage, setProductImage] = useState<File | null>(null);
	const router = useRouter();

	const form = useForm<z.infer<typeof AddProductFormSchema>>({
		defaultValues: {
			name: '',
			description: '',
			price: 0,
			categoryId: undefined,
		},
		resolver: zodResolver(AddProductFormSchema),
	});

	console.log('image:', productImage);
	console.log('image name:', productImage?.name);

	// const { register, handleSubmit, formState } = form;

	const onSubmit = async (data: z.infer<typeof AddProductFormSchema>) => {
		const url = await uploadProductImage(productImage!);
		try {
			if (isEdit) {
				console.log('handle edit product');
			} else {
				await saveProduct(data, url);
				toast.success('Property added successfully!');
			}
		} catch (error) {
			console.error({ 'some thing went wrong': error });
		} finally {
			router.push(`/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCTLIST}`);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit, (errors) => console.log(errors))}
				// className='w-full grid grid-cols-2 gap-4'
				className='w-full grid grid-cols-2 gap-4'
			>
				{/* Product Name */}
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem className='col-span-2'>
							<FormLabel>Product Name</FormLabel>
							<FormControl>
								<Input placeholder='Pizza' {...field} />
							</FormControl>
							<FormDescription>This is the product name.</FormDescription>
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
							<FormLabel>Select Category</FormLabel>
							<FormControl>
								<Select value={String(field.value)} onValueChange={field.onChange}>
									<SelectTrigger className=''>
										<SelectValue className='capitalize' placeholder={categories[0].name} />
									</SelectTrigger>
									<SelectContent>
										{categories.map((category) => (
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
							<FormDescription>
								Select your product category for example &quot;Launch&quot; or &quot;Dinner&quot; ext.
							</FormDescription>
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
							<FormLabel>Price</FormLabel>
							<FormControl>
								<Input placeholder='Pizza' {...field} />
							</FormControl>
							<FormDescription>This is the product price.</FormDescription>
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
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea rows={4} placeholder='Message' {...field} />
							</FormControl>
							<FormDescription>This is the product description.</FormDescription>
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
							<FormLabel>Product Image</FormLabel>
							<FormControl>
								<FileInput
									type='file'
									onSelect={(e: any) => setProductImage(e.target.files?.[0] || null)}
								/>
							</FormControl>
							<FormDescription>This is the product image.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type='submit' className='col-span-2'>
					Save
				</Button>
			</form>
		</Form>
	);
};
export default AddNewProductForm;
