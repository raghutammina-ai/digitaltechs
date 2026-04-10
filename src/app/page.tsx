'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight,
  CheckCircle2, Users, Zap, Shield, Lightbulb,
  Lock, Cpu, Phone,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import NeuralNetwork from '@/components/NeuralNetwork'
import TypewriterText from '@/components/TypewriterText'
import AnimatedCounter from '@/components/AnimatedCounter'

const services = [
  { icon: Brain,     title: 'AI Application Development',   desc: 'Custom AI-powered apps and intelligent automation tailored to your business workflows.',         color: 'text-blue-600',   bg: 'bg-blue-50' },
  { icon: BarChart3, title: 'Data Analytics & Intelligence', desc: 'Turn raw data into clear decisions with real-time dashboards and predictive models.',             color: 'text-cyan-600',   bg: 'bg-cyan-50' },
  { icon: Code2,     title: 'Digital Product Engineering',   desc: 'Scalable web and mobile products built for performance, growth, and longevity.',                  color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Cloud,     title: 'Cloud & DevOps Engineering',    desc: 'Modern cloud infrastructure and automated pipelines that cut costs and speed up delivery.',        color: 'text-teal-600',   bg: 'bg-teal-50' },
  { icon: Lock,      title: 'Cybersecurity Solutions',       desc: 'End-to-end protection for your digital assets — from threat detection to compliance.',            color: 'text-rose-600',   bg: 'bg-rose-50' },
  { icon: Cpu,       title: 'Intelligent QA & Testing',      desc: 'AI-driven test automation that ensures quality at every stage of your delivery cycle.',           color: 'text-violet-600', bg: 'bg-violet-50' },
]

const values = [
  { icon: Lightbulb, title: 'Innovation with Purpose',       desc: 'Solutions designed around real business outcomes.' },
  { icon: Zap,       title: 'Automation for Efficiency',     desc: 'Eliminate bottlenecks with intelligent automation.' },
  { icon: Users,     title: 'Partnership for Growth',        desc: 'We work as an extension of your team.' },
  { icon: Shield,    title: 'Transformation with Integrity', desc: 'Security-first, ethical AI, full transparency.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen hero-gradient grid-overlay flex items-center overflow-hidden">
        <NeuralNetwork />
        <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-5 py-2 rounded-full backdrop-blur-md border border-white/20">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              AI &amp; Digital Transformation Specialists
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transform Your Business with{' '}
            <span className="text-cyan-300">AI &amp; Digital Solutions</span>
          </motion.h1>

          <motion.div className="text-xl sm:text-2xl font-semibold mb-5 h-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }}>
            <TypewriterText />
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-blue-100/85 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          >
            We help businesses automate processes, reduce costs, and scale faster through
            custom AI systems, software engineering, and cloud infrastructure.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
            <Link href="/contact" className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-xl text-base">
              <Phone size={16} /> Get Free Consultation
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-base">
              View Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { target: 10,  suffix: '+', label: 'Years Experience' },
              { target: 200, suffix: '+', label: 'Projects Delivered' },
              { target: 50,  suffix: '+', label: 'Clients Served' },
              { target: 15,  suffix: '+', label: 'Countries Reached' },
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
            <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Our Core Services</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">Full-spectrum digital transformation — from AI to cloud to security.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.07}>
                <div className="group bg-white border border-slate-200 rounded-2xl p-7 h-full flex flex-col hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300">
                  <div className={`w-11 h-11 ${svc.bg} ${svc.color} rounded-xl flex items-center justify-center mb-5`}>
                    <svc.icon size={21} />
                  </div>
                  <h3 className="text-slate-900 font-bold text-base mb-2">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <Link href="/services" className={`inline-flex items-center gap-1.5 mt-5 text-sm font-semibold ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
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
              <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
                A Partner That Delivers,<br className="hidden sm:block" /> Not Just Promises
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed text-base">
                10+ years of hands-on delivery across AI, cloud, and software — with a client-first approach and full transparency at every stage.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'End-to-end delivery — from strategy to production',
                  'Agile process with weekly demos and clear communication',
                  'Deep expertise across AI, cloud, data & software',
                  'Post-launch support, monitoring & optimisation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 size={17} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                Learn About Us <ArrowRight size={17} />
              </Link>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
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

      {/* CTA */}
      <section className="hero-gradient py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">Ready to Transform Your Business?</h2>
            <p className="text-blue-100/80 mb-8 text-base max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute strategy call. No commitment — just a conversation about how we can help you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-xl text-base">
                <Phone size={16} /> Book Free Call
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-base">
                View Our Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}