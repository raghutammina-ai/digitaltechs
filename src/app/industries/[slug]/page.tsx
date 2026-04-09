import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { industries, getIndustry } from '../data'
import ComingSoonIndustry from './ComingSoonIndustry'

export function generateStaticParams() {
  return industries.map(i => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = getIndustry(params.slug)
  if (!industry) return {}
  if (industry.comingSoon) {
    return {
      title: `AI for ${industry.name} — Coming Soon`,
      description: `We're building dedicated AI solutions content for ${industry.name}. Register your interest to be notified when it launches.`,
    }
  }
  return {
    title: `AI for ${industry.name}`,
    description: industry.description,
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug)
  if (!industry) notFound()

  if (industry.comingSoon) {
    return <ComingSoonIndustry industry={industry} />
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              AI for {industry.name}
            </h1>
            <p className="text-blue-100 text-lg mb-6">{industry.tagline}</p>
            <p className="text-blue-200 max-w-2xl">{industry.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                Get a Free Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                View Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.outcomes.map((o, i) => (
              <AnimatedSection key={o.label} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center card-glow">
                  <div className="text-4xl font-black gradient-text mb-1">{o.metric}</div>
                  <div className="text-slate-500 text-sm font-medium">{o.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges + Solutions */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="right">
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Challenges</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">Common {industry.name} Pain Points</h2>
              <ul className="space-y-4">
                {industry.challenges.map(c => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✕</span>
                    <span className="text-slate-600">{c}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Our Solutions</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">How We Solve Them</h2>
              <div className="space-y-5">
                {industry.solutions.map(s => (
                  <div key={s.title} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">{s.title}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Use Cases</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">What We Build for {industry.name}</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {industry.useCases.map(uc => (
                <span key={uc} className={`px-5 py-2.5 ${industry.bgColor} ${industry.color} rounded-full text-sm font-medium border border-current/20`}>
                  {uc}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your {industry.name} Business with AI?
            </h2>
            <p className="text-blue-100 mb-8">
              Book a free consultation and discover how AI can drive real results for your organisation.
            </p>
            <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
