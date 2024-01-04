import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import AnimatedCursor from "react-animated-cursor";
const inter = Inter({ subsets: ['latin'] })

import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  icons: "/icon.png",
  title: 'Alvin Shin',
  description: "Alvin Shin's personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-[#102921]'>
        <AnimatedCursor
          color='255, 193, 23'
          innerSize={8}
          outerSize={30}
          innerScale={1}
          outerScale={2.05}
        />
        <main className={inter.className}>{children}</main>
      </body>
    </html>

  )
}