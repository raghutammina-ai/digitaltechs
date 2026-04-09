'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  role: 'bot' | 'user'
  text: string
  links?: { label: string; href: string }[]
}

// ── Knowledge base built from actual website content ──────────────────────────

interface KBEntry {
  keywords: string[]
  answer: string
  links?: { label: string; href: string }[]
}

const kb: KBEntry[] = [
  // Greetings
  {
    keywords: ['hello', 'hi', 'hey', 'start', 'help', 'good morning', 'good afternoon'],
    answer: "Hi there! 👋 I'm the DTP AI Assistant. I can answer questions about our services, industries, pricing, process, careers, and more — all from our actual website content.\n\nWhat would you like to know?",
    links: [
      { label: 'Our Services', href: '/services' },
      { label: 'Industries We Serve', href: '/#industries' },
      { label: 'Book Free Consultation', href: '/contact' },
    ],
  },

  // What is DTP / About
  {
    keywords: ['what do you do', 'what is dtp', 'about', 'who are you', 'company', 'digital tech prosperity', 'what is digital tech'],
    answer: "Digital Tech Prosperity is an end-to-end AI and digital solutions company with 10+ years of experience.\n\nWe build:\n• AI applications & LLM integrations\n• Data analytics & intelligence platforms\n• Custom web & mobile software\n• Cloud & automation engineering\n\nWe've delivered 200+ projects for 50+ clients across 15+ countries.",
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Services', href: '/services' },
    ],
  },

  // Services — general
  {
    keywords: ['service', 'offer', 'provide', 'what can you build', 'capabilities', 'what you do'],
    answer: "We offer 4 core service areas:\n\n🧠 AI Application Development\nCustom LLM apps, chatbots, computer vision, NLP, predictive analytics, MLOps pipelines.\n\n📊 Data Analytics & Intelligence\nReal-time dashboards, BI platforms, data pipelines, and predictive intelligence.\n\n💻 Custom Software Development\nFull-stack web and mobile apps built for scale across any industry.\n\n☁️ Cloud & Automation Engineering\nAWS, Azure, GCP infrastructure, DevOps, CI/CD, and RPA automation.",
    links: [
      { label: 'Explore All Services', href: '/services' },
    ],
  },

  // AI / LLM / Machine Learning
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'llm', 'gpt', 'chatgpt', 'openai', 'anthropic', 'claude', 'gemini', 'llama', 'generative', 'large language model', 'rag', 'retrieval'],
    answer: "Yes — AI is our core specialisation. We work with:\n\n• OpenAI (GPT-4, GPT-4o)\n• Anthropic Claude\n• Google Gemini\n• Open-source models (LLaMA, Mistral)\n\nWe build:\n• RAG (Retrieval-Augmented Generation) systems\n• Custom fine-tuned models\n• AI copilots & document intelligence\n• Computer vision & NLP pipelines\n• MLOps & model monitoring\n\nModel selection depends on your use case, budget, and data privacy requirements.",
    links: [
      { label: 'AI Services', href: '/services' },
      { label: 'RAG vs Fine-Tuning Article', href: '/blog/rag-vs-fine-tuning-llm' },
    ],
  },

  // Data Analytics
  {
    keywords: ['data', 'analytics', 'dashboard', 'business intelligence', 'bi', 'pipeline', 'warehouse', 'reporting', 'insights'],
    answer: "Our Data Analytics & Intelligence service covers:\n\n• Real-time data pipelines (Kafka, Spark, Flink)\n• Data warehousing (Snowflake, BigQuery, Redshift)\n• BI dashboards (Tableau, Power BI, custom)\n• Predictive analytics & forecasting\n• Data quality & governance\n\nWe've built systems processing 2M+ events per second for financial services clients.",
    links: [
      { label: 'Data Analytics Service', href: '/services' },
      { label: 'Real-Time Pipelines Article', href: '/blog/real-time-data-pipelines-financial-services' },
    ],
  },

  // Cloud / DevOps / Automation
  {
    keywords: ['cloud', 'aws', 'azure', 'gcp', 'google cloud', 'devops', 'kubernetes', 'docker', 'terraform', 'automation', 'rpa', 'migration', 'infrastructure'],
    answer: "Our Cloud & Automation Engineering service includes:\n\n• Cloud architecture & migration (AWS, Azure, GCP)\n• Kubernetes & container orchestration\n• CI/CD pipeline design (GitHub Actions, Jenkins)\n• Infrastructure as Code (Terraform)\n• RPA & workflow automation\n• Cost optimisation (typically 20–40% savings)\n\nAll cloud providers we use are ISO 27001 and SOC 2 certified.",
    links: [
      { label: 'Cloud Services', href: '/services' },
      { label: 'Cloud Cost Optimisation Article', href: '/blog/cloud-cost-optimisation-strategies' },
      { label: 'Security & Compliance', href: '/security' },
    ],
  },

  // Industries — general
  {
    keywords: ['industry', 'industries', 'sector', 'vertical', 'which industries', 'what sectors'],
    answer: "We serve ALL industries. Our 6 fully detailed industry hubs:\n\n🏥 Healthcare — 🏦 Finance & Banking\n🛍️ Retail & E-commerce — 🏭 Manufacturing\n🎓 Education — 🚚 Logistics\n\nAnd 10 more coming soon:\nReal Estate · Government · Pharma · Energy · Telecom · Agriculture · Legal · Media · Insurance · Travel\n\nEvery solution is custom-built for your specific domain and compliance requirements.",
    links: [
      { label: 'All Industries', href: '/#industries' },
    ],
  },

  // Healthcare
  {
    keywords: ['healthcare', 'health', 'hospital', 'medical', 'clinical', 'patient', 'hipaa', 'radiology', 'diagnostic', 'ehr'],
    answer: "Our Healthcare AI solutions include:\n\n• Medical imaging AI (radiology, pathology) — 94% diagnostic accuracy\n• Clinical NLP & documentation automation\n• Patient risk stratification & readmission prediction\n• AI-powered scheduling, billing & coding\n• Drug discovery support\n\nAll healthcare projects are built HIPAA-compliant with data residency options.",
    links: [
      { label: 'AI for Healthcare', href: '/industries/healthcare' },
      { label: 'Healthcare AI Article', href: '/blog/generative-ai-healthcare-diagnostics' },
    ],
  },

  // Finance / Banking
  {
    keywords: ['finance', 'banking', 'fintech', 'fraud', 'trading', 'credit', 'risk', 'aml', 'kyc', 'compliance', 'investment', 'portfolio', 'capital markets'],
    answer: "Our Finance & Banking AI solutions include:\n\n• Real-time fraud & AML detection\n• Algorithmic trading intelligence — 2M+ events/sec\n• AI credit scoring & risk modelling\n• KYC automation & regulatory reporting\n• Customer churn prediction\n\nWe've achieved 60% fraud reduction and 3× faster risk decisions for financial services clients.",
    links: [
      { label: 'AI for Finance', href: '/industries/finance' },
      { label: 'Trading Intelligence Article', href: '/blog/real-time-data-pipelines-financial-services' },
    ],
  },

  // Retail / E-commerce
  {
    keywords: ['retail', 'ecommerce', 'e-commerce', 'shop', 'recommendation', 'inventory', 'demand forecast', 'customer support bot', 'product search'],
    answer: "Our Retail & E-commerce AI solutions include:\n\n• Personalised product recommendation engines\n• Demand forecasting & inventory optimisation\n• LLM customer support agents (72% query automation)\n• Visual search & virtual try-on\n• Price optimisation & churn prediction\n\nClients have seen 30% sales increases and 25% inventory reduction.",
    links: [
      { label: 'AI for Retail', href: '/industries/retail' },
      { label: 'Retail AI Article', href: '/blog/ai-in-retail' },
    ],
  },

  // Manufacturing
  {
    keywords: ['manufacturing', 'factory', 'predictive maintenance', 'quality inspection', 'iot', 'industrial', 'supply chain', 'defect', 'downtime'],
    answer: "Our Manufacturing AI solutions include:\n\n• Predictive maintenance (IoT + ML) — 38% downtime reduction\n• Computer vision quality inspection at line speed\n• Supply chain AI & demand sensing\n• Energy consumption optimisation\n• Worker safety AI\n\nOne client reduced unplanned downtime by 38%, saving £1.5M/year.",
    links: [
      { label: 'AI for Manufacturing', href: '/industries/manufacturing' },
      { label: 'Predictive Maintenance Case Study', href: '/blog/predictive-maintenance-manufacturing' },
    ],
  },

  // Logistics
  {
    keywords: ['logistics', 'supply chain', 'route', 'delivery', 'fleet', 'warehouse', 'shipping', 'last mile', 'tracking'],
    answer: "Our Logistics AI solutions include:\n\n• Dynamic route optimisation (25% fuel cost savings)\n• Warehouse automation & AI picking\n• Real-time supply chain visibility\n• Demand sensing & capacity planning\n• Last-mile delivery AI\n\nClients have achieved 45% operational cost savings and 30% faster delivery.",
    links: [
      { label: 'AI for Logistics', href: '/industries/logistics' },
    ],
  },

  // Education
  {
    keywords: ['education', 'edtech', 'learning', 'student', 'school', 'university', 'adaptive learning', 'tutoring', 'grading'],
    answer: "Our Education AI solutions include:\n\n• Adaptive learning platforms (personalised to each student)\n• Student risk prediction & early intervention\n• AI teaching assistants (24/7 Q&A, grading)\n• Admin automation (enrolment, scheduling)\n• Plagiarism detection\n\nClients have seen 35% improved outcomes and 28% dropout reduction.",
    links: [
      { label: 'AI for Education', href: '/industries/education' },
    ],
  },

  // Other industries
  {
    keywords: ['real estate', 'property', 'government', 'pharma', 'pharmaceutical', 'energy', 'utilities', 'telecom', 'agriculture', 'farming', 'legal', 'law', 'media', 'entertainment', 'insurance', 'travel', 'hospitality', 'hotel'],
    answer: "We also serve these industries (pages launching soon):\n\n🏢 Real Estate · 🏛️ Government · 🔬 Pharma & Life Sciences\n⚡ Energy & Utilities · 📡 Telecom · 🌾 Agriculture\n⚖️ Legal & Compliance · 🎬 Media & Entertainment\n🛡️ Insurance · ✈️ Travel & Hospitality\n\nWe actively take on projects in all these verticals now — the dedicated pages are coming shortly.",
    links: [
      { label: 'Register Your Interest', href: '/#industries' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },

  // Pricing
  {
    keywords: ['price', 'cost', 'pricing', 'how much', 'budget', 'rate', 'fee', 'charge', 'expensive', 'affordable', 'minimum'],
    answer: "We're transparent about pricing. Here's how we work:\n\n💰 Minimum project size: $10,000 USD\nFor startups, we offer a lightweight discovery sprint first.\n\n📋 Engagement models:\n• Fixed-price — defined scope, predictable cost\n• Time & Materials — hourly/daily for evolving work\n• Dedicated Team — your embedded DTP team\n\nAll pricing is discussed openly in your free consultation — no hidden fees.",
    links: [
      { label: 'FAQ — Pricing', href: '/faq' },
      { label: 'Book Free Consultation', href: '/contact' },
    ],
  },

  // Free consultation
  {
    keywords: ['free consultation', 'consultation', 'book', 'schedule', 'meeting', 'call', 'talk', 'discovery'],
    answer: "Yes — we offer a free 30-minute consultation with no obligation.\n\nIn the call we'll:\n✓ Understand your challenge\n✓ Assess technical feasibility\n✓ Suggest an approach and rough timeline\n✓ Answer any questions\n\nTo book, just fill in our contact form and mention you'd like a discovery call.",
    links: [
      { label: 'Book Your Free Call', href: '/contact' },
    ],
  },

  // Timeline / How long
  {
    keywords: ['timeline', 'how long', 'duration', 'time', 'weeks', 'months', 'deadline', 'delivery', 'fast', 'quick'],
    answer: "Typical project timelines:\n\n⚡ AI Proof-of-Concept: 4–6 weeks\n🏗️ Full AI Platform: 3–6 months\n🔄 Ongoing Support: Monthly retainer\n\nWe use agile 2-week sprints with regular demos so you see progress throughout. A detailed timeline is provided after the discovery phase.",
    links: [
      { label: 'Our Process', href: '/services' },
      { label: 'FAQ', href: '/faq' },
    ],
  },

  // Process / How it works
  {
    keywords: ['process', 'how does it work', 'methodology', 'approach', 'steps', 'agile', 'sprint', 'delivery'],
    answer: "Our 6-step delivery process:\n\n1️⃣ Discovery — Understand your challenge & goals\n2️⃣ Strategy — Define approach, architecture & timeline\n3️⃣ Design — UX, data model & system design\n4️⃣ Development — Agile sprints with regular demos\n5️⃣ Testing — QA, performance & security testing\n6️⃣ Launch & Support — Go-live + ongoing optimisation\n\nYou're involved at every stage — no black boxes.",
    links: [
      { label: 'Full Process Details', href: '/services' },
    ],
  },

  // Security / Compliance
  {
    keywords: ['security', 'secure', 'compliance', 'gdpr', 'hipaa', 'soc2', 'iso', 'pci', 'data protection', 'encryption', 'safe', 'privacy', 'breach', 'audit', 'certification'],
    answer: "Security and compliance are built into everything we do:\n\n✅ GDPR compliant — DPAs available\n✅ HIPAA compliant — for all health projects\n✅ PCI-DSS — via certified payment processors\n🔄 ISO 27001 aligned — formal audit in progress\n🔄 SOC 2 Type II — audit underway, Q4 2026\n\nAll data is AES-256 encrypted at rest, TLS 1.3 in transit. Cloud hosted on AWS/Azure/GCP (all SOC 2 certified). On-premises deployment available for regulated industries.",
    links: [
      { label: 'Full Security Details', href: '/security' },
    ],
  },

  // IP / Code ownership
  {
    keywords: ['ip', 'intellectual property', 'ownership', 'own the code', 'source code', 'copyright', 'nda', 'confidential'],
    answer: "All code and deliverables built for your project become your property on full payment.\n\nWe also:\n• Sign NDA before any technical discussion\n• Offer source code escrow for long-term contracts\n• Clearly define IP terms in every service agreement\n• Never reuse client-specific code for other clients",
    links: [
      { label: 'Security & IP Protection', href: '/security' },
      { label: 'FAQ — IP Ownership', href: '/faq' },
    ],
  },

  // Support / Maintenance
  {
    keywords: ['support', 'maintenance', 'after launch', 'post launch', 'ongoing', 'retainer', 'sla', 'monitor', 'update'],
    answer: "Yes — we offer ongoing support after every project:\n\n🔧 Monthly support retainers\n📊 Model monitoring & retraining\n🐛 Bug fixes & security patches\n🚀 Feature development\n\nMost clients stay with us on retainer to keep their systems optimised and up to date. SLA response times are defined in the support agreement.",
    links: [
      { label: 'Contact Us', href: '/contact' },
    ],
  },

  // Portfolio / Case studies
  {
    keywords: ['portfolio', 'case study', 'example', 'work', 'previous', 'project', 'client', 'reference', 'proof'],
    answer: "Our portfolio covers AI, data, software, and cloud projects across industries:\n\n• Medical imaging platform — 94% diagnostic accuracy\n• Trading intelligence system — 2M+ events/sec\n• Retail support bot — 72% query automation\n• Predictive maintenance — 38% downtime reduction\n• Government document AI — 60% faster processing\n\nClient names are withheld under NDA, but we can arrange verified references upon request.",
    links: [
      { label: 'View Portfolio', href: '/portfolio' },
      { label: 'Request References', href: '/contact' },
    ],
  },

  // Blog / Insights
  {
    keywords: ['blog', 'article', 'read', 'insight', 'resource', 'guide', 'learn', 'content', 'news'],
    answer: "Our blog covers practical AI, data, and cloud topics:\n\n📰 Recent articles:\n• Generative AI in Healthcare Diagnostics\n• RAG vs Fine-Tuning: Which to Choose\n• Predictive Maintenance in Manufacturing\n• Real-Time Data Pipelines for Finance\n• Cloud Cost Optimisation Strategies\n• Responsible AI: Fair & Explainable Systems\n\nNew articles published monthly.",
    links: [
      { label: 'All Articles', href: '/blog' },
      { label: 'AI & ML Posts', href: '/blog' },
    ],
  },

  // Careers / Jobs
  {
    keywords: ['career', 'job', 'hiring', 'join', 'work for', 'vacancy', 'opening', 'apply', 'engineer', 'developer', 'data scientist', 'recruit'],
    answer: "We're hiring! Current open roles:\n\n👩‍💻 Senior AI/ML Engineer\n🖥️ Full Stack Developer\n🔧 Data Engineer\n☁️ Cloud & DevOps Engineer\n📋 AI Product Manager\n💼 Business Development Manager\n\nAll roles are Remote / India, full-time. We're also open to exceptional talent outside of listed roles.",
    links: [
      { label: 'View All Openings', href: '/careers' },
      { label: 'Apply Now', href: '/contact' },
    ],
  },

  // Contact / Location
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'address', 'location', 'india', 'office', 'where are you', 'based'],
    answer: "Get in touch with us:\n\n📧 info@digitaltechs.in\n🏢 Headquartered in India\n🌍 Operating globally in 15+ countries\n🕐 Response within 24 business hours\n\nWe work fully remote and are flexible on timezones for meetings.",
    links: [
      { label: 'Contact Form', href: '/contact' },
      { label: 'Book a Call', href: '/contact' },
    ],
  },

  // Responsible AI / Ethics
  {
    keywords: ['responsible ai', 'ethical', 'bias', 'fair', 'explainable', 'transparent', 'ethics', 'eu ai act', 'governance'],
    answer: "Responsible AI is core to how we build:\n\n• Bias testing on all ML models before deployment\n• SHAP/LIME explainability for high-stakes systems\n• Human-in-the-loop for critical decisions\n• Model cards documenting training data & limitations\n• EU AI Act risk classification compliance\n• Data minimisation — collect only what's needed",
    links: [
      { label: 'Responsible AI Article', href: '/blog/responsible-ai-fair-explainable' },
      { label: 'Security & AI Governance', href: '/security' },
    ],
  },

  // FAQ
  {
    keywords: ['faq', 'question', 'frequently asked', 'common question'],
    answer: "Our FAQ page covers the most common questions across:\n\n• General — what we do & where we operate\n• AI Services — models, accuracy, ethics\n• Projects & Process — timeline, delivery, IP\n• Pricing & Engagement — costs, minimum, consultation",
    links: [
      { label: 'Read All FAQs', href: '/faq' },
    ],
  },
]

// ── Matching engine — score-based, returns best match ─────────────────────────

const FALLBACK: KBEntry = {
  keywords: [],
  answer: "Thanks for your question! I don't have a specific answer for that, but our team does.\n\n📧 info@digitaltechs.in\n📝 Or use the contact form for a detailed response.",
  links: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Read Our FAQs', href: '/faq' },
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

// ── Quick reply chips shown at start ──────────────────────────────────────────
const quickReplies = [
  'What services do you offer?',
  'Which industries do you serve?',
  'How much does a project cost?',
  'How long does a project take?',
  'Do you offer a free consultation?',
  'Are you GDPR / HIPAA compliant?',
]

// ── Component ─────────────────────────────────────────────────────────────────

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
      setMessages(prev => [...prev, {
        role: 'bot',
        text: response.answer,
        links: response.links,
      }])
    }, 700)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat window */}
      {open && (
        <div
          className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4"
          style={{ height: '520px' }}
        >
          {/* Header */}
          <div className="hero-gradient p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">DTP AI Assistant</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-blue-100 text-xs">Knows our full website</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'bot' && (
                  <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} className="text-white" />
                  </div>
                )}
                <div className="max-w-[80%] space-y-2">
                  <div className={`rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line leading-relaxed ${
                    msg.role === 'bot'
                      ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm'
                      : 'bg-blue-600 text-white rounded-tr-sm'
                  }`}>
                    {msg.text}
                  </div>
                  {/* Link buttons */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {msg.links.map(link => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="inline-block text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User size={14} className="text-slate-600" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex gap-2 justify-start">
                <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-white" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
                  {[0, 1, 2].map(i => (
                    <span key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}

            {/* Quick reply chips */}
            {showQuickReplies && !typing && (
              <div className="space-y-2">
                <p className="text-xs text-slate-400 font-medium px-1">Quick questions:</p>
                <div className="flex flex-wrap gap-1.5">
                  {quickReplies.map(q => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-colors text-left"
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
          <div className="p-3 border-t border-slate-200 bg-white flex-shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Ask about services, pricing, industries…"
                className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
              />
              <button
                onClick={() => send()}
                className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0"
              >
                <Send size={15} />
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-1.5 text-center">
              Answers sourced from digitaltechs.in
            </p>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 hero-gradient text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all active:scale-95 relative"
        aria-label="Open AI chat assistant"
      >
        {open ? <X size={22} /> : <Sparkles size={22} />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
    </div>
  )
}
