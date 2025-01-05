import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { prisma } from '@/utils/client';

const UsersListPage = async () => {
	const users = await prisma.user.findMany({});

	return (
		<div>
			UsersListPage
			<div className='container mx-auto'>
				<Table>
					<TableCaption>A list of users.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className='w-[100px]'>Id</TableHead>
							<TableHead>First Name</TableHead>
							<TableHead>Last Name</TableHead>
							<TableHead className='text-right'>Email</TableHead>
							<TableHead className='text-right'>Password</TableHead>
							<TableHead className='text-right'>Created At</TableHead>
							<TableHead className='text-right'>Updated At</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map((user) => (
							<TableRow key={user.id}>
								<TableCell className='font-medium'>{user.id}</TableCell>
								<TableCell>{user.firstName}</TableCell>
								<TableCell>{user.lastName}</TableCell>
								<TableCell className='text-right'>{user.email}</TableCell>
								<TableCell className='text-right'>{user.password}</TableCell>
								<TableCell className='text-right'>{user.createdAt.toISOString()}</TableCell>
								<TableCell className='text-right'>{user.updatedAt.toISOString()}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default UsersListPage;
