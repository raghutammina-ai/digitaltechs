import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Linkedin, ArrowUpRight } from 'lucide-react'

const companyLinks = [
  { href: '/',          label: 'Home'      },
  { href: '/services',  label: 'Services'  },
  { href: '/about',     label: 'About'     },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/careers',   label: 'Careers'   },
]

const serviceLinks = [
  { label: 'AI Application Development'    },
  { label: 'Data Analytics & Intelligence' },
  { label: 'Digital Product Engineering'   },
  { label: 'Cloud & DevOps Engineering'    },
  { label: 'Cybersecurity Solutions'       },
  { label: 'Intelligent QA & Testing'      },
]

const legalLinks = [
  { href: '/privacy-policy',   label: 'Privacy Policy'  },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/security',         label: 'Security'         },
]

export default function Footer() {
  return (
    <footer className="relative text-slate-300 bg-gradient-to-b from-[#0a0f1c] to-[#05070f]">

      {/* Top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* ── Col 1 — Brand ────────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <Image
              src="https://www.digitaltechs.in/assets/img/logo/white-logo.png"
              alt="Digital Tech Prosperity"
              width={160}
              height={40}
              className="h-9 w-auto"
              loading="lazy"
            />

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Building intelligent, scalable AI solutions for businesses across
              Healthcare, Finance, Retail, and every industry that dares to grow.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/dtplt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="group w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-200 hover:bg-[#0A66C2] hover:border-[#0A66C2]"
              >
                <Linkedin size={15} />
              </a>
              <span className="text-xs text-slate-600">Follow us on LinkedIn</span>
            </div>
          </div>

          {/* ── Col 2 — Company ──────────────────────────────────── */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-200 inline-block flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 — Services ─────────────────────────────────── */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href="/services"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-200 inline-block flex-shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4 — Get in Touch ─────────────────────────────── */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Get in Touch
            </h3>

            <ul className="space-y-4 mb-8">
              {/* Email */}
              <li>
                <a
                  href="mailto:info@digitaltechs.in"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <Mail size={15} className="mt-0.5 text-blue-400 flex-shrink-0" />
                  info@digitaltechs.in
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={15} className="mt-1 text-blue-400 flex-shrink-0" />
                <address className="not-italic leading-relaxed">
                  <span className="text-slate-200 font-medium">Hyderabad, India</span><br />
                  Flat No: #601,<br />
                  Kaakatiya&apos;s Golden Crysta,<br />
                  Lanco Hills Road,<br />
                  Manikonda - 500089
                </address>
              </li>
            </ul>

            {/* CTA card */}
            <div
              className="rounded-2xl p-5"
              style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.18)' }}
            >
              <p className="text-white font-semibold text-sm mb-1">Start a project?</p>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                Book a free 30-min strategy call — no commitment required.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors duration-200 group"
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

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
          <span>© 2025 Digital Tech Prosperity. All rights reserved.</span>
          <div className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-slate-300 transition-colors duration-200"
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
