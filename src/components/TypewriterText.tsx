'use client'

import { useState, useEffect } from 'react'

const phrases = [
  'AI for Healthcare',
  'AI for Finance',
  'AI for Retail',
  'AI for Manufacturing',
  'AI for Education',
  'AI for Logistics',
  'AI for Government',
  'AI for Every Industry',
]

export default function TypewriterText() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((index + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <span className="text-cyan-300">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}
