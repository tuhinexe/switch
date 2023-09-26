import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './Provider'
import DefaultLayout from './DefaultLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Switch',
  description: 'The switchverse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en" className='dark'>
      <body className={`${inter.className} dark:bg-bgPrimary `}>
        <Providers>
          <DefaultLayout>
      {children}
          </DefaultLayout>
        </Providers>
      </body>
    </html>
  )
}
