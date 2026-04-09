'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  role: 'bot' | 'user'
  text: string
}

const faqs: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'start'],
    answer: 'Hi there! 👋 I\'m DTP\'s AI assistant. I can help you learn about our services, industries we serve, or how to get started. What would you like to know?',
  },
  {
    keywords: ['service', 'what do you do', 'offer', 'provide'],
    answer: 'We offer 4 core services:\n\n🧠 AI Application Development\n📊 Data Analytics & Intelligence\n💻 Custom Software Development\n☁️ Cloud & Automation Engineering\n\nWhich one interests you most?',
  },
  {
    keywords: ['ai', 'machine learning', 'llm', 'chatbot', 'artificial intelligence'],
    answer: 'Our AI services include LLM integrations, custom chatbots, computer vision, NLP, predictive analytics, and MLOps pipelines. We work with OpenAI, Anthropic Claude, Google Gemini, and open-source models. Want to discuss a specific AI use case?',
  },
  {
    keywords: ['industry', 'sector', 'healthcare', 'finance', 'retail', 'manufacturing'],
    answer: 'We serve ALL industries! 🌍\n\nHealthcare, Finance, Retail, Manufacturing, Education, Logistics, Real Estate, Government, Pharma, Energy, Telecom, Agriculture, Legal, Media, Insurance, and Travel.\n\nEvery solution is custom-built for your specific domain.',
  },
  {
    keywords: ['price', 'cost', 'pricing', 'how much', 'budget'],
    answer: 'Project costs vary based on scope and complexity. We offer:\n\n• Fixed-price projects\n• Time & materials\n• Dedicated team models\n\nWe offer a FREE initial consultation to discuss your needs. Would you like to schedule one?',
  },
  {
    keywords: ['time', 'long', 'duration', 'timeline', 'how long'],
    answer: 'Typical timelines:\n\n⚡ AI PoC/Prototype: 4–6 weeks\n🏗️ Full platform: 3–6 months\n🔄 Ongoing support: Monthly retainer\n\nWe give detailed estimates during our free discovery session.',
  },
  {
    keywords: ['contact', 'talk', 'speak', 'call', 'meeting', 'consult'],
    answer: 'Great! You can reach us at:\n\n📧 info@digitaltechs.in\n💬 WhatsApp button (bottom-right corner)\n📝 Contact form at /contact\n\nWe typically respond within 24 hours!',
  },
  {
    keywords: ['portfolio', 'work', 'project', 'case study', 'example'],
    answer: 'We\'ve delivered 200+ projects across 15+ countries! You can explore our portfolio at /portfolio — featuring case studies in healthcare AI, fintech analytics, retail platforms, and more.',
  },
  {
    keywords: ['team', 'who', 'experience', 'founded', 'years'],
    answer: 'Digital Tech Prosperity has 10+ years of experience with teams across India and globally. We\'ve served 50+ enterprise clients across 15+ countries. Visit /about to learn more about our story.',
  },
]

const getAnswer = (input: string): string => {
  const lower = input.toLowerCase()
  for (const faq of faqs) {
    if (faq.keywords.some(k => lower.includes(k))) {
      return faq.answer
    }
  }
  return 'Thanks for your question! For detailed information, I\'d recommend:\n\n📧 Emailing us at info@digitaltechs.in\n📝 Using our contact form at /contact\n\nOur team will get back to you within 24 hours. Is there anything else I can help with?'
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! 👋 I\'m DTP\'s AI assistant. Ask me about our services, industries, pricing, or anything else!' },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { role: 'bot', text: getAnswer(userMsg) }])
    }, 900)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {/* Chat window */}
      {open && (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4" style={{ height: '460px' }}>
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
                  <span className="text-blue-100 text-xs">Online</span>
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
                <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line leading-relaxed ${
                  msg.role === 'bot'
                    ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm'
                    : 'bg-blue-600 text-white rounded-tr-sm'
                }`}>
                  {msg.text}
                </div>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User size={14} className="text-slate-600" />
                  </div>
                )}
              </div>
            ))}
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
                placeholder="Ask about our AI services..."
                className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
              />
              <button
                onClick={send}
                className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0"
              >
                <Send size={15} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 hero-gradient text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all active:scale-95 relative"
        aria-label="Open AI chat"
      >
        {open ? <X size={22} /> : <Bot size={24} />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
    </div>
  )
}
