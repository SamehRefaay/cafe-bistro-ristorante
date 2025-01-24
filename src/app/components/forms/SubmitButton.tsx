import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const SubmitButton = ({
	loading,
	isEdit,
	text = 'Save',
	loadingText = 'Loading...',
	updatingText = 'Update',
	background = 'primary',
}: {
	loading: boolean;
	isEdit: boolean;
	text?: string;
	loadingText?: string;
	updatingText?: string;
	background?: string;
}) => {
	return (
		<div className='w-full'>
			{loading ? (
				<Button
					disabled
					className={`w-full h-full py-3 col-span-2 text-white ${
						background === 'primary'
							? 'bg-primary'
							: background === 'accent'
							? 'bg-accent hover:bg-accent-hover'
							: ''
					}`}
				>
					<Loader2 className='animate-spin' />
					{loadingText}
				</Button>
			) : (
				<Button
					type='submit'
					className={`w-full h-full py-3 col-span-2 text-white ${
						background === 'primary'
							? 'bg-primary'
							: background === 'accent'
							? 'bg-accent hover:bg-accent-hover'
							: ''
					}`}
				>
					{isEdit ? updatingText : text}
				</Button>
			)}
		</div>
	);
};
export default SubmitButton;
