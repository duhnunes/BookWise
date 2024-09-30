import './globals.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BookWise | Rocketseat Challenge',
  description: 'Search, rating and write a review about books',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${nunito.className} antialiased bg-gray-800 text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
