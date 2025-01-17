'use server';
import { z } from 'zod';

import { AddProductFormSchema } from '../zodSchema';
import { prisma } from '@/utils/client';

export async function saveProduct(data: z.infer<typeof AddProductFormSchema>, url: string) {
	try {
		const result = await prisma.product.create({
			data: {
				name: data.name,
				description: data.description,
				price: data.price,
				categoryId: data.categoryId,
				image: url,
			},
		});
		return result;
	} catch (error) {
		console.error(error);
	}
}
