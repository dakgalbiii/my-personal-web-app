import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: "/icon.png",
  title: 'Alvin Shin',
  description: "I'm Alvin, and I currently attend Stony Brook University for computer science. Welcome to my personal website!",
  openGraph: {
    title: "Alvin Shin",
    description: "I'm Alvin, and I currently attend Stony Brook University for computer science. Welcome to my personal website!",
    url: "https://www.ashin.dev/",
    siteName: "ashin.dev",
    locale: 'en_US',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#102921]"}>{children}</body>
    </html>
  )
}
