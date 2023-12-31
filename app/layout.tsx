"use client"

import Navbar from './components/navbar/Navbar'
import './globals.css'
import { League_Spartan } from 'next/font/google'
import { SessionProvider } from "next-auth/react"
const inter = League_Spartan({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <SessionProvider >
          <div className='lg:flex bg-deepPurple'>
            <Navbar />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
