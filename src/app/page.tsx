'use client'
// pipeline-test: v1.0.1

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight, CheckCircle2,
  Users, Award, Globe, Zap, Shield, Lightbulb,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const services = [
  {
    icon: Brain,
    title: 'AI Application Development',
    desc: 'Custom AI-powered applications using the latest LLMs, machine learning models, and intelligent automation tailored to your business.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Intelligence',
    desc: 'Transform raw data into actionable insights with advanced analytics, dashboards, and predictive intelligence platforms.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'Full-stack web and mobile applications built for scale, performance, and longevity across any industry vertical.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Cloud,
    title: 'Cloud & Automation Engineering',
    desc: 'End-to-end cloud infrastructure, DevOps pipelines, and workflow automation for maximum efficiency and reliability.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
]

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '15+', label: 'Countries Served' },
]

const industries = [
  'Healthcare', 'Finance & Banking', 'Retail & E-commerce',
  'Manufacturing', 'Education', 'Logistics', 'Real Estate', 'Government',
]

const values = [
  { icon: Lightbulb, title: 'Innovation with Purpose', desc: 'Every solution is designed with a clear goal to drive real business impact.' },
  { icon: Zap,       title: 'Automation for Efficiency', desc: 'We eliminate manual bottlenecks and accelerate operations through smart automation.' },
  { icon: Users,     title: 'Partnership for Growth', desc: 'We work as an extension of your team, invested in your long-term success.' },
  { icon: Shield,    title: 'Transformation with Integrity', desc: 'Security, transparency, and ethical AI are at the core of everything we build.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen hero-gradient grid-overlay flex items-center">
        {/* Floating blobs */}
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
              AI-Powered Digital Solutions
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Empowering Progress with{' '}
            <span className="text-cyan-300">Digital Tech Prosperity</span>
          </motion.h1>

          <motion.p
            className="text-lg text-blue-100 max-w-2xl mx-auto mb-10"
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
              className="btn-glow inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Explore Services <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
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
              From AI to automation, we cover the full spectrum of modern digital transformation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.1}>
                <div className="card-glow bg-white border border-slate-200 rounded-2xl p-6 h-full">
                  <div className={`w-12 h-12 ${svc.bg} ${svc.color} rounded-xl flex items-center justify-center mb-4`}>
                    <svc.icon size={24} />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Why Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Built on Four Core Principles
              </h2>
              <p className="text-slate-500 mb-8">
                With 10+ years of experience delivering intelligent solutions globally, we bring
                deep expertise, a client-first mindset, and a commitment to measurable results.
              </p>
              <ul className="space-y-3">
                {[
                  'End-to-end AI & software delivery',
                  'Cross-industry domain expertise',
                  'Agile, transparent development process',
                  'Ongoing support & optimization',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Learn About Us <ArrowRight size={18} />
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 card-glow">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-3">
                      <v.icon size={20} />
                    </div>
                    <h4 className="text-slate-900 font-semibold mb-1">{v.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Industries</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">We Serve Every Industry</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-sm font-medium hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-default"
                >
                  {ind}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let&apos;s discuss how we can help you build smarter, faster, and stronger with AI and digital technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Start a Conversation <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
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
