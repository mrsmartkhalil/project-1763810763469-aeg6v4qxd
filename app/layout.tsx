import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wabel Adnan Alzaeem - Marketing Manager & More',
  description: '14 years of experience in Digital Transformation, Marketing, Sales Growth & Business Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  )
}
