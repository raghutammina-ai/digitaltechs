import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Digital Tech Prosperity — delivering AI and digital solutions across multiple countries. Our mission, values, and team.',
}
import { ArrowRight, Lightbulb, Zap, Users, Shield, Globe, Award } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation with Purpose',
    desc: 'We don\'t innovate for innovation\'s sake. Every technology choice is driven by the tangible value it creates for your business and customers.',
  },
  {
    icon: Zap,
    title: 'Automation for Efficiency',
    desc: 'Manual processes are bottlenecks. We identify, design, and deploy automation that frees your team to focus on what truly matters.',
  },
  {
    icon: Users,
    title: 'Partnership for Growth',
    desc: 'The best outcomes come from deep collaboration. We embed ourselves in your goals, challenges, and culture — not just your tech stack.',
  },
  {
    icon: Shield,
    title: 'Transformation with Integrity',
    desc: 'Security, transparency, and ethical AI are non-negotiables. We build responsibly and hold ourselves accountable to the highest standards.',
  },
]

const milestones = [
  {
    year: '2025',
    items: [
      { title: 'Company Founded',    event: 'Founded with a mission to deliver modern AI and digital solutions.' },
      { title: 'First Client Project', event: 'Successfully delivered our first client project.' },
      { title: 'Service Expansion',  event: 'Expanded services to AI, Web Development, and Data Solutions.' },
      { title: 'Growing Team',       event: 'Built a strong team of developers and designers.' },
    ],
  },
  {
    year: '2026',
    items: [
      { title: 'Product Innovation',     event: 'Launched internal AI tools and automation solutions to improve efficiency.' },
      { title: 'Scaling Operations',     event: 'Expanded operations and started serving clients across multiple regions.' },
      { title: 'Strategic Partnerships', event: 'Partnered with startups and enterprises to deliver scalable digital solutions.' },
      { title: 'Brand Growth',           event: 'Strengthened brand presence and built long-term client relationships.' },
    ],
  },
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
                <div className="group flex flex-col gap-4 rounded-2xl p-7 h-full bg-gradient-to-br from-[#0B1220] via-[#0F172A] to-black border border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300">

                  {/* Icon */}
                  <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <v.icon size={22} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-300">
                      {v.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
      <section className="relative bg-[#030712] py-28 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4 block">
              Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Our Milestones
            </h2>
            <p className="text-slate-500 text-base max-w-sm mx-auto leading-relaxed">
              Every great journey starts with a single step. Here&apos;s ours.
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {milestones.map((group, gi) => {
              const isCurrent = gi === milestones.length - 1
              return (
                <AnimatedSection key={group.year} delay={gi * 0.1}>

                  {/* Year row */}
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-2xl font-black tracking-tight tabular-nums bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      {group.year}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                    {isCurrent && (
                      <span className="text-[11px] font-medium tracking-wide text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Item list */}
                  <div className="relative">
                    {/* Vertical connector */}
                    <div className="absolute left-[9px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/70 via-blue-500/30 to-transparent" />

                    <div className="space-y-3">
                      {group.items.map((m, i) => (
                        <AnimatedSection key={m.title} delay={gi * 0.1 + i * 0.06} direction="right">
                          <div className="relative flex items-start gap-5 pl-8">

                            {/* Node dot */}
                            <div className="absolute left-[5px] top-[1.1rem] w-[9px] h-[9px] rounded-full flex-shrink-0 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />

                            {/* Card */}
                            <div
                              className="group flex-1 rounded-2xl px-5 py-4 border border-blue-500/20 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-default"
                              style={{ background: 'rgba(59,130,246,0.03)', backdropFilter: 'blur(8px)' }}
                            >
                              <h4 className="font-semibold text-sm mb-1 leading-snug tracking-[-0.01em] text-white/90 group-hover:text-white transition-colors duration-300">
                                {m.title}
                              </h4>
                              <p className="text-[13px] leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                                {m.event}
                              </p>
                            </div>

                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>

                </AnimatedSection>
              )
            })}
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
