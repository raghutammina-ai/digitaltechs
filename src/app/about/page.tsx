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
    desc: 'We don\'t innovate for innovation\'s sake. Every technology choice is driven by the tangible value it creates for your business and your customers.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    icon: Zap,
    title: 'Automation for Efficiency',
    desc: 'Manual processes are bottlenecks. We identify, design, and deploy automation that frees your team to focus on what truly matters.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Partnership for Growth',
    desc: 'We believe the best outcomes come from deep collaboration. We embed ourselves in your goals, challenges, and culture — not just your tech stack.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Shield,
    title: 'Transformation with Integrity',
    desc: 'Security, transparency, and ethical AI are non-negotiables. We build responsibly and hold ourselves accountable to the highest standards.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

const milestones = [
  { year: '2014', event: 'Founded with a mission to make AI accessible to every business' },
  { year: '2016', event: 'First enterprise data analytics platform delivered to a Fortune 500 client' },
  { year: '2018', event: 'Expanded globally with teams across Asia, Europe, and North America' },
  { year: '2020', event: 'Launched our AI Centre of Excellence for rapid prototyping' },
  { year: '2022', event: 'Crossed 200+ projects and 50+ enterprise clients worldwide' },
  { year: '2024', event: 'Pioneering Generative AI solutions across 15+ industry verticals' },
]

const stats = [
  { icon: Award,  value: '10+', label: 'Years of Expertise' },
  { icon: Globe,  value: '15+', label: 'Countries' },
  { icon: Users,  value: '50+', label: 'Happy Clients' },
  { icon: Zap,    value: '200+', label: 'Projects Delivered' },
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
                A Decade of Driving Digital Transformation
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Digital Tech Prosperity was born from a simple belief: that intelligent technology
                  should be accessible to every business, regardless of size or sector.
                </p>
                <p>
                  Over the past decade, we&apos;ve grown from a small team of passionate technologists
                  into a global digital solutions partner, serving clients across 15+ countries and
                  delivering 200+ transformative projects.
                </p>
                <p>
                  Today, we specialize in AI application development, data intelligence, custom software,
                  and cloud engineering — combining deep technical expertise with genuine business
                  understanding to deliver solutions that move the needle.
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
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">What We Stand For</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl p-7 card-glow">
                  <div className={`w-12 h-12 ${v.bg} ${v.color} rounded-xl flex items-center justify-center mb-4`}>
                    <v.icon size={24} />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Our Milestones</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.08} direction="right">
                  <div className="relative flex items-start gap-6 pl-20">
                    <div className="absolute left-5 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center -translate-x-1/2" />
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex-1">
                      <span className="text-blue-600 font-bold text-sm">{m.year}</span>
                      <p className="text-slate-700 mt-1">{m.event}</p>
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
