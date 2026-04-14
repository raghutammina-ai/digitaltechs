import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Digital Tech Prosperity — 10+ years delivering AI and digital solutions across 15+ countries. Our mission, values, and team.',
}
import { ArrowRight, Lightbulb, Zap, Users, Shield, Globe, Award } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation with Purpose',
    desc: 'We don\'t innovate for innovation\'s sake. Every technology choice is driven by the tangible value it creates for your business and customers.',
    iconColor: 'text-yellow-400',
    glowColor: 'group-hover:border-yellow-500/40',
    iconBg: 'bg-yellow-500/10',
  },
  {
    icon: Zap,
    title: 'Automation for Efficiency',
    desc: 'Manual processes are bottlenecks. We identify, design, and deploy automation that frees your team to focus on what truly matters.',
    iconColor: 'text-blue-400',
    glowColor: 'group-hover:border-blue-500/40',
    iconBg: 'bg-blue-500/10',
  },
  {
    icon: Users,
    title: 'Partnership for Growth',
    desc: 'The best outcomes come from deep collaboration. We embed ourselves in your goals, challenges, and culture — not just your tech stack.',
    iconColor: 'text-emerald-400',
    glowColor: 'group-hover:border-emerald-500/40',
    iconBg: 'bg-emerald-500/10',
  },
  {
    icon: Shield,
    title: 'Transformation with Integrity',
    desc: 'Security, transparency, and ethical AI are non-negotiables. We build responsibly and hold ourselves accountable to the highest standards.',
    iconColor: 'text-violet-400',
    glowColor: 'group-hover:border-violet-500/40',
    iconBg: 'bg-violet-500/10',
  },
]

const milestones = [
  { year: '2025', title: 'Company Founded',    event: 'Founded with a mission to deliver modern AI and digital solutions.' },
  { year: '2025', title: 'First Client Project', event: 'Successfully delivered our first client project.' },
  { year: '2025', title: 'Service Expansion',  event: 'Expanded services to AI, Web Development, and Data Solutions.' },
  { year: '2025', title: 'Growing Team',       event: 'Building a passionate team of developers and designers.' },
]

const stats = [
  { icon: Award,  value: '1+',  label: 'Years of Experience' },
  { icon: Globe,  value: '2+',  label: 'Countries'           },
  { icon: Users,  value: '10+', label: 'Clients'             },
  { icon: Zap,    value: '6+',  label: 'Projects'            },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient grid-overlay pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block bg-white/15 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Digital Innovation. Global Reach.
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We are Digital Tech Prosperity — a team of engineers, data scientists, and strategists
              dedicated to building the intelligent technology of tomorrow, today.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center card-glow">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <s.icon size={20} />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="text-slate-500 text-sm mt-1">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Digital Tech Prosperity was founded in 2025 with a vision to help businesses
                  grow through modern technology.
                </p>
                <p>
                  We are a passionate team focused on building scalable solutions in AI, web
                  development, and data-driven systems. Our approach combines innovation,
                  simplicity, and performance to deliver real business value.
                </p>
                <p>
                  As a growing startup, we are committed to learning, evolving, and helping
                  our clients succeed in the digital world.
                </p>
              </div>
            </AnimatedSection>

            {/* Mission & Vision */}
            <AnimatedSection direction="left">
              <div className="space-y-5">
                <div className="bg-blue-600 text-white rounded-2xl p-6">
                  <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                  <p className="text-blue-100">
                    To empower organizations worldwide with intelligent, scalable digital solutions
                    that accelerate growth, improve efficiency, and create lasting value.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Our Vision</h3>
                  <p className="text-slate-600">
                    To be the most trusted digital transformation partner for businesses across every
                    industry — known for integrity, innovation, and measurable impact.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#030712] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block">
              Our Values
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              The principles that guide every decision, every line of code, and every client engagement.
            </p>
          </AnimatedSection>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div
                  className={`group relative flex flex-col gap-4 rounded-2xl p-7 h-full border border-white/[0.07] ${v.glowColor} transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl`}
                  style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
                >
                  {/* Icon */}
                  <div className={`w-11 h-11 ${v.iconBg} ${v.iconColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <v.icon size={22} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
                      {v.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#030712] py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block">Journey</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">Our Milestones</h2>
            <p className="text-slate-400 text-lg max-w-md mx-auto">
              Every great journey starts with a single step. Here&apos;s ours.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <AnimatedSection key={`${m.title}-${i}`} delay={i * 0.1} direction="right">
                  <div className="relative flex items-start gap-6 pl-12">
                    {/* Dot */}
                    <div className="absolute left-[10px] mt-1.5 w-4 h-4 bg-blue-600 rounded-full border-2 border-[#030712] shadow-lg shadow-blue-600/40 flex-shrink-0" />

                    {/* Card */}
                    <div
                      className="flex-1 rounded-2xl p-5 transition-all duration-300 hover:border-white/[0.12]"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{m.year}</span>
                      <h4 className="text-white font-semibold text-base mt-1 mb-1">{m.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Build Something Great Together</h2>
            <p className="text-blue-100 mb-8">Join 50+ companies already partnering with Digital Tech Prosperity.</p>
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
