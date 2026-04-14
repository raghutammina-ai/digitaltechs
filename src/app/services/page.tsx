import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight,
  CheckCircle2, Lock, Cpu,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'AI & Software Services',
  description: 'AI application development, data analytics, custom software, and cloud automation for industries like Healthcare, Finance, Retail, and more.',
}

/* ─── Data ────────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: Brain,
    title: 'AI Application Development',
    tagline: 'Intelligent software that thinks, learns, and adapts.',
    accent: 'from-blue-500 to-cyan-400',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    checkColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    glowShadow: 'hover:shadow-blue-500/10',
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
    accent: 'from-cyan-500 to-teal-400',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    checkColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    glowShadow: 'hover:shadow-cyan-500/10',
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
    accent: 'from-indigo-500 to-violet-400',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-400',
    checkColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    glowShadow: 'hover:shadow-indigo-500/10',
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
    accent: 'from-teal-500 to-emerald-400',
    iconBg: 'bg-teal-500/10',
    iconColor: 'text-teal-400',
    checkColor: 'text-teal-400',
    borderHover: 'hover:border-teal-500/40',
    glowShadow: 'hover:shadow-teal-500/10',
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
    accent: 'from-rose-500 to-pink-400',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-400',
    checkColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/40',
    glowShadow: 'hover:shadow-rose-500/10',
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
    accent: 'from-violet-500 to-purple-400',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    checkColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
    glowShadow: 'hover:shadow-violet-500/10',
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
  { step: '01', title: 'Discovery',      desc: 'Deep-dive into your business goals, challenges, and technical landscape.' },
  { step: '02', title: 'Strategy',       desc: 'Design a tailored roadmap with clear milestones and technology choices.' },
  { step: '03', title: 'Design',         desc: 'UX/UI design and system architecture aligned to your users and scale.' },
  { step: '04', title: 'Development',    desc: 'Agile sprints with continuous delivery and transparent progress updates.' },
  { step: '05', title: 'Testing',        desc: 'Rigorous QA, security reviews, and performance benchmarking.' },
  { step: '06', title: 'Launch & Support', desc: 'Smooth deployment with ongoing monitoring, updates, and optimization.' },
]

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <div className="bg-[#030712] text-white overflow-x-hidden">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
        </div>
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 text-sm px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              Our Services
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
              <span className="text-white">End-to-End</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              From AI development to cloud infrastructure — everything your business needs
              to lead in the digital age, under one roof.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Service Cards ──────────────────────────────────────────────── */}
      <section className="py-8 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.05}>
              <div
                className={`group relative rounded-2xl p-8 md:p-10 border border-white/[0.07] ${svc.borderHover} ${svc.glowShadow} hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl pointer-events-none`} />

                <div className="relative flex flex-col md:flex-row gap-8 md:gap-12">

                  {/* Left — icon + title */}
                  <div className="md:w-72 flex-shrink-0">
                    <div className={`w-12 h-12 ${svc.iconBg} ${svc.iconColor} rounded-xl flex items-center justify-center mb-5`}>
                      <svc.icon size={24} />
                    </div>
                    <h2 className="text-white font-bold text-xl mb-2 leading-snug">{svc.title}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">{svc.tagline}</p>
                    <div className={`mt-5 h-px w-12 bg-gradient-to-r ${svc.accent} opacity-60`} />
                  </div>

                  {/* Right — features */}
                  <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {svc.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className={`${svc.checkColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-300 text-sm leading-relaxed">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.05]">
        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-violet-600/6 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block">
              How We Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
              Our Delivery Process
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              A proven, transparent 6-step process that ensures quality
              and alignment at every stage.
            </p>
          </AnimatedSection>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.08}>
                <div
                  className="group relative rounded-2xl p-7 h-full border border-white/[0.07] hover:border-blue-500/30 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
                >
                  {/* Hover gradient wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.07] to-violet-600/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                  {/* Step number — large decorative */}
                  <span className="block font-black leading-none mb-5 text-6xl bg-gradient-to-br from-blue-500 to-violet-500 bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300 select-none">
                    {p.step}
                  </span>

                  {/* Content */}
                  <h3 className="relative text-white font-bold text-lg mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="relative text-slate-400 group-hover:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
                    {p.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
              Have a Project in Mind?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Tell us about your challenge and we&apos;ll help you find the right solution.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Let&apos;s Talk
              <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
