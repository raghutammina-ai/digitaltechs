import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Lock, Server, Eye, FileCheck, Users, CheckCircle2, ArrowRight, Mail } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Security & Compliance',
  description: 'How Digital Tech Prosperity protects your data — encryption, access control, GDPR, HIPAA, SOC2, and responsible AI practices.',
}

const certifications = [
  { name: 'GDPR', status: 'aligned', desc: 'EU General Data Protection Regulation — full data processing agreements available.' },
  { name: 'HIPAA', status: 'aligned', desc: 'Healthcare data handling aligned with US HIPAA requirements for all health projects.' },
  { name: 'ISO 27001', status: 'aligned', desc: 'Information security management aligned with ISO 27001 principles. Formal audit in progress.' },
  { name: 'SOC 2 Type II', status: 'aligned', desc: 'SOC 2 Type II audit currently underway. Available Q4 2026.' },
  { name: 'PCI-DSS', status: 'aligned', desc: 'Payment data handled through PCI-DSS certified processors only. No raw card data stored.' },
  { name: 'AI Ethics', status: 'aligned', desc: 'Aligned with EU AI Act risk classification framework and responsible AI principles.' },
]

const statusStyles: Record<string, { badge: string; label: string }> = {
  compliant: { badge: 'bg-green-100 text-green-700 border-green-200', label: 'Compliant' },
  aligned:   { badge: 'bg-blue-100 text-blue-700 border-blue-200',   label: 'Aligned' },
  progress:  { badge: 'bg-amber-100 text-amber-700 border-amber-200', label: 'In Progress' },
}

const securityPillars = [
  {
    icon: Lock,
    title: 'Data Encryption',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    points: [
      'AES-256 encryption at rest for all stored data',
      'TLS 1.3 in transit for all API and web traffic',
      'Encrypted backups with independent key management',
      'Database-level encryption for sensitive fields',
    ],
  },
  {
    icon: Users,
    title: 'Access Control',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    points: [
      'Role-based access control (RBAC) on all systems',
      'Multi-factor authentication (MFA) mandatory for all staff',
      'Principle of least privilege enforced across all environments',
      'Quarterly access reviews and offboarding checklists',
    ],
  },
  {
    icon: Server,
    title: 'Infrastructure',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    points: [
      'Hosted on AWS, Azure, and GCP — all ISO 27001 and SOC 2 certified',
      'Private VPCs with no public-facing databases',
      'On-premises and hybrid deployment available for regulated industries',
      'Automated vulnerability scanning and patch management',
    ],
  },
  {
    icon: Eye,
    title: 'Monitoring & Response',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    points: [
      '24/7 security monitoring with anomaly detection',
      'Incident response plan with defined SLAs (P1: <1 hour)',
      'Penetration testing on all production systems annually',
      'Security logging with 12-month audit trail retention',
    ],
  },
  {
    icon: FileCheck,
    title: 'Data Handling',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    points: [
      'Client data never used to train models without explicit consent',
      'Data residency options — EU, US, or India regions available',
      'Formal data processing agreements (DPA) for all clients',
      'Secure deletion procedures with certificate of destruction',
    ],
  },
  {
    icon: Shield,
    title: 'IP & Legal Protection',
    color: 'text-red-600',
    bg: 'bg-red-50',
    points: [
      'NDA signed before any technical discussion',
      'IP ownership transferred to client on project completion',
      'Source code held in escrow for long-term contracts',
      'No use of open-source components with viral (GPL) licences without disclosure',
    ],
  },
]

const responsibleAI = [
  { title: 'Bias Testing', desc: 'All ML models evaluated against protected attributes before deployment. Fairness metrics documented in model cards.' },
  { title: 'Explainability', desc: 'High-stakes decision systems include SHAP/LIME explainability layers and human-in-the-loop review mechanisms.' },
  { title: 'Model Governance', desc: 'Production models versioned, monitored for drift, and subject to scheduled re-evaluation cycles.' },
  { title: 'Data Minimisation', desc: 'We collect and process only the minimum data required for the defined model objective.' },
  { title: 'Transparency', desc: 'Clients receive model cards documenting training data, accuracy benchmarks, known limitations, and intended use.' },
  { title: 'Human Oversight', desc: 'All critical-path AI decisions include a human review step. No fully autonomous high-stakes AI without approval.' },
]

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient grid-overlay pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              Security & Compliance
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Enterprise-Grade Security, Built In From Day One
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl">
              Your data is your most valuable asset. We apply the same security standards we build for our clients to our own systems, processes, and people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                Request Security Documentation <ArrowRight size={18} />
              </Link>
              <a href="mailto:info@digitaltechs.in" className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                <Mail size={18} /> info@digitaltechs.in
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Compliance Status */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Compliance</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Regulatory & Standards Compliance</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Full documentation available for enterprise procurement and legal review upon request.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.name} delay={i * 0.07}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 card-glow h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-slate-900 text-lg">{cert.name}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusStyles[cert.status].badge}`}>
                      {statusStyles[cert.status].label}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Need our Data Processing Agreement, security questionnaire, or pen test reports?{' '}
              <Link href="/contact" className="text-blue-600 font-medium hover:underline">Request documentation →</Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">How We Protect Your Data</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Six Layers of Security</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.08}>
                <div className="h-full">
                  <div className={`w-12 h-12 ${pillar.bg} ${pillar.color} rounded-xl flex items-center justify-center mb-4`}>
                    <pillar.icon size={22} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{pillar.title}</h3>
                  <ul className="space-y-2">
                    {pillar.points.map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={15} className={`${pillar.color} flex-shrink-0 mt-0.5`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Responsible AI</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">AI You Can Trust and Explain</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              As AI makes higher-stakes decisions, fairness, transparency, and human oversight are non-negotiable.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsibleAI.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 card-glow">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Deployment</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Flexible Deployment Options</h2>
            <p className="text-slate-500 mt-3">Choose the deployment model that fits your security and compliance requirements.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Cloud (SaaS)',
                desc: 'Hosted on AWS, Azure, or GCP with our managed security stack. Fastest time-to-value with enterprise SLAs.',
                badge: 'Most Popular',
                badgeColor: 'bg-blue-600 text-white',
                features: ['99.9% uptime SLA', 'Automated backups', 'Global CDN', 'Managed security monitoring'],
              },
              {
                title: 'Private Cloud',
                desc: 'Deployed in your dedicated cloud account. Full isolation with DTP managing the infrastructure.',
                badge: 'Regulated Industries',
                badgeColor: 'bg-indigo-100 text-indigo-700',
                features: ['Your VPC, your control', 'Data residency guarantee', 'Custom compliance policies', 'Dedicated support engineer'],
              },
              {
                title: 'On-Premises',
                desc: 'Deployed entirely within your data centre. Complete data sovereignty with no third-party cloud dependency.',
                badge: 'Government / Defense',
                badgeColor: 'bg-slate-100 text-slate-700',
                features: ['No data leaves your network', 'Air-gapped environments supported', 'Custom hardware sizing', 'On-site deployment team'],
              },
            ].map((option, i) => (
              <AnimatedSection key={option.title} delay={i * 0.1}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-slate-900 text-xl">{option.title}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${option.badgeColor}`}>
                      {option.badge}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{option.desc}</p>
                  <ul className="space-y-2">
                    {option.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={14} className="text-blue-600 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">Have a Security or Compliance Question?</h2>
            <p className="text-blue-100 mb-8">
              Our security team can provide documentation, answer procurement questionnaires, and schedule a technical security review.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                Talk to Our Security Team <ArrowRight size={18} />
              </Link>
              <a href="mailto:info@digitaltechs.in" className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                info@digitaltechs.in
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
