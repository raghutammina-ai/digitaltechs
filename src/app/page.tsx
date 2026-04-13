'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AIChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi 👋 How can I help you today?' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return

    const newMessages = [
      ...messages,
      { role: 'user', text: input },
      { role: 'ai', text: 'This is demo AI reply (connect OpenAI later)' }
    ]

    setMessages(newMessages)
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-xl transition"
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 w-80 bg-[#030712] border border-white/10 rounded-xl p-4 shadow-2xl"
        >
          <h3 className="text-white font-semibold mb-3">AI Assistant</h3>

          <div className="h-52 overflow-y-auto space-y-2 mb-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm p-2 rounded ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white text-right'
                    : 'bg-white/10 text-slate-300'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 p-2 rounded bg-white/10 text-white text-sm outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 px-3 rounded text-white text-sm"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
