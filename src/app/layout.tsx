import type { Metadata, Viewport } from 'next'
import Header from '@/components/layout/Header'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Prodexa',
    default: 'Prodexa - Professional Solutions',
  },
  metadataBase: new URL('https://prodexa.com'),
  description: 'Innovative solutions for your business needs',
  openGraph: {
    title: 'Prodexa',
    description: 'Professional solutions for your business',
    images: '/og-image.jpg',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#003366',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}