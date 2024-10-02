import NextAuth, { NextAuthConfig } from 'next-auth'
import github from 'next-auth/providers/github'
import google from 'next-auth/providers/google'

export const BASE_PATH = '/api/auth'

console.log('base_path', BASE_PATH)

const authOptions: NextAuthConfig = {
  providers: [
    google({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
    github({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    // signIn: '/login',
  },
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)
