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
    color: 'bg-blue-600',
  },
  {
    title: 'Real-Time Trading Intelligence',
    category: 'Data',
    industry: 'Finance & Banking',
    desc: 'End-to-end data pipeline and analytics dashboard delivering real-time market insights to portfolio managers.',
    tags: ['Apache Kafka', 'Spark', 'BI Dashboard'],
    color: 'bg-cyan-600',
  },
  {
    title: 'Omnichannel Retail Platform',
    category: 'Software',
    industry: 'Retail & E-commerce',
    desc: 'Full-stack e-commerce platform integrating online, mobile, and in-store experiences for a regional retail chain.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    color: 'bg-indigo-600',
  },
  {
    title: 'Cloud Migration & DevOps',
    category: 'Cloud',
    industry: 'Logistics',
    desc: 'Migrated a monolithic logistics management system to microservices on AWS, reducing operational costs by 45%.',
    tags: ['AWS', 'Kubernetes', 'Terraform'],
    color: 'bg-teal-600',
  },
  {
    title: 'Student Learning Analytics',
    category: 'Data',
    industry: 'Education',
    desc: 'Personalized learning analytics platform helping educators identify at-risk students and improve outcomes.',
    tags: ['Data Analytics', 'React', 'Python'],
    color: 'bg-cyan-600',
  },
  {
    title: 'Property Management SaaS',
    category: 'Software',
    industry: 'Real Estate',
    desc: 'Multi-tenant SaaS platform for property management companies to automate listings, tenants, and maintenance.',
    tags: ['React', 'Node.js', 'Multi-tenant'],
    color: 'bg-indigo-600',
  },
]

export default function PortfolioPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient grid-overlay pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block bg-white/15 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              Our Work
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Projects That Drive Impact
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              A selection of solutions we&apos;ve built for clients across industries — from AI to cloud to custom software.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden card-glow h-full flex flex-col">
                  {/* Colour bar */}
                  <div className={`${p.color} h-1.5`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{p.industry}</span>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{p.category}</span>
                    </div>
                    <h3 className="text-slate-900 font-bold text-lg mb-2">{p.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">Your Project Could Be Next</h2>
            <p className="text-blue-100 mb-8">
              Let&apos;s discuss your challenge and build a solution that delivers real results.
            </p>
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
