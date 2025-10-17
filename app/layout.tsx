import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interactive Content Studio',
  description: 'Create and share dynamic, onchain-enabled content directly within Farcaster',
  openGraph: {
    title: 'Interactive Content Studio',
    description: 'Create and share dynamic, onchain-enabled content directly within Farcaster',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
