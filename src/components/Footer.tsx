import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Linkedin, ArrowUpRight } from 'lucide-react'

const services = [
  { label: 'AI Application Development',      href: '/services' },
  { label: 'Data Analytics & Intelligence',   href: '/services' },
  { label: 'Digital Product Engineering',     href: '/services' },
  { label: 'Cloud & DevOps Engineering',      href: '/services' },
  { label: 'Cybersecurity Solutions',         href: '/services' },
  { label: 'Intelligent QA & Testing',        href: '/services' },
]

const quickLinks = [
  { href: '/',               label: 'Home' },
  { href: '/services',       label: 'Services' },
  { href: '/about',          label: 'About Us' },
  { href: '/portfolio',      label: 'Portfolio' },
  { href: '/industries',     label: 'Industries' },
  { href: '/blog',           label: 'Blog' },
  { href: '/careers',        label: 'Careers' },
  { href: '/faq',            label: 'FAQ' },
  { href: '/contact',        label: 'Contact' },
]

const legalLinks = [
  { href: '/privacy-policy',   label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/security',         label: 'Security' },
]

export default function Footer() {
  return (
    <footer
      className="relative text-slate-300"
      style={{
        background: 'linear-gradient(160deg, #0f172a 0%, #1e2d4a 50%, #0f172a 100%)',
      }}
    >
      {/* Subtle top border gradient */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, #3b82f6 30%, #06b6d4 70%, transparent)',
        }}
      />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* ── Brand col (spans 4 / 12) ─────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Image
              src="https://www.digitaltechs.in/assets/img/logo/white-logo.png"
              alt="Digital Tech Prosperity"
              width={180}
              height={45}
              className="h-10 w-auto mb-5"
              loading="lazy"
            />

            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-sm">
              Empowering progress with intelligent and scalable digital solutions —
              for industries like Real Estate, Healthcare, Travel &amp; Hospitality,
              Retail, and Agriculture.
            </p>

            {/* LinkedIn only */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/dtplt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="group w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center transition-all duration-300 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/30"
              >
                <Linkedin size={17} className="transition-transform duration-300 group-hover:scale-105" />
              </a>
              <span className="text-xs text-slate-500">Follow us on LinkedIn</span>
            </div>
          </div>

          {/* ── Quick Links (spans 2 / 12) ───────────────────────── */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400 transition-all duration-200"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-200 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services (spans 3 / 12) ──────────────────────────── */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400 transition-all duration-200"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-200 inline-block" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact + CTA (spans 3 / 12) ────────────────────── */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Get in Touch
            </h3>

            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href="mailto:info@digitaltechs.in"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors group"
                >
                  <Mail size={15} className="mt-0.5 text-blue-400 flex-shrink-0" />
                  info@digitaltechs.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={15} className="mt-0.5 text-blue-400 flex-shrink-0" />
                <span>India &middot; Global Delivery</span>
              </li>
            </ul>

            {/* CTA card */}
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-5">
              <p className="text-white font-semibold text-sm mb-1">
                Start a project?
              </p>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Book a free 30-min strategy call — no commitment required.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group"
              >
                Book Free Call
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────── */}
      <div className="border-t border-slate-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} Digital Tech Prosperity. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-slate-300 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
