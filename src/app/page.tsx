'use client'

import AnimatedSection from '@/components/AnimatedSection'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep-dive into your business goals, challenges, and technical landscape.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Design a tailored roadmap with clear milestones and technology choices.',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'UX/UI design and system architecture aligned to your users and scale.',
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Agile sprints with continuous delivery and transparent progress updates.',
  },
  {
    num: '05',
    title: 'Testing',
    desc: 'Rigorous QA, security reviews, and performance benchmarking.',
  },
  {
    num: '06',
    title: 'Launch & Support',
    desc: 'Smooth deployment with ongoing monitoring, updates, and optimization.',
  },
]

export default function DeliveryProcess() {
  return (
    <section className="py-20 bg-[#030712] text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-2">
            HOW WE WORK
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Our Delivery Process
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven, transparent 6-step process that ensures quality and alignment at every stage.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={i}>
              <div className="border border-white/10 rounded-2xl p-6">

                {/* NUMBER (ORIGINAL DARK STYLE) */}
                <span className="text-5xl font-bold text-gray-600">
                  {step.num}
                </span>

                {/* TITLE */}
                <h3 className="mt-4 font-semibold text-white">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-400 mt-2">
                  {step.desc}
                </p>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}