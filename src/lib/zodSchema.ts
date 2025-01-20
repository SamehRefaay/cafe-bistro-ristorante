import { z } from 'zod';

export const AddProductFormSchema = z.object({
	name: z.string().nonempty('The name is required').min(3, 'Enter the name').max(100),
	description: z.string().nonempty('The description is required').min(3, 'Enter the description').max(500),
	price: z.string().min(1, 'Enter the price').regex(new RegExp('^[0-9]+$'), 'Enter Number'),
	categoryId: z.string(),
});
