import React from "react"
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PentaCore - Digital Solutions for Modern Businesses',
  description: 'Transform your business with PentaCore - Online Ordering Systems, Fleet Management, POS solutions, and Digital Menu Boards for restaurants, cafes, and retail.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
