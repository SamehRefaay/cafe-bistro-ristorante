import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Routes } from '@/constants/enums';
import { prisma } from '@/utils/client';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { notFound, redirect } from 'next/navigation';
import { deleteProduct } from '@/lib/actions/product';
import { revalidatePath } from 'next/cache';

const DeleteProductPage = async ({ params }: { params: { id: string } }) => {
	const productId = params.id;
	const product = await prisma.product.findUnique({
		where: { id: +productId },
	});

	const deleteAction = async () => {
		'use server';
		try {
			await deleteProduct(+productId);
			revalidatePath(`/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCT_LIST}`);
			redirect(`/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCT_LIST}`);
		} catch (error) {
			throw error;
		}
	};

	if (!product) return notFound();
	return (
		<div className='w-full h-full py-20'>
			<div className='container mx-auto'>
				<div className='flex justify-center items-center'>
					<Card className='w-full lg:w-1/2 h-full'>
						<CardHeader className='text-white bg-accent rounded-t-xl'>
							<h1 className='text-xl font-semibold'>Delete Product </h1>
						</CardHeader>
						<Separator />
						<CardContent>
							<div className='py-8 text-center'>
								<p className='mb-5 text-[18px] text-primary'>
									Are you sure you want to delete this product ?
								</p>

								<p className=''>
									<span className='text-slate-400'>Name: </span>
									<span className='text-slate-600'>{product?.name}</span>
								</p>
							</div>
						</CardContent>
						<CardFooter>
							<form
								action={deleteAction}
								className='w-full h-full flex gap-10 justify-center items-center'
							>
								<Button asChild className='w-[100px] h-full py-3 '>
									<Link href={`/${Routes.DASHBOARD}/${Routes.MENUS}/${Routes.PRODUCT_LIST}`}>
										Cancel
									</Link>
								</Button>
								<Button type='submit' className='w-[100px] h-full py-3 bg-accent hover:bg-accent-hover'>
									Delete
								</Button>
							</form>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default DeleteProductPage;
