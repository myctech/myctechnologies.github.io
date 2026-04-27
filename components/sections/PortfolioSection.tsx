import {
  ClipboardList,
  Globe,
  HardDrive,
  LayoutDashboard,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react'
import { PortfolioCard } from '../ui/PortfolioCard'
import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper'

const projects = [
  {
    title: 'Small Business Website',
    category: 'Website Design',
    icon: Globe,
    gradient: 'bg-gradient-to-br from-indigo-500 to-violet-600',
  },
  {
    title: 'Security Posture Review',
    category: 'Cybersecurity',
    icon: ShieldCheck,
    gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
  },
  {
    title: 'Drive Data Recovery',
    category: 'Data Recovery',
    icon: RotateCcw,
    gradient: 'bg-gradient-to-br from-sky-500 to-blue-600',
  },
  {
    title: 'Organisational Security Policy',
    category: 'Policy Development',
    icon: ClipboardList,
    gradient: 'bg-gradient-to-br from-slate-600 to-slate-800',
  },
  {
    title: 'Workstation Backup Strategy',
    category: 'Data Backup',
    icon: HardDrive,
    gradient: 'bg-gradient-to-br from-amber-500 to-orange-600',
  },
  {
    title: 'Developer Workstation Setup',
    category: 'Desktop Customisation',
    icon: LayoutDashboard,
    gradient: 'bg-gradient-to-br from-purple-500 to-fuchsia-600',
  },
]

export function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" tinted>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <SectionHeading
          eyebrow="Our work"
          heading="Projects we have handled"
          subheading="A sample of the service areas we have worked in. Real project details coming soon."
        />
        <a
          href="#contact"
          className="shrink-0 self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 transition-colors"
        >
          Discuss your project
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <PortfolioCard key={p.title} {...p} />
        ))}
      </div>

      <p className="mt-8 text-xs text-center text-slate-400 dark:text-slate-600">
        Case study screenshots and project details will be added here.{' '}
        <a href="#contact" className="underline underline-offset-2 hover:text-indigo-500 transition-colors">
          Contact us to discuss your requirements.
        </a>
      </p>
    </SectionWrapper>
  )
}
