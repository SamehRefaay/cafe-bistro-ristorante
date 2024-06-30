import Link from 'next/link';
import React from 'react';

const AdminControl = () => {
	return (
		<div className="w-full ">
			<div className="w-full h-full max-w-7xl  mx-auto  flex justify-start items-center gap-5">
				<Link href="/add/product">Add New Product</Link>
			</div>
		</div>
	);
};

export default AdminControl;
