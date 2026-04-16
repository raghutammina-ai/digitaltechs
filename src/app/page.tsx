'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight, ArrowUpRight,
  CheckCircle2, Users, Zap, Shield, Lightbulb, Search, Layers, Rocket,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import TechStack from '@/components/TechStack'
import NewsletterSection from '@/components/NewsletterSection'
import NeuralNetwork from '@/components/NeuralNetwork'
import TypewriterText from '@/components/TypewriterText'
import AnimatedCounter from '@/components/AnimatedCounter'
import ROICalculator from '@/components/ROICalculator'

/* ── DATA ──────────────────────────────────────────────────────────────────── */

const services = [
  {
    num: '01', icon: Brain,    title: 'AI Application Development',
    desc: 'Custom LLM apps, machine learning models, and intelligent automation tailored to your business goals.',
    color: 'text-blue-400', bg: 'bg-blue-500/10', tag: 'LLMs · ML · Automation',
    hover: 'hover:border-blue-500/30 hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)]',
  },
  {
    num: '02', icon: BarChart3, title: 'Data Analytics & Intelligence',
    desc: 'Turn raw data into clear decisions with dashboards, pipelines, and predictive analytics platforms.',
    color: 'text-cyan-400',  bg: 'bg-cyan-500/10',  tag: 'BI · Pipelines · Predictions',
    hover: 'hover:border-cyan-500/30 hover:shadow-[0_8px_40px_rgba(6,182,212,0.12)]',
  },
  {
    num: '03', icon: Code2,    title: 'Custom Software Development',
    desc: 'Full-stack web and mobile applications designed for scale, performance, and long-term maintainability.',
    color: 'text-violet-400', bg: 'bg-violet-500/10', tag: 'Web · Mobile · APIs',
    hover: 'hover:border-violet-500/30 hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]',
  },
  {
    num: '04', icon: Cloud,    title: 'Cloud & Automation Engineering',
    desc: 'Cloud-native infrastructure, CI/CD pipelines, and end-to-end workflow automation built for reliability.',
    color: 'text-emerald-400', bg: 'bg-emerald-500/10', tag: 'AWS · DevOps · CI/CD',
    hover: 'hover:border-emerald-500/30 hover:shadow-[0_8px_40px_rgba(16,185,129,0.12)]',
  },
]

const steps = [
  { n: '01', icon: Search,  title: 'Discover',  desc: 'We map your goals, data, and workflows to design the exact solution your business needs.' },
  { n: '02', icon: Layers,  title: 'Build',     desc: 'Our engineers build in fast, transparent sprints — you see progress every step of the way.' },
  { n: '03', icon: Rocket,  title: 'Scale',     desc: 'We deploy, monitor, and continuously optimise to deliver measurable ROI from day one.' },
]

const results = [
  {
    label: 'Healthcare', icon: '🏥',
    metric: '94%', sub: 'Diagnostic accuracy',
    desc: 'AI diagnostics platform processing 10,000+ medical scans daily, reducing radiologist review time by 40%.',
    tags: ['Medical Imaging AI', 'HIPAA Compliant'],
    c: 'text-rose-400', tc: 'bg-rose-500/10 border-rose-500/20 text-rose-300', bar: 94,
  },
  {
    label: 'Finance', icon: '🏦',
    metric: '3×', sub: 'Faster risk decisions',
    desc: 'Real-time trading intelligence handling 2M+ events/second with live risk exposure visibility.',
    tags: ['Real-Time Analytics', 'Trading AI'],
    c: 'text-blue-400', tc: 'bg-blue-500/10 border-blue-500/20 text-blue-300', bar: 75,
  },
  {
    label: 'Retail', icon: '🛍️',
    metric: '72%', sub: 'Support queries automated',
    desc: 'LLM customer support agent resolving 72% of tier-1 queries, cutting support costs by £380K/year.',
    tags: ['LLM Integration', 'Support Automation'],
    c: 'text-violet-400', tc: 'bg-violet-500/10 border-violet-500/20 text-violet-300', bar: 72,
  },
  {
    label: 'Logistics', icon: '🚚',
    metric: '45%', sub: 'Cost reduction',
    desc: 'AWS microservices migration with zero downtime. Route optimisation AI cut fuel costs by 25%.',
    tags: ['Cloud Migration', 'Route AI'],
    c: 'text-emerald-400', tc: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300', bar: 45,
  },
]

const values = [
  { icon: Lightbulb, title: 'Innovation with Purpose',       desc: 'Every solution is designed to drive real, measurable business impact.' },
  { icon: Zap,       title: 'Automation for Efficiency',     desc: 'We eliminate bottlenecks and accelerate operations through smart automation.' },
  { icon: Users,     title: 'Partnership for Growth',        desc: 'We work as an extension of your team, invested in your long-term success.' },
  { icon: Shield,    title: 'Transformation with Integrity', desc: 'Security, transparency, and ethical AI at the core of everything we build.' },
]

const industries = [
  { name: 'Healthcare',           slug: 'healthcare'  },
  { name: 'Real Estate',          slug: 'real-estate' },
  { name: 'Travel & Hospitality', slug: 'travel'      },
  { name: 'Retail & E-commerce',  slug: 'retail'      },
  { name: 'Agriculture',          slug: 'agriculture' },
]

const marqueeItems = [
  'OpenAI GPT-4', 'Anthropic Claude', 'LangChain', 'TensorFlow', 'PyTorch',
  'AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Terraform',
  'React / Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Snowflake',
]

/* ── PAGE ──────────────────────────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
})

export default function HomePage() {
  return (
    <div className="bg-[#09090b] text-white">

      {/* ═══════════════════════════════════ HERO ══════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

        {/* Background layers */}
        <div className="absolute inset-0 bg-[#09090b]" />
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Spotlight */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none z-10" />

        <NeuralNetwork />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">

          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm text-zinc-300 text-xs font-semibold px-4 py-2 rounded-full tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              AI · Data · Software · Cloud
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.08)}
            className="text-6xl sm:text-7xl lg:text-[82px] font-bold leading-[1.04] tracking-[-0.03em] text-white mb-7 max-w-4xl mx-auto"
          >
            The AI Partner<br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Built for Results
            </span>
          </motion.h1>

          <motion.div {...fadeUp(0.14)} className="text-xl text-zinc-400 mb-5 min-h-[1.75rem] font-medium">
            <TypewriterText />
          </motion.div>

          <motion.p {...fadeUp(0.18)}
            className="text-base sm:text-lg text-zinc-500 max-w-xl mx-auto mb-11 leading-relaxed"
          >
            We build intelligent AI applications, data systems, and scalable software — delivering measurable outcomes from day one.
          </motion.p>

          <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <Link href="/services"
              className="group inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-xl hover:bg-zinc-100 transition-all duration-200 text-sm shadow-lg"
            >
              Explore Services
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 text-zinc-200 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm backdrop-blur-sm"
            >
              Book Free Call
            </Link>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-600">
            {['No commitment required', 'Free 30-min strategy call', 'Delivery in weeks not months'].map((t, i) => (
              <span key={i} className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-zinc-500" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════ MARQUEE ══════════════════════════════ */}
      <div className="border-y border-white/[0.07] py-5 overflow-hidden">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-semibold mb-5">
          Powered by industry-leading technologies
        </p>
        <div className="relative">
          <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
            {[...marqueeItems, ...marqueeItems].map((t, i) => (
              <span key={i} className="text-sm font-medium text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">{t}</span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* ═══════════════════════════════════ STATS ═════════════════════════════ */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { n: 10,  s: '+', l: 'Years Experience'   },
            { n: 200, s: '+', l: 'Projects Delivered'  },
            { n: 50,  s: '+', l: 'Happy Clients'       },
            { n: 15,  s: '+', l: 'Countries Served'    },
          ].map((stat, i) => (
            <AnimatedSection key={stat.l} delay={i * 0.07}>
              <div className="text-5xl sm:text-6xl font-bold text-white mb-2 tabular-nums tracking-tight">
                <AnimatedCounter target={stat.n} suffix={stat.s} />
              </div>
              <div className="text-sm text-zinc-500 font-medium">{stat.l}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════ SERVICES ══════════════════════════════ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="mb-16 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">What We Do</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              Services built for scale
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              End-to-end delivery across AI, data, software, and cloud engineering.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.07}>
                <div className={`group relative border border-white/[0.08] ${s.hover} rounded-2xl p-7 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 h-full`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center`}>
                      <s.icon size={20} className={s.color} />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-700 font-mono tracking-widest">{s.num}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 leading-snug tracking-tight">{s.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <span className="inline-block text-[11px] font-semibold text-zinc-600 bg-white/5 border border-white/[0.07] px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10">
            <Link href="/services"
              className="group inline-flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm font-semibold transition-colors duration-200"
            >
              See all services
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════ HOW WE WORK ════════════════════════════ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">Process</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">How it works</h2>
            <p className="text-zinc-500 text-lg max-w-md mx-auto">Three steps from brief to measurable result.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 0.1}>
                <div className="relative border border-white/[0.08] hover:border-white/[0.14] rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <step.icon size={18} className="text-blue-400" />
                    </div>
                    <span className="text-3xl font-bold text-white/[0.06] font-mono tracking-tight">{step.n}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-3 z-10">
                      <ArrowRight size={16} className="text-white/10" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ WHY US ═════════════════════════════════ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <AnimatedSection direction="right" className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">Why Us</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Four principles.<br />Every engagement.
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-10">
                We bring deep technical expertise and a client-first mindset to every project — from first call to post-launch.
              </p>
              <ul className="space-y-3 mb-10">
                {['End-to-end AI & software delivery', 'Cross-industry domain expertise', 'Agile & fully transparent process', 'Ongoing support & optimisation'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about"
                className="group inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-zinc-100 transition-all duration-200 text-sm shadow-md"
              >
                About Us <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-4">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.08}>
                  <div className="group flex items-start gap-5 border border-white/[0.07] hover:border-white/[0.13] rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                    <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <v.icon size={17} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1.5 tracking-tight">{v.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ INDUSTRIES ═══════════════════════════════ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">Industries</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Every industry. One partner.
            </h2>
            <p className="text-zinc-500 text-lg">Click any industry to explore our tailored solutions.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map(({ name, slug }, i) => (
                <motion.div key={name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link href={`/industries/${slug}`}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-white/[0.09] bg-white/[0.03] hover:bg-white hover:text-black hover:border-white text-zinc-300 transition-all duration-200"
                  >
                    {name}
                    <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════ RESULTS ═══════════════════════════════ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">Client Results</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Outcomes that speak
            </h2>
            <p className="text-zinc-500 text-lg max-w-md mx-auto">
              Real results from delivered projects. NDA protected — references on request.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((r, i) => (
              <AnimatedSection key={r.label} delay={i * 0.07}>
                <div className="group border border-white/[0.08] hover:border-white/[0.14] rounded-2xl p-7 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{r.icon}</span>
                      <span className="text-white font-semibold text-sm">{r.label}</span>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${r.c} tabular-nums leading-none`}>{r.metric}</div>
                      <div className="text-[11px] text-zinc-600 mt-0.5">{r.sub}</div>
                    </div>
                  </div>

                  {/* Bar */}
                  <div className="h-[2px] bg-white/[0.06] rounded-full mb-5 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
                    />
                  </div>

                  <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-5">{r.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.tags.map(t => (
                      <span key={t} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${r.tc}`}>{t}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <p className="text-zinc-600 text-sm mb-4">Want to see case studies or speak with a reference?</p>
            <Link href="/contact"
              className="group inline-flex items-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 text-zinc-200 font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200"
            >
              Request References <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ROI / Tech / Newsletter */}
      <ROICalculator />
      <TechStack />
      <NewsletterSection />

      {/* ════════════════════════════════ CTA ══════════════════════════════════ */}
      <section className="relative py-36 border-t border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px]"
            style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 mb-6">Get Started</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-[-0.03em] leading-[1.04] mb-6">
              Ready to build<br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                something great?
              </span>
            </h2>
            <p className="text-zinc-500 text-lg mb-12 max-w-sm mx-auto leading-relaxed">
              Book a free 30-minute call. No commitment — just an honest conversation about your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-9 py-4 rounded-xl hover:bg-zinc-100 transition-all duration-200 text-base shadow-[0_0_50px_rgba(255,255,255,0.15)]"
              >
                Start a Conversation
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 text-zinc-200 font-semibold px-9 py-4 rounded-xl transition-all duration-200 text-base"
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
