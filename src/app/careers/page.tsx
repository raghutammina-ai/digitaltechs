import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, ArrowRight, Heart, Zap, Globe, Users } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Digital Tech Prosperity — build AI solutions that transform industries. Explore open roles across engineering, data science, and more.',
}

const perks = [
  { icon: Globe,  title: 'Remote-First',        desc: 'Work from anywhere. We hire globally and support flexible working arrangements.' },
  { icon: Zap,    title: 'Cutting-Edge Tech',    desc: 'Work with the latest AI models, cloud platforms, and modern engineering tools every day.' },
  { icon: Heart,  title: 'Great Culture',        desc: 'Collaborative, transparent, and supportive team. No politics — just great work.' },
  { icon: Users,  title: 'Learning & Growth',    desc: 'Conference budgets, certifications, and a culture that encourages continuous learning.' },
]

const openings = [
  {
    title: 'Senior AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    desc: 'Design and build production AI systems using LLMs, computer vision, and ML pipelines for clients across healthcare, finance, and retail.',
    skills: ['Python', 'PyTorch', 'LangChain', 'MLOps', 'AWS'],
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    desc: 'Build scalable web and mobile applications using React, Next.js, and Node.js. Work directly with clients across multiple industries.',
    skills: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Data Engineer',
    department: 'Data & Analytics',
    location: 'Remote / India',
    type: 'Full-time',
    desc: 'Design and implement robust data pipelines, warehouses, and real-time analytics platforms for enterprise clients.',
    skills: ['Apache Spark', 'Kafka', 'dbt', 'Snowflake', 'Python'],
  },
  {
    title: 'Cloud & DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / India',
    type: 'Full-time',
    desc: 'Build and maintain cloud infrastructure, CI/CD pipelines, and Kubernetes environments for clients across industries.',
    skills: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'AI Product Manager',
    department: 'Product',
    location: 'Remote / India',
    type: 'Full-time',
    desc: 'Bridge client needs and engineering teams. Own the product roadmap for AI solutions across our key industry verticals.',
    skills: ['Product Strategy', 'AI/ML knowledge', 'Agile', 'Stakeholder Management'],
  },
  {
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'Remote / India',
    type: 'Full-time',
    desc: 'Drive new client relationships and revenue growth. Help companies across all industries discover how AI can transform their business.',
    skills: ['B2B Sales', 'AI Knowledge', 'CRM', 'Proposal Writing'],
  },
]

const departmentColors: Record<string, string> = {
  'Engineering':      'bg-blue-50 text-blue-600',
  'Data & Analytics': 'bg-cyan-50 text-cyan-600',
  'Infrastructure':   'bg-teal-50 text-teal-600',
  'Product':          'bg-purple-50 text-purple-600',
  'Sales':            'bg-orange-50 text-orange-600',
}

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient grid-overlay pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block bg-white/15 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Build AI That Matters
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We&apos;re a team of engineers, data scientists, and problem solvers building intelligent solutions
              across every industry. Come build the future with us.
            </p>
            <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
              <span>🌍 Remote-First</span>
              <span>🚀 {openings.length} Open Roles</span>
              <span>🤝 Collaborative Culture</span>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Why DTP</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Why People Love Working Here</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center card-glow">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <p.icon size={22} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Open Positions</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Current Openings</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.05}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 card-glow">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${departmentColors[job.department]}`}>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <MapPin size={11} />{job.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Clock size={11} />{job.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{job.title}</h3>
                      <p className="text-slate-500 text-sm mb-3">{job.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map(s => (
                          <span key={s} className="text-xs bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      Apply Now <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <p className="text-slate-500 mb-4">Don&apos;t see the right role? We&apos;re always open to exceptional talent.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
              Send us your CV <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
