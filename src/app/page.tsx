'use client'

import Link from 'next/link'
import {
  Brain, BarChart3, Code2, Cloud, Lock, Cpu,
} from 'lucide-react'

import AnimatedSection from '@/components/AnimatedSection'
import NeuralNetwork from '@/components/NeuralNetwork'
import TypewriterText from '@/components/TypewriterText'

/* ---------- DATA ---------- */

const services = [
  { icon: Brain, title: 'AI Development', desc: 'Custom AI apps.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Data insights.' },
  { icon: Code2, title: 'Engineering', desc: 'Full-stack apps.' },
  { icon: Cloud, title: 'Cloud', desc: 'Scalable infra.' },
  { icon: Lock, title: 'Security', desc: 'Secure systems.' },
  { icon: Cpu, title: 'Testing', desc: 'Automation QA.' },
]
  { icon: Brain, title: 'AI Application Development', desc: 'Custom AI-powered apps.', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: BarChart3, title: 'Data Analytics', desc: 'Turn data into insights.', color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { icon: Code2, title: 'Product Engineering', desc: 'Build scalable apps.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'Modern infrastructure.', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: Lock, title: 'Cybersecurity', desc: 'Secure your systems.', color: 'text-rose-600', bg: 'bg-rose-50' },
  { icon: Cpu, title: 'QA & Testing', desc: 'AI testing automation.', color: 'text-violet-600', bg: 'bg-violet-50' },
];

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Real business impact.' },
  { icon: Zap, title: 'Automation', desc: 'Increase efficiency.' },
  { icon: Users, title: 'Partnership', desc: 'Grow together.' },
  { icon: Shield, title: 'Integrity', desc: 'Secure & transparent.' },
];

const processSteps = [
  { step: '01', title: 'Discover', desc: 'Understand goals.' },
  { step: '02', title: 'Design', desc: 'Plan architecture.' },
  { step: '03', title: 'Build', desc: 'Develop solution.' },
  { step: '04', title: 'Deploy', desc: 'Launch smoothly.' },
  { step: '05', title: 'Optimise', desc: 'Improve continuously.' },
];

const clientResults = [
  {
    industry: 'Healthcare',
    icon: '🏥',
    metric: '40%',
    metricLabel: 'Faster Diagnosis',
    result: 'AI-powered diagnostic imaging platform reduced radiology report turnaround by 40%, enabling earlier intervention for 12,000+ patients annually.',
    tags: ['Medical Imaging', 'NLP', 'EHR Integration'],
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    industry: 'Finance',
    icon: '🏦',
    metric: '92%',
    metricLabel: 'Fraud Detection Accuracy',
    result: 'Real-time fraud detection model deployed across 3 million daily transactions, achieving 92% accuracy and saving $4.2M in fraudulent losses in year one.',
    tags: ['Fraud Detection', 'ML Pipeline', 'Real-time Scoring'],
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    industry: 'Retail',
    icon: '🛒',
    metric: '3.1×',
    metricLabel: 'ROI on Personalisation',
    result: 'Recommendation engine personalised product discovery for 800K shoppers, lifting average order value by 27% and delivering 3.1× ROI within 6 months.',
    tags: ['Recommendation Engine', 'A/B Testing', 'Behavioural Analytics'],
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    industry: 'Manufacturing',
    icon: '🏭',
    metric: '68%',
    metricLabel: 'Downtime Reduction',
    result: 'Predictive maintenance solution analysing IoT sensor data from 200+ machines cut unplanned downtime by 68% and reduced maintenance costs by $1.8M/yr.',
    tags: ['Predictive Maintenance', 'IoT', 'Anomaly Detection'],
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
];

/* ---------------- PAGE ---------------- */

export default function HomePage() {
  return (
    <div className="bg-[#030712] text-white overflow-x-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center relative">
        <NeuralNetwork />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            AI & Digital Solutions
          </h1>

          <TypewriterText />

          <p className="text-gray-400 mt-4 mb-6">
            Build smarter systems with AI.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 px-6 py-3 rounded-lg"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="border border-white/20 px-6 py-3 rounded-lg"
            >
              Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES (ORIGINAL SIMPLE STYLE) */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-10">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {services.map((s, i) => (
            <AnimatedSection key={i}>
              <div className="border border-white/10 p-6 rounded-xl">

                <s.icon className="mb-3" />

                <h3 className="font-semibold">{s.title}</h3>
      {/* WHY US */}
      <section className="bg-slate-50 py-20">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <ul>
              {values.map((v, i) => (
                <li key={i} className="flex gap-2 mb-2">
                  <CheckCircle2 size={16} /> {v.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Industries</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">We Serve Every Industry</h2>
            <p className="text-slate-500 mt-2">Click any industry to explore our tailored AI solutions.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Healthcare', slug: 'healthcare' },
                { name: 'Real Estate', slug: 'real-estate' },
                { name: 'Travel & Hospitality', slug: 'travel' },
                { name: 'Retail & E-commerce', slug: 'retail' },
                { name: 'Agriculture', slug: 'agriculture' },
              ].map(({ name, slug }) => (
                <Link
                  key={name}
                  href={`/industries/${slug}`}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                >
                  {name} →
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Results */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Proven Results</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Outcomes Across Industries
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Measurable impact from delivered projects. Client names withheld under NDA —
              references available on request.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientResults.map((r, i) => (
              <AnimatedSection key={r.industry} delay={i * 0.1}>
                <div className={`bg-slate-50 border ${r.border} rounded-2xl p-7 card-glow h-full flex flex-col`}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{r.icon}</span>
                      <span className={`text-sm font-semibold ${r.color} ${r.bg} px-3 py-1 rounded-full`}>
                        {r.industry}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-black ${r.color}`}>{r.metric}</div>
                      <div className="text-xs text-slate-400 font-medium">{r.metricLabel}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">{r.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white border border-slate-200 text-slate-500 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

                <p className="text-sm text-gray-400">
                  {s.desc}
                </p>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

    </div>
  )
}