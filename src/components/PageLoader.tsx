'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PageLoader() {
  const [loading, setLoading] = useState(false)
  const [width, setWidth] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    setWidth(0)

    // Quickly animate to 80%, then complete
    const t1 = setTimeout(() => setWidth(80), 50)
    const t2 = setTimeout(() => setWidth(100), 400)
    const t3 = setTimeout(() => setLoading(false), 600)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [pathname])

  if (!loading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
