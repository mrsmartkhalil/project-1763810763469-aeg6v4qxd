import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'المحامي أحمد - محفظة الأعمال',
  description: 'موقع المحامي أحمد للاستشارات القانونية والخدمات القضائية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
