import { CheckCircle2 } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper'

const reasons = [
  {
    title: 'You always know what is happening',
    description:
      'We explain what we are doing, why we are doing it, and what it costs before we start. No surprises on the bill, no work done without your sign-off.',
  },
  {
    title: 'Security is never an afterthought',
    description:
      'Whether we are repairing a laptop or setting up a new website, we consider security at every step. It is part of how we work, not an optional extra.',
  },
  {
    title: 'Solutions sized to your situation',
    description:
      'We do not over-engineer. We give you what you actually need — practical, proportionate, and within your budget — not the most elaborate option.',
  },
  {
    title: 'Local presence, London-wide',
    description:
      'We are based in London and serve clients across the city. If you need us on-site, we can be there. If remote works better, that works too.',
  },
  {
    title: 'One team for everything',
    description:
      'You do not get bounced between departments. The same team that takes your call handles your repair, your website, and your security review.',
  },
]

export function WhyUsSection() {
  return (
    <SectionWrapper id="why-us">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

        {/* Left: heading + CTA */}
        <div className="lg:col-span-2 lg:sticky lg:top-24">
          <SectionHeading
            eyebrow="Why MyC Technologies"
            heading="We take ownership — not just the ticket"
            subheading="There are plenty of support desks. We are a small team that actually cares how your problem ends."
          />
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-colors"
            >
              Get in touch today
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Browse services
            </a>
          </div>
        </div>

        {/* Right: reasons */}
        <ul className="lg:col-span-3 space-y-4">
          {reasons.map(({ title, description }) => (
            <li
              key={title}
              className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70"
            >
              <CheckCircle2
                aria-hidden="true"
                size={20}
                className="shrink-0 mt-0.5 text-indigo-600 dark:text-indigo-400"
                strokeWidth={2}
              />
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-1">
                  {title}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
