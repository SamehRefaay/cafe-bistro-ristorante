import { ReactNode } from 'react';

// interface ProductDetailsLayoutProps {
// 	children: ReactNode;
// 	modalDelete: ReactNode;
// }

const ProductDetailsLayout = ({ children, modalDelete }: { children: ReactNode; modalDelete: ReactNode }) => {
	return (
		<>
			<div className='bg-red-200'>
				<div>{children}</div>

				<div>{modalDelete}</div>
			</div>
		</>
	);
};

export default ProductDetailsLayout;
