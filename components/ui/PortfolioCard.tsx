import type { LucideIcon } from 'lucide-react'

interface PortfolioCardProps {
  title: string
  category: string
  icon: LucideIcon
  gradient: string
}

export function PortfolioCard({ title, category, icon: Icon, gradient }: PortfolioCardProps) {
  return (
    /*
     * role="img" + aria-label gives screen readers a complete description of
     * the card without relying on the opacity-0 overlay (which IS in the DOM
     * and WOULD be read, but the label is cleaner and more explicit).
     */
    <div
      role="img"
      aria-label={`${title} — ${category}`}
      className={`group relative overflow-hidden rounded-2xl aspect-[4/3] ${gradient}`}
    >
      {/* Decorative background circles */}
      <div aria-hidden="true" className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
      <div aria-hidden="true" className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-white/5" />

      {/* Category label (always visible) */}
      <p className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-widest text-white/70 group-hover:opacity-0 transition-opacity duration-200">
        {category}
      </p>

      {/* Service icon — decorative, meaning conveyed by aria-label above */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <Icon size={26} className="text-white" strokeWidth={1.75} />
        </div>
      </div>

      {/* Hover overlay — aria-hidden because the card's aria-label covers it */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60 mb-1.5">
          {category}
        </span>
        <p className="font-semibold text-white text-base leading-snug">{title}</p>
        <p className="mt-2 text-xs text-white/50 italic">
          [Placeholder — replace with real project details]
        </p>
      </div>
    </div>
  )
}
