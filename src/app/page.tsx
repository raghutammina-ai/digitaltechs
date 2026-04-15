'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight, CheckCircle2,
  Users, Zap, Shield, Lightbulb, Search, Layers, Rocket,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import TechStack from '@/components/TechStack'
import NewsletterSection from '@/components/NewsletterSection'
import NeuralNetwork from '@/components/NeuralNetwork'
import TypewriterText from '@/components/TypewriterText'
import AnimatedCounter from '@/components/AnimatedCounter'
import ROICalculator from '@/components/ROICalculator'

/* ── DATA ─────────────────────────────────────────────────────────────────── */

const services = [
  {
    num: '01',
    icon: Brain,
    title: 'AI Application Development',
    desc: 'Custom AI-powered applications using the latest LLMs, machine learning models, and intelligent automation tailored to your business.',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    accent: 'group-hover:border-blue-500/50',
    glow: 'group-hover:shadow-[0_0_50px_rgba(59,130,246,0.12)]',
    tag: 'LLMs · ML · Automation',
  },
  {
    num: '02',
    icon: BarChart3,
    title: 'Data Analytics & Intelligence',
    desc: 'Transform raw data into actionable insights with advanced analytics, dashboards, and predictive intelligence platforms.',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    accent: 'group-hover:border-cyan-500/50',
    glow: 'group-hover:shadow-[0_0_50px_rgba(6,182,212,0.12)]',
    tag: 'BI · Predictive · Dashboards',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'Full-stack web and mobile applications built for scale, performance, and longevity across any industry vertical.',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    accent: 'group-hover:border-violet-500/50',
    glow: 'group-hover:shadow-[0_0_50px_rgba(139,92,246,0.12)]',
    tag: 'Web · Mobile · APIs',
  },
  {
    num: '04',
    icon: Cloud,
    title: 'Cloud & Automation Engineering',
    desc: 'End-to-end cloud infrastructure, DevOps pipelines, and workflow automation for maximum efficiency and reliability.',
    iconColor: 'text-teal-400',
    iconBg: 'bg-teal-500/10',
    accent: 'group-hover:border-teal-500/50',
    glow: 'group-hover:shadow-[0_0_50px_rgba(20,184,166,0.12)]',
    tag: 'AWS · DevOps · CI/CD',
  },
]

const process = [
  {
    step: '01',
    icon: Search,
    title: 'Discover & Strategise',
    desc: 'We dive deep into your goals, data, and workflows to map the exact solution your business needs.',
  },
  {
    step: '02',
    icon: Layers,
    title: 'Design & Build',
    desc: 'Our engineers design, prototype, and build your solution in fast sprints with full transparency.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Launch & Scale',
    desc: 'We deploy, monitor, and continuously optimise — ensuring measurable ROI from day one.',
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
    tagClass: 'bg-rose-500/10 border-rose-500/20 text-rose-300',
    bar: 94,
  },
  {
    industry: 'Finance',
    icon: '🏦',
    metric: '3×',
    metricLabel: 'Faster risk decisions',
    result: 'Real-time trading intelligence platform handling 2M+ events/second. Portfolio managers gained live risk exposure visibility previously only available in overnight batch runs.',
    tags: ['Real-Time Analytics', 'Trading AI'],
    accent: 'text-blue-400',
    tagClass: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
    bar: 75,
  },
  {
    industry: 'Retail',
    icon: '🛍️',
    metric: '72%',
    metricLabel: 'Support queries automated',
    result: 'LLM-powered customer support agent deployed across e-commerce platform. Resolved 72% of tier-1 queries without human intervention, reducing support costs by £380K/year.',
    tags: ['LLM Integration', 'Customer Support AI'],
    accent: 'text-violet-400',
    tagClass: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
    bar: 72,
  },
  {
    industry: 'Logistics',
    icon: '🚚',
    metric: '45%',
    metricLabel: 'Operational cost reduction',
    result: 'Legacy infrastructure migrated to AWS microservices with zero downtime. Route optimisation AI reduced fuel costs by 25% in the first quarter post-launch.',
    tags: ['Cloud Migration', 'Route Optimisation'],
    accent: 'text-teal-400',
    tagClass: 'bg-teal-500/10 border-teal-500/20 text-teal-300',
    bar: 45,
  },
]

const values = [
  { icon: Lightbulb, title: 'Innovation with Purpose',       desc: 'Every solution is designed with a clear goal to drive real business impact.' },
  { icon: Zap,       title: 'Automation for Efficiency',     desc: 'We eliminate manual bottlenecks and accelerate operations through smart automation.' },
  { icon: Users,     title: 'Partnership for Growth',        desc: 'We work as an extension of your team, invested in your long-term success.' },
  { icon: Shield,    title: 'Transformation with Integrity', desc: 'Security, transparency, and ethical AI are at the core of everything we build.' },
]

const industries = [
  { name: 'Healthcare',           slug: 'healthcare' },
  { name: 'Real Estate',          slug: 'real-estate' },
  { name: 'Travel & Hospitality', slug: 'travel' },
  { name: 'Retail & E-commerce',  slug: 'retail' },
  { name: 'Agriculture',          slug: 'agriculture' },
]

const techMarquee = [
  'OpenAI', 'Anthropic Claude', 'LangChain', 'TensorFlow', 'PyTorch',
  'AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker',
  'React', 'Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL',
  'Apache Spark', 'Snowflake', 'dbt', 'Terraform', 'GitHub Actions',
]

/* ── COMPONENT ─────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="bg-[#020817] text-white overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040d1f] via-[#020817] to-[#020817]" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-blue-600/[0.09] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-32 right-[-100px] w-[500px] h-[500px] bg-cyan-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-100px] w-[500px] h-[400px] bg-violet-600/[0.07] rounded-full blur-[120px] pointer-events-none" />

        <NeuralNetwork />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center z-10 w-full">

          {/* Gradient-border badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <div className="p-[1px] rounded-full bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-blue-500/40">
              <span className="flex items-center gap-2 bg-[#040d1f] text-blue-300 text-sm font-medium px-5 py-2 rounded-full">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                AI-Powered Digital Solutions
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold leading-[1.05] tracking-tight text-white mb-5 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Build Smarter with{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                AI & Digital
              </span>
            </span>
            <br className="hidden sm:block" /> Technology
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            className="text-xl sm:text-2xl font-semibold text-slate-400 mb-6 min-h-[2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypewriterText />
          </motion.div>

          {/* Subline */}
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We build intelligent, scalable digital solutions across AI, data analytics,
            custom software, and automation — for every industry.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_0_35px_rgba(59,130,246,0.4)] hover:shadow-[0_0_55px_rgba(59,130,246,0.6)] text-base"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.10] hover:border-white/[0.20] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm text-base"
            >
              Book a Free Call
            </Link>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500"
          >
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-blue-500" /> No commitment required</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-blue-500" /> Free 30-min strategy call</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-blue-500" /> Results in weeks, not months</span>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {[
              { target: 10,  suffix: '+', label: 'Years of Experience', sub: 'Since 2015' },
              { target: 200, suffix: '+', label: 'Projects Delivered',  sub: 'Across 15 countries' },
              { target: 50,  suffix: '+', label: 'Happy Clients',       sub: 'From startups to enterprise' },
              { target: 15,  suffix: '+', label: 'Countries Served',    sub: 'Global delivery' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08} className="bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 p-10 text-center group">
                <div className="font-display text-5xl sm:text-6xl font-extrabold bg-gradient-to-br from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-1 tabular-nums">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-600">{stat.sub}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TECH MARQUEE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-10 overflow-hidden border-b border-white/[0.05]">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 mb-6">
          Powered by the world&apos;s leading technologies
        </p>
        <div className="relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap w-max">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span key={i} className="text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors px-2">
                {tech}
              </span>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020817] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020817] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">What We Do</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
              Our Core Services
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
              From AI to automation, we cover the full spectrum of modern digital transformation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.08}>
                <div className={`group relative bg-white/[0.03] border border-white/[0.08] ${svc.accent} rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1.5 ${svc.glow} overflow-hidden`}>
                  {/* Number watermark */}
                  <span className="absolute top-5 right-6 font-display text-6xl font-extrabold text-white/[0.04] select-none leading-none">
                    {svc.num}
                  </span>

                  <div className="flex items-start gap-5">
                    <div className={`w-12 h-12 ${svc.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <svc.icon size={22} className={svc.iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-slate-600 font-mono">{svc.num}</span>
                        <span className="text-xs font-medium text-slate-500 bg-white/[0.05] px-2.5 py-1 rounded-full border border-white/[0.07]">
                          {svc.tag}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3 leading-snug">{svc.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors text-sm"
            >
              View all services
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOW WE WORK
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 border-y border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/[0.06] rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Our Process</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              How We Work
            </h2>
            <p className="text-slate-400 max-w-md mx-auto text-lg">
              A proven three-step process that delivers results fast.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-blue-500/30" />

            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.12}>
                <div className="relative bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
                  {/* Step circle */}
                  <div className="relative w-14 h-14 mx-auto mb-6">
                    <div className="w-14 h-14 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center">
                      <step.icon size={22} className="text-blue-400" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHY US
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/[0.05] rounded-full blur-[130px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="right">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Why Us</span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
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
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={12} className="text-blue-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
              >
                Learn About Us
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="group bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(59,130,246,0.1)]">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                      <v.icon size={18} className="text-blue-400" />
                    </div>
                    <h4 className="text-white font-bold mb-2 text-sm leading-snug">{v.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Industries</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              We Serve Every Industry
            </h2>
            <p className="text-slate-400 text-lg">Click any industry to explore our tailored AI solutions.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map(({ name, slug }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={`/industries/${slug}`}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/[0.10] bg-white/[0.03] hover:bg-blue-600 hover:border-blue-500 text-slate-300 hover:text-white transition-all duration-200 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                  >
                    {name}
                    <ArrowRight size={13} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CLIENT RESULTS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[130px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Proven Results</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Outcomes Across Industries
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto text-lg leading-relaxed">
              Measurable impact from delivered projects. Client names withheld under NDA —
              references available on request.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {clientResults.map((r, i) => (
              <AnimatedSection key={r.industry} delay={i * 0.08}>
                <div className="group bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.15] rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{r.icon}</span>
                      <span className="text-white font-bold">{r.industry}</span>
                    </div>
                    <div className="text-right">
                      <div className={`font-display text-4xl font-extrabold ${r.accent} leading-none tabular-nums`}>{r.metric}</div>
                      <div className="text-xs text-slate-500 mt-1">{r.metricLabel}</div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-px bg-white/[0.06] mb-6 overflow-hidden rounded-full">
                    <motion.div
                      className={`h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                    />
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{r.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.tags.map(tag => (
                      <span key={tag} className={`text-xs border px-3 py-1 rounded-full font-medium ${r.tagClass}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-slate-500 text-sm mb-5">Want to see detailed case studies or speak with a reference client?</p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-[0_0_25px_rgba(59,130,246,0.3)]"
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

      {/* ══════════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-36 overflow-hidden">
        {/* Spotlight */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/[0.08] rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            {/* Gradient-border badge */}
            <div className="inline-block mb-8">
              <div className="p-[1px] rounded-full bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-blue-500/40">
                <span className="flex items-center gap-2 bg-[#020817] text-blue-300 text-sm font-medium px-5 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                  Ready to get started?
                </span>
              </div>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.05]">
              Let&apos;s Build Something
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            <p className="text-slate-400 mb-12 text-xl max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute strategy call. No commitment — just a conversation about your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-xl transition-all duration-200 shadow-[0_0_50px_rgba(59,130,246,0.45)] hover:shadow-[0_0_70px_rgba(59,130,246,0.65)] text-lg"
              >
                Start a Conversation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.10] hover:border-white/[0.20] text-white font-semibold px-10 py-5 rounded-xl transition-all duration-200 text-lg"
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
