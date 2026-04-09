import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, BarChart3, Code2, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'AI & Software Services',
  description: 'AI application development, data analytics, custom software, and cloud automation for every industry — healthcare, finance, retail, manufacturing and more.',
}

const services = [
  {
    icon: Brain,
    title: 'AI Application Development',
    tagline: 'Intelligent software that thinks, learns, and adapts.',
    color: 'text-blue-600',
    bg: 'bg-blue-600',
    lightBg: 'bg-blue-50',
    border: 'border-blue-200',
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
    color: 'text-cyan-600',
    bg: 'bg-cyan-600',
    lightBg: 'bg-cyan-50',
    border: 'border-cyan-200',
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
    color: 'text-indigo-600',
    bg: 'bg-indigo-600',
    lightBg: 'bg-indigo-50',
    border: 'border-indigo-200',
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
    color: 'text-teal-600',
    bg: 'bg-teal-600',
    lightBg: 'bg-teal-50',
    border: 'border-teal-200',
    features: [
      'Cloud migration & multi-cloud strategy',
      'DevOps & CI/CD pipeline setup',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Kubernetes & containerization (Docker)',
      'Business process automation (RPA)',
      'Security, compliance & cost optimization',
    ],
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We deep-dive into your business goals, challenges, and technical landscape.' },
  { step: '02', title: 'Strategy', desc: 'We design a tailored roadmap with clear milestones and technology choices.' },
  { step: '03', title: 'Design', desc: 'UX/UI design and system architecture aligned to your users and scale.' },
  { step: '04', title: 'Development', desc: 'Agile sprints with continuous delivery and transparent progress updates.' },
  { step: '05', title: 'Testing', desc: 'Rigorous QA, security reviews, and performance benchmarking.' },
  { step: '06', title: 'Launch & Support', desc: 'Smooth deployment with ongoing monitoring, updates, and optimization.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient grid-overlay pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block bg-white/15 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              End-to-End Digital Solutions
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              From AI development to cloud infrastructure, we deliver everything your business needs
              to lead in the digital age.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.05}>
              <div className={`bg-white border ${svc.border} rounded-2xl p-8 md:p-10 card-glow`}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className={`w-14 h-14 ${svc.lightBg} ${svc.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <svc.icon size={28} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{svc.title}</h2>
                    <p className="text-slate-500">{svc.tagline}</p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {svc.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className={`${svc.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-700 text-sm">{f}</span>
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

      {/* Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">Our Delivery Process</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A proven, transparent 6-step process that ensures quality and alignment at every stage.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.08}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 card-glow">
                  <span className="text-4xl font-black gradient-text">{p.step}</span>
                  <h3 className="text-slate-900 font-semibold text-lg mt-2 mb-1">{p.title}</h3>
                  <p className="text-slate-500 text-sm">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
            <p className="text-blue-100 mb-8">Tell us about your challenge and we&apos;ll help you find the right solution.</p>
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Let&apos;s Talk <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
