import Layout from '@/components/Layout'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfoliyo',
  description: 'Custom portfoliyo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Layout/> */}
        {children}</body>
    </html>
  )
}
