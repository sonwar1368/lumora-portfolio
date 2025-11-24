import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lumora – Modern SaaS Landing Page',
  description: 'High-converting professional landing page'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
