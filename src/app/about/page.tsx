import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Lightbulb, Zap, Users, Shield, Globe, Award } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Digital Tech Prosperity — delivering AI and digital solutions across multiple countries. Our mission, values, and team.',
}

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation with Purpose',
    desc: 'We don\'t innovate for innovation\'s sake. Every technology choice is driven by the tangible value it creates for your business.',
  },
  {
    icon: Zap,
    title: 'Automation for Efficiency',
    desc: 'Manual processes are bottlenecks. We identify, design, and deploy automation that frees your team to focus on what truly matters.',
  },
  {
    icon: Users,
    title: 'Partnership for Growth',
    desc: 'The best outcomes come from deep collaboration. We embed ourselves in your goals, challenges, and culture.',
  },
  {
    icon: Shield,
    title: 'Transformation with Integrity',
    desc: 'Security, transparency, and ethical AI are non-negotiables. We build responsibly and hold ourselves accountable.',
  },
]

const milestones = [
  {
    year: '2025',
    isCurrent: false,
    items: [
      { title: 'Company Founded',      event: 'Founded with a mission to deliver modern AI and digital solutions.' },
      { title: 'First Client Project', event: 'Successfully delivered our first client project on time and on budget.' },
      { title: 'Service Expansion',    event: 'Expanded our offering to AI, Web Development, and Data Solutions.' },
      { title: 'Growing Team',         event: 'Built a strong team of engineers, designers, and strategists.' },
    ],
  },
  {
    year: '2026',
    isCurrent: true,
    items: [
      { title: 'Product Innovation',      event: 'Launched internal AI tools and automation solutions to improve efficiency.' },
      { title: 'Scaling Operations',      event: 'Expanded operations, serving clients across multiple regions.' },
      { title: 'Strategic Partnerships',  event: 'Partnered with startups and enterprises for scalable digital solutions.' },
      { title: 'Brand Growth',            event: 'Strengthened brand presence and built long-term client relationships.' },
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
                About Us
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.04] text-white mb-6">
              Digital Innovation.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Global Reach.
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We are Digital Tech Prosperity — a team of engineers, data scientists, and strategists
              dedicated to building the intelligent technology of tomorrow, today.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06]">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08} className="p-8 text-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                  <s.icon size={18} className="text-blue-400" />
                </div>
                <div className="text-4xl font-extrabold text-white mb-1 tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  {s.value}
                </div>
                <div className="text-slate-500 text-sm font-medium">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-4 block">Our Story</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white mb-6 leading-tight">
                Built to Deliver AI That Works
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-base">
                <p>Digital Tech Prosperity was founded in 2025 with a vision to help businesses grow through modern technology.</p>
                <p>We are a passionate team focused on building scalable solutions in AI, web development, and data-driven systems. Our approach combines innovation, simplicity, and performance to deliver real business value.</p>
                <p>As a growing company, we are committed to learning, evolving, and helping our clients succeed in the digital world.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="space-y-4">
                <div className="p-[1px] rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.4), rgba(99,102,241,0.3))' }}>
                  <div className="bg-[#07071a] rounded-2xl p-7">
                    <h3 className="font-bold text-xl text-white mb-3">Our Mission</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      To empower organisations worldwide with intelligent, scalable digital solutions
                      that accelerate growth, improve efficiency, and create lasting value.
                    </p>
                  </div>
                </div>
                <div className="p-[1px] rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))' }}>
                  <div className="bg-[#07070e] rounded-2xl p-7">
                    <h3 className="font-bold text-xl text-white mb-3">Our Vision</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      To be the most trusted digital transformation partner for businesses across every
                      industry — known for integrity, innovation, and measurable impact.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-4 block">Our Values</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white mb-4">What We Stand For</h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto">The principles that guide every decision, every line of code, and every client engagement.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="p-[1px] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]"
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.1), rgba(255,255,255,0.05))' }}>
                  <div className="flex items-start gap-5 bg-[#060612] hover:bg-[#08081a] rounded-2xl p-7 h-full transition-colors duration-300">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(99,102,241,0.25)' }}>
                      <v.icon size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2 tracking-tight">{v.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400 mb-4 block">Journey</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-white mb-4">Our Milestones</h2>
            <p className="text-slate-500 text-base max-w-sm mx-auto leading-relaxed">
              Every great journey starts with a single step. Here&apos;s ours.
            </p>
          </AnimatedSection>

          <div className="space-y-14">
            {milestones.map((group, gi) => (
              <AnimatedSection key={group.year} delay={gi * 0.1}>
                {/* Year header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-extrabold tracking-tight tabular-nums"
                    style={{
                      background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                    {group.year}
                  </span>
                  <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(99,102,241,0.4), transparent)' }} />
                  {group.isCurrent && (
                    <span className="text-[11px] font-semibold text-violet-400 px-3 py-1 rounded-full"
                      style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}>
                      Current
                    </span>
                  )}
                </div>

                {/* Items */}
                <div className="relative">
                  <div className="absolute left-[9px] top-2 bottom-2 w-px"
                    style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.6), rgba(99,102,241,0.2), transparent)' }} />
                  <div className="space-y-3">
                    {group.items.map((m, i) => (
                      <AnimatedSection key={m.title} delay={gi * 0.1 + i * 0.06} direction="right">
                        <div className="relative flex items-start gap-5 pl-8">
                          <div className="absolute left-[5px] top-[1.1rem] w-[9px] h-[9px] rounded-full bg-violet-500"
                            style={{ boxShadow: '0 0 10px rgba(139,92,246,0.7)' }} />
                          <div className="p-[1px] rounded-2xl flex-1 transition-all duration-300 hover:-translate-y-0.5 group"
                            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))' }}>
                            <div className="bg-[#07070e] group-hover:bg-[#09091a] rounded-2xl px-5 py-4 transition-colors duration-300">
                              <h4 className="font-semibold text-sm text-white mb-1 tracking-tight">{m.title}</h4>
                              <p className="text-[13px] leading-relaxed text-slate-500">{m.event}</p>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
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
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-slate-500 text-lg mb-10">
              Join clients already partnering with Digital Tech Prosperity.
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
