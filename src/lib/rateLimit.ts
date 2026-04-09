/**
 * Simple in-memory rate limiter.
 * For high-traffic production use, replace with @upstash/ratelimit + Redis.
 */

interface Entry {
  count: number
  resetAt: number
}

const store = new Map<string, Entry>()

// Cleanup stale entries every 10 minutes to avoid memory leaks
setInterval(() => {
  const now = Date.now()
  store.forEach((entry, key) => {
    if (now > entry.resetAt) store.delete(key)
  })
}, 10 * 60 * 1000)

/**
 * Returns true if the request is allowed, false if rate-limited.
 * @param key      Unique key (e.g. IP + route)
 * @param limit    Max requests per window
 * @param windowMs Window duration in milliseconds
 */
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const entry = store.get(key)

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (entry.count >= limit) return false
  entry.count++
  return true
}
