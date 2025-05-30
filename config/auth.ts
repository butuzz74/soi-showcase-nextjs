import NextAuth, { CredentialsSignin } from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { AdminType } from '../type/types';
import * as bcrypt from 'bcrypt';

class InvalidLoginError extends CredentialsSignin {
  code = 'custom';
  constructor(message: string) {
    super(message);
    this.code = message;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('MISSING_FIELDS');
          }
          const data = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin?email=${credentials?.email}`,
            { cache: 'no-store' }
          );
          if (!data.ok) throw new Error('USER_NOT_FOUND');
          const admin: AdminType = await data.json();

          const isEqualPassword = await bcrypt.compare(
            credentials?.password as string,
            admin.password
          );

          if (!isEqualPassword) throw new Error('INVALID_PASSWORD');
          const { password, ...adminWithoutPassword } = admin;
          return adminWithoutPassword;
        } catch (err) {
          throw new InvalidLoginError((err as { message: string }).message);
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin',
  },
});

