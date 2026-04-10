import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimit } from '@/lib/rateLimit'
import { sanitize, isValidEmail, isValidPhone } from '@/lib/sanitize'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'info@digitaltechs.in'

export async function POST(req: NextRequest) {
  // ── Rate limiting: 5 submissions per IP per hour ──────────────────────────
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  if (!rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  // ── Parse body ─────────────────────────────────────────────────────────────
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // ── Sanitize inputs ────────────────────────────────────────────────────────
  const name    = sanitize(body.name)
  const email   = sanitize(body.email)
  const phone   = sanitize(body.phone)
  const company = sanitize(body.company)
  const service = sanitize(body.service)
  const message = sanitize(body.message)

  // ── Validate required fields ───────────────────────────────────────────────
  const errors: string[] = []
  if (!name || name.length < 2 || name.length > 100)
    errors.push('Name must be between 2 and 100 characters.')
  if (!email || !isValidEmail(email))
    errors.push('A valid email address is required.')
  if (!isValidPhone(phone))
    errors.push('Phone number format is invalid.')
  if (!message || message.length < 10 || message.length > 2000)
    errors.push('Message must be between 10 and 2000 characters.')

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  // ── Send notification email to the team ───────────────────────────────────
  if (!process.env.RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY is not set')
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact us directly at info@digitaltechs.in' },
      { status: 503 }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'DTP Website <noreply@digitaltechs.in>',
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New contact from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="background: linear-gradient(135deg, #1d4ed8, #4f46e5); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
            <p style="color: #bfdbfe; margin: 4px 0 0; font-size: 14px;">Digital Tech Prosperity Website</p>
          </div>
          <div style="border: 1px solid #e2e8f0; border-top: none; padding: 32px; border-radius: 0 0 12px 12px; background: #f8fafc;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; font-size: 14px; color: #2563eb;">
                  <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Phone</td>
                <td style="padding: 8px 0; font-size: 14px; color: #0f172a;">${phone}</td>
              </tr>` : ''}
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Company</td>
                <td style="padding: 8px 0; font-size: 14px; color: #0f172a;">${company}</td>
              </tr>` : ''}
              ${service ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; vertical-align: top;">Service</td>
                <td style="padding: 8px 0; font-size: 14px; color: #0f172a;">${service}</td>
              </tr>` : ''}
              <tr>
                <td colspan="2" style="padding-top: 16px;">
                  <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                    <p style="font-size: 13px; color: #64748b; margin: 0 0 8px;">Message</p>
                    <p style="font-size: 14px; color: #1e293b; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </div>
                </td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <a href="mailto:${email}?subject=Re: Your enquiry to Digital Tech Prosperity"
                style="display: inline-block; background: #2563eb; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">
                Reply to ${name}
              </a>
            </div>
          </div>
        </div>
      `,
    })

    // ── Send confirmation email to the sender ────────────────────────────────
    await resend.emails.send({
      from: 'Digital Tech Prosperity <noreply@digitaltechs.in>',
      to: [email],
      subject: "We've received your message — Digital Tech Prosperity",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="background: linear-gradient(135deg, #1d4ed8, #4f46e5); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Thanks for reaching out, ${name}!</h1>
            <p style="color: #bfdbfe; margin: 4px 0 0; font-size: 14px;">Digital Tech Prosperity</p>
          </div>
          <div style="border: 1px solid #e2e8f0; border-top: none; padding: 32px; border-radius: 0 0 12px 12px; background: #f8fafc;">
            <p style="font-size: 15px; line-height: 1.6; color: #334155;">
              We've received your message and will get back to you within <strong>24 business hours</strong>.
            </p>
            <p style="font-size: 15px; line-height: 1.6; color: #334155;">
              In the meantime, feel free to explore our
              <a href="https://www.digitaltechs.in/services" style="color: #2563eb;">services</a> or
              <a href="https://www.digitaltechs.in/portfolio" style="color: #2563eb;">portfolio</a>.
            </p>
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 24px 0;">
              <p style="font-size: 13px; color: #64748b; margin: 0 0 4px;">Your message</p>
              <p style="font-size: 14px; color: #1e293b; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="font-size: 13px; color: #94a3b8; margin-top: 24px;">
              Digital Tech Prosperity · info@digitaltechs.in · digitaltechs.in
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] email send failed:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please email us directly at info@digitaltechs.in' },
      { status: 500 }
    )
  }
}
