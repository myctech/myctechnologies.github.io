import {
  Bug,
  ClipboardList,
  HardDrive,
  Globe,
  LayoutDashboard,
  RotateCcw,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { ServiceCard } from '../ui/ServiceCard'
import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper'

const services = [
  {
    icon: Wrench,
    title: 'Computer Repair',
    description:
      'Slow machines, hardware faults, broken screens — we diagnose the root cause and fix it properly, so the same issue does not come back.',
  },
  {
    icon: Globe,
    title: 'Website Design',
    description:
      'Clean, fast, mobile-first websites built to represent your business well. From a simple landing page to a full small-business site.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Assessments',
    description:
      'A thorough review of your systems and practices. We identify real vulnerabilities and give you a clear, prioritised action plan.',
  },
  {
    icon: LayoutDashboard,
    title: 'Desktop Customisation',
    description:
      'Your setup, optimised for you. Software configuration, workflow improvements, and personalisation that saves time every day.',
  },
  {
    icon: Bug,
    title: 'Virus & Malware Removal',
    description:
      'Full removal of malicious software followed by a clean-state check. We also advise on how to avoid reinfection.',
  },
  {
    icon: HardDrive,
    title: 'Data Backup',
    description:
      'Reliable backup routines configured around your needs. Protect your files before a failure happens — not after.',
  },
  {
    icon: RotateCcw,
    title: 'Data Recovery',
    description:
      'Lost data from a failed drive, accidental deletion, or system crash? We use proven recovery methods to get back what matters.',
  },
  {
    icon: ClipboardList,
    title: 'Security Policy Development',
    description:
      'Clear, proportionate security policies written for your organisation — practical enough to actually follow, thorough enough to make a difference.',
  },
]

export function ServicesSection() {
  return (
    <SectionWrapper id="services" tinted>
      <SectionHeading
        eyebrow="What we do"
        heading="One team. Eight services."
        subheading="Whether it's a single broken device or a full security review, we cover the full spectrum of IT needs for individuals and small businesses."
        centred
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>

      {/* Section CTA */}
      <div className="text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Not sure which service you need?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
        >
          Describe your problem and we will point you in the right direction
        </a>
      </div>
    </SectionWrapper>
  )
}
