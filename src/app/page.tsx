'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight, CheckCircle2,
  Users, Zap, Shield, Lightbulb, Lock, Cpu,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import NeuralNetwork from '@/components/NeuralNetwork'
import TypewriterText from '@/components/TypewriterText'
import AnimatedCounter from '@/components/AnimatedCounter'
import ROICalculator from '@/components/ROICalculator'
import TechStack from '@/components/TechStack'
import NewsletterSection from '@/components/NewsletterSection'

const services = [
  {
    icon: Brain,
    title: 'AI Application Development',
    desc: 'Custom AI-powered applications using the latest LLMs, machine learning models, and intelligent automation — tailored to your specific business needs.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    hoverBorder: 'hover:border-blue-300',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Intelligence',
    desc: 'Transform raw data into strategic insights with advanced analytics, real-time dashboards, and predictive intelligence platforms.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    hoverBorder: 'hover:border-cyan-300',
  },
  {
    icon: Code2,
    title: 'Digital Product Engineering',
    desc: 'From concept to deployment — modern, resilient, full-stack web and mobile applications built for scale, performance, and longevity.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    hoverBorder: 'hover:border-indigo-300',
  },
  {
    icon: Cloud,
    title: 'Cloud Strategy & Migration',
    desc: 'Accelerate cloud adoption with secure, future-ready infrastructure and DevOps pipelines that maximise efficiency and operational resilience.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    hoverBorder: 'hover:border-teal-300',
  },
  {
    icon: Lock,
    title: 'Cybersecurity Solutions',
    desc: 'End-to-end enterprise-grade protection to safeguard your digital ecosystem — from proactive threat detection to regulatory compliance.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    hoverBorder: 'hover:border-rose-300',
  },
  {
    icon: Cpu,
    title: 'Intelligent QA & Testing',
    desc: 'Speed up releases with AI-driven test automation and smart testing frameworks that ensure quality at every stage of delivery.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    hoverBorder: 'hover:border-violet-300',
  },
]

const values = [
  { icon: Lightbulb, title: 'Innovation with Purpose',       desc: 'Every solution is designed with a clear goal — to drive real, measurable business impact.' },
  { icon: Zap,       title: 'Automation for Efficiency',     desc: 'We eliminate manual bottlenecks and accelerate operations through intelligent automation.' },
  { icon: Users,     title: 'Partnership for Growth',        desc: 'We work as an extension of your team, invested in your long-term success and scalability.' },
  { icon: Shield,    title: 'Transformation with Integrity', desc: 'Security, transparency, and ethical AI are at the core of everything we build.' },
]

const processSteps = [
  { step: '01', title: 'Discover',  desc: 'Deep-dive into your business goals, challenges, and existing infrastructure to define the right approach.' },
  { step: '02', title: 'Design',    desc: 'Architect a tailored solution with scalability, security, and performance built in from day one.' },
  { step: '03', title: 'Build',     desc: 'Agile development with full transparency, regular demos, and continuous iterative feedback.' },
  { step: '04', title: 'Deploy',    desc: 'Seamless launch with zero downtime, CI/CD pipelines, and rigorous production hardening.' },
  { step: '05', title: 'Optimise',  desc: 'Continuous monitoring, performance tuning, and ongoing feature evolution post-launch.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen hero-gradient grid-overlay flex items-center">
        <NeuralNetwork />
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse-slow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              AI-Powered Digital Transformation
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transform Your Business with{' '}
            <span className="text-cyan-300">AI &amp; Digital Solutions</span>
          </motion.h1>

          <motion.div className="text-xl sm:text-2xl font-semibold mb-5 h-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }}>
            <TypewriterText />
          </motion.div>

          <motion.p
            className="text-lg text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We specialise in delivering intelligent, scalable digital solutions across AI, cloud infrastructure,
            data analytics, and automation engineering — for industries like Real Estate, Healthcare, Travel &amp; Hospitality, Retail, and Agriculture.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-base"
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm text-base"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {['6,500+ Satisfied Clients', '600+ Projects Delivered', '10+ Years Experience', 'Global Delivery'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { target: 6561, suffix: '+', label: 'Satisfied Clients' },
              { target: 600,  suffix: '+', label: 'Projects Delivered' },
              { target: 250,  suffix: '+', label: 'Skilled Experts' },
              { target: 10,   suffix: '+', label: 'Years of Experience' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="text-4xl font-extrabold gradient-text mb-1 tabular-nums">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Our Core Services
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From AI to cloud to cybersecurity — we cover the full spectrum of modern digital transformation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.08}>
                <div className={`group bg-white border border-slate-200 ${svc.hoverBorder} rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 card-glow`}>
                  <div className={`w-12 h-12 ${svc.bg} ${svc.color} rounded-xl flex items-center justify-center mb-5`}>
                    <svc.icon size={24} />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1 mt-5 text-sm font-semibold ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md">
              View All Services <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
                A Technology Partner You Can Trust
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                With 10+ years delivering intelligent digital solutions globally, we combine deep domain expertise,
                a client-first mindset, and a commitment to measurable results — across every engagement.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'End-to-end AI & software delivery',
                  'Cross-industry domain expertise',
                  'Agile, transparent development process',
                  'Delivery centres in key global regions',
                  'Recognised by leading technology alliances',
                  'Ongoing support & continuous optimisation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 size={17} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Learn About Us <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 card-glow hover:border-blue-200 transition-colors">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-3">
                      <v.icon size={20} />
                    </div>
                    <h4 className="text-slate-900 font-semibold mb-2">{v.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              How We Work
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              A proven, structured approach that delivers results on time, every time.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.1}>
                <div className="group relative bg-slate-50 border border-slate-200 rounded-2xl p-6 h-full hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors mb-3 block">
                    {s.step}
                  </span>
                  <h4 className="text-slate-900 font-semibold mb-2">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Industries</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Empowering Transformation Across Sectors</h2>
            <p className="text-slate-500 mt-2 max-w-lg mx-auto">
              Click any industry to explore our tailored AI and digital solutions.
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
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    live
                      ? 'bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  {name}{live ? ' →' : ''}
                </Link>
              ))}
            </div>
            <p className="text-center text-slate-400 text-xs mt-4">
              6 detailed industry hubs live · 10 more launching soon
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Tech Stack */}
      <TechStack />

      {/* Newsletter */}
      <NewsletterSection />

      {/* CTA */}
      <section className="hero-gradient py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-white/15 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Ready to get started?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Transform Your Business with AI
            </h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you build smarter, faster, and stronger.
              Get a free consultation with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
