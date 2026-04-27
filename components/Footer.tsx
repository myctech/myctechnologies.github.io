import { Mail, MapPin, Phone, Shield } from 'lucide-react'

const services = [
  'Computer Repair',
  'Website Design',
  'Cybersecurity Assessments',
  'Desktop Customisation',
  'Virus & Malware Removal',
  'Data Backup & Recovery',
  'Hardware Checks',
  'Security Policy Development',
]

const companyLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#process', label: 'Our Process' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand + contact */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <div aria-hidden="true" className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-sm">
                <Shield size={15} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold tracking-tight text-slate-100">
                MyC{' '}
                <span className="text-indigo-400">Technologies</span>
              </span>
            </a>

            <p className="text-sm leading-relaxed max-w-sm">
              IT services for individuals and small businesses across London.
              Security-aware, practical, and reliably delivered.
            </p>

            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:info@myctechnologies.com"
                  className="flex items-center gap-2.5 hover:text-slate-200 transition-colors"
                >
                  <Mail aria-hidden="true" size={14} className="shrink-0 text-indigo-400" />
                  info@myctechnologies.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447514679634"
                  className="flex items-center gap-2.5 hover:text-slate-200 transition-colors"
                >
                  <Phone aria-hidden="true" size={14} className="shrink-0 text-indigo-400" />
                  +44 7514 679634
                </a>
              </li>
              <li>
                <a
                  href="tel:+447503577956"
                  className="flex items-center gap-2.5 hover:text-slate-200 transition-colors"
                >
                  <Phone aria-hidden="true" size={14} className="shrink-0 text-indigo-400" />
                  +44 7503 577956
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin aria-hidden="true" size={14} className="shrink-0 text-indigo-400" />
                London, United Kingdom
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200 mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-slate-200 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200 mb-5">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="hover:text-slate-200 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200 mb-3">
                Follow us
              </h4>
              <p className="text-xs text-slate-600 italic">
                [Social media links — add when ready]
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} MyC Technologies. All rights reserved.</p>
          <p className="italic">[Privacy policy & terms — add when ready]</p>
        </div>
      </div>
    </footer>
  )
}
