'use client';
// pipeline-test: v1.0.1

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight, CheckCircle2,
  Users, Zap, Shield, Lightbulb, Lock, Cpu, Sparkles,
  ExternalLink, Star, Phone, Quote,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import TechStack from '@/components/TechStack'
import NewsletterSection from '@/components/NewsletterSection'
import NeuralNetwork from '@/components/NeuralNetwork'
import TypewriterText from '@/components/TypewriterText'
import AnimatedCounter from '@/components/AnimatedCounter'
import ROICalculator from '@/components/ROICalculator'

/* ─── Data ───────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: Brain,
    title: 'AI Application Development',
    desc: 'Custom LLMs, intelligent automation, and AI-powered apps that make your workflows faster and smarter.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    topBorder: 'group-hover:border-t-blue-500',
    iconHover: 'group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Intelligence',
    desc: 'Real-time dashboards and predictive models that turn your data into decisions that drive revenue.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    topBorder: 'group-hover:border-t-cyan-500',
    iconHover: 'group-hover:bg-cyan-600 group-hover:text-white',
  },
  {
    icon: Code2,
    title: 'Digital Product Engineering',
    desc: 'Scalable, production-grade web and mobile products — designed for growth, built to last.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    topBorder: 'group-hover:border-t-indigo-500',
    iconHover: 'group-hover:bg-indigo-600 group-hover:text-white',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps Engineering',
    desc: 'Cut infrastructure costs and release faster with modern cloud architecture and automated pipelines.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    topBorder: 'group-hover:border-t-teal-500',
    iconHover: 'group-hover:bg-teal-600 group-hover:text-white',
  },
  {
    icon: Lock,
    title: 'Cybersecurity Solutions',
    desc: 'Proactive threat detection, compliance management, and end-to-end protection for your digital assets.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    topBorder: 'group-hover:border-t-rose-500',
    iconHover: 'group-hover:bg-rose-600 group-hover:text-white',
  },
  {
    icon: Cpu,
    title: 'Intelligent QA & Testing',
    desc: 'AI-powered test automation that catches bugs before users do — so you ship with confidence.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    topBorder: 'group-hover:border-t-violet-500',
    iconHover: 'group-hover:bg-violet-600 group-hover:text-white',
  },
]

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation with Purpose',
    desc: 'We build solutions that solve real problems — no tech for its own sake.',
  },
  {
    icon: Zap,
    title: 'Automation for Efficiency',
    desc: 'Eliminate bottlenecks and accelerate every operation with intelligent automation.',
  },
  {
    icon: Users,
    title: 'Partnership for Growth',
    desc: 'We embed as part of your team — your goals are our goals.',
  },
  {
    icon: Shield,
    title: 'Transformation with Integrity',
    desc: 'Ethical AI, full transparency, security-first — always.',
  },
]

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'CTO, MedCore Health',
    avatar: 'SC',
    rating: 5,
    text: 'Digital Tech Prosperity built our AI diagnostics tool on time and within budget. The computer vision accuracy exceeded our clinical benchmarks. Truly impressive delivery from a highly professional team.',
  },
  {
    name: 'James Mitchell',
    role: 'Head of Digital, RetailFlow',
    avatar: 'JM',
    rating: 5,
    text: 'The LLM-powered support agent they built handles 70%+ of our customer queries automatically. Our support costs dropped significantly in Q1. I\'d recommend them without hesitation.',
  },
  {
    name: 'Mark Rodriguez',
    role: 'COO, Apex Logistics',
    avatar: 'MR',
    rating: 5,
    text: 'Flawless cloud migration — zero downtime, reduced our infrastructure costs by 40%. Their DevOps team knows exactly what they\'re doing. We\'ve since extended the engagement.',
  },
]

const featuredWork = [
  {
    title: 'AI Diagnostics Platform',
    industry: 'Healthcare',
    desc: 'Computer vision system helping radiologists detect anomalies with 94% accuracy across thousands of daily scans.',
    tags: ['Computer Vision', 'TensorFlow', 'HIPAA'],
    metric: '94%',
    metricLabel: 'Diagnostic accuracy',
    color: 'bg-blue-600',
  },
  {
    title: 'Real-Time Trading Intelligence',
    industry: 'Finance',
    desc: 'End-to-end data pipeline delivering live market insights to portfolio managers, processing millions of events per second.',
    tags: ['Apache Kafka', 'Spark', 'BI Dashboard'],
    metric: '3×',
    metricLabel: 'Faster decisions',
    color: 'bg-cyan-600',
  },
  {
    title: 'LLM Customer Support Agent',
    industry: 'Retail',
    desc: 'GPT-based support agent integrated with CRM — autonomously resolving the majority of customer queries, saving hundreds of thousands annually.',
    tags: ['LLM', 'RAG', 'CRM Integration'],
    metric: '72%',
    metricLabel: 'Queries automated',
    color: 'bg-indigo-600',
  },
]

const processSteps = [
  { step: '01', title: 'Discover',  desc: 'Map your goals, constraints, and stack to define the right approach.' },
  { step: '02', title: 'Design',    desc: 'Architect a scalable, secure solution with performance from day one.' },
  { step: '03', title: 'Build',     desc: 'Agile sprints with transparency, weekly demos, and continuous feedback.' },
  { step: '04', title: 'Deploy',    desc: 'Zero-downtime launch with CI/CD pipelines and production hardening.' },
  { step: '05', title: 'Optimise',  desc: 'Continuous monitoring, tuning, and feature evolution post-launch.' },
]

const scrollIndustries = [
  'Healthcare', 'Finance & Banking', 'Retail & E-commerce', 'Manufacturing',
  'Education', 'Logistics', 'Real Estate', 'Government', 'Telecom', 'Agriculture',
  'Legal & Compliance', 'Travel & Hospitality', 'Insurance', 'Pharma',
]

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function HomePage() {
  const [showSticky, setShowSticky] = useState(false)
  const doubled = [...scrollIndustries, ...scrollIndustries]

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen hero-gradient grid-overlay flex items-center overflow-hidden">
        <NeuralNetwork />

        {/* Ambient blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-24 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-5 py-2 rounded-full backdrop-blur-md border border-white/20">
              <Sparkles size={13} className="text-cyan-300" />
              AI &amp; Digital Transformation Specialists
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Transform Your Business{' '}
            <span className="text-cyan-300 block sm:inline">
              with AI &amp; Digital Solutions
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            className="text-xl sm:text-2xl font-semibold mb-5 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypewriterText />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg text-blue-100/85 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            We automate manual processes, cut operational costs, and help businesses scale faster
            with intelligent AI systems, custom software, and cloud engineering.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl text-base hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone size={16} />
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm text-base"
            >
              View Services <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {[
              '10+ Years Experience',
              '50+ Clients Served',
              '200+ Projects Delivered',
              '15+ Countries',
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-white/55 text-sm">
                <CheckCircle2 size={13} className="text-cyan-400 flex-shrink-0" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ── Industry Marquee ─────────────────────────────────────────────── */}
      <section className="bg-slate-900 border-y border-slate-800 py-4 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-10 whitespace-nowrap will-change-transform"
        >
          {doubled.map((industry, i) => (
            <span key={i} className="flex items-center gap-2.5 text-slate-400 text-sm font-medium flex-shrink-0">
              <span className="w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0" />
              {industry}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { target: 10,  suffix: '+', label: 'Years Experience',    sub: 'Since 2014' },
              { target: 200, suffix: '+', label: 'Projects Delivered',  sub: 'Across all services' },
              { target: 50,  suffix: '+', label: 'Clients Served',      sub: 'In 15+ countries' },
              { target: 98,  suffix: '%', label: 'Client Satisfaction', sub: 'Based on feedback' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-1.5 tabular-nums">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-800 font-semibold text-sm">{stat.label}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{stat.sub}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Services Built for Impact
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
              From AI to cloud to security — everything you need to modernise, automate, and grow.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.07}>
                <div className={`group bg-white border-t-4 border-t-transparent ${svc.topBorder} border border-slate-200 rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-default`}>
                  <div className={`w-11 h-11 ${svc.bg} ${svc.color} ${svc.iconHover} rounded-xl flex items-center justify-center mb-5 transition-all duration-300`}>
                    <svc.icon size={21} />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-2 leading-snug">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1.5 mt-5 text-sm font-semibold ${svc.color} opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300`}
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-200 hover:shadow-blue-300"
            >
              Explore All Services <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Mid CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                Ready to grow your business with AI?
              </h3>
              <p className="text-blue-100/80 text-base">
                Book a free 30-minute strategy call — no commitment required.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-glow flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-xl whitespace-nowrap"
            >
              Book Free Call <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left text */}
            <AnimatedSection direction="right">
              <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                Why Choose Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
                A Partner That Delivers,<br className="hidden sm:block" /> Not Just Promises
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                We combine 10+ years of domain expertise with a hands-on, client-first approach.
                You get a team that&apos;s as invested in your outcomes as you are.
              </p>
              <ul className="space-y-3.5 mb-10">
                {[
                  'End-to-end delivery — from strategy to production',
                  'Deep expertise across AI, cloud, data & software',
                  'Agile process with weekly demos and full transparency',
                  'Delivery teams across key global regions',
                  'Recognised by leading technology alliances',
                  'Post-launch support, monitoring & optimisation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 size={17} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="btn-glow inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Learn About Us <ArrowRight size={17} />
              </Link>
            </AnimatedSection>

            {/* Right — value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <v.icon size={19} />
                    </div>
                    <h4 className="text-slate-900 font-bold text-sm mb-2">{v.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
              Client Feedback
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Real feedback from clients who&apos;ve seen measurable results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="group bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col">
                  {/* Quote icon */}
                  <Quote size={28} className="text-blue-100 mb-4 flex-shrink-0" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-slate-900 font-semibold text-sm">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ─────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Built for Real Impact
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              A selection of delivered projects. Client names withheld under NDA — references on request.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWork.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className={`${project.color} h-1.5`} />
                  <div className="p-7 flex flex-col flex-1">
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

      {/* ── How We Work ──────────────────────────────────────────────────── */}
      <section className="bg-white dots-pattern py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
              Our Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              How We Work
            </h2>
            <p className="text-slate-500 max-w-md mx-auto text-base">
              Structured delivery that gets things done right — on time, every time.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.09}>
                <div className="group bg-white border border-slate-200 rounded-2xl p-6 h-full hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <span className="text-5xl font-black text-slate-100 group-hover:text-blue-100 transition-colors block mb-3 leading-none select-none">
                    {s.step}
                  </span>
                  <h4 className="text-slate-900 font-bold mb-2 text-base">{s.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────────────────── */}
      <section id="industries" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
              Industries
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
              Serving Every Sector
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Deep domain knowledge across industries — click to explore tailored solutions.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                { name: 'Healthcare',             slug: 'healthcare',    live: true },
                { name: 'Finance & Banking',       slug: 'finance',       live: true },
                { name: 'Retail & E-commerce',    slug: 'retail',        live: true },
                { name: 'Manufacturing',           slug: 'manufacturing', live: true },
                { name: 'Education',               slug: 'education',     live: true },
                { name: 'Logistics',               slug: 'logistics',     live: true },
                { name: 'Real Estate',             slug: 'real-estate',   live: false },
                { name: 'Government',              slug: 'government',    live: false },
                { name: 'Pharma & Life Sciences',  slug: 'pharma',        live: false },
                { name: 'Energy & Utilities',      slug: 'energy',        live: false },
                { name: 'Telecom',                 slug: 'telecom',       live: false },
                { name: 'Agriculture',             slug: 'agriculture',   live: false },
                { name: 'Legal & Compliance',      slug: 'legal',         live: false },
                { name: 'Media & Entertainment',   slug: 'media',         live: false },
                { name: 'Insurance',               slug: 'insurance',     live: false },
                { name: 'Travel & Hospitality',    slug: 'travel',        live: false },
              ].map(({ name, slug, live }) => (
                <Link
                  key={name}
                  href={`/industries/${slug}`}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    live
                      ? 'bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:-translate-y-0.5'
                      : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'
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

      {/* ── ROI Calculator ───────────────────────────────────────────────── */}
      <ROICalculator />

      {/* ── Tech Stack ───────────────────────────────────────────────────── */}
      <TechStack />

      {/* ── Newsletter ───────────────────────────────────────────────────── */}
      <NewsletterSection />

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="hero-gradient grid-overlay py-28 relative overflow-hidden">
        <div className="absolute top-10 right-16 w-72 h-72 bg-cyan-400/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-10 left-16 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 sm:p-14 shadow-2xl">
              <span className="inline-flex items-center gap-2 bg-white/15 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                No commitment required
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Let&apos;s Build Something<br />Great Together
              </h2>
              <p className="text-blue-100/80 mb-10 text-base max-w-xl mx-auto leading-relaxed">
                Tell us about your project and we&apos;ll get back within 24 hours with a tailored
                approach — no sales pitch, just solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl text-base hover:-translate-y-0.5"
                >
                  <Phone size={16} /> Get Free Consultation
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

      {/* ── Sticky CTA ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none hidden sm:block"
          >
            <Link
              href="/contact"
              className="pointer-events-auto btn-glow inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-7 py-3.5 rounded-2xl shadow-2xl shadow-blue-500/30 hover:bg-blue-700 transition-all border border-blue-500 text-sm backdrop-blur-sm"
            >
              <Phone size={15} />
              Book Free Consultation
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
