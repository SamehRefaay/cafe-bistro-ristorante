import SignUpForm from '@/app/components/SignUpForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
	return (
		<div className="grid gap-3 grid-cols-1 md:grid-cols-2 justify-center items-center">
			<div className="md:col-span-2 justify-center items-center">
				<p className="text-center p-2">Already Signed up?</p>
				<Link href="/auth/singin">Sign In</Link>
			</div>
			<SignUpForm />
			<Image src="blog-07.jpg.webp" alt="" width={500} height={500} />
		</div>
	);
};

export default SignUpPage;
