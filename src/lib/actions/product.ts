'use server';
import { z } from 'zod';

import { AddProductFormSchema } from '../zodSchema';
import { prisma } from '@/utils/client';
import { FormValues } from '@/app/components/forms/AddNewProductForm';
import { revalidatePath } from 'next/cache';
import { productListPath } from '@/app/(admin)/dashboard/menus/[id]/details/@modalDelete/(..)delete/page';

//get product by id
export async function getProductById(productId: number) {
	try {
		const product = await prisma.product.findUnique({ where: { id: productId } });
		return product;
	} catch (error) {
		console.error(error);
	}
}

//add new product
export async function saveProduct(data: z.infer<typeof AddProductFormSchema>, url: string) {
	try {
		const result = await prisma.product.create({
			data: {
				name: data.name,
				description: data.description,
				price: Number(data.price),
				categoryId: Number(data.categoryId),
				image: url,
			},
		});
		return result;
	} catch (error) {
		console.error(error);
	}
}

//update product
export async function editProduct(productId: number, data: FormValues, url: string) {
	try {
		const result = await prisma.product.update({
			where: {
				id: productId,
			},
			data: {
				name: data.name,
				description: data.description,
				price: Number(data.price),
				categoryId: Number(data.categoryId),
				image: url,
			},
		});
		return result;
	} catch (error) {
		console.error(error);
	}
}

//delete product
export async function deleteProduct(productId: number) {
	try {
		const result = await prisma.product.delete({
			where: {
				id: productId,
			},
		});
		//data mutation
		revalidatePath(productListPath);
		return result;
	} catch (error) {
		console.error(error);
	}
}
