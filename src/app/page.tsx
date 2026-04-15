'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight, CheckCircle2,
  Users, Zap, Shield, Lightbulb,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import TechStack from '@/components/TechStack'
import NewsletterSection from '@/components/NewsletterSection'
import NeuralNetwork from '@/components/NeuralNetwork'
import TypewriterText from '@/components/TypewriterText'
import AnimatedCounter from '@/components/AnimatedCounter'
import ROICalculator from '@/components/ROICalculator'

const services = [
  {
    icon: Brain,
    title: 'AI Application Development',
    desc: 'Custom AI-powered applications using the latest LLMs, machine learning models, and intelligent automation tailored to your business.',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    hoverBorder: 'hover:border-blue-500/40',
    hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Intelligence',
    desc: 'Transform raw data into actionable insights with advanced analytics, dashboards, and predictive intelligence platforms.',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    hoverBorder: 'hover:border-cyan-500/40',
    hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'Full-stack web and mobile applications built for scale, performance, and longevity across any industry vertical.',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    hoverBorder: 'hover:border-violet-500/40',
    hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]',
  },
  {
    icon: Cloud,
    title: 'Cloud & Automation Engineering',
    desc: 'End-to-end cloud infrastructure, DevOps pipelines, and workflow automation for maximum efficiency and reliability.',
    iconBg: 'bg-teal-500/10',
    iconColor: 'text-teal-400',
    hoverBorder: 'hover:border-teal-500/40',
    hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(20,184,166,0.15)]',
  },
]

const clientResults = [
  {
    industry: 'Healthcare',
    icon: '🏥',
    metric: '94%',
    metricLabel: 'Diagnostic accuracy',
    result: 'AI diagnostics platform processing 10,000+ medical scans daily. Reduced radiologist review time by 40% while maintaining clinical-grade accuracy.',
    tags: ['Medical Imaging AI', 'HIPAA Compliant'],
    accent: 'text-rose-400',
    tagBg: 'bg-rose-500/10 border-rose-500/20 text-rose-300',
  },
  {
    industry: 'Finance',
    icon: '🏦',
    metric: '3×',
    metricLabel: 'Faster risk decisions',
    result: 'Real-time trading intelligence platform handling 2M+ events/second. Portfolio managers gained live risk exposure visibility previously only available in overnight batch runs.',
    tags: ['Real-Time Analytics', 'Trading AI'],
    accent: 'text-blue-400',
    tagBg: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
  },
  {
    industry: 'Retail',
    icon: '🛍️',
    metric: '72%',
    metricLabel: 'Support queries automated',
    result: 'LLM-powered customer support agent deployed across e-commerce platform. Resolved 72% of tier-1 queries without human intervention, reducing support costs by £380K/year.',
    tags: ['LLM Integration', 'Customer Support AI'],
    accent: 'text-violet-400',
    tagBg: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
  },
  {
    industry: 'Logistics',
    icon: '🚚',
    metric: '45%',
    metricLabel: 'Operational cost reduction',
    result: 'Legacy infrastructure migrated to AWS microservices with zero downtime. Route optimisation AI reduced fuel costs by 25% in the first quarter post-launch.',
    tags: ['Cloud Migration', 'Route Optimisation'],
    accent: 'text-teal-400',
    tagBg: 'bg-teal-500/10 border-teal-500/20 text-teal-300',
  },
]

const values = [
  { icon: Lightbulb, title: 'Innovation with Purpose',      desc: 'Every solution is designed with a clear goal to drive real business impact.' },
  { icon: Zap,       title: 'Automation for Efficiency',    desc: 'We eliminate manual bottlenecks and accelerate operations through smart automation.' },
  { icon: Users,     title: 'Partnership for Growth',       desc: 'We work as an extension of your team, invested in your long-term success.' },
  { icon: Shield,    title: 'Transformation with Integrity', desc: 'Security, transparency, and ethical AI are at the core of everything we build.' },
]

const industries = [
  { name: 'Healthcare',           slug: 'healthcare' },
  { name: 'Real Estate',          slug: 'real-estate' },
  { name: 'Travel & Hospitality', slug: 'travel' },
  { name: 'Retail & E-commerce',  slug: 'retail' },
  { name: 'Agriculture',          slug: 'agriculture' },
]

export default function HomePage() {
  return (
    <div className="bg-[#020817] text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-[#020817] to-[#020817]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-40 right-0 w-[500px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-violet-600/6 rounded-full blur-[120px] pointer-events-none" />

        <NeuralNetwork />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 text-sm font-medium px-5 py-2 rounded-full mb-8 border border-blue-500/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              AI-Powered Digital Solutions
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.08] tracking-tight mb-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Empowering Progress with{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Digital Tech Prosperity
            </span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 min-h-[2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypewriterText />
          </motion.div>

          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We build intelligent, scalable digital solutions across AI application development,
            data analytics, custom software, and automation engineering — for every industry.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_50px_rgba(59,130,246,0.55)]"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none" />
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#020817] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.07] border border-white/[0.07] rounded-2xl overflow-hidden">
            {[
              { target: 10,  suffix: '+', label: 'Years of Experience' },
              { target: 200, suffix: '+', label: 'Projects Delivered'  },
              { target: 50,  suffix: '+', label: 'Happy Clients'       },
              { target: 15,  suffix: '+', label: 'Countries Served'    },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 p-10 text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2 tabular-nums">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-500 font-medium tracking-wide uppercase">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#020817] py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">Our Core Services</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
              From AI to automation, we cover the full spectrum of modern digital transformation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.08}>
                <div className={`group bg-white/[0.03] border border-white/[0.07] ${svc.hoverBorder} rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1.5 ${svc.hoverGlow}`}>
                  <div className={`w-11 h-11 ${svc.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                    <svc.icon size={20} className={svc.iconColor} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-3 leading-snug">{svc.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              View All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="relative bg-[#03101f] py-28 border-y border-white/[0.05] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="right">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Why Us</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                Built on Four Core Principles
              </h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                With 10+ years of experience delivering intelligent solutions globally, we bring
                deep expertise, a client-first mindset, and a commitment to measurable results.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'End-to-end AI & software delivery',
                  'Cross-industry domain expertise',
                  'Agile, transparent development process',
                  'Ongoing support & optimization',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={17} className="text-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                Learn About Us
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="group bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                      <v.icon size={18} className="text-blue-400" />
                    </div>
                    <h4 className="text-white font-bold mb-2 text-sm leading-snug">{v.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-[#020817] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Industries</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">We Serve Every Industry</h2>
            <p className="text-slate-400 text-lg">Click any industry to explore our tailored AI solutions.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map(({ name, slug }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={`/industries/${slug}`}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/10 bg-white/[0.03] hover:bg-blue-600 hover:border-blue-600 text-slate-300 hover:text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  >
                    {name}
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CLIENT RESULTS ── */}
      <section className="relative bg-[#03101f] py-28 border-y border-white/[0.05] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Proven Results</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">Outcomes Across Industries</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
              Measurable impact from delivered projects. Client names withheld under NDA —
              references available on request.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {clientResults.map((r, i) => (
              <AnimatedSection key={r.industry} delay={i * 0.08}>
                <div className="group bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.14] rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{r.icon}</span>
                      <span className="text-white font-bold text-base">{r.industry}</span>
                    </div>
                    <div className="text-right">
                      <div className={`text-4xl font-black ${r.accent} leading-none`}>{r.metric}</div>
                      <div className="text-xs text-slate-500 mt-1 font-medium">{r.metricLabel}</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{r.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.tags.map(tag => (
                      <span key={tag} className={`text-xs border px-3 py-1 rounded-full font-medium ${r.tagBg}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-slate-500 text-sm mb-5">
              Want to see detailed case studies or speak with a reference client?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Request References
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Tech Stack */}
      <TechStack />

      {/* Newsletter */}
      <NewsletterSection />

      {/* ── CTA ── */}
      <section className="relative bg-[#020817] py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-600/10 rounded-full blur-[130px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 text-sm font-medium px-5 py-2 rounded-full mb-8 border border-blue-500/20">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              Ready to get started?
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Ready to Transform<br />Your Business?
            </h2>
            <p className="text-slate-400 mb-12 text-lg max-w-xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can help you build smarter, faster, and stronger with AI and digital technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-9 py-4 rounded-xl transition-all duration-200 shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] text-lg"
              >
                Start a Conversation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-9 py-4 rounded-xl transition-all duration-200 text-lg"
              >
                View Our Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
