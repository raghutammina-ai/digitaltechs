'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Clock, Send, Loader2, AlertCircle } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { Industry, industries } from '../data'

type Status = 'idle' | 'loading' | 'success' | 'error'

const liveIndustries = industries.filter(i => !i.comingSoon)

export default function ComingSoonIndustry({ industry }: { industry: Industry }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          // Include context so the team knows which industry was requested
          message: `Industry interest: ${industry.name} — from ${name || 'anonymous'}`,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient grid-overlay pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <Link href="/#industries" className="inline-flex items-center gap-2 text-blue-200 text-sm mb-6 hover:text-white transition-colors">
              ← All Industries
            </Link>
            <div className="text-5xl mb-4">{industry.icon}</div>
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                AI for {industry.name}
              </h1>
              <span className="flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-sm font-medium px-3 py-1 rounded-full border border-amber-400/30 whitespace-nowrap">
                <Clock size={14} /> Coming Soon
              </span>
            </div>
            <p className="text-blue-100 text-lg mb-4">{industry.tagline}</p>
            <p className="text-blue-200 max-w-2xl">{industry.description}</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Lead Capture + Solutions Preview */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* What's coming */}
            <AnimatedSection direction="right">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">What We&apos;re Building</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">
                Dedicated {industry.name} AI Solutions
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                We&apos;re currently building out our full {industry.name} industry hub — covering challenges, proven solutions, use cases, and case studies specific to your sector.
              </p>
              <div className="space-y-4 mb-8">
                {industry.solutions.map(s => (
                  <div key={s.title} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{s.title}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {industry.useCases.map(uc => (
                  <span key={uc} className={`px-4 py-2 ${industry.bgColor} ${industry.color} rounded-full text-xs font-medium border border-current/20`}>
                    {uc}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Interest form */}
            <AnimatedSection direction="left">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                {status === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">You&apos;re on the list!</h3>
                    <p className="text-slate-500 text-sm mb-6">
                      We&apos;ll notify you as soon as our {industry.name} industry page goes live. In the meantime, our team can answer any questions.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm">
                      Talk to an Expert <ArrowRight size={16} />
                    </Link>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Get Notified When It Launches</h3>
                    <p className="text-slate-500 text-sm mb-6">
                      Leave your details and we&apos;ll reach out as soon as our {industry.name} hub is live — plus you&apos;ll get early access to our {industry.name} AI guide.
                    </p>

                    {status === 'error' && (
                      <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm mb-4">
                        <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
                        {errorMsg}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="Jane Smith"
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <><Loader2 size={16} className="animate-spin" /> Registering...</>
                        ) : (
                          <>Notify Me <Send size={16} /></>
                        )}
                      </button>
                    </form>

                    <div className="mt-5 pt-5 border-t border-slate-100 text-center">
                      <p className="text-slate-500 text-sm mb-3">Need help now? Talk to our team directly.</p>
                      <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all">
                        Book a Free Consultation <ArrowRight size={15} />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Live industries */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Explore Our Live Industry Pages</h2>
            <p className="text-slate-500 mt-2 text-sm">Detailed AI solutions content already available for these industries.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {liveIndustries.map(ind => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                >
                  <span>{ind.icon}</span> {ind.name} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
