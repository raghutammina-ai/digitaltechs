'use client'

import { useState, useEffect, useRef } from 'react'

interface Props {
  target: number
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({ target, suffix = '', duration = 2000, className = '' }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const startAnimation = () => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const animate = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        // Ease out
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * target))
        if (progress < 1) requestAnimationFrame(animate)
        else setCount(target)
      }
      requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startAnimation()
      },
      { threshold: 0 }
    )
    if (ref.current) {
      // If already in viewport on mount, start immediately
      const rect = ref.current.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        startAnimation()
      } else {
        observer.observe(ref.current)
      }
    }
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
