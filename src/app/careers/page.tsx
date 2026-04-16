import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, ArrowRight, Heart, Zap, Globe, Users } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Digital Tech Prosperity — build AI solutions that transform industries. Explore open roles across engineering, data science, and more.',
}

const perks = [
  { icon: Globe,  title: 'Remote-First',      desc: 'Work from anywhere. We hire globally and support flexible working arrangements.' },
  { icon: Zap,    title: 'Cutting-Edge Tech',  desc: 'Work with the latest AI models, cloud platforms, and modern engineering tools every day.' },
  { icon: Heart,  title: 'Great Culture',      desc: 'Collaborative, transparent, and supportive team. No politics — just great work.' },
  { icon: Users,  title: 'Learning & Growth',  desc: 'Conference budgets, certifications, and a culture that encourages continuous learning.' },
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
  'Engineering':      'bg-blue-500/10 text-blue-300 border-blue-500/20',
  'Data & Analytics': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  'Infrastructure':   'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  'Product':          'bg-violet-500/10 text-violet-300 border-violet-500/20',
  'Sales':            'bg-orange-500/10 text-orange-300 border-orange-500/20',
}

export default function CareersPage() {
  return (
    <div className="bg-[#04040a] text-white">

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
                Join Our Team
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.04] text-white mb-6">
              Build AI That{' '}
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Matters.
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              We&apos;re a team of engineers, data scientists, and problem solvers building intelligent
              solutions across every industry. Come build the future with us.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-sm">
              <span className="flex items-center gap-1.5"><Globe size={14} className="text-blue-400" /> Remote-First</span>
              <span className="flex items-center gap-1.5"><Zap size={14} className="text-violet-400" /> {openings.length} Open Roles</span>
              <span className="flex items-center gap-1.5"><Users size={14} className="text-cyan-400" /> Collaborative Culture</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="py-24 border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-4 block">Why DTP</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white mb-4">Why People Love Working Here</h2>
            <p className="text-slate-300 text-lg max-w-md mx-auto">The benefits, culture, and perks that make DTP a great place to grow.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div className="p-[1px] rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.1), rgba(255,255,255,0.05))' }}>
                  <div className="bg-[#060612] hover:bg-[#08081a] rounded-2xl p-7 h-full text-center transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                      style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(99,102,241,0.25)' }}>
                      <p.icon size={20} className="text-blue-400" />
                    </div>
                    <h3 className="font-bold text-white mb-2 tracking-tight">{p.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400 mb-4 block">Open Positions</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white mb-4">Current Openings</h2>
            <p className="text-slate-300 text-base max-w-sm mx-auto leading-relaxed">
              All roles are remote-friendly and full-time.
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.06}>
                <div className="p-[1px] rounded-2xl transition-all duration-300 hover:-translate-y-0.5 group"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))' }}>
                  <div className="bg-[#07070e] group-hover:bg-[#09091a] rounded-2xl p-6 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${departmentColors[job.department]}`}>
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-300">
                            <MapPin size={11} />{job.location}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-300">
                            <Clock size={11} />{job.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">{job.title}</h3>
                        <p className="text-slate-300 text-sm mb-4 leading-relaxed">{job.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {job.skills.map(s => (
                            <span key={s} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg text-slate-300"
                              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="group/btn inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-white text-sm transition-all duration-200 whitespace-nowrap flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 0 20px rgba(99,102,241,0.25)' }}
                      >
                        Apply Now <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-slate-300 mb-4">Don&apos;t see the right role? We&apos;re always open to exceptional talent.</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group">
              Send us your CV <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.08) 0%, transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white mb-5">
              Ready to Shape the Future?
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Join a team that builds intelligent technology for the world&apos;s most important industries.
            </p>
            <Link href="/contact"
              className="group inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}>
              Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
