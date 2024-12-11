import NextAuth, { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { signInSchema } from './lib/zod/login';
// import { saltAndHashPassword } from '@/src/utils/password';

const credentialsOptions = {
  credentials: {
    email: {},
    password: {}
  }
  // authorize: async (credentials) => {
  // try {
  //   let user = null;

  //   const { email, password } = await signInSchema.parseAsync(credentials);

  //   // logic to salt and hash password
  //   const pwHash = saltAndHashPassword(password);

  //   // logic to verify if the user exists
  //   user = await getUserFromDb(email, pwHash);

  //   if (!user) {
  //     throw new Error('User not found.');
  //   }

  //   // return JSON object with the user data
  //   return user;
  // } catch (error) {
  //   if (error instanceof ZodError) {
  //     // Return `null` to indicate that the credentials are invalid
  //     return null;
  //   }
  // }
  // }
};

const authOptions: NextAuthConfig = {
  providers: [Google, GitHub, Credentials(credentialsOptions)],
  pages: {
    signIn: '/login'
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions) ;
