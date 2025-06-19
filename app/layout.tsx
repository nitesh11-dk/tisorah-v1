import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import StarFollower from '@/components/StarFollower'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@400..700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Poppins, sans-serif', position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
        <StarFollower />
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
