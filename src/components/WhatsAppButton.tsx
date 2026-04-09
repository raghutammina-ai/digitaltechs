'use client'

import { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '919000000000' // Replace with actual number
const DEFAULT_MESSAGE = 'Hi Digital Tech Prosperity! I would like to know more about your AI services.'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-4 max-w-xs animate-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-slate-900 text-sm">Chat with us</p>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <X size={14} />
            </button>
          </div>
          <p className="text-slate-500 text-xs mb-3 leading-relaxed">
            Have a question about our AI services? We typically reply within minutes.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white text-sm font-medium py-2 rounded-lg text-center hover:bg-green-600 transition-colors"
          >
            Start Chat on WhatsApp
          </a>
        </div>
      )}

      {/* WhatsApp button */}
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} fill="white" />
      </button>
    </div>
  )
}
