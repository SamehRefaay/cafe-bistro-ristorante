import { UserIcon } from '@heroicons/react/20/solid';
import { Input } from '@nextui-org/react';
import React from 'react';

const SignUpForm = () => {
	return (
		<div className="grid grid-cols-2 gap-3 p-2 shadow-2">
			<Input label="First Name" startContent={<UserIcon className="w-4" />} />
		</div>
	);
};

export default SignUpForm;
