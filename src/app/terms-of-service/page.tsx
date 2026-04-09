import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Digital Tech Prosperity — rules and conditions governing the use of our website and AI services.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Digital Tech Prosperity website (www.digitaltechs.in) or any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, clients, and anyone who accesses or uses our services.`,
  },
  {
    title: '2. Services',
    content: `Digital Tech Prosperity provides the following services:
• AI Application Development (LLMs, machine learning, computer vision, NLP)
• Data Analytics & Intelligence (BI dashboards, data pipelines, predictive analytics)
• Custom Software Development (web, mobile, SaaS, enterprise applications)
• Cloud & Automation Engineering (cloud migration, DevOps, RPA)

The specific scope, deliverables, timelines, and pricing for client engagements are governed by separate Service Agreements or Statements of Work (SOW) signed between Digital Tech Prosperity and the client.`,
  },
  {
    title: '3. Intellectual Property',
    content: `All content on this website — including text, graphics, logos, icons, images, and software — is the property of Digital Tech Prosperity and is protected by applicable intellectual property laws.

For client projects:
• Code and deliverables developed specifically for a client become the client's property upon full payment, as specified in the service agreement.
• Any pre-existing tools, frameworks, libraries, or IP owned by Digital Tech Prosperity remain our property and may be licensed to the client for use within the project.`,
  },
  {
    title: '4. Client Responsibilities',
    content: `Clients engaging our services agree to:
• Provide accurate and complete project requirements and information
• Respond to requests for feedback or approvals within agreed timeframes
• Ensure they have the legal right to use any data, content, or third-party materials provided to us
• Keep login credentials and access tokens secure and confidential
• Not use our services for unlawful, harmful, or unethical purposes`,
  },
  {
    title: '5. AI Services — Specific Terms',
    content: `Given the nature of AI development:
• AI models and outputs are probabilistic and may not always be 100% accurate. Clients should implement appropriate human review processes for critical decisions.
• Digital Tech Prosperity is not liable for decisions made solely based on AI outputs without human oversight.
• Any data provided for AI training or analysis will be handled under a separate Data Processing Agreement (DPA).
• We adhere to ethical AI principles — we do not build systems designed to deceive, discriminate unlawfully, or cause harm.`,
  },
  {
    title: '6. Payment Terms',
    content: `Payment terms are specified in individual service agreements. Generally:
• Projects require an upfront deposit before work begins
• Milestone-based payments apply for larger engagements
• Invoices are due within 30 days of issue unless otherwise agreed
• Late payments may incur interest charges as specified in the service agreement
• Digital Tech Prosperity reserves the right to suspend services for overdue accounts`,
  },
  {
    title: '7. Confidentiality',
    content: `Both parties agree to keep confidential any proprietary information, trade secrets, or business data shared during the course of an engagement. This obligation survives the termination of any service agreement.

We do not disclose client information to third parties without explicit consent, except where required by law.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the maximum extent permitted by law, Digital Tech Prosperity shall not be liable for:
• Indirect, incidental, or consequential damages arising from use of our services
• Loss of revenue, data, or business opportunities
• Damages resulting from third-party service failures (cloud providers, APIs, etc.)
• Outcomes of AI model predictions or recommendations

Our total liability for any claim shall not exceed the total fees paid by the client in the 3 months prior to the claim.`,
  },
  {
    title: '9. Termination',
    content: `Either party may terminate a service engagement with written notice as specified in the service agreement. Upon termination:
• The client will be invoiced for all work completed to date
• Digital Tech Prosperity will provide all deliverables completed and paid for
• Confidentiality obligations remain in effect
• Access to any shared systems or platforms will be revoked`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms of Service are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in India.

For international clients, dispute resolution may be handled through agreed arbitration as specified in the service agreement.`,
  },
  {
    title: '11. Changes to Terms',
    content: `We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.`,
  },
  {
    title: '12. Contact',
    content: `For questions about these Terms of Service, please contact us:

Digital Tech Prosperity
Email: info@digitaltechs.in
Website: www.digitaltechs.in`,
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient grid-overlay pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/15 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/20">
            Legal
          </span>
          <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
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
            <p className="text-slate-600 mb-10 leading-relaxed border-l-4 border-blue-600 pl-4 bg-blue-50 py-3 rounded-r-lg">
              Please read these Terms of Service carefully before using our website or engaging our services.
              These terms constitute a legally binding agreement between you and Digital Tech Prosperity.
            </p>

            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h2>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line">{s.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 flex justify-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-blue-600 hover:underline font-medium">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
