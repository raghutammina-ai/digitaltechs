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
  { icon: Mail,   label: 'Email Us',      value: 'info@digitaltechs.in'        },
  { icon: Phone,  label: 'Call Us',       value: '+91 9719245678'              },
  { icon: MapPin, label: 'Headquarters',  value: 'Flat No: #601, Kaakatiya\'s Golden Crysta, Lanco Hills Road, Manikonda - 500089' },
  { icon: Clock,  label: 'Response Time', value: 'Within 24 business hours'    },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus]   = useState<Status>('idle')
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
    <div className="bg-[#030712] min-h-screen pt-24 pb-20">

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <AnimatedSection className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Have a project in mind or just want to explore possibilities?
            We&apos;d love to hear from you.
          </p>
        </AnimatedSection>
      </div>

      {/* Get in Touch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left — contact info */}
          <AnimatedSection direction="right" className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600/15 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon size={17} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-slate-200 font-medium text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Work With Us */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="font-bold text-white text-base mb-4">Why Work With Us?</h3>
              <ul className="space-y-3">
                {[
                  'Free initial consultation',
                  'Dedicated project manager',
                  'Transparent pricing & timelines',
                  'Ongoing post-launch support',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-400 text-sm">
                    <CheckCircle2 size={15} className="text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div
              className="rounded-2xl p-8"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {status === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-green-500/15 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">
                    Thank you for reaching out. We&apos;ll get back to you within 24 business hours.
                    Check your inbox for a confirmation email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl px-4 py-3 text-sm">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name}
                        onChange={handleChange}
                        minLength={2} maxLength={100}
                        className="w-full rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address *</label>
                      <input
                        type="email" name="email" required value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone Number</label>
                      <input
                        type="tel" name="phone" value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Company</label>
                      <input
                        type="text" name="company" value={form.company}
                        onChange={handleChange}
                        className="w-full rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Service of Interest</label>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      className="w-full rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <option value="" className="bg-[#0f172a]">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#0f172a]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Message *</label>
                    <textarea
                      name="message" required value={form.message} rows={5}
                      onChange={handleChange} minLength={10} maxLength={2000}
                      className="w-full rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    />
                    <p className="text-xs text-slate-600 mt-1 text-right">{form.message.length}/2000</p>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
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
          </AnimatedSection>

        </div>
      </div>
    </div>
  )
}
