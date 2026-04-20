import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight,
  Lock, Cpu, Check,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'AI & Software Services',
  description: 'AI application development, data analytics, custom software, and cloud automation for industries like Healthcare, Finance, Retail, and more.',
}

const services = [
  {
    icon: Brain,
    title: 'AI Application Development',
    tagline: 'Intelligent software that thinks, learns, and adapts.',
    accent: 'rgba(59,130,246,0.5)',
    iconColor: '#60a5fa',
    iconBg: 'rgba(59,130,246,0.1)',
    iconBorder: 'rgba(59,130,246,0.3)',
    glow: 'rgba(59,130,246,0.15)',
    features: [
      'Custom LLM integrations & chatbot development',
      'Computer vision & image recognition systems',
      'Predictive analytics & recommendation engines',
      'Natural language processing (NLP) solutions',
      'AI-powered process automation',
      'Model fine-tuning & MLOps pipelines',
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Intelligence',
    tagline: 'Turn your data into your most powerful competitive advantage.',
    accent: 'rgba(6,182,212,0.5)',
    iconColor: '#22d3ee',
    iconBg: 'rgba(6,182,212,0.1)',
    iconBorder: 'rgba(6,182,212,0.3)',
    glow: 'rgba(6,182,212,0.15)',
    features: [
      'Business intelligence (BI) dashboards',
      'Real-time data pipelines & ETL',
      'Data warehouse design & management',
      'Advanced reporting & visualization',
      'Predictive & prescriptive analytics',
      'Big data engineering (Spark, Kafka, etc.)',
    ],
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    tagline: 'Full-stack solutions engineered for scale and longevity.',
    accent: 'rgba(139,92,246,0.5)',
    iconColor: '#a78bfa',
    iconBg: 'rgba(139,92,246,0.1)',
    iconBorder: 'rgba(139,92,246,0.3)',
    glow: 'rgba(139,92,246,0.15)',
    features: [
      'Web application development (React, Next.js)',
      'Mobile apps (iOS, Android, React Native)',
      'Enterprise software & SaaS platforms',
      'API design & microservices architecture',
      'Legacy system modernization',
      'UI/UX design & prototyping',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & Automation Engineering',
    tagline: 'Resilient infrastructure and automated workflows at scale.',
    accent: 'rgba(16,185,129,0.5)',
    iconColor: '#34d399',
    iconBg: 'rgba(16,185,129,0.1)',
    iconBorder: 'rgba(16,185,129,0.3)',
    glow: 'rgba(16,185,129,0.15)',
    features: [
      'Cloud migration & multi-cloud strategy',
      'DevOps & CI/CD pipeline setup',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Kubernetes & containerization (Docker)',
      'Business process automation (RPA)',
      'Security, compliance & cost optimization',
    ],
  },
  {
    icon: Lock,
    title: 'Cybersecurity Solutions',
    tagline: 'Protect your digital assets with enterprise-grade security.',
    accent: 'rgba(251,146,60,0.5)',
    iconColor: '#fb923c',
    iconBg: 'rgba(251,146,60,0.1)',
    iconBorder: 'rgba(251,146,60,0.3)',
    glow: 'rgba(251,146,60,0.15)',
    features: [
      'Security audits & vulnerability assessments',
      'Penetration testing & ethical hacking',
      'GDPR, HIPAA & compliance consulting',
      'Identity & access management (IAM)',
      'Threat detection & incident response',
      'Secure SDLC & DevSecOps practices',
    ],
  },
  {
    icon: Cpu,
    title: 'Intelligent QA & Testing',
    tagline: 'Quality at every stage — faster releases, fewer failures.',
    accent: 'rgba(244,63,94,0.5)',
    iconColor: '#fb7185',
    iconBg: 'rgba(244,63,94,0.1)',
    iconBorder: 'rgba(244,63,94,0.3)',
    glow: 'rgba(244,63,94,0.15)',
    features: [
      'AI-driven test automation frameworks',
      'End-to-end regression & smoke testing',
      'Performance & load testing',
      'API & integration testing',
      'Mobile app testing (iOS & Android)',
      'QA strategy & test case management',
    ],
  },
]

const process = [
  { step: '01', title: 'Discovery',       desc: 'Deep-dive into your business goals, challenges, and technical landscape.' },
  { step: '02', title: 'Strategy',        desc: 'Design a tailored roadmap with clear milestones and technology choices.' },
  { step: '03', title: 'Design',          desc: 'UX/UI design and system architecture aligned to your users and scale.' },
  { step: '04', title: 'Development',     desc: 'Agile sprints with continuous delivery and transparent progress updates.' },
  { step: '05', title: 'Testing',         desc: 'Rigorous QA, security reviews, and performance benchmarking.' },
  { step: '06', title: 'Launch & Support', desc: 'Smooth deployment with ongoing monitoring, updates, and optimization.' },
]

export default function ServicesPage() {
  return (
    <div className="bg-[#04040a] text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-block p-[1px] rounded-full mb-6"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(139,92,246,0.4))' }}>
              <span className="flex items-center gap-2 bg-[#04040a] text-blue-300 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest">
                Our Services
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.04] text-white mb-6">
              End-to-End{' '}
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Digital Solutions
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              From AI development to cloud infrastructure — everything your business needs
              to lead in the digital age, under one roof.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.06}>
                <div className="group relative h-full">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 100%, ${svc.glow}, transparent 70%)` }} />
                  {/* Border wrapper */}
                  <div className="relative p-[1px] rounded-2xl h-full transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                    style={{ background: `linear-gradient(135deg, ${svc.accent}, rgba(255,255,255,0.05))` }}>
                    <div className="bg-[#07070e] group-hover:bg-[#09091a] rounded-2xl p-7 h-full flex flex-col transition-colors duration-300">
                      {/* Top bar */}
                      <div className="h-[2px] w-full rounded-full mb-6 opacity-60"
                        style={{ background: `linear-gradient(to right, ${svc.accent}, transparent)` }} />
                      {/* Icon */}
                      <div className="relative mb-5 w-fit">
                        <div className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                          style={{ background: svc.iconBg }} />
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: svc.iconBg, border: `1px solid ${svc.iconBorder}` }}>
                          <svc.icon size={22} style={{ color: svc.iconColor }} />
                        </div>
                      </div>
                      {/* Title + tagline */}
                      <h2 className="text-white font-bold text-lg mb-2 leading-snug tracking-tight">
                        {svc.title}
                      </h2>
                      <p className="text-slate-300 text-sm leading-relaxed mb-5">
                        {svc.tagline}
                      </p>
                      {/* Features */}
                      <ul className="space-y-2 mt-auto">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <Check size={12} className="mt-0.5 flex-shrink-0" style={{ color: svc.iconColor }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.05]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)' }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400 mb-4 block">How We Work</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white mb-4">Our Delivery Process</h2>
            <p className="text-slate-300 text-base max-w-lg mx-auto leading-relaxed">
              A proven, transparent 6-step process that ensures quality and alignment at every stage.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.07}>
                <div className="group relative h-full">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 50% 100%, rgba(99,102,241,0.15), transparent 70%)' }} />
                  <div className="relative p-[1px] rounded-2xl h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]"
                    style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.35), rgba(139,92,246,0.2), rgba(255,255,255,0.04))' }}>
                    <div className="bg-[#07070e] group-hover:bg-[#0a0a1c] rounded-2xl p-7 h-full transition-colors duration-300">
                      <span className="block font-black text-5xl tabular-nums leading-none mb-5 select-none"
                        style={{
                          background: 'linear-gradient(135deg, rgba(99,102,241,0.8), rgba(139,92,246,0.5))',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}>
                        {p.step}
                      </span>
                      <h3 className="text-white font-bold text-base mb-2 tracking-tight">{p.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                      <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                        style={{ background: 'linear-gradient(to right, rgba(99,102,241,0.6), transparent)' }} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.08) 0%, transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white mb-5">
              Have a Project in Mind?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Tell us about your challenge and we&apos;ll help you find the right solution.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)', boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}
            >
              Let&apos;s Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
