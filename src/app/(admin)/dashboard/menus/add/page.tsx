import { prisma } from '@/utils/client';
import AddNewProductForm from '../../../../components/forms/AddNewProductForm';
import { Separator } from '@/components/ui/separator';

const AddProductPage = async () => {
	const categories = await prisma.productCategory.findMany();
	return (
		<div className='py-5'>
			<div className='container mx-auto bg-white rounded-lg shadow-md md:px-8 py-8'>
				<h2 className='mb-4 text-2xl font-semibold text-start'>ADD NEW PRODUCT</h2>
				<Separator className='mb-4' />
				<AddNewProductForm categories={categories} />
			</div>
		</div>
	);
};

export default AddProductPage;
