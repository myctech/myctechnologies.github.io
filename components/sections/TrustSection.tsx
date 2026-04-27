import { Lock, MapPin, MessageCircle, Users } from 'lucide-react'

const pillars = [
  {
    icon: MapPin,
    title: 'London-based',
    description: 'We are local. We understand the city and the people in it.',
  },
  {
    icon: Lock,
    title: 'Security-first',
    description: 'Security is built into every solution — not an add-on.',
  },
  {
    icon: MessageCircle,
    title: 'Plain English',
    description: 'Clear explanations at every step. No jargon, no confusion.',
  },
  {
    icon: Users,
    title: 'Personal service',
    description: 'You deal directly with the people doing the work.',
  },
]

export function TrustSection() {
  return (
    <div className="border-y border-slate-200/70 dark:border-slate-800/60 bg-slate-50/60 dark:bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200 dark:lg:divide-slate-800">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center lg:px-8"
            >
              {/* Icon is decorative — dt below provides the label */}
              <div aria-hidden="true" className="shrink-0 w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center">
                <Icon size={18} className="text-indigo-600 dark:text-indigo-400" strokeWidth={1.75} />
              </div>
              <div>
                <dt className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-1">
                  {title}
                </dt>
                <dd className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                  {description}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
