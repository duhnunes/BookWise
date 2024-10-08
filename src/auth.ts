import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { NextAuthConfig } from 'next-auth'
import github from 'next-auth/providers/github'
import google from 'next-auth/providers/google'

import prisma from './app/lib/prisma'

export const BASE_PATH = '/api/auth'

const scope = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
]

const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    google({
      // `clientId` and `Secret` are unnecessary when use `AUTH_` in front of variable providers in .env file
      // https://authjs.dev/guides/environment-variables
      authorization: {
        scope: scope.join(' '),
      },
    }),
    github,
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },

  callbacks: {
    session({ session, user, token }) {
      if (token) {
        session.user.id = user.id
      }
      return session
    },

    redirect() {
      return '/'
    },
  },
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)
