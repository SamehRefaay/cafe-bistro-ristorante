'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { User } from '@prisma/client';
import { useState } from 'react';

const UserAvatar = ({ user }: { user: User }) => {
	const [openAvatarMenu, setOpenAvatarMenu] = useState(false);
	return (
		<div onClick={() => setOpenAvatarMenu((prev) => !prev)} className='relative cursor-pointer'>
			<Avatar>
				{user.avatarUrl && <AvatarImage src={user.avatarUrl} />}
				<AvatarFallback className='bg-accent text-white'>{user?.firstName?.[0]}</AvatarFallback>
			</Avatar>
			{openAvatarMenu && (
				<div className='w-max h-max absolute top-12 right-0 bg-white shadow-md p-4 rounded-lg opacity-[98%]'>
					{user && (
						<div>
							<div className='flex flex-col gap-3 items-center text-primary/80'>
								<h5 className='text-sm'>{user.email}</h5>
								<Avatar className='w-20 h-20 border-1 hover:border-3 border-secondary/50 transition-all duration-300'>
									{user.avatarUrl && <AvatarImage src={user.avatarUrl} />}
									<AvatarFallback className='bg-accent text-white'>
										{user?.firstName?.[0]}
									</AvatarFallback>
								</Avatar>
								<p className='font-medium'>{`Hi, ${user.firstName}!`}</p>
								<Separator />
								<ul className='w-full h-5 flex items-center justify-between'>
									<li className='hover:text-accent transition-colors duration-300'>My Profile</li>
									<Separator orientation='vertical' />
									<li className=' hover:text-accent transition-colors duration-300'>
										<LogoutLink>Sign out</LogoutLink>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default UserAvatar;
