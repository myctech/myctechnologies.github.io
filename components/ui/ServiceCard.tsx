import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <article className="group flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      {/* Icon is decorative — title below provides the accessible label */}
      <div aria-hidden="true" className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/60 transition-colors">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1.5">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
      </div>
    </article>
  )
}
