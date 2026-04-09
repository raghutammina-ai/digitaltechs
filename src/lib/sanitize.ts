/**
 * Strip HTML tags and null bytes from a string.
 * Used for all user-supplied form inputs before sending/storing.
 */
export function sanitize(value: unknown): string {
  if (typeof value !== 'string') return ''
  return value
    .replace(/\0/g, '')           // null bytes
    .replace(/<[^>]*>/g, '')      // HTML tags
    .trim()
}

/** Validate email format */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/** Validate phone — optional field, allow empty */
export function isValidPhone(phone: string): boolean {
  if (!phone) return true
  return /^[+\d\s\-().]{7,20}$/.test(phone)
}
