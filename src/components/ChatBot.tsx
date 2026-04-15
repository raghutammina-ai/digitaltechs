'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  role: 'bot' | 'user'
  text: string
  links?: { label: string; href: string }[]
}

interface KBEntry {
  keywords: string[]
  answer: string
  links?: { label: string; href: string }[]
}

/* ─── Knowledge base ─────────────────────────────────────────────────────── */

const kb: KBEntry[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'start', 'help', 'good morning', 'good afternoon'],
    answer: "Hi there! 👋 I'm DTP's AI Assistant. Ask me anything about our services, industries, pricing, or process.",
    links: [
      { label: 'Our Services', href: '/services' },
      { label: 'Industries', href: '/#industries' },
      { label: 'Book Free Consultation', href: '/contact' },
    ],
  },
  {
    keywords: ['what do you do', 'what is dtp', 'about', 'who are you', 'company', 'digital tech prosperity'],
    answer: "Digital Tech Prosperity is an end-to-end AI and digital solutions company with 10+ years of experience.\n\nWe build:\n• AI applications & LLM integrations\n• Data analytics & intelligence platforms\n• Custom web & mobile software\n• Cloud & automation engineering\n\n200+ projects · 50+ clients · 15+ countries.",
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Services', href: '/services' },
    ],
  },
  {
    keywords: ['service', 'offer', 'provide', 'what can you build', 'capabilities'],
    answer: "Our 6 core service areas:\n\n🧠 AI Application Development\n📊 Data Analytics & Intelligence\n💻 Custom Software Development\n☁️ Cloud & DevOps Engineering\n🔒 Cybersecurity Solutions\n🧪 Intelligent QA & Testing",
    links: [{ label: 'Explore All Services', href: '/services' }],
  },
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'llm', 'gpt', 'chatgpt', 'openai', 'anthropic', 'claude', 'generative', 'rag'],
    answer: "AI is our core specialisation. We work with:\n\n• OpenAI (GPT-4o)\n• Anthropic Claude\n• Google Gemini\n• Open-source (LLaMA, Mistral)\n\nWe build RAG systems, custom agents, computer vision, NLP pipelines, and MLOps infrastructure.",
    links: [{ label: 'AI Services', href: '/services' }],
  },
  {
    keywords: ['data', 'analytics', 'dashboard', 'business intelligence', 'bi', 'pipeline', 'warehouse', 'reporting'],
    answer: "Our Data Analytics & Intelligence service covers:\n\n• Real-time pipelines (Kafka, Spark)\n• Data warehousing (Snowflake, BigQuery)\n• BI dashboards (Tableau, Power BI, custom)\n• Predictive analytics & forecasting",
    links: [{ label: 'Data Analytics', href: '/services' }],
  },
  {
    keywords: ['cloud', 'aws', 'azure', 'gcp', 'devops', 'kubernetes', 'docker', 'terraform', 'automation', 'migration'],
    answer: "Our Cloud & DevOps service includes:\n\n• Cloud architecture & migration (AWS, Azure, GCP)\n• Kubernetes & containers\n• CI/CD pipelines\n• Infrastructure as Code (Terraform)\n• Cost optimisation (typically 20–40% savings)",
    links: [
      { label: 'Cloud Services', href: '/services' },
      { label: 'Security & Compliance', href: '/security' },
    ],
  },
  {
    keywords: ['industry', 'industries', 'sector', 'which industries', 'what sectors'],
    answer: "We serve ALL industries. 6 detailed hubs live:\n\n🏥 Healthcare · 🏦 Finance & Banking\n🛍️ Retail & E-commerce · 🏭 Manufacturing\n🎓 Education · 🚚 Logistics\n\n10 more launching soon.",
    links: [{ label: 'All Industries', href: '/#industries' }],
  },
  {
    keywords: ['healthcare', 'health', 'hospital', 'medical', 'clinical', 'patient', 'hipaa'],
    answer: "Our Healthcare AI solutions include:\n\n• Medical imaging AI — 94% diagnostic accuracy\n• Clinical NLP & documentation automation\n• Patient risk stratification\n• AI-powered scheduling & billing\n\nAll projects are built HIPAA-compliant.",
    links: [{ label: 'AI for Healthcare', href: '/industries/healthcare' }],
  },
  {
    keywords: ['finance', 'banking', 'fintech', 'fraud', 'trading', 'credit', 'risk', 'aml', 'kyc'],
    answer: "Our Finance & Banking AI solutions:\n\n• Real-time fraud & AML detection\n• Trading intelligence — 2M+ events/sec\n• AI credit scoring & risk modelling\n• KYC automation & regulatory reporting\n\n60% fraud reduction for financial clients.",
    links: [{ label: 'AI for Finance', href: '/industries/finance' }],
  },
  {
    keywords: ['price', 'cost', 'pricing', 'how much', 'budget', 'rate', 'fee', 'minimum'],
    answer: "We're transparent about pricing:\n\n💰 Minimum project: $10,000 USD\n\n📋 Engagement models:\n• Fixed-price — defined scope\n• Time & Materials — evolving work\n• Dedicated Team — embedded team\n\nAll pricing discussed in your free consultation.",
    links: [
      { label: 'FAQ — Pricing', href: '/faq' },
      { label: 'Book Free Consultation', href: '/contact' },
    ],
  },
  {
    keywords: ['free consultation', 'consultation', 'book', 'schedule', 'meeting', 'call', 'discovery'],
    answer: "Yes — free 30-minute consultation, no obligation.\n\nIn the call we'll:\n✓ Understand your challenge\n✓ Assess technical feasibility\n✓ Suggest an approach and timeline\n✓ Answer any questions",
    links: [{ label: 'Book Your Free Call', href: '/contact' }],
  },
  {
    keywords: ['timeline', 'how long', 'duration', 'time', 'weeks', 'months', 'deadline', 'delivery'],
    answer: "Typical timelines:\n\n⚡ AI Proof-of-Concept: 4–6 weeks\n🏗️ Full AI Platform: 3–6 months\n🔄 Ongoing Support: Monthly retainer\n\nAgile 2-week sprints with regular demos.",
    links: [{ label: 'FAQ', href: '/faq' }],
  },
  {
    keywords: ['security', 'secure', 'compliance', 'gdpr', 'hipaa', 'soc2', 'iso', 'pci', 'data protection', 'encryption'],
    answer: "Security is built into everything:\n\n✅ GDPR compliant\n✅ HIPAA compliant\n✅ PCI-DSS via certified processors\n🔄 ISO 27001 aligned\n🔄 SOC 2 Type II audit underway\n\nAES-256 at rest · TLS 1.3 in transit.",
    links: [{ label: 'Security Details', href: '/security' }],
  },
  {
    keywords: ['portfolio', 'case study', 'example', 'work', 'previous', 'project', 'proof'],
    answer: "Selected case studies:\n\n• Medical imaging — 94% diagnostic accuracy\n• Trading system — 2M+ events/sec\n• Retail support bot — 72% query automation\n• Predictive maintenance — 38% downtime reduction\n• Government doc AI — 60% faster processing",
    links: [{ label: 'View Portfolio', href: '/portfolio' }],
  },
  {
    keywords: ['career', 'job', 'hiring', 'join', 'vacancy', 'opening', 'apply', 'engineer', 'developer'],
    answer: "We're hiring! Current openings:\n\n👩‍💻 Senior AI/ML Engineer\n🖥️ Full Stack Developer\n🔧 Data Engineer\n☁️ Cloud & DevOps Engineer\n📋 AI Product Manager\n\nAll remote / India, full-time.",
    links: [{ label: 'View Openings', href: '/careers' }],
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'address', 'location', 'india'],
    answer: "Get in touch:\n\n📧 info@digitaltechs.in\n🏢 Headquartered in India\n🌍 Operating in 15+ countries\n🕐 Response within 24 business hours",
    links: [{ label: 'Contact Form', href: '/contact' }],
  },
]

const FALLBACK: KBEntry = {
  keywords: [],
  answer: "Thanks for your question! Our team has a more detailed answer for you.\n\n📧 info@digitaltechs.in\n📝 Or use the contact form for a full response.",
  links: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Read FAQs', href: '/faq' },
  ],
}

function getAnswer(input: string): KBEntry {
  const lower = input.toLowerCase()
  let bestMatch: KBEntry | null = null
  let bestScore = 0

  for (const entry of kb) {
    const score = entry.keywords.reduce(
      (acc, kw) => acc + (lower.includes(kw) ? kw.split(' ').length : 0),
      0
    )
    if (score > bestScore) {
      bestScore = score
      bestMatch = entry
    }
  }

  return bestScore > 0 ? bestMatch! : FALLBACK
}

const quickReplies = [
  'What services do you offer?',
  'How much does a project cost?',
  'How long does a project take?',
  'Do you offer a free consultation?',
  'Are you GDPR / HIPAA compliant?',
]

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hi! 👋 I'm DTP's AI Assistant. Ask me anything about our services, industries, pricing, or process.",
      links: [
        { label: 'Our Services', href: '/services' },
        { label: 'Industries', href: '/#industries' },
        { label: 'Book Free Consultation', href: '/contact' },
      ],
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = (text?: string) => {
    const userMsg = (text ?? input).trim()
    if (!userMsg) return

    setInput('')
    setShowQuickReplies(false)
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      const response = getAnswer(userMsg)
      setMessages(prev => [
        ...prev,
        { role: 'bot', text: response.answer, links: response.links },
      ])
    }, 700)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Chat window ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.92, y: 16  }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-80 sm:w-[360px] flex flex-col overflow-hidden rounded-2xl shadow-2xl"
            style={{
              height: 520,
              background: 'rgba(8, 10, 20, 0.92)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3.5 flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/15 rounded-xl flex items-center justify-center">
                  <Bot size={17} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm leading-tight">DTP AI Assistant</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-white/60 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-6 h-6 bg-blue-600/30 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={12} className="text-blue-300" />
                    </div>
                  )}
                  <div className="max-w-[82%] space-y-2">
                    <div
                      className={`px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                        msg.role === 'bot'
                          ? 'rounded-2xl rounded-tl-sm text-slate-200'
                          : 'rounded-2xl rounded-tr-sm bg-blue-600 text-white'
                      }`}
                      style={
                        msg.role === 'bot'
                          ? { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }
                          : undefined
                      }
                    >
                      {msg.text}
                    </div>
                    {msg.links && msg.links.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {msg.links.map(link => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="inline-block text-xs font-medium px-3 py-1 rounded-full text-blue-300 transition-all"
                            style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}
                            onMouseEnter={e => {
                              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(59,130,246,0.25)'
                            }}
                            onMouseLeave={e => {
                              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(59,130,246,0.12)'
                            }}
                          >
                            {link.label} →
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-6 h-6 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={12} className="text-slate-400" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-6 h-6 bg-blue-600/30 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot size={12} className="text-blue-300" />
                  </div>
                  <div
                    className="flex gap-1.5 items-center px-4 py-3 rounded-2xl rounded-tl-sm"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {[0, 1, 2].map(j => (
                      <span
                        key={j}
                        className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${j * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick replies */}
              {showQuickReplies && !typing && (
                <div className="space-y-2 pt-1">
                  <p className="text-xs text-white/30 font-medium">Quick questions</p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickReplies.map(q => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="text-xs px-3 py-1.5 rounded-full text-slate-400 hover:text-slate-200 transition-all text-left"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)'
                          ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.16)'
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)'
                          ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)'
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="px-3 py-3 flex-shrink-0"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send()}
                  placeholder="Ask about services, pricing…"
                  className="flex-1 px-3.5 py-2.5 text-sm text-slate-200 placeholder-white/25 rounded-xl outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                />
                <button
                  onClick={() => send()}
                  className="w-9 h-9 bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <Send size={14} />
                </button>
              </div>
              <p className="text-center text-white/20 text-xs mt-2">
                Answers sourced from digitaltechs.in
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle button ───────────────────────────────────────────── */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="relative w-14 h-14 text-white rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)',
        }}
        aria-label="Open AI chat assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Sparkles size={22} />
            </motion.div>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#030712] animate-pulse" />
        )}
      </motion.button>

    </div>
  )
}
