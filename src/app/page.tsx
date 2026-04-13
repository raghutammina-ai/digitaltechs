'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain, BarChart3, Code2, Cloud, Lock, Cpu,
  ArrowRight, CheckCircle2, Zap, Shield, Users, Lightbulb,
  Sparkles, Globe, TrendingUp,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import NeuralNetwork from '@/components/NeuralNetwork'
import TypewriterText from '@/components/TypewriterText'
import ROICalculator from '@/components/ROICalculator'
import TechStack from '@/components/TechStack'

/* ─── Data ────────────────────────────────────────────────────────────────── */

const features = [
  {
    icon: Brain,
    title: 'AI-First Engineering',
    desc: 'We embed AI at the core of every product — not as a layer on top, but as the foundation. From LLMs to computer vision.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Zap,
    title: 'Ship at Speed',
    desc: 'Agile sprints, weekly demos, and CI/CD-ready deliverables. You go from idea to production in weeks, not quarters.',
    gradient: 'from-violet-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'GDPR, HIPAA, and SOC 2-aligned by default. Every project is built with security and compliance baked in from day one.',
    gradient: 'from-cyan-500 to-teal-400',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    desc: 'Teams across time zones, delivery in 15+ countries. We operate wherever your business needs us to.',
    gradient: 'from-rose-500 to-orange-400',
  },
]

const services = [
  {
    icon: Brain,
    title: 'AI Application Development',
    desc: 'Custom LLMs, RAG pipelines, intelligent agents, computer vision, and MLOps — end to end.',
    color: 'text-blue-400',
    border: 'hover:border-blue-500/50',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Intelligence',
    desc: 'Real-time dashboards, predictive models, and data pipelines that turn raw signals into decisions.',
    color: 'text-cyan-400',
    border: 'hover:border-cyan-500/50',
  },
  {
    icon: Code2,
    title: 'Digital Product Engineering',
    desc: 'Full-stack web and mobile products built for scale, performance, and long-term maintainability.',
    color: 'text-indigo-400',
    border: 'hover:border-indigo-500/50',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'AWS, Azure, GCP architecture, Kubernetes, IaC with Terraform, and automated CI/CD pipelines.',
    color: 'text-teal-400',
    border: 'hover:border-teal-500/50',
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    desc: 'End-to-end protection — threat detection, compliance audits, penetration testing, and secure SDLC.',
    color: 'text-rose-400',
    border: 'hover:border-rose-500/50',
  },
  {
    icon: Cpu,
    title: 'Intelligent QA & Testing',
    desc: 'AI-driven test automation, regression suites, and performance testing that keep quality high at every release.',
    color: 'text-violet-400',
    border: 'hover:border-violet-500/50',
  },
]

const processSteps = [
  { step: '01', title: 'Discover', desc: 'Map your goals, constraints, and existing stack.' },
  { step: '02', title: 'Design',   desc: 'Architect the solution with security and scale in mind.' },
  { step: '03', title: 'Build',    desc: 'Agile sprints with weekly demos and real transparency.' },
  { step: '04', title: 'Deploy',   desc: 'Zero-downtime launch with CI/CD and production hardening.' },
  { step: '05', title: 'Optimise', desc: 'Continuous monitoring, tuning, and feature evolution.' },
]

const stats = [
  { icon: Users,      target: 6561, suffix: '+', label: 'Clients Served' },
  { icon: TrendingUp, target: 600,  suffix: '+', label: 'Projects Delivered' },
  { icon: Globe,      target: 15,   suffix: '+', label: 'Countries' },
  { icon: Sparkles,   target: 10,   suffix: '+', label: 'Years Experience' },
]

const industries = [
  { name: 'Healthcare',            slug: 'healthcare',    live: true  },
  { name: 'Finance & Banking',     slug: 'finance',       live: true  },
  { name: 'Retail & E-commerce',   slug: 'retail',        live: true  },
  { name: 'Manufacturing',         slug: 'manufacturing', live: true  },
  { name: 'Education',             slug: 'education',     live: true  },
  { name: 'Logistics',             slug: 'logistics',     live: true  },
  { name: 'Real Estate',           slug: 'real-estate',   live: false },
  { name: 'Government',            slug: 'government',    live: false },
  { name: 'Pharma & Life Sciences',slug: 'pharma',        live: false },
  { name: 'Energy & Utilities',    slug: 'energy',        live: false },
  { name: 'Telecom',               slug: 'telecom',       live: false },
  { name: 'Agriculture',           slug: 'agriculture',   live: false },
  { name: 'Legal & Compliance',    slug: 'legal',         live: false },
  { name: 'Media & Entertainment', slug: 'media',         live: false },
  { name: 'Insurance',             slug: 'insurance',     live: false },
  { name: 'Travel & Hospitality',  slug: 'travel',        live: false },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="bg-[#030712] text-white overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[80px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[80px]" />
        </div>

        {/* Neural network canvas */}
        <NeuralNetwork />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 text-sm px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            AI & Digital Transformation Specialists
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
          >
            <span className="text-white">Build Smarter with</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              AI & Digital Solutions
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-slate-300 mb-5 h-8"
          >
            <TypewriterText />
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We help businesses automate workflows, make better decisions, and scale faster
            through custom AI systems, software engineering, and cloud infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm"
          >
            {['10+ Years Experience', '600+ Projects Delivered', 'Global Delivery', 'GDPR & HIPAA Compliant'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                  <s.icon size={20} className="text-blue-400 mx-auto mb-3 opacity-80" />
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent tabular-nums mb-1">
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block">Why DTP</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
              Built for the way you work
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Everything we build is designed for production — secure, scalable, and shipped fast.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <div className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 h-full hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 rounded-2xl`} />
                  <div className={`relative w-10 h-10 bg-gradient-to-br ${f.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <f.icon size={20} className="text-white" />
                  </div>
                  <h3 className="relative text-white font-semibold text-base mb-2">{f.title}</h3>
                  <p className="relative text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
              Our Core Services
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              From AI to cloud to security — full-spectrum digital transformation under one roof.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.07}>
                <div className={`group bg-white/[0.03] border border-white/[0.07] ${svc.border} rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1`}>
                  <svc.icon size={22} className={`${svc.color} mb-4`} />
                  <h3 className="text-white font-semibold text-base mb-2">{svc.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1.5 mt-5 text-sm font-medium ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How We Work ──────────────────────────────────────────────────── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block">Our Process</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">How We Work</h2>
            <p className="text-slate-400 text-lg max-w-lg mx-auto">
              A structured five-step process that delivers on time, every time.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.08}>
                <div className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 h-full hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                  <span className="block text-4xl font-black text-white/[0.06] group-hover:text-blue-500/20 transition-colors mb-3">
                    {s.step}
                  </span>
                  <h4 className="text-white font-semibold mb-2">{s.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────────────────── */}
      <section id="industries" className="py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block">Industries</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
              Across Every Sector
            </h2>
            <p className="text-slate-400 text-lg max-w-lg mx-auto">
              Deep domain expertise across 16 industries. Click any to explore.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map(({ name, slug, live }) => (
                <Link
                  key={name}
                  href={`/industries/${slug}`}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    live
                      ? 'bg-blue-600/15 border border-blue-500/30 text-blue-300 hover:bg-blue-600/25 hover:border-blue-400/50 hover:text-blue-200'
                      : 'bg-white/[0.03] border border-white/[0.08] text-slate-500 hover:bg-white/[0.06] hover:text-slate-400 hover:border-white/[0.15]'
                  }`}
                >
                  {name}{live ? ' →' : ''}
                </Link>
              ))}
            </div>
            <p className="text-center text-slate-600 text-xs mt-5">
              6 detailed industry hubs live · 10 more launching soon
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ROI Calculator ───────────────────────────────────────────────── */}
      <ROICalculator />

      {/* ── Tech Stack ───────────────────────────────────────────────────── */}
      <TechStack />

      {/* ── Why Choose Us ────────────────────────────────────────────────── */}
      <section className="py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                A partner that delivers,<br />not just promises
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                10+ years of hands-on delivery across AI, cloud, and software — with a client-first approach
                and full transparency at every stage.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'End-to-end delivery — from strategy to production',
                  'Agile process with weekly demos and clear communication',
                  'Deep expertise across AI, cloud, data & software engineering',
                  'Post-launch support, monitoring & continuous optimisation',
                  'Security and compliance built in — not bolted on',
                  'IP ownership transferred to you on full payment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              >
                Learn About Us <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, title: 'Innovation with Purpose',       desc: 'Every solution is designed around real, measurable business outcomes.' },
                { icon: Zap,       title: 'Automation for Efficiency',     desc: 'We eliminate bottlenecks and accelerate operations through intelligent automation.' },
                { icon: Users,     title: 'Partnership for Growth',        desc: 'We work as an embedded extension of your team — invested in your success.' },
                { icon: Shield,    title: 'Transformation with Integrity', desc: 'Security-first, ethical AI, and full transparency at every engagement.' },
              ].map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 h-full">
                    <div className="w-9 h-9 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-4">
                      <v.icon size={18} />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-2">{v.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-400 text-sm px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              Ready to get started?
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
              Transform your business<br />with AI today
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Book a free 30-minute strategy call. No commitment —
              just an honest conversation about how we can help you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
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
