'use client'

import { useState } from 'react'
import { Calculator, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const industries = [
  'Healthcare', 'Finance & Banking', 'Retail & E-commerce', 'Manufacturing',
  'Logistics', 'Education', 'Real Estate', 'Government', 'Other',
]

const companySizes = [
  { label: 'Startup (1–50)', employees: 25, avgSalary: 60000 },
  { label: 'SME (51–250)', employees: 150, avgSalary: 65000 },
  { label: 'Mid-Market (251–1000)', employees: 600, avgSalary: 70000 },
  { label: 'Enterprise (1000+)', employees: 2000, avgSalary: 75000 },
]

const aiImpactByIndustry: Record<string, { efficiency: number; revenueBoost: number; costSaving: number }> = {
  'Healthcare':           { efficiency: 35, revenueBoost: 20, costSaving: 30 },
  'Finance & Banking':    { efficiency: 40, revenueBoost: 25, costSaving: 35 },
  'Retail & E-commerce':  { efficiency: 30, revenueBoost: 30, costSaving: 25 },
  'Manufacturing':        { efficiency: 38, revenueBoost: 15, costSaving: 40 },
  'Logistics':            { efficiency: 35, revenueBoost: 18, costSaving: 38 },
  'Education':            { efficiency: 28, revenueBoost: 22, costSaving: 20 },
  'Real Estate':          { efficiency: 25, revenueBoost: 20, costSaving: 22 },
  'Government':           { efficiency: 45, revenueBoost: 10, costSaving: 42 },
  'Other':                { efficiency: 30, revenueBoost: 20, costSaving: 28 },
}

export default function ROICalculator() {
  const [industry, setIndustry] = useState('')
  const [sizeIndex, setSizeIndex] = useState(1)
  const [manualHours, setManualHours] = useState(20)
  const [calculated, setCalculated] = useState(false)

  const size = companySizes[sizeIndex]
  const impact = industry ? aiImpactByIndustry[industry] : null

  const annualLaborCost = size.employees * size.avgSalary
  const hoursWastedPerYear = (manualHours / 100) * size.employees * 2000
  const hourlyRate = size.avgSalary / 2000

  const timeSaving = impact ? Math.round(hoursWastedPerYear * (impact.efficiency / 100)) : 0
  const laborSaving = Math.round(timeSaving * hourlyRate)
  const processSaving = impact ? Math.round(annualLaborCost * (impact.costSaving / 100) * 0.15) : 0
  const revenueGain = impact ? Math.round(annualLaborCost * (impact.revenueBoost / 100) * 0.2) : 0
  const totalROI = laborSaving + processSaving + revenueGain
  const implementationCost = Math.round(totalROI * 0.25)
  const netROI = totalROI - implementationCost
  const roiPercent = Math.round((netROI / implementationCost) * 100)

  const fmt = (n: number) => n >= 1000000
    ? `$${(n / 1000000).toFixed(1)}M`
    : `$${(n / 1000).toFixed(0)}K`

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-blue-500/30">
            <Calculator size={14} /> ROI Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            What Could AI Save Your Business?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Get an instant estimate of the ROI you could achieve by adopting AI — based on your industry and company size.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Industry */}
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">Your Industry</label>
              <select
                value={industry}
                onChange={e => { setIndustry(e.target.value); setCalculated(false) }}
                className="w-full bg-slate-700 border border-slate-600 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select industry...</option>
                {industries.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>

            {/* Company size */}
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">Company Size</label>
              <select
                value={sizeIndex}
                onChange={e => { setSizeIndex(Number(e.target.value)); setCalculated(false) }}
                className="w-full bg-slate-700 border border-slate-600 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {companySizes.map((s, i) => <option key={i} value={i}>{s.label}</option>)}
              </select>
            </div>

            {/* Manual work % */}
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Manual/Repetitive Work: <span className="text-blue-400">{manualHours}%</span>
              </label>
              <input
                type="range" min={5} max={80} value={manualHours}
                onChange={e => { setManualHours(Number(e.target.value)); setCalculated(false) }}
                className="w-full accent-blue-500 mt-3"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>5%</span><span>80%</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <button
              onClick={() => industry && setCalculated(true)}
              disabled={!industry}
              className="btn-glow inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              <TrendingUp size={18} /> Calculate My ROI
            </button>
          </div>

          {/* Results */}
          {calculated && impact && (
            <div className="border-t border-slate-700 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-white font-bold text-lg text-center mb-6">
                Estimated Annual Impact for a <span className="text-blue-400">{size.label}</span> {industry} company
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Time Saved',        value: fmt(laborSaving),  sub: `${timeSaving.toLocaleString()} hours/year`,  color: 'text-blue-400' },
                  { label: 'Process Savings',   value: fmt(processSaving), sub: 'Operational cost reduction',                color: 'text-cyan-400' },
                  { label: 'Revenue Uplift',    value: fmt(revenueGain),  sub: 'From AI-driven growth',                     color: 'text-green-400' },
                  { label: 'Net ROI (Year 1)',  value: fmt(netROI),       sub: `${roiPercent}% return`,                     color: 'text-yellow-400' },
                ].map(item => (
                  <div key={item.label} className="bg-slate-700/50 rounded-xl p-4 text-center">
                    <div className={`text-2xl font-black ${item.color}`}>{item.value}</div>
                    <div className="text-white text-xs font-semibold mt-1">{item.label}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-white font-bold">Est. Implementation Investment: <span className="text-blue-300">{fmt(implementationCost)}</span></p>
                  <p className="text-slate-400 text-sm mt-1">
                    Payback period: ~{Math.ceil(12 / (roiPercent / 100))} months · {roiPercent}% first-year ROI
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="btn-glow inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  Get Custom Estimate <ArrowRight size={16} />
                </Link>
              </div>
              <p className="text-slate-600 text-xs text-center mt-3">
                * Estimates based on industry benchmarks. Actual results vary by project scope and implementation.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
