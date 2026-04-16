'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const categories = ['All', 'AI', 'Data', 'Software', 'Cloud']

const projects = [
  {
    title: 'AI-Powered Diagnostics Platform',
    category: 'AI',
    industry: 'Healthcare',
    desc: 'Built a computer vision system to assist radiologists in detecting anomalies in medical imaging with 94% accuracy.',
    tags: ['Computer Vision', 'Python', 'TensorFlow'],
    accent: 'rgba(59,130,246,0.5)',
  },
  {
    title: 'Real-Time Trading Intelligence',
    category: 'Data',
    industry: 'Finance & Banking',
    desc: 'End-to-end data pipeline and analytics dashboard delivering real-time market insights to portfolio managers.',
    tags: ['Apache Kafka', 'Spark', 'BI Dashboard'],
    accent: 'rgba(6,182,212,0.5)',
  },
  {
    title: 'Omnichannel Retail Platform',
    category: 'Software',
    industry: 'Retail & E-commerce',
    desc: 'Full-stack e-commerce platform integrating online, mobile, and in-store experiences for a regional retail chain.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    accent: 'rgba(99,102,241,0.5)',
  },
  {
    title: 'Cloud Migration & DevOps',
    category: 'Cloud',
    industry: 'Logistics',
    desc: 'Migrated a monolithic logistics management system to microservices on AWS, reducing operational costs by 45%.',
    tags: ['AWS', 'Kubernetes', 'Terraform'],
    accent: 'rgba(16,185,129,0.5)',
  },
  {
    title: 'Student Learning Analytics',
    category: 'Data',
    industry: 'Education',
    desc: 'Personalized learning analytics platform helping educators identify at-risk students and improve outcomes.',
    tags: ['Data Analytics', 'React', 'Python'],
    accent: 'rgba(6,182,212,0.5)',
  },
  {
    title: 'Property Management SaaS',
    category: 'Software',
    industry: 'Real Estate',
    desc: 'Multi-tenant SaaS platform for property management companies to automate listings, tenants, and maintenance.',
    tags: ['React', 'Node.js', 'Multi-tenant'],
    accent: 'rgba(139,92,246,0.5)',
  },
]

const categoryColors: Record<string, string> = {
  'AI':       'bg-blue-500/10 text-blue-300 border-blue-500/20',
  'Data':     'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  'Software': 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  'Cloud':    'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
}

export default function PortfolioPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="bg-[#04040a] text-white">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-block p-[1px] rounded-full mb-6"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(139,92,246,0.4))' }}>
              <span className="flex items-center gap-2 bg-[#04040a] text-blue-300 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest">
                Our Work
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.04] text-white mb-6">
              Projects That{' '}
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Drive Impact.
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              A selection of solutions we&apos;ve built for clients across industries — from AI to cloud to custom software.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  active === cat
                    ? { background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: '#fff', boxShadow: '0 0 20px rgba(99,102,241,0.35)' }
                    : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1' }
                }
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <div className="p-[1px] rounded-2xl h-full transition-all duration-300 hover:-translate-y-1 group"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))' }}>
                  <div className="bg-[#07070e] group-hover:bg-[#09091a] rounded-2xl overflow-hidden h-full flex flex-col transition-colors duration-300">
                    <div className="h-[2px]" style={{ background: `linear-gradient(to right, ${p.accent}, transparent)` }} />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{p.industry}</span>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[p.category]}`}>
                          {p.category}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2 tracking-tight">{p.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed flex-1">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {p.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg text-slate-300"
                            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.08) 0%, transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white mb-5">
              Your Project Could Be Next
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Let&apos;s discuss your challenge and build a solution that delivers real results.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}
            >
              Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
