import './globals.css'
import type { Metadata } from 'next'
import {Play,Poppins } from 'next/font/google'
import Providers from './Provider'
import DefaultLayout from './DefaultLayout'

const poppins = Poppins({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-poppins'
})

const play = Play({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-play'
})

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
    <html suppressHydrationWarning lang="en" className={`dark `}>
      <body className={` ${poppins.className} ${play.variable} dark:bg-bgPrimary overflow-hidden`}>
        <Providers>
          <DefaultLayout>
      {children}
          </DefaultLayout>
        </Providers>
      </body>
    </html>
  )
}
