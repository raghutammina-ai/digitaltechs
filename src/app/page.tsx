'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight, ArrowUpRight,
  CheckCircle2, Zap, Shield, Users, Lightbulb, Search, Layers, Rocket,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import TechStack from '@/components/TechStack'
import NeuralNetwork from '@/components/NeuralNetwork'
import TypewriterText from '@/components/TypewriterText'
import ROICalculator from '@/components/ROICalculator'

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const services = [
  {
    num: '01', icon: Brain,
    title: 'AI Application Development',
    desc: 'Custom LLM applications, intelligent agents, and ML models built for real business outcomes — not demos.',
    gradient: 'from-blue-500/20 via-blue-600/5 to-transparent',
    iconGradient: 'from-blue-400 to-cyan-400',
    iconBg: 'bg-blue-500/10',
    border: 'hover:border-blue-500/40',
    glow: 'hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]',
    tag: 'LLMs · Agents · ML',
  },
  {
    num: '02', icon: BarChart3,
    title: 'Data Analytics & Intelligence',
    desc: 'Turn fragmented data into clear, actionable decisions through modern data pipelines and predictive analytics.',
    gradient: 'from-cyan-500/20 via-cyan-600/5 to-transparent',
    iconGradient: 'from-cyan-400 to-teal-400',
    iconBg: 'bg-cyan-500/10',
    border: 'hover:border-cyan-500/40',
    glow: 'hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]',
    tag: 'BI · Pipelines · Predictions',
  },
  {
    num: '03', icon: Code2,
    title: 'Custom Software Development',
    desc: 'Full-stack applications engineered for performance, scalability, and long-term maintainability across all platforms.',
    gradient: 'from-violet-500/20 via-violet-600/5 to-transparent',
    iconGradient: 'from-violet-400 to-purple-400',
    iconBg: 'bg-violet-500/10',
    border: 'hover:border-violet-500/40',
    glow: 'hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)]',
    tag: 'Web · Mobile · APIs',
  },
  {
    num: '04', icon: Cloud,
    title: 'Cloud & Automation Engineering',
    desc: 'Cloud-native infrastructure, automated DevOps pipelines, and workflow automation that scales with your business.',
    gradient: 'from-emerald-500/20 via-emerald-600/5 to-transparent',
    iconGradient: 'from-emerald-400 to-teal-400',
    iconBg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/40',
    glow: 'hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]',
    tag: 'AWS · DevOps · CI/CD',
  },
]

const steps = [
  { n: '01', icon: Search,  title: 'Discover & Strategise', desc: 'Deep-dive into your goals, data, and workflows to map the precise solution your business needs.' },
  { n: '02', icon: Layers,  title: 'Design & Build',        desc: 'Fast, transparent sprints. You see real progress at every stage — no surprises, no black boxes.' },
  { n: '03', icon: Rocket,  title: 'Launch & Scale',        desc: 'Deploy, monitor, and optimise continuously — driving measurable ROI from week one.' },
]

const results = [
  {
    industry: 'Finance', icon: '🏦', metric: '3×', sub: 'Faster risk decisions',
    desc: 'Real-time trading intelligence handling 2M+ events/second with live portfolio risk visibility.',
    tags: ['Real-Time Analytics', 'Trading AI'],
    accent: 'from-blue-500 to-cyan-500', text: 'text-blue-400',
    tagStyle: 'bg-blue-500/10 border-blue-500/20 text-blue-300', bar: 75,
  },
  {
    industry: 'Retail', icon: '🛍️', metric: '72%', sub: 'Support queries automated',
    desc: 'LLM support agent resolving 72% of tier-1 queries, saving £380K/year in support costs.',
    tags: ['LLM Integration', 'Support AI'],
    accent: 'from-violet-500 to-purple-500', text: 'text-violet-400',
    tagStyle: 'bg-violet-500/10 border-violet-500/20 text-violet-300', bar: 72,
  },
]

const values = [
  { icon: Lightbulb, title: 'Innovation with Purpose',       desc: 'Every solution is built to drive real, measurable business impact — not just technical novelty.' },
  { icon: Zap,       title: 'Automation for Efficiency',     desc: 'We identify and eliminate bottlenecks, accelerating operations through intelligent automation.' },
  { icon: Users,     title: 'Partnership for Growth',        desc: 'We embed in your team and invest in your long-term success — not just the next milestone.' },
  { icon: Shield,    title: 'Transformation with Integrity', desc: 'Security, transparency, and ethical AI are non-negotiable in everything we build.' },
]

const industries = [
  { name: 'Healthcare',           slug: 'healthcare'  },
  { name: 'Real Estate',          slug: 'real-estate' },
  { name: 'Travel & Hospitality', slug: 'travel'      },
  { name: 'Retail & E-commerce',  slug: 'retail'      },
  { name: 'Agriculture',          slug: 'agriculture' },
]

const marquee = [
  'OpenAI GPT-4', 'Anthropic Claude', 'LangChain', 'TensorFlow', 'PyTorch',
  'AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Terraform',
  'React / Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Snowflake',
]

/* ─── HELPERS ───────────────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ─── PAGE ──────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="bg-[#04040a] text-white">

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Gradient mesh background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#04040a]" />
          <div className="absolute inset-0 grid-bg opacity-60" />
          {/* Coloured orbs */}
          <div className="animate-float-slow absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)' }} />
          <div className="animate-float-slow absolute top-[20%] right-[5%] w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', animationDelay: '-6s' }} />
          <div className="animate-float-slow absolute bottom-[10%] left-[30%] w-[450px] h-[450px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', animationDelay: '-12s' }} />
          {/* Vignette */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, #04040a 100%)' }} />
        </div>

        <NeuralNetwork />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">

          {/* Badge */}
          <motion.div {...fadeUp(0)} className="mb-8">
            <div className="inline-block p-[1px] rounded-full"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(139,92,246,0.5), rgba(6,182,212,0.4))' }}>
              <span className="flex items-center gap-2 bg-[#04040a] text-sm font-medium px-5 py-2 rounded-full text-slate-300">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                AI · Data · Software · Cloud
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.07)}
            className="text-6xl sm:text-7xl lg:text-[88px] font-extrabold leading-[1.02] tracking-[-0.04em] mb-6 max-w-4xl mx-auto"
          >
            <span className="text-white">We Build AI</span>
            <br />
            <span className="gradient-text">That Delivers</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div {...fadeUp(0.13)} className="text-xl sm:text-2xl text-slate-400 font-medium mb-5 min-h-[2rem]">
            <TypewriterText />
          </motion.div>

          {/* Sub */}
          <motion.p {...fadeUp(0.16)}
            className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            From intelligent AI applications to data systems and scalable software —
            we deliver measurable outcomes for forward-thinking businesses worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <Link href="/services"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-base text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)', boxShadow: '0 0 24px rgba(99,102,241,0.25)' }}
            >
              Explore Services
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/35 bg-[#0c0c1a] hover:bg-[#111128] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              Book Free Strategy Call
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div {...fadeUp(0.26)} className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            {['No commitment required', 'Free 30-min strategy call', 'Results in weeks, not months'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-blue-500/70" />{t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #04040a, transparent)' }} />
      </section>

      {/* ══════════════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════════════ */}
      <div className="py-6 overflow-hidden border-y border-white/[0.06]">
        <p className="text-center text-[10px] uppercase tracking-[0.35em] text-slate-400 font-bold mb-5">
          Powered by world-leading technologies
        </p>
        <div className="relative">
          <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} className="text-sm font-semibold text-slate-400 hover:text-white transition-colors cursor-default">{t}</span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(to right, #04040a, transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(to left, #04040a, transparent)' }} />
        </div>
      </div>


      {/* ══════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        {/* Section glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] text-white mb-5">
              Services built for scale
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto text-lg leading-relaxed">
              End-to-end delivery across AI, data, software, and cloud engineering.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className={`group relative rounded-2xl ${s.glow} bg-[#070710] hover:bg-[#0a0a16] transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full`}
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                  {/* Animated gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ padding: '1px', background: `linear-gradient(135deg, ${s.iconGradient.includes('blue') ? 'rgba(59,130,246,0.5)' : s.iconGradient.includes('cyan') ? 'rgba(6,182,212,0.5)' : s.iconGradient.includes('violet') ? 'rgba(139,92,246,0.5)' : 'rgba(16,185,129,0.5)'}, rgba(255,255,255,0.05))` }} />
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${s.iconGradient} opacity-80`} />
                  {/* Subtle bg gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-60`} />
                  {/* Glow orb */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                    style={{ background: s.iconGradient.includes('blue') ? 'rgba(59,130,246,0.12)' : s.iconGradient.includes('cyan') ? 'rgba(6,182,212,0.12)' : s.iconGradient.includes('violet') ? 'rgba(139,92,246,0.12)' : 'rgba(16,185,129,0.12)' }} />

                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className={`absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                          style={{ background: s.iconGradient.includes('blue') ? 'rgba(59,130,246,0.3)' : s.iconGradient.includes('cyan') ? 'rgba(6,182,212,0.3)' : s.iconGradient.includes('violet') ? 'rgba(139,92,246,0.3)' : 'rgba(16,185,129,0.3)' }} />
                        <div className={`relative w-12 h-12 ${s.iconBg} rounded-xl flex items-center justify-center`}
                          style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                          <s.icon size={22}
                            style={{ color: s.iconGradient.includes('blue') ? '#60a5fa' : s.iconGradient.includes('cyan') ? '#22d3ee' : s.iconGradient.includes('violet') ? '#a78bfa' : '#34d399' }}
                          />
                        </div>
                      </div>
                      <span className="text-[13px] font-black font-mono tracking-widest"
                        style={{
                          background: s.iconGradient.includes('blue') ? 'linear-gradient(135deg,#60a5fa,#818cf8)' : s.iconGradient.includes('cyan') ? 'linear-gradient(135deg,#22d3ee,#67e8f9)' : s.iconGradient.includes('violet') ? 'linear-gradient(135deg,#a78bfa,#c4b5fd)' : 'linear-gradient(135deg,#34d399,#6ee7b7)',
                          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', opacity: 0.5,
                        }}>{s.num}</span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3 leading-snug tracking-tight">{s.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">{s.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-300 bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-full">
                        {s.tag}
                      </span>
                      <ArrowUpRight size={15} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/services"
              className="group inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold transition-colors duration-200"
            >
              View all services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          HOW WE WORK
      ══════════════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 border-y border-white/[0.05]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Our Process
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-white mb-4">
              How we work
            </h2>
            <p className="text-slate-300 text-lg max-w-sm mx-auto">
              Three clear steps from brief to live results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 0.1}>
                <div className="relative group h-full">
                  {/* Glow behind card */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: 'radial-gradient(circle at 50% 80%, rgba(99,102,241,0.18) 0%, transparent 70%)' }} />
                  {/* Gradient border wrapper */}
                  <div className="relative p-[1px] rounded-2xl h-full transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_64px_rgba(99,102,241,0.2)]"
                    style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.5), rgba(139,92,246,0.35), rgba(59,130,246,0.3))' }}>
                    <div className="bg-[#07070e] group-hover:bg-[#0a0a1c] rounded-2xl p-8 h-full transition-colors duration-300 flex flex-col">
                      {/* Top: icon + number */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-xl blur-md opacity-60"
                            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.5), rgba(139,92,246,0.4))' }} />
                          <div className="relative w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.2))', border: '1px solid rgba(139,92,246,0.4)' }}>
                            <step.icon size={20} className="text-violet-300" />
                          </div>
                        </div>
                        <span className="font-black text-5xl font-mono leading-none"
                          style={{
                            background: 'linear-gradient(135deg, rgba(99,102,241,0.35), rgba(139,92,246,0.2))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}>{step.n}</span>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{step.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed flex-1">{step.desc}</p>
                      {/* Bottom accent line */}
                      <div className="mt-6 h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'linear-gradient(to right, rgba(99,102,241,0.6), transparent)' }} />
                    </div>
                  </div>
                  {/* Arrow connector */}
                  {i < 2 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                      <ArrowRight size={14} className="text-violet-400/50" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY US
      ══════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <AnimatedSection direction="right" className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                Why Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white leading-[1.1] mb-6">
                Four principles.<br />
                <span className="gradient-text">Every engagement.</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                Deep technical expertise and a client-first mindset — from first call to final delivery.
              </p>
              <ul className="space-y-3 mb-10">
                {['End-to-end AI & software delivery', 'Cross-industry domain expertise', 'Agile & fully transparent process', 'Ongoing support & optimisation'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)' }}>
                      <CheckCircle2 size={11} className="text-blue-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about"
                className="btn-shimmer group inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm text-white transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #1d4ed8, #4f46e5)', boxShadow: '0 0 25px rgba(79,70,229,0.3)' }}>
                About Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <div className="space-y-4">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.08}>
                  <div className="p-[1px] rounded-2xl transition-all duration-300 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)]"
                    style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.1), rgba(255,255,255,0.05))' }}>
                    <div className="flex items-start gap-5 bg-[#060612] hover:bg-[#08081a] rounded-2xl p-6 transition-colors duration-300">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(99,102,241,0.1))', border: '1px solid rgba(99,102,241,0.25)' }}>
                        <v.icon size={18} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-2 tracking-tight">{v.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════════════ */}
      <section className="py-24 border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Industries
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white mb-4">
              Every industry. One partner.
            </h2>
            <p className="text-slate-500 text-lg">Click any industry to explore our tailored solutions.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map(({ name, slug }, i) => (
                <motion.div key={name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                >
                  <Link href={`/industries/${slug}`}
                    className="group p-[1px] rounded-full inline-block transition-all duration-200 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))' }}
                  >
                    <span className="flex items-center gap-2 bg-[#09090f] group-hover:bg-[#0f1020] px-6 py-2.5 rounded-full text-sm font-semibold text-slate-300 group-hover:text-white transition-all duration-200">
                      {name}
                      <ArrowUpRight size={12} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          RESULTS
      ══════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Client Results
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-white mb-4">
              Outcomes that speak
            </h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto">
              Real results, NDA protected — references available on request.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((r, i) => (
              <AnimatedSection key={r.industry} delay={i * 0.07}>
                <div className="p-[1px] rounded-2xl h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                  style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04), rgba(255,255,255,0.06))` }}>
                  <div className="bg-[#06060e] hover:bg-[#08081a] rounded-2xl p-7 h-full flex flex-col transition-colors duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{r.icon}</span>
                        <span className="text-white font-bold">{r.industry}</span>
                      </div>
                      <div className="text-right">
                        <div className={`text-4xl font-extrabold ${r.text} tabular-nums leading-none tracking-tight`}>{r.metric}</div>
                        <div className="text-[11px] text-slate-400 mt-1">{r.sub}</div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="h-[2px] bg-white/[0.05] rounded-full mb-5 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${r.accent}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${r.bar}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                      />
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{r.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {r.tags.map(t => (
                        <span key={t} className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border ${r.tagStyle}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <p className="text-slate-400 text-sm mb-4">Want case studies or a reference call?</p>
            <Link href="/contact"
              className="group inline-flex items-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200"
            >
              Request References <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ROICalculator />
      <TechStack />

      {/* ══════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════ */}
      <section className="relative py-36 overflow-hidden">
        {/* Rich background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#04040a]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)' }} />
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(59,130,246,0.4), transparent)' }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-block p-[1px] rounded-full mb-8"
              style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.5), rgba(59,130,246,0.4))' }}>
              <span className="flex items-center gap-2 bg-[#04040a] text-slate-300 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                Get Started Today
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold tracking-[-0.04em] leading-[1.02] text-white mb-6">
              Ready to build<br />
              <span className="gradient-text">something great?</span>
            </h2>
            <p className="text-slate-500 text-xl mb-12 max-w-md mx-auto leading-relaxed">
              Book a free 30-minute strategy call. No commitment — just an honest conversation about your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 font-bold px-10 py-4.5 rounded-xl text-lg text-white transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed, #4f46e5)', boxShadow: '0 0 60px rgba(99,102,241,0.5)', padding: '18px 40px' }}
              >
                Start a Conversation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold px-10 py-4 rounded-xl transition-all duration-200 text-lg"
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
