'use client'
// pipeline-test: v1.0.1

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight, CheckCircle2,
  Users, Zap, Shield, Lightbulb, Lock, Cpu, Sparkles, ExternalLink,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import TechStack from '@/components/TechStack'
import NewsletterSection from '@/components/NewsletterSection'
import NeuralNetwork from '@/components/NeuralNetwork'
import TypewriterText from '@/components/TypewriterText'
import AnimatedCounter from '@/components/AnimatedCounter'
import ROICalculator from '@/components/ROICalculator'

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: Brain,
    title: 'AI Application Development',
    desc: 'Custom LLM-powered apps, machine learning pipelines, and intelligent automation — built for your exact business context.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    accent: 'group-hover:border-t-blue-500',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Intelligence',
    desc: 'Turn raw data into strategic advantage with real-time dashboards, predictive models, and AI-driven insight platforms.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    accent: 'group-hover:border-t-cyan-500',
  },
  {
    icon: Code2,
    title: 'Digital Product Engineering',
    desc: 'From concept to production — resilient full-stack web and mobile products engineered for scale and longevity.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    accent: 'group-hover:border-t-indigo-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Strategy & Migration',
    desc: 'Modernise your infrastructure with secure, cost-optimised cloud architecture and fully automated DevOps pipelines.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    accent: 'group-hover:border-t-teal-500',
  },
  {
    icon: Lock,
    title: 'Cybersecurity Solutions',
    desc: 'Enterprise-grade protection across your digital ecosystem — from threat detection to compliance and incident response.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    accent: 'group-hover:border-t-rose-500',
  },
  {
    icon: Cpu,
    title: 'Intelligent QA & Testing',
    desc: 'Ship with confidence. AI-driven test automation and smart QA frameworks that catch issues before your users do.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    accent: 'group-hover:border-t-violet-500',
  },
]

const values = [
  { icon: Lightbulb, title: 'Innovation with Purpose',       desc: 'Every solution targets a real outcome — no tech for the sake of tech.' },
  { icon: Zap,       title: 'Automation for Efficiency',     desc: 'We eliminate bottlenecks and accelerate operations with smart automation.' },
  { icon: Users,     title: 'Partnership for Growth',        desc: 'We embed as an extension of your team — your success is our KPI.' },
  { icon: Shield,    title: 'Transformation with Integrity', desc: 'Ethical AI, full transparency, and security baked into everything we build.' },
]

const processSteps = [
  { step: '01', title: 'Discover',  desc: 'Map your goals, constraints, and existing stack to define the right approach.' },
  { step: '02', title: 'Design',    desc: 'Architect a scalable, secure solution with performance built in from day one.' },
  { step: '03', title: 'Build',     desc: 'Agile sprints with full transparency, weekly demos, and continuous feedback.' },
  { step: '04', title: 'Deploy',    desc: 'Zero-downtime launch with CI/CD pipelines and production hardening.' },
  { step: '05', title: 'Optimise',  desc: 'Continuous monitoring, tuning, and feature evolution after go-live.' },
]

const featuredWork = [
  {
    title: 'AI-Powered Diagnostics Platform',
    industry: 'Healthcare',
    desc: 'Computer vision system assisting radiologists in detecting anomalies with 94% accuracy across 10,000+ daily scans.',
    tags: ['Computer Vision', 'TensorFlow', 'HIPAA'],
    metric: '94%',
    metricLabel: 'Diagnostic accuracy',
    color: 'bg-blue-600',
  },
  {
    title: 'Real-Time Trading Intelligence',
    industry: 'Finance & Banking',
    desc: 'End-to-end data pipeline delivering live market insights to portfolio managers — processing 2M+ events per second.',
    tags: ['Apache Kafka', 'Spark', 'BI Dashboard'],
    metric: '2M+',
    metricLabel: 'Events / second',
    color: 'bg-cyan-600',
  },
  {
    title: 'LLM Customer Support Agent',
    industry: 'Retail',
    desc: 'GPT-based support agent integrated with CRM, resolving 72% of queries autonomously and saving £380K/year in costs.',
    tags: ['LLM', 'RAG', 'CRM Integration'],
    metric: '72%',
    metricLabel: 'Queries automated',
    color: 'bg-indigo-600',
  },
]

const scrollIndustries = [
  'Healthcare', 'Finance & Banking', 'Retail & E-commerce', 'Manufacturing',
  'Education', 'Logistics', 'Real Estate', 'Government', 'Telecom', 'Agriculture',
  'Legal & Compliance', 'Travel & Hospitality', 'Insurance', 'Pharma',
]

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  const doubled = [...scrollIndustries, ...scrollIndustries]

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen hero-gradient grid-overlay flex items-center overflow-hidden">
        <NeuralNetwork />

        {/* Ambient blobs */}
        <div className="absolute top-24 right-16 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-24 left-16 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-5 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
              <Sparkles size={14} className="text-cyan-300" />
              AI-Powered Digital Transformation
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-5 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Intelligent Digital Solutions{' '}
            <span className="block text-cyan-300">
              for the AI Era
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            className="text-xl sm:text-2xl font-semibold mb-6 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <TypewriterText />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            We specialise in AI, cloud infrastructure, data analytics, and automation — delivering
            measurable results for industries like Real Estate, Healthcare, Travel &amp; Hospitality,
            Retail, and Agriculture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors shadow-xl text-base"
            >
              Get a Free Quote <ArrowRight size={17} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm text-base"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/55 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {[
              '6,500+ Satisfied Clients',
              '600+ Projects Delivered',
              '250+ Skilled Experts',
              '10+ Years Experience',
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-cyan-400" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ── Scrolling Industry Marquee ─────────────────────────────────────────── */}
      <section className="bg-slate-900 py-5 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-10 whitespace-nowrap"
        >
          {doubled.map((industry, i) => (
            <span key={i} className="flex items-center gap-3 text-slate-400 text-sm font-medium">
              <span className="w-1 h-1 bg-cyan-500 rounded-full flex-shrink-0" />
              {industry}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { target: 6561, suffix: '+', label: 'Satisfied Clients',   sub: 'Across 15+ countries' },
              { target: 600,  suffix: '+', label: 'Projects Delivered',  sub: 'End-to-end delivery' },
              { target: 250,  suffix: '+', label: 'Skilled Experts',     sub: 'In-house specialists' },
              { target: 10,   suffix: '+', label: 'Years of Experience', sub: 'Since 2014' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl p-7 text-center hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-1">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-800 font-semibold text-sm mt-1">{stat.label}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{stat.sub}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 bg-blue-50 rounded-full">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Core Services
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
              From AI to cloud to cybersecurity — full-spectrum digital transformation,
              delivered with precision.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.07}>
                <div className={`group bg-white border-t-4 border-t-transparent border border-slate-200 ${svc.accent} rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5`}>
                  <div className={`w-11 h-11 ${svc.bg} ${svc.color} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <svc.icon size={22} />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-2 leading-snug">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <div className={`inline-flex items-center gap-1 mt-5 text-sm font-semibold ${svc.color} opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300`}>
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-colors hover:gap-3 shadow-md"
            >
              View All Services <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}
            <AnimatedSection direction="right">
              <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 bg-blue-50 rounded-full">Why Choose Us</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
                A Technology Partner<br />You Can Trust
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed text-base">
                With 10+ years delivering intelligent digital solutions globally, we combine
                deep domain expertise, a client-first mindset, and a relentless focus on
                measurable outcomes — across every engagement.
              </p>
              <ul className="space-y-3.5 mb-10">
                {[
                  'End-to-end AI & software delivery',
                  'Cross-industry domain expertise',
                  'Agile, transparent development process',
                  'Delivery centres in key global regions',
                  'Recognised by leading technology alliances',
                  'Ongoing support & continuous optimisation',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle2 size={17} className="text-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="btn-glow inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
              >
                Learn About Us <ArrowRight size={17} />
              </Link>
            </AnimatedSection>

            {/* Right — 2×2 value cards */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <v.icon size={19} />
                    </div>
                    <h4 className="text-slate-900 font-bold text-sm mb-2 leading-snug">{v.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Work ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 bg-blue-50 rounded-full">Our Work</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Built for Real Impact
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              A sample of delivered projects. Client names withheld under NDA — references available on request.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWork.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  {/* Colour bar */}
                  <div className={`${project.color} h-1.5 w-full`} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Metric */}
                    <div className="flex items-start justify-between mb-5">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                        {project.industry}
                      </span>
                      <div className="text-right">
                        <div className="text-2xl font-extrabold gradient-text leading-none">{project.metric}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{project.metricLabel}</div>
                      </div>
                    </div>

                    <h3 className="text-slate-900 font-bold text-base mb-2 leading-snug">{project.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{project.desc}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-slate-50 border border-slate-200 text-slate-500 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-7 py-3.5 rounded-xl hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
            >
              View Full Portfolio <ExternalLink size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How We Work ───────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 dots-pattern py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 bg-blue-50 rounded-full">Our Process</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              How We Work
            </h2>
            <p className="text-slate-500 max-w-md mx-auto text-base">
              A proven, structured approach that delivers the right outcome — on time, every time.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.09}>
                <div className="group bg-white border border-slate-200 rounded-2xl p-6 h-full hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <span className="text-5xl font-black text-slate-100 group-hover:text-blue-100 transition-colors block mb-3 leading-none">
                    {s.step}
                  </span>
                  <h4 className="text-slate-900 font-bold mb-2">{s.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────────────────────── */}
      <section id="industries" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 bg-blue-50 rounded-full">Industries</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
              Empowering Every Sector
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Deep domain expertise across industries — click to explore tailored solutions.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Healthcare',            slug: 'healthcare',    live: true },
                { name: 'Finance & Banking',      slug: 'finance',       live: true },
                { name: 'Retail & E-commerce',   slug: 'retail',        live: true },
                { name: 'Manufacturing',          slug: 'manufacturing', live: true },
                { name: 'Education',              slug: 'education',     live: true },
                { name: 'Logistics',              slug: 'logistics',     live: true },
                { name: 'Real Estate',            slug: 'real-estate',   live: false },
                { name: 'Government',             slug: 'government',    live: false },
                { name: 'Pharma & Life Sciences', slug: 'pharma',        live: false },
                { name: 'Energy & Utilities',     slug: 'energy',        live: false },
                { name: 'Telecom',                slug: 'telecom',       live: false },
                { name: 'Agriculture',            slug: 'agriculture',   live: false },
                { name: 'Legal & Compliance',     slug: 'legal',         live: false },
                { name: 'Media & Entertainment',  slug: 'media',         live: false },
                { name: 'Insurance',              slug: 'insurance',     live: false },
                { name: 'Travel & Hospitality',   slug: 'travel',        live: false },
              ].map(({ name, slug, live }) => (
                <Link
                  key={name}
                  href={`/industries/${slug}`}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    live
                      ? 'bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:-translate-y-0.5'
                      : 'bg-slate-50 border border-slate-200 text-slate-500 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-700'
                  }`}
                >
                  {name}{live ? ' →' : ''}
                </Link>
              ))}
            </div>
            <p className="text-center text-slate-400 text-xs mt-5">
              6 detailed industry hubs live · 10 more launching soon
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ROI Calculator ────────────────────────────────────────────────────── */}
      <ROICalculator />

      {/* ── Tech Stack ────────────────────────────────────────────────────────── */}
      <TechStack />

      {/* ── Newsletter ────────────────────────────────────────────────────────── */}
      <NewsletterSection />

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="hero-gradient grid-overlay py-28 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            {/* Glassmorphism card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 sm:p-14 shadow-2xl">
              <span className="inline-flex items-center gap-2 bg-white/15 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                Ready to get started?
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Transform Your Business<br />with AI
              </h2>
              <p className="text-blue-100/80 mb-10 text-base max-w-xl mx-auto leading-relaxed">
                Let&apos;s discuss how we can help you build smarter, faster, and stronger.
                Get a free consultation with our expert team — no commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors shadow-xl text-base"
                >
                  Get a Free Quote <ArrowRight size={17} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all text-base"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
