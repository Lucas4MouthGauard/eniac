import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ENIAC loads LLM - Vacuum tubes from 1946 booting a 2025-grade LLM',
  description: 'Wiring 20th-century glow into a 21st-century language engine. Experience the retro-futuristic journey of ENIAC loading a modern Large Language Model.',
  keywords: 'ENIAC, LLM, AI, retro, vintage, computer history, artificial intelligence',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'ENIAC loads LLM',
    description: 'Vacuum tubes from 1946 are booting a 2025-grade LLM',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
