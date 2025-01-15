import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ProductCategory } from '@prisma/client';

type Currency = {
	id: string;
	name: string;
};

interface AddNewProductFormProps {
	categories: ProductCategory[];
	currencies: Currency[];
}

const AddNewProductForm = ({ categories, currencies }: AddNewProductFormProps) => {
	return (
		<form className='w-full grid grid-cols-2 gap-4' action=''>
			<div className='col-span-2'>
				<label className='mb-2'>Product Name</label>
				<Input type='text' placeholder='Pizza' />
			</div>
			<div className='col-span-1'>
				<label className='mb2' htmlFor=''>
					Select Category
				</label>
				<Select>
					<SelectTrigger className='w-full'>
						<SelectValue className='capitalize' placeholder={categories[0].name} />
					</SelectTrigger>
					<SelectContent>
						{categories.map((category) => (
							<SelectItem key={category.id} className='capitalize' value={category.name}>
								{category.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className='col-span-1'>
				<label htmlFor=''>Currency</label>
				<Select>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder={currencies[0].name} />
					</SelectTrigger>
					<SelectContent>
						{currencies.map((currency) => (
							<SelectItem key={currency.id} value={currency.name}>
								{currency.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className='col-span-1'>
				<label className='mb-2'>Quantity</label>
				<Input type='number' placeholder='01' />
			</div>
			<div className='col-span-1'>
				<label className='mb-2'>Price</label>
				<Input type='number' placeholder='$10' />
			</div>
			<div className='col-span-2'>
				<label className='mb-2'>Description</label>
				<Textarea rows={4} placeholder='Message' />
			</div>
			<div className='col-span-2'>
				<label className='mb-2'>Product Image</label>
				<Input type='file' placeholder='Upload Images...' />
			</div>
			<div className='col-span-2 w-full text-center'>
				<button className='w-full py-3 h-full btn-accent rounded-2xl' type='submit'>
					Save
				</button>
			</div>
		</form>
	);
};

export default AddNewProductForm;
