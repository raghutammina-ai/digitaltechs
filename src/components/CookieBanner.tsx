'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('dtp-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('dtp-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('dtp-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-in slide-in-from-bottom-4">
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-5">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Cookie size={18} />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-slate-900 text-sm mb-1">We use cookies</p>
            <p className="text-slate-500 text-xs leading-relaxed">
              We use cookies to improve your experience and analyse site usage.
              Read our{' '}
              <Link href="/privacy-policy" className="text-blue-600 underline">
                Privacy Policy
              </Link>{' '}
              to learn more.
            </p>
          </div>
          <button
            onClick={decline}
            className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 bg-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="flex-1 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm font-medium py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
