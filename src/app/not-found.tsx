import Link from 'next/link'
import { Home, ArrowLeft, Brain } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen hero-gradient grid-overlay flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        {/* Animated 404 */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-8xl font-black text-white/20">4</span>
          <div className="w-20 h-20 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center">
            <Brain size={40} className="text-cyan-300" />
          </div>
          <span className="text-8xl font-black text-white/20">4</span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-blue-100 mb-8 text-lg">
          Looks like this page got lost in the digital universe. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            <Home size={18} /> Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={18} /> Contact Us
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          {['Services', 'About', 'Portfolio', 'Contact'].map((page) => (
            <Link
              key={page}
              href={`/${page.toLowerCase()}`}
              className="text-blue-200 hover:text-white transition-colors underline underline-offset-4"
            >
              {page}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
