'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Routes } from '@/constants/enums';
import { deleteProduct, getProductById } from '@/lib/actions/product';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const productListPath = `/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCT_LIST}`;

const DeleteInterceptingPage = ({ params }: { params: { id: string } }) => {
	const [product, setProduct] = useState<any>(null);
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const productId = +params.id;

	useEffect(() => {
		getProductById(productId)
			.then((data) => {
				setProduct(data);
			})
			.then(() => setIsOpen(true));
	}, []);

	const handleCancel = () => {
		router.push(productListPath);
		setIsOpen(false);
	};
	const handleDelete = async () => {
		try {
			await deleteProduct(productId);
			router.push(productListPath);
			setIsOpen(false);
		} catch (error) {
			throw error;
		}
	};

	return (
		<Dialog open={isOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure you want to delete this product?</DialogTitle>
					<DialogDescription>
						<p className='py-3'>
							<span className='text-slate-400 text-[18px]'>Name: </span>
							<span className='text-slate-600 text-[18px]'>{product?.name}</span>
						</p>
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<div className='w-full h-full flex gap-10 justify-center items-center'>
						<Button onClick={handleCancel} className='w-[100px] h-full py-3 '>
							Cancel
						</Button>
						<Button
							onClick={handleDelete}
							className='w-[100px] h-full py-3 bg-accent hover:bg-accent-hover'
						>
							Delete
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteInterceptingPage;
