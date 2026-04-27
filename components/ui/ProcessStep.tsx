interface ProcessStepProps {
  number: number
  title: string
  description: string
  isLast?: boolean
}

export function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  const stepLabel = `Step ${number}`

  return (
    <div className="relative flex flex-col items-center text-center px-4">
      {/* Connector line between steps (desktop only, not after last step) */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-6 left-[calc(50%+2.5rem)] right-0 h-px bg-gradient-to-r from-indigo-300/50 to-transparent dark:from-indigo-700/40"
        />
      )}

      {/* Step number badge — aria-label reads "Step 1" rather than just "01" */}
      <div
        role="img"
        aria-label={stepLabel}
        className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-indigo-500/25 mb-5"
      >
        <span aria-hidden="true">{String(number).padStart(2, '0')}</span>
      </div>

      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[14rem]">
        {description}
      </p>
    </div>
  )
}
