import { getKindeServerSession, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';
import UserAvatar from './UserAvatar';
import { prisma } from '@/utils/client';

const SignInPannel = async () => {
	const { isAuthenticated, getUser } = await getKindeServerSession();

	if (await isAuthenticated()) {
		const user = await getUser();
		const dbUser = await prisma.user.findUnique({
			where: {
				id: user.id,
			},
		});

		return dbUser && <UserAvatar user={dbUser} />;
	}
	return (
		<button className='btn bg-accent text-white'>
			<LoginLink>Sign In</LoginLink>
		</button>
	);
};

export default SignInPannel;
