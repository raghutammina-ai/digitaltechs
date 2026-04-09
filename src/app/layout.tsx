import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Tech Prosperity | AI & Software Solutions',
  description:
    'Empowering Progress with Digital Tech Prosperity. We build intelligent, scalable digital solutions across AI, data analytics, cloud infrastructure, and automation engineering.',
  keywords: 'AI development, data analytics, software development, cloud, automation, digital transformation',
  openGraph: {
    title: 'Digital Tech Prosperity',
    description: 'Intelligent & scalable digital solutions for every industry.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
