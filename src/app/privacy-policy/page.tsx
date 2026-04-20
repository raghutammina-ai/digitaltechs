import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Digital Tech Prosperity',
  description: 'Privacy Policy for Digital Tech Prosperity — how we collect, use and protect your data.',
}

const sections = [
  {
    title: '1. Information We Collect',
    content: `When you use our website or contact us, we may collect the following information:\n• Name, email address, phone number, and company name (via our contact form)\n• Usage data such as pages visited, time on site, and browser type (via analytics)\n• Any information you voluntarily provide when communicating with us`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:\n• Respond to your enquiries and provide requested services\n• Send project updates and relevant communications (with your consent)\n• Improve our website and services based on usage patterns\n• Comply with legal obligations\nWe do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: '3. AI Services & Data',
    content: `Digital Tech Prosperity provides AI application development, data analytics, and software services across all industries. Any data shared with us for the purpose of AI development or analytics engagements is:\n• Processed solely for the agreed project scope\n• Subject to a separate Data Processing Agreement (DPA) for enterprise clients\n• Handled in accordance with applicable data protection regulations (GDPR, PDPA, etc.)\n• Never used to train our own models without explicit written consent`,
  },
  {
    title: '4. Cookies',
    content: `Our website uses cookies to enhance your browsing experience:\n• Essential cookies: required for the website to function correctly\n• Analytics cookies: help us understand how visitors use the site (e.g., Google Analytics)\nYou can control cookie settings via the cookie banner on your first visit or through your browser settings.`,
  },
  {
    title: '5. Data Storage & Security',
    content: `Your data is stored securely on servers located in India and/or other regions depending on the service provider. We implement industry-standard security measures including:\n• SSL/TLS encryption for data in transit\n• Access controls and authentication for internal systems\n• Regular security reviews and audits\nWhile we take all reasonable steps to protect your data, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: '6. Data Retention',
    content: `We retain personal data only as long as necessary:\n• Contact form data: up to 2 years from last interaction\n• Client project data: as specified in the service agreement\n• Analytics data: as per the retention settings of the analytics provider\nYou may request deletion of your data at any time by contacting us.`,
  },
  {
    title: '7. Your Rights',
    content: `Depending on your location, you may have the right to:\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data ("right to be forgotten")\n• Object to processing of your data\n• Data portability — receive your data in a structured, machine-readable format\nTo exercise any of these rights, please contact us at info@digitaltechs.in.`,
  },
  {
    title: '8. Third-Party Services',
    content: `We may use third-party services that have their own privacy policies, including:\n• Google Analytics (website analytics)\n• Render (website hosting)\n• Email service providers for transactional emails\nWe are not responsible for the privacy practices of these third parties.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us immediately.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the bottom of this page. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:\n\nDigital Tech Prosperity\nEmail: info@digitaltechs.in\nWebsite: www.digitaltechs.in`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient grid-overlay pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/15 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/20">
            Legal
          </span>
          <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-blue-100">Last updated: April 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="text-slate-600 mb-10 leading-relaxed border-l-4 border-blue-600 pl-4 bg-blue-50 py-4 pr-4 rounded-r-lg">
              Digital Tech Prosperity (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy.
              This policy explains how we collect, use, and safeguard your personal information when you visit
              our website or engage with our AI and digital services.
            </div>

            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h2>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line">{s.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="text-blue-600 hover:underline font-medium">
              Questions? Contact us →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
