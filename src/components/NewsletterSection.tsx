'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-blue-500/30">
          Newsletter
        </span>
        <h2 className="text-3xl font-bold text-white mb-3">AI Insights, Straight to Your Inbox</h2>
        <p className="text-slate-400 mb-8">
          Join 2,000+ professionals getting our monthly roundup of AI trends, case studies, and practical guides across every industry.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-green-400 text-lg font-semibold">
            <CheckCircle2 size={24} />
            You&apos;re subscribed! Welcome aboard.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              type="submit"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
            >
              Subscribe <Send size={16} />
            </button>
          </form>
        )}
        <p className="text-slate-600 text-xs mt-4">No spam. Unsubscribe anytime. Read our <a href="/privacy-policy" className="text-slate-500 hover:text-slate-300 underline">Privacy Policy</a>.</p>
      </div>
    </section>
  )
}
