import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import BackToTop from '@/components/BackToTop'
import PageLoader from '@/components/PageLoader'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://www.digitaltechs.in'

export const metadata: Metadata = {
  title: {
    default: 'Digital Tech Prosperity | AI & Software Solutions',
    template: '%s | Digital Tech Prosperity',
  },
  description:
    'Empowering Progress with Digital Tech Prosperity. We build intelligent, scalable AI solutions across healthcare, finance, retail, manufacturing, education, logistics and every industry.',
  keywords: [
    'AI development', 'data analytics', 'software development', 'cloud', 'automation',
    'digital transformation', 'machine learning', 'LLM', 'AI services India',
    'AI for healthcare', 'AI for finance', 'AI for retail', 'AI for manufacturing',
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Digital Tech Prosperity | AI & Software Solutions',
    description: 'Intelligent & scalable AI solutions for every industry.',
    type: 'website',
    url: siteUrl,
    siteName: 'Digital Tech Prosperity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Tech Prosperity | AI & Software Solutions',
    description: 'Intelligent & scalable AI solutions for every industry.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 antialiased`}>
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  )
}
