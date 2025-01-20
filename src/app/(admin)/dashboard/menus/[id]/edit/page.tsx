import AddNewProductForm from '@/app/components/forms/AddNewProductForm';
import { Separator } from '@/components/ui/separator';
import { prisma } from '@/utils/client';
import React from 'react';

const EditProdcutPage = async ({ params }: { params: { id: string } }) => {
	const categories = await prisma.productCategory.findMany();
	const { id } = params;

	const product = await prisma.product.findUnique({
		where: {
			id: Number(id),
		},
		include: {
			category: true,
		},
	});

	return (
		<div className='py-5'>
			<div className='container mx-auto bg-white rounded-lg shadow-md md:px-8 py-8'>
				<h2 className='mb-4 text-2xl font-semibold text-start'>Edit PRODUCT</h2>
				<Separator className='mb-4' />
				<AddNewProductForm categories={categories} product={product ?? undefined} isEdit={true} />
			</div>
		</div>
	);
};

export default EditProdcutPage;
