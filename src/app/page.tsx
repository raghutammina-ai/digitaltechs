'use client'

import Link from 'next/link'
import {
  Brain, BarChart3, Code2, Cloud, Lock, Cpu,
} from 'lucide-react'

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
    <div className="bg-[#030712] text-white min-h-screen">

      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-10">Services</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {services.map((s, i) => (
            <div key={i}>
              <div className="group bg-gradient-to-br from-[#0B1220] via-[#0F172A] to-black border border-blue-500/30 rounded-2xl p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1">
                
                <div className="text-blue-400 group-hover:text-blue-300 transition mb-3">
                  <s.icon />
                </div>

                <h3 className="mt-2 font-semibold text-white group-hover:text-blue-400 transition">
                  {s.title}
                </h3>

                <p className="text-sm text-gray-400 group-hover:text-gray-300">
                  {s.desc}
                </p>

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}