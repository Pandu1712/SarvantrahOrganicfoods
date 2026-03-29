import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { AppShell } from '@/components/app-shell'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Sarvantrah Organics | Millet-Based Organic Snacks',
  description:
    'Sarvantrah Organic Foods - Premium millet-based chikkis, cookies, chapathis, and healthy snacks. Affordable, nutritious, and 100% organic from Andhra Pradesh, India.',
  keywords:
    'millet snacks, organic food, chikki, millet cookies, healthy snacking, Sarvantrah, organic, Andhra Pradesh',
  icons: {
    icon: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1774787973/WhatsApp_Image_2026-03-29_at_14.30.03_xrjmv5.jpg',
    shortcut:
      'https://res.cloudinary.com/dd4oiwnep/image/upload/v1774787973/WhatsApp_Image_2026-03-29_at_14.30.03_xrjmv5.jpg',
    apple:
      'https://res.cloudinary.com/dd4oiwnep/image/upload/v1774787973/WhatsApp_Image_2026-03-29_at_14.30.03_xrjmv5.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#3d6b1c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`.trim()}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
