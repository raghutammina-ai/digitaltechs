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