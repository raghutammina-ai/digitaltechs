'use client'

// Note: metadata for this page is set in layout.tsx (client components cannot export metadata)
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const services = [
  'AI Application Development',
  'Data Analytics & Intelligence',
  'Custom Software Development',
  'Cloud & Automation Engineering',
  'Other / General Enquiry',
]

const contactInfo = [
  { icon: Mail,    label: 'Email Us',       value: 'info@digitaltechs.in' },
  { icon: Phone,   label: 'Call Us',        value: '+91 (contact via website)' },
  { icon: MapPin,  label: 'Headquarters',   value: 'India · Global Operations' },
  { icon: Clock,   label: 'Response Time',  value: 'Within 24 business hours' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, connect to your backend / email service here
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient grid-overlay pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block bg-white/15 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to explore possibilities? We&apos;d love to hear from you.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <div className="space-y-5 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-slate-700 font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-600 text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Why Work With Us?</h3>
                <ul className="space-y-2 text-blue-100 text-sm">
                  {[
                    'Free initial consultation',
                    'Dedicated project manager',
                    'Transparent pricing & timelines',
                    'Ongoing post-launch support',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-cyan-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500">
                      Thank you for reaching out. We&apos;ll get back to you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                        <input
                          type="text" name="name" required value={form.name}
                          onChange={handleChange} placeholder="John Smith"
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                        <input
                          type="email" name="email" required value={form.email}
                          onChange={handleChange} placeholder="john@company.com"
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel" name="phone" value={form.phone}
                          onChange={handleChange} placeholder="+91 98765 43210"
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                        <input
                          type="text" name="company" value={form.company}
                          onChange={handleChange} placeholder="Acme Corp"
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Service of Interest</label>
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                      <textarea
                        name="message" required value={form.message} rows={5}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, or any questions you have..."
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-glow w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      Send Message <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
