'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const services = [
  'AI Application Development',
  'Data Analytics & Intelligence',
  'Custom Software Development',
  'Cloud & Automation Engineering',
  'Other / General Enquiry',
]

const contactInfo = [
  { icon: Mail,   label: 'Email Us',      value: 'info@digitaltechs.in',        color: '#60a5fa', bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.25)' },
  { icon: Phone,  label: 'Call Us',       value: '+91 9719245678',              color: '#34d399', bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.25)' },
  { icon: MapPin, label: 'Hyderabad',     value: 'Flat No: #601, Kaakatiya\'s Golden Crysta, Lanco Hills Road, Manikonda - 500089', color: '#a78bfa', bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.25)' },
  { icon: Clock,  label: 'Response Time', value: 'Within 24 business hours',    color: '#22d3ee', bg: 'rgba(6,182,212,0.1)',   border: 'rgba(6,182,212,0.25)'  },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClass = "w-full rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
const inputStyle = { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }

export default function ContactPage() {
  const [status, setStatus]     = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res  = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.errors?.join(' ') ?? data.error ?? 'Something went wrong.')
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <div className="bg-[#04040a] min-h-screen text-white">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-block p-[1px] rounded-full mb-6"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(139,92,246,0.4))' }}>
              <span className="flex items-center gap-2 bg-[#04040a] text-blue-300 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest">
                Contact Us
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-[1.04] text-white mb-5">
              Let&apos;s Start a{' '}
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Conversation
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Have a project in mind or just want to explore possibilities? We&apos;d love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="grid lg:grid-cols-5 gap-8">

          {/* ── LEFT: contact info ── */}
          <AnimatedSection direction="right" className="lg:col-span-2 space-y-5">

            {/* Contact info cards */}
            {contactInfo.map((item) => (
              <div key={item.label} className="p-[1px] rounded-2xl"
                style={{ background: `linear-gradient(135deg, ${item.border}, rgba(255,255,255,0.04))` }}>
                <div className="bg-[#07070e] rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                    <item.icon size={17} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.label === 'Hyderabad' ? (
                      <a
                        href="https://maps.google.com/?q=Flat+601+Kaakatiya+Golden+Crysta+Lanco+Hills+Road+Manikonda+Hyderabad+500089"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 font-medium text-sm leading-relaxed hover:text-violet-400 transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 font-medium text-sm leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Why Work With Us */}
            <div className="p-[1px] rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(255,255,255,0.04))' }}>
              <div className="bg-[#07070e] rounded-2xl p-6">
                <h3 className="font-bold text-white text-base mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Free initial consultation',
                    'Dedicated project manager',
                    'Transparent pricing & timelines',
                    'Ongoing post-launch support',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)' }}>
                        <CheckCircle2 size={11} className="text-violet-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* ── RIGHT: form ── */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="p-[1px] rounded-2xl h-full"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.2), rgba(255,255,255,0.05))' }}>
              <div className="bg-[#07070e] rounded-2xl p-8 h-full">

                {status === 'success' ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}>
                      <CheckCircle2 size={32} className="text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-slate-300">
                      Thank you for reaching out. We&apos;ll get back to you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>

                    {status === 'error' && (
                      <div className="flex items-start gap-3 rounded-xl px-4 py-3 text-sm"
                        style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                        <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-red-400">{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name *</label>
                        <input type="text" name="name" required value={form.name}
                          onChange={handleChange} minLength={2} maxLength={100}
                          className={inputClass} style={inputStyle} />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address *</label>
                        <input type="email" name="email" required value={form.email}
                          onChange={handleChange}
                          className={inputClass} style={inputStyle} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number</label>
                        <input type="tel" name="phone" value={form.phone}
                          onChange={handleChange}
                          className={inputClass} style={inputStyle} />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Company</label>
                        <input type="text" name="company" value={form.company}
                          onChange={handleChange}
                          className={inputClass} style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Service of Interest</label>
                      <select name="service" value={form.service} onChange={handleChange}
                        className={inputClass} style={inputStyle}>
                        <option value="" className="bg-[#07070e]">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#07070e]">{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Message *</label>
                      <textarea name="message" required value={form.message} rows={5}
                        onChange={handleChange} minLength={10} maxLength={2000}
                        className={`${inputClass} resize-none`} style={inputStyle} />
                      <p className="text-xs text-slate-600 mt-1 text-right">{form.message.length}/2000</p>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full font-bold py-4 rounded-xl text-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)', boxShadow: '0 0 30px rgba(99,102,241,0.35)' }}
                    >
                      {status === 'loading' ? (
                        <><Loader2 size={18} className="animate-spin" /> Sending...</>
                      ) : (
                        <>Send Message <Send size={16} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  )
}
