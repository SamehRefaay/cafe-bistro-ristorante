import { FaUser } from 'react-icons/fa6';
import UserAvatar from './UserAvatar';
import { prisma } from '@/utils/client';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const AdminAvatar = async () => {
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
		<div className='w-[50px] h-[50px] flex justify-center items-center border rounded-full'>
			<FaUser size={25} />
		</div>
	);
};

export default AdminAvatar;
