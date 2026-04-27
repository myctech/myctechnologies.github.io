interface SectionWrapperProps {
  id?: string
  tinted?: boolean
  className?: string
  children: React.ReactNode
}

export function SectionWrapper({
  id,
  tinted = false,
  className = '',
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={[
        'py-20 lg:py-28',
        tinted ? 'bg-slate-50 dark:bg-slate-900/40' : '',
        className,
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subheading?: string
  centred?: boolean
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  centred = false,
}: SectionHeadingProps) {
  return (
    <div className={centred ? 'text-center mx-auto max-w-2xl mb-14' : 'max-w-xl mb-12'}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  )
}
