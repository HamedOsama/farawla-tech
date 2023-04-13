import ToastProvider from '@/components/ToastProvider'
import './globals.css'

import { Lalezar } from '@next/font/google'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const font = Lalezar({
  weight: ["400"],
  preload: true,
  variable: '--font-lalezar',
  subsets: ['arabic'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="rtl" className={font.className}>
      <body >
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}
