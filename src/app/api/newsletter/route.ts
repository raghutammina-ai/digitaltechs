import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimit } from '@/lib/rateLimit'
import { sanitize, isValidEmail } from '@/lib/sanitize'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'info@digitaltechs.in'

export async function POST(req: NextRequest) {
  // ── Rate limiting: 3 requests per IP per hour ─────────────────────────────
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  if (!rateLimit(`newsletter:${ip}`, 3, 60 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  // ── Parse and validate ─────────────────────────────────────────────────────
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const email = sanitize(body.email)
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 422 })
  }

  // ── Notify team + confirm to subscriber ───────────────────────────────────
  if (!process.env.RESEND_API_KEY) {
    console.error('[newsletter] RESEND_API_KEY is not set')
    return NextResponse.json(
      { error: 'Email service is not configured. Please try again later.' },
      { status: 503 }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await Promise.all([
      // Internal notification
      resend.emails.send({
        from: 'DTP Website <noreply@digitaltechs.in>',
        to: [TO_EMAIL],
        subject: `New newsletter subscriber: ${email}`,
        html: `
          <div style="font-family: sans-serif; padding: 24px; color: #1e293b;">
            <h2 style="margin: 0 0 12px;">New Newsletter Subscriber</h2>
            <p style="font-size: 15px;">Email: <strong>${email}</strong></p>
            <p style="font-size: 13px; color: #64748b;">Add to your mailing list in Brevo / Mailchimp.</p>
          </div>
        `,
      }),
      // Confirmation to subscriber
      resend.emails.send({
        from: 'Digital Tech Prosperity <noreply@digitaltechs.in>',
        to: [email],
        subject: "You're subscribed to DTP AI Insights",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
            <div style="background: linear-gradient(135deg, #1d4ed8, #4f46e5); padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 20px;">Welcome to DTP AI Insights!</h1>
              <p style="color: #bfdbfe; margin: 4px 0 0; font-size: 14px;">Digital Tech Prosperity</p>
            </div>
            <div style="border: 1px solid #e2e8f0; border-top: none; padding: 32px; border-radius: 0 0 12px 12px; background: #f8fafc;">
              <p style="font-size: 15px; line-height: 1.6; color: #334155;">
                You're now subscribed to our monthly AI Insights newsletter. Expect practical guides, case studies, and industry trends — no spam, ever.
              </p>
              <p style="font-size: 15px; line-height: 1.6; color: #334155;">
                In the meantime, explore our
                <a href="https://www.digitaltechs.in/blog" style="color: #2563eb;">blog</a> for the latest articles.
              </p>
              <p style="font-size: 12px; color: #94a3b8; margin-top: 24px;">
                To unsubscribe, reply to this email with "unsubscribe".<br>
                Digital Tech Prosperity · info@digitaltechs.in
              </p>
            </div>
          </div>
        `,
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[newsletter] email send failed:', err)
    return NextResponse.json(
      { error: 'Subscription failed. Please try again later.' },
      { status: 500 }
    )
  }
}
