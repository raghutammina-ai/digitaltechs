'use client'

import { useState } from 'react'
import { Calculator, TrendingUp, ArrowRight, Mail, CheckCircle2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const industries = [
  'Healthcare', 'Finance & Banking', 'Retail & E-commerce', 'Manufacturing',
  'Logistics', 'Education', 'Real Estate', 'Government', 'Other',
]

const companySizes = [
  { label: 'Startup (1–50)',          employees: 25,   avgSalary: 60000 },
  { label: 'SME (51–250)',            employees: 150,  avgSalary: 65000 },
  { label: 'Mid-Market (251–1000)',   employees: 600,  avgSalary: 70000 },
  { label: 'Enterprise (1000+)',      employees: 2000, avgSalary: 75000 },
]

const aiImpactByIndustry: Record<string, { efficiency: number; revenueBoost: number; costSaving: number }> = {
  'Healthcare':          { efficiency: 35, revenueBoost: 20, costSaving: 30 },
  'Finance & Banking':   { efficiency: 40, revenueBoost: 25, costSaving: 35 },
  'Retail & E-commerce': { efficiency: 30, revenueBoost: 30, costSaving: 25 },
  'Manufacturing':       { efficiency: 38, revenueBoost: 15, costSaving: 40 },
  'Logistics':           { efficiency: 35, revenueBoost: 18, costSaving: 38 },
  'Education':           { efficiency: 28, revenueBoost: 22, costSaving: 20 },
  'Real Estate':         { efficiency: 25, revenueBoost: 20, costSaving: 22 },
  'Government':          { efficiency: 45, revenueBoost: 10, costSaving: 42 },
  'Other':               { efficiency: 30, revenueBoost: 20, costSaving: 28 },
}

export default function ROICalculator() {
  const [industry, setIndustry]       = useState('')
  const [sizeIndex, setSizeIndex]     = useState(1)
  const [manualHours, setManualHours] = useState(20)
  const [calculated, setCalculated]   = useState(false)
  const [showModal, setShowModal]     = useState(false)
  const [email, setEmail]             = useState('')
  const [submitted, setSubmitted]     = useState(false)
  const [emailError, setEmailError]   = useState('')

  const size   = companySizes[sizeIndex]
  const impact = industry ? aiImpactByIndustry[industry] : null

  const annualLaborCost   = size.employees * size.avgSalary
  const hoursWastedPerYear = (manualHours / 100) * size.employees * 2000
  const hourlyRate         = size.avgSalary / 2000

  const timeSaving    = impact ? Math.round(hoursWastedPerYear * (impact.efficiency / 100)) : 0
  const laborSaving   = Math.round(timeSaving * hourlyRate)
  const processSaving = impact ? Math.round(annualLaborCost * (impact.costSaving / 100) * 0.15) : 0
  const revenueGain   = impact ? Math.round(annualLaborCost * (impact.revenueBoost / 100) * 0.2) : 0
  const totalROI           = laborSaving + processSaving + revenueGain
  const implementationCost = Math.round(totalROI * 0.25)
  const netROI             = totalROI - implementationCost
  const roiPercent         = Math.round((netROI / implementationCost) * 100)

  const fmt = (n: number) =>
    n >= 1000000 ? `$${(n / 1000000).toFixed(1)}M` : `$${(n / 1000).toFixed(0)}K`

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.')
      return
    }
    setEmailError('')
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-slate-900 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-500/30">
              <Calculator size={14} /> ROI Calculator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
              What Could AI Save Your Business?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
              Get an instant estimate of the ROI you could achieve by adopting AI — based on your
              industry and company size.
            </p>
          </div>

          {/* Calculator card */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">

            {/* Inputs */}
            <div className="grid md:grid-cols-3 gap-5 mb-8">

              {/* Industry */}
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">
                  Your Industry
                </label>
                <select
                  value={industry}
                  onChange={e => { setIndustry(e.target.value); setCalculated(false) }}
                  className="w-full bg-slate-700/80 border border-slate-600 text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer hover:border-slate-500"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
                >
                  <option value="">Select industry…</option>
                  {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
              </div>

              {/* Company size */}
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">
                  Company Size
                </label>
                <select
                  value={sizeIndex}
                  onChange={e => { setSizeIndex(Number(e.target.value)); setCalculated(false) }}
                  className="w-full bg-slate-700/80 border border-slate-600 text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer hover:border-slate-500"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
                >
                  {companySizes.map((s, i) => <option key={i} value={i}>{s.label}</option>)}
                </select>
              </div>

              {/* Slider */}
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">
                  Manual / Repetitive Work
                  <span className="text-blue-400 ml-1">{manualHours}%</span>
                </label>
                <div className="mt-3">
                  <input
                    type="range" min={5} max={80} step={5} value={manualHours}
                    onChange={e => { setManualHours(Number(e.target.value)); setCalculated(false) }}
                    className="w-full accent-blue-500 h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1.5">
                    <span>5%</span>
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculate button */}
            <div className="text-center mb-8">
              <button
                onClick={() => industry && setCalculated(true)}
                disabled={!industry}
                className="btn-glow inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 disabled:shadow-none"
              >
                <TrendingUp size={18} /> Calculate My ROI
              </button>
            </div>

            {/* Results */}
            <AnimatePresence>
              {calculated && impact && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="border-t border-slate-700 pt-8"
                >
                  <h3 className="text-white font-bold text-lg text-center mb-6">
                    Estimated Annual Impact for a{' '}
                    <span className="text-blue-400">{size.label}</span>{' '}
                    {industry} company
                  </h3>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: 'Time Saved',       value: fmt(laborSaving),   sub: `${timeSaving.toLocaleString()} hrs/yr`, color: 'text-blue-400' },
                      { label: 'Process Savings',  value: fmt(processSaving), sub: 'Operational costs',                    color: 'text-cyan-400' },
                      { label: 'Revenue Uplift',   value: fmt(revenueGain),   sub: 'AI-driven growth',                     color: 'text-green-400' },
                      { label: 'Net ROI (Year 1)', value: fmt(netROI),        sub: `${roiPercent}% return`,                color: 'text-yellow-400' },
                    ].map(item => (
                      <div key={item.label} className="bg-slate-700/60 border border-slate-600/50 rounded-xl p-4 text-center">
                        <div className={`text-2xl sm:text-3xl font-black ${item.color} tabular-nums`}>{item.value}</div>
                        <div className="text-white text-xs font-semibold mt-1.5">{item.label}</div>
                        <div className="text-slate-400 text-xs mt-0.5">{item.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Summary bar */}
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="text-white font-bold text-sm sm:text-base">
                        Est. Implementation: <span className="text-blue-300">{fmt(implementationCost)}</span>
                      </p>
                      <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                        Payback period: ~{Math.ceil(12 / (roiPercent / 100))} months · {roiPercent}% first-year ROI
                      </p>
                    </div>
                    <button
                      onClick={() => setShowModal(true)}
                      className="btn-glow inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all whitespace-nowrap flex-shrink-0 shadow-lg"
                    >
                      <Mail size={16} /> Get Detailed Report
                    </button>
                  </div>

                  <p className="text-slate-600 text-xs text-center">
                    * Estimates based on industry benchmarks. Actual results vary by project scope.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Email Capture Modal ────────────────────────────────────────────── */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !submitted && setShowModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
            >
              <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 pointer-events-auto relative">

                {/* Close */}
                {!submitted && (
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}

                {!submitted ? (
                  <>
                    {/* Icon */}
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-5">
                      <Calculator size={22} className="text-white" />
                    </div>

                    <h3 className="text-slate-900 font-extrabold text-xl mb-1 tracking-tight">
                      Get Your Detailed AI ROI Report
                    </h3>
                    <p className="text-slate-500 text-sm mb-2 leading-relaxed">
                      We&apos;ll send a personalised breakdown of your{' '}
                      <span className="text-blue-600 font-semibold">{fmt(netROI)} estimated ROI</span>{' '}
                      with implementation steps tailored to your industry.
                    </p>

                    {/* What you get */}
                    <ul className="space-y-1.5 mb-6 mt-4">
                      {[
                        'Detailed cost-savings breakdown',
                        'AI use-case recommendations for your industry',
                        'Implementation roadmap & timeline',
                        'Free 30-min strategy call included',
                      ].map(item => (
                        <li key={item} className="flex items-center gap-2 text-slate-600 text-xs">
                          <CheckCircle2 size={14} className="text-blue-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <form onSubmit={handleEmailSubmit} className="space-y-3">
                      <div>
                        <input
                          type="email"
                          placeholder="Enter your work email"
                          value={email}
                          onChange={e => { setEmail(e.target.value); setEmailError('') }}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                        {emailError && (
                          <p className="text-rose-500 text-xs mt-1">{emailError}</p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn-glow w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                      >
                        <Mail size={16} /> Send Me the Report
                      </button>
                      <p className="text-slate-400 text-xs text-center">
                        No spam. Unsubscribe any time.
                      </p>
                    </form>
                  </>
                ) : (
                  /* Success state */
                  <div className="text-center py-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
                    >
                      <CheckCircle2 size={32} className="text-green-600" />
                    </motion.div>
                    <h3 className="text-slate-900 font-extrabold text-xl mb-2">Report on its way!</h3>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                      Check your inbox at <span className="text-blue-600 font-medium">{email}</span>.
                      We typically respond within a few hours.
                    </p>
                    <button
                      onClick={() => { setShowModal(false); setSubmitted(false); setEmail('') }}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all text-sm"
                    >
                      Done <ArrowRight size={15} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
