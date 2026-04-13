'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain, BarChart3, Code2, Cloud, Lock, Cpu,
  ArrowRight, CheckCircle2, Zap, Shield, Users,
  Sparkles, Globe, TrendingUp
} from 'lucide-react'

import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
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
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain, BarChart3, Code2, Cloud, ArrowRight,
  CheckCircle2, Users, Zap, Shield, Lightbulb,
  Lock, Cpu, Phone
} from 'lucide-react';

import AnimatedSection from '@/components/AnimatedSection';
import NeuralNetwork from '@/components/NeuralNetwork';
import TypewriterText from '@/components/TypewriterText';
import AnimatedCounter from '@/components/AnimatedCounter';
import ROICalculator from '@/components/ROICalculator';
import TechStack from '@/components/TechStack';
import NewsletterSection from '@/components/NewsletterSection';

/* ---------------- DATA ---------------- */

const services = [
  { icon: Brain, title: 'AI Application Development', desc: 'Custom AI-powered apps.', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: BarChart3, title: 'Data Analytics', desc: 'Turn data into insights.', color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { icon: Code2, title: 'Product Engineering', desc: 'Build scalable apps.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'Modern infrastructure.', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: Lock, title: 'Cybersecurity', desc: 'Secure your systems.', color: 'text-rose-600', bg: 'bg-rose-50' },
  { icon: Cpu, title: 'QA & Testing', desc: 'AI testing automation.', color: 'text-violet-600', bg: 'bg-violet-50' },
];

const stats = [
  { icon: Users, target: 6561, suffix: '+', label: 'Clients' },
  { icon: TrendingUp, target: 600, suffix: '+', label: 'Projects' },
  { icon: Globe, target: 15, suffix: '+', label: 'Countries' },
  { icon: Sparkles, target: 10, suffix: '+', label: 'Years' },
]

const processSteps = [
  { step: '01', title: 'Discover' },
  { step: '02', title: 'Design' },
  { step: '03', title: 'Build' },
  { step: '04', title: 'Deploy' },
  { step: '05', title: 'Optimise' },
]

/* ---------- PAGE ---------- */

export default function HomePage() {
  return (
    <div className="bg-[#030712] text-white overflow-x-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center">
        <NeuralNetwork />

        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            AI & Digital Solutions
          </h1>

          <TypewriterText />

          <p className="text-gray-400 mt-4 mb-6">
            Build smarter systems with AI.
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 px-6 py-3 rounded-lg">
              Get Started
            </Link>
            <Link href="/services" className="border px-6 py-3 rounded-lg">
              Services
            </Link>
    <>
      {/* HERO */}
      <section className="relative min-h-screen hero-gradient flex items-center text-center">
        <NeuralNetwork />

        <div className="max-w-6xl mx-auto px-4 py-32">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            AI & Digital Transformation
          </span>

          <h1 className="text-5xl font-bold text-white mt-6 mb-4">
            Transform Your Business with
            <span className="text-cyan-300"> AI Solutions</span>
          </h1>

          <TypewriterText />

          <p className="text-blue-100 mt-4 mb-8">
            Build, automate, and scale with AI-powered systems.
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg">
              <Phone size={16} /> Get Free Consultation
            </Link>
            <Link href="/services" className="border text-white px-6 py-3 rounded-lg">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <AnimatedSection key={i}>
              <div className="text-center">
                <s.icon className="mx-auto mb-2 text-blue-400" />
                <h3 className="text-3xl font-bold">
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </h3>
                <p className="text-sm text-gray-400">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-10">Services</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <AnimatedSection key={i}>
              <div className="border p-6 rounded-xl">
                <s.icon />
                <h3 className="mt-2 font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-10">Process</h2>

        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {processSteps.map((p) => (
            <div key={p.step} className="border p-4 rounded text-center">
              <h3 className="text-xl font-bold">{p.step}</h3>
              <p>{p.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready?</h2>
        <Link href="/contact" className="bg-blue-600 px-6 py-3 rounded-lg">
          Contact Us
        </Link>
      </section>

    </div>
  )
}
      {/* EXTRA */}
      <ROICalculator />
      <TechStack />
      <NewsletterSection />

      {/* CTA */}
      <section className="py-20 text-center hero-gradient text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg">
          Contact Us
        </Link>
      </section>
    </>
  );
}
      {/* SERVICES */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <AnimatedSection key={i}>
              <div className="border p-6 rounded-xl hover:shadow-lg">
                <s.icon />
                <h3 className="font-semibold mt-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

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

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={i} className="border p-4 rounded-xl">
                <v.icon />
                <h4>{v.title}</h4>
                <p className="text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold mb-10">Process</h2>

        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {processSteps.map((p) => (
            <div key={p.step} className="border p-4 rounded-xl text-center">
              <h3 className="text-xl font-bold">{p.step}</h3>
              <p>{p.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA */}
      <ROICalculator />
      <TechStack />
      <NewsletterSection />

      {/* CTA */}
      <section className="py-20 text-center hero-gradient text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg">
          Contact Us
        </Link>
      </section>
    </>
  );
}
}
