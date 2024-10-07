import './globals.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import { auth, BASE_PATH } from '@/auth'

import SessionProvider from '../components/SessionProvider'

const nunito = Nunito({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BookWise | Rocketseat Challenge',
  description: 'Search, rating and write a review about books',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <html lang="pt-BR">
      <body
        className={`${nunito.className} antialiased bg-gray-800 text-gray-100`}
      >
        <SessionProvider basePath={BASE_PATH} session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
