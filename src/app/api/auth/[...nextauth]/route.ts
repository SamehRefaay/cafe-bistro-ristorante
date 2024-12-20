import { prisma } from '@/utils/client';
import NextAuth from 'next-auth/next';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from 'next-auth/providers/google';
import * as bcrypt from 'bcrypt';

const authOptions: AuthOptions = {
	// 	pages: {
	// 		signIn: 'dashboard/login',
	// 	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'User Name',
					type: 'text',
					placeholder: 'Your User Name',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// check if the user exist
				const user = await prisma.user.findUnique({
					where: { email: credentials?.username },
				});

				if (!user) throw new Error('Username or password is not correct!');
				if (!user.password) throw new Error('Please provide your password');

				const isPasswordCorrect = await bcrypt.compare(
					credentials!.password,
					user.password
				);

				if (!isPasswordCorrect)
					throw new Error('Username or password is not correct!');

				const { password, ...userWithoutPassword } = user;

				return userWithoutPassword;
			},
		}),
		// 		GoogleProvider({
		// 			clientId: process.env.GOOGLE_CLIENT_ID!,
		// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		// 		}),
	],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
