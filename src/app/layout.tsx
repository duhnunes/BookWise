import './globals.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { getServerSession } from 'next-auth'

import SessionProvider from './components/SessionProvider'

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
  const session = await getServerSession()

  return (
    <html lang="pt-BR">
      <body
        className={`${nunito.className} antialiased bg-gray-800 text-gray-100`}
      >
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
