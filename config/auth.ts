import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { AdminType } from '../type/types';
import * as bcrypt from 'bcrypt';

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
        if (!credentials?.email || !credentials?.password) return null;
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin?email=${credentials?.email}`,
          { cache: 'no-store' }
        );
        const admin: AdminType = await data.json();
        const isEqualPassword = await bcrypt.compare(
          credentials?.password as string,
          admin.password
        );
        if (isEqualPassword) {
          const { password, ...adminWithoutPassword } = admin;
          return adminWithoutPassword;
        }
        return null;
      },
    }),
  ],
});
