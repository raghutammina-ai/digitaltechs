'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const categories = [
  {
    name: 'General',
    faqs: [
      {
        q: 'What does Digital Tech Prosperity do?',
        a: 'We are an end-to-end AI and digital solutions company. We build AI applications, data analytics platforms, custom software, and cloud infrastructure for businesses across every industry — from healthcare and finance to retail, manufacturing, logistics, and government.',
      },
      {
        q: 'Which industries do you serve?',
        a: 'We serve all industries. Our AI and software solutions have been deployed in healthcare, finance & banking, retail & e-commerce, manufacturing, education, logistics, real estate, government, pharma, energy, telecom, agriculture, legal, media, insurance, and travel & hospitality.',
      },
      {
        q: 'Where are you based and do you work with international clients?',
        a: 'We are headquartered in India and operate globally with teams and clients across 15+ countries in Asia, Europe, North America, and the Middle East. We work fully remote and are timezone-flexible.',
      },
      {
        q: 'How long has Digital Tech Prosperity been operating?',
        a: 'We have been delivering AI and digital solutions for 10+ years, with 200+ projects completed and 50+ enterprise clients worldwide.',
      },
    ],
  },
  {
    name: 'AI Services',
    faqs: [
      {
        q: 'Can you build a custom AI solution for my specific industry?',
        a: 'Absolutely. We specialise in building custom AI solutions tailored to specific business contexts and industry requirements. Whether you need a medical imaging AI, a financial fraud detection model, a retail recommendation engine, or a logistics optimisation system — we design everything from scratch around your needs.',
      },
      {
        q: 'Do you work with Large Language Models (LLMs) like GPT?',
        a: 'Yes. We build custom LLM-powered applications including chatbots, RAG (Retrieval-Augmented Generation) systems, document intelligence, and AI copilots. We work with OpenAI, Anthropic, Google, and open-source models like LLaMA depending on your requirements.',
      },
      {
        q: 'How accurate are your AI models?',
        a: 'Accuracy depends on the quality of your data, the complexity of the problem, and the domain. We benchmark every model rigorously during development and share performance metrics transparently. For example, our medical imaging models have achieved 94% accuracy. We always recommend human-in-the-loop review for high-stakes decisions.',
      },
      {
        q: 'Do you handle AI ethics and responsible AI?',
        a: 'Yes — responsible AI is a core part of how we build. We conduct bias assessments, build explainable models where required, document data lineage, and follow ethical AI guidelines. We do not build systems designed to deceive, discriminate unlawfully, or cause harm.',
      },
    ],
  },
  {
    name: 'Projects & Process',
    faqs: [
      {
        q: 'What does your development process look like?',
        a: 'We follow a 6-step process: Discovery → Strategy → Design → Development → Testing → Launch & Support. Projects are delivered in agile sprints with regular demos, progress updates, and your feedback built into every cycle.',
      },
      {
        q: 'How long does a typical project take?',
        a: 'It varies by scope. A focused AI proof-of-concept can take 4–6 weeks. A full-scale enterprise platform typically takes 3–6 months. We give you a detailed timeline estimate during the discovery phase.',
      },
      {
        q: 'Do you offer post-launch support and maintenance?',
        a: 'Yes. We offer ongoing support, monitoring, model retraining, and feature development after launch. Most clients retain us on monthly support agreements to keep their systems optimised and up to date.',
      },
      {
        q: 'Will I own the code and IP when the project is complete?',
        a: 'Yes. All code and deliverables built specifically for your project become your property upon full payment. Our own pre-existing tools and frameworks may be licensed to you as part of the project. This is all clearly defined in the service agreement.',
      },
    ],
  },
  {
    name: 'Pricing & Engagement',
    faqs: [
      {
        q: 'How do you charge for your services?',
        a: 'We offer project-based pricing (fixed scope), time & materials (hourly/daily), and dedicated team models depending on the nature of the engagement. Pricing is discussed transparently during the initial consultation — no hidden fees.',
      },
      {
        q: 'Is there a minimum project size?',
        a: 'We generally work on projects with a minimum budget of $10,000 USD to ensure we can deliver quality outcomes. For startups or early-stage companies, we offer a lightweight discovery sprint to validate ideas before committing to a full build.',
      },
      {
        q: 'Do you offer a free initial consultation?',
        a: 'Yes, absolutely. We offer a free 30-minute consultation to understand your challenge, assess feasibility, and suggest an approach. No obligation — just a genuine conversation about how we might help.',
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-sm leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient grid-overlay pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block bg-white/15 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              FAQ
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Everything you need to know about our AI services, process, and how we work with clients.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.name} delay={i * 0.05}>
              <h2 className="text-lg font-bold text-blue-600 uppercase tracking-wider mb-4">{cat.name}</h2>
              <div className="space-y-3">
                {cat.faqs.map(faq => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection className="bg-blue-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-blue-100 mb-6">We&apos;re happy to answer any specific questions about your project or requirements.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Talk to Us <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
