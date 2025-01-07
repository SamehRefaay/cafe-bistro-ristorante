export const dynamic = 'force-dynamic';

import { prisma } from '@/utils/client';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	// if there is no user
	if (!user || user === null || !user.id) {
		throw new Error('Something went wrong with authentication' + user);
	}

	//check if user exist in database
	const dbUser = await prisma.user.findUnique({
		where: {
			id: user.id,
		},
	});

	// save data to database
	if (!dbUser) {
		await prisma.user.create({
			data: {
				id: user.id,
				firstName: user.given_name ?? '',
				lastName: user.family_name ?? '',
				email: user.email ?? '',
				avatarUrl: user.picture ?? '',
			},
		});
	}
	// redirect to homepage
	// for dev env homepage will be http://localhost:3000
	// for prod env homepage will be https://cafe-bistro-ristorante.vercel.app/
	const homePage =
		process.env.NODE_ENV === 'production' ? 'https://cafe-bistro-restorante.vercel.app/' : 'http://localhost:3000';

	return NextResponse.redirect(homePage);
}
